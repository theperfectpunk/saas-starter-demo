import React from 'react';
import { footerColumnPropTypes } from './Footer.types';

/**
 * FooterColumn — Single navigation column rendered inside the Footer grid.
 *
 * Design System References:
 *   - Typography: §3.2 (h4 for title, bodySmall for links)
 *   - Spacing: §3.1 (stack spacing space-y-3 → space-y-4)
 *   - Animation: §3.6 (default transition on hover)
 *   - Accessibility: §3.7 (external links get noopener noreferrer)
 *
 * @param {Object} props
 * @param {string} props.title - Column heading text
 * @param {import('./Footer.types').FooterLink[]} props.links
 */
export function FooterColumn({ title, links }) {
  return (
    <div className="space-y-4">
      {/* Column Title */}
      <h3
        className="text-sm sm:text-base font-semibold uppercase tracking-wider
                   text-gray-900 dark:text-white"
      >
        {title}
      </h3>

      {/* Links List */}
      <ul className="space-y-3" role="list">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-sm text-gray-600 dark:text-gray-400
                         hover:text-primary-600 dark:hover:text-primary-400
                         transition-colors duration-200
                         motion-reduce:transition-none"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

FooterColumn.propTypes = footerColumnPropTypes;

export default FooterColumn;
