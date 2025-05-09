# NavBar-Footer

A modern, responsive navigation bar and footer component library for web applications.

![License](https://img.shields.io/github/license/DaL1ght1/NavBar-Footer)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

## Overview

NavBar-Footer is a lightweight, customizable component library that provides ready-to-use navigation bars and footers for your web projects. Built with HTML, CSS, and JavaScript, these components are designed to be responsive, accessible, and easy to integrate into any web application.

## Features

### Navigation Bar
- **Responsive Design**: Automatically adapts to different screen sizes
- **Mobile-First Approach**: Excellent experience on mobile devices with hamburger menu
- **Customizable**: Easy to modify colors, styles, and behavior
- **Dropdown Support**: Multi-level dropdown menus for complex navigation structures
- **Scroll Effects**: Optional transparency and color changes on scroll

### Footer
- **Flexible Layout**: Multiple column layouts for various content types
- **Social Media Integration**: Built-in social media icon links
- **Newsletter Signup**: Optional newsletter subscription form
- **Responsive Design**: Properly stacks on smaller devices
- **Dark/Light Modes**: Support for different color schemes

## Installation

```bash
npm install navbar-footer
```



## Basic Usage

### HTML Structure

#### Navigation Bar
```html
<nav class="nb-navbar">
  <div class="nb-brand">
    <a href="/">Your Brand</a>
  </div>
  <button class="nb-toggle">
    <span class="nb-icon"></span>
  </button>
  <div class="nb-collapse">
    <ul class="nb-nav">
      <li class="nb-item"><a href="/" class="nb-link active">Home</a></li>
      <li class="nb-item"><a href="/about" class="nb-link">About</a></li>
      <li class="nb-item nb-dropdown">
        <a href="#" class="nb-link nb-dropdown-toggle">Services</a>
        <ul class="nb-dropdown-menu">
          <li><a href="/services/web-design" class="nb-dropdown-item">Web Design</a></li>
          <li><a href="/services/development" class="nb-dropdown-item">Development</a></li>
        </ul>
      </li>
      <li class="nb-item"><a href="/contact" class="nb-link">Contact</a></li>
    </ul>
  </div>
</nav>
```

#### Footer
```html
<footer class="nb-footer">
  <div class="nb-footer-top">
    <div class="nb-container">
      <div class="nb-row">
        <div class="nb-col">
          <h5>About Us</h5>
          <p>Brief description about your company or website.</p>
        </div>
        <div class="nb-col">
          <h5>Quick Links</h5>
          <ul class="nb-footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="nb-col">
          <h5>Contact</h5>
          <address>
            123 Street Name<br>
            City, State 12345<br>
            <a href="mailto:info@example.com">info@example.com</a><br>
            <a href="tel:+11234567890">(123) 456-7890</a>
          </address>
        </div>
        <div class="nb-col">
          <h5>Subscribe</h5>
          <form class="nb-footer-subscribe">
            <input type="email" placeholder="Your email">
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="nb-footer-bottom">
    <div class="nb-container">
      <div class="nb-copyright">
        © 2025 Your Company. All rights reserved.
      </div>
      <div class="nb-social">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
</footer>
```

### JavaScript Initialization
```javascript
// Initialize all components
document.addEventListener('DOMContentLoaded', function() {
  NavBarFooter.init();
});

// Or initialize components separately
document.addEventListener('DOMContentLoaded', function() {
  NavBarFooter.initNavbar();
  NavBarFooter.initFooter();
});
```

## Customization

### CSS Variables
The appearance can be customized using CSS variables:

```css
:root {
  /* Navbar variables */
  --nb-navbar-bg: #ffffff;
  --nb-navbar-color: #333333;
  --nb-navbar-hover-color: #007bff;
  --nb-navbar-active-color: #0056b3;
  --nb-dropdown-bg: #ffffff;
  --nb-dropdown-border: #eeeeee;
  
  /* Footer variables */
  --nb-footer-bg: #212529;
  --nb-footer-color: #f8f9fa;
  --nb-footer-link-color: #adb5bd;
  --nb-footer-link-hover-color: #ffffff;
  --nb-footer-bottom-bg: #1a1e21;
}
```

### JavaScript Configuration
Configure component behavior through JavaScript:

```javascript
NavBarFooter.init({
  navbar: {
    sticky: true,
    scrollEffect: true,
    scrollThreshold: 50,
    transparentOnTop: true
  },
  footer: {
    stickyBottom: false,
    showScrollTop: true
  }
});
```

## Advanced Usage

### Creating Dynamic Menus
```javascript
// Example of dynamically populating a navigation menu
const menuData = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { 
    name: 'Services', 
    url: '#',
    children: [
      { name: 'Web Design', url: '/services/web-design' },
      { name: 'Development', url: '/services/development' }
    ]
  }
];

NavBarFooter.createMenu('.nb-navbar', menuData);
```

### Sticky Navigation with Scroll Effects
```javascript
NavBarFooter.initNavbar({
  sticky: true,
  transparentOnTop: true,
  scrollClass: 'nb-scrolled',
  scrollThreshold: 100,
  onScroll: function(scrollPos) {
    // Custom scroll handler
    console.log('Scrolled to:', scrollPos);
  }
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- iOS Safari (latest)
- Android Chrome (latest)

## Accessibility

NavBar-Footer is built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Screen reader friendly structure
- Focus management for modals and dropdowns
- Color contrast that meets WCAG 2.1 AA standards

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Font Awesome for icons
- Bootstrap for inspiration
- The open-source community

## Support

If you encounter any problems or have feature requests, please [open an issue](https://github.com/DaL1ght1/NavBar-Footer/issues) on GitHub.
