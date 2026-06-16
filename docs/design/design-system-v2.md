# Oiva Design System v2

## Implementation Principle

The current Astro site already has useful structure. Styling should improve the existing layouts without rewriting the site architecture.

Prefer additive changes:

```txt
Good:
- Add global tokens
- Add utility classes
- Style existing components
- Add wrappers where needed

Avoid:
- Replacing the routing structure
- Rewriting content pages
- Rebuilding layouts from scratch
- Introducing a large UI framework
```

The design system should be implemented through CSS variables and small reusable Astro components.

---

# 1. Design Tokens

## 1.1 Color Tokens

Use semantic tokens throughout the site. Avoid hardcoding raw colors inside components.

```css
:root {
  color-scheme: light;

  --color-bg: #f5f0e4;
  --color-bg-soft: #eee7d6;
  --color-bg-wash: #e7dcc7;

  --color-surface: #fff9ec;
  --color-surface-muted: #ebe5d5;
  --color-surface-raised: #fffdf6;

  --color-text: #203b38;
  --color-text-muted: #5f726d;
  --color-text-subtle: #7e8f88;

  --color-primary: #1f4a43;
  --color-primary-hover: #173a35;
  --color-primary-soft: #d9e2d3;

  --color-accent-yellow: #e7c760;
  --color-accent-blue: #8faeb2;
  --color-accent-green: #93aa8d;
  --color-accent-coral: #d88965;

  --color-code-bg: #112321;
  --color-code-text: #eef6ee;

  --border-subtle: rgba(32, 59, 56, 0.16);
  --border-strong: rgba(32, 59, 56, 0.28);

  --shadow-soft: 0 18px 50px rgba(32, 59, 56, 0.12);
  --shadow-card: 0 10px 28px rgba(32, 59, 56, 0.1);
}
```

```css
[data-theme="dark"] {
  color-scheme: dark;

  --color-bg: #061716;
  --color-bg-soft: #0a1e1c;
  --color-bg-wash: #102a27;

  --color-surface: #0c2220;
  --color-surface-muted: #132d2a;
  --color-surface-raised: #102b28;

  --color-text: #e7efe7;
  --color-text-muted: #a9bab2;
  --color-text-subtle: #82968f;

  --color-primary: #d9bd69;
  --color-primary-hover: #efd27a;
  --color-primary-soft: rgba(217, 189, 105, 0.14);

  --color-accent-yellow: #d9bd69;
  --color-accent-blue: #789ca0;
  --color-accent-green: #6f8f7b;
  --color-accent-coral: #d07b5d;

  --color-code-bg: #020d0c;
  --color-code-text: #e7efe7;

  --border-subtle: rgba(231, 239, 231, 0.14);
  --border-strong: rgba(231, 239, 231, 0.24);

  --shadow-soft: 0 18px 60px rgba(0, 0, 0, 0.35);
  --shadow-card: 0 10px 32px rgba(0, 0, 0, 0.28);
}
```

---

## 1.2 Typography Tokens

```css
:root {
  --font-sans: Inter, Source Sans 3, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-display: Merriweather, Spectral, Georgia, "Times New Roman", serif;
  --font-mono: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
}
```

## Typography Usage

Use the display serif for:

* H1
* H2
* pull quotes
* homepage hero headline

Use sans serif for:

* body text
* navigation
* sidebar
* buttons
* captions
* diagrams
* code-adjacent labels

---

## 1.3 Type Scale

```css
:root {
  --text-xs: 0.78rem;
  --text-sm: 0.9rem;
  --text-base: 1rem;
  --text-md: 1.125rem;
  --text-lg: 1.35rem;
  --text-xl: 1.75rem;
  --text-2xl: 2.35rem;
  --text-3xl: clamp(2.6rem, 6vw, 4.8rem);
}
```

Recommended usage:

```txt
H1: --text-3xl, display serif
H2: --text-2xl, display serif
H3: --text-lg, sans serif or display serif depending on context
Body: --text-base
Lead paragraph: --text-md
Caption: --text-sm
Sidebar: --text-sm
Small label: --text-xs
```

---

## 1.4 Line Heights

```css
:root {
  --leading-tight: 1.08;
  --leading-heading: 1.18;
  --leading-body: 1.72;
  --leading-ui: 1.4;
}
```

Body copy should be comfortable but not overly loose. The site should feel slightly airy, but closer to documentation than magazine design.

---

## 1.5 Spacing Tokens

```css
:root {
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4.5rem;
  --space-4xl: 6rem;
}
```

Usage:

```txt
Inline gaps: xs-sm
Card padding: lg-xl
Section spacing: 2xl-3xl
Homepage hero spacing: 4xl
Docs spacing: lg-2xl
Case study spacing: 2xl-3xl
```

---

## 1.6 Layout Tokens

```css
:root {
  --container-page: 1180px;
  --container-content: 70ch;
  --container-wide-content: 920px;
  --sidebar-width: 260px;
  --header-height: 72px;
}
```

Rules:

* Long-form prose should not exceed `70ch`.
* Diagrams may use `--container-wide-content`.
* The case-study layout should keep the left sidebar but preserve a centered reading column.
* Homepage sections may use the wider page container.

---

## 1.7 Radius Tokens

```css
:root {
  --radius-xs: 6px;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 22px;
  --radius-xl: 32px;
}
```

Usage:

```txt
Small controls: sm
Buttons: sm-md
Cards: lg
Feature panels: xl
Diagram frames: lg-xl
```

---

# 2. Global Page Rules

## 2.1 Body

```css
body {
  margin: 0;
  font-family: var(--font-sans);
  color: var(--color-text);
  background:
    radial-gradient(circle at top left, rgba(231, 199, 96, 0.16), transparent 32rem),
    var(--color-bg);
  line-height: var(--leading-body);
}
```

Dark mode should use a quieter background wash.

```css
[data-theme="dark"] body {
  background:
    radial-gradient(circle at top left, rgba(217, 189, 105, 0.08), transparent 32rem),
    var(--color-bg);
}
```

---

## 2.2 Links

Links should feel integrated, not default blue.

```css
a {
  color: var(--color-primary);
  text-underline-offset: 0.18em;
}

a:hover {
  color: var(--color-primary-hover);
}
```

---

## 2.3 Focus States

Do not remove focus states.

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}
```

---

# 3. Page Archetypes

## 3.1 Case Study Pages

Priority page type.

Should feel like:

* engineering narrative
* technical atlas
* design decision record

Structure:

```txt
Top navigation
↓
Case-study shell
  ├─ Left sidebar
  └─ Main narrative column
       ├─ Section intro
       ├─ Prose
       ├─ Diagrams
       ├─ Callouts
       └─ Tradeoff blocks
```

Rules:

* Sidebar may be more card-like than docs sidebar.
* Main content should be centered and readable.
* Diagrams may break out wider than prose.
* Section backgrounds may use the same subtle decorative wash across all case-study pages.
* Typography should support long-form reading.

---

## 3.2 Getting Started Pages

Should feel like:

* field manual
* installation guide
* technical reference

Rules:

* Denser than case study.
* Code blocks should be prominent.
* Use fewer illustrations.
* Use one consistent background wash or motif across all getting-started pages.
* Prioritize scannability.

---

## 3.3 Homepage

Should combine:

* narrative
* illustration
* system visualizations

Rules:

* Homepage can use heavier illustration.
* Still avoid decorative clutter.
* Visuals should explain the product story.
* Landscape imagery is acceptable here.
* The homepage can feel more expressive than docs and case-study pages.

---

# 4. Component Rules

## 4.1 Header

Header should be calm and minimal.

Rules:

* Sticky only if it does not cause layout issues.
* Use subtle border or translucent surface.
* Logo left.
* Navigation right.
* Theme toggle optional but recommended.

Suggested style:

```css
.site-header {
  min-height: var(--header-height);
  border-bottom: 1px solid var(--border-subtle);
  background: color-mix(in srgb, var(--color-bg) 86%, transparent);
  backdrop-filter: blur(12px);
}
```

If `color-mix` causes compatibility concerns, use a simple solid background.

---

## 4.2 Sidebar

Case study sidebar:

```txt
Card-like
Soft surface
Subtle border
Current item clearly marked
```

Docs sidebar:

```txt
Quieter
Less card-like
More reference-oriented
```

Rules:

* Sidebar should not visually overpower content.
* Active item should use primary color or soft primary background.
* Keep labels short.

---

## 4.3 Buttons

Variants:

```txt
Primary
Secondary
Text
```

Primary:

```css
.button-primary {
  background: var(--color-primary);
  color: var(--color-surface);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
}
```

Dark mode exception:

In dark mode, primary buttons may use warm yellow with dark text if contrast is better.

Secondary:

```css
.button-secondary {
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--border-subtle);
}
```

Rules:

* Rounded but not pill-shaped.
* No heavy shadows.
* Hover should be subtle.

---

## 4.4 Cards

Default card:

```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: var(--space-xl);
}
```

Rules:

* Cards should feel grounded, not floating.
* Use border first, shadow second.
* Avoid dense card grids unless needed.

---

## 4.5 Callouts

Callouts are used for:

* tradeoffs
* lessons learned
* design decisions
* warnings
* implementation notes

Variants:

```txt
Insight: green
Decision: yellow
Warning: coral
Technical note: blue
```

Rule:

Callouts should be visually distinct but not loud.

---

## 4.6 Code Blocks

Use dark code blocks in both light and dark modes.

```css
pre {
  background: var(--color-code-bg);
  color: var(--color-code-text);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  overflow-x: auto;
}
```

Rules:

* Code blocks should stand apart from prose.
* Inline code should use a soft surface, not the full dark block treatment.
* Use readable mono font size.

---

## 4.7 Figures

Every major diagram should use a figure wrapper.

Structure:

```txt
Figure card
├─ Title
├─ Diagram / image
└─ Caption
```

Rules:

* Figure cards may be wider than prose.
* Captions should be short.
* Diagrams should not be full-bleed unless on homepage.
* Use consistent padding and radius.

---

# 5. Diagram System

## 5.1 General Diagram Rules

All diagrams should use the same visual language:

```txt
Rounded rectangles
Thin strokes
Muted colors
Generous spacing
Short labels
Minimal iconography
```

Avoid:

```txt
Dense AWS icon soup
Rainbow color coding
Tiny text
Excessive arrows
3D shapes
```

---

## 5.2 Workflow Diagrams

Use for:

* agent workflow
* investigation process
* data interpretation
* alert approval flow

Style:

* soft organic arrangement
* rounded cards
* subtle background shapes
* optional bear icon as agent marker
* green for primary flow
* yellow for recommendations
* coral for incident/error states

Workflow diagrams may include light illustration support.

---

## 5.3 Infrastructure Diagrams

Use for:

* AWS architecture
* deployment topology
* networking
* storage
* ingestion

Style:

* more structured and grid-aligned
* fewer decorative elements
* clear service boundaries
* solid arrows for runtime/data flow
* configuration/supporting services may be attached visually to the service they support rather than represented with arrows

Important rule:

Do not mix relationship types in a way that makes all arrows ambiguous.

If something is not runtime/data flow, prefer:

```txt
Attached label
Nested badge
Grouped supporting-service box
```

instead of another arrow.

---

# 6. Visual Motifs

Use motifs consistently.

## 6.1 Watercolor Washes

Use for:

* page background accents
* homepage sections
* major case study section breaks

Avoid behind dense text.

---

## 6.2 Topographic Lines

Use for:

* section backgrounds
* diagram frames
* subtle page atmosphere

Should be low contrast.

---

## 6.3 Dotted Grids

Use for:

* technical zones
* diagrams
* subtle structure

Should not resemble generic startup decoration.

---

## 6.4 Layered Landscape Bands

Use for:

* homepage hero
* case study section transitions
* dark mode background accents

---

# 7. Texture Rules

Texture level:

```txt
Medium overall
Heavier only for homepage illustrations
```

Rules:

* Texture should never reduce legibility.
* Avoid texture inside code blocks.
* Avoid texture under dense paragraphs.
* Use lower opacity in dark mode.
* Prefer reusable SVG or CSS overlays over large image files.

---

# 8. Motion Rules

Motion level:

```txt
Mostly static with subtle interaction
```

Allowed:

* hover transitions
* focus transitions
* theme transitions
* slight card elevation

Avoid:

* parallax
* animated landscapes
* constant floating elements
* complex scroll animation

Suggested duration:

```css
:root {
  --duration-fast: 140ms;
  --duration-base: 220ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
}
```

---

# 9. Astro Implementation Notes

## Recommended Files

```txt
src/styles/tokens.css
src/styles/global.css
src/styles/prose.css
src/styles/components.css
```

Import these once in the base layout.

Start with:

```txt
tokens.css
global.css
```

Only split into more files when useful.

---

## Recommended Implementation Order

1. Add CSS tokens.
2. Import global styles in the base layout.
3. Style base typography and body background.
4. Style header/nav.
5. Style sidebar.
6. Style prose content.
7. Style cards/callouts.
8. Style code blocks.
9. Style figure wrappers.
10. Add theme toggle.
11. Add `/style-guide`.

---

## Safety Rules

To avoid breaking the existing Astro site:

```txt
- Do not change routes first.
- Do not rewrite layouts first.
- Do not move content files unless necessary.
- Do not introduce Tailwind or a UI framework unless the project already uses one.
- Do not rename existing components without checking imports.
- Prefer CSS classes and tokens over structural rewrites.
- Make one visual layer work before adding illustrations.
```

---

# 10. Codex Task Prompt

Use this prompt when asking Codex to implement the first styling pass.

```txt
We are styling the existing Astro site for Oiva. Do not rewrite the project structure or routing. First inspect the repo, then implement the design system described in docs/design-system.md.

Priorities:
1. Add semantic CSS tokens for light and dark mode.
2. Add global typography, spacing, body background, links, and focus states.
3. Style the existing header, sidebar, prose content, code blocks, cards, callouts, and figure wrappers.
4. Preserve the existing site structure and content.
5. Add a /style-guide route showing the implemented tokens and components.
6. Add a simple theme toggle only if it can be done without disrupting the current architecture.

Implementation constraints:
- Use Astro-compatible CSS.
- Prefer CSS variables.
- Avoid hardcoded colors in components.
- Avoid a major framework migration.
- Do not move routes or content unless necessary.
- Keep the first pass incremental and easy to review.

Before editing, summarize the current repo structure and list the files you plan to change.
After editing, summarize what changed and any follow-up tasks.
```

---

# 11. Definition of Done for First Styling Pass

The first styling pass is done when:

```txt
- Light mode has a coherent Oiva identity.
- Dark mode works through CSS variables.
- Header, sidebar, prose, cards, code blocks, and figures are styled.
- Case study pages feel intentionally designed.
- Getting Started pages remain readable and scannable.
- The site still builds.
- /style-guide exists and shows the system.
- No routes or content structure are broken.
```
