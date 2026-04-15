# `@cdc/markup-include` Configuration Reference

This document describes the supported configuration contract for `@cdc/markup-include`.

Shared nested types used by this package are documented in the canonical `@cdc/core` shared config reference:
[packages/core/CONFIG.md](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md)

## Organization

The config is documented in the order users usually build the component:

| Section | Covers |
| --- | --- |
| Identity and data source | How the component is identified and where it gets data/markup |
| Content editor | Inline HTML, remote HTML, titles, and editor behavior |
| Markup variables and filters | Placeholder replacement and filter support |
| Layout and appearance | Theme, visual shell flags, and TP5 behavior |
| Fields You Can Ignore | Runtime, editor, and migration artifacts |

## Minimum Working Config

Use the example in [README.md](./README.md) for the copy-pasteable minimum config. The source of truth lives at `packages/markup-include/examples/minimal-example.json`, and the README block is kept in sync with automated tests.

## Identity and Data Source

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `type` | `string` | Yes | None | Identifies the package. | Must be `markup-include`. |
| `version` | `string` | No | None | Saved COVE version for migration logic. | Use a semantic version string. |
| `data` | `object[]` | No | `[]` | Row data used by markup variables. | If omitted, the component can still render static HTML. |
| `dataUrl` | `string` | No | None | Remote data source for markup-variable resolution. | When present, the loader fetches data and replaces `data`. |
| `dataMetadata` | `Record<string, string>` | No | None | Optional metadata dictionary available to markup variables. | Often populated automatically when a remote dataset is fetched. |
| `dataColors` | `DataColorConfig` | No | None | Value-to-color mappings used by TP5 style and related editor flows. | Shared type documented in `@cdc/core`. |

### Shared `ConfigureData` Fields

The component also accepts the shared `ConfigureData` fields used by other visualization packages.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dataKey` | `string` | No | None | Dataset key used when the component is rendered inside a dashboard. | Used to resolve `datasets[dataKey]` when available. |
| `dataDescription` | `Partial<DataDescription>` | No | `{}` | Shared data-shaping metadata. | Applied when dashboard data is standardized. |
| `formattedData` | `object[]` | No | None | Preformatted data supplied by the loader or editor. | Usually runtime-managed. |

## Content Editor

The package keeps the authored content inside `contentEditor`.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `contentEditor.inlineHTML` | `string` | Yes when `useInlineHTML` is `true` | None | Authored HTML rendered directly inside the component. | Supports inline markup and markup variables. |
| `contentEditor.srcUrl` | `string` | Yes when `useInlineHTML` is `false` | `''` | Remote HTML source URL. | The loader fetches this URL and renders the returned markup. |
| `contentEditor.useInlineHTML` | `boolean` | Yes | `true` in practice | Switches between inline HTML and remote URL mode. | `true`, `false` |
| `contentEditor.title` | `string` | No | `''` | Title shown in the component shell. | Hidden when empty or when the TP5 title is intentionally cleared. |
| `contentEditor.titleStyle` | `string` | No | `small` | Title size/style in non-TP5 layouts. | `legacy`, `large`, `small` |
| `contentEditor.style` | `string` | No | `default` | Chooses the main content treatment. | `default`, `tp5` |
| `contentEditor.showHeader` | `boolean` | No | `true` | Shows or hides the header area. | `true`, `false` |
| `contentEditor.showNoDataMessage` | `boolean` | No | `false` | Shows a no-data message when markup variables cannot resolve. | Only meaningful when markup processing can hide the section. |
| `contentEditor.noDataMessageText` | `string` | No | `'No Data Available'` | Message shown when the component enters a no-data state. | Custom text is rendered verbatim. |
| `contentEditor.allowHideSection` | `boolean` | No | `false` | Allows markup processing to hide the entire section when values are missing. | Runtime-managed by the editor flow. |

## Markup Variables and Filters

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `enableMarkupVariables` | `boolean` | No | `false` | Turns placeholder replacement on or off. | Shared `MarkupConfig` flag documented in core. |
| `markupVariables` | `MarkupVariable[]` | No | `[]` | Placeholder definitions available to authored text. | Shared type documented in core. |
| `contentEditor.markupVariables` | `MarkupVariable[]` | No | `[]` | Same variable list, nested under the editor config. | Preferred editor location; root-level `markupVariables` is kept for backward compatibility. |
| `filters` | `VizFilter[]` | No | `[]` | Optional shared filters that also feed markup variable processing. | Shared filter shape is used at runtime and should be treated as a shared core type. |

## Layout and Appearance

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `theme` | `string` | No | `theme-blue` | Shared theme token for the shell. | See shared theme values in `@cdc/core`. |
| `visual.border` | `boolean` | No | `false` | Adds the standard border treatment. | Preserved for shared shell styling. |
| `visual.accent` | `boolean` | No | `false` | Enables the accent shell treatment. | Often paired with background styling. |
| `visual.background` | `boolean` | No | `false` | Enables the background shell treatment. | Part of the shared visualization shell. |
| `visual.hideBackgroundColor` | `boolean` | No | `false` | Suppresses the background color treatment. | Shared shell compatibility flag. |
| `visual.borderColorTheme` | `boolean` | No | `false` | Uses the theme color for the border. | Shared shell compatibility flag. |
| `visual.whiteBackground` | `boolean` | No | `false` | Uses the TP5 white-background treatment. | Only meaningful when `contentEditor.style` is `tp5`. |

## Fields You Can Ignore

These fields often appear in saved configs, editor exports, or migration output, but consumers usually do not need to author them:

| Field or group | Why you can ignore it |
| --- | --- |
| `runtime.*` | Internal runtime state created during initialization. |
| `legend` | Legacy shell artifact retained in defaults and some exports. |
| `newViz` | Editor-only flag used by creation and preview flows. |
| `showEditorPanel` | Editor chrome flag, not consumer config. |
| `formattedData` | Generated by the loader when data is normalized. |
| `visualizationType` | Editor/runtime identifier injected by the wrapper. |
| `dataFileName`, `dataFileSourceType`, `dataFileSize` | Runtime/file metadata from load and fetch flows. |
| `markupVariables` at both root and nested locations | Either location may appear in saved configs; the root copy is retained for backward compatibility. |
