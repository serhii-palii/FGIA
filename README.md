# FGIA - Film Funding Intelligence Assistant

![Version](https://img.shields.io/badge/version-0.2.0--beta-blue)
![Status](https://img.shields.io/badge/status-work--in--progress-yellow)
![HTML](https://img.shields.io/badge/HTML-277_lines-orange)
![CSS](https://img.shields.io/badge/CSS-1375_lines-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-808_lines-yellow)

> **AI-powered film funding recommendations for European filmmakers**

An intelligent web application that helps film professionals discover relevant European film funds, grants, and festival opportunities tailored to their project's unique characteristics.

---

## 🎯 Overview

FGIA simplifies the complex process of finding suitable funding opportunities for film projects. By analyzing your project details (stage, type, nationality, genre, language), the tool provides personalized recommendations from a curated database of European film funds and festivals.

**Target Users:**

- Film producers and directors
- Documentary filmmakers
- Production companies
- Film students and emerging talent
- Co-production partners
- Especially Ukrainian-led projects seeking European funding

---

## ✨ Features

### 🌟 Landing Page

- **Hero Section** with typewriter animation showcasing key value propositions
- **Logo Carousel** displaying trusted festivals and funding organizations (auto-scrolling, pause on hover)
- **Industry Statistics** highlighting the film funding landscape
- **Security Badges** (Secure Platform, GDPR Compliant, Verified Data)
- **User Reviews** from film professionals
- **Early Access Form** to onboard users into the platform

### 🎬 Application Mode

- **Smart Project Form** - 5 key fields for precise matching:

  - Project Stage (Development, Pre-Production, Production, Post-Production, Distribution)
  - Project Type (Feature Film, Documentary, Short Film, Series/TV, Animation, Experimental)
  - Nationality (12 European countries + Co-Production option)
  - Genre (10 categories from Drama to Cultural/Heritage)
  - Language (9 options including Multilingual)

- **AI-Powered Matching Algorithm** - Scores and ranks funds based on project criteria
- **Smart Filters** - Dropdown filters for Type (Funds/Festivals) and Deadline Urgency
- **Visual Fund Cards** - Each recommendation includes:

  - Representative image
  - Fund/Festival name
  - Urgency badge (Urgent/Moderate/Flexible)
  - Match reasoning
  - Quick action buttons

- **Favorites System**
  - Heart icon to save funds
  - Persistent storage (localStorage)
  - Counter badge in navigation
  - Dedicated favorites section
  - One-click clear all

### 🎨 Design & UX

- **Sticky Navigation** - Shrinks smoothly on scroll
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - Typewriter effect, card hovers, heart pulse
- **Loading States** - Visual feedback during processing
- **Toast Notifications** - Non-intrusive user feedback
- **Accessibility** - Semantic HTML, keyboard navigation, ARIA labels

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- No backend or Node.js required
- No build process needed

### Installation

1. **Clone or Download** the repository:

```bash
git clone https://github.com/yourusername/fgia.git
cd fgia
```

2. **File Structure**:

```
fgia/
├── index.html       # Main HTML structure
├── styles.css       # Complete styling with animations
├── script.js        # All functionality and interactivity
└── README.md        # This file
```

3. **Run Locally**:

   - Simply open `index.html` in your web browser
   - Or use a local server:

   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js
   npx serve

   # PHP
   php -S localhost:8000
   ```

4. **Access**: Navigate to `http://localhost:8000`

---

## 📂 Project Structure

### **index.html**

- Semantic HTML5 structure
- Landing page content (hero, stats, reviews, form)
- Application interface (filters, form, results, favorites)
- Responsive navigation and footer
- No inline styles or scripts

### **styles.css**

- CSS Variables for easy theming
- Mobile-first responsive design
- Flexbox and Grid layouts
- Smooth animations and transitions
- Media queries for tablet (768px) and desktop (1024px+)
- ~1000 lines of organized, commented CSS

### **script.js**

- Vanilla JavaScript (no frameworks)
- Modular function structure
- Event-driven architecture
- localStorage for data persistence
- Mock database with 12 funds/festivals
- ~600 lines of clean, readable code

---

## 🎨 Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --color-accent: #4a6fa5; /* Primary brand color */
  --color-accent-hover: #3d5a84; /* Hover state */
  --color-heart: #ef4444; /* Favorites/love */
  /* ... more variables */
}
```

### Update Fund Database

Edit the `FUNDS` array in `script.js`:

```javascript
const FUNDS = [
  {
    name: "Your Fund Name",
    type: "fund", // or 'festival'
    urgency: "urgent", // 'moderate', 'flexible'
    criteria: ["feature-film", "development", "ukraine"],
    reason: "Why this fund matches...",
    image: "https://your-image-url.com/image.jpg",
  },
  // Add more funds...
];
```

---

## 🛠️ Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with Grid/Flexbox
- **Vanilla JavaScript (ES6+)** - No dependencies
- **localStorage API** - Client-side persistence
- **SVG** - Scalable icons and graphics

**Why No Framework?**

- Faster load times
- No build process
- Easy to understand and modify
- No dependencies to maintain
- Perfect for MVP/prototype

---

## 📊 Browser Support

| Browser | Version | Status             |
| ------- | ------- | ------------------ |
| Chrome  | 90+     | ✅ Fully Supported |
| Firefox | 88+     | ✅ Fully Supported |
| Safari  | 14+     | ✅ Fully Supported |
| Edge    | 90+     | ✅ Fully Supported |
| Opera   | 76+     | ✅ Fully Supported |

**Mobile Support:**

- iOS Safari 14+
- Chrome Mobile
- Firefox Mobile
- Samsung Internet

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Landing page loads correctly
- [ ] Typewriter animation runs smoothly
- [ ] Logo carousel scrolls and pauses on hover
- [ ] Early access form validates required fields
- [ ] Form submission switches to app mode
- [ ] Project form requires all fields
- [ ] Recommendations appear after form submission
- [ ] Filters work (Type and Deadline)
- [ ] Heart button adds/removes favorites
- [ ] Favorites persist after page reload
- [ ] Navigation shrinks on scroll
- [ ] Mobile menu opens/closes
- [ ] All links work
- [ ] Responsive on mobile/tablet/desktop

### Automated Testing

```bash
# Future: Add testing framework
# npm install --save-dev jest
# npm test
```

---

## ⚠️ Disclaimers

### Legal Disclaimer

**This tool provides guidance based on general criteria. Recommendations are not guarantees of eligibility or success. Always verify specific requirements, deadlines, and eligibility criteria on official fund websites before applying.**

The creators of FGIA are not responsible for:

- Missed deadlines or application opportunities
- Inaccurate fund information
- Changes to fund requirements or criteria
- Application outcomes

### Content Accuracy Disclaimer

**⚠️ Work-in-Progress Notice:**

The following information currently uses **placeholder content** and may not be accurate:

- **"Trusted By" Logos** - Festival and fund logos are placeholders
- **User Reviews** - Reviews are fictional examples for demonstration
- **Industry Statistics** - Figures are approximations for illustrative purposes
- **Fund Images** - Images are stock photos, not official fund imagery
- **Match Reasoning** - Simplified descriptions for MVP demonstration
- **Deadlines** - Urgency badges are categorized examples, not actual dates

**Not Currently Implemented:**

- Real-time security protocols
- GDPR compliance mechanisms
- Data verification systems

### Data Protection Notice

- User data is stored locally (localStorage) in the browser
- No data is sent to external servers in current MVP
- Users can clear their data anytime (Clear All button)

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Report Issues

- Use GitHub Issues for bug reports
- Include browser, OS, and steps to reproduce
- Screenshots are helpful

### Suggest Features

- Open a feature request issue
- Describe the use case
- Explain expected behavior

### Code Contributions

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'feat(optional scope): amazing feature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Use meaningful variable names
- Comment complex logic
- Follow existing code structure
- Test on multiple browsers

---

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 FGIA Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 😌 Acknowledgments

- **Film Funds & Festivals** - For their continued support of cinema
- **Ukrainian Film Community** - Inspiration for this project
- **Open Source Community** - For tools and resources
- **Beta Testers** - Early feedback and suggestions

---

## 📈 Changelog

### Version 0.2.0-beta (December 2025)

- Initial release
- Landing page with hero and typewriter animation
- Logo carousel with trusted partners
- Early access form
- Favorites system with localStorage
- Responsive design for all devices
- Filter system (Type and Deadline)
- Toast notifications
- Mobile-optimized navigation

---

**Built with ❤️ for the film community**

_Last Updated: December 2025_
