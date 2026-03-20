# Professional Portfolio Website

A modern, responsive, and fully functional portfolio/resume website built with HTML, CSS, and JavaScript.

## 🎯 Features

### ✨ Core Features
- **Responsive Design** - Fully responsive for mobile, tablet, and desktop
- **Modern UI** - Clean, professional, and minimal design
- **Dark Mode** - Toggle between light and dark themes
- **Smooth Animations** - Fade-in effects, hover animations, and transitions
- **Sticky Navigation** - Fixed navigation bar with active link highlighting
- **Contact Form** - Functional contact form with validation
- **Back-to-Top Button** - Smart scroll-to-top button
- **Social Media Links** - Easy access to social profiles

### 🎨 Design Elements
- **Color Scheme** - White background with blue and red accents
- **Typography** - Google Fonts (Poppins & Roboto)
- **Icons** - Font Awesome integration
- **Smooth Scrolling** - Smooth page scrolling with keyboard shortcuts
- **Parallax Effects** - 3D hover effects on profile image

## 📁 File Structure

```
myWS/
├── portfolio.html           # Main HTML file
├── portfolio-styles.css     # Complete CSS styling
├── portfolio-script.js      # JavaScript functionality
└── README.md               # This file
```

## 🚀 Quick Start

### 1. Open in Browser
Simply open `portfolio.html` in any modern web browser:
```bash
# On Windows
start portfolio.html

# On macOS
open portfolio.html

# On Linux
firefox portfolio.html (or your preferred browser)
```

### 2. Local Development Server (Optional)
For best experience with local files, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000/portfolio.html`

## 📋 Sections Overview

### 1. **Navigation Bar**
- Fixed position with smooth scrolling links
- Mobile hamburger menu
- Dark mode toggle button
- Active link highlighting

### 2. **Hero Section (Home)**
- Profile picture with 3D hover effect
- Name and professional title
- Short introduction
- Call-to-action buttons

### 3. **Certificates Section**
- Grid layout with certificate cards
- Image overlay with icons
- Certificate details (title, issuer, date)
- Hover animation effects

### 4. **Projects Section**
- Featured project cards
- Project images with overlay links
- Technology tags
- Hover effects and transitions

### 5. **My Work Section**
- Gallery-style layout
- Work items with overlay information
- Gradient hover effects
- Responsive grid

### 6. **Contact Section**
- Contact form with validation
- Social media links with icons
- Contact information display
- Form success/error messaging

### 7. **Footer**
- Copyright information
- Designer credit

## 🎨 Customization Guide

### Update Personal Information

**In `portfolio.html`:**

1. **Name and Title** (line ~60-62)
   ```html
   <h1 class="hero-title">Hi, I'm <span class="accent-text">Your Name</span></h1>
   <p class="hero-subtitle">Full Stack Developer & Designer</p>
   ```

2. **Profile Picture** (line ~48)
   ```html
   <img src="path/to/your-image.jpg" alt="Profile Picture">
   ```

3. **Introduction Text** (line ~65-69)
   ```html
   <p class="hero-description">
       Your professional introduction goes here...
   </p>
   ```

4. **Certificates** (lines ~125-175)
   - Update certificate titles, issuers, and descriptions
   - Replace placeholder images with your certificate images

5. **Projects** (lines ~212-270)
   - Add your project details, images, and technology tags
   - Update project links

6. **Contact Information** (lines ~365-375)
   - Update email address
   - Update phone number
   - Update location
   - Update social media links

### Change Color Scheme

**In `portfolio-styles.css`:**

Edit CSS variables (lines 7-17):

```css
:root {
    --primary-blue: #0066ff;      /* Main accent color */
    --dark-blue: #0052cc;          /* Darker variant */
    --light-blue: #e6f0ff;         /* Light background */
    --accent-red: #ff3333;         /* Secondary accent */
    --light-red: #ffe6e6;          /* Light secondary */
    /* ... other variables ... */
}
```

**Popular Color Schemes:**

- **Professional Blue**: `--primary-blue: #0066ff`, `--accent-red: #ff3333`
- **Tech Cyan**: `--primary-blue: #00d4ff`, `--accent-red: #ff006e`
- **Purple Gradient**: `--primary-blue: #7c3aed`, `--accent-red: #ec4899`
- **Green Tech**: `--primary-blue: #10b981`, `--accent-red: #f59e0b`

### Modify Fonts

**In `portfolio.html` (line ~7-9):**
Update Google Fonts link or change font families in CSS variables.

**In `portfolio-styles.css`:**
```css
--font-primary: 'Poppins', sans-serif;    /* Headers */
--font-secondary: 'Roboto', sans-serif;   /* Body text */
```

### Replace Images

1. **Profile Picture**: Replace at line ~48
2. **Certificate Images**: Replace in certificate cards (lines ~140-160)
3. **Project Images**: Replace in project cards (lines ~230-260)
4. **Work Gallery Images**: Replace in my-work section (lines ~310-340)

## ⌨️ Keyboard Shortcuts

- **Ctrl+K** (or **Cmd+K** on Mac): Toggle dark mode
- **Escape**: Close mobile menu
- **Click on nav links**: Smooth scroll to section

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🛠️ Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🌐 Deployment

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload the three files
3. Go to Settings → Pages
4. Select branch to deploy
5. Your site will be at `https://username.github.io/repo-name/portfolio.html`

### Netlify (Free)
1. Visit [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Get a live URL instantly
4. Optional: Connect to GitHub for auto-deploys

### Vercel (Free)
1. Visit [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click
4. Get automatic updates on push

### Traditional Hosting
1. Purchase domain and hosting
2. Upload files via FTP
3. Visit your custom domain

## 💡 Tips for Best Results

1. **User Experience**
   - Use high-quality images
   - Keep descriptions concise
   - Update content regularly

2. **Performance**
   - Optimize images (compress them)
   - Minimize CSS and JavaScript (optional)
   - Use lazy loading for images

3. **SEO**
   - Update page title and meta description
   - Use semantic HTML
   - Add descriptive alt text to images

4. **Accessibility**
   - Ensure sufficient color contrast
   - Use semantic HTML elements
   - Add ARIA labels where needed

## 📝 Form Setup

To make the contact form work with email delivery:

### Option 1: Formspree (Recommended)
1. Visit [formspree.io](https://formspree.io)
2. Create account and add form
3. Update form action in `portfolio.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
1. Visit [emailjs.com](https://emailjs.com)
2. Set up email service
3. Initialize in JavaScript with your credentials

### Option 3: Backend Integration
Connect to your own backend API for form submission.

## 🎭 Dark Mode

The website includes automatic dark mode detection:
- Respects system preferences (if not manually set)
- Persists user choice in localStorage
- Toggle with theme button or Ctrl+K shortcut

## 🐛 Troubleshooting

### Styles Not Loading
- Ensure CSS file is in the same directory as HTML
- Check file names match exactly
- Clear browser cache (Ctrl+Shift+Delete)

### Images Not Showing
- Verify image file paths are correct
- Check image files exist in specified location
- Use absolute URLs for external images

### Animations Not Working
- Ensure JavaScript file is loaded
- Check browser console for errors (F12)
- Verify JavaScript is enabled in browser

### Mobile Menu Not Working
- Ensure JavaScript is enabled
- Check viewport meta tag in HTML head
- Test in device emulation mode (F12)

## 📚 Resources

- **Google Fonts**: https://fonts.google.com
- **Font Awesome Icons**: https://fontawesome.com
- **Modern CSS Techniques**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript Documentation**: https://developer.mozilla.org/en-US/docs/Web/JavaScript

## 🎓 Learning Resources

### HTML
- Semantic HTML structure
- Meta tags and SEO
- Form elements and validation

### CSS
- CSS Grid and Flexbox
- CSS Variables (Custom Properties)
- Media Queries for responsive design
- CSS Animations and Transitions

### JavaScript
- DOM Manipulation
- Event Listeners
- LocalStorage API
- IntersectionObserver API

## 📄 License

This template is free to use and modify for your personal portfolio.

## 🤝 Support

For bug fixes or improvements:
1. Review the code comments
2. Check browser console for errors
3. Test in different browsers
4. Verify file paths and names

## ✅ Checklist Before Publishing

- [ ] Update all personal information
- [ ] Replace all placeholder images
- [ ] Verify all links work correctly
- [ ] Test on mobile devices
- [ ] Check in different browsers
- [ ] Test dark mode functionality
- [ ] Verify contact form works
- [ ] Optimize images for web
- [ ] Check for spelling errors
- [ ] Test keyboard navigation
- [ ] Verify social media links
- [ ] Set up form email delivery

## 🎉 Congratulations!

You now have a professional portfolio website. Make it your own by personalizing the content and sharing it with potential employers and clients!

---

**Built with HTML, CSS, JavaScript, and ❤️**

Last Updated: 2024
