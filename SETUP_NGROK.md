# Cashfree Development Setup with ngrok

## Problem
Cashfree requires HTTPS URLs for return_url, but localhost uses HTTP.

## Solution: Use ngrok

### Step 1: Install ngrok
Download from: https://ngrok.com/download
Or install via npm:
```bash
npm install -g ngrok
```

### Step 2: Start your Next.js app
```bash
npm run dev
```

### Step 3: Start ngrok (in another terminal)
```bash
ngrok http 3000
```

### Step 4: Copy the HTTPS URL
You'll see something like:
```
Forwarding  https://abc123.ngrok.io -> http://localhost:3000
```

### Step 5: Update .env.local
```env
BASE_URL=https://abc123.ngrok.io
```

### Step 6: Restart your Next.js app
```bash
npm run dev
```

Now Cashfree will receive: `https://abc123.ngrok.io/marketplace/success?order_id=...`

---

## Alternative: Use Cashfree Test Mode (if available)

Some payment gateways allow HTTP in sandbox/test mode. Check Cashfree documentation.

---

## Production Setup

For production, you'll have your own HTTPS domain:
```env
BASE_URL=https://yourdomain.com
```
