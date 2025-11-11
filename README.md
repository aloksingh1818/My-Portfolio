# 🚀 Alok Kumar - Personal Portfolio Website

A modern, responsive, and feature-rich personal portfolio website showcasing my work, skills, and professional journey as a **Programmer Analyst Trainee at Cognizant**.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Design
- **Modern UI/UX** - Clean, professional design with a unique blue and white color scheme
- **Dark Mode** - Toggle between light and dark themes with smooth transitions
- **Responsive Layout** - Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - AOS (Animate On Scroll) library for engaging animations
- **Custom Cursor** - Interactive cursor effect on desktop devices

### 🧭 Navigation
- **Sticky Navigation Bar** - Stays visible while scrolling with blur effect
- **Active Link Highlighting** - Automatically highlights the current section
- **Smooth Scrolling** - Seamless navigation between sections
- **Mobile Menu** - Hamburger menu for mobile devices

### 📄 Sections
1. **Home/Hero** - Eye-catching introduction with typing animation
2. **About Me** - Professional background and personal information
3. **Skills** - Categorized skills with animated progress bars
4. **Projects** - Filterable project showcase with 5 featured projects
5. **Experience** - Timeline-based work history
6. **Education** - Academic background and certifications
7. **Blog** - Latest blog posts and articles
8. **Contact** - Contact form with validation and social links

### ⚡ Functionality
- **Typing Animation** - Dynamic role display in hero section
- **Project Filtering** - Filter projects by category (All, Web, Python, Full Stack)
- **Form Validation** - Real-time validation for contact form
- **Scroll to Top** - Quick navigation button
- **Counter Animation** - Animated statistics in About section
- **Theme Persistence** - Remembers user's theme preference
- **Keyboard Shortcuts** - Press 'T' to toggle theme, 'ESC' to close mobile menu

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Variables, Grid, and Flexbox
- **JavaScript (ES6+)** - Interactive functionality

### Libraries & Tools
- **Google Fonts** - Poppins and Fira Code fonts
- **Font Awesome** - Icon library
- **AOS** - Animate On Scroll library
- **Intersection Observer API** - Lazy loading and scroll animations

## 📁 Project Structure

```
My-Portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Main stylesheet with all components
├── js/
│   └── main.js            # JavaScript functionality
├── images/                # Image assets (profile, projects, blog)
│   ├── profile.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   ├── project5.jpg
│   ├── blog1.jpg
│   ├── blog2.jpg
│   ├── blog3.jpg
│   └── favicon.png
├── assets/
│   └── resume.pdf         # Downloadable resume
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.) - optional for editing
- Basic knowledge of HTML/CSS/JavaScript - optional for customization

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aloksingh1818/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
   
   **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   
   **Using Node.js (http-server):**
   ```bash
   npx http-server
   ```
   
   **Using VS Code:**
   - Install "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

3. **View the website**
   - Open your browser and navigate to `http://localhost:8000` (or the appropriate port)

## 🎨 Customization Guide

### 1. Personal Information

**Update profile details in `index.html`:**
- Name, title, and tagline (lines 80-95)
- About section information (lines 150-210)
- Contact information (lines 900-950)

### 2. Colors & Theme

**Modify CSS variables in `css/style.css`:**
```css
:root {
    --primary-color: #2563eb;      /* Change primary blue */
    --secondary-color: #0ea5e9;    /* Change secondary color */
    --accent-color: #06b6d4;       /* Change accent color */
}
```

### 3. Projects

**Add or edit projects in `index.html`:**
- Find the Projects section (around line 400)
- Copy a project card and modify:
  - Image source
  - Title and description
  - Technologies/tags
  - GitHub/live demo links
  - Category for filtering

### 4. Skills

**Update skills in `index.html`:**
- Modify skill names and percentages (lines 300-380)
- Adjust progress bar width in inline styles

### 5. Resume

**Replace the resume:**
- Create your resume as a PDF
- Replace `assets/resume.pdf` with your file
- Keep the filename as `resume.pdf` or update links

### 6. Images

**Add your images:**
- Profile photo: `images/profile.jpg`
- Project screenshots: `images/project1.jpg` to `project5.jpg`
- Blog thumbnails: `images/blog1.jpg` to `blog3.jpg`
- Favicon: `images/favicon.png`

### 7. Social Links

**Update social media links in `index.html`:**
- GitHub: Replace `aloksingh1818` with your username
- LinkedIn: Add your LinkedIn profile URL
- Email: Update email address
- Twitter/Instagram: Add your handles

## 📱 Deployment

### GitHub Pages

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Select `main` branch as source
   - Click Save

3. **Access your site:**
   - Your site will be available at: `https://aloksingh1818.github.io/My-Portfolio/`

### Netlify

1. **Connect repository:**
   - Sign up at [Netlify](https://www.netlify.com/)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure build settings:**
   - Build command: (leave empty)
   - Publish directory: `/`

3. **Deploy:**
   - Click "Deploy site"
   - Your site will be live with a custom Netlify URL
   - Optional: Add a custom domain

### Vercel

1. **Import project:**
   - Sign up at [Vercel](https://vercel.com/)
   - Click "New Project"
   - Import your GitHub repository

2. **Deploy:**
   - Vercel will automatically detect settings
   - Click "Deploy"
   - Your site will be live instantly

## 🔧 Advanced Features (Optional)

### Add Contact Form Backend

**Using Formspree:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Using EmailJS:**
```javascript
emailjs.send("service_id", "template_id", formData)
```

### Add Google Analytics

```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

### SEO Optimization

- Add meta tags in `<head>` section
- Create `sitemap.xml`
- Add `robots.txt`
- Optimize images with proper alt text

## 📝 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| Opera   | ✅ Latest |

## 🐛 Known Issues

- None at the moment! Report issues on GitHub.

## 📈 Future Enhancements

- [ ] Add blog functionality with CMS integration
- [ ] Implement Progressive Web App (PWA) features
- [ ] Add multi-language support
- [ ] Create admin panel for easy content updates
- [ ] Add testimonials section
- [ ] Integrate with GitHub API for automatic project updates
- [ ] Add more interactive animations

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Alok Kumar**
- Position: Programmer Analyst Trainee
- Company: Cognizant
- Location: Kolkata, West Bengal
- GitHub: [@aloksingh1818](https://github.com/aloksingh1818)
- LinkedIn: [Connect with me](https://linkedin.com/in/alok-kumar)
- Email: alok.kumar@example.com

## 🙏 Acknowledgments

- Design inspiration from various portfolio websites
- Icons from [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Animation library: [AOS](https://michalsnik.github.io/aos/)

## 📞 Support

For support, email alok.kumar@example.com or create an issue in this repository.

---

<div align="center">
  <p>Made with ❤️ by Alok Kumar</p>
  <p>⭐ Star this repo if you like it!</p>
</div>