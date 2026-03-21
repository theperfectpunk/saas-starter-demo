import React from 'react';
import { pricingTogglePropTypes } from './Pricing.types';

/**
 * PricingToggle — Monthly / Yearly toggle switch with animated thumb
 * and a conditional savings badge that slides in when yearly is active.
 *
 * Design System References:
 *   - Typography: §3.2 (button scale)
 *   - Animation:  §3.6 (fast transition, reduced motion)
 *   - Accessibility: §3.7 (role="switch", aria-checked, focus ring, sr-only)
 *
 * @param {import('./Pricing.types').PricingToggleProps} props
 */
export function PricingToggle({
  isYearly,
  onToggle,
  monthlyLabel = 'Monthly',
  yearlyLabel = 'Yearly',
  savingsLabel,
}) {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">

      {/* ——— Monthly Label ——— */}
      <span
        className={`text-sm sm:text-base font-medium transition-colors duration-200
                    motion-reduce:transition-none
                    ${!isYearly
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-400'
                    }`}
      >
        {monthlyLabel}
      </span>

      {/* ——— Toggle Switch (role="switch") ——— */}
      <button
        type="button"
        role="switch"
        aria-checked={isYearly}
        aria-label={`Switch to ${isYearly ? 'monthly' : 'yearly'} billing`}
        onClick={onToggle}
        className={`relative inline-flex h-7 w-14 sm:h-8 sm:w-16
                    items-center rounded-full
                    transition-colors duration-300 ease-in-out
                    motion-reduce:transition-none
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                    dark:focus:ring-offset-gray-900
                    ${isYearly
                      ? 'bg-primary-500 hover:bg-primary-600'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
      >
        <span className="sr-only">Toggle pricing period</span>

        {/* Thumb */}
        <span
          className={`inline-block h-5 w-5 sm:h-6 sm:w-6
                      transform rounded-full bg-white shadow-lg
                      transition-transform duration-300 ease-in-out
                      motion-reduce:transition-none
                      ${isYearly ? 'translate-x-8 sm:translate-x-9' : 'translate-x-1'}`}
        />
      </button>

      {/* ——— Yearly Label + Savings Badge ——— */}
      <div className="flex items-center gap-2">
        <span
          className={`text-sm sm:text-base font-medium transition-colors duration-200
                      motion-reduce:transition-none
                      ${isYearly
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-500 dark:text-gray-400'
                      }`}
        >
          {yearlyLabel}
        </span>

        {/* Savings Badge — slides in when yearly is active */}
        {savingsLabel && (
          <span
            className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full
                        bg-success/10 text-success border border-success/20
                        transition-all duration-300 ease-out
                        motion-reduce:transition-none
                        ${isYearly
                          ? 'opacity-100 scale-100 translate-x-0'
                          : 'opacity-0 scale-95 -translate-x-2 pointer-events-none'
                        }`}
          >
            {savingsLabel}
          </span>
        )}
      </div>
    </div>
  );
}

PricingToggle.propTypes = pricingTogglePropTypes;

export default PricingToggle;
