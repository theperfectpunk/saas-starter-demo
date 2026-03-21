import React, { useMemo } from 'react';
import { Check, X } from 'lucide-react';
import { pricingCardPropTypes } from './Pricing.types';
import { formatCurrency } from '../../../utils/formatCurrency';
import { calculateYearlyPrice } from '../../../utils/calculateYearlyPrice';

/**
 * PricingCard — Individual pricing plan card with dynamic price display,
 * feature checklist, and highlighted "recommended" variant.
 *
 * Design System References:
 *   - Card: §3.4 (.card, .card-highlighted)
 *   - Spacing: §3.1 (card padding p-6 → p-8)
 *   - Typography: §3.2 (h3, bodySmall, badge)
 *   - Animation: §3.6 (hover lift on highlighted, price transition)
 *   - Accessibility: §3.7 (aria-disabled, aria-hidden on icons)
 *
 * @param {Object} props
 * @param {import('./Pricing.types').PricingPlan} props.plan
 * @param {boolean} props.isYearly
 * @param {string}  [props.currencySymbol='$']
 * @param {Function} [props.onSelect]
 */
export function PricingCard({
  plan,
  isYearly,
  currencySymbol = '$',
  onSelect,
}) {
  const {
    id,
    name,
    description,
    monthlyPrice,
    yearlyDiscount = 20,
    features,
    buttonText,
    buttonHref = '#',
    highlighted = false,
    highlightLabel,
    disabled = false,
  } = plan;

  // ——— Price Calculation ———
  const { displayPrice, savings } = useMemo(() => {
    if (isYearly && monthlyPrice > 0) {
      const calc = calculateYearlyPrice(monthlyPrice, yearlyDiscount);
      return { displayPrice: calc.monthlyEquivalent, savings: calc.savings };
    }
    return { displayPrice: monthlyPrice, savings: 0 };
  }, [isYearly, monthlyPrice, yearlyDiscount]);

  const handleClick = (e) => {
    if (onSelect) {
      e.preventDefault();
      onSelect(id, isYearly);
    }
  };

  return (
    <div
      className={`
        relative flex flex-col
        p-6 sm:p-8
        ${highlighted
          ? 'card card-highlighted md:scale-105'
          : 'card'
        }
        ${highlighted ? 'hover-lift' : ''}
        ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
        transition-all duration-200 motion-reduce:transition-none
      `}
    >

      {/* ——— Highlighted Badge (e.g. "Most Popular") ——— */}
      {highlighted && highlightLabel && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full
                       bg-primary-600 text-white text-xs sm:text-sm font-semibold
                       shadow-lg shadow-primary-500/25"
          >
            {highlightLabel}
          </span>
        </div>
      )}

      {/* ——— Plan Header ——— */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>

      {/* ——— Price Display with Transition ——— */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          {/* Animated price number */}
          <span
            key={displayPrice}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white
                       animate-fade-in motion-reduce:animate-none"
          >
            {monthlyPrice === 0
              ? 'Free'
              : formatCurrency(displayPrice, currencySymbol, false)}
          </span>

          {monthlyPrice > 0 && (
            <span className="text-lg text-gray-500 dark:text-gray-400 font-normal">
              /mo
            </span>
          )}
        </div>

        {/* Savings callout (yearly only) */}
        {isYearly && savings > 0 && (
          <div
            className="mt-2 animate-fade-in-up motion-reduce:animate-none"
          >
            <span className="inline-block text-sm font-medium text-success">
              Save {formatCurrency(savings, currencySymbol)} per year
            </span>
          </div>
        )}

        {/* Billed-annually fine print */}
        {isYearly && monthlyPrice > 0 && (
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Billed annually
          </p>
        )}
      </div>

      {/* ——— CTA Button ——— */}
      <a
        href={buttonHref}
        onClick={handleClick}
        className={`
          w-full text-center mb-8
          ${highlighted ? 'btn-primary' : 'btn-secondary'}
          ${disabled ? 'pointer-events-none' : ''}
        `}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {buttonText}
      </a>

      {/* ——— Feature List ——— */}
      <ul className="space-y-3 sm:space-y-4 flex-1" role="list">
        {features.map((feature, index) => {
          const included = feature.included !== false; // default true per spec
          return (
            <li key={index} className="flex items-start gap-3">
              {included ? (
                <Check
                  className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
              ) : (
                <X
                  className="w-5 h-5 text-gray-300 dark:text-gray-600 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
              )}
              <span
                className={`text-sm sm:text-base ${
                  included
                    ? 'text-gray-700 dark:text-gray-300'
                    : 'text-gray-400 dark:text-gray-500 line-through'
                }`}
              >
                {feature.text}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

PricingCard.propTypes = pricingCardPropTypes;

export default PricingCard;
