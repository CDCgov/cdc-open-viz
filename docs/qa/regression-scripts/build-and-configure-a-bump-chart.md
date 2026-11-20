# Regression: BUMP-001 — Build and comprehensively configure a Bump Chart

## Purpose

Protect the Bump Chart authoring workflow from the Line chooser and deterministic rank-data import through a single
continuing editor session. The automated story visits every visible editor section, exercises stable representative
settings, and records currently broken generic controls as deferred gaps instead of leaving Storybook red.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes
- Storybook area: `Regression Tests/Chart Scripts/Bump Chart`

## Test Data

Upload `bump-chart-regression.csv` from this exact inline fixture:

```csv
Date,Alpha,Beta,Gamma,Note
2024-01-01,1,2,3,Opening
2024-02-01,2,1,3,Second
2024-03-01,3,1,2,Third
2024-04-01,2,3,1,Closing
```

The four chronological rows create three crossing rank series, twelve rank nodes, and a tooltip-only Note column.

## Preconditions

- Start the single `BUMP001` story from an empty `CdcEditor` configuration.
- Use only the inline CSV; do not call a live endpoint.
- Complete setup and every settings section in the same continuing editor session; do not reload, remount, or inject a
  prebuilt configuration between sections.
- Keep production Chart files unchanged; do not assert the known broken/no-op controls listed below.

## Setup Steps and Expected Results

| #   | User action                        | Input                                   | Expected visible result                                                                              |
| --- | ---------------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 1   | Choose Line and open Import Data   | Upload the fixture                      | Data Preview shows all five headings and four exact rows                                             |
| 2   | Complete Data Designer             | Vertical; Yes; Single Row               | Each choice is visibly active and Configure becomes available                                        |
| 3   | Configure the visualization        | No required values yet                  | Add Data Series and Data Key guidance appears with accessible navigation; no chart renders           |
| 4   | Open General and change Chart Type | Bump Chart                              | Bump becomes selected and Date/Category scaling is forced to Date (Date Time Scale)                  |
| 5   | Add all series                     | Alpha, Beta, Gamma                      | Only Data Key remains missing after the first series; all three series are retained                  |
| 6   | Configure the category axis        | Data Key Date; parse/display `%Y-%m-%d` | Guidance clears and the chart renders                                                                |
| 7   | Inspect baseline geometry          | Three series × four dates               | Three finite line paths and twelve radius-10 rank circles/text labels render; rank 1 is above rank 3 |
| 8   | Hover Alpha on 2024-01-01          | First Alpha circle                      | Tooltip reads `Date: 2024-01-01`, `Alpha: 1`, and `Note: Opening` exactly                            |

## Settings Inventory

Continue directly from setup through each section in the listed UI order. The matrix remains the manual inventory;
automation verifies that the expected controls are exposed and exercises working settings with observable results.
Known broken checks are listed separately and intentionally omitted from the passing story.

| Section            | Controls and conditional paths                                                                                                                                                                                                 | Required observable result                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| General            | Chart Type; Chart Height; Display Missing Data Label; Title; Title Style; Show Title; Super Title; Message; Subtext/Citation; Footnotes; Language for dates and numbers; Alt Text Description; Description Text/Metadata Field | Structure, height, headings/prose/footnotes, formatted dates, and accessible description update exactly         |
| Data Series        | Add/remove/reorder; Series Name; Label; Prefix; Suffix; Round; Add Commas; Show in Data Table; Series Type; Series Line Type/Weight; Show in Tooltip; Rank by Value                                                            | Path/node/legend/table/tooltip counts, ordering, styles, and formatted values stay synchronized                 |
| Left Value Axis    | Axis Type; Label/placement/inline; legend value hover; tick count/rotation/grid/above-grid; commas/abbreviation/round/preserve/prefix/suffix; hide axis/labels/ticks; min/max/smallest max; padding/percentage                 | Rank scale, axis geometry, ticks, labels, hover content, and number formats reflect every value                 |
| Date/Category Axis | Scaling; Manual Ticks; newest-first; padding; Data Key; parse/axis/table/hover formats; date limits/start/end; years once; tick and viewport counts; responsive/max rotation; hide axis/labels/ticks                           | Exact dates, node X positions, filtered date range, tooltip/table formatting, and visibility update             |
| Regions            | Add/remove/reorder; label; text/background colors; minimum Fixed/Previous Days and value; maximum Fixed/Last Date and value                                                                                                    | Region rectangle, label, colors, and bounds match configuration                                                 |
| Columns            | Add/remove/reorder; column; series association; label; prefix/suffix/round/commas; table; tooltip; order                                                                                                                       | Auxiliary values appear in exact tooltip/table order and formatting, then disappear on removal                  |
| Legend             | Position; style; group-by; click behavior/isolate; reverse; box; single-row; vertical sort; hide; title; description; unified                                                                                                  | Legend placement, symbols, ordering, prose, visibility, and path emphasis/isolation update                      |
| Filters            | Behavior; intro HTML; add/remove/reorder; style; column; description field; default; note; select limit; order; order column; nested options                                                                                   | Filter UI text and choices are exact; selected values synchronize paths, nodes, legend, and table               |
| Footnotes          | Dataset mappings; static add/remove/reorder; symbol; text                                                                                                                                                                      | Exact mapped/static markers and footnote text render and restore                                                |
| Visual             | Header Theme; border/accent conditions; palette; reverse palette; Data Cutoff; Bar Thickness; Tooltip Opacity; No Data Message                                                                                                 | Header/border, line/legend colors, rank output/geometry, tooltip opacity, and empty-state message update        |
| Pattern Settings   | Add/remove/reorder; application; Data Key/Value; target series/value column/placement; label; type; size; color; portion mode                                                                                                  | The selected Bump line/node receives the authored pattern; unsupported portion behavior fails explicitly        |
| Data Table         | Title; show; vertical; index; screen-reader description; limit/height/fixed/excluded; collapse/default/below-table/footnote; search/placeholder; sort/direction; CSV/image/download; group/pivot                               | Table layout/content/accessibility/search/sort update; downloaded file reconstructs the visible configured data |
| Text Annotations   | Dropdown/mobile/title; add/remove/reorder; text/style/side/opacity; subject/label/connectors; breakpoints; Event Line option                                                                                                   | Annotation geometry, prose, styling, connectors, responsive visibility, and dropdown output update              |
| Markup Variables   | Enable; add/remove; name; source type/value/column; conditions; icons/mappings                                                                                                                                                 | Supported title/prose/table/footnote substitutions render and serialize exactly                                 |
| Advanced Editor    | Open Advanced Options; edit valid JSON; Apply Configuration Changes                                                                                                                                                            | Applied JSON persists and produces the exact intended title/output without losing Bump geometry                 |

## Deferred Existing Bump Defects

The integrated automated story does not change production behavior and therefore does not assert these currently
broken generic Chart controls. Keep them in the manual inventory until separate product fixes are authorized:

- Data Series `Series Type` is exposed but has no selected `Bump Chart` value or option after conversion.
- Data Series `Show in Tooltip` does not reliably remove the active Bump series from its dedicated tooltip.
- Data Series includes text inputs without accessible names; the integrated story uses named section controls but
  defers a blanket per-control accessibility assertion until those labels are corrected.
- Left Value Axis minimum/domain controls do not change Bump rank geometry.
- Authored Regions do not currently produce a reliable Bump region rectangle/label, so automation covers the editor
  add/remove flow but defers the rendered-region assertion.
- Runtime filters can be authored, but selecting one does not reliably reduce and restore Bump path/node output;
  automation verifies the editor and runtime-filter presence, then defers selection and filtered geometry assertions.
- Static footnote text is authorable but does not currently render in the Bump output footnotes container; automation
  verifies the static-footnote editor flow and defers the rendered-text assertion.
- Visual `Bar Thickness` does not change Bump paths or rank-node geometry.
- Pattern Settings can be authored but do not apply a visible pattern to Bump paths or nodes.
- Text Annotation `Event Line` and other unsupported generic annotation options must not be asserted for Bump until
  production support or visibility rules are corrected.

## Automated Continuous-Story Assertions

The `BUMP001` story currently proves these working behaviors in one empty-editor session:

- exact identities and navigation for both required-field alerts; after Alpha is added only Data Key remains, and
  Alpha, Beta, and Gamma are all retained;
- all twelve expected series/date/rank identities, finite non-null coordinates, matching rank labels, rank-one above
  rank-three placement, and a stable Alpha/2024-01-01 tooltip target;
- rendered title editing; series-name-to-legend synchronization; series prefix formatting in the data table;
  Show-in-Data-Table removal/restoration; curve-step geometry and curve-linear restoration; Gamma remove/re-add;
- date-axis reversal with exact chronological restoration;
- Region label persistence and removal; Note column label propagation into tooltip output;
- Legend hide/show restoration; Filter add/configure/runtime-presence/remove; static footnote authoring/removal;
- Pattern add/key/value/remove authoring while visible pattern rendering remains deferred;
- Data Table hide/show restoration; authored annotation rendering/removal;
- a Note-backed markup variable rendered in the title; and an Advanced Editor JSON title edit that preserves the
  exact Bump geometry contract.

## Final Acceptance Criteria

- Setup preserves the exact fixture, required-field flow, date-time contract, three paths, twelve nodes, and tooltip.
- Every visible editor section is reached in UI order, with expected controls inventoried and working representative
  settings asserted against rendered or editor output.
- The single exported story mounts one empty editor and retains the same authored configuration through every section.
- The targeted Storybook runner completes without changing production Chart behavior.
- Existing no-op behavior is documented as deferred and does not keep the integrated story red.

## Persistence and Export Boundaries

- The story retains one in-memory editor configuration throughout and verifies Advanced Editor can apply it without
  losing Bump geometry.
- Reload persistence and CSV/image/download artifact contents are not asserted in this passing regression.

## Accessibility and Interaction Checks

- Use roles, labels, and visible names for every editor action.
- Required-field actions must open the correct section and focus the intended control.
- Required-field navigation and every automated editor action use accessible names where the current UI provides one.
- Broader alt-text, screen-reader table, and keyboard interaction checks remain future focused coverage.
- CSS selectors are limited to SVG marks and rendered structures with no accessible role.

## Notes

- This is one integrated representative settings workflow, not separate panel stories.
- Breaking assertions were removed at human direction; no production fix is authorized by this script.
- Automated story: `packages/editor/src/_stories/BUMP-001.Regression.stories.tsx`
