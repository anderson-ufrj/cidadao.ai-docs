# Cidadão.AI - Documentation Hub

<div align="center">

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://anderson-ufrj.github.io/cidadao.ai-docs/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Central documentation hub for Cidadão.AI project**

[🌐 Live Documentation](https://anderson-ufrj.github.io/cidadao.ai-docs/) • [📱 Frontend](https://github.com/anderson-ufrj/cidadao.ai-frontend) • [🔧 Backend](https://github.com/anderson-ufrj/cidadao.ai-backend) • [🤖 API Demo](https://huggingface.co/spaces/neural-thinker/cidadao.ai-backend)

</div>

## 📋 Overview

This repository hosts the official documentation hub for **Cidadão.AI** - a multi-agent AI system designed for Brazilian government transparency analysis. The documentation hub serves as a centralized gateway to all project resources, repositories, and API documentation.

### 🎯 Project Mission

Democratize access to Brazilian public data through ethical AI technology, combining advanced language models, vector databases, and government APIs to enhance civic engagement and transparency.

## 🏗️ Architecture

### Core Components

- **Frontend Interface**: Modern, responsive documentation hub
- **API Documentation**: Integrated FastAPI/Swagger documentation
- **Multi-language Support**: Portuguese (PT-BR) and English (EN-US)
- **Theme System**: Light/dark mode with persistent user preferences

### Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Styling**: Tailwind CSS via CDN
- **Icons**: Emoji-based iconography
- **Documentation**: FastAPI/Swagger via iframe integration
- **Deployment**: GitHub Pages
- **Fonts**: Inter font family

## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+)
- Local web server (for development)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/anderson-ufrj/cidadao.ai-docs.git
   cd cidadao.ai-docs
   ```

2. **Serve locally**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### GitHub Pages Deployment

The documentation is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

## 📁 Project Structure

```
cidadao.ai-docs/
├── index.html              # Main documentation hub
├── openapi.json            # API specification (auto-updated)
├── update-api-docs.sh      # Manual update script
├── README.md               # This file
├── LICENSE                 # Apache 2.0 license
├── .github/
│   └── workflows/
│       └── update-api-docs.yml # Auto-update workflow
└── assets/                 # Static assets (if any)
```

## 🔄 API Documentation Updates

The API documentation is automatically updated through multiple mechanisms:

### 1. **Live Documentation (Primary)**
The documentation hub uses an iframe that loads the live API docs directly from Hugging Face, ensuring always up-to-date information.

### 2. **Automated Updates (GitHub Actions)**
- **Daily Updates**: Runs at 6 AM UTC (3 AM BRT)
- **Manual Trigger**: Can be triggered manually from GitHub Actions tab
- **Webhook Support**: Can be triggered from backend repository updates

### 3. **Manual Updates**
For local development or immediate updates:
```bash
./update-api-docs.sh
```

The workflow automatically:
- Downloads the latest OpenAPI spec from the backend
- Validates the JSON format
- Commits changes only if the spec has been modified
- Updates the documentation hub

## 🌐 Features

### 🎨 User Interface

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Theme Toggle**: Light/dark mode with localStorage persistence
- **Language Switch**: PT-BR/EN-US with complete translations
- **Smooth Navigation**: Anchor-based scrolling with fixed header

### 📚 Documentation Sections

1. **Repositories**: Links to all official GitHub repositories
2. **Important Links**: Production deployments and resources
3. **API Documentation**: Live API docs via iframe integration
4. **About Modal**: Comprehensive project information

### 🔧 Technical Features

- **Progressive Enhancement**: Works without JavaScript
- **Accessible Design**: Semantic HTML with proper ARIA labels
- **Performance Optimized**: Minimal dependencies, CDN resources
- **SEO Friendly**: Proper meta tags and structured content

## 🔗 Related Repositories

| Repository | Description | Status |
|------------|-------------|--------|
| [cidadao.ai-frontend](https://github.com/anderson-ufrj/cidadao.ai-frontend) | Next.js web application | ✅ Active |
| [cidadao.ai-backend](https://github.com/anderson-ufrj/cidadao.ai-backend) | FastAPI backend system | ✅ Active |
| [cidadao.ia-models](https://github.com/anderson-ufrj/cidadao.ia-models) | ML models and scripts | 🔄 Development |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

### Development Guidelines

1. **Code Style**: Follow existing HTML/CSS/JS patterns
2. **Responsive Design**: Test on multiple screen sizes
3. **Accessibility**: Maintain semantic HTML structure
4. **Performance**: Keep dependencies minimal
5. **Internationalization**: Update both PT-BR and EN-US translations

### Reporting Issues

When reporting issues, please include:
- Browser version and OS
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Anderson Henrique da Silva**
- GitHub: [@anderson-ufrj](https://github.com/anderson-ufrj)
- LinkedIn: [anderson-henrique](https://linkedin.com/in/anderson-henrique)
- Email: andersonhs27@gmail.com
- Hugging Face: [@neural-thinker](https://huggingface.co/neural-thinker)

### Academic Supervision

**Prof. Dr. Aracele Garcia de Oliveira Fassbinder**
- Institution: Instituto Federal do Sul de Minas Gerais – Campus Muzambinho
- Course: Bachelor's in Computer Science

## 🏛️ Institutional Support

- **Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais**
- **Bachelor's Program in Computer Science**
- **UN Sustainable Development Goals (SDG 16): Peace, Justice and Strong Institutions**
- **Open Government Partnership (OGP) Guidelines**

## 🔄 Changelog

### Version 1.0.0 (2024-07-22)
- Initial release of documentation hub
- Multi-language support (PT-BR/EN-US)
- Light/dark theme system
- API documentation integration
- Responsive design implementation

---

<div align="center">

**[🌐 Visit Live Documentation](https://anderson-ufrj.github.io/cidadao.ai-docs/)**

Made with ❤️ for transparency and civic engagement in Brazil

</div>