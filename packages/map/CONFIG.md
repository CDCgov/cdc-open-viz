# `@cdc/map` Configuration Reference

This document covers the `@cdc/map`-owned config contract. Shared nested structures such as `filters`, `table`, `annotations`, `markupVariables`, `general.palette`, `general.headerColor`, and the shared column/property shapes are documented in the [`@cdc/core` config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md).

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
| `version` | `string` | No | None | Saved COVE version for migration purposes. | Use the current package version when authoring a new config. |
| `color` | `string` | No | Legacy fallback | Legacy palette name kept for backward compatibility. | Prefer `general.palette.name` when authoring new configs. |

The following data-loading fields are shared and documented in core: `data`, `dataUrl`, `runtimeDataUrl`, `dataDescription`, `dataMetadata`, and `dataKey` for dashboard-driven embeds.

## Geography and Columns

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `general.geoType` | `string` | Yes | `single-state` | Chooses the geography family being rendered. | `us`, `us-region`, `us-county`, `world`, `us-geocode`, `world-geocode`, `bubble`, `single-state`, `google-map` |
| `general.type` | `string` | Yes | `data` | Chooses the interaction mode. | `data`, `navigation`, `us-geocode`, `world-geocode`, `bubble` |
| `columns.geo` | `object` | Yes | See package defaults | Geography lookup column. | Uses shared column properties from core; `displayColumn` is map-specific and is used when the displayed geography label differs from the lookup field. |
| `columns.primary` | `object` | Conditionally | See package defaults | Main data column used for classification and tooltips. | Uses shared column properties from core. Required for data maps and bubble maps. |
| `columns.navigate` | `object` | Conditionally | `{ name: '' }` | URL column used in navigation mode. | Required when `general.type` is `navigation`. |
| `columns.latitude` | `object` | Conditionally | `{ name: '' }` | Latitude column for geocode and bubble maps. | Required for `us-geocode` and `world-geocode`. |
| `columns.longitude` | `object` | Conditionally | `{ name: '' }` | Longitude column for geocode and bubble maps. | Required for `us-geocode` and `world-geocode`. |
| `columns.categorical` | `object` | No | `{ name: '' }` | Category column for bubble maps using categorical legends. | `name` only. |
| `columns.hsa` | `object` | No | `{ name: '' }` | Optional HSA column used by county maps when HSA boundaries are shown. | `name` only. |

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
| `general.footnotes` | `string` | No | `''` | Optional footnote copy. | Shared footnotes shape is documented in core. |
| `general.navigationTarget` | `string` | No | `_self` | Target used when the map opens navigation URLs. | `_self`, `_blank` |
| `general.showSidebar` | `boolean` | No | `true` | Shows the legend/sidebar region. | Set to `false` for navigation and bubble layouts. |
| `general.noDataMessage` | `string` | No | `No State Selected` | Message shown when a single-state map has no active selection. | Package-specific copy. |
| `general.annotationDropdownText` | `string` | No | `Annotations` | Label shown for the annotation dropdown. | Used when annotation dropdowns are enabled. |
| `general.showAnnotationDropdown` | `boolean` | No | `false` | Shows the annotation dropdown in the shell. | Editor-driven toggle. |
| `general.geoBorderColor` | `string` | No | `darkGray` | Border color used for geography outlines. | `darkGray`, `sameAsBackground`, and other editor-supported color tokens. |
| `general.geoLabelOverride` | `string` | No | `''` | Overrides the geography label used in tooltips and other copy. | Useful when the map should say "Country", "State/Territory", or similar. |
| `general.fullBorder` | `boolean` | No | `false` | Adds a full border around navigation maps. | Mainly relevant when `general.type` is `navigation`. |
| `general.headerColor` | `string` | No | `theme-blue` | Shared header theme token. | See core docs for the full token list. |
| `general.displayStateLabels` | `boolean` | No | `true` | Shows state labels directly on the map. | `true`, `false` |
| `general.displayAsHex` | `boolean` | No | `false` | Switches the US map to a hex-style treatment. | Works with `hexMap`. |
| `general.equalNumberOptIn` | `boolean` | No | `false` | Enables the newer equal-number legend path. | Used when `legend.separateZero` and equal-number classification interact. |
| `general.allowMapZoom` | `boolean` | No | `true` | Enables zooming on supported map types. | Disabled in some editor flows and unsupported map modes. |
| `general.convertFipsCodes` | `boolean` | No | `true` | Normalizes FIPS-like geography values. | Helpful for US maps that use mixed FIPS formats. |
| `general.hideGeoColumnInTooltip` | `boolean` | No | `false` | Hides the geography field name in tooltips. | `true`, `false` |
| `general.hidePrimaryColumnInTooltip` | `boolean` | No | `false` | Hides the primary data field name in tooltips. | `true`, `false` |
| `general.showDownloadMediaButton` | `boolean` | No | `false` | Enables the media download button. | Often paired with the image/PDF toggles below. |
| `general.showDownloadImgButton` | `boolean` | No | `false` | Enables PNG/image download. | Editor-managed field. |
| `general.includeContextInDownload` | `boolean` | No | `false` | Includes heading and explanatory context in image downloads. | Only meaningful when image downloads are enabled. |
| `general.showDownloadPdfButton` | `boolean` | No | `false` | Enables PDF download. | Editor-managed field. |
| `general.showHSABoundaries` | `boolean` | No | `false` | Shows HSA boundaries on supported county maps. | Mainly relevant for health-system maps. |
| `general.showNeighboringStates` | `boolean` | No | `false` | Includes neighboring states in the county map outline. | Only relevant for county maps. |
| `general.showStateDropdown` | `boolean` | No | `false` | Shows a state picker in county views. | Only relevant for county maps. |
| `general.hideUnselectedStates` | `boolean` | No | `true` when states are picked | Controls whether selected-state maps hide or keep unselected states visible. | Only meaningful when `statesPicked` is populated on single-state maps. |
| `general.statesPicked` | `object[]` | No | `[]` | Selected states for single-state maps. | Each item has `fipsCode` and `stateName`. |
| `general.countriesPicked` | `object[]` | No | `[]` | Selected countries for world maps. | Each item has `iso` and `name`. |
| `general.hideUnselectedCountries` | `boolean` | No | `false` | Controls whether unselected countries are hidden or grayed out. | Only meaningful when `countriesPicked` is populated. |
| `general.territoriesAlwaysShow` | `boolean` | No | `true` | Controls whether county/state territory callouts are allowed to render. | `true`, `false`. On county maps, `false` hides all territory counties; `true` only renders territory counties that have matching runtime data. When omitted, the runtime/editor treat it as `true`; legacy county maps are backfilled to `true` during migration unless they already set an explicit value. |
| `general.territoriesLabel` | `string` | No | `Territories` | Label used for territories in US maps. | Often left at the default. |
| `general.hasRegions` | `boolean` | No | `false` | Marks the map as region-aware for some data-loading and editor flows. | Mainly used by US regional map flows. |

The canonical palette configuration is shared in core. This package still accepts the legacy `color` field for older saved configs, but new configs should author `general.palette` instead.

## Classification And Palette

Legend configuration is shared with core. The map package honors the shared legend contract plus these map-specific behaviors:

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

Shared filter and table structures are documented in core. Map-specific behavior includes:

| Behavior | Details |
| --- | --- |
| `filterBehavior` | Controls whether the map updates immediately or waits for an explicit filter change in supporting editor flows. |
| `filterIntro` | Intro copy shown near the filter UI. |
| `table.forceDisplay` | Keeps the data table visible even when the current mode would normally hide it. |

## Map Features

### `map.layers`

Custom overlay or base layers added by the editor.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `name` | `string` | Yes | None | Display name for the layer. | Used in the editor accordion label. |
| `url` | `string` | Yes | None | Layer source URL. | Usually GeoJSON or TopoJSON. |
| `namespace` | `string` | No | `''` | SVG namespace / layer prefix. | Used when building layer ids. |
| `fill` | `string` | No | `''` | Fill color for the layer. | CSS color string. |
| `fillOpacity` | `number` | No | `''` | Fill opacity for the layer. | Numeric opacity value. |
| `stroke` | `string` | No | `''` | Stroke color for the layer. | CSS color string. |
| `strokeWidth` | `number` | No | `''` | Stroke width for the layer. | Numeric width value. |
| `tooltip` | `boolean` | No | `false` | Enables hover/click tooltips on the layer. | `true`, `false` |

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
| `contrastCheck` | `boolean` | No | `true` | Result of the editor contrast check. | Usually managed by the editor. |

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
| `items` | `object[]` | No | `[]` | Shape rules that determine which arrow or icon is shown. | Each item can match by `key`, `column`, `operator`, and `value`. |

`hexMap.shapeGroups[].items[]`

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `key` | `string` | No | `''` | Internal key for the hex-map rule. | Usually left blank in hand-authored configs. |
| `shape` | `string` | No | `Arrow Up` | Shape rendered for the rule. | Editor values include arrow directions. |
| `column` | `string` | No | `''` | Source column to inspect. | Can be blank for some legacy flows. |
| `operator` | `string` | No | `=` | Comparison operator. | `=`, `≠`, `<`, `>`, `<=`, `>=` |
| `value` | `string` | No | `''` | Comparison value. | Compared against the configured column. |

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

These structures are shared with core. In map configs, the important package-specific behavior is that annotation dropdowns are only visible when `general.showAnnotationDropdown` is enabled, and markup variables are applied to title, intro, subtext, legend, and other supported text fields when `enableMarkupVariables` is true.

## Layout And Interactivity

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
| `tooltips.noDataLabel` | `string` | No | `''` | Text shown for missing data in the tooltip. | Optional. |
| `tooltips.opacity` | `number` | No | `90` | Tooltip opacity. | 0-100 in editor flows. |

## Fields You Can Ignore

These fields may appear in saved configs, editor exports, or runtime state, but consumers usually do not need to author them directly:

| Field or group | Why you can ignore it |
| --- | --- |
| `runtime.*` | Internal runtime state created by the package during initialization. |
| `defaultData`, `formattedData`, `datasets`, `runtimeDataUrl`, `dataMetadata` | Loader/runtime artifacts rather than hand-authored standalone config. |
| `sharing.*` | Loader/export metadata that belongs to editor or embed flows. |
| `usingWidgetLoader` | Internal loader flag. |
| `newViz` | Editor-only preview/confirmation flag. |
| `columns.additionalColumnN` | Editor-generated extra columns for data-table and tooltip workflows. |
| `general.countyCensusYear`, `general.filterControlsCountyYear`, `general.filterControlsStatesPicked` | Editor-only controls that are surfaced for some county and single-state flows. |
| `general.territoriesAlwayShow` | Misspelled legacy artifact from an older migration bug. The runtime repairs this to `general.territoriesAlwaysShow`; do not author it manually. |
| `statePicked` | Legacy saved-config artifact from older editor flows. |
| `showDownloadButton`, `expandDataTable` | Legacy editor state from older configs. |
