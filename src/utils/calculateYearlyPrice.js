/**
 * Calculate yearly price with discount.
 *
 * Uses the exact math from ARCHITECTURE.md §2.2:
 *   yearlyFullPrice    = monthlyPriceCents × 12
 *   discountAmount     = round(yearlyFullPrice × discountPercent / 100)
 *   yearlyTotal        = yearlyFullPrice − discountAmount
 *   monthlyEquivalent  = round(yearlyTotal / 12)
 *
 * @param {number} monthlyPriceCents - Monthly price in cents (e.g., 2900 = $29)
 * @param {number} [discountPercent=20] - Yearly discount percentage (0-100)
 * @returns {{ monthlyEquivalent: number, yearlyTotal: number, savings: number }}
 */
export function calculateYearlyPrice(monthlyPriceCents, discountPercent = 20) {
  const yearlyFullPrice = monthlyPriceCents * 12;
  const discountAmount = Math.round(yearlyFullPrice * (discountPercent / 100));
  const yearlyTotal = yearlyFullPrice - discountAmount;
  const monthlyEquivalent = Math.round(yearlyTotal / 12);

  return {
    monthlyEquivalent, // Display as "monthly" price when yearly is selected
    yearlyTotal,       // Total yearly cost
    savings: discountAmount, // Amount saved per year in cents
  };
}
