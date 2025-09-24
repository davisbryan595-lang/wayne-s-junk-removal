# Wayne's Junk & Snow Removal Ltd - Professional Website

A modern, responsive website built with Next.js 13+ App Router for Wayne's Junk & Snow Removal Ltd, featuring professional service pages, customer testimonials, and integrated contact forms.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean design with glassmorphism effects and smooth animations
- **SEO Optimized**: Meta tags, structured data, and sitemap included
- **Accessibility**: WCAG AA compliant with proper ARIA labels and focus management
- **Performance**: Optimized images, lazy loading, and efficient code splitting
- **Contact Integration**: Working contact forms with Formspree integration and mailto fallback

## Services Showcased

- Snow Removal (residential and commercial)
- Junk Removal (furniture, appliances, debris)
- Furniture Delivery (transport and assembly)

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **Images**: Next.js Image optimization with WebP/AVIF support
- **Forms**: Formspree integration with mailto fallback
- **Deployment**: Optimized for Vercel hosting

## Getting Started

1. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Run development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Build for production**:
   \`\`\`bash
   npm run build
   \`\`\`

## Customization

### Contact Information
Update contact details in:
- `app/layout.tsx` (schema markup)
- `components/navbar.tsx`
- `components/hero.tsx`
- `components/contact-form.tsx`
- `components/footer.tsx`

### Logo
Replace `/public/wayneslogo.jpeg` with your logo file.

### Colors
Modify the color scheme in `app/globals.css`:
- `--color-primary`: Main brand color
- `--color-primary-dark`: Secondary brand color
- `--color-navy`: Dark accent color

### Form Integration
To connect the contact form:
1. Sign up at [Formspree](https://formspree.io)
2. Replace `your-form-id` in `components/contact-form.tsx` with your Formspree form ID

## Deployment

This site is optimized for Vercel deployment:

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Performance Features

- Image optimization with responsive sizes
- Lazy loading for images and components
- Critical CSS inlining
- Preconnect hints for external resources
- Efficient bundle splitting

## SEO Features

- Structured data (Organization + LocalBusiness)
- Open Graph and Twitter Card meta tags
- XML sitemap
- Robots.txt
- Semantic HTML structure

## Accessibility Features

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader optimizations
- High contrast color ratios
- Focus management

## License

© 2025 Wayne's Junk & Snow Removal Ltd. All rights reserved.
