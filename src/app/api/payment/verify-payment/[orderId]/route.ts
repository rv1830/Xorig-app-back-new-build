
// Step Id: 136
// src/app/api/payment/verify-payment/[orderId]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Cashfree } from "cashfree-pg";

// Re-init for this route (Serverless constraint: shared imports sometimes reloaded)
// In a larger app, you'd export a singleton.
Cashfree.XClientId = process.env.CASHFREE_APP_ID;
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
Cashfree.XEnvironment = process.env.CASHFREE_ENV === 'production'
    ? Cashfree.Environment.PRODUCTION
    : Cashfree.Environment.SANDBOX;

export async function GET(req: NextRequest, { params }: { params: { orderId: string } }) {
    try {
        const { orderId } = params;
        if (!orderId) {
            return NextResponse.json({ success: false, error: 'Missing orderId' }, { status: 400 });
        }

        const response = await Cashfree.PGFetchOrder("2023-08-01", orderId);

        return NextResponse.json({
            success: true,
            orderId: response.data.order_id,
            orderStatus: response.data.order_status,
            orderAmount: response.data.order_amount,
            orderNote: response.data.order_note
        });

    } catch (error: any) {
        console.error('Verify payment error:', error?.response?.data || error.message);
        return NextResponse.json({
            success: false,
            error: error?.response?.data?.message || 'Failed to verify payment'
        }, { status: 500 });
    }
}
