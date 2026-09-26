# Design System Master File

**Project:** Barbalho Contabilidade
**Category:** Consultive accounting / client portal
**Direction:** strategic, clear, practical and close to the entrepreneur

## Brand tokens

| Role | Value |
|---|---|
| Deep navy | `#101522` |
| Navy surface | `#17233e` |
| Primary blue | `#2b5bff` |
| Cyan | `#23d5e6` |
| Signal yellow | `#ffd21a` |
| Paper | `#f7f9fd` |
| Ink | `#15213a` |
| Muted | `#66748e` |

Typography uses the local Maven Pro family. Display headings are bold, compact and short; supporting copy stays readable and restrained.

## UI rules

- Use navy hero/footer surfaces, blue as the primary action, cyan for secondary emphasis and yellow only for highlights/status.
- Keep cards rounded at 20px and controls at 7px; use soft shadows only for elevated previews and modals.
- Portal interactions must expose explicit labels, clear status, local validation and visible focus states.
- Use inline SVG or text labels for icons; do not use emoji as interface icons.
- Keep contrast at 4.5:1 or better, touch targets at least 44px and no horizontal overflow at 375px.
- Respect `prefers-reduced-motion` and keep all essential content in the DOM.
