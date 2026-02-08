// src/app/api/payment/create-order/route.ts

import { NextRequest, NextResponse } from "next/server";
import { cashfree } from "@/lib/cashfree";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { buildName, buildTier, amount, customerName, customerEmail, customerPhone } = body;

        if (!amount || !customerName || !customerEmail || !customerPhone) {
            return NextResponse.json({
                success: false,
                error: 'Missing required fields: amount, customerName, customerEmail, customerPhone'
            }, { status: 400 });
        }

        const buildAmount = parseFloat(amount.toString());
        if (isNaN(buildAmount) || buildAmount <= 0) {
            return NextResponse.json({ success: false, error: 'Invalid order amount' }, { status: 400 });
        }

        const orderId = `XO_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
        const customerId = `CUST_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;

        // Cashfree requires HTTPS URLs
        // For local development, use ngrok or set a dummy URL
        const baseUrl = process.env.BASE_URL || 'https://yourdomain.com'; // Dummy URL for development
        const returnUrl = `${baseUrl}/marketplace/success?order_id=${orderId}`;

        // Log warning if using localhost
        if (baseUrl.includes('localhost')) {
            console.warn('⚠️ WARNING: Cashfree requires HTTPS. Use ngrok for local development. See SETUP_NGROK.md');
        }

        const request = {
            order_amount: buildAmount,
            order_currency: "INR",
            order_id: orderId,
            customer_details: {
                customer_id: customerId,
                customer_phone: customerPhone,
                customer_name: customerName,
                customer_email: customerEmail,
            },
            order_meta: {
                return_url: returnUrl,
            },
            order_note: `XO Rig - ${buildTier || 'Custom'} - ${buildName || 'Build'}`
        };

        console.log('Creating Cashfree order:', { orderId, amount: buildAmount, customer: customerName });

        // Create order using Cashfree SDK v5
        const response = await cashfree.PGCreateOrder(request);

        console.log('Cashfree order created successfully:', response.data.order_id);

        return NextResponse.json({
            success: true,
            orderId: response.data.order_id,
            paymentSessionId: response.data.payment_session_id
        });

    } catch (error: any) {
        console.error('Create order error:', error?.response?.data || error?.message || error);
        return NextResponse.json({
            success: false,
            error: error?.response?.data?.message || error?.message || 'Failed to create order'
        }, { status: 500 });
    }
}
