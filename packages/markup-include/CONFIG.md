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
| `data` | `object[]` | No | `[]` | Inline row data used by markup variables and data-color mapping. | If `dataUrl` or `dataKey` is present, those sources can replace or override inline rows. |
| `dataUrl` | `string` | No | None | Remote data source used by the package loader. | Present in runtime configs even though it is not part of the package type definition. |
| `dataKey` | `string` | No | None | Named dataset key used when the component is rendered inside a dashboard. | Resolved from `datasets[dataKey]` when available. Shared `ConfigureData` field documented in `@cdc/core`. |
| `dataMetadata` | `Record<string, string>` | No | None | Metadata dictionary exposed to markup variables and footnotes. | Often populated automatically when `dataUrl` is fetched. Shared `ConfigureData` field documented in `@cdc/core`. |
| `locale` | `string` | No | Browser/runtime default | Locale used when resolving markup variables and shared formatting helpers. | Any valid `Intl` locale is accepted. Shared `Visualization` field documented in `@cdc/core`. |

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
| `contentEditor.showNoDataMessage` | `boolean` | No | `false` | Shows a no-data message when markup variables cannot resolve. | Only meaningful when markup processing can hide the section. |
| `contentEditor.noDataMessageText` | `string` | No | `'No Data Available'` | Message shown when the component enters a no-data state. | Rendered verbatim. |
| `contentEditor.allowHideSection` | `boolean` | No | `false` | Allows markup processing to hide the entire section when values are missing. | Used by the shared markup-variable processor. |

## Shared Core Structures

The package uses several shared config shapes that are documented in `@cdc/core`.

### Markup Variables

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `enableMarkupVariables` | `boolean` | No | `false` | Turns placeholder replacement on or off. | Shared `MarkupConfig` flag documented in core. |
| `markupVariables` | `MarkupVariable[]` | No | `[]` | Root-level placeholder definitions available to authored text. | Shared type documented in core. This is the preferred location. |
| `contentEditor.markupVariables` | `MarkupVariable[]` | No | `[]` | Legacy nested copy of the same variable list. | Accepted for backward compatibility; the migration helper moves it to root level. |

### Filters

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `filters` | `VizFilter[]` | No | `[]` | Optional shared filters that also feed markup variable and footnote processing. | Shared filter shape documented in core. |

### Footnotes

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `footnotes` | `Footnotes` | No | None | Shared footnotes block rendered below the content. | Shared type documented in core. Markup include passes `filters`, `markupVariables`, and `dataMetadata` through to the shared footnotes renderer. |

### Data-Driven Colors

| Behavior | Details |
| --- | --- |
| Rendered layouts | Only used when `contentEditor.style` is `tp5`. |
| Source selection | The editor builds mappings from `dataColors.column` using the active data rows. |
| Color behavior | The callout background uses the resolved color and text color is computed automatically for contrast. |

`dataColors` itself is a shared `DataColorConfig` documented in `@cdc/core`.

## Layout and Appearance

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `theme` | `string` | No | `theme-blue` | Shared theme token for the shell. | See shared theme values in `@cdc/core`. |
| `visual.border` | `boolean` | No | `false` | Adds the standard border treatment. | Part of the shared visualization shell. |
| `visual.accent` | `boolean` | No | `false` | Enables the accent shell treatment. | Used by the default shell styling; TP5 suppresses this flag. |
| `visual.background` | `boolean` | No | `false` | Enables the background shell treatment. | Used by the default shell styling; TP5 suppresses this flag. |
| `visual.hideBackgroundColor` | `boolean` | No | `false` | Suppresses the background color treatment. | Shared shell compatibility flag; TP5 suppresses this flag. |
| `visual.borderColorTheme` | `boolean` | No | `false` | Uses the theme color for the border. | Shared shell compatibility flag; TP5 suppresses this flag. |
| `visual.whiteBackground` | `boolean` | No | `false` | Uses the TP5 white-background treatment. | Only meaningful when `contentEditor.style` is `tp5`. |

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
