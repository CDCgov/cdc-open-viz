# Regression: MAP-005 — Build a U.S. geocode map

## Purpose

Verify the complete editor workflow from bundled data import to a usable U.S. geocode map, including the column
mappings, marker appearance, tooltip interaction, and state drill-down settings that are most important to geocoding.

## Visualization

- Type: Map
- Starting point: The visualization chooser in a new editor session
- Editor mode: yes
- Browser viewport: Not viewport-dependent; render the Storybook preview fullscreen

## Test Data

- Bundled sample action: `United States: Geo Point Sample Data`
- Repository source: `packages/editor/src/components/DataImport/components/samples/valid-geo-point.csv`
- Required columns:
  - `City`: string; marker name and geography value
  - `Longitude`: number; east-west coordinate in decimal degrees
  - `Latitude`: number; north-south coordinate in decimal degrees
  - `Value`: number; marker data value
- Deterministic checkpoints: Albuquerque is at longitude `-106.650421`, latitude `35.084385`, with value `1`;
  Boston has value `12`.

## Preconditions

- Start a new visualization with no previously loaded configuration.
- Use the bundled sample; do not upload a local file or call a network resource.
- Use a desktop browser that supports hover.
- Clear the browser console before starting and monitor it through the final step.

## Steps and Expected Results

| #   | User action                                                        | Input or selection                     | Expected visible result                                                                                                                                 |
| --- | ------------------------------------------------------------------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Select a visualization from the chooser                            | `U.S. Geocode`                         | The editor displays the numbered workflow tabs, including `2. Import Data`.                                                                             |
| 2   | Open `2. Import Data` and select the bundled sample                | `United States: Geo Point Sample Data` | `Data Preview` shows `City`, `Longitude`, `Latitude`, and `Value` column headings.                                                                      |
| 3   | Under `Data Orientation`, select the orientation and series answer | `Vertical`; `No`                       | Both selected options are active.                                                                                                                       |
| 4   | Continue from Data Mapping                                         | Click `Configure your visualization`   | The Map editor opens with Geography Subtype `US County-Level`, Map Type `Geocode`, and `Configuration Required` listing `Latitude` and `Longitude`.     |
| 5   | Open Columns > Geography and set Geography                         | `City`                                 | Geography changes from `Select Option` to `City`; the required-column list remains `Latitude` and `Longitude`.                                          |
| 6   | Open Columns > Data and set `Data Column`                          | `Value`                                | Data Column changes from `Select Option` to `Value`; `Latitude` and `Longitude` remain required.                                                        |
| 7   | Set `Latitude Column` and `Longitude Column`                       | `Latitude`; `Longitude`                | `Configuration Required` disappears and colored point markers render across the U.S. map.                                                               |
| 8   | Open Visual and change `Default City Style`                        | `Star`                                 | Visible point markers change from circles to stars; Albuquerque remains in New Mexico and Boston remains in Massachusetts.                              |
| 9   | Set `Label (Optional)`                                             | `Reporting sites`                      | The legend displays `Reporting sites` with the star marker symbol.                                                                                      |
| 10  | Set `Geocode Circle Size`                                          | `10`                                   | The visible stars increase in size while Albuquerque and Boston remain centered on the same locations.                                                  |
| 11  | Open Interactivity and inspect `Detail displays on`                | `Hover - Tooltip`                      | The hover-tooltip option is active.                                                                                                                     |
| 12  | Hover the Albuquerque marker in central New Mexico                 | No additional input                    | A visible tooltip includes `County: Albuquerque` and `Value: 1`.                                                                                        |
| 13  | Change `Detail displays on`, then select the Boston marker         | `Click - Popover Modal`                | Hover no longer opens a tooltip; selecting Boston opens a detail modal containing `County: Boston` and `Value: 12`.                                     |
| 14  | Close the modal                                                    | Select the visible close icon          | The modal closes; the map is drilled into Massachusetts and a top-right `Reset Zoom` button is visible.                                                 |
| 15  | Select `Reset Zoom`                                                | No additional input                    | The full U.S. extent returns; star markers are still size `10`, the `Reporting sites` legend remains, and the top-right `Reset Zoom` button disappears. |

## Final Acceptance Criteria

- The chooser-to-map workflow completes using only the bundled sample data.
- Geography, Data, Latitude, and Longitude display `City`, `Value`, `Latitude`, and `Longitude`, respectively.
- Star markers render at the configured size, and the legend displays `Reporting sites` with a star symbol.
- Albuquerque and Boston expose `County: Albuquerque` with `Value: 1` and `County: Boston` with `Value: 12`
  through the configured detail interactions.
- State drill-down and `Reset Zoom` preserve the marker mappings and appearance.
- No unexpected JavaScript errors, unhandled rejections, or console errors occur from chooser selection through
  the final reset.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- `Reset Zoom` has the accessible name `Reset Zoom` and is keyboard operable.

## Notes

- This is a focused geocode workflow, not exhaustive coverage of shared Map editor settings.
- Automated story: `packages/editor/src/_stories/MAP-005.Regression.stories.tsx`
