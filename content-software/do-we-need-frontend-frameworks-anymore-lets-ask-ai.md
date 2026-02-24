---
title: Do we need frontend frameworks anymore? Let's ask AI
description: Exploring the future of web development, by asking AI for its opinion!
keywords: "ai coding, software engineer career development, frontend software engineer"
date: 2026-02-24
permalink: "/software/do-we-need-frontend-frameworks-anymore-lets-ask-ai/"
tags: article
---

<style>
table {
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  margin: 0.6em 0 1em 0;
  font-size: 0.95em;
}
table th,
table td {
  border: 1px solid var(--border-color, #ddd);
  padding: 0.6em 0.8em;
  text-align: left;
}
table th {
  background: linear-gradient(180deg, rgba(0,0,0,0.03), rgba(0,0,0,0));
  font-weight: 600;
}
table tr:nth-child(even) td {
  background: rgba(0,0,0,0.02);
}
@media (prefers-color-scheme: dark) {
  table th,
  table td { border-color: var(--card-border-color, #666); }
  table tr:nth-child(even) td { background: rgba(255,255,255,0.02); }
}
</style>

# {{ title }} 

There has been a lot of discussion about the problems with frontend web frameworks over the years, yet the industry hasn't changed much. 

AI coding agents are becoming more capable, and we're all curious about where software development is going, so it seems that now is good time to re-evaluate our approach to web development. 

This is an important topic for people who have invested a lot of time and mental energy into learning their chosen frontend framework and it relates to talks I have presented to my team on [Career Planning in the AI Era ](/software/career-planning-in-the-ai-era).

What if we asked AI for its opinion? It will be writing most of the code after all!

Below is a prompt that I asked Claude Opus 4.6 to think about, followed by its response. It has started some interesting conversations amongst our teams.

## The Prompt

*Let's discuss web development, specifically for enterprise applications. The React.js ecosystem is very large and complex, it takes significant time and effort for a human to learn about all aspects of the ecosystem. There are some leaner alternative frameworks such as: Svelte, Solid.js, Qwik & Lit, but they're not widely adopted. CSS frameworks such as Tailwind can also add a lot of weight to pages and apps.*

*Now that the majority of coding is being done by highly efficient AI coding agents, there may be a better approach to web development, a more optimal approach that lends itself to how LLMs reason, with more efficient context window usage etc.*

*UX frameworks such as Material Design 3 are still valid, and there will still be a need to share components between projects to deliver consistent user experiences.*
*What do you think about re-evaluating the current industry norms? Take your time and think hard about this, the future of web development depends on it.*

## The Response

*\<\< START OF AI GENERATED CONTENT \>\>*

This is a question worth thinking through rigorously. Let me lay out a thesis.

### The Core Realization

Frameworks like React were designed to reduce **human** cognitive load — conventions, component models, and declarative abstractions make it easier for people to reason about complex UIs. But these abstractions come at a cost: large runtime bundles, enormous API surfaces, and deep dependency trees. When AI agents write the code, the calculus changes fundamentally.

An LLM doesn't need JSX to make the DOM "feel like" markup — it already knows the DOM API. It doesn't need Tailwind's shorthand — it can write semantic CSS faster than a human can type `flex items-center`. The ergonomic tax that frameworks impose becomes pure overhead.

### A Post-Framework Architecture

Here's what I think the optimal stack looks like for AI-driven enterprise web development:

#### 1. Web Standards as the Foundation

The platform has caught up. Native capabilities that once required frameworks:

| Need | Framework Solution | Native Solution (2026) |
|---|---|---|
| Components | React/Vue/Svelte components | Web Components (Shadow DOM, Custom Elements) |
| Reactivity | useState/signals/stores | `MutationObserver`, Proxy-based stores, or thin reactive libs (~1KB) |
| Scoped CSS | CSS Modules, styled-components | Shadow DOM encapsulation, `@scope`, CSS nesting |
| Routing | React Router, Next.js | Navigation API, URLPattern API |
| Templating | JSX, Svelte syntax | Tagged template literals, native `<template>` |
| CSS Layout | Bootstrap/Tailwind grid | CSS Grid, Flexbox, Container Queries |
| State Management | Redux, Zustand, Pinia | Thin Proxy-based store (~50 LOC), or native events |

An AI agent can work directly with these — fewer abstractions means less context consumption and more deterministic output.

#### 2. Design Tokens, Not CSS Frameworks

Instead of Tailwind (which is a DSL for humans to write CSS faster), use **design tokens as CSS custom properties** implementing a system like Material Design 3:

```css
/* tokens.css — your entire design system contract */
:root {
  --md-sys-color-primary: #6750a4;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-typescale-body-large-size: 1rem;
  --md-sys-shape-corner-medium: 12px;
  --md-sys-motion-duration-medium: 300ms;
  /* ... */
}
```

The AI writes **semantic CSS** directly. No utility classes bloating the HTML. No purging unused styles. No learning a framework-specific DSL. The output is smaller, more readable, and standards-compliant. Modern CSS (nesting, `:has()`, `@layer`, `@container`) eliminates every remaining reason for a CSS preprocessor.

#### 3. Web Components for Cross-Project Sharing

This is the standards-based answer to component reuse without framework lock-in:

```javascript
class MdButton extends HTMLElement {
  static observedAttributes = ['variant', 'disabled'];
  
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.render();
  }
  
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host { /* uses design tokens from parent doc */ }
        button {
          background: var(--md-sys-color-primary);
          color: var(--md-sys-color-on-primary);
          border-radius: var(--md-sys-shape-corner-medium);
        }
      </style>
      <button><slot></slot></button>
    `;
  }
}
customElements.define('md-button', MdButton);
```

These components work in **any** project, any framework, or no framework. Google's own [Material Web Components](https://m3.material.io/develop/web) already take this approach. An AI agent can generate, modify, and compose these with minimal context overhead.

#### 4. Server-First, Progressively Enhanced

The SPA paradigm created enormous complexity (hydration, SSR, streaming, RSCs) to solve a problem that server rendering already solved. The optimal pattern:

- **Server renders HTML** — fast, SEO-friendly, works without JS
- **Web Components hydrate themselves** — each component is self-contained
- **Progressive enhancement** — interactivity layers on top, doesn't replace the base
- **Islands architecture** — only interactive parts ship JS (similar to Astro's insight, but without Astro)

A thin server (Hono, h3, or even native `Response` objects on edge runtimes) returns HTML. No framework SSR pipeline. No hydration mismatch bugs.

#### 5. A Thin Orchestration Layer

You still need *some* glue. But it should be **thin, explicit, and composable** — not a framework:

- **Router**: ~50 LOC wrapper around the Navigation API
- **Reactive store**: ~80 LOC Proxy-based observable state
- **Template engine**: Tagged template literals with DOM diffing (~200 LOC, or use `lit-html` at 5KB)
- **HTTP client**: Native `fetch` with a thin typed wrapper

Total JS overhead: **< 10KB**. Compare to React + ReactDOM alone at ~45KB gzipped, before you add routing, state management, or any UI library.

#### 6. Why This Is Better for AI Agents

| Dimension | Framework Approach | Standards-First Approach |
|---|---|---|
| **Context window** | Must load framework docs, patterns, version-specific APIs | Stable, well-known web APIs already in training data |
| **Correctness** | Framework-specific gotchas (React re-render rules, hook ordering) | Fewer abstraction-layer bugs |
| **Output size** | Large bundles, complex build pipelines | Minimal JS, no build step required |
| **Determinism** | Multiple valid patterns (class/function/hook/RSC) | One way to do things: the standard way |
| **Composability** | Components locked to framework ecosystem | Web Components work everywhere |
| **Longevity** | Breaking changes across major versions | Web standards are backward-compatible forever |

### The Practical Reality

I'm not suggesting everyone abandon React tomorrow. But the argument is strong that for **new enterprise projects** where AI agents do the heavy lifting:

1. **Start with Web Components + design tokens** for your component library
2. **Use vanilla CSS** with custom properties and modern features
3. **Server-render HTML** and progressively enhance with islands
4. **Keep framework usage surgical** — if you need React for a complex interactive island, use it there, not as the foundation
5. **Invest in a thin standard library** (~500 LOC of routing, state, and templating utilities) that your AI agents are trained to use consistently

The irony is that this "new" approach is actually a return to how the web was designed to work — documents enhanced with behavior — but now AI makes it practical to work at that level without sacrificing developer productivity. The frameworks were scaffolding for human limitations. The scaffolding can come down.

### What About Complexity?

Enterprise apps are complex. Won't this fall apart at scale? Two responses:

1. **Web Components compose exactly like framework components** — they have props (attributes), events, slots, and encapsulated styles. The component model is the same; the implementation is just closer to the metal.

2. **AI agents handle boilerplate effortlessly** — the main human argument for frameworks is "I don't want to write that glue code." AI agents don't have that objection. They can generate 200 lines of standards-based code as easily as 20 lines of framework-specific code, and the result will be faster, smaller, and more maintainable.

The industry is overdue for this re-evaluation. The question isn't whether standards-first is technically superior — it is. The question is whether the ecosystem and tooling will follow. With AI agents driving development, I think the incentive structure finally favors it.

*\<\< END OF AI GENERATED CONTENT \>\>*

---

Frontend frameworks won't disappear overnight but it is worth discussing how the industry might evolve over the next few years, so that we all have time to adapt.

<div id="comments" class="comments"></div>