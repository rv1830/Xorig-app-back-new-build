
// Step Id: 130
// src/lib/cashfree.ts
// This file initializes the Cashfree SDK based on environment.
// It wraps the implementation logic.

import { Cashfree, CFEnvironment } from "cashfree-pg";

// In serverless environments, we must configure this once.
const NEXT_PUBLIC_CASHFREE_ENV = process.env.CASHFREE_ENV || 'sandbox';

Cashfree.XClientId = process.env.CASHFREE_APP_ID || '';
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY || '';
Cashfree.XEnvironment = NEXT_PUBLIC_CASHFREE_ENV === 'production'
    ? CFEnvironment.PRODUCTION
    : CFEnvironment.SANDBOX;

export default Cashfree;

// Note: Ensure CASHFREE_APP_ID and CASHFREE_SECRET_KEY are in your .env.local
