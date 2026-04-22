/**
 * Three featured image slots rendered at the top of the homepage.
 *
 * Fill each slot by setting `src` (and optionally `alt` + `href`).
 * Leave a slot as `{}` to show an empty placeholder box.
 * Flip `HIGHLIGHTS_ENABLED` to false to hide the section entirely.
 *
 * Example of a filled slot:
 *   {
 *     src: '/images/highlights/spin-wheel.png',
 *     alt: 'Spin Wheel redesign',
 *     href: '/case-studies/spin-wheel',
 *   }
 */

export const HIGHLIGHTS_ENABLED = true;

export interface Highlight {
  src?: string;
  alt?: string;
  href?: string;
}

export const HIGHLIGHTS: readonly [Highlight, Highlight, Highlight] = [
  {},
  {},
  {},
];
