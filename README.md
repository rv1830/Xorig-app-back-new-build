# XO Rig - Custom PC Marketplace

> Intent-driven custom PC builds for India 🇮🇳

![XO Rig](https://xorig.gg/Full%20Logo%20Purple%20NoBG.png)

## 🎯 About

XO Rig builds custom PCs based on **what you do**, not just specifications. Whether you're into competitive gaming, 3D rendering, AI development, or professional video editing, we have optimized builds for your specific intent.

- 🚀 **Intent-Based Selection**: Choose based on your use case
- 💰 **Transparent Pricing**: From ₹35,000 to ₹2,75,000
- 🇮🇳 **Pan-India Delivery**: We ship everywhere
- ⚡ **60-min Response Time**: During business hours
- 🔒 **Secure Payments**: Cashfree Payment Gateway

## 🏗️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Payments**: Cashfree Payment Gateway
- **Deployment**: Vercel
- **Icons**: Lucide React

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/rv1830/Xorig-app-back-new-build.git

# Navigate to directory
cd xorig

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Environment Variables

Create a `.env.local` file with:

```env
CASHFREE_APP_ID=your_app_id_here
CASHFREE_SECRET_KEY=your_secret_key_here
CASHFREE_ENV=production
BASE_URL=http://localhost:3000
PORT=3000
```

## 🗂️ Project Structure

```
xorig/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── marketplace/       # Marketplace pages
│   │   ├── builder/           # PC Builder
│   │   ├── about/             # About page
│   │   ├── trust-safety/      # Trust & Safety
│   │   ├── legal/[slug]/      # Legal pages (dynamic)
│   │   └── api/               # API routes
│   │       └── payment/       # Payment APIs
│   ├── components/            # React components
│   │   ├── marketplace/       # Marketplace components
│   │   ├── Navbar.tsx        # Navigation
│   │   └── Footer.tsx        # Footer
│   ├── data/                  # Data files
│   │   ├── marketplace.ts    # All builds data
│   │   └── legal.ts          # Legal content
│   └── lib/                   # Utilities
│       ├── cashfree.ts       # Cashfree SDK setup
│       └── utils.ts          # Helper functions
├── public/                    # Static files
│   ├── robots.txt            # SEO crawlers
│   ├── sitemap.xml           # SEO sitemap
│   └── llms.txt              # AI crawler info
└── DEPLOYMENT.md             # Deployment guide
```

## 🎮 Intent Categories

### Gaming
- Competitive FPS
- AAA Gaming (1080p/1440p)
- High Refresh + High Settings
- Gaming + Streaming

### Graphics & 3D
- Blender (3D Modeling + Rendering)
- CAD (2D/3D)
- Visualization & Rendering

### AI Workstations
- Starter AI (Single GPU)
- Pro AI (High VRAM)
- Heavy Training (Max VRAM)
- Creator + AI Hybrid

### Photo & Video
- Photo Editing
- 4K Video Editing
- Motion Graphics

### Streaming & Production
- Streaming Starter
- Streaming Pro
- Creator Studio

### Office
- Everyday Value
- Silent Office
- Heavy Multitasking

## 💳 Payment Integration

### Cashfree Payment Flow
1. User selects a build
2. Fills customer details (name, email, phone)
3. Frontend calls `/api/payment/create-order`
4. Cashfree session created
5. User redirected to Cashfree payment page
6. After payment, redirected to `/marketplace/success`

### API Endpoints

#### Create Order
```
POST /api/payment/create-order

Body:
{
  "buildName": "Esports Starter",
  "buildTier": "XO Spark",
  "amount": 45000,
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "customerPhone": "9876543210"
}

Response:
{
  "success": true,
  "orderId": "XO_1234567890_abcd",
  "paymentSessionId": "session_xxx"
}
```

#### Verify Payment
```
GET /api/payment/verify-payment/[orderId]

Response:
{
  "success": true,
  "order": { /* order details */ }
}
```

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment guide.

### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Add environment variables in Vercel dashboard
```

## 📄 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🧪 Testing

### Test Payment Flow (Sandbox)
Use Cashfree test credentials and test cards:
- Card: 4111 1111 1111 1111
- CVV: 123
- OTP: 123456

## 📞 Contact

- **Website**: https://xorig.gg
- **Email**: hello@xorig.gg
- **Phone**: +91 8901089898
- **Location**: Bahadurgarh, Haryana, India

## 📝 Legal

- [Terms & Conditions](https://xorig.gg/legal/terms)
- [Privacy Policy](https://xorig.gg/legal/privacy)
- [Cancellation & Refund](https://xorig.gg/legal/cancellation-refund)
- [Shipping & Exchange](https://xorig.gg/legal/shipping-exchange)

## 🤝 Contributing

This is a private commercial project. For inquiries, contact hello@xorig.gg

## 📜 License

© 2026 XO Rig Computers Pvt. Ltd. All rights reserved.

---

**Built with ❤️ in India**
