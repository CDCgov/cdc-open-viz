# Chart Annotation Layout

Chart callout labels have an authored connector endpoint and a runtime-resolved label layout. Keeping those concepts separate lets saved annotations remain stable while each rendered chart adapts to its actual plot dimensions.

## Coordinate spaces

- `x` and `y` identify the annotation subject. Fixed annotations store percentages; data-anchored annotations derive the subject from the chart scales.
- `dx` and `dy` identify the authored label/connector endpoint relative to the subject. When `savedDimensions` exists, production behavior scales these offsets into the current `0..xMax` and `0..yMax` drawable plot.
- Outside direct editing, runtime layout starts at that scaled endpoint. It may move only the HTML label anchor or constrain the rendered label width; responsive edge adjustments do not rewrite `dx`, `dy`, or `savedDimensions`.
- During a callout-label drag, the measured label rectangle follows the pointer directly. The bounded rectangle determines the connector endpoint, which is saved as `dx`/`dy` in the current plot coordinate space. This prevents an off-plot connector endpoint and avoids invisible “dead distance” at the start of the next drag.

## Preferred and resolved placement

`labelPosition` accepts `auto`, `left`, `right`, `above`, and `below`. An omitted value behaves as `auto`.

Automatic placement uses the persisted `autoSide`. New editor-created annotations initialize it from their default placement, and dragging an automatic callout replaces it with the side selected from the measured rectangle. Existing annotations without that field retain the legacy fallback: their viewport-scaled `dx` and `dy` choose the side, with a dominant horizontal displacement selecting left or right, a dominant vertical displacement selecting above or below, and equal magnitudes using the horizontal direction. Their side can therefore change when the plot's width and height scale by different proportions. Once an editor interaction saves `autoSide`, the annotation uses the stable path below.

Untouched automatic annotations without `autoSide` also retain legacy left-aligned label text. Persisting `autoSide` by creating or dragging an annotation opts it into connector-facing text alignment; selecting an explicit `labelPosition` does the same.

The resolver then:

1. Keeps the authored side at every viewport size.
2. Slides parallel to that side to keep the measured label within the plot.
3. Narrows the label when necessary, but not below the label style's minimum width.
4. Clamps movement perpendicular to the side at the last valid position.
5. Allows unavoidable overflow on the same side when the label cannot fit inside the plot.

Explicit placement uses the same sliding and width constraints. Neither automatic nor explicit placement changes sides during responsive rendering.

Drag resolution is deliberately one-way: the pointer translates the rectangle captured at pointer-down, then that intended rectangle is bounded to the plot. The bounded output is never fed back into the pointer calculation, which prevents circular constraint logic. A new drag starts from the previously bounded position.

For automatic callouts, the subject-to-label geometry selects the side during a drag. The resolver compares the subject with the label rectangle's center after normalizing horizontal and vertical distance by the rectangle's half-width and half-height. The dominant axis identifies the facing edge; exact ties use the horizontal edge. The connector attaches to the midpoint of that edge. Because the rectangle is positioned before the edge is selected, changing sides moves only the connector attachment and never makes the label jump. Plot clamping also cannot feed back into side selection. Pointer release saves the chosen side as `autoSide`, so later responsive renders retain what the author saw when the label was dropped.

## Measurement and responsive width

The chart measures the rendered HTML label rather than assuming its legacy maximum width. A settling render may be needed after wrapping changes the measured height; repeated resolution is deterministic.

`labelWidthEm` stores an editor-resized width relative to the computed annotation font size. The resize preview remains in pixels, and pointer release saves `measuredWidth / computedFontSize`. Callouts use `6em` as the minimum; event lines use `4em` so authors can reproduce narrow legacy wrapping. Changing a callout's placement keeps the authored connector endpoint; attaching a different label edge may move or rewrap the label rectangle.

An event line with no `labelWidthEm` takes the legacy intrinsic-width path: `fit-content`, the existing 186px maximum, and legacy content-box sizing. This omission is the compatibility boundary for existing charts. Once an author resizes the label, the saved `labelWidthEm` opts it into the responsive width path. Callouts continue through the responsive resolver when the field is omitted, starting from their existing 150px cap (or 186px when the annotation dropdown is enabled).

Annotation typography uses the existing 16px desktop and 13px mobile font breakpoint. Because saved widths use `em`, the physical label width changes proportionally while retaining similar text capacity. In-chart decisions use `vizViewport ?? currentViewport`, so a small-multiple tile responds to its own width.

## Mobile and event-line behavior

The existing mobile breakpoint remains the only trigger for numbered annotation symbols. Layout fit does not switch text into a symbol. A numbered symbol and its connector both use the scaled authored endpoint; hidden text-label constraints do not move either one. When mobile full text is configured, the same callout resolver applies.

Event-line annotations remain left/right only. They preserve their existing `dx` snapping and do not use perpendicular fallback. Event lines with an authored width may narrow on that side to the `4em` floor; legacy event lines without an authored width retain intrinsic sizing. Explicit event-line placement remains authoritative.
