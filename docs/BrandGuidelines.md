# Engineering Maker Lab Brand Guidelines

## Brand idea

Engineering Maker Lab helps beginners become confident builders. The identity should feel precise and capable without becoming cold, corporate, or overly technical. Visual decisions should reinforce three qualities: practical, trustworthy, and encouraging.

## Logo

The logo combines a hexagonal engineered enclosure with three connected circuit nodes. The hexagon suggests manufactured structure; the circuit path represents learning by connecting ideas and components. The mark contains no mascot and should not be redrawn, rotated, outlined, or combined with unrelated symbols.

Canonical assets:

- Full responsive wordmark: `website/public/brand/logo.svg`
- Standalone mark: `website/public/brand/logo-mark.svg`
- Browser favicon: `website/public/favicon.svg`
- Reusable site component: `website/src/components/design-system/Logo.astro`

The full SVG changes its wordmark color using `prefers-color-scheme`, so the same asset works on light and dark backgrounds. The Astro component exposes explicit `light` and `dark` themes. Use the standalone mark below 120 px wide or when the name already appears nearby.

Maintain clear space equal to at least one circuit-node diameter around the mark. Do not display the full logo below 140 px wide. The orange nodes are accents, not an alternate logo color.

## Color palette

All production values live in `website/src/styles/tokens.css`. Use semantic variables or generated `brand` and `conversion` utilities instead of adding arbitrary colors.

| Role | Token | Hex | Use |
|---|---|---:|---|
| Primary | `--brand-primary` | `#1D4ED8` | Links, primary buttons, active learning states |
| Primary hover | `--brand-primary-hover` | `#1E40AF` | Hover and pressed states |
| Primary soft | `--brand-primary-soft` | `#EFF6FF` | Informational badges and highlighted learning blocks |
| Conversion | `--brand-conversion` | `#C2410C` | Purchase-oriented calls to action and disclosure emphasis |
| Conversion hover | `--brand-conversion-hover` | `#9A3412` | Conversion action hover state |
| Decorative orange | `--color-conversion-500` | `#F97316` | Logo nodes and non-text accents only |
| Strong text | `--text-strong` | `#0F172A` | Headings and high-emphasis copy |
| Default text | `--text-default` | `#334155` | Body copy |
| Muted text | `--text-muted` | `#64748B` | Metadata and supporting copy |
| Canvas | `--surface-canvas` | `#F8FAFC` | Page background |
| Raised surface | `--surface-raised` | `#FFFFFF` | Cards and controls |
| Inverse surface | `--surface-inverse` | `#020617` | Footer and featured conversion panels |
| Border | `--border-default` | `#E2E8F0` | Card and section borders |

Blue communicates learning and engineering. Orange is reserved for commercial intent, disclosure emphasis, and small brand accents. Do not use orange as a general navigation color.

## Typography

The product uses a system-first sans-serif stack: Inter when installed, followed by platform UI fonts. This avoids a blocking web-font request while keeping a modern technical character. Code uses Cascadia Code, SFMono-Regular, Consolas, or another system monospace.

- Display headings: `heading-display`, 900 weight, tight tracking.
- Section headings: `heading-section`, 800 weight.
- Card headings: 700 weight, normally 20 px.
- Body: 16 px with approximately 1.6-1.8 line height for instructional content.
- Metadata and labels: 12-14 px, 700-800 weight.
- Eyebrows: `eyebrow`, uppercase with 0.18 em tracking.

Use sentence case for headings and buttons. Avoid all caps except short eyebrows and technical abbreviations.

## Spacing

Spacing follows a 4 px base grid. Tokens range from `--space-1` (4 px) through `--space-20` (80 px). Prefer this sequence:

- 4-8 px: icon and inline-label gaps
- 12-16 px: compact control and metadata spacing
- 20-24 px: card padding and grouped content
- 32-48 px: component and subsection separation
- 64-80 px: major page sections

Do not introduce one-off spacing unless required by an image aspect ratio or a documented responsive constraint.

## Buttons and links

Use `Button.astro` for button-shaped controls and calls to action.

- `primary`: the next learning or navigation action
- `conversion`: retailer and purchase-intent actions
- `secondary`: lower-emphasis alternatives
- `inverse`: controls on dark surfaces

Buttons use a pill radius, minimum 44 px touch height, bold 14 px labels, and consistent hover/focus behavior. Inactive affiliate destinations are not rendered; only verified retailer URLs should appear as actions. Use `text-link` plus the shared arrow icon for inline card links.

## Badges

Use `Badge.astro` with semantic tones including `brand`, `success`, `conversion`, `advanced`, `neutral`, and `inverse`. DifficultyBadge maps Beginner to brand blue, Easy to success green, Intermediate to conversion orange, and Advanced to strong slate. Neutral supports time, category, and secondary metadata. Inverse is for dark surfaces.

Badges are short labels, not sentences. Do not make badges interactive.

## Cards, radius, and shadows

Use `surface-card` for standard raised content and add `surface-card--interactive` only when the card contains a primary destination.

- Control radius: `--radius-control` / 12 px
- Surface radius: `--radius-surface` / 16 px
- Card radius: `--radius-card` / 24 px
- Button and badge radius: `--radius-pill`
- Standard card shadow: `--shadow-surface`
- Hero and featured-panel shadow: `--shadow-elevated`

Avoid stacking multiple shadow styles or using elevation on every container. Borders should define most static surfaces; shadows indicate raised or interactive content.

## Icon system

All interface icons use `website/src/components/design-system/Icon.astro`. The system uses a 24 px viewBox, two-pixel outline stroke, round caps, and round joins. Default rendered size is 18 px.

Available icons include arrows, check, plus, and external link. Do not use Unicode arrows, emoji, filled icon families, or unrelated third-party icon styles in interface controls. Technical diagrams and the circuit-based logo are illustrations, not UI icons.

## Imagery

Project imagery should show a finished build or a clean breadboard from a slightly elevated angle. Use neutral backgrounds, diffuse light, accurate wire colors, and enough empty space for responsive crops. Circuit diagrams should use the palette's slate lines, brand-blue signal paths, and orange only to call out a critical node.

Do not use novelty robots, mascots, exaggerated sparks, unsafe wiring, or imagery that suggests mains-voltage work in beginner content. Technical illustrations should use the same blue, orange, and slate palette and clearly describe the represented project or product.

## Writing tone

Write like a calm lab partner:

- Lead with the practical outcome.
- Use direct verbs and short, concrete steps.
- Explain why a safety constraint matters.
- Assume intelligence, not prior electronics knowledge.
- Prefer “check the shared ground” over “verify circuit integrity.”
- Avoid hype, fear, unexplained jargon, and claims that a product is universally best.

## Accessibility

- Maintain at least WCAG AA contrast: 4.5:1 for normal text and 3:1 for large text and interface boundaries.
- Use the dark conversion orange for white button labels; bright orange is decorative only.
- Preserve the global visible focus ring and logical keyboard order.
- Keep interactive targets at least 44 px high or wide where practical.
- Give informative images meaningful alternative text; use empty alt text only for decorative images.
- Never communicate difficulty, status, or affiliate state by color alone.
- Use semantic headings, lists, navigation landmarks, and native disclosure elements.
- Respect user color-scheme preferences in standalone logo assets.

## Affiliate disclosure style

Affiliate disclosures use the `affiliate-disclosure` component class: a soft orange background, dark readable text, a standard surface radius and shadow, and a four-pixel conversion-orange left border. The heading must say “Affiliate disclosure” without euphemism.

Place the disclosure before or adjacent to the first affiliate action on a page. Retail buttons use the conversion style for Amazon, the primary style for SunFounder, and secondary style for additional vendors. Inactive or unverified destinations must not render as buttons. Disclosure text should be plain, concise, and never visually hidden or de-emphasized below normal supporting text.
