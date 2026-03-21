import React from 'react';
import {
  Twitter,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Dribbble,
  Globe,
} from 'lucide-react';
import { FooterColumn } from './FooterColumn';
import { footerPropTypes } from './Footer.types';

/* ───────────────────────────────────────────────
   Platform → Lucide Icon Mapping (§4 Phase 4 Step 3)
   ─────────────────────────────────────────────── */

const SOCIAL_ICONS = {
  twitter: Twitter,
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  dribbble: Dribbble,
  website: Globe,
};

/**
 * Footer — Responsive multi-column footer with brand section,
 * navigation columns, social icons, and a bottom bar.
 *
 * Layout Strategy (§4 Phase 4 Step 2):
 *   Mobile:  Brand spans full width, nav columns in 2×2 grid
 *   Tablet+: 6-column grid — brand takes 2 cols, 4 nav cols take 1 each
 *
 * Design System References:
 *   - Spacing: §3.1 (section padding, stack spacing, component gap)
 *   - Typography: §3.2 (bodySmall, caption)
 *   - Animation: §3.6 (hover color transitions on links/icons)
 *   - Accessibility: §3.7 (aria-labels on social links, external link handling)
 *
 * @param {import('./Footer.types').FooterProps} props
 */
export function Footer({
  logo,
  companyName,
  tagline,
  columns,
  socialLinks = [],
  copyrightText,
  legalLinks = [],
  newsletter,
}) {
  // Dynamic copyright year (§4 Phase 4 Step 2)
  const currentYear = new Date().getFullYear();
  const copyright =
    copyrightText ||
    `© ${currentYear} ${companyName || 'Company'}. All rights reserved.`;

  return (
    <footer
      className="relative w-full bg-white dark:bg-gray-900
                 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ============================================================
            MAIN FOOTER GRID
            Mobile:   2-col grid → brand spans 2 (full), nav cols are 2×2
            Tablet+:  6-col grid → brand spans 2, nav cols span 1 each
            ============================================================ */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 mb-12">

          {/* ——— Brand Column (spans 2 cols) ——— */}
          <div className="col-span-2 space-y-4">

            {/* Logo */}
            {logo && (
              <div className="mb-2">
                {logo}
              </div>
            )}

            {/* Company Name (fallback if no logo) */}
            {!logo && companyName && (
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                {companyName}
              </div>
            )}

            {/* Tagline */}
            {tagline && (
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
                {tagline}
              </p>
            )}

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-4 pt-2">
                {socialLinks.map((social, index) => {
                  const IconComponent =
                    SOCIAL_ICONS[social.platform.toLowerCase()];

                  if (!IconComponent) return null;

                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={
                        social.ariaLabel ||
                        `Visit our ${social.platform} page`
                      }
                      className="text-gray-500 dark:text-gray-400
                                 hover:text-primary-600 dark:hover:text-primary-400
                                 hover:scale-110
                                 transition-all duration-200
                                 motion-reduce:transition-none motion-reduce:hover:transform-none"
                    >
                      <IconComponent
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>
            )}

            {/* Newsletter Slot (optional) */}
            {newsletter && (
              <div className="pt-4">
                {newsletter}
              </div>
            )}
          </div>

          {/* ——— Navigation Columns (1 col each) ——— */}
          {columns.map((column, index) => (
            <div key={index} className="col-span-1">
              <FooterColumn
                title={column.title}
                links={column.links}
              />
            </div>
          ))}
        </div>

        {/* ============================================================
            FOOTER BOTTOM BAR
            Horizontal separator + copyright left / legal links right
            ============================================================ */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
              {copyright}
            </p>

            {/* Legal Links */}
            {legalLinks.length > 0 && (
              <nav aria-label="Legal links">
                <ul className="flex items-center gap-6" role="list">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-sm text-gray-500 dark:text-gray-400
                                   hover:text-primary-600 dark:hover:text-primary-400
                                   transition-colors duration-200
                                   motion-reduce:transition-none"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = footerPropTypes;

export default Footer;
