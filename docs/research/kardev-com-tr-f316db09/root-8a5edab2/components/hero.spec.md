# Hero specification

## Overview

- Target: hero carousel in `index.html`.
- Interaction: click-driven with autoplay; reduced motion disables autoplay.

## Source content

1. `Yem endüstrisi için üst düzey çözümler!`
2. `Çünkü biz KARDEV’de sizin hayallerinize göre çözümsel, anahtar teslim projeler tasarlıyoruz.`
3. `Proses mühendisliğinin gücü.`
4. `Bugünün gücüyle yarınlara dokunun.`
5. `Mühendislikte bir dünya markası.`

## Computed source values

- Background: black.
- Hero section: `padding-top: 152px`, `height: 945px` at 1915×945 source viewport.
- Heading: white Maven Pro SemiBold, 36px computed desktop, line-height 41.4px, letter-spacing -1.44px.
- Heading reveal: `opacity 0 -> 1`, `translateY(40px) -> 0`, `0.7s`, delay `0.9s`.
- CTA: orange rectangular button, uppercase, white text, arrow icon.
- Image: `object-fit: contain`, right half of the composition.

## Responsive behavior

- Desktop: copy and render form two columns.
- Tablet: columns narrow; image remains dominant.
- Mobile: image fills viewport, copy overlays or stacks under the media, controls remain reachable.
