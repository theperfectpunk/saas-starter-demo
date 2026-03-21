import PropTypes from 'prop-types';

/* ───────────────────────────────────────────────
   JSDoc Type Definitions (ARCHITECTURE.md §2.2)
   ─────────────────────────────────────────────── */

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

/**
 * @typedef {Object} PricingToggleProps
 * @property {boolean} isYearly - Current state (true = yearly, false = monthly)
 * @property {Function} onToggle - Toggle handler function
 * @property {string} [monthlyLabel] - Label for monthly option (default: "Monthly")
 * @property {string} [yearlyLabel] - Label for yearly option (default: "Yearly")
 * @property {string} [savingsLabel] - Savings badge text (optional)
 */

/* ───────────────────────────────────────────────
   PropTypes — Shared Feature Shape
   ─────────────────────────────────────────────── */

export const planFeaturePropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  included: PropTypes.bool,
});

/* ───────────────────────────────────────────────
   PropTypes — PricingCard / PricingSection Plan
   ─────────────────────────────────────────────── */

export const pricingPlanPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  monthlyPrice: PropTypes.number.isRequired,
  yearlyDiscount: PropTypes.number,
  features: PropTypes.arrayOf(planFeaturePropType).isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonHref: PropTypes.string,
  highlighted: PropTypes.bool,
  highlightLabel: PropTypes.string,
  disabled: PropTypes.bool,
});

/* ───────────────────────────────────────────────
   PropTypes — PricingToggle
   ─────────────────────────────────────────────── */

export const pricingTogglePropTypes = {
  isYearly: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  monthlyLabel: PropTypes.string,
  yearlyLabel: PropTypes.string,
  savingsLabel: PropTypes.string,
};

/* ───────────────────────────────────────────────
   PropTypes — PricingCard
   ─────────────────────────────────────────────── */

export const pricingCardPropTypes = {
  plan: pricingPlanPropType.isRequired,
  isYearly: PropTypes.bool.isRequired,
  currencySymbol: PropTypes.string,
  onSelect: PropTypes.func,
};

/* ───────────────────────────────────────────────
   PropTypes — PricingSection
   ─────────────────────────────────────────────── */

export const pricingSectionPropTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  plans: PropTypes.arrayOf(pricingPlanPropType).isRequired,
  currency: PropTypes.string,
  currencySymbol: PropTypes.string,
  defaultToYearly: PropTypes.bool,
  onPlanSelect: PropTypes.func,
  monthlyLabel: PropTypes.string,
  yearlyLabel: PropTypes.string,
  yearlySavingsLabel: PropTypes.string,
};
