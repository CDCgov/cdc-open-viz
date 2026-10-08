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
    "showPreviousNextButtons": true,
    "secondsPerFrame": 0.5,
    "order": "ascending",
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

Automatic ascending order selects the latest frame initially. A non-empty custom order selects its first authored frame, so a sequence such as `2023, 2022, 2021` loads at `2023` and advances in that visible left-to-right order. Play from the final frame begins again at the first frame; Pause stops advancement and Replay becomes available after playback reaches the final frame.

One playback block appears above the map. Its desktop control row places Play/Pause/Replay, the current frame value, the timeline slider with padding on each side, and Previous/Next in that order. On small mobile layouts, the playback and Previous/Next buttons remain inline, the current frame moves to a row below them, and the slider uses a full-width row below the date. Every existing frame remains a labeled tick, and year or date values are displayed exactly as authored. Previous and Next select one frame and pause playback; each is disabled at its respective endpoint. Moving the slider selects one frame and pauses playback. The editor always presents both control groups; saved JSON may set `showPreviousNextButtons` to `false` to hide both step buttons or `showSlider` to `false` to hide only the slider.

The playback-specific `note` appears directly below the controls. When `note` is omitted, the map shows “Use play, pause, replay, or the slider to interact with the map.” This runtime fallback is not written into saved config. Set `note` to an empty string to hide it. General map message and subtext fields remain independent. Image capture excludes the interactive controls and their playback note while retaining the visible current frame. The data table remains stable during playback and includes one row per eligible geography/frame pair across all frames; searching, sorting, and downloads continue to use the table's existing behavior. When a non-time filter changes the available rows, the frame list, legend domain, and complete table row set rebuild, and playback resets, paused, according to the configured order's initial-frame behavior.

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
