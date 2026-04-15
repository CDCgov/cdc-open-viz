# `@cdc/map` Configuration Reference

This document describes the supported configuration contract for `@cdc/map`.

Shared nested config types used here are documented in the canonical [`@cdc/core` shared config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md).

## Organization

The config is documented in the same order the package loads and renders it:

| Section | Covers |
| --- | --- |
| Identity and data source | Package identity, data loading, and saved-config metadata |
| Geography and columns | Geo type, map mode, and column mapping for the active dataset |
| Classification and palette | Legend behavior, palette selection, and category ordering |
| Filtering and tables | Filters, data table behavior, and tooltip text |
| Map features | Custom layers, patterns, hex maps, small multiples, annotations, and markup variables |
| Layout and interactivity | Shell styling, map position, zoom, and tooltip interaction |
| Fields You Can Ignore | Runtime/editor artifacts and other legacy fields |

## Minimum Working Config

The copy-pasteable minimum config lives in [README.md](./README.md). Its source of truth is [`examples/minimal-example.json`](./examples/minimal-example.json), and a test keeps the README block in sync with that file.

## Identity and Data Source

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `type` | `string` | Yes | None | Identifies the package. | Must be `map`. |
| `version` | `string` | No | None | Saved COVE version for migration purposes. | Use the current package version when authoring a new config. |
| `color` | `string` | No | `bluegreen` fallback | Legacy palette name kept for compatibility with older saved configs. | Prefer `general.palette.name` when authoring new configs. |
| `data` | `object[]` | Conditionally | `[]` | Inline dataset used to render the map. | Required unless `dataUrl` is provided. |
| `dataUrl` | `string` | Conditionally | None | Remote dataset URL fetched at load time. | If both `data` and `dataUrl` are present, the fetched data wins. |
| `dataDescription` | `object` | No | None | Shared data-standardization metadata used when loading remote data. | Shared type documented in core. |
| `dataMetadata` | `any` | No | None | Metadata returned by `fetchRemoteData()`. | Exposed to markup variables and other runtime helpers. |

## Geography and Columns

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `general.geoType` | `string` | Yes | `single-state` in defaults | Chooses the geography family being rendered. | `us`, `us-region`, `us-county`, `world`, `us-geocode`, `world-geocode`, `bubble`, `single-state`, `google-map` |
| `general.type` | `string` | Yes | `data` | Chooses the interaction mode. | `data`, `navigation`, `us-geocode`, `world-geocode`, `bubble` |
| `general.title` | `string` | No | `''` | Main map title. | Hidden when `showTitle` is `false`. |
| `general.showTitle` | `boolean` | No | `true` | Shows or hides the title. | `true`, `false` |
| `general.headerColor` | [`ComponentThemes`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#shared-primitives) | No | `theme-blue` | Shared header theme token. | See the shared core reference for valid values. |
| `general.navigationTarget` | `string` | No | `_self` | Target used when the map opens navigation URLs. | `_self`, `_blank` |
| `general.geoLabelOverride` | `string` | No | `''` | Optional label override for geography names. | Used in titles and legend copy. |
| `general.territoriesLabel` | `string` | No | `Territories` | Label used for territories in US maps. | Often left at the default. |
| `general.convertFipsCodes` | `boolean` | No | `true` | Normalizes FIPS-like geography values. | Helpful for US maps that use mixed FIPS formats. |
| `general.displayStateLabels` | `boolean` | No | `false` | Shows state labels directly on the map. | `true`, `false` |
| `general.displayAsHex` | `boolean` | No | `false` | Switches the US map to a hex-style treatment. | Works with `hexMap`. |
| `general.territoriesAlwaysShow` | `boolean` | No | `false` | Keeps US territories visible even when they would normally be hidden. | `true`, `false` |
| `general.allowMapZoom` | `boolean` | No | `true` | Enables zooming on supported map types. | Disabled for some editor flows. |
| `general.showSidebar` | `boolean` | No | `true` | Shows the legend/sidebar region. | `false` is only practical for some navigation/bubble layouts. |
| `general.hideGeoColumnInTooltip` | `boolean` | No | `false` | Hides the geography field name in tooltips. | `true`, `false` |
| `general.hidePrimaryColumnInTooltip` | `boolean` | No | `false` | Hides the primary data field name in tooltips. | `true`, `false` |
| `general.showDownloadMediaButton` | `boolean` | No | `false` | Enables the media download button. | Often paired with `showDownloadImgButton` in editor state. |
| `general.showDownloadImgButton` | `boolean` | No | `false` | Enables PNG/image download. | Editor-managed field. |
| `general.showDownloadPdfButton` | `boolean` | No | `false` | Enables PDF download. | Editor-managed field. |
| `general.includeContextInDownload` | `boolean` | No | `false` | Includes heading and explanatory context in image downloads. | Only meaningful when image downloads are enabled. |
| `general.equalNumberOptIn` | `boolean` | No | `false` | Switches the equal-number legend behavior to the newer quantile logic. | Used when `legend.type` is `equalnumber`. |
| `general.showHSABoundaries` | `boolean` | No | `false` | Shows HSA boundaries on supported maps. | Mainly relevant for health-system maps. |
| `general.showNeighboringStates` | `boolean` | No | `false` | Includes neighboring states in the map outline. | Only relevant for certain US map modes. |
| `general.showStateDropdown` | `boolean` | No | `false` | Shows a state picker in supported single-state views. | Only relevant for single-state maps. |
| `columns.geo` | `object` | Yes | See package defaults | Geography lookup column. | `name`, `label`, `tooltip`, `dataTable`, and optional `displayColumn`. |
| `columns.primary` | `object` | Yes | See package defaults | Main data column used for classification and tooltips. | Supports `name`, `label`, `prefix`, `suffix`, `roundToPlace`, `tooltip`, `dataTable`, and editor-only `useCommas`. |
| `columns.navigate` | `object` | No | `{ name: '' }` | URL column used in navigation mode. | `name` is the important field. |
| `columns.latitude` | `object` | No | `{ name: '' }` | Latitude column for geocode and bubble maps. | `name` only. |
| `columns.longitude` | `object` | No | `{ name: '' }` | Longitude column for geocode and bubble maps. | `name` only. |
| `columns.categorical` | `object` | No | `{ name: '' }` | Category column for bubble maps using categorical legends. | `name` only. |
| `columns.hsa` | `object` | No | `{ name: '' }` | Optional HSA column used by some specialized map flows. | `name` only. |
| `columns.additionalColumnN` | `object` | No | Added by the editor | Extra columns added in the editor for data tables and tooltips. | These are editor-generated and may appear in saved configs. |

## Classification and Palette

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `legend.type` | `string` | Yes | `equalnumber` or `category` depending on defaults | Chooses how data classes are calculated. | `equalnumber`, `equalinterval`, `category` |
| `legend.numberOfItems` | `number` | No | `3` or `5` depending on the starting config | Number of legend buckets for numeric maps. | Ignored for `category` legends. |
| `legend.position` | `string` | No | `top`/`side` depending on defaults | Placement of the legend. | `top`, `bottom`, `side` |
| `legend.style` | `string` | No | `gradient` in modern defaults | Visual style for the legend. | `circles`, `boxes`, `gradient` |
| `legend.subStyle` | `string` | No | `linear blocks` | Gradient sub-style. | `linear blocks`, `smooth` |
| `legend.title` | `string` | No | `''` | Legend heading text. | Hidden when empty. |
| `legend.description` | `string` | No | `''` | Legend explanatory text. | Hidden when `dynamicDescription` is enabled. |
| `legend.descriptions` | `object` | No | `{}` | Per-category description map for dynamic legends. | Used with filter-driven descriptions. |
| `legend.specialClasses` | `object[] \| string[]` | No | `[]` | Special class definitions or legacy special-class names. | Legacy string arrays are still repaired by the editor. |
| `legend.unified` | `boolean` | No | `false` | Uses the full dataset when building legend classes. | Otherwise the legend follows the active runtime filters. |
| `legend.singleColumn` | `boolean` | No | `false` | Forces a single-column legend layout. | Only meaningful for side legends. |
| `legend.singleRow` | `boolean` | No | `false` | Forces a single-row legend layout. | Only meaningful for top/bottom legends. |
| `legend.verticalSorted` | `boolean` | No | `false` | Sorts legend items vertically. | Hidden for gradient legends. |
| `legend.showSpecialClassesLast` | `boolean` | No | `false` | Moves special classes to the end of the legend. | Useful when special classes should not interrupt the main scale. |
| `legend.dynamicDescription` | `boolean` | No | `false` | Swaps the legend description for filter-specific text. | Mainly used in editor-driven workflows. |
| `legend.groupBy` | `string` | No | `''` | Groups categorical legends by another column. | Only meaningful when `legend.type` is `category`. |
| `general.palette` | `object` | No | `{ isReversed: false }` in defaults | Canonical palette configuration. | `name`, `version`, `isReversed`, and optional `customColors`/`customColorsOrdered`. |
| `color` | `string` | No | `bluegreen` fallback | Legacy palette name retained for compatibility. | Prefer `general.palette.name` in new configs. |

## Filtering and Tables

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `filters` | `VizFilter[]` | No | `[]` | Shared filter configuration used to narrow the dataset. | See the shared core reference for `VizFilter`-shaped fields. |
| `filterBehavior` | `string` | No | `Filter Change` | Controls when the map updates in response to filter changes. | Runtime/editor behavior uses this as a mode label. |
| `filterIntro` | `string` | No | `''` | Introductory copy shown near filters. | Optional explanatory text. |
| `table.label` | `string` | No | `Data Table` | Data table heading. | Displayed when the table is shown. |
| `table.expanded` | `boolean` | No | `false` | Starts the data table expanded. | `true`, `false` |
| `table.limitHeight` | `boolean` | No | `false` | Limits the table height and enables scrolling. | `true`, `false` |
| `table.height` | `string` | No | `''` | Explicit table height when `limitHeight` is enabled. | CSS length value. |
| `table.caption` | `string` | No | `''` | Table caption text. | Optional accessibility text. |
| `table.download` | `boolean` | No | `false` | Shows the CSV download link. | `true`, `false` |
| `table.downloadDataLabel` | `string` | No | `''` | Label for the CSV download link. | Editor-managed field. |
| `table.downloadImageLabel` | `string` | No | `''` | Label for the image download link. | Editor-managed field. |
| `table.downloadUrlLabel` | `string` | No | `''` | Label for the source URL download link. | Editor-managed field. |
| `table.showDownloadUrl` | `boolean` | No | `false` | Shows the source URL download link. | `true`, `false` |
| `table.showDownloadLinkBelow` | `boolean` | No | `true` in older configs | Places the download link below the table. | Editor-managed legacy field. |
| `table.showDataTableLink` | `boolean` | No | `true` | Shows the data table link in the shell. | Especially useful in dashboard mode. |
| `table.showFullGeoNameInCSV` | `boolean` | No | `false` | Exports full geography names in CSV downloads. | `true`, `false` |
| `table.forceDisplay` | `boolean` | No | `true` | Forces the table to display even when it would normally be hidden. | Defaulted by the package runtime. |
| `table.indexLabel` | `string` | No | `''` | Label used for the table index column. | Often left blank. |
| `table.cellMinWidth` | `string` | No | `''` or `0` depending on config | Minimum cell width in the table. | CSS length value. |
| `table.wrapColumns` | `boolean` | No | `false` | Wraps table cell content instead of truncating it. | `true`, `false` |
| `tooltips.appearanceType` | `string` | No | `hover` | Chooses hover tooltips or click-to-open popovers. | `hover`, `click` |
| `tooltips.linkLabel` | `string` | No | `Learn More` | Label used for tooltip links. | Editor-managed. |
| `tooltips.noDataLabel` | `string` | No | `''` | Text shown when a tooltip row has no data. | Optional. |
| `tooltips.opacity` | `number` | No | `90` | Tooltip opacity. | 0-100 in editor flows. |

## Map Features

### `map.layers`

Custom overlay or base layers added by the editor.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `name` | `string` | No | `''` | Display name for the layer. | Mostly used by the editor UI. |
| `url` | `string` | Yes | None | Layer source URL. | Usually a GeoJSON or TopoJSON file. |
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
| `items` | `object[]` | No | `[]` | Shape rules that determine which arrow or icon is shown. | Each item can match by `column`, `operator`, and `value`. |

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

### Annotations and Markup

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `annotations` | `Annotation[]` | No | `[]` | Shared annotation structures used by the map editor and runtime. | Shared type documented in core. |
| `general.showAnnotationDropdown` | `boolean` | No | `false` | Shows the annotations dropdown in the shell. | Editor-driven field. |
| `general.annotationDropdownText` | `string` | No | `Annotations` | Text shown in the annotation dropdown. | Editor-driven field. |
| `enableMarkupVariables` | `boolean` | No | `false` | Enables placeholder replacement in supported text fields. | Shared type documented in core. |
| `markupVariables` | `any[]` | No | `[]` | Variable definitions available to authored text. | Shared type documented in core. |

## Layout and Interactivity

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `mapPosition.coordinates` | `[number, number]` | No | `[0, 30]` for world maps, otherwise `[0, 0]` in many flows | Initial map center. | The runtime may reset this when the geography changes. |
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
| `mapPosition` | Usually managed by the package based on geography and user interaction. |
| `defaultData`, `formattedData`, `datasets` | Editor or transformation artifacts rather than hand-authored standalone config. |
| `sharing.*` | Loader/export metadata that belongs to editor or embed flows. |
| `usingWidgetLoader` | Internal loader flag. |
| `newViz` | Editor-only preview/confirmation flag. |
| `statePicked`, `countriesPicked`, `showDownloadButton`, `expandDataTable` | Legacy editor state that can appear in old saved configs. |
