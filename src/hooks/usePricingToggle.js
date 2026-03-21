import { useState, useCallback } from 'react';

/**
 * Custom hook for managing the monthly / yearly pricing toggle.
 *
 * Exact API from ARCHITECTURE.md §4 Phase 3:
 *   const { isYearly, toggle, setIsYearly } = usePricingToggle(false);
 *
 * @param {boolean} [defaultYearly=false] - Initial toggle state
 * @returns {{ isYearly: boolean, toggle: () => void, setIsYearly: Function }}
 */
export function usePricingToggle(defaultYearly = false) {
  const [isYearly, setIsYearly] = useState(defaultYearly);

  const toggle = useCallback(() => setIsYearly((prev) => !prev), []);

  return {
    isYearly,
    toggle,
    setIsYearly,
  };
}
