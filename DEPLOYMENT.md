# XO Rig - Production Deployment Guide

## 📋 Pre-Deployment Checklist

### 1. Environment Variables
Ensure all environment variables are set in your production environment:

```bash
CASHFREE_APP_ID=11976788bb6de23857d5cadb06f8767911
CASHFREE_SECRET_KEY=cfsk_ma_prod_8d6de0bfd1443a3befae2bc6b2383b89_25ff5018
CASHFREE_ENV=production
BASE_URL=https://xorig.gg
PORT=3000
```

### 2. SEO Files
✅ All SEO files are in place:
- `/public/robots.txt` - Search engine crawler instructions
- `/public/sitemap.xml` - Site structure for search engines
- `/public/llms.txt` - AI crawler information

### 3. Payment Integration
✅ Cashfree Payment Gateway configured:
- Production credentials configured
- Return URL set to: `https://xorig.gg/marketplace/success`
- API routes ready:
  - `/api/payment/create-order` - Create new payment order
  - `/api/payment/verify-payment/[orderId]` - Verify payment status

### 4. Data Integrity
✅ All marketplace data complete:
- 6 Intent categories with all subcategories
- All build tiers (XO Spark, Pulse, Nova, Apex)
- Complete legal documentation (Terms, Privacy, Refund, Shipping)

## 🚀 Deployment Steps

### Vercel Deployment (Recommended)

1. **Connect Repository**
   ```bash
   # Push latest changes
   git add .
   git commit -m "Production ready"
   git push origin main
   ```

2. **Configure Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set Environment Variables:
     - `CASHFREE_APP_ID`
     - `CASHFREE_SECRET_KEY`
     - `CASHFREE_ENV=production`
     - `BASE_URL=https://xorig.gg`

3. **Domain Configuration**
   - Add custom domain: `xorig.gg`
   - Update DNS records as per Vercel instructions
   - Wait for SSL certificate provisioning

4. **Post-Deployment Verification**
   - Test payment flow end-to-end
   - Verify all pages load correctly
   - Check robots.txt: `https://xorig.gg/robots.txt`
   - Check sitemap: `https://xorig.gg/sitemap.xml`
   - Check llms.txt: `https://xorig.gg/llms.txt`

## 🔍 Testing Checklist

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] Marketplace shows all intents and builds
- [ ] Payment modal opens and closes
- [ ] Payment order creation works
- [ ] Cashfree payment page loads
- [ ] Success page shows after payment
- [ ] Legal pages are accessible
- [ ] Mobile responsiveness

### Payment Flow Test
1. Select a build from marketplace
2. Click "Buy Now"
3. Fill customer details (name, email, phone)
4. Verify order creation
5. Complete test payment (use Cashfree test cards if testing)
6. Verify redirect to success page
7. Check order ID is displayed

### Cashfree Test Cards (Sandbox Only)
```
Card Number: 4111 1111 1111 1111
CVV: 123
Expiry: Any future date
OTP: 123456
```

## 📊 Monitoring & Analytics

### Add Google Analytics (Recommended)
Add to `src/app/layout.tsx`:
```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Monitoring
- Monitor Cashfree Dashboard for payment status
- Check Next.js logs for errors
- Monitor Vercel Analytics

## 🔒 Security Best Practices

1. **Never commit `.env.local`** - Already in .gitignore ✅
2. **Use environment variables** for all secrets ✅
3. **Verify payment server-side** before fulfillment
4. **Use HTTPS only** in production
5. **Keep dependencies updated** regularly

## 🐛 Troubleshooting

### Payment Issues
- Verify Cashfree credentials are correct
- Check CASHFREE_ENV is set to "production"
- Ensure BASE_URL matches your domain
- Check Cashfree dashboard for error logs

### Page Not Found (404)
- Verify Next.js routing is correct
- Check build completed successfully
- Clear Vercel cache and redeploy

### Environment Variables Not Working
- Redeploy after adding new env vars
- Variables must NOT have quotes in Vercel dashboard
- Restart local dev server after .env.local changes

## 📞 Support Contacts

- **Cashfree Support**: support@cashfree.com
- **Vercel Support**: vercel.com/support
- **Developer**: hello@xorig.gg

## 🎯 Production URLs

- **Main Site**: https://xorig.gg
- **Marketplace**: https://xorig.gg/marketplace
- **Builder**: https://xorig.gg/builder
- **About**: https://xorig.gg/about
- **Robots**: https://xorig.gg/robots.txt
- **Sitemap**: https://xorig.gg/sitemap.xml
- **LLMs**: https://xorig.gg/llms.txt

---
**Last Updated**: February 8, 2026
**Status**: ✅ Production Ready
