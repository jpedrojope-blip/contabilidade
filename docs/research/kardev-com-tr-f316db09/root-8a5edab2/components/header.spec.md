# Header specification

## Overview

- Target: `index.html` header markup and `styles.css` header rules.
- Interaction: fixed header, mobile menu toggle, search overlay, language links, offer modal.

## Computed source values

- Header: `position: fixed`, `height: 116px`, `background: rgb(21, 19, 19)`, `transition: 0.5s`, `z-index: 100`.
- Language strip: orange `#ff9828`, 36px desktop height.
- Desktop nav: white Maven Pro, 16px, center-aligned; offer CTA border orange with letter spacing.
- Mobile: dark header around 58px below 35px language strip; logo is left, menu control right.

## Responsive behavior

- 1440/1915px: full nav visible.
- 768px: nav compresses; CTA remains visible if space allows.
- 390px: nav links hidden, hamburger shown, full-screen menu panel.
