# Thru The Lens | Nica Althea Llaguno

> A modern, responsive biography and portfolio website showcasing leadership, photojournalism, and community engagement.

## ✨ Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional, and visually appealing interface
- **Interactive Elements**: Smooth animations and transitions
- **Contact Integration**: Direct email and social media links
- **Performance Optimized**: Built with Next.js for optimal speed
- **SEO Friendly**: Proper metadata and semantic HTML

## 📋 Sections

1. **Navigation** - Sticky header with smooth scrolling links
2. **Hero Section** - Eye-catching introduction with call-to-action
3. **About Me** - Personal description and skill highlights
4. **Experiences & Leadership** - Timeline of professional roles
5. **Achievements & Advocacy** - Notable accomplishments
6. **Community Sections** - Passion and vision statements
7. **Contact** - Direct contact information and links
8. **Footer** - Copyright and attribution

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/miyuliveme-ai/Thru-The-Lens.git
cd Thru-The-Lens
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy on every push

**One-Click Deploy:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/miyuliveme-ai/Thru-The-Lens)

### Deploy on GitHub Pages

1. Install `next-export`:
```bash
npm install -g next-export
```

2. Build and export:
```bash
npm run build
next export
```

3. Push the `out` folder to your GitHub Pages branch

## 📝 Customization

### Update Contact Information

Edit `components/ContactSection.js`:
```javascript
const email = 'your-email@example.com';
const facebookUrl = 'https://facebook.com/yourprofile';
```

### Modify Content

All text content can be edited in `app/page.js`:
- Update `experiences`, `skills`, and `achievements` arrays
- Modify section text directly in component files

### Change Colors

Customize the Tailwind color scheme in:
- `tailwind.config.js` - For theme-wide changes
- Individual component files - For specific element colors

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS 3
- **JavaScript**: ES6+
- **Deployment**: Vercel / GitHub Pages

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is personal use content. All rights reserved © 2026 Nica Althea Llaguno.

## 📧 Contact

**Email**: nallaguno@sorsu.edu.ph

For questions or collaboration opportunities, please reach out via the contact form on the website.

---

Built with ❤️ by Nica Althea Llaguno
