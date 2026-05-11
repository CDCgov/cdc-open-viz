# `@cdc/markup-include` Configuration Reference

This document describes the supported configuration contract for `@cdc/markup-include`.

Shared nested types used by this package are documented in the [`@cdc/core` config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md).

To follow those shared types locally, use `packages/core/CONFIG.md` in this monorepo or `node_modules/@cdc/core/CONFIG.md` in an installed app. If neither path is available, use the GitHub link above.

## Organization

The config is documented in the order users usually build the component:

| Section | Covers |
| --- | --- |
| Identity and data source | How the component is identified and where it gets data/markup |
| Content editor | Inline HTML, remote HTML, titles, and editor-driven behavior |
| Shared core structures | Markup variables, filters, footnotes, and data-driven colors |
| Layout and appearance | Theme and shell styling flags |
| Fields You Can Ignore | Runtime, editor, and migration artifacts |

## Minimum Working Config

Use the example in [README.md](./README.md) for the copy-pasteable minimum config. The source of truth lives at `packages/markup-include/examples/minimal-example.json`, and the README block is kept in sync with automated tests.

## Identity and Data Source

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `type` | `string` | Yes | None | Identifies the package. | Must be `markup-include`. |
| `version` | `string` | No | None | Saved COVE version used by migration logic. | Use a semantic version string. |
| `data` | `object[]` | No | `[]` in initial state; omitted values may normalize to `{}` during load | Inline row data used by markup variables and data-color mapping. | If `dataUrl` is present, fetched rows replace inline rows. `dataKey` dataset fallback applies to markup variables only when the data argument is absent/falsy or an actual empty array; normalized `{}` data prevents that fallback. Current data-color resolution reads only `config.data`. |
| `dataUrl` | `string` | No | None | Remote data source used by the package loader. | Present in runtime configs even though it is not part of the package type definition. |
| `dataKey` | `string` | No | None | Named dataset key used when the component is rendered inside a dashboard. | Resolved from `datasets[dataKey]` for markup variable processing when available and the data argument is absent/falsy or an actual empty array. If omitted `data` has already normalized to `{}`, the current fallback check does not run. Shared [`ConfigureData`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#configuredata) field documented in `@cdc/core`. |
| `dataMetadata` | `Record<string, string>` | No | None | Metadata dictionary exposed to markup variables and footnotes. | Often populated automatically when `dataUrl` is fetched. Shared [`ConfigureData`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#configuredata) field documented in `@cdc/core`. |
| `locale` | `string` | No | `en-US` for markup-variable formatting | Locale used when resolving markup variables and shared formatting helpers. | Any valid `Intl` locale is accepted. When omitted, shared markup-variable formatting falls back to `en-US`. Shared `Visualization` field documented in `@cdc/core`. |

## Content Editor

The authored content lives inside `contentEditor`.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `contentEditor.inlineHTML` | `string` | No | `'<strong>Inline HTML</strong>'` | Authored HTML rendered directly inside the component. | Used when `contentEditor.useInlineHTML` is `true`. Supports inline markup and markup variables. |
| `contentEditor.srcUrl` | `string` | No | `'#example'` | Remote HTML source URL. | Used when `contentEditor.useInlineHTML` is `false`. The default `#example` value is an internal placeholder, not a consumer URL. |
| `contentEditor.useInlineHTML` | `boolean` | No | `true` | Switches between inline HTML and remote URL mode. | `true`, `false` |
| `contentEditor.title` | `string` | No | `''` | Title shown in the component shell or TP5 callout. | Hidden when empty. Markup variables in titles are processed when markup variables are enabled. |
| `contentEditor.titleStyle` | `string` | No | `small` | Title size/style in non-TP5 layouts. | `legacy`, `large`, `small` |
| `contentEditor.style` | `string` | No | `default` | Chooses the main content treatment. | `default`, `tp5` |
| `contentEditor.showNoDataMessage` | `boolean` | No | `false` | Shows a no-data message when markup variables cannot resolve. | Can show the configured message when `contentEditor.allowHideSection` is `false`. If both flags are `true` and a variable is unresolved, hide-section behavior wins and the component is not rendered. |
| `contentEditor.noDataMessageText` | `string` | No | `'No Data Available'` | Message shown when the component enters a no-data state. | Rendered verbatim. |
| `contentEditor.allowHideSection` | `boolean` | No | `false` | Allows markup processing to hide the entire section when values are missing. | Used by the shared markup-variable processor. |

## Shared Core Structures

The package uses several shared config shapes that are documented in `@cdc/core`.

### Markup Variables

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `enableMarkupVariables` | `boolean` | No | `false` | Turns placeholder replacement on or off. | Shared [`MarkupConfig`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#markupconfig) flag documented in core. |
| `markupVariables` | [`MarkupVariable[]`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#markupvariable) | No | `[]` | Root-level placeholder definitions available to authored text. | Shared type documented in core. This is the preferred location. |
| `contentEditor.markupVariables` | [`MarkupVariable[]`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#markupvariable) | No | `[]` | Legacy nested copy of the same variable list. | Accepted for backward compatibility; the migration helper moves it to root level. |

Column value variables support `selectionMode: 'first'` when authored in the Conditions area. This is mainly used by migrated `filtered-text` configs; the default remains the multi-match list output.

### Filters

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `filters` | [`VizFilter[]`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#vizfilter) | No | `[]` | Optional shared filters that also feed markup variable and footnote processing. | Shared filter shape documented in core. |

### Footnotes

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `footnotes` | [`Footnotes`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#footnotes) | No | None | Shared footnotes block rendered below the content. | Shared type documented in core. Markup include passes `filters`, `markupVariables`, and `dataMetadata` through to the shared footnotes renderer. |

### Data-Driven Colors

| Behavior | Details |
| --- | --- |
| Rendered layouts | Only used when `contentEditor.style` is `tp5`. |
| Source selection | The editor builds mappings from `dataColors.column` using the active data rows. |
| Runtime row selection | Current runtime color resolution uses the first row of `config.data`; dashboard `dataKey` fallback is not applied to data-color resolution. |
| Color behavior | The callout background uses the resolved color and text color is computed automatically for contrast. |

`dataColors` itself is a shared [`DataColorConfig`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#datacolorconfig) documented in `@cdc/core`.

## Layout and Appearance

Shared shell styling flags on `visual` follow core [`ComponentStyles`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#componentstyles). The package-specific fields below capture the authored shell choices consumers most often need; TP5 layouts suppress the normal accent/background shell treatment.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `theme` | `string` | No | `theme-blue` | Shared theme token for the shell. | See shared theme values in [`@cdc/core`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#componentthemes). |
| `visual.whiteBackground` | `boolean` | No | `false` | Uses the TP5 white-background treatment. | Only meaningful when `contentEditor.style` is `tp5`; shared TP5 option documented in [`@cdc/core`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#sharedtp5visualoptions). |

## Fields You Can Ignore

These fields often appear in saved configs, editor exports, or migration output, but consumers usually do not need to author them:

| Field or group | Why you can ignore it |
| --- | --- |
| `runtime.*` | Internal runtime state created during initialization. |
| `legend` | Legacy shell artifact retained in defaults and some exports. |
| `newViz` | Editor-only flag used by creation and preview flows. |
| `showEditorPanel` | Editor chrome flag, not consumer config. |
| `visualizationType` | Editor/runtime identifier injected by the wrapper. |
| `dataDescription` | Shared loader metadata that this package does not read directly. |
| `formattedData` | Normalized data generated by loader flows, not by package authors. |
| `dataFileName`, `dataFileSourceType`, `dataFileSize` | Runtime/file metadata from load and fetch flows. |
| `contentEditor.showHeader` | Present in some saved configs and examples, but the runtime does not read it. |
