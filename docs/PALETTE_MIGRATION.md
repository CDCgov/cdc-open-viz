# Color Palette Migration Guide v2

## Overview

Version 4.25.9 introduces a major refactoring of the color palette system to provide:
- **Standardized naming conventions** using underscores instead of hyphens/spaces
- **Versioned palette structure** for backward compatibility
- **Centralized palette management** in the `@cdc/core` package
- **Automatic migration** of existing configurations

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

#### Chart Palettes
| Old Name | New Name |
|----------|----------|
| `qualitative-bold` | `qualitative_standard` |
| `qualitative-soft` | `qualitative_standard` |
| `sequential-blue` | `sequential_blue` |
| `sequential-orange` | `sequential_orange` |
| `colorblindsafe` | `qualitative_standard` |

#### Map Palettes
| Old Name | New Name |
|----------|----------|
| `yelloworangered` | `sequential_orange` |
| `bluegreen` | `sequential_blue` |
| `pinkpurple` | `sequential_purple` |
| `sequential_blue_green` | `sequential_blue` |
| `qualitative_earth_tones` | `qualitative` |

## Migration Process

### Automatic Migration

The migration happens automatically when configurations are loaded in version 4.25.9+:

1. **Palette names** are moved to the new structure
2. **Legacy names** are mapped to standardized equivalents
3. **Backup copies** of original configurations are preserved
4. **Custom colors** are migrated to the new location

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

### New React Hooks

```javascript
// Centralized palette management
import { useColorPalette } from '@cdc/core/hooks/useColorPalette'

function MyComponent() {
  const { currentPalette, availablePalettes } = useColorPalette(config, colorPalettes)
  // ...
}
```

### New Components

```javascript
// Palette selection component
import { PaletteSelector } from '@cdc/core/components/PaletteSelector'

<PaletteSelector
  config={config}
  colorPalettes={colorPalettes}
  updateConfig={updateConfig}
  type="chart" // or "map"
/>

// Migration modal for user notifications
import { PaletteConversionModal } from '@cdc/core/components/PaletteConversionModal'
```

## Backward Compatibility

### Version Support
- **v1 configurations** continue to work with automatic migration
- **Original palette names** are preserved in `config.general.palette.backups`
- **Fallback behavior** ensures missing palettes default gracefully

### Migration Safety
- No data loss during migration
- Original configurations backed up before changes
- Rollback possible using backup data

## Testing Migration

### Validate Your Configuration

```javascript
// Test if your config needs migration
if (!config.general?.palette?.name && (config.palette || config.color)) {
  console.log('Configuration needs migration')
}

// Verify migration results
import update_4_25_9 from '@cdc/core/helpers/ver/4.25.9'
const migratedConfig = update_4_25_9(originalConfig)
console.log('Migrated config:', migratedConfig)
```

### Common Migration Issues

1. **Custom palette names** that don't match migration maps remain unchanged
2. **Case sensitivity** - migration handles case-insensitive matching
3. **Reverse palettes** - automatically detected and preserved with 'reverse' suffix

## For Package Consumers

### If You're Using CDC Open Viz Components

Your existing code should continue working without changes. The migration happens automatically when configurations are processed.

### If You're Building on Top of the Packages

Update your imports to use the new centralized helpers:

```javascript
// Old
import { generateColorsArray } from '@cdc/chart/helpers/generateColorsArray'

// New
import { generateColorsArray } from '@cdc/core/helpers/generateColorsArray'
```

## Troubleshooting

### Common Issues

**Issue**: Palette colors look different after migration
**Solution**: Check the migration mapping table above. Some legacy palettes now map to standardized equivalents.

**Issue**: Custom colors not appearing
**Solution**: Verify that `config.general.palette.customColors` contains your custom color array.

**Issue**: Configuration not migrating
**Solution**: Ensure you're using version 4.25.9+ and the configuration is being processed through the update system.

### Getting Help

For migration issues or questions:
1. Check the backup data in `config.general.palette.backups`
2. Review the migration maps in `packages/core/helpers/migratePaletteName.ts`
3. Test with the Storybook examples for your component type

## Future Considerations

This versioned palette system is designed to support future palette updates while maintaining backward compatibility. When adding new palettes or modifying existing ones, follow the established patterns for version management and migration support.