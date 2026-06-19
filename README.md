# PrimeShield Website

A static corporate website for PrimeShield built with **Next.js 16** and **React 19**, integrated with a **Wagtail CMS** backend for dynamic content management.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Animations | GSAP, Framer Motion, AOS |
| Carousel | React Slick |
| Icons | Font Awesome |
| Email | EmailJS |
| CMS | Wagtail (SEO Dashboard) |
| Styling | CSS Modules |
| i18n | Arabic & English (`src/messages/`) |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, About, Services, Projects, Results, Clients, Vision, CTA |
| `/about` | About — Hero, Tabs, Vision/Mission, Cards |
| `/services` | Services — Hero, Tabs, Wrapper |
| `/projects` | Projects — Hero, Approvals, Projects listing |
| `/certificates` | Certificates — Hero, Certificates listing |
| `/contact` | Contact form (EmailJS) |

---

## CMS Integration

Dynamic content (blogs, certificates, projects) is managed via the **Wagtail SEO Dashboard**:

- **Admin panel:** `https://seodashboard.respect-solutions.cloud/admin`
- **Content fetched at build/runtime:** Blogs, Certificates, Projects pages pull data from the Wagtail API

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.js           # Home page
│   ├── about/
│   ├── services/
│   ├── projects/
│   ├── certificates/
│   ├── contact/
│   └── sitemap.js
├── components/
│   ├── common/           # Navbar, Container, AOSProvider
│   └── sections/         # Page sections (Hero, About, Services, etc.)
└── messages/
    ├── en.json           # English translations
    └── ar.json           # Arabic translations
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Wagtail CMS API base URL
NEXT_PUBLIC_CMS_API_URL=https://seodashboard.respect-solutions.cloud

# EmailJS credentials (for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Internationalization

The site supports **English** and **Arabic**. Translation strings are stored in:

- `src/messages/en.json`
- `src/messages/ar.json`
