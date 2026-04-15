# `@cdc/waffle-chart` Configuration Reference

This document describes the supported configuration contract for `@cdc/waffle-chart`.

Shared nested config types used here are documented in the canonical [`@cdc/core` shared config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md).

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
| `version` | `string` | No | None | Saved COVE version for migration purposes. | Use the current package version when authoring a new config. |
| `data` | `object[]` | Yes | `[]` | Inline dataset used to calculate the value shown in the chart. | Required unless `dataUrl` is provided. |
| `dataUrl` | `string` | No | None | Remote JSON endpoint for the dataset. | When present, fetched data replaces inline `data`. |
| `dataMetadata` | `any` | No | None | Metadata returned with `dataUrl` loads and exposed to markup variables. | Usually populated automatically by the loader. |
| `locale` | `string` | No | Browser default | Locale used for number formatting and dynamic text. | The editor currently offers `en-US` and `es-MX`. |

## Metric Calculation

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dataColumn` | `string` | Yes | `''` | Source column for the numerator. | Must exist in the active dataset. |
| `dataFunction` | `string` | Yes | `''` | Aggregation used to calculate the numerator. | `Count`, `Max`, `Mean (Average)`, `Median`, `Min`, `Mode`, `Sum` |
| `filters` | `object[]` | No | `[]` | Optional package filters applied before the calculation. | Shared filter behavior is handled in package code. |
| `dataConditionalColumn` | `string` | No | `''` | Optional column used to narrow the numerator rows. | Used with `dataConditionalOperator` and `dataConditionalComparate`. |
| `dataConditionalOperator` | `string` | No | `''` | Comparison operator for the conditional row filter. | `=`, `≠`, `<`, `>`, `<=`, `>=` |
| `dataConditionalComparate` | `string` | No | `''` | Value compared against `dataConditionalColumn`. | Numeric comparison operators require a numeric value. |
| `invalidComparate` | `boolean` | No | `false` | Editor/runtime flag indicating an invalid conditional value. | Usually managed by the editor. |
| `customDenom` | `boolean` | No | `false` | Switches between a fixed denominator and a denominator calculated from data. | `true` enables `dataDenomColumn` and `dataDenomFunction`. |
| `dataDenom` | `string \| number` | No | `100` | Fixed denominator when `customDenom` is `false`. | Values less than or equal to zero fall back to `100`. |
| `dataDenomColumn` | `string` | No | `''` | Source column for a calculated denominator. | Used only when `customDenom` is `true`. |
| `dataDenomFunction` | `string` | No | `''` | Aggregation used to calculate a custom denominator. | Uses the same function set as `dataFunction`. |
| `showPercent` | `boolean` | No | `true` | Shows the numerator as a percentage of the denominator. | When `false`, the chart can render the raw numerator/denominator pair. |
| `showDenominator` | `boolean` | No | `false` | Shows the denominator next to the numerator. | Often paired with `showPercent: false`. |
| `prefix` | `string` | No | `''` | Text shown before the value. | Commonly used for symbols such as `$`. |
| `suffix` | `string` | No | `'%'` | Text shown after the value. | Set to `''` when no suffix is wanted. |
| `roundToPlace` | `number \| string` | No | `0` | Decimal precision for rendered numbers. | Must be `0` or greater. |
| `valueDescription` | `string` | No | `''` | Short descriptor inserted between the value and denominator. | Example: `out of`. |

## Copy and Markup

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `title` | `string` | No | `''` | Main heading text for the chart. | Hidden when empty or when `showTitle` is `false`. |
| `showTitle` | `boolean` | No | `true` | Shows or hides the heading. | `true`, `false` |
| `content` | `string` | No | `''` | Supporting message shown with the chart. | Supports basic inline HTML. |
| `subtext` | `string` | No | `''` | Citation or secondary note below the chart. | Supports basic inline HTML. |
| `enableMarkupVariables` | `boolean` | No | `false` | Enables placeholder replacement in supported text fields. | Shared behavior is documented in core. |
| `markupVariables` | `any[]` | No | `[]` | Variable definitions available to authored text. | Shared behavior is documented in core. |

## Layout and Appearance

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `visualizationType` | `string` | No | `Waffle` | Chooses the layout variant. | `Waffle`, `Gauge`, `TP5 Waffle`, `TP5 Gauge` |
| `visualizationSubType` | `string` | No | `linear` | Legacy subtype marker retained in saved configs. | Usually left alone by consumers. |
| `shape` | `string` | No | `circle` | Icon shape used for waffle nodes. | `circle`, `square`, `person` |
| `orientation` | `string` | No | `horizontal` | Controls the waffle layout direction. | `horizontal`, `vertical` |
| `nodeWidth` | `number \| string` | No | `10` | Width of each waffle node in non-TP5 layouts. | TP5 layouts override this internally. |
| `nodeSpacer` | `number \| string` | No | `2` | Gap between waffle nodes in non-TP5 layouts. | TP5 layouts override this internally. |
| `fontSize` | `string \| number` | No | `''` | Main value font size in pixels. | Empty string falls back to the package default. |
| `overallFontSize` | `string` | No | `medium` | Shell font-size token for non-TP5 layouts. | `small`, `medium`, `large` |
| `theme` | [`ComponentThemes`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#shared-primitives) | No | `theme-blue` | Shared theme token used for the value color. | See the shared core reference for valid theme names. |

### `gauge`

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `gauge.height` | `number` | No | `35` | Gauge bar height in pixels. | Used when `visualizationType` is `Gauge` or `TP5 Gauge`. |
| `gauge.width` | `number \| string` | No | `100%` | Gauge bar width. | Used when `visualizationType` is `Gauge` or `TP5 Gauge`. |

### `visual`

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `visual.border` | `boolean` | No | `true` | Enables the outer border treatment. | Shared shell styling flag. |
| `visual.accent` | `boolean` | No | `false` | Shared accent styling flag. | Preserved for the shared wrapper. |
| `visual.background` | `boolean` | No | `false` | Shared background styling flag. | Preserved for the shared wrapper. |
| `visual.hideBackgroundColor` | `boolean` | No | `false` | Suppresses the wrapper background color. | Shared shell behavior. |
| `visual.borderColorTheme` | `boolean` | No | `false` | Uses the theme color for the border. | Shared shell behavior. |
| `visual.whiteBackground` | `boolean` | No | `false` | Uses the TP5 white-background variant. | Only meaningful for TP5 layouts. |
| `visual.useWrap` | `boolean` | No | `false` | Stacks the value above the message in TP5 gauge. | Only meaningful for `TP5 Gauge`. |
| `visual.colors` | `Record<string, string>` | No | Package default palette map | Theme-to-color lookup used to render the nodes and gauge fill. | Usually left to the package defaults. |

## Trend Indicators

Shared type documented in [`@cdc/core` CONFIG.md](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#trendindicatorconfig).

Package-specific behavior:

| Behavior | Details |
| --- | --- |
| Rendered layouts | Trend indicators only render in `TP5 Waffle` and `TP5 Gauge`. |
| Categorical mode | Uses the filtered data rows and the configured `mappings` from the shared trend config. |
| Numeric mode | Compares the current numerator against the historical numerator using the same `dataFunction` and `numericThreshold`. |
| Footer label | `trendLabel` moves the arrow below the value and appends the footer text. |

## Fields You Can Ignore

These fields may appear in saved configs or migrated editor state, but consumers usually do not need to author them directly:

| Field or group | Why you can ignore it |
| --- | --- |
| `runtime.*` | Internal state created by the package during initialization. |
| `invalidComparate` | Editor-managed validation flag for the conditional filter inputs. |
| `visualizationSubType` | Legacy subtype marker that is mostly preserved for compatibility. |
| `visual.colors` | Package default color lookup. Leave it to the defaults unless you are maintaining theme palettes. |
| `newViz` | Editor-only preview/confirmation flag. |
