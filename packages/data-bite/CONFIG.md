# `@cdc/data-bite` Configuration Reference

This document describes the supported configuration contract for `@cdc/data-bite`.

Shared types referenced in this file are documented in the [`@cdc/core` config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md).

To follow those shared types locally, use `packages/core/CONFIG.md` in this monorepo or `node_modules/@cdc/core/CONFIG.md` in an installed app. If neither path is available, use the GitHub link above.

## Organization

The config is documented in the same order that the package processes it:

| Section                    | Covers                                                                          |
| -------------------------- | ------------------------------------------------------------------------------- |
| Identity and data source   | What the package is, where data comes from, and how incoming data is normalized |
| Metric calculation         | Which value is calculated and how it is formatted                               |
| Copy and authored content  | Text fields and dynamic markup support                                          |
| Layout and appearance      | Card style, placement, font sizing, theme, and display flags                    |
| Conditional enhancements   | Images, trend arrows, and data-driven colors                                    |
| Fields You Can Ignore      | Deprecated, editor-only, or runtime-managed properties                          |

## Minimum Working Config

For the copy-pasteable minimum config, use the example in [README.md](./README.md). The source of truth for that example lives at `packages/data-bite/examples/minimal-example.json`, and automated tests keep the README block in sync with that file.

Most other package fields are optional and are backfilled from package defaults unless you override them. Versioned migrations can apply legacy defaults before that final backfill, so an older/minimal config with an omitted field may not always land on the newest package default.

## Identity and Data Source

| Field             | Type                                                                                                          | Required      | Default                 | Description                                                                    | Allowed values / Notes                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`            | `string`                                                                                                      | Yes           | None                    | Identifies the visualization package.                                          | Must be `data-bite`.                                                                 |
| `data`            | `object[]`                                                                                                    | Conditionally | `[]`                    | Inline dataset used to calculate the displayed value.                          | Required unless `dataUrl` is provided and returns data.                              |
| `dataUrl`         | `string`                                                                                                      | Conditionally | None                    | Remote dataset URL fetched at load time.                                       | If both `data` and `dataUrl` are present, fetched data replaces inline `data`.       |
| `dataDescription` | [`DataDescription`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#datadescription) | No            | None                    | Shared data-standardization metadata applied to fetched data before rendering. | In `data-bite`, this is applied only when data is loaded through `dataUrl`.          |
| `dataMetadata`    | `Record<string, string>`                                                                                      | No            | None                    | Optional metadata dictionary exposed to markup variables.                      | Often populated automatically when `dataUrl` is fetched through `fetchRemoteData()`. |
| `version`         | [`Version`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#version)                 | No            | None                    | Optional COVE version associated with the saved config.                        | Useful for migration/debugging metadata.                                             |
| `locale`          | `string`                                                                                                      | No            | Mixed fallback          | Locale used for number formatting and markup variable formatting.              | Metric number formatting uses the JS runtime default when omitted; markup variables fall back to `en-US`. Older configs may migrate to `en-US`. Current editor options are `en-US` and `es-MX`. |

## Metric Calculation

### Top-Level Metric Fields

| Field          | Type               | Required | Default | Description                                                                                                                  | Allowed values / Notes                                                                                              |
| -------------- | ------------------ | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `dataColumn`   | `string`           | Yes      | `''`    | Column whose values are used to calculate the main displayed metric.                                                         | Must exist in the active dataset.                                                                                   |
| `dataFunction` | `string`           | Yes      | `''`    | Aggregation or extraction method used to compute the displayed value.                                                        | `Count`, `Max`, `Mean (Average)`, `Median`, `Min`, `Mode`, `Pass Through`, `Range`, `Sum`                           |
| `filters`      | `DataBiteFilter[]` | No       | `[]`    | Simple package-specific filters applied before the main value, trend logic, and data-driven color resolution are calculated. | See `DataBiteFilter` below.                                                                                         |

### `dataFormat`

Controls numeric formatting after the metric has been calculated.

| Field                     | Type      | Required | Default                          | Description                                                          | Allowed values / Notes                                                                                                        |
| ------------------------- | --------- | -------- | -------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `dataFormat.roundToPlace` | `number \| string`  | No       | `0`                              | Number of decimal places to preserve.                                | Must be `0` or greater. Editor-exported configs may store numeric input as a string.                                          |
| `dataFormat.commas`       | `boolean` | No       | `true`                           | Adds locale-aware digit grouping for numeric outputs.                | `true`, `false`                                                                                                               |
| `dataFormat.prefix`       | `string`  | No       | `''`                             | Text prepended to the rendered metric.                               | Common examples: `$`, `+`, `~`                                                                                                |
| `dataFormat.suffix`       | `string`  | No       | `'%'`                            | Text appended to the rendered metric.                                | Set to `''` when no suffix is wanted.                                                                                         |
| `dataFormat.ignoreZeros`  | `boolean` | No       | `false`                           | Excludes zero values from `Count` and `Mean (Average)` calculations. | Used only by those two functions. This field is supported by runtime/editor code even though older package types may omit it. |

### `DataBiteFilter`

`data-bite` uses a simple local filter shape instead of the richer shared `VizFilter` structure used by other packages.

| Field         | Type       | Required | Default                       | Description                                                   | Allowed values / Notes                        |
| ------------- | ---------- | -------- | ----------------------------- | ------------------------------------------------------------- | --------------------------------------------- |
| `columnName`  | `string`   | No       | None                          | Column to filter on.                                          | Must exist in the dataset.                    |
| `columnValue` | `string \| number \| boolean \| null` | No | None | Exact raw row value that the row must match for this filter to apply. | Compared with strict equality against `row[columnName]`; runtime does not coerce strings/numbers. Falsy values such as `0`, `false`, and `''` are skipped by the current truthiness check. |

## Copy and Authored Content

| Field                   | Type                                                                                                          | Required | Default | Description                                                        | Allowed values / Notes                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                 | `string`                                                                                                      | No       | `''`    | Heading text shown above the data bite or inside the TP5 callout.  | Hidden when empty or when `visual.showTitle` is `false`.                                                                                  |
| `biteBody`              | `string`                                                                                                      | No       | `''`    | Main message or explanatory text shown with the metric.            | Supports `strong`, `em`, `sup`, and `sub` HTML tags.                                                                                      |
| `subtext`               | `string`                                                                                                      | No       | `''`    | Optional supporting text or citation shown below the main content. | Supports the same inline HTML as `biteBody`.                                                                                              |
| `enableMarkupVariables` | `boolean`                                                                                                     | No       | `false` | Enables placeholder replacement inside supported text fields.      | Shared type documented in [`@cdc/core` CONFIG.md](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#markupconfig). |
| `markupVariables`       | [`MarkupVariable[]`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#markupvariable) | No       | `[]`    | Available placeholder definitions for authored text.               | Shared type documented in [`@cdc/core` CONFIG.md](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#markupconfig). |

## Layout and Appearance

### Top-Level Layout Fields

| Field          | Type                                                                                                          | Required | Default      | Description                                                                         | Allowed values / Notes                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------- | -------- | ------------ | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `biteStyle`    | `string`                                                                                                      | No       | `tp5`        | Chooses the overall data-bite layout.                                               | `graphic`, `split`, `title`, `body`, `end`, `gradient`, `tp5`. New/default configs use `tp5`; older configs with a missing or blank `biteStyle` migrate to `graphic`. |
| `bitePosition` | `string`                                                                                                      | No       | `Left`       | Controls where the metric graphic or image block sits relative to the text content. | `Left`, `Right`, `Top`, `Bottom`                                                                                                              |
| `biteFontSize` | `number \| string`                                                                                             | No       | `24`         | Pixel size of the main metric text in non-TP5 layouts.                              | Used by `graphic`, `split`, `title`, `body`, and `end`. Editor-exported configs may store numeric input as a string.                          |
| `fontSize`     | `string`                                                                                                      | No       | `medium`     | Shared shell font-size token applied to the visualization wrapper.                  | `small`, `medium`, `large`                                                                                                                    |
| `theme`        | [`ComponentThemes`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#componentthemes) | No       | `theme-blue` | Shared theme token used for heading color, graphic styling, and shell classes.      | See shared theme values in [`@cdc/core` CONFIG.md](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#componentthemes). |

### `visual`

Visual booleans are partly package-owned and partly consumed by shared shell styling. Shared shell fields are defined in [`ComponentStyles`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#componentstyles) and TP5-specific shared options are defined in [`SharedTp5VisualOptions`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#sharedtp5visualoptions); the table below captures the data-bite-specific behavior and defaults.

| Field                        | Type      | Required | Default | Description                                                                             | Allowed values / Notes                                                                              |
| ---------------------------- | --------- | -------- | ------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `visual.border`              | `boolean` | No       | `true`  | Standard card border treatment.                                                        | Current runtime coerces `false` back to `true`, so this is not an effective disable toggle. |
| `visual.showTitle`           | `boolean` | No       | `true`  | Shows or hides the title area.                                                          | `true`, `false`                                                                                     |
| `visual.whiteBackground`     | `boolean` | No       | `false` | Uses the TP5 white background variant instead of the default filled callout background. | Only meaningful for `biteStyle: "tp5"`.                                                             |
| `visual.useWrap`             | `boolean` | No       | `false` | In TP5, stacks the metric above the message instead of keeping them side-by-side.       | Only meaningful for `biteStyle: "tp5"`.                                                             |

### `general`

| Field                    | Type      | Required | Default | Description                                                                            | Allowed values / Notes |
| ------------------------ | --------- | -------- | ------- | -------------------------------------------------------------------------------------- | ---------------------- |
| `general.isCompactStyle` | `boolean` | No       | `false` | Enables a compact wrapper treatment that suppresses subtext in the rendered card body. | `true`, `false`        |

## Conditional Enhancements

### `imageData`

Image settings are only surfaced by the editor for `title`, `body`, and `graphic` styles. In runtime, standalone image rendering is skipped for `graphic` because that style uses the circular metric callout instead.

| Field               | Type                           | Required | Default | Description                                         | Allowed values / Notes                                                         |
| ------------------- | ------------------------------ | -------- | ------- | --------------------------------------------------- | ------------------------------------------------------------------------------ |
| `imageData.display` | `string`                       | No       | `none`  | Chooses how image rendering is handled.             | `none`, `static`, `dynamic`                                                    |
| `imageData.url`     | `string`                       | No       | `''`    | Default image URL.                                  | Used directly in `static` mode and as the fallback URL in `dynamic` mode.      |
| `imageData.alt`     | `string`                       | No       | `''`    | Default alt text for the image.                     | Used directly in `static` mode and as the fallback alt text in `dynamic` mode. |
| `imageData.options` | `DataBiteDynamicImageOption[]` | No       | `[]`    | Ordered conditional image rules for `dynamic` mode. | First matching rule wins. See `DataBiteDynamicImageOption` below.              |

### `DataBiteDynamicImageOption`

| Field            | Type                             | Required | Default | Description                                                               | Allowed values / Notes                                         |
| ---------------- | -------------------------------- | -------- | ------- | ------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `source`         | `string`                         | Yes      | None    | Image URL to use when the rule matches.                                   | Required for each dynamic rule.                                |
| `alt`            | `string`                         | No       | `''`    | Alt text to use when the rule matches.                                    | Falls back to `imageData.alt` when omitted or empty.           |
| `arguments`      | `DataBiteDynamicImageArgument[]` | Yes      | None    | One or two numeric comparisons evaluated against the calculated metric.   | The first argument is required; a second argument is optional. |

### `DataBiteDynamicImageArgument`

| Field       | Type               | Required | Default | Description                                                    | Allowed values / Notes           |
| ----------- | ------------------ | -------- | ------- | -------------------------------------------------------------- | -------------------------------- |
| `operator`  | `string`           | Yes      | None    | Comparison operator used against the calculated numeric value. | Prefer `<`, `>`, `<=`, or `>=`. `=` and `≠` use strict identity against the saved threshold value and can be unreliable with editor-authored string thresholds. |
| `threshold` | `string` | Yes      | None    | Threshold value used for the comparison.                       | Author as a string. Runtime currently checks `.length` before comparing. Relational operators coerce numeric-looking strings; equality operators do not. |

### `trendIndicator`

Shared type documented in [`@cdc/core` CONFIG.md](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#trendindicatorconfig).

Package-specific behavior:

| Behavior                     | Details                                                                                                                |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Rendered layouts             | Only rendered in the `tp5` layout.                                                                                     |
| Numeric mode support         | Numeric mode is intended for `Sum`, `Mean (Average)`, `Median`, `Min`, and `Max`.                                      |
| Numeric comparison basis     | Compares the main metric aggregation against the aggregation of `trendIndicator.column` using the same `dataFunction`. |
| Categorical comparison basis | Uses the filtered row set. If `dataFunction` is `Pass Through`, the first row is used when multiple rows remain.       |

### `dataColors`

Shared type documented in [`@cdc/core` CONFIG.md](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#datacolorconfig).

Package-specific behavior:

| Behavior             | Details                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| Rendered layouts     | Only rendered in the `tp5` layout.                                                             |
| Source row selection | Uses the first filtered row when filters resolve data; otherwise uses the first available row. |
| Text color           | Text color is computed automatically for contrast against the resolved background color.       |

## Fields You Can Ignore

These fields sometimes appear in saved configs, copied editor state, or migrated legacy configs, but consumers generally do not need to author or maintain them:

| Field or group                                                                 | Why you can ignore it                                                                             |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| `runtime.*`                                                                    | Internal runtime state created by the package during initialization.                              |
| `newViz`                                                                       | Editor-only flag used by the preview and confirmation flow.                                       |
| `shadow`                                                                       | Deprecated legacy field. Shadows are no longer used by data bites.                                |
| `dataBite`                                                                     | Legacy displayed-value cache retained in old configs; current runtime recalculates the value.      |
| `filters[].values`                                                             | Editor bookkeeping created by the local filter manager; standalone rendering does not use it.      |
| `imageData.options[].secondArgument`                                            | Editor convenience flag; runtime evaluates a second image comparison from `imageData.options[].arguments[1]` when present. |
| `errors`, `category`, `label`, `icon`, `content`, `id`                         | Editor/export metadata rather than consumer-facing config.                                        |
| `currentViewport`, `subType`, `orientation`, `visualizationType`, `activeVizButtonID` | Editor/runtime metadata copied into saved configs by some flows.                                  |
| `dataFileName`, `dataFileSourceType`, `migrations`, `formattedData`, `datasets` | Editor or transformation artifacts that are not part of the supported standalone config contract. |
| `imageData.prefix`                                                             | Legacy/editor artifact preserved during config merging; image rendering does not use it.           |
| `general.palette`                                                              | Shared palette metadata sometimes written by editor flows but not authored as part of this package. |
