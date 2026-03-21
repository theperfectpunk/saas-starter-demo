/**
 * Format price in cents to a display-friendly string.
 *
 * @param {number} cents - Price in cents (e.g., 2900 = $29.00)
 * @param {string} [currencySymbol='$'] - Currency symbol to prepend
 * @param {boolean|null} [showDecimals=null] - Force decimals on/off.
 *   When `null` (default), decimals are shown only when cents are not
 *   evenly divisible by 100 (e.g., 2950 → "$29.50", 2900 → "$29").
 * @returns {string} Formatted price string
 */
export function formatCurrency(cents, currencySymbol = '$', showDecimals = null) {
  const dollars = cents / 100;

  // Auto-determine decimal display when not explicitly set
  const shouldShowDecimals =
    showDecimals !== null ? showDecimals : cents % 100 !== 0;

  if (shouldShowDecimals) {
    return `${currencySymbol}${dollars.toFixed(2)}`;
  }

  return `${currencySymbol}${Math.floor(dollars)}`;
}

/**
 * Format price with an optional billing-period suffix.
 *
 * @param {number} cents - Price in cents
 * @param {string} [period] - Period text (e.g., "/mo", "/year")
 * @param {string} [currencySymbol='$'] - Currency symbol
 * @returns {string} Formatted price with period (e.g., "$29/mo")
 */
export function formatCurrencyWithPeriod(cents, period, currencySymbol = '$') {
  const price = formatCurrency(cents, currencySymbol);
  return period ? `${price}${period}` : price;
}
