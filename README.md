# Babitha Antony - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing professional experience, skills, and projects as a fullstack developer.

## Features

- **Modern Design**: Clean, professional dark theme with smooth animations
- **Responsive**: Fully responsive design that works on desktop, tablet, and mobile
- **Performance Optimized**: Built with Vite for fast loading and development
- **Accessibility**: ARIA labels and semantic HTML for better accessibility
- **Smooth Navigation**: Sticky header with smooth scroll navigation
- **Interactive Sections**:
  - Hero section with profile card
  - About section with expertise highlights
  - Professional experience timeline
  - Technical skills organized by category
  - Featured projects showcase
  - Contact form and footer

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and development server
- **CSS3** - Styling with CSS custom properties
- **JavaScript (ES6+)** - Modern JavaScript

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Navigate to the portfolio directory:

```bash
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Build the project for production:

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Header.css
│   │   ├── Hero.jsx            # Hero section with intro
│   │   ├── Hero.css
│   │   ├── About.jsx           # About section
│   │   ├── About.css
│   │   ├── Experience.jsx      # Experience timeline
│   │   ├── Experience.css
│   │   ├── Skills.jsx          # Skills showcase
│   │   ├── Skills.css
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Projects.css
│   │   ├── Contact.jsx         # Contact form and footer
│   │   └── Contact.css
│   ├── data/
│   │   └── portfolioData.js    # Resume and portfolio data
│   ├── styles/
│   │   └── globals.css         # Global styles and variables
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global CSS
│   └── main.jsx                # React entry point
├── public/                      # Static assets
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## Customization

### Update Portfolio Data

Edit `src/data/portfolioData.js` to update:

- Personal information (name, email, phone, LinkedIn)
- Professional experience
- Technical skills
- Featured projects
- Education

### Styling

Global styles and theme colors are defined in `src/styles/globals.css`. You can customize:

- Color scheme (primary, secondary, accent colors)
- Font family
- Spacing and sizing
- Animations

Each component also has its own CSS file for specific styling.

## Deployment

### Netlify

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Vite will be auto-detected, no additional configuration needed
4. Deploy!

### GitHub Pages

1. Update `vite.config.js` if needed (add `base` property for subdirectory)
2. Run `npm run build`
3. Push the `dist` folder to gh-pages branch

### Other Platforms

The build output is in the `dist` folder, which can be deployed to any static hosting service:

- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Firebase Hosting
- And many more...

## Performance

The portfolio is optimized for performance:

- Fast build times with Vite
- Small bundle size (~212KB JS, ~19KB CSS)
- Lazy loading and code splitting
- CSS animations using transform and opacity for smooth performance
- Optimized component structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contact

For inquiries and opportunities:

- Email: babithaantony@gmail.com
- Phone: (669) 225-3644
- LinkedIn: https://www.linkedin.com/in/babitha-antony

## License

This portfolio is personal work and is not licensed for redistribution.

---

Built with ❤️ using React and Vite
