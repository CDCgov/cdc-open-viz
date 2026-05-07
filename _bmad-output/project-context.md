---
project_name: 'cdc-open-viz'
user_name: 'COVE TEAM'
date: '2026-05-07'
sections_completed: ['technology_stack']
existing_patterns_found: 8
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

- Monorepo: Yarn workspaces + Lerna 8.2.4 (`lerna.json` sets `npmClient: yarn`, `version: independent`)
- Language mix: TypeScript and JavaScript across `packages/*/src`
- Frontend: React 18.2.0 with JSX runtime `react-jsx`
- Build/dev tooling: Vite 7.3.1, `@vitejs/plugin-react` 5.1.2
- Component docs/dev harness: Storybook 10.3.3 with `@storybook/react-vite`
- Testing: Vitest 3.1.x, Testing Library, Storybook interaction tests, Playwright and BackstopJS present
- Lint/format: ESLint 8.44.0, Prettier 2.8.1, Stylelint 17.3.0
- Styling: Sass 1.89.2 plus package-local CSS/SCSS
- Data/visualization libs: D3 family, Visx 3.12.0, PapaParse 5.5.2, chroma-js 3.1.2

## Critical Implementation Rules

_To be completed after context generation._
