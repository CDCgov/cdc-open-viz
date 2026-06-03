# Chart Y-Axis Domain

This document explains how chart value-axis domains are calculated and which code owns each step. Most behavior applies to chart families with a numeric value axis. Specialized charts may call the same helpers and then override the displayed scale.

## Plain-Language Happy Path

For a normal vertical chart, the Y-axis usually starts with the rows the chart is going to draw. If filters are active, that means the filtered rows. If a brush selection is active and configured to control the Y-axis, that means the brushed rows. If `yAxis.filterDomainBehavior` is `stable`, filters still change which rows are drawn, but the automatic value-axis domain is calculated from the full eligible dataset instead, so the axis does not jump as filter values change.

After choosing those rows, the chart scans the configured series values and finds the raw data minimum and maximum. It ignores empty and non-numeric values, handles dynamic series, and uses stacked totals for stacked chart types that need them.

Then author-entered bounds are considered. A valid primary value-axis min or max can override the automatic value, but invalid bounds are ignored so the axis does not hide data. If there is no explicit max, `yAxis.autoMaxRounding` can round the automatic primary value-axis maximum up to a cleaner tick-friendly number. After that, padding can expand the domain for visual breathing room or for runtime-owned auto-padding around inline labels and top-positioned Y-axis titles. Finally, `smallestLeftAxisMax` can raise the displayed maximum when very small data would otherwise produce decimal ticks.

The newer domain controls fit into different parts of that path: `yAxis.filterDomainBehavior` changes which rows are scanned, and `yAxis.autoMaxRounding` changes the automatic max after the scan when no explicit max is set.

In short: choose the domain rows, scan the data, respect valid user min/max values, optionally round the automatic max, add any needed padding, then apply the final minimum displayed max floor.

## Main Flow

For a standard chart, the primary value-axis domain is produced in this order:

1. Build rendered rows from exclusions, filters, and brush selection.
2. Choose the row set used for automatic value-domain calculation.
3. Reduce the selected rows into raw `minValue`, `maxValue`, `existPositiveValue`, and `isAllLine`.
4. Run `getMinMax` to apply explicit bounds, intervals, chart rules, optional max rounding, padding, and final floors.
5. Build the final VisX/D3 scale in `useScales`. If auto-padding is active, `useScales` reruns `getMinMax` with computed padding first.

Primary files:

- `packages/chart/src/CdcChartComponent.tsx`
- `packages/chart/src/components/LinearChart.tsx`
- `packages/chart/src/helpers/getTransformedData.ts`
- `packages/chart/src/helpers/getYAxisDomainData.ts`
- `packages/chart/src/hooks/useReduceData.ts`
- `packages/chart/src/helpers/getMinMax.ts`
- `packages/chart/src/helpers/getYAxisAutoPadding.ts`
- `packages/chart/src/hooks/useScales.ts`
- `packages/chart/src/hooks/useRightAxis.ts`
- `packages/chart/src/components/SmallMultiples/SmallMultiples.tsx`

## Rendered Rows

`getTransformedData` chooses the rows that the chart actually renders:

- `brushData` when the brush is active and has selected rows.
- `filteredData` when standalone or dashboard filters have produced filtered rows.
- `excludedData` otherwise.

`CdcChartComponent` cleans the selected rows before render. Hard exclusions are already reflected in the row sets that reach this point.

## Domain Row Source

`getYAxisDomainData` decides which rows feed the automatic value-domain calculation. This can intentionally differ from the rows being rendered.

The precedence is:

1. If `xAxis.brushActive` and `xAxis.brushDynamicYAxis` are both true, use rendered `data`. The domain follows the brush selection.
2. If `yAxis.filterDomainBehavior === 'stable'` and `fullEligibleDomainData` is available, use the full eligible chart dataset.
3. If `xAxis.brushActive` is true, `xAxis.brushDynamicYAxis` is false, and `tableData` is available, use `tableData`. The domain stays stable while the brush changes.
4. Otherwise use rendered `data`.

Missing `yAxis.filterDomainBehavior` defaults to `dynamic`, which preserves existing behavior: automatic domains are calculated from the currently rendered filtered rows.

`stable` means interactive filters do not shrink or expand the automatic value-domain. It still respects hard exclusions and chart dataset scope:

- Standalone charts use the cleaned, exclusion-respecting `excludedData` supplied by `CdcChartComponent`.
- Dashboard charts use `yAxisDomainData` supplied by `packages/dashboard/src/helpers/getVizConfig.ts` from `originalFormattedData` or the dashboard dataset before dashboard filter rows replace rendered data. `CdcChartComponent` still applies chart exclusions to that domain data.

Brush behavior remains owned by `xAxis.brushDynamicYAxis`. A dynamic brush uses rendered brush rows even when `filterDomainBehavior` is `stable`.

## Raw Reduction

`useReduceData` computes raw values from the selected domain rows:

- It reads `config.runtime.seriesKeys`.
- It maps dynamic category series back to `originalDataKey`.
- It strips commas and dollar signs before numeric checks.
- It ignores null, empty, and non-numeric values.
- It tracks the raw minimum, raw maximum, and whether any value is positive or zero.
- Stacked Bar, all-Bar stacked Combo, and stacked Area charts use row totals for the raw maximum.
- Stacked mixed Combo charts compare stacked bar totals against line-series maxima.

If no numeric values are found, the raw min and max both become `0`.

## Explicit Primary Bounds

`getMinMax` reads explicit primary value-axis bounds from `config.runtime.yAxis.min` and `config.runtime.yAxis.max`. For horizontal charts, `CdcChartComponent` maps the horizontal value-axis settings from `xAxis` into `runtime.yAxis` before this helper runs.

An explicit max is used only when it is valid for the data:

- If positive values exist, the explicit max must be greater than or equal to the raw `maxValue`.
- If no positive values exist, the explicit max must be greater than or equal to `0`.

An invalid explicit max is ignored and automatic max calculation continues. Automatic max rounding never runs when an explicit max value is present.

An explicit min is used only when it is valid:

- Logarithmic axes require a non-negative explicit min.
- For non-negative data, the explicit min must be less than or equal to `0`.
- For negative data, the explicit min must be less than or equal to the raw `minValue`.

Line and all-line Combo charts have additional min handling so positive-only data can still start at `0` unless a valid lower explicit min is provided.

## Auto Max Rounding

`yAxis.autoMaxRounding` controls optional nice rounding for automatic value-axis maximums.

- `none`: preserve the data-derived automatic max.
- `tick-friendly`: round automatic value-axis max values before padding.

Rounding applies only to automatic value-axis max values. It does not run when the relevant value-axis max is explicitly set (`yAxis.max` for vertical charts, `xAxis.max` for horizontal charts, or `yAxis.rightMax` for Combo right axes).

`getNiceMantissaMax` currently behaves this way:

- Non-finite values are returned unchanged.
- Values less than or equal to `5` are returned unchanged. Use `smallestLeftAxisMax` when small charts need a minimum displayed maximum.
- Larger values round up to the next value in the tick-friendly mantissa ladder: `1`, `1.5`, `2`, `2.5`, `3`, `4`, `5`, `6`, `7`, `8`, or `10` times the current order-of-magnitude step.

Examples: `5.1 -> 6`, `7.2 -> 8`, `25 -> 25`, `89 -> 100`, `101 -> 150`, `1434 -> 1500`, `2340 -> 2500`, `5678 -> 6000`, `12345 -> 15000`.

The final primary value-axis max order is:

1. Compute the automatic data-derived max from the selected domain rows.
2. Optionally apply nice rounding.
3. Apply `runtime.yAxis.paddingPercent`, late chart-specific expansions, and manual or auto `scalePadding`.
4. Apply `smallestLeftAxisMax` as the final floor.

## Confidence and Forecasting Intervals

Some non-series values can expand the domain:

- Bar charts with `confidenceKeys.lower` and `confidenceKeys.upper` include confidence interval bounds in min/max.
- Forecasting series include configured confidence interval high/low columns.

These interval checks use the same domain row source selected for min/max.

## Chart-Specific Rules

`getMinMax` includes several chart-specific adjustments:

- Bar, bar-like Line, and non-all-line Combo charts start at `0` for positive-only data. If their min is negative, the min is multiplied by `1.1`.
- Deviation Bar starts at `0` for positive-only data unless a valid explicit min is below both the data min and `xAxis.target`.
- Stacked Area forces min to `0`.
- Scatter Plot multiplies max by `1.1` and divides min by `1.1`.
- Lollipop charts with numbers on bars can multiply max by `1.1` or `1.3` for label room.
- Combo charts compute `leftMax` and `rightMax` from series assigned to each axis. For stacked Combo charts, left-axis Bar series can contribute a stacked total.
- Bump Chart uses a final Y-domain of `[1, max]` and a custom range.

Additional scale overrides in `useScales`:

- Box Plot expands min/max to include outliers and lower/upper bounds before composing the value scale.
- Paired Bar builds mirrored `g1xScale` and `g2xScale` from the larger of the two group maxima and does not use the normal Y-domain as its displayed value domain.
- Forest Plot uses row index for `yScale` and builds its value domain from forest plot lower/upper fields on the x-axis.
- HeatMap does not use numeric Y-domain helpers. Its rows are categorical series labels.

## Scale Composition

After min/max calculation, `useScales` composes the final scale:

- Vertical non-categorical charts use `composeYScale({ min, max, leftMax })`.
- Combo charts use `leftMax` as the left scale's max inside `composeYScale`.
- Logarithmic value axes nudge non-negative min values below `1` up by `0.1` before building a log scale.
- Vertical categorical Y axes use a clamped linear domain of `[0, max]` so line data aligns with categorical bars.

## Padding

There are three padding sources:

- `runtime.yAxis.paddingPercent`
- Manual axis padding via `yAxis.enablePadding` and `yAxis.scalePadding`
- Runtime-owned auto-padding for inline labels and top Y-axis titles

`runtime.yAxis.paddingPercent` expands both min and max by `(max - min) * paddingPercent`.

When `yAxis.enablePadding` is true:

- If min is negative, both min and max are multiplied by `1 + (scalePadding * 2) / 100`.
- Otherwise max is multiplied by `1 + scalePadding / 100`.

Manual `enablePadding` / `scalePadding` is ignored when auto-padding is active. `useScales` first calls `getMinMax` with those fields cleared, computes the auto-padding amount, then calls `getMinMax` again with runtime-owned `scalePadding`.

## Auto-Padding Modes

`getYAxisAutoPaddingMode` returns:

- `inline-label` when `yAxis.inlineLabel` contains a space.
- `top-title` when `yAxis.titlePlacement === 'top'`, the Y-axis label has content, and the Y-axis label is not hidden.
- `none` otherwise.

Inline-label mode wins when both conditions are present because it prevents collisions between data, ticks, and multi-word inline label text.

`useScales` applies auto-padding only on vertical charts. Inline-label mode allows up to 3 passes; top-title mode allows 1 pass.

`getYAxisAutoPadding` returns `0` for horizontal charts, explicit `yAxis.max`, missing ticks, or cases where the highest value is not close enough to the top tick. In top-title mode, it also returns `0` when the current top tick is already greater than or equal to the highest value, which lets tick-friendly rounded maximums such as `49 -> 50` keep their clean top tick instead of padding onward to the next tick. Otherwise it computes enough padding to reach the next tick and adds the historical `+ 0.1` nudge because D3 can omit a tick when the calculated domain lands exactly on it. Inline-label mode can add another tick's worth of padding when the first calculation is still too small.

The editor hides manual Y-axis padding controls whenever auto-padding mode is not `none`. HeatMap handles top-positioned Y-axis titles with layout margin instead of numeric scale padding.

## Final Floors

`smallestLeftAxisMax` is an author-provided final floor for the primary value-axis maximum. It runs after rounding, padding, lollipop expansion, Scatter Plot adjustment, and Stacked Area min handling.

If numeric, it raises both `max` and Combo `leftMax` to at least that value. It is not rounded.

`smallestRightAxisMax` performs the same final-floor role for the right axis in `useRightAxis`.

## Brush Behavior

Brush selection is managed by `BrushSelector` and stored with `SET_BRUSH_DATA`.

The initial brush selection uses `xAxis.brushDefaultRecentDateCount` when configured. Otherwise it defaults to a right-side range based on about 35% of the brush width.

The brush affects the value-domain in two separate ways:

- It changes rendered rows through `brushData`.
- It may or may not change the value-domain row source, depending on `xAxis.brushDynamicYAxis`.

When `brushDynamicYAxis` is true, the value-domain follows brush-selected rows. `LinearChart` stabilizes brush overlay dimensions during dragging so a changing value-domain does not feed back into x-axis layout and shift the brush target.

When `brushDynamicYAxis` is false, `getYAxisDomainData` uses `tableData` when available so the value-domain stays stable across brush movement. Stable filter-domain data has higher precedence than this brush fallback.

## Right Axis

Right-axis domains are handled separately in `useRightAxis` and only apply to vertical Combo charts.

The right-axis scale:

- Reads series assigned to `axis === 'Right'`.
- Computes max from those series in the same domain row source selected for the primary value axis, so `yAxis.filterDomainBehavior === 'stable'` also stabilizes the right axis.
- Allows `yAxis.rightMax` to raise the max.
- Allows `yAxis.rightMin` to lower the min.
- Applies `yAxis.autoMaxRounding` before the final floor when `yAxis.rightMax` is automatic.
- Applies `smallestRightAxisMax` as a final floor.
- Starts at `0` when the chart has Bar or Line runtime series and the computed minimum is positive.

## Small Multiples

When small multiples share a Y-axis (`smallMultiples.independentYAxis` is false), `SmallMultiples` combines all tile data and all tile series keys, runs the same reduction and scale path once, and passes the resulting global min/max into each tile. Independent Y-axis mode skips this global calculation and lets each tile use its own data.

## Horizontal Charts

Horizontal charts still use `getMinMax`, but their numeric value domain is composed as `xScale`, not `yScale`. The stable filter-domain and auto-max rounding controls apply to this horizontal value axis when the chart type otherwise supports the automatic value-domain path.

`composeXScale` uses `[min * 1.03, max]`. If the configured value axis is logarithmic, min values in `[0, 1)` are nudged up by `0.1` before building a log scale.

Deviation Bar is a horizontal special case. It replaces the value x-domain with `[min * leftOffset, Math.max(Number(xAxis.target), max)]`, where `leftOffset` is `1.05` for lollipop charts and `1.03` otherwise.

## Editor and Migration Notes

The editor exposes domain controls only when they are meaningful for the current chart:

- `filterDomainBehavior` appears only for supported chart types with a numeric automatic value axis and either dashboard context or visible chart filters.
- `autoMaxRounding` appears only for supported chart types with a numeric automatic value axis. For Combo charts, the shared setting applies to both automatic value axes.
- Both controls are hidden for specialized value-scale chart types such as Paired Bar, where the rendered value domain is built outside the normal automatic value-domain path.
- Manual padding controls are hidden when auto-padding mode is active.

New chart configs default `yAxis.autoMaxRounding` to `tick-friendly`. Saved configs from before this field existed are migrated in `4.26.6` to `none` so existing dashboards keep their previous automatic max behavior.

When changing any consumer-facing domain field, update `packages/chart/CONFIG.md` and add or update migrations when old saved configs need different behavior from new configs.
