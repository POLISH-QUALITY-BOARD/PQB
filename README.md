# Polish Quality Board (PQB) - Website

Official website for the Polish Quality Board - a national organization dedicated to software testing certification and quality assurance in Poland.

**Live Site:** [https://pqb.org.pl](https://pqb.org.pl)

## About Polish Quality Board

Polska Rada Jakości (Polish Quality Board) provides:

- Software testing knowledge and expertise
- International collaboration on IT quality standards
- Community engagement and professional development

## Repository Structure

```text
website/
├── index.html                      # Main website page
├── CNAME                           # Domain configuration (pqb.org.pl)
├── LICENSE                         # Repository license
├── README.md                        # This file
│
├── styles/
│   └── main.css                    # Main stylesheet with responsive design (731 lines)
│
├── scripts/
│   └── main.js                     # JavaScript for navigation and interactivity (115 lines)
│
├── images/
│   ├── PQB-logo.png                                          # PQB organization logo
│   ├── PQB-pieczec.png                                       # PQB seal/emblem
│   ├── istqb-02-12-26-full-name-portfolio-graphic.svg        # ISTQB certification latest portfolio
│   ├── favicon.svg                                           # Website favicon (SVG)
│   └── favicon_pieczec.svg                                   # Alternative favicon (SVG)
│
└── documents/
    ├── Statut_PQB.pdf              # PQB Constitution/Statute (Polish)
    └── Statut_PQB_en-US.pdf        # PQB Constitution/Statute (English)
```

## Website Content

### Navigation Menu

- **O nas** (About Us)
  - Kim jesteśmy, co robimy (Who We Are & What We Do)
  - Skład osobowy zarządu (Board Members)
  - Statut (Constitution)
  - Wizja, Misja (Vision & Mission)

- **Certyfikacja ISTQB** (ISTQB Certification)
  - Materiały ISTQB (ISTQB Materials)
    - Sylabusy (Syllabuses) - ISTQB Portfolio
    - Słownik (Glossary) - Link to [https://glossary.istqb.org/](https://glossary.istqb.org/)
  - SCR (Software Certification Register) - Link to [https://scr.istqb.org/](https://scr.istqb.org/)

- **Dołącz do nas** (Join Us)
  - Membership benefits

- **Kontakt** (Contact)
  - Contact information

### Main Sections

#### 1. Hero Section
- Organization headline: "Polish Quality Board"
- Tagline: "Profesjonalne certyfikacje i szkolenia z testowania oprogramowania"
- Call-to-action button linking to Join Us section

#### 2. About Us (O nas)
Covers four main topics:

**Kim jesteśmy** (Who We Are)
- Description of PQB as Poland's ISTQB national partner
- Focus on software testing and quality assurance promotion

**Skład osobowy zarządu** (Board Members)
Displays board member cards with:
- Member name
- Position (Prezes/Wiceprezes)
- LinkedIn profile link

**Board Members:**
| Name | Position | LinkedIn |
|------|----------|----------|
| Sebastian Małyska | Prezes (President) | [Profile](https://www.linkedin.com/in/malyska/) |
| Adam Roman | Wiceprezes (Vice President) | [Profile](https://www.linkedin.com/in/adam-roman-3799723/) |
| Anna Miazek-Bereźnicka | Wiceprezes (Vice President) | [Profile](https://www.linkedin.com/in/annamiazek/) |
| Wojciech Jaszcz | Wiceprezes (Vice President) | [Profile](https://www.linkedin.com/in/wojtek-jaszcz-5111421/) |

**Statut** (Constitution)
- Download links for both Polish and English versions:
  - Statut_PQB.pdf (Polish)
  - Statut_PQB_en-US.pdf (English)

**Wartości, Misja i Wizja** (Values, Mission & Vision)

**Values (Wartości):**
- Nowoczesność (Modernity)
- Zaagażowanie (Engagement)
- Inkluzywność (Inclusivity)
- Transparentność działań (Transparency)
- Etyka (Ethics)

**Mission (Misja):**
- Lokalizować, współtworzyć standardy i certyfikację w obszarach dotyczących jakości w IT
- Edukować, promować jakość, prowadzić działalność ekspercką
- Nawiązywać i rozwijać międzynarodowe relacje z organizacjami i jednostkami
- Udostępnianie i współpraca dotycząca Technologii i jej trendów

**Vision (Wizja):**
- Zdecentralizowana zdrowa polska organizacja wspierająca twórcze i aktywne jednostki
- Etyka nie na papierze a w działaniu
- Proste procedury i zwinna organizacja
- ISO certyfikowana w obszarach swojej działalności
- PQB jako synonim rzetelnej, merytorycznej, profesjonalnej, nowoczesnej wiedzy w zakresie jakości w IT

#### 3. ISTQB Certification (Certyfikacja ISTQB)

**ISTQB Materials (Materiały ISTQB)**
- Description of ISTQB as international standard for software testing
- Syllabuses section with ISTQB Portfolio image (clickable link to istqb.org)
- ISTQB Glossary section with link to [https://glossary.istqb.org/](https://glossary.istqb.org/)

**SCR Registry (Rejestr SCR)**
- Description of Software Certification Register
- Link to [https://scr.istqb.org/](https://scr.istqb.org/)

#### 4. Join Us (Dołącz do nas)

Features four benefit cards:
- **Szkolenia** (Training) - Access to ISTQB training
- **Społeczność Profesjonalistów** (Professional Community) - Network with other professionals
- **Najnowsze Trendy** (Latest Trends) - Stay current with testing practices
- **Wsparcie Zawodowe** (Professional Support) - Career development support

"How to Join" section with contact call-to-action

#### 5. Contact (Kontakt)

Contact information:
- **Organization:** Polish Quality Board (PQB)
- **Website:** www.pqb.org.pl
- **Email:** [info@pqb.org.pl](mailto:info@pqb.org.pl)
- **Location:** Bydgoszcz, Polska (Virtual Office)
- **KRS:** 0001200368
- **NIP:** 5543040791

#### 6. Footer
- Copyright notice for Polish Quality Board (2025)
- Privacy policy link

## Technology Stack

- **HTML5** - Semantic markup and structure
- **CSS3** (731 lines) - Responsive design with:
  - CSS Grid and Flexbox layouts
  - CSS Custom Properties (variables) for theming
  - Smooth animations and transitions
  - Mobile-first responsive design
  
- **JavaScript (ES6+)** (115 lines) - Interactive features:
  - Hamburger menu toggle for mobile
  - Multi-level dropdown navigation
  - Smooth scroll behavior for anchor links
  - Contact form handling
  - Menu auto-close on link click
  - Active section highlighting on scroll

## Design System

### Color Scheme
- **Primary Color:** #0066cc (Blue)
- **Secondary Color:** #003d7a (Dark Blue)
- **Accent Color:** #ff6b35 (Orange)
- **Light Background:** #f5f5f5
- **Text Color:** #333
- **White:** #ffffff
- **Border Color:** #ddd

### Typography
- **Font Family:** Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Line Height:** 1.6
- Responsive heading sizes (H1: 2.5em, H2: 2em, H3: 1.5em, H4: 1.2em)

### Key Features

**Responsive Design**
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Mobile hamburger menu (breakpoint: 768px)
- ✅ Flexible grid layouts
- ✅ Touch-friendly navigation

**Navigation**
- ✅ Sticky header
- ✅ Multi-level dropdown menus
- ✅ Active dropdown toggle
- ✅ Smooth scroll behavior
- ✅ Auto-closing menu on link click

**Interactive Elements**
- ✅ Board member cards with LinkedIn links (SVG icons)
- ✅ Clickable ISTQB portfolio image linking to istqb.org
- ✅ External resource links (ISTQB Glossary, SCR Registry)
- ✅ Downloadable PDFs (Polish & English Constitutions)
- ✅ Benefit cards on Join Us section
- ✅ Smooth transitions and hover effects

**Accessibility**
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Link target attributes for external links
- ✅ Image alt text
- ✅ Form labels and accessibility attributes

## External Resources

- **ISTQB Official Website:** [https://www.istqb.org/](https://www.istqb.org/)
- **ISTQB Glossary:** [https://glossary.istqb.org/](https://glossary.istqb.org/)
- **ISTQB Software Certification Register (SCR):** [https://scr.istqb.org/](https://scr.istqb.org/)

## Development

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/POLISH-QUALITY-BOARD/website.git
   cd website
   ```

2. No build process required - it's a static website
3. Open `index.html` in a web browser or serve with a local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   ```

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Minimum CSS Grid and Flexbox support

### File Information

- **HTML File Size:** 365 lines
- **CSS File Size:** 731 lines
- **JavaScript File Size:** 115 lines
- **No external dependencies** - Pure HTML/CSS/JS
- **Fast load times** - Static files only

## Contact & Information

**Organization:** Polish Quality Board (PQB)

**Email:** [info@pqb.org.pl](mailto:info@pqb.org.pl)

**Website:** [https://pqb.org.pl](https://pqb.org.pl)

**Location:** Bydgoszcz, Polska (Virtual Office)

**Social Links:** LinkedIn profiles for all board members

## License

See LICENSE file for details

---

**Last Updated:** December 9, 2025
