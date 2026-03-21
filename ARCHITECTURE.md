# Freemium UI Kit — Architecture Document

> **Version:** 1.0.0  
> **Stack:** React (Vite) + Tailwind CSS + Lucide-React  
> **Purpose:** A high-quality, copy-pasteable component library for React marketing sites.

---

## Table of Contents

1. [Project Structure](#1-project-structure)
2. [Component Specifications](#2-component-specifications)
3. [Design System Rules](#3-design-system-rules)
4. [Implementation Phases](#4-implementation-phases)

---

## 1. Project Structure

A scalable, feature-organized directory structure optimized for marketing component libraries.

```
freemium-ui-kit/
├── public/
│   └── images/
│       └── hero-placeholder.png
├── src/
│   ├── components/
│   │   └── marketing/
│   │       ├── hero/
│   │       │   ├── SplitHero.jsx
│   │       │   ├── SplitHero.types.js
│   │       │   └── index.js
│   │       ├── pricing/
│   │       │   ├── PricingSection.jsx
│   │       │   ├── PricingCard.jsx
│   │       │   ├── PricingToggle.jsx
│   │       │   ├── Pricing.types.js
│   │       │   └── index.js
│   │       ├── footer/
│   │       │   ├── Footer.jsx
│   │       │   ├── FooterColumn.jsx
│   │       │   ├── Footer.types.js
│   │       │   └── index.js
│   │       └── index.js          # Barrel export for all marketing components
│   ├── hooks/
│   │   └── usePricingToggle.js   # Custom hook for pricing state
│   ├── utils/
│   │   ├── formatCurrency.js     # Currency formatting utility
│   │   └── calculateYearlyPrice.js
│   ├── constants/
│   │   └── pricing.js            # Default pricing data
│   ├── styles/
│   │   └── globals.css           # Tailwind directives + custom utilities
│   ├── App.jsx                   # Demo/showcase page
│   └── main.jsx                  # Vite entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── ARCHITECTURE.md
└── README.md
```

### Directory Conventions

| Directory | Purpose |
|-----------|---------|
| `components/marketing/` | All marketing-specific UI components |
| `components/marketing/[feature]/` | Feature-grouped components with co-located types |
| `hooks/` | Reusable React hooks for state logic |
| `utils/` | Pure utility functions (no React dependencies) |
| `constants/` | Static data and configuration objects |

---

## 2. Component Specifications

### 2.1 Split Hero Component

**File:** `src/components/marketing/hero/SplitHero.jsx`

A two-column hero section with text content on the left and an image on the right, stacking vertically on mobile.

#### Props Definition

```javascript
/**
 * @typedef {Object} SplitHeroProps
 * @property {string} headline - Main headline text (required)
 * @property {string} subheadline - Supporting description text (required)
 * @property {string} primaryButtonText - CTA button label (required)
 * @property {string} [primaryButtonHref] - CTA button link (default: "#")
 * @property {string} [secondaryButtonText] - Secondary action label (optional)
 * @property {string} [secondaryButtonHref] - Secondary action link (default: "#")
 * @property {string} imageSrc - Hero image source URL (required)
 * @property {string} imageAlt - Image alt text for accessibility (required)
 * @property {boolean} [reverseLayout] - Flip image to left side (default: false)
 * @property {React.ReactNode} [badge] - Optional badge/pill above headline
 * @property {Function} [onPrimaryClick] - Click handler for primary button
 * @property {Function} [onSecondaryClick] - Click handler for secondary button
 */
```

#### Example Usage

```jsx
<SplitHero
  badge={<span className="badge">🚀 Now in Beta</span>}
  headline="Build Stunning Marketing Sites in Minutes"
  subheadline="Copy-paste beautiful React components designed for conversion. Zero configuration required."
  primaryButtonText="Get Started Free"
  primaryButtonHref="/signup"
  secondaryButtonText="View Demo"
  secondaryButtonHref="/demo"
  imageSrc="/images/hero-dashboard.png"
  imageAlt="Dashboard preview showing analytics"
/>
```

---

### 2.2 Pricing Section Component

**File:** `src/components/marketing/pricing/PricingSection.jsx`

A complete pricing section with monthly/yearly toggle and dynamic price calculation.

#### Props Definition

```javascript
/**
 * @typedef {Object} PlanFeature
 * @property {string} text - Feature description
 * @property {boolean} [included] - Whether feature is included (default: true)
 */

/**
 * @typedef {Object} PricingPlan
 * @property {string} id - Unique plan identifier
 * @property {string} name - Plan display name (e.g., "Starter", "Pro")
 * @property {string} [description] - Short plan description
 * @property {number} monthlyPrice - Price per month in cents (e.g., 2900 = $29.00)
 * @property {number} [yearlyDiscount] - Percentage discount for yearly (default: 20)
 * @property {PlanFeature[]} features - List of plan features
 * @property {string} buttonText - CTA button label
 * @property {string} [buttonHref] - CTA button link (default: "#")
 * @property {boolean} [highlighted] - Highlight as recommended plan (default: false)
 * @property {string} [highlightLabel] - Label for highlighted plan (e.g., "Most Popular")
 * @property {boolean} [disabled] - Disable the plan card (default: false)
 */

/**
 * @typedef {Object} PricingSectionProps
 * @property {string} [title] - Section title (default: "Simple, Transparent Pricing")
 * @property {string} [subtitle] - Section subtitle
 * @property {PricingPlan[]} plans - Array of pricing plans (required)
 * @property {string} [currency] - Currency code (default: "USD")
 * @property {string} [currencySymbol] - Currency symbol (default: "$")
 * @property {boolean} [defaultToYearly] - Start with yearly toggle active (default: false)
 * @property {Function} [onPlanSelect] - Callback when plan is selected: (planId, isYearly) => void
 * @property {string} [monthlyLabel] - Toggle label for monthly (default: "Monthly")
 * @property {string} [yearlyLabel] - Toggle label for yearly (default: "Yearly")
 * @property {string} [yearlySavingsLabel] - Savings badge text (default: "Save {discount}%")
 */
```

#### Pricing Math Logic

```javascript
// utils/calculateYearlyPrice.js

/**
 * Calculate yearly price with discount
 * @param {number} monthlyPriceCents - Monthly price in cents
 * @param {number} discountPercent - Yearly discount percentage (0-100)
 * @returns {Object} { monthlyEquivalent, yearlyTotal, savings }
 */
export function calculateYearlyPrice(monthlyPriceCents, discountPercent = 20) {
  const yearlyFullPrice = monthlyPriceCents * 12;
  const discountAmount = Math.round(yearlyFullPrice * (discountPercent / 100));
  const yearlyTotal = yearlyFullPrice - discountAmount;
  const monthlyEquivalent = Math.round(yearlyTotal / 12);

  return {
    monthlyEquivalent,  // Display as monthly price when yearly is selected
    yearlyTotal,        // Total yearly cost
    savings: discountAmount // Amount saved per year
  };
}
```

#### Example Usage

```jsx
const plans = [
  {
    id: 'free',
    name: 'Free',
    description: 'For hobby projects',
    monthlyPrice: 0,
    features: [
      { text: '3 Projects', included: true },
      { text: 'Basic Analytics', included: true },
      { text: 'Priority Support', included: false },
    ],
    buttonText: 'Get Started',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For growing teams',
    monthlyPrice: 2900, // $29.00
    yearlyDiscount: 20,
    highlighted: true,
    highlightLabel: 'Most Popular',
    features: [
      { text: 'Unlimited Projects', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: 'Priority Support', included: true },
    ],
    buttonText: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations',
    monthlyPrice: 9900, // $99.00
    yearlyDiscount: 25,
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Custom Integrations', included: true },
      { text: 'Dedicated Account Manager', included: true },
    ],
    buttonText: 'Contact Sales',
  },
];

<PricingSection
  title="Choose Your Plan"
  subtitle="Start free, upgrade when you're ready"
  plans={plans}
  defaultToYearly={false}
  onPlanSelect={(planId, isYearly) => console.log(planId, isYearly)}
/>
```

---

### 2.3 Footer Component

**File:** `src/components/marketing/footer/Footer.jsx`

A responsive 4-column footer with logo, navigation links, and social icons.

#### Props Definition

```javascript
/**
 * @typedef {Object} FooterLink
 * @property {string} label - Link display text
 * @property {string} href - Link URL
 * @property {boolean} [external] - Opens in new tab (default: false)
 */

/**
 * @typedef {Object} FooterColumn
 * @property {string} title - Column heading
 * @property {FooterLink[]} links - Array of links in column
 */

/**
 * @typedef {Object} SocialLink
 * @property {string} platform - Platform name (twitter, github, linkedin, etc.)
 * @property {string} href - Profile URL
 * @property {string} [ariaLabel] - Accessibility label
 */

/**
 * @typedef {Object} FooterProps
 * @property {React.ReactNode} [logo] - Logo component or image (optional)
 * @property {string} [companyName] - Company name for copyright
 * @property {string} [tagline] - Short company tagline under logo
 * @property {FooterColumn[]} columns - Navigation columns (max 4 recommended)
 * @property {SocialLink[]} [socialLinks] - Social media links
 * @property {string} [copyrightText] - Custom copyright text (auto-generates year if omitted)
 * @property {FooterLink[]} [legalLinks] - Bottom legal links (Privacy, Terms, etc.)
 * @property {React.ReactNode} [newsletter] - Optional newsletter signup component
 */
```

#### Example Usage

```jsx
const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Roadmap', href: '/roadmap' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press Kit', href: '/press' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Help Center', href: '/help' },
      { label: 'Community', href: '/community' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
];

const socialLinks = [
  { platform: 'twitter', href: 'https://twitter.com/company' },
  { platform: 'github', href: 'https://github.com/company' },
  { platform: 'linkedin', href: 'https://linkedin.com/company/company' },
];

<Footer
  logo={<img src="/logo.svg" alt="Company" className="h-8" />}
  companyName="Acme Inc"
  tagline="Building the future of web development"
  columns={footerColumns}
  socialLinks={socialLinks}
  legalLinks={[
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ]}
/>
```

---

## 3. Design System Rules

### 3.1 Spacing System

| Context | Mobile | Tablet (md) | Desktop (lg) |
|---------|--------|-------------|--------------|
| Section Padding | `py-12 px-4` | `py-16 px-6` | `py-24 px-8` |
| Component Gap | `gap-4` | `gap-6` | `gap-8` |
| Card Padding | `p-4` | `p-6` | `p-8` |
| Stack Spacing | `space-y-3` | `space-y-4` | `space-y-6` |

### 3.2 Typography Scale

```javascript
// Tailwind class mappings
const typography = {
  // Headings
  h1: 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight',
  h2: 'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight',
  h3: 'text-xl sm:text-2xl font-semibold',
  h4: 'text-lg sm:text-xl font-semibold',
  
  // Body
  bodyLarge: 'text-lg sm:text-xl text-gray-600 dark:text-gray-300',
  body: 'text-base text-gray-600 dark:text-gray-400',
  bodySmall: 'text-sm text-gray-500 dark:text-gray-500',
  
  // Special
  badge: 'text-xs sm:text-sm font-medium',
  button: 'text-sm sm:text-base font-medium',
  caption: 'text-xs text-gray-400',
};
```

### 3.3 Color Palette

```javascript
// tailwind.config.js - extend colors
module.exports = {
  theme: {
    extend: {
      colors: {
        // Primary Brand
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // Main brand color
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Semantic Colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        // Neutral (for dark mode support)
        surface: {
          light: '#ffffff',
          dark: '#0f172a',
        },
      },
    },
  },
};
```

### 3.4 Component Patterns

#### Button Styles

```css
/* Base button classes */
.btn-primary {
  @apply inline-flex items-center justify-center 
         px-6 py-3 
         text-sm sm:text-base font-medium 
         text-white bg-primary-600 
         rounded-lg 
         hover:bg-primary-700 
         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
         transition-colors duration-200
         disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-secondary {
  @apply inline-flex items-center justify-center 
         px-6 py-3 
         text-sm sm:text-base font-medium 
         text-gray-700 dark:text-gray-200
         bg-white dark:bg-gray-800
         border border-gray-300 dark:border-gray-600
         rounded-lg 
         hover:bg-gray-50 dark:hover:bg-gray-700
         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
         transition-colors duration-200;
}
```

#### Card Styles

```css
.card {
  @apply bg-white dark:bg-gray-800 
         rounded-2xl 
         border border-gray-200 dark:border-gray-700
         shadow-sm hover:shadow-md
         transition-shadow duration-200;
}

.card-highlighted {
  @apply ring-2 ring-primary-500 
         shadow-lg shadow-primary-500/10;
}
```

### 3.5 Responsive Breakpoints Strategy

| Breakpoint | Width | Layout Strategy |
|------------|-------|-----------------|
| Default | 0-639px | Stack vertically, full-width components |
| `sm` | 640px+ | Minor adjustments, larger text |
| `md` | 768px+ | Two-column layouts where appropriate |
| `lg` | 1024px+ | Full desktop layouts, max-width containers |
| `xl` | 1280px+ | Wider spacing, larger imagery |

#### Container Max-Widths

```jsx
// Standard section container
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</section>

// Narrow content container (for text-heavy sections)
<div className="max-w-3xl mx-auto">
  {/* Content */}
</div>
```

### 3.6 Animation Guidelines

```javascript
// Recommended transitions
const transitions = {
  fast: 'transition-all duration-150 ease-out',
  default: 'transition-all duration-200 ease-in-out',
  slow: 'transition-all duration-300 ease-in-out',
  bounce: 'transition-transform duration-200 ease-out hover:scale-105',
};

// Hover states
const hoverEffects = {
  lift: 'hover:-translate-y-1 hover:shadow-lg',
  glow: 'hover:shadow-lg hover:shadow-primary-500/20',
  brighten: 'hover:brightness-110',
};
```

### 3.7 Accessibility Requirements

- **Color Contrast:** Minimum 4.5:1 for body text, 3:1 for large text
- **Focus States:** Visible focus rings on all interactive elements
- **ARIA Labels:** Required for icon-only buttons and complex widgets
- **Keyboard Navigation:** Full keyboard accessibility for toggles and menus
- **Reduced Motion:** Respect `prefers-reduced-motion` media query

```jsx
// Example: Reduced motion support
<div className="transition-transform duration-200 motion-reduce:transition-none">
```

---

## 4. Implementation Phases

### Phase 1: Project Setup & Configuration (Day 1)

**Objective:** Initialize the Vite project with all dependencies and configuration files.

**Steps:**

1. **Initialize Vite Project**
   ```bash
   npm create vite@latest freemium-ui-kit -- --template react
   cd freemium-ui-kit
   ```

2. **Install Dependencies**
   ```bash
   npm install tailwindcss postcss autoprefixer lucide-react
   npm install -D @tailwindcss/forms @tailwindcss/typography
   npx tailwindcss init -p
   ```

3. **Configure Tailwind** (`tailwind.config.js`)
   - Add content paths
   - Extend color palette with design system colors
   - Add custom font families
   - Enable dark mode (`class` strategy)

4. **Setup Global Styles** (`src/styles/globals.css`)
   - Add Tailwind directives
   - Define custom utility classes (buttons, cards)
   - Add CSS custom properties for theming

5. **Create Directory Structure**
   - Create all folders as defined in Project Structure
   - Add barrel export files (`index.js`) in each component folder

**Deliverables:**
- [ ] Working Vite dev server
- [ ] Tailwind CSS configured and compiling
- [ ] Directory structure in place
- [ ] Empty component files with boilerplate

---

### Phase 2: Split Hero Component (Day 2)

**Objective:** Build a fully responsive, accessible Split Hero component.

**Steps:**

1. **Create Type Definitions** (`SplitHero.types.js`)
   - Define PropTypes or JSDoc types
   - Document all props with descriptions

2. **Build Base Component Structure**
   - Semantic HTML (`<section>`, `<h1>`, etc.)
   - Flexbox/Grid layout with responsive breakpoints
   - Mobile: stacked, image first
   - Desktop: side-by-side, text left

3. **Implement Visual Elements**
   - Badge component (optional pill above headline)
   - Primary and secondary button styles
   - Image container with aspect ratio handling

4. **Add Interactions**
   - Button click handlers
   - Hover animations on buttons
   - Image lazy loading

5. **Test Responsiveness**
   - Test all breakpoints (320px to 1440px)
   - Verify text doesn't overflow
   - Confirm image scales properly

**Deliverables:**
- [ ] `SplitHero.jsx` complete with all variants
- [ ] Responsive across all breakpoints
- [ ] Keyboard accessible
- [ ] Demo in `App.jsx`

---

### Phase 3: Pricing Section Component (Day 3-4)

**Objective:** Build an interactive pricing section with toggle and price calculations.

**Steps:**

1. **Create Utility Functions** (`utils/`)
   - `formatCurrency.js` - Format cents to display string
   - `calculateYearlyPrice.js` - Yearly/monthly math logic

2. **Build Custom Hook** (`usePricingToggle.js`)
   ```javascript
   export function usePricingToggle(defaultYearly = false) {
     const [isYearly, setIsYearly] = useState(defaultYearly);
     const toggle = () => setIsYearly(prev => !prev);
     return { isYearly, toggle, setIsYearly };
   }
   ```

3. **Create Sub-Components**
   - `PricingToggle.jsx` - Monthly/Yearly switch with animation
   - `PricingCard.jsx` - Individual plan card

4. **Build Main Component** (`PricingSection.jsx`)
   - Section header with title/subtitle
   - Toggle integration
   - Responsive grid layout (1 col mobile, 3 col desktop)
   - Price animation on toggle

5. **Implement Highlighted Plan Styling**
   - Ring/border treatment
   - "Most Popular" badge
   - Slightly elevated scale

6. **Add Price Transition Animation**
   - Smooth number transition on toggle
   - Savings badge slide-in animation

**Deliverables:**
- [ ] Full pricing section with 3+ plans
- [ ] Working monthly/yearly toggle
- [ ] Correct price calculations
- [ ] Highlighted plan variant
- [ ] Feature list with included/excluded states

---

### Phase 4: Footer Component (Day 5)

**Objective:** Build a responsive, accessible footer with flexible column layouts.

**Steps:**

1. **Create Sub-Components**
   - `FooterColumn.jsx` - Single navigation column
   - Social icons mapping (Lucide icons for each platform)

2. **Build Main Component** (`Footer.jsx`)
   - Responsive grid: 
     - Mobile: 2x2 grid
     - Tablet: 4-column
     - With logo/tagline spanning full width on mobile
   - Dynamic year in copyright

3. **Implement Social Links**
   - Map platform names to Lucide icons
   - Proper `aria-label` for accessibility
   - Hover color transitions

4. **Add Newsletter Section** (Optional Slot)
   - Flexible slot for newsletter signup
   - Email input with submit button

5. **Footer Bottom Bar**
   - Copyright text
   - Legal links (Privacy, Terms)
   - Horizontal separator

**Deliverables:**
- [ ] Responsive 4-column footer
- [ ] Social icons with accessibility
- [ ] Dynamic copyright year
- [ ] Clean visual hierarchy

---

### Phase 5: Documentation & Demo Page (Day 6)

**Objective:** Create comprehensive documentation and a showcase demo page.

**Steps:**

1. **Build Demo Page** (`App.jsx`)
   - Hero section at top
   - Pricing section in middle
   - Footer at bottom
   - Dark mode toggle for testing

2. **Create README.md**
   - Installation instructions
   - Quick start guide
   - Props documentation for each component
   - Copy-paste examples

3. **Add Component Storybook** (Optional)
   - Interactive prop controls
   - Multiple variants/states
   - Responsive preview

4. **Code Quality**
   - Add ESLint configuration
   - Format with Prettier
   - Remove unused code/comments

5. **Final Testing**
   - Cross-browser testing (Chrome, Firefox, Safari)
   - Accessibility audit (Lighthouse, axe)
   - Performance check

**Deliverables:**
- [ ] Complete demo page showcasing all components
- [ ] README with documentation
- [ ] All components exported from barrel file
- [ ] Clean, production-ready code

---

## Appendix

### A. File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `SplitHero.jsx` |
| Utilities | camelCase | `formatCurrency.js` |
| Types | PascalCase + `.types` | `Pricing.types.js` |
| Hooks | camelCase + `use` prefix | `usePricingToggle.js` |
| Constants | camelCase | `pricing.js` |

### B. Import Order Convention

```javascript
// 1. React and external libraries
import React, { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';

// 2. Internal components
import { PricingCard } from './PricingCard';

// 3. Hooks and utilities
import { usePricingToggle } from '@/hooks/usePricingToggle';
import { formatCurrency } from '@/utils/formatCurrency';

// 4. Types and constants
import { PRICING_PLANS } from '@/constants/pricing';
```

### C. Component Template

```jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * ComponentName - Brief description
 * 
 * @param {Object} props
 * @param {string} props.requiredProp - Description
 * @param {string} [props.optionalProp] - Description
 */
export function ComponentName({ requiredProp, optionalProp = 'default' }) {
  return (
    <div className="...">
      {/* Component content */}
    </div>
  );
}

ComponentName.propTypes = {
  requiredProp: PropTypes.string.isRequired,
  optionalProp: PropTypes.string,
};

export default ComponentName;
```

---

> **Last Updated:** January 2026  
> **Author:** Principal Software Architect
