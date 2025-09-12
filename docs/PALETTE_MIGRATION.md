# Color Palette Migration Guide v2

## Overview

Version 4.25.9 introduces a major refactoring of the color palette system to provide:
- **Standardized naming conventions** using underscores instead of hyphens/spaces
- **Versioned palette structure** for backward compatibility
- **Centralized palette management** in the `@cdc/core` package
- **Automatic migration** of existing configurations
- **Developer rollback features** for debugging and testing
- **Enhanced migration utilities** with comprehensive fallback handling

## Key Architectural Changes

### 1. Centralized Migration System
- **Core helpers**: All palette migration logic centralized in `packages/core/helpers/palettes/utils.ts`
- **Migration Dictionaries**: Separate migration maps for charts and maps in `packages/core/helpers/migratePaletteName.ts`
- **Version management**: Smart version detection and handling in migration utilities

### 2. Enhanced Developer Experience
- **Rollback functionality**: Developers can revert palette migrations for testing
- **Query string utilities**: Developer tools accessible via URL parameters  
- **Comprehensive error handling**: Graceful fallbacks when migrations fail
- **Visual debugging**: Developer-friendly palette selection components

## Palette Migration Flow

### High-Level Architecture
```
Legacy Config (v1)           Migration System            Modern Config (v2)
├─ config.palette           ────────────────────────►    ├─ config.general.palette.name
├─ config.color                                           ├─ config.general.palette.version
├─ config.customColors      ◄────────────────────────    ├─ config.general.palette.customColors
                                                          └─ config.general.palette.backups[]
```

### Core Functions Flow

```
getCurrentPaletteName() ──► getPaletteColors() ──► Render Component
        │                          │
        ▼                          ▼
findPaletteInMigrationMap()   getPaletteAccessor()
        │                          │
        ▼                          ▼
migratePaletteWithMap()      Versioned Palette Data
```

## Breaking Changes

### Configuration Structure Changes

**Before (v1):**
```javascript
// Charts
config.palette = 'qualitative-bold'
config.customColors = ['#ff0000', '#00ff00']

// Maps  
config.color = 'sequential-blue'
```

**After (v2):**
```javascript
// Both Charts and Maps
config.general.palette = {
  name: 'qualitative_standard',
  version: '1.0',
  customColors: ['#ff0000', '#00ff00'],
  backups: [
    { name: 'qualitative-bold', version: '1.0', isReversed: false }
  ]
}
```

### Palette Name Changes

Many palette names have been standardized. Here are the key migrations:


### Manual Migration

If you need to manually migrate configurations:

```javascript
import { migratePaletteName } from '@cdc/core/helpers/migratePaletteName'

// Migrate any palette name
const newName = migratePaletteName('qualitative-bold') // Returns: 'qualitative_standard'

// Specific component migrations
import { migrateChartPaletteName, migrateMapPaletteName } from '@cdc/core/helpers/migratePaletteName'

const chartPalette = migrateChartPaletteName('qualitative-bold')
const mapPalette = migrateMapPaletteName('sequential_blue_green')
```

## API Changes

### New Helper Functions

```javascript
// Get palette version from config
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
const version = getColorPaletteVersion(config) // Returns: 1 or 2

// Access palette colors with version support
import { getPaletteAccessor } from '@cdc/core/helpers/getPaletteAccessor'
const colors = getPaletteAccessor(colorPalettes, config, paletteName)

// Filter available palettes
import { filterColorPalettes } from '@cdc/core/helpers/filterColorPalettes'
const availablePalettes = filterColorPalettes(allPalettes, config.visualizationType)
```

### Core Migration Functions (New in v2)

```javascript
// Enhanced palette utilities
import { 
  getCurrentPaletteName, 
  getPaletteColors,
  findPaletteInMigrationMap,
  migratePaletteWithMap,
  rollbackPaletteToOriginal,
  hasPaletteBackup 
} from '@cdc/core/helpers/palettes/utils'

// Get current palette name with fallback handling
const paletteName = getCurrentPaletteName(config) // Handles v1/v2 configs

// Get colors with migration applied
const colors = getPaletteColors(config, colorPalettes) // Includes custom colors

// Advanced migration with maps
const migratedName = migratePaletteWithMap(
  'qualitative-bold', 
  chartPaletteMigrationMap, 
  true // handle reverse palettes
)

// Developer rollback functionality
if (hasPaletteBackup(config)) {
  const success = rollbackPaletteToOriginal(config)
  console.log('Rollback successful:', success)
}
```

### New Components and Developer Tools

```javascript
// Enhanced palette selection with rollback
import { PaletteSelector } from '@cdc/core/components/PaletteSelector'
import { DeveloperPaletteRollback } from '@cdc/core/components/PaletteSelector/DeveloperPaletteRollback'

<PaletteSelector
  config={config}
  colorPalettes={colorPalettes}
  updateConfig={updateConfig}
  type="chart" // or "map"
/>

// Developer rollback component (only shows if dev tools enabled)
<DeveloperPaletteRollback
  config={config}
  updateConfig={updateConfig}
/>

// Migration modal for user notifications
import { PaletteConversionModal } from '@cdc/core/components/PaletteConversionModal'
```

### Developer Query String Parameters

```javascript
// Enable developer palette tools via URL
// ?isCoveDeveloper=true

import { getQueryParam, setQueryParam } from '@cdc/core/helpers/queryStringUtils'

// Check if developer mode is enabled
const devMode = getQueryParam('isCoveDeveloper') === 'true'
```