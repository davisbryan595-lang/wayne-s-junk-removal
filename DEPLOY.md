# Deployment Guide - Wayne's Junk & Snow Removal Ltd Website

## Quick Deploy to Vercel

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub**:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/waynes-website.git
   git push -u origin main
   \`\`\`

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

### Option 2: Vercel CLI

1. **Install Vercel CLI**:
   \`\`\`bash
   npm i -g vercel
   \`\`\`

2. **Deploy**:
   \`\`\`bash
   vercel
   \`\`\`

## Customization After Deployment

### 1. Update Contact Information

**Files to modify**:
- `app/layout.tsx` - Schema markup and meta tags
- `components/navbar.tsx` - Header contact info
- `components/hero.tsx` - Hero section CTAs
- `components/contact-form.tsx` - Contact form and business hours
- `components/footer.tsx` - Footer contact details

**Search and replace**:
- Phone: `+13069601411` → Your phone number
- Email: `waynesjunkremoval1@gmail.com` → Your email
- Facebook: Update the Facebook URL
- Business name: Update if different

### 2. Replace Logo

1. Replace `/public/wayneslogo.jpeg` with your logo file
2. Keep the same filename OR update references in:
   - `app/layout.tsx`
   - `components/navbar.tsx`
   - `components/footer.tsx`

### 3. Connect Contact Form

**Option A: Formspree (Recommended)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. In `components/contact-form.tsx`, replace:
   \`\`\`javascript
   const response = await fetch('https://formspree.io/f/your-form-id', {
   \`\`\`
   With your actual form ID

**Option B: Use Mailto Only**
- The form already has mailto fallback
- No additional setup needed

### 4. Update Business Information

**Service Area**: Update in `components/contact-form.tsx`
**Business Hours**: Update in `components/contact-form.tsx` and `components/footer.tsx`
**Services**: Modify service descriptions in `components/services.tsx`

### 5. SEO Optimization

**Update Meta Tags** in `app/layout.tsx`:
- Title and description
- Open Graph images
- Business address in schema markup

**Update Sitemap** in `public/sitemap.xml`:
- Replace domain with your actual domain

### 6. Analytics (Optional)

Add Google Analytics:
1. Get your GA4 tracking ID
2. Add to `app/layout.tsx`:
   \`\`\`javascript
   <Script src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID" />
   <Script id="google-analytics">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'GA_TRACKING_ID');
     `}
   </Script>
   \`\`\`

## Environment Variables

If using additional services, add environment variables in Vercel dashboard:

- `FORMSPREE_FORM_ID` - Your Formspree form ID
- `GOOGLE_ANALYTICS_ID` - Your GA4 tracking ID

## Domain Setup

1. **Custom Domain**:
   - Go to Vercel project dashboard
   - Click "Domains"
   - Add your custom domain
   - Update DNS records as instructed

2. **SSL Certificate**:
   - Automatically provided by Vercel
   - No additional setup required

## Performance Monitoring

**Built-in Vercel Analytics**:
- Automatically enabled
- View in Vercel dashboard

**Core Web Vitals**:
- Site is optimized for excellent scores
- Monitor in Google Search Console

## Maintenance

**Regular Updates**:
- Update testimonials in `components/testimonials.tsx`
- Add new before/after photos in `components/gallery.tsx`
- Update service pricing in `components/services.tsx`

**Content Updates**:
- All content is in component files
- No database required
- Redeploy after changes

## Troubleshooting

**Common Issues**:

1. **Images not loading**:
   - Check file paths in `/public` folder
   - Verify image formats (JPG, PNG, WebP supported)

2. **Contact form not working**:
   - Verify Formspree form ID
   - Check browser console for errors
   - Mailto fallback should always work

3. **Styling issues**:
   - Clear browser cache
   - Check Tailwind CSS classes
   - Verify custom CSS in `globals.css`

**Support**:
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)

## Security

**Best Practices Implemented**:
- No sensitive data in client-side code
- Form validation and sanitization
- HTTPS enforced by Vercel
- No database credentials exposed

## Backup

**Recommended**:
- Keep code in GitHub repository
- Export Vercel project settings
- Backup any custom domain configurations

---

Your website is now ready for professional use! The site is fully responsive, SEO-optimized, and ready to generate leads for Wayne's Junk & Snow Removal Ltd.
