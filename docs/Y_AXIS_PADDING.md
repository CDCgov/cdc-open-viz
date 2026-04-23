# Y Axis Padding

This document explains how Y-axis padding works in charts today, why the behavior is split across different modes, and how the legacy manual padding controls relate to the newer auto-padding behavior.

## Summary

There are now three Y-axis padding states:

- Manual padding: author-controlled via `yAxis.enablePadding` and `yAxis.scalePadding`
- Auto padding for inline labels: collision prevention between data and a multi-word inline Y-axis label
- Auto padding for top titles: visual tightening so the highest data stays close to the top tick/label area when the Y-axis title is rendered at the top

The same chart can still carry legacy manual padding fields in config, but when auto-padding is active, the runtime owns the effective padding value.

## Legacy Manual Padding

Historically, chart authors could control Y-axis padding directly in the editor:

- `yAxis.enablePadding`
- `yAxis.scalePadding`

The package initial state still seeds these fields with:

- `enablePadding: false`
- `scalePadding: 10`

When manual padding is enabled and auto-padding is not active, `getMinMax` uses `scalePadding` to expand the Y-axis domain.

## Why Auto Padding Exists

Manual padding was not sufficient for two chart behaviors that need dynamic spacing:

### Inline Label Mode

Inline labels are rendered near the top Y-axis tick. When the inline label contains spaces, it behaves more like a phrase than a suffix and can visually collide with the top-most data.

This mode exists to prevent overlap between:

- the highest plotted data
- the top tick value
- the multi-word inline label text

In this mode, Y-axis auto-padding is defensive. The runtime may recalculate padding multiple times so the scale and ticks can settle into a safe layout.

### Top Title Mode

When the Y-axis title is rendered at the top instead of the side, the reason for padding is different. The goal is not to protect the title from overlap. The goal is to keep the chart visually anchored near the top tick/label area so there is not a large dead band above the highest data point.

In this mode, Y-axis auto-padding is aesthetic/layout-driven. It uses a simpler single-pass adjustment and does not use the inline-label escalation behavior.

## Auto-Padding Modes

The shared decision point is `getYAxisAutoPaddingMode(config)`, which returns:

- `'none'`
- `'inline-label'`
- `'top-title'`

### Mode Selection Rules

- Return `'inline-label'` when `yAxis.inlineLabel` contains a space
- Otherwise return `'top-title'` when `yAxis.titlePlacement === 'top'` and the Y-axis label has content
- Otherwise return `'none'`

If both conditions are present, inline-label wins because collision prevention is the stricter requirement.

## Runtime Behavior

`useScales` uses the mode to decide how aggressively it should recalculate padding:

- `'none'`: skip auto-padding
- `'inline-label'`: allow up to 3 passes
- `'top-title'`: allow 1 pass

`getYAxisAutoPadding` also uses the mode:

- Both modes share the same base padding calculation and the same final return behavior
- Only inline-label mode applies the extra escalation step that adds another tick's worth of room when the initial padding result is still too tight

The shared return path still includes the historical `+ 0.1` adjustment. That exists because D3 can sometimes fail to render the next tick even when the computed padding should land exactly on it.

## Manual Padding vs Auto Padding

This is the part that is easiest to miss:

- Manual padding fields still exist in config
- `getMinMax` still knows how to apply manual padding
- But when auto-padding is active, `useScales` computes a new padding value and feeds that value back into the min/max calculation

So manual padding is not a clean source of truth once auto-padding turns on. It may influence an early scale calculation, but the effective padding is then replaced by the computed auto-padding value.

That is why the editor now hides the manual Y-axis padding controls whenever auto-padding mode is not `'none'`.

## Editor Behavior

The editor hides both manual Y-axis padding controls when auto-padding is active:

- `Add Padding to Value Axis Scale`
- `Padding Percentage`

This happens for both:

- multi-word inline labels
- top-positioned Y-axis titles with label content

The hiding logic is intentionally tied to the same auto-padding mode helper used by runtime code so the editor and chart behavior stay aligned.

## Files To Check

When working on this behavior, the main files are:

- `packages/chart/src/helpers/getYAxisAutoPaddingMode.ts`
- `packages/chart/src/helpers/getYAxisAutoPadding.ts`
- `packages/chart/src/hooks/useScales.ts`
- `packages/chart/src/components/EditorPanel/useEditorPermissions.ts`

If the editor and chart behavior drift apart again, check whether both are still using the same mode helper.
