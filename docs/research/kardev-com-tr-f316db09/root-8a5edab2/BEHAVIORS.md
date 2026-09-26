# Behavior bible

## Global

- Fixed header is 116px tall on desktop, dark `rgb(21, 19, 19)`, and transitions over `0.5s` while hiding upward after scroll. Mobile collapses to logo + hamburger.
- Page uses a smooth-scroll wrapper and horizontal Swiper carousels. Clone now uses a lightweight inertial wheel layer on desktop, with native/touch fallback and CSS reveal effects.
- Source body uses Maven Pro, 16px base, 24px line-height. Source orange is approximately `#ff9828`; hero is black; body light sections are `#fefefe`.
- Header language strip is orange at the top; active TR tab is darker with rounded top corners.
- Floating WhatsApp CTA is green and fixed bottom-right on desktop. Mobile shows compact fixed controls.

## Hero

- Interaction model: click-driven carousel plus time-driven autoplay in the source; five slides, `1 / 5` through `5 / 5`.
- Each slide swaps large industrial render and text/CTA. Transition is fade/translate-up; source heading uses `opacity: 0 -> 1`, `translateY(40px) -> 0`, `0.7s` with `0.9s` delay.
- Desktop: black 100dvh-ish hero below 152px header space; copy left, render right, pagination/arrows near bottom.
- Mobile: full-bleed render with compact header and controls; text is simplified/overlaid.

## Counters and about

- Counter section is static content with animated number rollers in the source. Clone renders stable numbers to avoid fake metric timing.
- Three counters: `+100 Makine Satışı`, `+250 Proje Teslimi`, `+1000 Mutlu Müşteri`.
- About block uses `HAKKIMIZDA`, four Turkish paragraphs, an orange `HAKKIMIZDA` CTA, and the `about.webp` image.

## Activity carousel

- Interaction model: click/drag carousel, eight activity cards. Source swaps active card and image while arrows advance `1 / 8`.
- Clone exposes previous/next buttons and a responsive grid fallback; cards keep source titles, excerpts, image-led black/orange visual language.

## Products carousel

- Interaction model: click/drag carousel, six product cards. Card image sits above a light-gray content panel with `İNCELE` link.
- Clone uses a responsive grid, keeping visible source hover lift and CTA arrow treatment.

## News and footer

- News is a horizontal media carousel in the source. Clone renders a responsive grid with ten source event names/dates represented by seven local images.
- Footer uses dark background artwork, contact links, social links, grouped navigation, and copyright.

## Controls

- Search icon opens a dark overlay with labeled input and close control. Escape closes it.
- Mobile menu toggles a full-height dark panel. Escape closes it.
- `TEKLİF AL` opens the local contact modal with labeled fields. Submission is demo-only and never transmits data.
- All links have visible focus styles, minimum 44px interactive area, and `aria-label` text where icon-only.

## Motion and accessibility

- CSS transitions use 180–450ms for controls and 700ms hero reveals. `prefers-reduced-motion: reduce` disables autoplay and nonessential transforms.
- No emoji are used as structural icons; arrows, search, menu, phone, mail, and social marks are CSS/SVG-like text-free controls.
