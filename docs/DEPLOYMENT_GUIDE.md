# Deployment Guide

Your Next.js portfolio is ready to deploy! Here are the easiest options:

## 🚀 Option 1: Deploy to Vercel (Recommended)

Vercel is made by the creators of Next.js and offers the best integration.

### Step 1: Push to GitHub (if not already done)
```bash
cd c:\Users\mqasi\Downloads\portfolio\qasimauman
git init
git add .
git commit -m "Initial Next.js portfolio migration"
git remote add origin https://github.com/YOUR_USERNAME/portfolio-nextjs.git
git push -u origin main
```

### Step 2: Deploy to Vercel
```bash
npm install -g vercel
vercel
```

Or use the web interface: https://vercel.com/new

### Step 3: Configure
- Select your GitHub repo
- Keep default settings
- Click "Deploy"

**That's it!** Your site will be live in seconds.

---

## 🌐 Option 2: Deploy to Netlify

### Step 1: Build your project
```bash
npm run build
```

### Step 2: Go to Netlify
1. Visit https://app.netlify.com/signup
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your GitHub repo
5. Set build command: `npm run build`
6. Set publish directory: `.next`
7. Click "Deploy"

---

## ☁️ Option 3: Deploy to AWS Amplify

### Step 1: Connect GitHub
1. Go to AWS Amplify Console
2. Click "New app" → "Host web app"
3. Connect your GitHub account
4. Select your portfolio repo

### Step 2: Build settings
- Build command: `npm run build`
- Start command: `npm run dev`

### Step 3: Deploy
Click "Save and deploy"

---

## 🐳 Option 4: Docker + Any Host

### Create Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build and run
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Deploy Docker image to:
- Docker Hub
- AWS ECR
- Google Cloud Run
- Azure Container Registry
- Railway
- Heroku

---

## 📦 Option 5: Traditional Node.js Hosting

### Providers
- **Railway** - https://railway.app
- **Render** - https://render.com
- **Fly.io** - https://fly.io
- **PaaS Providers** - Heroku, Replit, etc.

### General steps
1. Push code to GitHub
2. Connect your GitHub account
3. Select the repo
4. Set build command: `npm run build`
5. Set start command: `npm start`
6. Deploy

---

## 🔍 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All pages load correctly: `npm run dev`
- [ ] Build succeeds: `npm run build`
- [ ] No console errors
- [ ] Links work correctly
- [ ] Images display properly
- [ ] Responsive design works on mobile
- [ ] Navigation works on all pages

### Run this to check:
```bash
npm run lint    # Check for linting errors
npm run build   # Create production build
npm start       # Test production build
```

---

## 📋 Environment Variables

If you need environment variables (API keys, etc.):

### Create `.env.local`
```bash
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_API_KEY=your_secret_key
```

### In your code
```javascript
// Public variables (exposed to browser)
const url = process.env.NEXT_PUBLIC_API_URL;

// Secret variables (server-only)
const apiKey = process.env.SECRET_API_KEY;
```

### Set in hosting provider
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment
- AWS Amplify: App Settings → Environment Variables

---

## 🚀 Deployment Commands Summary

```bash
# Development
npm run dev

# Production build
npm run build

# Test production build locally
npm start

# Lint code
npm run lint

# Deploy to Vercel (after installing vercel CLI)
vercel
```

---

## ✅ After Deployment

1. **Test your live site**
   - Visit your deployed URL
   - Test all pages and links
   - Check mobile responsiveness

2. **Set up domain**
   - Add custom domain in hosting provider settings
   - Update DNS records if needed
   - Enable SSL/HTTPS (usually automatic)

3. **Monitor performance**
   - Use Lighthouse: https://developers.google.com/web/tools/lighthouse
   - Check Core Web Vitals in Vercel/hosting dashboard
   - Monitor uptime

4. **Set up analytics** (optional)
   - Google Analytics
   - Vercel Analytics
   - Plausible Analytics

5. **Update social links**
   - Update links to point to live site
   - Add to social media profiles
   - Update email signature

---

## 🐛 Troubleshooting

### Build fails
```bash
# Clear cache and reinstall
rm -r node_modules
rm package-lock.json
npm install
npm run build
```

### Images not showing
- Check image paths in code
- Verify images exist in `/public/`
- Use Next.js Image component (already done)

### Fonts not loading
- Check font paths in `globals.css`
- Verify fonts exist in `/public/assets/fonts/`
- Check browser console for CORS errors

### Links not working
- Ensure you use `<Link href="...">` not `<a href="...">`
- Check file-based routing structure matches your routes

---

## 📞 Support

Need help? Check:
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Community Discord: https://discord.gg/nextjs

---

**Ready to deploy?** Choose your preferred option above and follow the steps!

Once deployed, share your live site URL for feedback. Good luck! 🎉
