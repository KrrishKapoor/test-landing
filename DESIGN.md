# Design System — Krrish Kapoor

A premium, production-feeling personal site for a Toronto data analyst / data engineer / AI engineer / agent systems architect. The visual taste is **70% Linear**, **20% Vercel**, **10% VoltAgent / Supabase**: a near-black SaaS canvas, precise grids, monospace system metadata, restrained accent colors, and product-system feel. The site must read as a credible engineer's portfolio — not a hacker dashboard, not a marketing landing template.

---

## 1. Voice & visual principles

1. **Proof over pitch.** Numbers, trace IDs, model names, latency, % deltas. Real artifacts where possible.
2. **System metadata is the texture.** Monospace labels, eyebrow counters (`01 — Capabilities`), small tag rows, terminal-style snippets. Used sparingly to feel like infrastructure, not decoration.
3. **Restraint with color.** The canvas is near-black. Accents are used to draw the eye, never to fill space. No long color blocks, no neon walls.
4. **Precise grids.** All major surfaces sit on an 8px rhythm. Sections never feel floaty.
5. **Typography carries the brand.** Tight tracking, large display sizes, careful subheads. Gradients used at most once per section.
6. **Motion conveys causality.** A pulse, a path animation, a tiny stagger on entry — never spinning logos, never confetti.

### Anti-patterns (do not do)
- ❌ Emoji as structural icons
- ❌ Cloned logos / wordmarks from Linear, Vercel, Supabase, VoltAgent
- ❌ Gradient text on every heading
- ❌ "Cyberpunk" neon backgrounds, glowing perimeter borders on every card
- ❌ Marketing fluff: "leverage", "synergy", "transform your business"
- ❌ Stock buzzword badges ("ENTERPRISE-GRADE", "10x")
- ❌ Animations that hide content if JS / motion fails

---

## 2. Color tokens

The palette is intentionally narrow. Accents are used as *signal*, not as decoration.

### Surfaces
| Token             | Value                          | Use                                  |
|-------------------|--------------------------------|--------------------------------------|
| `--bg-0`          | `#08090d`                      | Page background (true canvas)        |
| `--bg-1`          | `#0b0d12`                      | Section backgrounds                  |
| `--bg-2`          | `#10131a`                      | Elevated panels (diagram, hero card) |
| `--surface`       | `rgba(20, 24, 33, 0.7)`        | Card body (slight glassiness)        |
| `--surface-2`     | `rgba(26, 31, 42, 0.85)`       | Hover / elevated card                |

### Borders
| Token              | Value                         | Use                                  |
|--------------------|-------------------------------|--------------------------------------|
| `--border`         | `rgba(255,255,255,0.06)`      | Subdivisions, dashed rules           |
| `--border-strong`  | `rgba(255,255,255,0.12)`      | Card outlines                        |
| `--border-accent`  | `rgba(125,211,252,0.35)`      | Focused / highlighted boundaries     |

### Text
| Token         | Value      | Use                                            |
|---------------|------------|------------------------------------------------|
| `--text`      | `#e7e9ef`  | Headings, primary text                         |
| `--text-dim`  | `#9aa1af`  | Body, descriptions                             |
| `--text-mute` | `#6a7180`  | Metadata, captions, mono labels                |

### Accents — used sparingly
| Token         | Value      | Role                                           |
|---------------|------------|------------------------------------------------|
| `--accent`    | `#7dd3fc`  | Primary signal — links, key labels             |
| `--accent-2`  | `#22d3ee`  | Hover / data-flow / pulse                      |
| `--signal`    | `#a3e635`  | Positive deltas, status: ok                    |
| `--lavender`  | `#c4b5fd`  | Tertiary tag (used in tags / chips, not text)  |
| `--warn`      | `#f59e0b`  | Caution metadata (rare)                        |
| `--danger`    | `#f43f5e`  | Errors (not used in product surfaces)          |

### Accent usage rules
- **Cyan** is the dominant accent — eyebrows, key labels, primary CTA gradient stop.
- **Lime/signal** is *only* for positive deltas, status dots, and the secondary stop in the primary CTA gradient.
- **Lavender** appears in stack chips and architecture badges to break up cyan dominance; never in body text.
- Never combine all three accents in one viewport region.

### Contrast targets
- Body text on `--bg-0`: ≥ 7.0 : 1 (`#e7e9ef` ≈ 14.5:1).
- Dim text on `--bg-0`: ≥ 4.6 : 1 (`#9aa1af` ≈ 6.8:1).
- Mute text only used at ≥ 11px and never as the only signal.

---

## 3. Typography

### Families
- **Sans (UI + body):** Inter, `system-ui` fallback. Variable axes used for weight 300–800.
- **Mono (metadata + code):** JetBrains Mono. Used at 11–13px in caps for labels, ALL-CAPS eyebrows, and code-like snippets.

### Scale
| Level         | Size                              | Weight | Tracking | Use                              |
|---------------|-----------------------------------|--------|----------|----------------------------------|
| Display       | `clamp(2.6rem, 6.4vw, 4.8rem)`    | 700    | -0.035em | Hero h1                          |
| Section       | `clamp(1.7rem, 3vw, 2.5rem)`      | 600    | -0.025em | Section h2                       |
| Sub           | `1.125rem`                        | 600    | -0.01em  | Card / item h3                   |
| Body-lg       | `clamp(1rem, 1.35vw, 1.18rem)`    | 400    | -0.005em | Hero sub, section lead           |
| Body          | `1rem`                            | 400    | -0.005em | Default body                     |
| Body-sm       | `0.92rem`                         | 400    | 0        | Card body, dense text            |
| Meta          | `11–13px` mono                    | 500    | +0.12 to +0.18em | Eyebrows, captions       |
| Caption       | `11px` mono                       | 500    | +0.14em  | Project stat labels              |

### Rules
- Line-height **1.55** for body, **1.1** for display, **1.25** for sub.
- Never use mono for paragraph text. Mono is reserved for *system* signaling: labels, code, numeric tickers, badges.
- Gradient text is allowed **only** on the hero's accent phrase and the CTA's accent phrase. Nowhere else.
- Tabular numerals (`font-variant-numeric: tabular-nums`) on all numeric values (metrics, deltas, prices).

---

## 4. Spacing & layout

- **8px rhythm.** All gaps and paddings are multiples of 4/8 (4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 80, 96, 120).
- **Container.** `max-width: 1240px`, 28px gutter desktop, 18px gutter mobile.
- **Sections.** 120px vertical pad desktop / 80px mobile. `--tight` variant: 80 / 56.
- **Card padding:** 22–24px desktop / 18–20px mobile.
- **Section head:** `eyebrow → h2 → lead p` stack, gap 12px between eyebrow & h2, gap 16px to lead.
- **Card density:** prefer 3-column on ≥980px, 2-column on ≥640px, 1-column below.

### Z-index scale
| Layer        | Value |
|--------------|-------|
| base content | 1     |
| sticky nav   | 50    |
| skip link    | 1000  |

---

## 5. Components

### 5.1 Nav
- Sticky, blurred (`backdrop-filter: blur(14px) saturate(140%)`).
- Logo: 28px rounded-square mark with a one-letter monogram set in mono; brand text in sans 500.
- Center links: mono **12px**, all caps, +0.14em tracking — feels like system labels.
- Right CTA: pill button with `↗` icon. Subtle hover only (border + bg).

### 5.2 Hero
- Two-column grid (1.15fr / 1fr), collapses to single column below 980px.
- Left: status pill → display heading → lead → role chips → action row.
- Right: **system snapshot card** — fake terminal block + a 3-up metric row beneath. The card is the proof-of-substance counterweight to the marketing-style left column.
- Beneath the hero: **trustmark strip** — short line of comma-separated industry contexts in mono (e.g. *fintech · operations · platform · public sector*) plus a horizontal hairline.

### 5.3 Section head
- Eyebrow (mono, accent) with a short rule before the number, e.g. `── 02 — SYSTEMS`.
- Display heading.
- Lead paragraph max 60ch.

### 5.4 Capability cards (Roles)
- 4-col grid → 2 → 1.
- Icon tile (38px, gradient-tinted), heading, two-line description, tag row in mono.
- Hover: subtle radial light follows the cursor (already in place); border lifts to `--border-strong`; card translates -2px.

### 5.5 Architecture diagram
- Horizontal directed graph in SVG, viewBox `0 0 1080 480`.
- **Three vertical bands:** *Inputs* / *Supervisor + Tools* / *Specialist agents* / *Output*.
- Each node: rounded 10px rectangle, dark fill, subtle 1.25px stroke. Supervisor node uses a 1.5px cyan stroke.
- Connectors: 1.4px dashed cyan, animated flow particles, but **respect prefers-reduced-motion** (particles disabled).
- Beneath the SVG: a **legend row** + a small **"how to read"** caption.
- Above the SVG: a 4-column "what each band does" key, so the diagram is legible even before motion plays / on small screens.

### 5.6 Proof-of-work cards (Projects)
- 3-col grid → 2 → 1.
- Card layout: badge + year row → visual block (animated mini chart) → headline → 2-line description → **3-stat footer** divided by a dashed rule.
- Visual block heights are fixed (160px) so the card grid stays regular.
- Stat labels in mono 11px, values in mono 14px **600**, tabular-nums.

### 5.7 Stack
- 4-col grid of categories → 2 → 1.
- Each category: mono uppercase title with a small dot prefix; chip row beneath.
- Chips alternate hover accent (cyan / lavender) on focus only for keyboard users.

### 5.8 Process timeline
- Single column. Vertical hairline on the left with a hollow accent dot per step.
- Each row: small mono number, h3, body, mono uppercase tag on the right.

### 5.9 CTA / Contact
- Large rounded panel (24px radius) with twin radial-gradient highlights at opposite corners.
- Status pill, headline (one phrase in gradient text), lead paragraph, primary + secondary action buttons, mono contact links.
- Footer beneath: hairline rule + mono colophon left, mono "K · Data · AI · Agents" right.

---

## 6. Effects

| Effect          | Spec                                                                 |
|-----------------|----------------------------------------------------------------------|
| Card shadow     | `0 1px 0 rgba(255,255,255,0.04) inset, 0 14px 40px -24px rgba(0,0,0,0.85)` |
| Hover lift      | `transform: translateY(-2px)` + border step                          |
| Focus ring      | `outline: 2px solid var(--accent-2); outline-offset: 3px`            |
| Blur            | Nav `blur(14px) saturate(140%)`; hero card `blur(6px)`               |
| Grid texture    | 56px square grid masked by a radial under the hero; 32px under the diagram |

Shadows are **never** colorized except via gradient backgrounds. No box-shadows in cyan/lime — those read as "AI demo," not premium.

---

## 7. Motion

- **Durations:** 150–300ms for micro, ≤ 450ms for entrance.
- **Easing:** `[0.2, 0.8, 0.2, 1]` cubic-bezier for entrances; ease-out for hovers.
- **Stagger:** 60–80ms per item in a grid; max 8 items animated at once.
- **Causality only.** Every motion expresses something: a card arriving, a metric updating, data flowing through the architecture.
- **Reduced motion.** `@media (prefers-reduced-motion: reduce)` disables animation-duration, transition-duration, the status-dot pulse, the bar-rise animation, and the diagram's `<animateMotion>` particles. Content must be readable & layout-stable without motion.

---

## 8. Accessibility rules

1. Every section is a semantic `<section>` with an `aria-labelledby` pointing to its `h2`.
2. Headings descend without skipping: page has one `<h1>`, sections use `<h2>`, cards use `<h3>`.
3. Icon-only buttons / links carry an `aria-label`. Decorative SVGs are `aria-hidden="true"`.
4. The architecture diagram has an `aria-label` describing the flow in prose; a textual key precedes it so the meaning survives screen readers and motion-off users.
5. Focus rings are always visible — never `outline: none` without a replacement.
6. The skip link is the first focusable element, visible only when focused.
7. Color is never the sole carrier of meaning (deltas pair `↓` / `↑` with the color).
8. Body text ≥ 16px on mobile to avoid iOS auto-zoom.
9. Status dot pulse is paused under `prefers-reduced-motion`.
10. No content depends on scroll-triggered `whileInView` to *render*; only to animate. Initial state has `opacity: 1` to avoid hidden content if motion fails.

---

## 9. Do / Don't quick reference

| Do                                                                  | Don't                                                                |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Use mono for labels and metrics                                      | Use mono for paragraph text                                          |
| Use gradient text **once** per section, max                          | Wrap every heading in a gradient                                     |
| Group accent colors by intent (cyan = signal, lime = positive)       | Sprinkle accents because "it looks more colorful"                   |
| Keep card surfaces dark and quiet                                    | Add colored borders or glowing rings to every card                   |
| Show real numbers (with units and deltas)                            | Use vague phrases like "10x productivity"                            |
| Animate to *show causality*                                          | Animate decoratively                                                 |
| Pair every icon with a label                                         | Use icon-only buttons without `aria-label`                           |
| Build mobile-first; test 375px                                       | Add horizontal scroll on small screens                               |
| Respect `prefers-reduced-motion`                                     | Hide content behind scroll-triggered fade-ins                        |
