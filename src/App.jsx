import React, { useState, useCallback } from 'react';
import { Moon, Sun, Sparkles, Zap, Palette, Shield, Code2, ArrowRight } from 'lucide-react';
import { SplitHero, PricingSection, Footer } from './components/marketing';
import { DEFAULT_PRICING_PLANS } from './constants/pricing';
import './styles/globals.css';

/* ───────────────────────────────────────────────
   STATIC DATA — Footer Columns (ARCHITECTURE.md §2.3)
   ─────────────────────────────────────────────── */

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Changelog', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
];

const SOCIAL_LINKS = [
  { platform: 'twitter', href: 'https://twitter.com/company', ariaLabel: 'Follow us on Twitter' },
  { platform: 'github', href: 'https://github.com/company', ariaLabel: 'View our GitHub' },
  { platform: 'linkedin', href: 'https://linkedin.com/company/company', ariaLabel: 'Connect on LinkedIn' },
];

const LEGAL_LINKS = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Cookies', href: '#' },
];

/* ───────────────────────────────────────────────
   STATIC DATA — Features Grid
   ─────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for performance with lazy loading, minimal re-renders, and efficient Tailwind CSS output.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
  },
  {
    icon: Palette,
    title: 'Dark Mode Ready',
    description: 'Built-in dark mode support using Tailwind\'s class-based strategy. Toggle anywhere with one click.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Shield,
    title: 'Fully Accessible',
    description: 'WCAG 2.1 compliant with proper ARIA labels, focus states, keyboard navigation, and reduced motion support.',
    color: 'text-primary-500',
    bgColor: 'bg-primary-500/10',
  },
  {
    icon: Sparkles,
    title: 'Copy-Paste Ready',
    description: 'Self-contained components you can drop into any React + Tailwind project. No extra dependencies.',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    icon: Code2,
    title: 'Developer Friendly',
    description: 'Clean code with JSDoc types, PropTypes validation, and a consistent architecture you can extend.',
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10',
  },
  {
    icon: ArrowRight,
    title: 'Mobile-First',
    description: 'Every component is designed mobile-first with responsive breakpoints for all screen sizes from 320px to 1440px+.',
    color: 'text-sky-500',
    bgColor: 'bg-sky-500/10',
  },
];

/* ───────────────────────────────────────────────
   APP COMPONENT — Demo / Showcase Page
   ─────────────────────────────────────────────── */

/**
 * App — Main demo page that showcases all marketing components.
 *
 * Assembles:
 *   1. SplitHero (Phase 2)
 *   2. Features grid (inline)
 *   3. PricingSection (Phase 3)
 *   4. Footer (Phase 4)
 *
 * Also provides a floating dark-mode toggle for testing
 * both light and dark themes.
 */
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  }, []);

  const handlePlanSelect = useCallback((planId, isYearly) => {
    console.log(`Plan selected: ${planId}, Yearly: ${isYearly}`);
    alert(`You selected the ${planId} plan (${isYearly ? 'Yearly' : 'Monthly'})`);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* ════════════════════════════════════════════
          DARK MODE TOGGLE — Fixed top-right
          ════════════════════════════════════════════ */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 p-3 rounded-full
                   bg-white dark:bg-gray-800
                   border-2 border-gray-200 dark:border-gray-700
                   shadow-lg hover:shadow-xl
                   transition-all duration-200 hover:scale-110
                   motion-reduce:transition-none motion-reduce:hover:transform-none"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </button>

      {/* ════════════════════════════════════════════
          SECTION 1 — SPLIT HERO (Phase 2)
          Example from ARCHITECTURE.md §2.1
          ════════════════════════════════════════════ */}
      <SplitHero
        badge={<span>🚀 Now in Beta</span>}
        headline="Build Stunning Marketing Sites in Minutes"
        subheadline="Copy-paste beautiful React components designed for conversion. Zero configuration required. Mobile-first, accessible, and ready for production."
        primaryButtonText="Get Started Free"
        primaryButtonHref="#pricing"
        secondaryButtonText="View Components"
        secondaryButtonHref="#features"
        imageSrc="/images/hero-placeholder.png"
        imageAlt="Dashboard preview showing analytics and charts"
      />

      {/* ════════════════════════════════════════════
          SECTION 2 — FEATURES GRID
          ════════════════════════════════════════════ */}
      <section
        id="features"
        aria-label="Features"
        className="relative w-full bg-white dark:bg-gray-800
                   border-y border-gray-200 dark:border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
                         text-gray-900 dark:text-white"
            >
              Everything You Need to Ship Faster
            </h2>
            <p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300
                         max-w-2xl mx-auto leading-relaxed"
            >
              Production-ready components built with React, Tailwind CSS, and modern best practices
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group p-6 sm:p-8 rounded-2xl
                             bg-gray-50 dark:bg-gray-900
                             border border-gray-200 dark:border-gray-700
                             hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600
                             transition-all duration-200
                             motion-reduce:transition-none
                             animate-fade-in-up motion-reduce:animate-none
                             ${index === 1 ? 'animation-delay-100' : ''}
                             ${index === 2 ? 'animation-delay-200' : ''}
                             ${index === 3 ? 'animation-delay-100' : ''}
                             ${index === 4 ? 'animation-delay-200' : ''}
                             ${index === 5 ? 'animation-delay-300' : ''}`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12
                               rounded-xl ${feature.bgColor} mb-5
                               group-hover:scale-110 transition-transform duration-200
                               motion-reduce:transition-none`}
                  >
                    <Icon className={`w-6 h-6 ${feature.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 3 — PRICING (Phase 3)
          ════════════════════════════════════════════ */}
      <PricingSection
        title="Choose Your Plan"
        subtitle="Start free, upgrade when you're ready. No credit card required for trial."
        plans={DEFAULT_PRICING_PLANS}
        defaultToYearly={false}
        onPlanSelect={handlePlanSelect}
        yearlySavingsLabel="Save 20%"
      />

      {/* ════════════════════════════════════════════
          SECTION 4 — CTA BANNER
          ════════════════════════════════════════════ */}
      <section
        aria-label="Call to action"
        className="relative w-full bg-white dark:bg-gray-800
                   border-y border-gray-200 dark:border-gray-700"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <div
            className="inline-flex flex-col items-center gap-6 p-8 sm:p-12
                       rounded-3xl
                       bg-gradient-to-br from-primary-50 via-white to-purple-50
                       dark:from-primary-900/20 dark:via-gray-800 dark:to-purple-900/20
                       border border-primary-200 dark:border-primary-800
                       shadow-xl shadow-primary-500/5"
          >
            <span className="badge">✨ Open Source</span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
                         text-gray-900 dark:text-white"
            >
              Ready to Build Something Amazing?
            </h2>
            <p
              className="text-lg text-gray-600 dark:text-gray-300
                         max-w-xl leading-relaxed"
            >
              Copy these components into your React project and customise them
              to match your brand — in minutes, not days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://github.com"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
                <ArrowRight className="inline-block ml-2 w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#pricing" className="btn-secondary">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 5 — FOOTER (Phase 4)
          ════════════════════════════════════════════ */}
      <Footer
        companyName="Freemium UI Kit"
        tagline="Beautiful, accessible React components for modern marketing sites. Built with love using React, Tailwind CSS, and Lucide icons."
        columns={FOOTER_COLUMNS}
        socialLinks={SOCIAL_LINKS}
        legalLinks={LEGAL_LINKS}
      />
    </div>
  );
}

export default App;
