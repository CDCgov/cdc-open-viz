# Bubble Layers

This document covers how bubble overlays are configured, processed, and rendered in `@cdc/map`. Bubble layers are supported on `us` and `world` data maps.

Use this doc when:

- adding or editing bubble layer behavior in `packages/map`,
- debugging why bubbles are not rendering or are positioned incorrectly,
- understanding how per-layer legends are generated,
- working on the bubble layer editor UI,
- reviewing or writing the `4.26.7` config migration.

For the authorable config field reference, see the [`bubble` section of `packages/map/CONFIG.md`](../packages/map/CONFIG.md#bubble).

---

## Overview

Bubble overlays are configured under `config.bubble.layers[]`. Each layer is an independent set of column mappings, sizing, palette, and legend settings that renders as a circle overlay on top of the base choropleth map.

A map can have zero or more bubble layers. Only layers with a configured coloring or size column and a valid location source (geography column, or both lat and lng columns) are rendered. The rest of the layers are treated as incomplete drafts.

Bubble maps are not a separate map type. `config.general.type` is always `'data'` when bubble layers are present. The type selector in the editor previously had a `'bubble'` option; that value was removed and replaced by the bubble layers accordion.

---

## Config Shape

The canonical shape is `config.bubble.layers[]`. Each layer is a `BubbleLayer` (defined in `packages/map/src/types/MapConfig.ts`):

```ts
type BubbleLayer = {
  locationSource?: 'data-column' | 'latitude-longitude'
  sizeType?: 'numeric' | 'category'
  sizeCategoryValuesOrder?: string[]
  includeNonGeoDataInSizeDomain?: boolean
  minBubbleSize: number
  maxBubbleSize: number
  opacity?: number
  extraBubbleBorder: boolean
  showBubbleZeros: boolean
  palette?: { name: string; isReversed?: boolean }
  staticColor?: string
  legend?: {
    show?: boolean
    type?: string
    numberOfItems?: number
    title?: string
    description?: string
    style?: 'circles' | 'boxes' | 'gradient'
    size?: { show?: boolean; title?: string; description?: string }
  }
  columns: {
    geo: { name: string; label?: string; tooltip?: boolean }
    primary: { name: string; label?: string; tooltip?: boolean }
    latitude?: { name: string }
    longitude?: { name: string }
    categorical?: { name: string; label?: string; tooltip?: boolean }
    size?: { name: string; label?: string; tooltip?: boolean }
  }
}
```

`config.bubble` itself has shape `BubbleConfig`:

```ts
type BubbleConfig = {
  layers: BubbleLayer[]
  migratedToBubbleAccordion?: boolean // set by the 4.26.7 migration; do not author
}
```

The top-level fields (`bubble.migratedToBubbleAccordion`, `bubble.columns`, etc.) are legacy migration artifacts. Do not author them in new configs. `bubble.layers[].label` is also legacy/editor metadata; current editor layer titles are generated from layer order and selected columns. Use `bubble.layers[].legend.title` for rendered bubble legend headings.

`bubble.layers[].palette` controls category colors when `columns.primary.name` is set. When the layer has no coloring field and uses only `columns.size.name`, `bubble.layers[].staticColor` controls the fixed bubble fill color and the bubble-size legend marker color. Palette settings remain stored while switching between modes but are ignored until a coloring field is selected again.

`bubble.layers[].sizeType` defaults to `'numeric'`. In numeric mode, bubble radius uses `columns.size.name` when present and falls back to `columns.primary.name`. In categorical mode, `columns.size.name` is interpreted as a category field, blank/null category values are skipped, and categories are mapped evenly across `minBubbleSize` to `maxBubbleSize`. The exact category value `"0"` follows `showBubbleZeros`.

Categorical bubble-size domains use renderable layer runtime rows by default. When `bubble.layers[].includeNonGeoDataInSizeDomain === true` on a data-column layer, rows that fail geography UID assignment can also contribute category values to the radius scale and `BubbleSizeLegend`; those rows still do not draw unplaceable bubbles on the map. Numeric bubble sizing does not use this expanded domain data, and latitude/longitude layers never include rows with missing or invalid coordinates in the size-domain data.

`bubble.layers[].sizeCategoryValuesOrder` controls categorical size order. `[]` means automatic sort using `sortAutomaticCategoryValues` from `categorySortHelpers.ts`; a populated array means custom sort using `sortByConfiguredCategoryOrder`. The same ordered category list drives both rendered bubble radii and `BubbleSizeLegend`, and that list is built from the categorical domain data described above. The editor's custom category ordering list uses the same domain rule, so it includes unmatched geography categories only when `includeNonGeoDataInSizeDomain` is enabled for a data-column categorical-size layer.

`bubble.layers[].extraBubbleBorder` defaults to `false` when omitted from saved configs so existing maps do not gain outlines during normalization or migration. The editor starts newly authored bubble layers with this field set to `true`.

`bubble.layers[].opacity` controls bubble fill opacity for both rendered map bubbles and matching bubble-size legend markers. It defaults to `0.9` when omitted so existing maps keep the previous visual behavior. Values outside `0` through `1` are clamped at render/normalization time.

`bubble.layers[].legend.size.show` also defaults to `false` when omitted from saved configs, preserving existing maps that do not show a bubble-size legend. The editor starts newly authored bubble layers with this field set to `true`; the legend still renders only after the layer has usable size values.

---

## Location Sources

Each layer chooses how to position its bubbles via `locationSource`:

| `locationSource` | Required columns | How it works |
|---|---|---|
| `'data-column'` (default) | `columns.geo.name` | Bubble is placed at the centroid of the matching geography (state, country, etc.). Uses the same geo-lookup tables as the choropleth map. |
| `'latitude-longitude'` | `columns.latitude.name` + `columns.longitude.name` | Bubble is placed at explicit coordinates read from each data row. The `columns.geo.name` column is used only for tooltip/table labels. |

Coordinate bubbles are assigned a synthetic UID (`coordinate-bubble-{rowIndex}-{label}`) by `generateRuntimeData` because they do not correspond to a named geography.

---

## Key Files

| File | Role |
|---|---|
| `packages/map/src/types/MapConfig.ts` | `BubbleLayer` and `BubbleConfig` type definitions |
| `packages/map/src/helpers/bubbleLayers.ts` | All utility functions for reading and normalizing bubble config |
| `packages/map/src/helpers/bubbleSize.ts` | Shared numeric/categorical bubble-size ordering and scaling helpers |
| `packages/map/src/helpers/generateRuntimeData.ts` | UID assignment, filtering, numeric conversion, and layer-scoped runtime data for bubble columns |
| `packages/map/src/hooks/useLegendMemo.ts` | Per-layer legend memo refs |
| `packages/map/src/context/LegendMemoContext.tsx` | Carries bubble legend memos through context |
| `packages/map/src/CdcMapComponent.tsx` | Dispatches `SET_RUNTIME_BUBBLE_LEGEND` after the choropleth legend |
| `packages/map/src/components/BubbleList.tsx` | Renders bubbles for each configured layer |
| `packages/map/src/components/Legend/components/BubbleLayerLegend.tsx` | Renders color/category legend for a single layer |
| `packages/map/src/components/Legend/components/BubbleSizeLegend.tsx` | Renders proportional-circle size legend for a single layer |
| `packages/map/src/components/Legend/components/LegendMarkupText.tsx` | Polymorphic text element with markup-variable support |
| `packages/map/src/components/EditorPanel/components/BubbleEditorSection.tsx` | Top-level accordion item in the editor |
| `packages/map/src/components/EditorPanel/components/BubbleLayerFields.tsx` | Per-layer column/sizing/palette fields |
| `packages/map/src/components/EditorPanel/components/BubbleLegendFields.tsx` | Per-layer legend settings |
| `packages/map/src/components/EditorPanel/components/BubbleSizeLegendFields.tsx` | Bubble-size sub-legend settings |
| `packages/core/helpers/ver/4.26.7.ts` | Config migration that normalizes legacy bubble configs |

---

## Helper Functions (`bubbleLayers.ts`)

All layer reads go through this module. Do not read `config.bubble` directly.

| Function | Purpose |
|---|---|
| `createDefaultBubbleLayer(overrides?)` | Returns a fully normalized layer populated with safe defaults. |
| `normalizeBubbleLayer(layer?)` | Fills in any missing fields on an existing layer object. |
| `getBubbleLayers(bubble?)` | Reads `bubble.layers[]` or falls back to a legacy flat shape; returns `BubbleLayer[]`. |
| `hasConfiguredBubbleLayer(layer?)` | Returns `true` when the layer has a coloring or size column and a valid location source. |
| `getConfiguredBubbleLayers(config)` | Returns only layers that pass `hasConfiguredBubbleLayer`. Use this for rendering. |
| `getPrimaryBubbleLayer(config)` | First configured layer, or the first layer if none are fully configured yet. |
| `isBubbleLayerUsingCoordinates(layer?)` | Returns `true` when `locationSource === 'latitude-longitude'`. |
| `hasBubbleLayerCoordinateColumns(layer?)` | Returns `true` when both `columns.latitude.name` and `columns.longitude.name` are set. |
| `mapConfigForBubbleLayer(config, layer)` | Synthesizes a one-off `MapConfig` that merges one bubble layer's columns, palette, and legend into the base config. Used to run `generateRuntimeLegend` and `buildTooltip` in layer scope. |

---

## Data Flow

### 1. UID assignment (`generateRuntimeData.ts`)

On each data change, `generateRuntimeData` processes every row:

- For geo-column layers, `addUIDs` assigns the normal geography UID (state abbreviation, FIPS code, ISO country code, etc.).
- For coordinate layers, rows with valid lat/lng values receive a synthetic `coordinate-bubble-{rowIndex}-{label}` UID via `setRowUID` (which uses `Object.defineProperty` so the property is non-enumerable and does not appear in JSON serialization).
- Each bubble layer's `primary`, numeric `size`, `latitude`, and `longitude` columns are coerced from strings to numbers when they are not the same column as the top-level choropleth primary. Categorical size columns are not coerced.
- When callers pass `keepNoUidRows = true`, rows that failed geography UID assignment receive row-indexed fallback UIDs so they can be included in non-rendering domain calculations without being deduplicated by a shared invalid geography label.

### 2. Legend generation (`CdcMapComponent.tsx`)

Inside the `useEffect` that watches `[runtimeData, config, runtimeFilters]`:

1. The choropleth legend is generated first and dispatched as `SET_RUNTIME_LEGEND`.
2. `getConfiguredBubbleLayers` is called. For each layer, `mapConfigForBubbleLayer` synthesizes a layer-scoped config, `generateBubbleLayerRuntimeData` builds filtered rows with that layer's own UID/location mapping, then `generateRuntimeLegend` runs with that data and the layer's per-layer legend memos.
3. Results are collected into an array and dispatched as `SET_RUNTIME_BUBBLE_LEGEND`.

Per-layer legend memos are stored in `useLegendMemo` as arrays of `MutableRefObject<Map>`, one entry per layer. `getBubbleLegendMemo(index)` and `getBubbleLegendSpecialClassLastMemo(index)` auto-grow those arrays as layers are added.

### 3. Rendering (`BubbleList.tsx`)

`BubbleList` iterates `getConfiguredBubbleLayers(config)`. For each layer:

- `generateBubbleLayerRuntimeData` creates filtered rows for that layer so each layer can use its own geography column or coordinate columns.
- Numeric size layers scale finite numeric values linearly using only renderable layer runtime rows. Categorical size layers build an ordered unique category list from an unfiltered runtime dataset, then map category indexes evenly across the configured min/max radius range. The dataset is expanded with `keepNoUidRows = true` only when `shouldIncludeNonGeoDataInBubbleSizeDomain(layer)` is true: categorical size, `includeNonGeoDataInSizeDomain === true`, and `locationSource` is `data-column` or omitted.
- If `locationSource === 'data-column'`, the bubble is positioned at the geography centroid for the matched row UID.
- If `locationSource === 'latitude-longitude'`, the bubble reads lat/lng from the row and projects them directly.
- Rows included only through the expanded categorical size-domain dataset are never rendered unless they also have valid geography in the normal render runtime data.
- Blank coordinate values are treated as missing, not as `0`.
- Tooltip content is built by calling `applyTooltipsToGeo` with a layer-specific config produced by `mapConfigForBubbleLayer`, so tooltip column labels and prefixes reflect that layer's settings.

### 4. Legend rendering (`Legend.tsx`)

After the choropleth legend block (guarded by `hasMapLegend`), the legend component iterates `bubbleLayers` and renders per-layer:

- `BubbleLayerLegend` — color or category legend items drawn from `runtimeBubbleLegend[layerIndex]`.
- `BubbleSizeLegend` — proportional circles for up to 3 representative numeric data values, or all categorical size labels in the configured category order. Categorical size labels use the same domain list as rendered categorical radii, so an unmatched geography category can appear in the legend only when `includeNonGeoDataInSizeDomain` opts the layer into that expanded domain. Only shown when `layer.legend.size.show === true`.

### 5. Data table (`dataTableHelpers.ts` → `prepareBubbleMapDataTable`)

After migration, bubble-only maps have empty `config.columns.geo.name` and `config.columns.primary.name` because those values were moved to `bubble.layers[0].columns`. The shared data table reads `config.columns`, so `prepareBubbleMapDataTable` backfills `columns.geo.name` and `columns.primary.name` from the first configured bubble layer before the data table renders. This patched config is used only for table rendering — it does not touch the stored config state.

---

## Config Migration (`packages/core/helpers/ver/4.26.7.ts`)

The `4.26.7` migration handles three legacy shapes:

| Legacy shape | What migration does |
|---|---|
| `general.type === 'bubble'` with flat `config.visual` bubble fields | Moves `minBubbleSize`, `maxBubbleSize`, `extraBubbleBorder`, `showBubbleZeros` from `config.visual` into `config.bubble.layers[0]`. Sets `general.type` to `'data'`. Clears top-level `columns.geo.name` and `columns.primary.name` (moved into the layer). |
| Flat `config.bubble` object with no `layers` array | Moves `bubble.columns` and other flat bubble fields into `config.bubble.layers[0]`. |
| `config.bubble.layers[]` already present | Normalizes each layer with `normalizeBubbleLayer` to fill in any missing defaults. |

The migration stamps `config.bubble.migratedToBubbleAccordion = true` for idempotency.

For dashboard configs, the migration recurses into `config.visualizations` and applies `migrateBubbleSettings` to each visualization.

Migration tests: `packages/core/helpers/ver/tests/4.26.7.test.ts`.

---

## Adding a New Bubble Layer Field

1. Add the field to `BubbleLayer` in `packages/map/src/types/MapConfig.ts`.
2. Add a safe default in `createDefaultBubbleLayer` in `packages/map/src/helpers/bubbleLayers.ts`.
3. Add the editor control in `BubbleLayerFields.tsx` or `BubbleLegendFields.tsx`.
4. If the field affects rendering or legend generation, consume it in `BubbleList.tsx` or `Legend.tsx`.
5. If existing saved configs need the field backfilled, add or update a migration in `packages/core/helpers/ver/`.

---

## Testing

Unit tests for bubble layer helpers: `packages/map/src/helpers/tests/bubbleLayers.test.ts`

Unit tests for the data table helper: `packages/map/src/helpers/tests/dataTableHelpers.test.ts`

Migration tests: `packages/core/helpers/ver/tests/4.26.7.test.ts`

Runtime data tests: `packages/map/src/helpers/tests/generateRuntimeData.test.ts`

Stories for manual testing:
- `packages/map/src/_stories/CdcMap.BubbleLegend.stories.tsx` — bubble legend variants
- `packages/map/src/_stories/CdcMap.BubbleLocation.stories.tsx` — lat/lng location source
- `packages/map/src/_stories/CdcMap.smoke.stories.tsx` — basic bubble smoke tests
