import React from 'react';
import { ArrowRight } from 'lucide-react';
import { splitHeroPropTypes } from './SplitHero.types';

/**
 * SplitHero - A two-column hero section with text content on one side
 * and an image on the other, stacking vertically on mobile.
 *
 * Design System References:
 * - Typography: §3.2 (h1, bodyLarge)
 * - Spacing: §3.1 (section padding, component gap)
 * - Buttons: §3.4 (btn-primary, btn-secondary)
 * - Badges: §3.4 (.badge)
 * - Responsive: §3.5 (mobile-first → md → lg)
 * - Animations: §3.6 (hover effects, reduced motion)
 * - Accessibility: §3.7 (focus rings, ARIA, keyboard nav)
 *
 * @param {import('./SplitHero.types').SplitHeroProps} props
 */
export function SplitHero({
  headline,
  subheadline,
  primaryButtonText,
  primaryButtonHref = '#',
  secondaryButtonText,
  secondaryButtonHref = '#',
  imageSrc,
  imageAlt,
  reverseLayout = false,
  badge,
  onPrimaryClick,
  onSecondaryClick,
}) {
  /** Handle primary CTA — prevent default only when a custom handler is provided */
  const handlePrimaryClick = (e) => {
    if (onPrimaryClick) {
      e.preventDefault();
      onPrimaryClick();
    }
  };

  /** Handle secondary CTA — prevent default only when a custom handler is provided */
  const handleSecondaryClick = (e) => {
    if (onSecondaryClick) {
      e.preventDefault();
      onSecondaryClick();
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative w-full overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* ——— Content Container (§3.5 max-w-7xl, §3.1 section padding) ——— */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">

        {/* ——— Two-Column Flex Layout ———
             Mobile-first: flex-col (stacked)
             md+: flex-row (side-by-side)
             reverseLayout swaps image to the left on md+ */}
        <div
          className={`flex flex-col items-center gap-8 md:gap-12 lg:gap-16 ${
            reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >

          {/* ==========================================
              TEXT CONTENT COLUMN
              ========================================== */}
          <div className="flex-1 w-full space-y-4 sm:space-y-6 text-center md:text-left">

            {/* Badge — Optional pill / tag above headline (§3.4 .badge) */}
            {badge && (
              <div className="flex justify-center md:justify-start animate-fade-in">
                <div className="badge hover:shadow-md hover:shadow-primary-500/10 cursor-default">
                  {badge}
                </div>
              </div>
            )}

            {/* Headline — §3.2 h1 scale */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight
                         text-gray-900 dark:text-white leading-[1.1]
                         animate-fade-in-up"
            >
              {headline}
            </h1>

            {/* Subheadline — §3.2 bodyLarge */}
            <p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300
                         max-w-2xl mx-auto md:mx-0 leading-relaxed
                         animate-fade-in-up animation-delay-100"
            >
              {subheadline}
            </p>

            {/* CTA Buttons — §3.4 btn-primary / btn-secondary */}
            <div
              className="flex flex-col sm:flex-row gap-4 items-center
                         justify-center md:justify-start pt-2
                         animate-fade-in-up animation-delay-200"
            >
              {/* Primary Button */}
              <a
                href={primaryButtonHref}
                onClick={handlePrimaryClick}
                className="btn-primary w-full sm:w-auto group"
              >
                {primaryButtonText}
                <ArrowRight
                  className="inline-block ml-2 w-4 h-4
                             transition-transform duration-200
                             group-hover:translate-x-1
                             motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </a>

              {/* Secondary Button (conditional) */}
              {secondaryButtonText && (
                <a
                  href={secondaryButtonHref}
                  onClick={handleSecondaryClick}
                  className="btn-secondary w-full sm:w-auto"
                >
                  {secondaryButtonText}
                </a>
              )}
            </div>
          </div>

          {/* ==========================================
              IMAGE COLUMN
              ========================================== */}
          <div className="flex-1 w-full animate-fade-in-up animation-delay-300">
            <div
              className="relative w-full rounded-2xl overflow-hidden
                         shadow-2xl hover:shadow-3xl
                         transition-all duration-300 hover:-translate-y-1
                         motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-video"
              />

              {/* Decorative gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-tr
                           from-primary-500/10 via-transparent to-transparent
                           pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ——— Background Decorative Blobs ——— */}
      <div
        className="absolute top-0 right-0 -z-10 w-72 h-72 sm:w-96 sm:h-96
                   bg-primary-500/5 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -z-10 w-72 h-72 sm:w-96 sm:h-96
                   bg-purple-500/5 rounded-full blur-3xl"
        aria-hidden="true"
      />
    </section>
  );
}

SplitHero.propTypes = splitHeroPropTypes;

export default SplitHero;
