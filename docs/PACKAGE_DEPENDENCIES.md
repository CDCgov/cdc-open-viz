# Package Dependency Structure

This document describes the allowed dependency structure within the CDC Open Viz monorepo.

## Overview

The CDC Open Viz monorepo follows a specific dependency architecture to maintain clean separation of concerns and prevent circular dependencies. The standalone build tests enforce these rules to ensure packages can be built independently.

## Dependency Rules

### ✅ Allowed Dependencies

1. **Core Package (`@cdc/core`)**

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
@cdc/core              ← Base package (can be imported by all)
├── @cdc/chart         ← Standalone visualization
├── @cdc/map           ← Standalone visualization
├── @cdc/data-table    ← Standalone visualization
├── @cdc/data-bite     ← Standalone visualization
├── @cdc/waffle-chart  ← Standalone visualization
├── @cdc/filtered-text ← Standalone visualization
├── @cdc/markup-include← Standalone visualization
├── @cdc/dashboard     ← Orchestrator (can import from all)
└── @cdc/editor        ← Configuration tool (can import from all)
```

## Rationale

### Why These Rules?

1. **Standalone Build Testing**: Each visualization package should be buildable independently
2. **Clean Architecture**: Prevents tangled dependencies and circular imports
3. **Reusability**: Individual packages can be consumed separately without pulling in unnecessary dependencies
4. **Maintainability**: Clear separation makes the codebase easier to understand and modify

### Special Cases

- **Dashboard**: Acts as a composition root, combining multiple visualizations
- **Editor**: Needs access to all components for configuration UI and live previews
- **Core**: Provides shared infrastructure (utilities, types, base components)

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

// Dashboard can import from anywhere
import CdcChart from '@cdc/chart/src/CdcChartComponent'

// Editor can import from anywhere
import CdcMap from '@cdc/map/src/CdcMapComponent'
```

### ❌ Invalid Imports

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

# Search for explicit cross-package imports (excluding stories)
grep -r "from '@cdc/[^c]" packages/*/src --exclude-dir=dashboard --exclude-dir=editor --exclude="*.stories.*" | grep -v "/_stories/"

# Search for relative imports that might cross package boundaries (excluding stories)
# Look for imports with multiple ../ that could reach sibling packages
grep -r "from '\.\./\.\./\.\." packages/*/src --exclude-dir=dashboard --exclude-dir=editor --exclude="*.stories.*" | grep -v "/_stories/"
grep -r "from \"\.\./\.\./\.\." packages/*/src --exclude-dir=dashboard --exclude-dir=editor --exclude="*.stories.*" | grep -v "/_stories/"
```
