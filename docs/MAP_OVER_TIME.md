# Map Over Time

State-map time playback lets a standard U.S. choropleth show successive periods from long-format data. The feature is opt-in through the map-owned `timePlayback` config and leaves ordinary maps unchanged when the object is absent or disabled.

## Supported Scope

Playback is supported only for maps with:

- `general.type: "data"`
- `general.geoType: "us"`
- a configured geography column and primary value column
- one row per state and playback frame
- at least two non-blank frame values after active non-time filters are applied

Playback does not currently support county, region, single-state county, world, geocode, or navigation maps. It is also incompatible with bubble layers and small multiples. Unsupported or invalid configurations render through the existing static-map path without mutating config or source data.

## Data Shape

Use long-format data: repeat each state once for every period and configure the period field as `timePlayback.column`.

```json
{
  "general": { "type": "data", "geoType": "us" },
  "columns": {
    "geo": { "name": "State" },
    "primary": { "name": "Rate" }
  },
  "data": [
    { "State": "Alabama", "Year": 2022, "Rate": 12.1 },
    { "State": "Alabama", "Year": 2023, "Rate": 13.4 },
    { "State": "Alaska", "Year": 2022, "Rate": 9.8 },
    { "State": "Alaska", "Year": 2023, "Rate": 10.2 }
  ],
  "timePlayback": {
    "enabled": true,
    "column": "Year",
    "showSlider": true,
    "secondsPerFrame": 0.5,
    "order": "asc",
    "customOrder": []
  }
}
```

Numeric frame values and parseable dates sort in ascending value order. Other values use natural string order. Set `order` to `custom` and list values in `customOrder` for an explicit sequence; values present in the data but omitted from that list are appended in automatic ascending order.

## Filtering And Playback Flow

The runtime derives playback state without writing it back to the saved config:

1. Apply active filters other than a filter targeting `timePlayback.column`.
2. Derive and order the available frames from the remaining rows.
3. Build the legend domain from all rows in those frames so a color keeps the same meaning over time.
4. Select the current frame before geography deduplication and generate map runtime data from only those rows.
5. Render the selected frame consistently in map fills, tooltips, patterns, and the visible period label.
6. Build the data table from every ordered, non-blank frame remaining after active non-time filters.

The latest ordered frame is selected initially. The transport row places Play/Pause/Replay and the current frame on the left, with Previous and Next on the right. Previous and Next select one frame and pause playback; each is disabled at its respective endpoint. A centered draggable slider with a labeled tick for every frame appears below the map. Play begins at the earliest frame, Pause stops advancement, Replay becomes available after the final frame, and moving the slider selects a frame and pauses playback. Set `showSlider` to `false` to hide only the slider while retaining the full transport row and current-frame label. The data table remains stable during playback and includes one row per eligible geography/frame pair across all frames; searching, sorting, and downloads continue to use the table's existing behavior. When a non-time filter changes the available rows, the frame list, legend domain, and complete table row set rebuild, and playback resets, paused, to the latest remaining frame.

An authored filter targeting the playback column stays in the saved config, but playback omits that filter from runtime filtering and filter controls while enabled. Disabling playback restores the authored filter rather than deleting or rewriting it.

Image capture keeps the visible period label and excludes the interactive controls. When reduced motion is preferred, map fill transitions are disabled; discrete playback and scrubbing remain available.

## Edge Cases And Validation

- Blank playback-column values are ignored.
- Fewer than two eligible frames disables playback controls.
- A state missing from the selected frame uses the existing no-data fill and does not retain a tooltip from another frame.
- Duplicate rows for the same state and frame make playback ineligible; they are not silently deduplicated.
- A missing playback column, unsupported map mode, bubble layer, or small-multiples configuration falls back to the static map. The editor reports the incompatibility.
- Source config data is never reduced to the selected frame. Frame projection applies only to derived runtime data.
- Playback does not autoplay or loop, and the legend domain is not recalculated separately for each frame.

## Key Files

| File                                                                 | Responsibility                                                               |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `packages/map/src/types/MapConfig.ts`                                | Public map playback config shape.                                            |
| `packages/map/src/helpers/timePlayback.ts`                           | Eligibility, frame ordering, filter handling, and selected-frame projection. |
| `packages/map/src/CdcMapComponent.tsx`                               | Runtime state and coordination of map, legend, table, and controls.          |
| `packages/map/src/components/EditorPanel/components/EditorPanel.tsx` | Playback authoring controls and incompatibility feedback.                    |
| `packages/core/components/PlaybackButton/`                           | Shared accessible Play, Pause, and Replay transport control.                 |
| `packages/core/hooks/usePrefersReducedMotion.ts`                     | Reduced-motion preference used to suppress transitions.                      |

The authorable field reference is in [`packages/map/CONFIG.md`](../packages/map/CONFIG.md#time-playback).
