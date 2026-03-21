import PropTypes from 'prop-types';

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

/**
 * PropTypes definition for the SplitHero component.
 * Validates all incoming props for type safety and required fields.
 */
export const splitHeroPropTypes = {
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string.isRequired,
  primaryButtonHref: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  secondaryButtonHref: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  reverseLayout: PropTypes.bool,
  badge: PropTypes.node,
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func,
};

/**
 * Default props for the SplitHero component.
 */
export const splitHeroDefaultProps = {
  primaryButtonHref: '#',
  secondaryButtonHref: '#',
  reverseLayout: false,
  badge: null,
  secondaryButtonText: null,
  onPrimaryClick: null,
  onSecondaryClick: null,
};
