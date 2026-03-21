import React from 'react';
import { PricingToggle } from './PricingToggle';
import { PricingCard } from './PricingCard';
import { usePricingToggle } from '../../../hooks/usePricingToggle';
import { pricingSectionPropTypes } from './Pricing.types';

/**
 * PricingSection — Complete pricing section with header, monthly/yearly
 * toggle, responsive card grid, and fine-print footer.
 *
 * Design System References:
 *   - Spacing: §3.1 (section padding, component gap, stack spacing)
 *   - Typography: §3.2 (h2, bodyLarge, caption)
 *   - Responsive: §3.5 (1-col → 2-col → 3-col grid)
 *   - Animation: §3.6 (staggered card entrance)
 *   - Accessibility: §3.7 (aria-label on section)
 *
 * @param {import('./Pricing.types').PricingSectionProps} props
 */
export function PricingSection({
  title = 'Simple, Transparent Pricing',
  subtitle,
  plans,
  currency = 'USD',
  currencySymbol = '$',
  defaultToYearly = false,
  onPlanSelect,
  monthlyLabel = 'Monthly',
  yearlyLabel = 'Yearly',
  yearlySavingsLabel,
}) {
  const { isYearly, toggle } = usePricingToggle(defaultToYearly);

  // Fall back to a sensible default if no savings label is provided
  const savingsLabel = yearlySavingsLabel || 'Save 20%';

  const handlePlanSelect = (planId) => {
    if (onPlanSelect) {
      onPlanSelect(planId, isYearly);
    }
  };

  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="relative w-full overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      {/* ——— Section Container (§3.5 max-w-7xl, §3.1 section padding) ——— */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">

        {/* ——— Section Header ——— */}
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
                       text-gray-900 dark:text-white"
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300
                         max-w-2xl mx-auto leading-relaxed"
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* ——— Pricing Toggle ——— */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <PricingToggle
            isYearly={isYearly}
            onToggle={toggle}
            monthlyLabel={monthlyLabel}
            yearlyLabel={yearlyLabel}
            savingsLabel={savingsLabel}
          />
        </div>

        {/* ——— Pricing Cards Grid ———
             Mobile: 1 col  |  Tablet (md): 2 col  |  Desktop (lg): 3 col
             Highlighted card gets md:scale-105 so extra gap prevents overlap */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                     gap-8 lg:gap-8
                     max-w-6xl mx-auto
                     items-start"
        >
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`animate-fade-in-up motion-reduce:animate-none ${
                index === 0
                  ? ''
                  : index === 1
                  ? 'animation-delay-100'
                  : 'animation-delay-200'
              }`}
            >
              <PricingCard
                plan={plan}
                isYearly={isYearly}
                currencySymbol={currencySymbol}
                onSelect={handlePlanSelect}
              />
            </div>
          ))}
        </div>

        {/* ——— Fine Print ——— */}
        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>

      {/* ——— Background Decorative Blobs ——— */}
      <div
        className="absolute top-0 left-0 -z-10 w-72 h-72 sm:w-96 sm:h-96
                   bg-primary-500/5 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 -z-10 w-72 h-72 sm:w-96 sm:h-96
                   bg-purple-500/5 rounded-full blur-3xl"
        aria-hidden="true"
      />
    </section>
  );
}

PricingSection.propTypes = pricingSectionPropTypes;

export default PricingSection;
