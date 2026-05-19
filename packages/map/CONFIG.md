# `@cdc/map` Configuration Reference

This document covers the `@cdc/map`-owned config contract. Shared nested structures such as `filters`, `table`, `annotations`, `markupVariables`, `general.palette`, and the shared column/property shapes are documented in the [`@cdc/core` config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md).

To follow those shared types locally, use `packages/core/CONFIG.md` in this monorepo or `node_modules/@cdc/core/CONFIG.md` in an installed app. If neither path is available, use the GitHub link above.

## Organization

The sections below follow the package’s real config surface:

| Section | Covers |
| --- | --- |
| Identity and data source | Package identity plus loader metadata |
| Geography and columns | Map mode, geography controls, and package-specific column wiring |
| Copy and shell controls | Title, intro/subtext, download toggles, and map shell behavior |
| Classification and palette | Map-specific legend behavior and palette notes |
| Map features | Overlays, patterns, hex maps, and small multiples |
| Layout and interactivity | Map positioning, visual shell settings, and tooltip behavior |
| Fields You Can Ignore | Legacy/editor artifacts that may still appear in saved configs |

## Minimum Working Config

The copy-pasteable minimum config lives in [README.md](./README.md). Its source of truth is [`examples/minimal-example.json`](./examples/minimal-example.json), and a test keeps the README block in sync with that file.

## Identity and Data Source

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `type` | `string` | Yes | None | Identifies the package. | Must be `map`. |
| `version` | `string` | No | None | Saved COVE version for migration purposes. | Use a semantic COVE version for authored configs so migrations can reason about saved-version order. |
| `locale` | `string` | No | Browser/runtime default | Locale used by markup-variable and shared formatting helpers. | Any valid `Intl` locale is accepted. |

The following authorable data-loading fields are shared and documented in core: `data`, `dataUrl`, `dataDescription`, `dataMetadata`, and `dataKey` for dashboard-driven embeds. `dataMetadata` may be loader-populated, but consumers should preserve or author it when metadata-backed alt text, markup variables, or footnotes need it. Runtime/file metadata such as `runtimeDataUrl` may still appear in saved configs, but consumers usually do not author those fields directly.

## Geography and Columns

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `general.geoType` | `string` | Yes | `single-state` | Chooses the geography family being rendered. | `us`, `us-region`, `us-county`, `world`, `single-state`, `google-map`. Geocode maps use `general.type: "us-geocode"` with `geoType: "us-county"` or `general.type: "world-geocode"` with `geoType: "world"`. Bubble maps use `general.type: "bubble"` with a supported geography such as `us` or `world`. |
| `general.type` | `string` | Yes | `data` | Chooses the interaction mode. | `data`, `navigation`, `us-geocode`, `world-geocode`, `bubble` |
| `columns.geo` | `object` | Yes | See package defaults | Geography lookup column. | Uses shared column properties from core; `displayColumn` is map-specific and is used when the displayed geography label differs from the lookup field. |
| `columns.primary` | `object` | Conditionally | See package defaults | Main data column used for classification and tooltips. | Uses shared column properties from core. Required for data maps and bubble maps. |
| `columns.navigate` | `object` | Conditionally | `{ name: '' }` | URL column used in navigation mode. | Required when `general.type` is `navigation`. |
| `columns.latitude` | `object` | Conditionally | `{ name: '' }` | Latitude column for coordinate-based geocode and Google maps. | Required for `us-geocode`, `world-geocode`, and `google-map`. US/world bubble maps can resolve positions from built-in geography coordinates. |
| `columns.longitude` | `object` | Conditionally | `{ name: '' }` | Longitude column for coordinate-based geocode and Google maps. | Required for `us-geocode`, `world-geocode`, and `google-map`. US/world bubble maps can resolve positions from built-in geography coordinates. |
| `columns.categorical` | `object` | No | `{ name: '' }` | Category column for bubble maps using categorical legends. | `name` only. |
| `columns.hsa` | `object` | No | `{ name: '' }` | Optional HSA column used by county maps when HSA boundaries are shown. | `name` only. |
| `columns.additionalColumnN` | `object` | No | None | Additional persisted column configs for tooltip and data-table output. | Editor-created keys such as `additionalColumn0` use shared column display fields. |

## Copy And Shell Controls

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `general.title` | `string` | No | `''` | Main map title. | Hidden when `showTitle` is `false`. |
| `general.titleStyle` | `string` | No | `small` | Chooses the visual title treatment. | `legacy`, `large`, `small` |
| `general.showTitle` | `boolean` | No | `true` | Shows or hides the title. | `true`, `false` |
| `general.superTitle` | `string` | No | `''` | Optional small line above the main title. | Editor-managed. |
| `general.language` | `string` | No | `en` | Language code used by some map helpers and editor defaults. | Usually an ISO locale/language code. |
| `general.introText` | `string` | No | `''` | Intro copy shown in the shell. | Supports markup variables when enabled. |
| `general.subtext` | `string` | No | `''` | Supporting copy shown below the visualization. | Supports basic HTML plus markup variables when enabled. |
| `general.footnotes` | `string` | No | `''` | Legacy/simple footnote copy. | Prefer top-level `footnotes` for structured static or data-driven footnotes. |
| `footnotes` | [`Footnotes`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#footnotes) | No | None | Structured static or data-driven footnotes rendered below the map. | Shared footnotes shape from `@cdc/core`. |
| `general.navigationTarget` | `string` | No | `_self` | Target used when the map opens navigation URLs. | `_self`, `_blank` |
| `general.showSidebar` | `boolean \| "hidden"` | No | `true` | Shows the legend/sidebar region. | Author booleans for normal configs. Set to `false` for navigation and bubble layouts. Editor exports may contain `"hidden"`, but runtime treats that string as truthy, so it does not hide the legend. |
| `general.noDataMessage` | `string` | No | `No State Selected` | Message shown when a single-state map has no active selection. | Package-specific copy. |
| `general.annotationDropdownText` | `string` | No | `Annotations` | Label shown for the annotation dropdown. | Used when annotation dropdowns are enabled. |
| `general.showAnnotationDropdown` | `boolean` | No | `false` | Changes desktop visibility classes for the annotation dropdown. | Annotation dropdown markup renders when annotations exist; this flag controls whether it is shown in desktop layouts. |
| `general.geoBorderColor` | `string` | No | `darkGray` | Border color used for geography outlines. | `darkGray`, `sameAsBackground`, and other editor-supported color tokens. |
| `general.geoLabelOverride` | `string` | No | `''` | Overrides the geography label used in tooltips and other copy. | Useful when the map should say "Country", "State/Territory", or similar. |
| `general.fullBorder` | `boolean` | No | `false` | Adds a full border around navigation maps. | Mainly relevant when `general.type` is `navigation`. |
| `general.headerColor` | `string` | No | `theme-blue` | Map-owned header theme token. | Accepts shared [`ComponentThemes`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#componentthemes) values. |
| `general.displayStateLabels` | `boolean` | No | `true` | Shows state labels directly on the map. | `true`, `false` |
| `general.displayAsHex` | `boolean` | No | `false` | Switches the US map to a hex-style treatment. | Works with `hexMap`. |
| `general.equalNumberOptIn` | `boolean` | No | `false` | Enables the newer equal-number legend path. | Used when `legend.separateZero` and equal-number classification interact. |
| `general.allowMapZoom` | `boolean` | No | `true` | Enables zooming on supported map types. | Disabled in some editor flows and unsupported map modes. |
| `general.showClearSelectionButton` | `boolean` | No | `true` | Shows a Clear Selection control for dashboard maps that set a shared filter. | Only meaningful when the map is used inside a dashboard as a `setBy` control and a selection is currently active. Current runtime support is implemented for the U.S. map. |
| `general.hideGeoColumnInTooltip` | `boolean` | No | `false` | Hides the geography field name in tooltips. | `true`, `false` |
| `general.hidePrimaryColumnInTooltip` | `boolean` | No | `false` | Hides the primary data field name in tooltips. | `true`, `false` |
| `general.showDownloadImgButton` | `boolean` | No | `false` | Enables PNG/image download. | Editor-managed field. |
| `general.includeContextInDownload` | `boolean` | No | `false` | Includes heading and explanatory context in image downloads. | Only meaningful when image downloads are enabled. |
| `general.showDownloadPdfButton` | `boolean` | No | `false` | Enables PDF download. | Editor-managed field. |
| `general.showHSABoundaries` | `boolean` | No | `false` | Shows HSA boundaries on supported county maps. | Mainly relevant for health-system maps. |
| `general.showNeighboringStates` | `boolean` | No | `false` | Includes neighboring states in the county map outline. | Only relevant for county maps. |
| `general.showStateDropdown` | `boolean` | No | `false` | Shows a state picker in county views. | Only relevant for county maps. |
| `general.countyCensusYear`, `general.filterControlsCountyYear` | `string` | No | Package defaults | County census-year controls used by county map helpers and editor flows. | Only meaningful for county maps. |
| `general.filterControlsStatesPicked` | `string` | No | `''` | Source column used to derive selected states from filtered data. | Related to `general.statesPicked`; consumed by single-state/county helper logic. |
| `general.hideUnselectedStates` | `boolean` | No | `true` when states are picked | Controls whether selected-state maps hide or keep unselected states visible. | Only meaningful when `statesPicked` is populated on single-state maps. |
| `general.statesPicked` | `object[]` | No | `[]` | Selected states for single-state maps. | Each item has `fipsCode` and `stateName`. |
| `general.countriesPicked` | `object[]` | No | `[]` | Selected countries for world maps. | Each item has `iso` and `name`. Use supported ISO 3166-1 alpha-3 codes for `iso`; two-letter codes can fail selection and centering. |
| `general.hideUnselectedCountries` | `boolean` | No | `false` | Controls whether unselected countries are hidden or grayed out. | Only meaningful when `countriesPicked` is populated. |
| `general.territoriesAlwaysShow` | `boolean` | No | `false` in package initial state | Controls how U.S. territories are rendered on U.S. maps. | `true`, `false`. On county maps, `false` hides all territory counties, except migrated legacy configs with `migrations.showPuertoRico` can still render Puerto Rico for compatibility; `true` renders only territory counties with matching runtime data. On state maps, `false` renders only territories with matching runtime data; `true` renders all supported territories whether data exists or not. Normal loaded configs are seeded or migrated before rendering; lower-level geography helpers still treat an undefined value as enabled for legacy compatibility. |
| `general.territoriesLabel` | `string` | No | None | Label shown for the territories group in U.S. region maps. | Mainly relevant for `us-region`; legacy and example configs commonly use `Territories`. |
| `general.hasRegions` | `boolean` | No | `false` | Marks the map as region-aware for some data-loading and editor flows. | Mainly used by US regional map flows. |

The canonical palette configuration is shared in core. This package still accepts the legacy `color` field for older saved configs, but new configs should author `general.palette` instead.

## Classification And Palette

Legend configuration is shared with core. The map package honors the shared legend contract plus these map-specific fields and behaviors:

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `legend.type` | `string` | No | `equalnumber` | Chooses the classification strategy. | `equalnumber`, `equalinterval`, `category` |
| `legend.numberOfItems` | `number` | No | `5` | Number of legend classes for numeric legends. | Editor usually limits this to small integer values. |
| `legend.position` | `string` | No | `top` | Legend placement. | `top`, `bottom`, `left`, `right`, `side`, depending on layout. |
| `legend.style` | `string` | No | `gradient` | Legend marker or gradient style. | `circles`, `boxes`, `gradient` |
| `legend.subStyle` | `string` | No | `linear blocks` | Gradient legend treatment. | `linear blocks`, `smooth` |
| `legend.title`, `legend.description` | `string` | No | `''` | Legend heading and description. | Supports markup-variable processing in supported map flows. |
| `legend.descriptions` | `Record<string, string \| string[]>` | No | `{}` | Dynamic legend-description lookup used when `legend.dynamicDescription` is `true`. | Keys use the filter index and selected filter-value index, such as `0,0`. Editor-saved values may be strings or one-item string arrays. |
| `legend.specialClasses` | `{ key; label; value }[]` | No | `[]` | Extra legend classes for special cases. | Used for no-data or other override classes. |
| `legend.unified` | `boolean` | No | `false` | Uses unified legend behavior for compatible map modes. | `true`, `false` |
| `legend.singleColumn`, `legend.singleRow`, `legend.verticalSorted` | `boolean` | No | `false` | Layout and sorting controls for legend items. | Runtime may still adapt for available space. |
| `legend.showSpecialClassesLast` | `boolean` | No | `false` | Moves special classes to the end of the legend. | `true`, `false` |
| `legend.dynamicDescription` | `boolean` | No | `false` | Enables dynamic legend description behavior. | `true`, `false` |

When `legend` is omitted entirely, the package initial state supplies the defaults above. When a config provides a partial `legend` object, missing `numberOfItems`, `position`, `style`, and `hideBorder` can be backfilled from legacy defaults: `3`, `side`, `circles`, and `false`.

| Behavior | Details |
| --- | --- |
| `legend.separateZero` | When `true`, numeric legends split zero into its own class unless `general.equalNumberOptIn` changes the scaling path. |
| `legend.categoryValuesOrder` | Controls the order of categorical legend items and small-multiple tile sorting. |
| `legend.additionalCategories` | Adds extra category labels to the legend. |
| `legend.groupBy` | Groups categorical legend items when the editor uses grouped category views. |
| `legend.tickRotation` | Rotates legend tick labels in supported layouts. |
| `legend.hideBorder` | Hides the legend border when `true`. The default is `true` for the package’s current initial state. |
| `legend.singleColumnLegend` | Legacy flag used by older legend layouts. |
| `legend.separators` | Optional separator metadata used by gradient legends. |

## Filtering And Tables

Shared filter and table structures are documented in [`@cdc/core`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#filters) and [`@cdc/core` table docs](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#table). Map-specific behavior includes:

| Behavior | Details |
| --- | --- |
| `filterBehavior` | Controls whether the map updates immediately or waits for an explicit filter change in supporting editor flows. |
| `filterIntro` | Intro copy shown near the filter UI. |
| `table.forceDisplay` | Keeps the data table visible even when the current mode would normally hide it. |
| `table.showNonGeoData` | Includes non-geographic rows in map-related table output. |
| `table.showFullGeoNameInCSV` | Adds full geography names to CSV downloads when the formatter can resolve them. |
| `table.wrapColumns` | Allows map table cell content to wrap instead of staying on one line. |

## Map Features

### `map.layers`

Custom overlay or base layers added by the editor.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `name` | `string` | No | None | Display name for the layer. | Editor-label metadata used in the accordion label; runtime rendering depends on `url` and `namespace`, not `name`. |
| `url` | `string` | Yes | None | Layer source URL. | Current runtime expects TopoJSON. Raw GeoJSON is not handled by this layer reader. |
| `namespace` | `string` | Yes | None | TopoJSON `objects` key used to select the layer geometry. | Required for rendering and also used when building layer ids. |
| `fill` | `string` | No | TopoJSON feature fill, then `transparent` | Fill color for the layer. | CSS color string. |
| `fillOpacity` | `number \| string` | No | TopoJSON `fill-opacity`, then `1` | Fill opacity for the layer. | Saved configs may contain either a number or numeric string. |
| `stroke` | `string` | No | TopoJSON feature stroke, then `transparent` | Stroke color for the layer. | CSS color string. |
| `strokeWidth` | `number \| string` | No | TopoJSON `stroke-width` when present | Stroke width for the layer. | Saved configs may contain either a number or numeric string. |
| `tooltip` | `string` | No | `''` | Tooltip text or HTML for the layer. | Empty string disables layer-specific tooltip content. |

### `map.patterns`

Pattern overlays applied to matching geography rows.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dataKey` | `string` | No | `''` | Column used to match the pattern. | Leave blank to match across all columns. |
| `dataValue` | `string` | No | `''` | Value that triggers the pattern. | Compared as a string or numeric-like value. |
| `pattern` | `string` | No | `circles` | Pattern type. | `circles`, `waves`, `lines` |
| `label` | `string` | No | `''` | Optional legend label for the pattern. | Displayed in the legend when present. |
| `size` | `string` | No | `medium` | Pattern density / size. | `small`, `medium`, `large` |
| `color` | `string` | No | `''` | Pattern color. | CSS color string. |

### `hexMap`

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `hexMap.type` | `string` | No | `''` | Chooses the hex-map rendering mode. | `shapes`, `standard`, or blank to disable. |
| `hexMap.shapeGroups` | `object[]` | No | `[]` or a single blank group in defaults | Groups of arrow/shape rules for hex-map cells. | See the nested fields below. |

`hexMap.shapeGroups[]`

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `legendTitle` | `string` | No | `''` | Title for the shape group in the legend. | Optional. |
| `legendDescription` | `string` | No | `''` | Description for the shape group. | Optional. |
| `items` | `object[]` | No | `[]` | Shape rules that determine which arrow or icon is shown. | Each item matches by `key`, `operator`, and `value`. |

`hexMap.shapeGroups[].items[]`

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `shape` | `string` | No | `Arrow Up` | Shape rendered for the rule. | Editor values include arrow directions. |
| `key` | `string` | No | `''` | Source column/key to inspect. | Current editor and runtime use this field for hex-shape matching. |
| `operator` | `string` | No | `=` | Comparison operator. | `=`, `≠`, `<`, `>`, `<=`, `>=` |
| `value` | `string` | No | `''` | Comparison value. | Compared against the configured key. |

### `smallMultiples`

Only supported for `us`, `single-state`, and `us-region` map types.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `smallMultiples.mode` | `string` | No | `''` | Enables the small-multiples mode. | `by-column` when active. |
| `smallMultiples.tileColumn` | `string` | No | `''` | Column used to split the map into tiles. | Must be a column in the dataset. |
| `smallMultiples.tilesPerRowDesktop` | `number` | No | `2` | Number of tiles per row on desktop. | Editor limits this to small integer values. |
| `smallMultiples.tilesPerRowMobile` | `number` | No | `1` | Number of tiles per row on mobile. | Usually left alone. |
| `smallMultiples.tileOrderType` | `string` | No | `asc` | Tile ordering strategy. | `asc`, `desc`, `custom` |
| `smallMultiples.tileOrder` | `string[]` | No | `[]` | Explicit custom tile order. | Used only when `tileOrderType` is `custom`. |
| `smallMultiples.tileTitles` | `object` | No | `{}` | Optional custom title map per tile key. | Keys are tile identifiers. |
| `smallMultiples.synchronizedTooltips` | `boolean` | No | `true` | Keeps tooltips synchronized across tiles. | `true`, `false` |

### `annotations` and `markupVariables`

These structures are shared with core. In map configs, annotation dropdown markup renders when annotations exist; `general.showAnnotationDropdown` controls the desktop visibility treatment. Markup variables are applied to title, intro, subtext, legend, and other supported text fields when `enableMarkupVariables` is true.

## Layout And Interactivity

### Accessibility

Map configs can include [`altText`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#alttextconfig), the shared `AltTextConfig` object from core. The map runtime first builds a map-specific SVG `aria-label` from the rendered geography and data context, then appends the resolved static or metadata-driven `altText` description when one is available.

Shared shell styling flags on `visual` follow core [`ComponentStyles`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#componentstyles). Map-specific `visual` fields are listed here because they affect marker, bubble, and geocode rendering.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `mapPosition.coordinates` | `[number, number]` | No | `[0, 30]` | Initial map center. | The runtime may reset this when the geography changes. |
| `mapPosition.zoom` | `number` | No | `1` | Initial map zoom. | Editor/runtime may reset it when geography changes. |
| `visual.border` | `boolean` | No | `false` | Enables a component border. | Shared shell styling flag. |
| `visual.borderColorTheme` | `boolean` | No | `false` | Uses the theme color for the border. | Shared shell styling flag. |
| `visual.accent` | `boolean` | No | `false` | Enables accent styling. | Shared shell styling flag. |
| `visual.background` | `boolean` | No | `false` | Enables background styling. | Shared shell styling flag. |
| `visual.hideBackgroundColor` | `boolean` | No | `false` | Suppresses the background color. | Shared shell styling flag. |
| `visual.tp5Treatment` | `boolean` | No | `false` | Enables the TP5 shell treatment. | Mostly controlled by editor settings. |
| `visual.tp5Background` | `boolean` | No | `false` | Enables the TP5 cyan background. | Mostly controlled by editor settings. |
| `visual.minBubbleSize` | `number` | No | `1` | Minimum bubble radius. | Only relevant for bubble maps. |
| `visual.maxBubbleSize` | `number` | No | `20` | Maximum bubble radius. | Only relevant for bubble maps. |
| `visual.extraBubbleBorder` | `boolean` | No | `false` | Adds an extra border around bubbles. | Only relevant for bubble maps. |
| `visual.cityStyle` | `string` | No | `circle` | Default city marker shape. | `circle`, `pin`, `square`, `triangle`, `diamond`, `star` |
| `visual.cityStyleLabel` | `string` | No | `''` | Legend label for the default city style. | Optional. |
| `visual.geoCodeCircleSize` | `number` | No | `8` | Size used for geocode city markers. | Editor limits this to small integer values. |
| `visual.showBubbleZeros` | `boolean` | No | `false` | Shows bubble markers for zero values. | Only relevant for bubble maps. |
| `visual.additionalCityStyles` | `object[]` | No | `[]` | Extra city-style rules added in the editor. | Each rule uses `label`, `column`, `value`, and `shape`. |
| `tooltips.appearanceType` | `string` | No | `hover` | Chooses hover or click-based detail displays. | `hover`, `click` |
| `tooltips.linkLabel` | `string` | No | `Learn More` | Tooltip link label. | Used when `appearanceType` is `click`. |
| `tooltips.noDataLabel` | `string` | No | `No Data` render fallback | Text shown for missing data in the tooltip. | Omitted or empty values render as `No Data`. |
| `tooltips.opacity` | `number` | No | `90` | Tooltip opacity. | 0-100 in editor flows. |

## Fields You Can Ignore

These fields may appear in saved configs, editor exports, or runtime state, but consumers usually do not need to author them directly:

| Field or group | Why you can ignore it |
| --- | --- |
| `runtime.*` | Internal runtime state created by the package during initialization. |
| `defaultData`, `formattedData`, `datasets`, `runtimeDataUrl` | Loader/runtime artifacts rather than hand-authored standalone config. |
| `color` | Legacy top-level palette token. Author `general.palette` for current configs. |
| `sharing.*` | Loader/export metadata that belongs to editor or embed flows. |
| `migrations.*` | Migration bookkeeping that records which update steps have run. Preserve `migrations.showPuertoRico` when encountered in migrated county maps; runtime still reads it as legacy compatibility metadata, but new configs should not author it manually. |
| `dataTable` | Top-level legacy/export artifact; table behavior is configured through `table`. |
| `usingWidgetLoader` | Internal loader flag. |
| `newViz` | Editor-only preview/confirmation flag. |
| `general.filterControlsStatePicked` | Legacy singular editor-control artifact; use `general.statesPicked` for authored selected-state config. |
| `general.convertFipsCodes` | Legacy/editor-authored FIPS conversion flag. Current runtime normalizes FIPS-like values during U.S. and county map load regardless of this value. |
| `general.showDownloadMediaButton` | Legacy editor control; current rendering uses `general.showDownloadImgButton` and `general.showDownloadPdfButton` directly. |
| `general.territoriesAlwayShow` | Misspelled legacy artifact from an older migration bug. The runtime repairs this to `general.territoriesAlwaysShow`; do not author it manually. |
| `map.patterns[].contrastCheck` | Editor validation state for pattern contrast; changing it does not affect rendered pattern matching or styling. |
| `hexMap.shapeGroups[].items[].column` | Legacy/stale hex-shape field; author `hexMap.shapeGroups[].items[].key` for current runtime matching. |
| `statePicked` | Legacy saved-config artifact from older editor flows. |
| `general.showDownloadButton`, `general.expandDataTable` | Legacy editor state from older configs. Current table behavior uses `table.download` and `table.expanded`. |
