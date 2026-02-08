
// src/app/api/payment/create-order/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Cashfree } from "cashfree-pg";

// Initialize Cashfree
Cashfree.XClientId = process.env.CASHFREE_APP_ID;
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
Cashfree.XEnvironment = process.env.CASHFREE_ENV === 'production'
    ? Cashfree.Environment.PRODUCTION
    : Cashfree.Environment.SANDBOX;

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

        // Ensure this URL is correct for your environment
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const returnUrl = `${baseUrl}/marketplace/success?order_id=${orderId}`;

        const request: any = {
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

        const response = await Cashfree.PGCreateOrder("2023-08-01", request);

        return NextResponse.json({
            success: true,
            orderId: response.data.order_id,
            paymentSessionId: response.data.payment_session_id
        });

    } catch (error: any) {
        console.error('Create order error:', error?.response?.data || error.message);
        return NextResponse.json({
            success: false,
            error: error?.response?.data?.message || error.message || 'Failed to create order'
        }, { status: 500 });
    }
}
