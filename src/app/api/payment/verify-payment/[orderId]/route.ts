// src/app/api/payment/verify-payment/[orderId]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { cashfree } from "@/lib/cashfree";

export async function GET(req: NextRequest, props: { params: Promise<{ orderId: string }> }) {
    try {
        const params = await props.params;
        const { orderId } = params;
        if (!orderId) {
            return NextResponse.json({ success: false, error: 'Missing orderId' }, { status: 400 });
        }

        const response = await cashfree.PGFetchOrder(orderId);

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
