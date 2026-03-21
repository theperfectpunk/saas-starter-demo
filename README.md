<p align="center">
  <strong>Freemium UI Kit</strong>
</p>

<p align="center">
  A high-quality, copy-pasteable React + Tailwind CSS component library<br/>
  for marketing sites, landing pages, and SaaS templates.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white" alt="React 18.3"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3.4"/>
  <img src="https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white" alt="Vite 6.0"/>
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License"/>
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📱 **Mobile-First** | Responsive from 320px to 1440px+ using Tailwind breakpoints |
| 🌙 **Dark Mode** | Class-based theming with `dark:` variant — toggle anywhere |
| ♿ **Accessible** | WCAG 2.1 compliant with ARIA labels, focus rings, keyboard nav |
| 🎨 **Design System** | Consistent color palette, typography scale, and spacing tokens |
| ⚡ **Copy-Paste Ready** | Self-contained components — drop into any React + Tailwind project |
| 🔧 **TypeScript Ready** | Full JSDoc type definitions and PropTypes validation |
| 🎭 **Reduced Motion** | Respects `prefers-reduced-motion` for all animations |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and **npm** 9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/freemium-ui-kit.git
cd freemium-ui-kit

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:3000** to see the demo page.

### Build for Production

```bash
npm run build     # Output → dist/
npm run preview   # Preview the production build
```

---

## 📁 Project Structure

```
freemium-ui-kit/
├── public/
│   └── images/
│       └── hero-placeholder.png        # Hero section image
├── src/
│   ├── components/
│   │   └── marketing/
│   │       ├── hero/
│   │       │   ├── SplitHero.jsx       # Two-column hero section
│   │       │   ├── SplitHero.types.js  # PropTypes & JSDoc types
│   │       │   └── index.js
│   │       ├── pricing/
│   │       │   ├── PricingSection.jsx  # Full pricing section
│   │       │   ├── PricingCard.jsx     # Individual plan card
│   │       │   ├── PricingToggle.jsx   # Monthly/Yearly toggle
│   │       │   ├── Pricing.types.js    # PropTypes & JSDoc types
│   │       │   └── index.js
│   │       ├── footer/
│   │       │   ├── Footer.jsx          # Multi-column footer
│   │       │   ├── FooterColumn.jsx    # Single nav column
│   │       │   ├── Footer.types.js     # PropTypes & JSDoc types
│   │       │   └── index.js
│   │       └── index.js                # Barrel export
│   ├── hooks/
│   │   └── usePricingToggle.js         # Monthly ↔ Yearly state
│   ├── utils/
│   │   ├── formatCurrency.js           # Cents → display string
│   │   └── calculateYearlyPrice.js     # Yearly discount math
│   ├── constants/
│   │   └── pricing.js                  # Default plan data
│   ├── styles/
│   │   └── globals.css                 # Tailwind layers + utilities
│   ├── App.jsx                         # Demo / showcase page
│   └── main.jsx                        # Vite entry point
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── ARCHITECTURE.md                     # Full technical specification
└── README.md
```

---

## 📦 Components

### 1. SplitHero

A two-column hero section with text on the left and an image on the right. Stacks vertically on mobile.

```jsx
import { SplitHero } from './components/marketing';

<SplitHero
  badge={<span>🚀 Now in Beta</span>}
  headline="Build Stunning Marketing Sites"
  subheadline="Copy-paste beautiful React components designed for conversion."
  primaryButtonText="Get Started Free"
  primaryButtonHref="/signup"
  secondaryButtonText="View Demo"
  secondaryButtonHref="/demo"
  imageSrc="/images/hero-dashboard.png"
  imageAlt="Dashboard preview"
  reverseLayout={false}
/>
```

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headline` | `string` | ✅ | — | Main headline text |
| `subheadline` | `string` | ✅ | — | Supporting description |
| `primaryButtonText` | `string` | ✅ | — | CTA button label |
| `imageSrc` | `string` | ✅ | — | Hero image URL |
| `imageAlt` | `string` | ✅ | — | Image alt text |
| `primaryButtonHref` | `string` | | `"#"` | CTA button link |
| `secondaryButtonText` | `string` | | — | Secondary button label |
| `secondaryButtonHref` | `string` | | `"#"` | Secondary button link |
| `reverseLayout` | `boolean` | | `false` | Flip image to left side |
| `badge` | `ReactNode` | | — | Badge/pill above headline |
| `onPrimaryClick` | `Function` | | — | Primary button handler |
| `onSecondaryClick` | `Function` | | — | Secondary button handler |

---

### 2. PricingSection

Complete pricing section with monthly/yearly toggle and automatic discount calculations.

```jsx
import { PricingSection } from './components/marketing';

const plans = [
  {
    id: 'free',
    name: 'Free',
    description: 'For hobby projects',
    monthlyPrice: 0,
    features: [
      { text: '3 Projects', included: true },
      { text: 'Priority Support', included: false },
    ],
    buttonText: 'Get Started',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For growing teams',
    monthlyPrice: 2900,       // $29.00 in cents
    yearlyDiscount: 20,        // 20% off yearly
    highlighted: true,
    highlightLabel: 'Most Popular',
    features: [
      { text: 'Unlimited Projects', included: true },
      { text: 'Priority Support', included: true },
    ],
    buttonText: 'Start Free Trial',
  },
];

<PricingSection
  title="Choose Your Plan"
  subtitle="Start free, upgrade when you're ready"
  plans={plans}
  defaultToYearly={false}
  onPlanSelect={(planId, isYearly) => console.log(planId, isYearly)}
  yearlySavingsLabel="Save 20%"
/>
```

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plans` | `PricingPlan[]` | ✅ | — | Array of pricing plans |
| `title` | `string` | | `"Simple, Transparent Pricing"` | Section title |
| `subtitle` | `string` | | — | Section subtitle |
| `currency` | `string` | | `"USD"` | Currency code |
| `currencySymbol` | `string` | | `"$"` | Currency symbol |
| `defaultToYearly` | `boolean` | | `false` | Start with yearly active |
| `onPlanSelect` | `Function` | | — | `(planId, isYearly) => void` |
| `monthlyLabel` | `string` | | `"Monthly"` | Toggle label |
| `yearlyLabel` | `string` | | `"Yearly"` | Toggle label |
| `yearlySavingsLabel` | `string` | | `"Save 20%"` | Savings badge text |

#### Pricing Math

Prices are in **cents** (e.g., `2900` = `$29.00`). Yearly discounts are calculated as:

```
yearlyTotal       = monthlyPrice × 12 × (1 − discount/100)
monthlyEquivalent = yearlyTotal / 12 (rounded)
```

---

### 3. Footer

Responsive multi-column footer with navigation links, social icons, and branding.

```jsx
import { Footer } from './components/marketing';

<Footer
  companyName="Acme Inc"
  tagline="Building the future of web development"
  columns={[
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    // ... up to 4 columns
  ]}
  socialLinks={[
    { platform: 'twitter', href: 'https://twitter.com/acme' },
    { platform: 'github', href: 'https://github.com/acme' },
    { platform: 'linkedin', href: 'https://linkedin.com/company/acme' },
  ]}
  legalLinks={[
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ]}
/>
```

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `columns` | `FooterColumn[]` | ✅ | — | Navigation columns (max 4) |
| `logo` | `ReactNode` | | — | Logo component or image |
| `companyName` | `string` | | — | Company name for copyright |
| `tagline` | `string` | | — | Short tagline below logo |
| `socialLinks` | `SocialLink[]` | | `[]` | Social media links |
| `copyrightText` | `string` | | Auto-generated | Custom copyright text |
| `legalLinks` | `FooterLink[]` | | `[]` | Bottom legal links |
| `newsletter` | `ReactNode` | | — | Newsletter signup slot |

**Supported social platforms:** Twitter, GitHub, LinkedIn, Facebook, Instagram, YouTube, Dribbble

---

## 🎨 Design System

### Color Palette

The primary brand color can be changed by editing `tailwind.config.js`:

```js
// tailwind.config.js
colors: {
  primary: {
    500: '#0ea5e9',  // ← Change this to your brand color
    600: '#0284c7',  // Hover state
    // ... generate full 50–900 scale
  },
}
```

### Custom Utilities

Pre-built CSS classes in `src/styles/globals.css`:

| Class | Description |
|-------|-------------|
| `.btn-primary` | Primary CTA button (filled) |
| `.btn-secondary` | Secondary button (outlined) |
| `.card` | Card container with border + shadow |
| `.card-highlighted` | Highlighted card variant (ring) |
| `.badge` | Pill/badge component |
| `.section-wrapper` | Standard section padding + max-width |
| `.hover-lift` | Hover effect: translate-y + shadow |
| `.hover-glow` | Hover effect: primary shadow glow |

### Responsive Breakpoints

| Breakpoint | Width | Layout Strategy |
|------------|-------|-----------------|
| Default | 0–639px | Stacked / single column |
| `sm` | 640px+ | Minor text scaling adjustments |
| `md` | 768px+ | Two-column layouts |
| `lg` | 1024px+ | Full desktop layouts |
| `xl` | 1280px+ | Wider spacing, larger imagery |

---

## 🌙 Dark Mode

Toggle dark mode by adding/removing the `dark` class on `<html>`:

```js
document.documentElement.classList.toggle('dark');
```

All components use Tailwind's `dark:` variant for seamless theme switching.

---

## ♿ Accessibility

Every component follows **WCAG 2.1** guidelines:

- ✅ Semantic HTML elements (`<section>`, `<nav>`, `<footer>`)
- ✅ ARIA labels on all interactive and landmark elements
- ✅ Keyboard navigation with visible focus indicators
- ✅ Color contrast ratios of 4.5:1+ for body text
- ✅ `prefers-reduced-motion` respected for all animations
- ✅ Screen reader text (`sr-only`) where appropriate

---

## 🛠 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server on port 3000 |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint on `src/` |

---

## 📄 License

MIT — use freely in personal and commercial projects.

---

<p align="center">
  <strong>Built with ❤️ using React, Tailwind CSS, and Lucide React</strong>
</p>
