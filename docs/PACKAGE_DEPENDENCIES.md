# Package Dependency Structure

This document describes the allowed dependency structure within the CDC Open Viz monorepo.

## Overview

The CDC Open Viz monorepo follows a specific dependency architecture to maintain clean separation of concerns and prevent circular dependencies. The standalone build tests enforce these rules to ensure packages can be built independently.

## TL;DR

**Quick Reference:**

- **Core** (`@cdc/core`) → Depends on nothing (foundation)
- **Visualizations** (`chart`, `map`, `data-table`, etc.) → Depend only on Core
- **Orchestrators** (`dashboard`, `editor`) → Can depend on everything

## Dependency Rules

### ✅ Allowed Dependencies

1. **Core Package (`@cdc/core`)**

   - **Cannot depend on any other internal packages** (foundation layer)
   - **Any package can depend on `@cdc/core`**
   - Core contains shared utilities, types, components, and helpers used across the monorepo
   - Examples: `import { cloneConfig } from '@cdc/core/helpers/cloneConfig'`

2. **Dashboard Package (`@cdc/dashboard`)**

   - **Can depend on ANY other package**
   - Dashboard serves as an orchestrator that combines multiple visualization components
   - Examples:
     ```typescript
     import CdcChart from '@cdc/chart/src/CdcChartComponent'
     import CdcMap from '@cdc/map/src/CdcMapComponent'
     ```

3. **Editor Package (`@cdc/editor`)**
   - **Can depend on ANY other package**
   - Editor needs access to all components for configuration and preview
   - Examples:
     ```typescript
     import CdcChart from '@cdc/chart/src/CdcChart'
     import { stripConfig } from '@cdc/dashboard/src/helpers/formatConfigBeforeSave'
     ```

### ❌ Prohibited Dependencies

**All other packages should NOT have cross-package dependencies** (except to `@cdc/core`).

This includes both:

1. **Explicit package imports**: Using `@cdc/package-name` syntax
2. **Relative path imports**: Using `../` or similar paths to access other packages through the monorepo directory structure

Individual visualization packages should be self-contained:

- `@cdc/chart`
- `@cdc/map`
- `@cdc/data-table`
- `@cdc/data-bite`
- `@cdc/waffle-chart`
- `@cdc/filtered-text`
- `@cdc/markup-include`

## Current Package Structure

```
┌─────────────────────────────────────────────────────────┐
│ Tier 3: Orchestrators (can import from all packages)    │
├─────────────────────────────────────────────────────────┤
│ @cdc/dashboard    ← Combines multiple visualizations    │
│ @cdc/editor       ← Configuration tool for all packages │
└─────────────────────────────────────────────────────────┘
              │                              │
              ↓ (depends on)                 │
┌─────────────────────────────────────────┐  │
│ Tier 2: Standalone Visualizations       │  │
│ (depend only on core)                   │  │
├─────────────────────────────────────────┤  │
│ @cdc/chart                              │  │
│ @cdc/map                                │  │
│ @cdc/data-table                         │  │
│ @cdc/data-bite                          │  │
│ @cdc/waffle-chart                       │  │
│ @cdc/filtered-text                      │  │
│ @cdc/markup-include                     │  │
└─────────────────────────────────────────┘  │
              │                              │
              ↓ (depends on)                 ↓ (also depends on)
┌─────────────────────────────────────────────────────────┐
│ Tier 1: Foundation (no internal package dependencies)   │
├─────────────────────────────────────────────────────────┤
│ @cdc/core         ← Shared utilities, types, components │
└─────────────────────────────────────────────────────────┘
```

## Rationale

### Why These Rules?

1. **Standalone Build Testing**: Each visualization package should be buildable independently
2. **Clean Architecture**: Prevents tangled dependencies and circular imports
3. **Reusability**: Individual packages can be consumed separately without pulling in unnecessary dependencies
4. **Maintainability**: Clear separation makes the codebase easier to understand and modify

### Special Cases

- **Core**: Foundation layer providing shared infrastructure (utilities, types, base components). Cannot depend on other packages to prevent circular dependencies.
- **Dashboard**: Acts as a composition root, combining multiple visualizations. Can import from all packages.
- **Editor**: Needs access to all components for configuration UI and live previews. Can import from all packages.

## Exemptions

### Storybook Stories

Files within `**/_stories/` or `*.stories.*` are **exempt** from dependency rules:

- Storybook stories are for development and documentation purposes
- They are not included in the actual package builds
- Stories may import from any package to demonstrate component interactions
- Example: `packages/core/components/_stories/DataTable.stories.tsx` can import from `@cdc/map`

## Enforcement

The dependency rules are enforced by:

1. **Standalone Build Tests**: Each package has a test that verifies it can be built in isolation
2. **Code Reviews**: Manual verification during pull request reviews
3. **Monitoring Commands**: Grep-based commands to detect cross-package imports (see Monitoring section)

## Known Limitations

### TypeScript Type-Only Imports

TypeScript type-only imports (using the `type` keyword) can slip through standalone build tests:

```typescript
// This violates architecture but may not fail builds
import { type DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'
```

**Why builds still succeed:**

- Type-only imports are stripped during compilation and create no runtime dependency
- TypeScript may not fail when the imported package isn't installed
- The package can build successfully in isolation

**Important:** These are still **architectural violations** even if they don't break builds. Type-only imports:

- Create conceptual coupling between packages
- Can evolve into runtime imports over time
- Violate the intended dependency hierarchy

**Solution:** Move shared types to `@cdc/core` so both packages can reference them without violating the architecture.

## Resolving Violations

When cross-package dependencies are needed:

### Option 1: Move to Core

Move shared types, utilities, or components to `@cdc/core`:

```typescript
// Before (violation - explicit package import)
import { SomeType } from '@cdc/other-package/src/types'

// Before (violation - relative path import)
import { SomeType } from '../../other-package/src/types'

// After (valid)
import { SomeType } from '@cdc/core/types'
```

### Option 2: Duplicate Code

Sometimes it's better to duplicate small pieces of code rather than create dependencies:

```typescript
// Instead of importing a small utility, duplicate it locally
const localUtility = input => {
  /* implementation */
}
```

### Option 3: Dependency Injection

Pass dependencies through props or configuration:

```typescript
// Instead of direct import, accept as prop
interface ComponentProps {
  colorDistribution?: (data: any) => Colors
}
```

## Examples

### ✅ Valid Imports

```typescript
// Any package can import from core
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import { DataTableConfig } from '@cdc/core/types/DataTable'

// Dashboard can import from anywhere (visualizations + core)
import CdcChart from '@cdc/chart/src/CdcChartComponent'
import CdcMap from '@cdc/map/src/CdcMapComponent'
import { useReduceData } from '@cdc/core/helpers/useReduceData'

// Editor can import from anywhere (visualizations + core + dashboard)
import CdcChart from '@cdc/chart/src/CdcChart'
import { stripConfig } from '@cdc/dashboard/src/helpers/formatConfigBeforeSave'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
```

### ❌ Invalid Imports

**Example: In the `@cdc/map` package** (or any Tier 2/1 visualization package)

```typescript
// Explicit package imports (PROHIBITED)
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'
import { v2ColorDistribution } from '@cdc/chart/src/helpers/chartColorDistributions'
import { ViewportSize } from '@cdc/chart/src/types/ChartConfig'

// Relative path imports across packages (ALSO PROHIBITED)
import { SomeUtility } from '../../chart/src/helpers/someUtility'
import { ChartTypes } from '../../../chart/src/types/ChartTypes'
import DashboardComponent from '../../../../dashboard/src/components/SomeComponent'

// Any path that goes up and into a sibling package directory is forbidden
import { Helper } from '../chart/...' // ❌ NO
import { Type } from '../../other-package/...' // ❌ NO
```

## Monitoring

To check for dependency violations:

```bash
# Run standalone build tests
npx lerna run test

# Search for explicit cross-package imports (excluding core, stories, dashboard, and editor)
grep -r "from '@cdc/" packages/ --exclude="*.stories.*" --exclude-dir=node_modules | grep -v "/_stories/" | grep -v "@cdc/core" | grep -v "packages/dashboard/" | grep -v "packages/editor/" | grep -v "/types/" | grep -v "README.md"

# Search for relative imports that explicitly reference other package names
# These patterns catch imports like: from '../../chart/...' or from '../../../map/src/...'
grep -rE "from ['\"]\.\..*/(chart|map|data-table|data-bite|waffle-chart|filtered-text|markup-include|dashboard|editor)/" packages/ --exclude="*.stories.*" --exclude-dir=node_modules | grep -v "/_stories/" | grep -v "packages/dashboard/" | grep -v "packages/editor/"
```
