// src/lib/cashfree.ts
// This file initializes and exports the Cashfree SDK configuration for v5+

import { Cashfree, CFEnvironment } from "cashfree-pg";

// Get environment configuration
const CASHFREE_ENV = process.env.CASHFREE_ENV || 'sandbox';
const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID || '';
const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY || '';

// Initialize Cashfree with constructor (v5+ syntax)
// new Cashfree(environment, clientId, clientSecret)
const cashfree = new Cashfree(
    CASHFREE_ENV === 'production' ? CFEnvironment.PRODUCTION : CFEnvironment.SANDBOX,
    CASHFREE_APP_ID,
    CASHFREE_SECRET_KEY
);

export { cashfree, Cashfree };

// Note: Ensure CASHFREE_APP_ID and CASHFREE_SECRET_KEY are in your .env.local
