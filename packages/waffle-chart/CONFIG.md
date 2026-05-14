# `@cdc/waffle-chart` Configuration Reference

This document describes the supported configuration contract for `@cdc/waffle-chart`.

Shared nested config types used here are documented in the [`@cdc/core` config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md).

To follow those shared types locally, use `packages/core/CONFIG.md` in this monorepo or `node_modules/@cdc/core/CONFIG.md` in an installed app. If neither path is available, use the GitHub link above.

## Organization

The config is documented in the order the package reads it:

| Section | Covers |
| --- | --- |
| Identity and data source | Package identity, data loading, and locale handling |
| Metric calculation | Numerator, denominator, filters, and conditional row selection |
| Copy and markup | Text content and dynamic markup variables |
| Layout and appearance | Chart shape, spacing, typography, theme, and TP5 shell variants |
| Trend indicators | Categorical or numeric trend arrows and labels |
| Fields You Can Ignore | Runtime-managed, editor-only, or legacy fields |

## Minimum Working Config

The copy-pasteable minimum config lives in [README.md](./README.md). Its source of truth is [`examples/minimal-example.json`](./examples/minimal-example.json), and a test keeps the README block in sync with that file.

## Identity and Data Source

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `type` | `string` | Yes | None | Identifies the package. | Must be `waffle-chart`. |
| `version` | [`Version`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#version) | No | None | Saved COVE version for migration purposes. | Use a semantic COVE version for authored configs so migrations can reason about saved-version order. |
| `data` | `object[]` | Conditionally | `''` in package defaults; effective data is loaded rows or an authored array | Inline dataset used to calculate the chart value. | A rendered chart needs either `data` or `dataUrl`. Fetched data replaces inline `data` when `dataUrl` is provided. |
| `dataUrl` | `string` | Conditionally | None | Remote dataset URL fetched at load time. | Supports the same loader formats as [`ConfigureData`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#configuredata) / [`DataSet`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#dataset), including JSON and CSV fetch targets. |
| `dataMetadata` | `any` | No | None | Metadata returned with `dataUrl` loads and exposed to markup variables. | Usually populated automatically by the loader. |
| `locale` | `string` | No | `en-US` for markup-variable formatting | Locale used for number formatting and dynamic text. | The editor currently offers `en-US` and `es-MX`; shared markup-variable formatting falls back to `en-US` when omitted. |

## Metric Calculation

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `filters` | `{ columnName: string; columnValue: string \| number \| boolean \| null }[]` | No | `[]` | Simple local filter list applied before numerator, denominator, and trend calculations. | This is a waffle-owned filter shape, not shared `VizFilter`; runtime filters rows by exact `row[columnName] === columnValue` when both fields are truthy. |
| `dataColumn` | `string` | Yes | `''` | Source column for the numerator. | Must exist in the active dataset. |
| `dataFunction` | `string` | Yes | `''` | Aggregation used to calculate the numerator. | `Count`, `Max`, `Mean (Average)`, `Median`, `Min`, `Mode`, `Sum` |
| `dataConditionalColumn` | `string` | No | `''` | Optional column used to narrow the numerator rows. | Used with `dataConditionalOperator` and `dataConditionalComparate`. |
| `dataConditionalOperator` | `string` | No | `''` | Comparison operator for the conditional row filter. | `=`, `≠`, `<`, `>`, `<=`, `>=` |
| `dataConditionalComparate` | `string` | No | `''` | Value compared against `dataConditionalColumn`. | Numeric comparison operators require a numeric value. |
| `customDenom` | `boolean` | No | `false` | Switches between a fixed denominator and a denominator calculated from data. | `true` enables `dataDenomColumn` and `dataDenomFunction`. |
| `dataDenom` | `string \| number` | No | `'100'` | Fixed denominator when `customDenom` is `false`. | Values less than or equal to zero fall back to `100`. |
| `dataDenomColumn` | `string` | No | `''` | Source column for a calculated denominator. | Used only when `customDenom` is `true`. |
| `dataDenomFunction` | `string` | No | `''` | Aggregation used to calculate a custom denominator. | Uses the same function set as `dataFunction`. |
| `showPercent` | `boolean` | No | `true` | Shows the numerator as a percentage of the denominator. | When `false`, waffle layouts can render the raw numerator instead of the percentage. |
| `showDenominator` | `boolean` | No | `false` | Shows the denominator next to the numerator. | When paired with `showPercent: false`, waffle layouts can switch to a dynamic denominator grid for denominators under 100. |
| `prefix` | `string` | No | `''` | Text shown before the value. | Commonly used for symbols such as `$`. |
| `suffix` | `string` | No | `'%'` | Text shown after the value. | Set to `''` when no suffix is wanted. |
| `roundToPlace` | `number \| string` | No | `'0'` | Decimal precision for rendered numbers. | Numeric values must be `0` or greater. A saved/editor value of `''` is supported and means the renderer does not force fixed decimal precision. |
| `valueDescription` | `string` | No | `''` | Short descriptor inserted between the value and denominator. | Example: `out of`. |

## Copy and Markup

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `title` | `string` | No | `Chart Title` | Main heading text for the chart. | Hidden when empty or when `showTitle` is `false`. |
| `showTitle` | `boolean` | No | `true` | Shows or hides the heading. | `true`, `false` |
| `content` | `string` | No | `''` | Supporting message shown with the chart. | Supports basic inline HTML. |
| `subtext` | `string` | No | `''` | Citation or secondary note below the chart. | Supports basic inline HTML. |
| `enableMarkupVariables` | `boolean` | No | `false` | Enables placeholder replacement in supported text fields. | Shared behavior is documented in core. |
| `markupVariables` | [`MarkupVariable[]`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#markupvariable) | No | `[]` | Variable definitions available to authored text. | Shared behavior is documented in core. |

## Layout and Appearance

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `visualizationType` | `string` | No | `TP5 Waffle` | Chooses the layout variant. | `Waffle`, `Gauge`, `TP5 Waffle`, `TP5 Gauge`. When omitted, package defaults use `TP5 Waffle`; legacy `visualizationType: "waffle-chart"` is normalized to `Waffle` by migration. |
| `shape` | `string` | No | `circle` | Icon shape used for waffle nodes. | `circle`, `square`, `person` |
| `orientation` | `string` | No | `horizontal` | Controls the waffle layout direction. | `horizontal`, `vertical` |
| `nodeWidth` | `number \| string` | No | `'10'` | Width of each waffle node in non-TP5 layouts. | TP5 layouts override this internally. |
| `nodeSpacer` | `number \| string` | No | `'2'` | Gap between waffle nodes in non-TP5 layouts. | TP5 layouts override this internally. |
| `fontSize` | `string \| number` | No | `''` | Main value font size in pixels. | Empty string falls back to the package default. |
| `overallFontSize` | `string` | No | `medium` | Font-size token applied to the chart wrapper. | `small`, `medium`, `large` |
| `theme` | [`ComponentThemes`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#componentthemes) | No | `theme-blue` | Shared theme token used for the value color and the legacy gauge fill. | See the shared core reference for valid theme names. |

### `gauge`

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `gauge.height` | `number` | No | `35` | Gauge bar height in pixels. | Used when `visualizationType` is `Gauge` or `TP5 Gauge`. |
| `gauge.width` | `number \| string` | No | `'100%'` | Gauge bar width. | Used when `visualizationType` is `Gauge` or `TP5 Gauge`. |

### `visual`

Shared shell fields inside `visual` such as `border`, `accent`, `background`, `hideBackgroundColor`, and `borderColorTheme` are defined by core [`ComponentStyles`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#componentstyles). TP5 shared options such as `whiteBackground` are documented in [`SharedTp5VisualOptions`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#sharedtp5visualoptions); waffle-specific notes are listed below.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `visual.whiteBackground` | `boolean` | No | `false` | Uses the TP5 white-background variant. | Only meaningful for TP5 layouts. |
| `visual.useWrap` | `boolean` | No | `false` | Wraps TP5 Gauge layout content when the shared visualization wrapper applies the gauge wrap class. | Editor-authored and only meaningful for `TP5 Gauge`. |
| `visual.colors` | `Record<string, string>` | No | Package default palette map | Theme-to-color lookup used to render non-TP5 waffle nodes and the legacy gauge fill. | Usually left to the package defaults. TP5 Waffle and TP5 Gauge marks use fixed TP5 colors rather than this lookup. |

## Trend Indicators

Shared trend indicator config is documented in [`@cdc/core` CONFIG.md](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#trendindicatorconfig).

Package-specific behavior:

| Behavior | Details |
| --- | --- |
| Rendered layouts | Trend indicators only render in `TP5 Waffle` and `TP5 Gauge`. |
| Categorical mode | Uses the filtered data rows and the configured `mappings` from the shared trend config. Arrow labels only render when filters resolve to exactly one row. |
| Numeric mode | Compares the current and historical numerators as percentages of the resolved denominator, then applies `numericThreshold` to the percentage-point delta. Only `Sum`, `Mean (Average)`, `Median`, `Min`, and `Max` are eligible. |
| Footer label | The arrow moves below the value when either the resolved arrow label text (`upLabel`, `downLabel`, or `noChangeLabel`) or `trendLabel` exists. `trendLabel` is appended as footer text in that below-value row. |

## Legacy Migration Notes

| Legacy behavior | Current behavior |
| --- | --- |
| `visualizationType: "waffle-chart"` | Migrated to `visualizationType: "Waffle"`. |
| Old waffle value descriptor defaults | Migration clears `valueDescription` and resets percent/denominator display for `Waffle` and `TP5 Waffle` configs. Review migrated configs if they intentionally authored descriptor text. |

## Fields You Can Ignore

These fields may appear in saved configs or migrated editor state, but consumers usually do not need to author them directly:

| Field or group | Why you can ignore it |
| --- | --- |
| `runtime.*` | Internal state created by the package during initialization. |
| `dataDescription`, `formattedData`, `dataFileName`, `dataFileSourceType` | Shared data-loader metadata or editor artifacts; use authored `data`/`dataUrl` instead. Waffle-chart runtime currently does not apply `dataDescription` standardization; fetched data is used as returned, while `dataMetadata` is retained for markup variables. |
| `filters[].values` | Editor bookkeeping created by the local filter manager; standalone rendering does not use it. |
| `titleStyle`, `errors`, `currentViewport`, `id`, `category`, `label`, `subType`, `activeVizButtonID` | Gallery/editor metadata that may appear in copied configs but is not needed for standalone authoring. |
| `invalidComparate` | Editor-managed validation flag for the conditional filter inputs. |
| `visualizationSubType` | Legacy subtype marker that is mostly preserved for compatibility. |
| `newViz` | Editor-only preview/confirmation flag. |
| `validated` | Editor/export artifact that should not be authored directly. |
