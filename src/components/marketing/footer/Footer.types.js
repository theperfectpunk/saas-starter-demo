import PropTypes from 'prop-types';

/* ───────────────────────────────────────────────
   JSDoc Type Definitions (ARCHITECTURE.md §2.3)
   ─────────────────────────────────────────────── */

/**
 * @typedef {Object} FooterLink
 * @property {string} label - Link display text
 * @property {string} href - Link URL
 * @property {boolean} [external] - Opens in new tab (default: false)
 */

/**
 * @typedef {Object} FooterColumnData
 * @property {string} title - Column heading
 * @property {FooterLink[]} links - Array of links in column
 */

/**
 * @typedef {Object} SocialLink
 * @property {string} platform - Platform name (twitter, github, linkedin, etc.)
 * @property {string} href - Profile URL
 * @property {string} [ariaLabel] - Accessibility label
 */

/**
 * @typedef {Object} FooterProps
 * @property {React.ReactNode} [logo] - Logo component or image (optional)
 * @property {string} [companyName] - Company name for copyright
 * @property {string} [tagline] - Short company tagline under logo
 * @property {FooterColumnData[]} columns - Navigation columns (max 4 recommended)
 * @property {SocialLink[]} [socialLinks] - Social media links
 * @property {string} [copyrightText] - Custom copyright text (auto-generates year if omitted)
 * @property {FooterLink[]} [legalLinks] - Bottom legal links (Privacy, Terms, etc.)
 * @property {React.ReactNode} [newsletter] - Optional newsletter signup component
 */

/* ───────────────────────────────────────────────
   PropTypes — Shared Link Shape
   ─────────────────────────────────────────────── */

export const footerLinkPropType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  external: PropTypes.bool,
});

/* ───────────────────────────────────────────────
   PropTypes — Column Data Shape
   ─────────────────────────────────────────────── */

export const footerColumnPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(footerLinkPropType).isRequired,
});

/* ───────────────────────────────────────────────
   PropTypes — Social Link Shape
   ─────────────────────────────────────────────── */

export const socialLinkPropType = PropTypes.shape({
  platform: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
});

/* ───────────────────────────────────────────────
   PropTypes — FooterColumn Sub-Component
   ─────────────────────────────────────────────── */

export const footerColumnPropTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(footerLinkPropType).isRequired,
};

/* ───────────────────────────────────────────────
   PropTypes — Footer Main Component
   ─────────────────────────────────────────────── */

export const footerPropTypes = {
  logo: PropTypes.node,
  companyName: PropTypes.string,
  tagline: PropTypes.string,
  columns: PropTypes.arrayOf(footerColumnPropType).isRequired,
  socialLinks: PropTypes.arrayOf(socialLinkPropType),
  copyrightText: PropTypes.string,
  legalLinks: PropTypes.arrayOf(footerLinkPropType),
  newsletter: PropTypes.node,
};
