# Oiva Design System v1

## Purpose

This document defines the visual identity and design principles for the Oiva website.

The goal is not to create a traditional SaaS marketing site. Oiva's website should feel like an engineering case study, technical field guide, and project documentation site.

The visual language should communicate:

* Clarity over noise
* Understanding over monitoring
* Investigation over dashboards
* Calm confidence rather than urgency
* Engineering rigor without corporate sterility

---

# Brand Philosophy

## Core Narrative

Oiva helps engineers move from signals to understanding.

Most observability products focus on collecting data.

Oiva focuses on helping engineers understand what that data means.

The website should reflect this journey:

```text
Signals
↓
Patterns
↓
Understanding
↓
Action
```

This narrative should appear throughout:

* page structure
* illustrations
* diagrams
* visual motifs
* copywriting

---

# Visual Identity

## Primary Inspiration

* Scientific atlas
* Technical field guide
* Nordic design
* Observatory maps
* Landscape surveys
* System maps

## Secondary Inspiration

* National park maps
* Engineering notebooks
* Watercolor cartography
* Topographic drawings

## Avoid

* Generic SaaS gradients
* Corporate blue branding
* Glassmorphism
* Heavy skeuomorphism
* Cyberpunk aesthetics
* Neon colors
* Excessive motion
* Overly playful mascots

---

# Site Personality

The site should feel:

* Calm
* Reflective
* Thoughtful
* Precise
* Trustworthy
* Technical

The site should not feel:

* Aggressive
* Sales-driven
* Trendy
* Futuristic
* Playful for its own sake

---

# Layout Philosophy

## Narrative First

The website is primarily a storytelling experience.

Visuals support the narrative.

Visuals should never compete with the content.

Case studies and technical explanations are the primary product.

---

# Page Priorities

## Priority 1

Case Study

This is the most important page type.

The visual language should be optimized for:

* long-form reading
* architecture diagrams
* tradeoff discussions
* engineering decisions

## Priority 2

Getting Started

Should feel like:

* a technical guide
* a field manual
* a reference document

## Priority 3

Homepage

Should combine:

* narrative
* illustration
* visual explanation

Homepage visuals may be more expressive than other pages.

---

# Color System

## Light Mode

Background

```css
--color-bg: #f5f0e4;
```

Primary Surface

```css
--color-surface: #fff9ec;
```

Text

```css
--color-text: #203b38;
```

Muted Text

```css
--color-text-muted: #5f726d;
```

Primary Green

```css
--color-primary: #1f4a43;
```

Accent Yellow

```css
--color-accent-yellow: #e7c760;
```

Accent Blue

```css
--color-accent-blue: #8faeb2;
```

Accent Green

```css
--color-accent-green: #93aa8d;
```

Accent Coral

```css
--color-accent-red: #d88965;
```

---

## Dark Mode

Dark mode is an adaptation of the light theme.

Light mode is the canonical version.

Dark mode should feel like:

* night landscape
* observatory
* moonlit atlas

Not:

* hacker terminal
* cyberpunk dashboard

Background

```css
--color-bg: #061716;
```

Surface

```css
--color-surface: #0c2220;
```

Text

```css
--color-text: #e7efe7;
```

Primary Accent

```css
--color-primary: #d9bd69;
```

---

# Typography

## Headings

Display Serif

Preferred:

* Merriweather
* Spectral
* Source Serif

Purpose:

* page titles
* section titles
* major callouts

---

## Body

Sans Serif

Preferred:

* Inter
* Source Sans 3

Purpose:

* paragraphs
* navigation
* UI
* captions

---

## Philosophy

Headings should feel editorial.

Body text should feel technical.

---

# Illustration Style

## Homepage

Use landscape-inspired illustrations.

Examples:

* mountains
* forests
* lighthouse
* horizon lines
* moon or sun
* birds

These illustrations should represent:

* discovery
* perspective
* understanding

---

## Docs and Case Study

Use abstracted landscape forms.

Examples:

* watercolor bands
* topographic contours
* layered hills
* geometric overlays

Avoid large scenic illustrations in content-heavy pages.

---

# Texture

## General Rule

Texture should be visible but subtle.

The user should notice texture subconsciously.

The user should not notice texture consciously.

---

## Appropriate Uses

* page backgrounds
* illustration areas
* section dividers

---

## Avoid

* textured body text
* textured diagrams
* textured UI controls

---

# Bear Usage

The bear is a symbol, not a mascot.

Use the bear:

* logo
* favicon
* occasional diagram markers
* workflow illustrations
* section accents

Do not use:

* cartoon characters
* speech bubbles
* recurring comic scenes

---

# Diagram System

## Philosophy

Diagrams are first-class content.

Oiva is explained primarily through diagrams.

Diagrams should feel like technical illustrations rather than presentation slides.

---

# Workflow Diagrams

Reference style:

Agent workflow mock.

Characteristics:

* rounded cards
* soft colors
* organic spacing
* subtle illustration support
* occasional bear icon

Examples:

* supervisor agent
* subagent workflows
* investigation lifecycle
* incident flow

---

# Infrastructure Diagrams

Reference style:

Infrastructure overview mock.

Characteristics:

* structured
* grid aligned
* layered architecture
* AWS-friendly
* minimal decoration

Examples:

* deployment architecture
* ingestion pipeline
* storage systems
* service boundaries

---

# Diagram Colors

Primary Flow

Green

Configuration / Metadata

Muted Blue-Green

Recommendations

Yellow

Incidents / Errors

Coral

Neutral Relationships

Muted Gray-Green

---

# Diagram Rules

Do:

* rounded corners
* thin strokes
* sentence case labels
* simple icons
* generous whitespace

Do Not:

* crowded diagrams
* excessive AWS icons
* rainbow colors
* dense arrows

---

# Components

## Buttons

Rounded rectangle.

Not pill-shaped.

Primary:

Dark green background.

Secondary:

Outlined.

---

## Cards

Rounded corners.

Soft border.

Minimal shadow.

Used heavily throughout the site.

---

## Sidebars

Persistent.

Quiet.

Support navigation.

Never visually dominate content.

---

## Figures

Every diagram should live inside a figure container.

Include:

* title
* optional caption
* consistent spacing

---

# Motion

Motion should support understanding.

Allowed:

* hover states
* theme transitions
* subtle fades
* small elevation changes

Avoid:

* parallax
* animated backgrounds
* looping decorative animation

---

# Design Test

Before introducing a new visual element, ask:

1. Does it help explain the system?
2. Does it support the narrative?
3. Does it reduce cognitive load?
4. Would it belong in a technical atlas?

If not, it likely does not belong on the site.

---

# Summary

Oiva should feel like:

"A technical atlas for understanding systems."

Not:

"A dashboard vendor."

Not:

"A startup landing page."

Not:

"A mascot-driven product."

The site should combine engineering rigor, visual calm, and narrative clarity into a single cohesive experience.
