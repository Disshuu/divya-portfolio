# divya-ramnani-portfolio

Personal portfolio website for **Divya Ramnani** — AI/ML Engineer & B.Tech Data Science (IES IPS Academy Indore, Class of 2026).

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and pure CSS animations. Zero external UI libraries. Zero environment variables required.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom CSS variables
- **Fonts**: Syne (display), DM Sans (body), JetBrains Mono (code/labels)
- **Animations**: CSS keyframes + IntersectionObserver scroll reveals
- **Canvas**: Vanilla JS particle network in Hero section

---

## Sections

| Section | Description |
|---|---|
| Hero | Animated particle canvas, headline, CTA buttons, key stats |
| About | Bio, certifications, achievements cards |
| Projects | RAG QA System, SIGNOVA Sign Language AI, Image Classifier |
| Experience | Edunet Foundation AI Internship, YBI Foundation |
| Skills | Animated skill bars grouped by domain + tech tag cloud |
| Contact | Email CTA, social links, phone |

---

## Local Setup

**Prerequisites**: Node.js 18+

```bash
# 1. Clone or extract the project
cd divya-ramnani-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## Customization

- **Content**: Edit the data arrays inside each component in `/components/`
- **Colors**: CSS variables in `app/globals.css` (`:root` block)
- **Fonts**: `app/layout.js` Google Fonts import + `tailwind.config.js`
- **Resume PDF**: Drop a `resume.pdf` into `/public/` and add a download button in Hero

---

## Project Structure

```
divya-ramnani-portfolio/
├── app/
│   ├── layout.js       # Root layout, fonts, metadata
│   ├── page.js         # Main page assembly
│   └── globals.css     # Design tokens, animations, utilities
├── components/
│   ├── Navbar.js
│   ├── Hero.js         # Particle canvas + headline
│   ├── About.js        # Bio + cert cards
│   ├── Projects.js     # Featured project cards
│   ├── Experience.js   # Timeline layout
│   ├── Skills.js       # Animated bars + tag cloud
│   ├── Contact.js      # CTA + social links
│   └── Footer.js
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```
