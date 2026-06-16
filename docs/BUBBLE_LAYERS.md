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

A map can have zero or more bubble layers. Only layers with a configured primary column and a valid location source (geography column, or both lat and lng columns) are rendered. The rest of the layers are treated as incomplete drafts.

Bubble maps are not a separate map type. `config.general.type` is always `'data'` when bubble layers are present. The type selector in the editor previously had a `'bubble'` option; that value was removed and replaced by the bubble layers accordion.

---

## Config Shape

The canonical shape is `config.bubble.layers[]`. Each layer is a `BubbleLayer` (defined in `packages/map/src/types/MapConfig.ts`):

```ts
type BubbleLayer = {
  label?: string
  locationSource?: 'data-column' | 'latitude-longitude'
  minBubbleSize: number
  maxBubbleSize: number
  extraBubbleBorder: boolean
  showBubbleZeros: boolean
  palette?: { name: string; isReversed?: boolean }
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

The top-level fields (`bubble.migratedToBubbleAccordion`, `bubble.columns`, etc.) are legacy migration artifacts. Do not author them in new configs.

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
| `hasConfiguredBubbleLayer(layer?)` | Returns `true` when the layer has a primary column and a valid location source. |
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
- Each bubble layer's `primary`, `size`, `latitude`, and `longitude` columns are coerced from strings to numbers when they are not the same column as the top-level choropleth primary.

### 2. Legend generation (`CdcMapComponent.tsx`)

Inside the `useEffect` that watches `[runtimeData, config, runtimeFilters]`:

1. The choropleth legend is generated first and dispatched as `SET_RUNTIME_LEGEND`.
2. `getConfiguredBubbleLayers` is called. For each layer, `mapConfigForBubbleLayer` synthesizes a layer-scoped config, `generateBubbleLayerRuntimeData` builds filtered rows with that layer's own UID/location mapping, then `generateRuntimeLegend` runs with that data and the layer's per-layer legend memos.
3. Results are collected into an array and dispatched as `SET_RUNTIME_BUBBLE_LEGEND`.

Per-layer legend memos are stored in `useLegendMemo` as arrays of `MutableRefObject<Map>`, one entry per layer. `getBubbleLegendMemo(index)` and `getBubbleLegendSpecialClassLastMemo(index)` auto-grow those arrays as layers are added.

### 3. Rendering (`BubbleList.tsx`)

`BubbleList` iterates `getConfiguredBubbleLayers(config)`. For each layer:

- `generateBubbleLayerRuntimeData` creates filtered rows for that layer so each layer can use its own geography column or coordinate columns.
- If `locationSource === 'data-column'`, the bubble is positioned at the geography centroid for the matched row UID.
- If `locationSource === 'latitude-longitude'`, the bubble reads lat/lng from the row and projects them directly.
- Blank coordinate values are treated as missing, not as `0`.
- Tooltip content is built by calling `applyTooltipsToGeo` with a layer-specific config produced by `mapConfigForBubbleLayer`, so tooltip column labels and prefixes reflect that layer's settings.

### 4. Legend rendering (`Legend.tsx`)

After the choropleth legend block (guarded by `hasMapLegend`), the legend component iterates `bubbleLayers` and renders per-layer:

- `BubbleLayerLegend` — color or category legend items drawn from `runtimeBubbleLegend[layerIndex]`.
- `BubbleSizeLegend` — proportional circles for up to 3 representative data values from the layer-scoped filtered rows, computed via `d3-scale.scaleLinear` against the visible data range. Only shown when `layer.legend.size.show === true`.

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
