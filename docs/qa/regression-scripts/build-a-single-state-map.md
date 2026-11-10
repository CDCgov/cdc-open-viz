# Regression: MAP-006 — Build a single-state map

## Purpose

Verify the complete editor workflow from bundled county-data import to a focused Alabama county map, including the
state selector and unselected-state visibility behavior unique to single-state maps.

## Visualization

- Type: Map
- Starting point: The visualization chooser in a new editor session
- Editor mode: yes
- Browser viewport: Not viewport-dependent; render the Storybook preview fullscreen

## Test Data

- Bundled sample action: `United States: County Sample Data`
- Repository source: `packages/editor/src/components/DataImport/components/samples/valid-county-data.csv`
- Required columns:
  - `FIPS Codes`: five-character string; county geography identifier, including leading zeroes
  - `County`: string; county display name
  - `Percent Vaccinated`: number; primary numeric value
- Deterministic checkpoints: Alabama contains 67 counties; Autauga County (`01001`) has `34.13`; Baldwin County
  (`01003`) has `37.55`.

## Preconditions

- Start a new visualization with no previously loaded configuration.
- Use the bundled sample; do not upload a local file or call a network resource.
- Use a desktop browser that supports hover.
- Clear the browser console before starting and monitor it through the final step.

## Steps and Expected Results

| #   | User action                                                        | Input or selection                   | Expected visible result                                                                                                            |
| --- | ------------------------------------------------------------------ | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Select a visualization from the chooser                            | `U.S. State`                         | The editor displays the numbered workflow tabs, including `2. Import Data`.                                                        |
| 2   | Open `2. Import Data` and select the bundled sample                | `United States: County Sample Data`  | `Data Preview` shows `FIPS Codes`, `County`, `Public Health Jurisdiction`, `Percent Vaccinated`, and `Vaccination Coverage Group`. |
| 3   | Under `Data Orientation`, select the orientation and series answer | `Vertical`; `No`                     | Both selected options are active.                                                                                                  |
| 4   | Continue from Data Mapping                                         | Click `Configure your visualization` | Type shows `U.S. State`, Map Type `Data`, County Census Year `2019`, and no selected state.                                        |
| 5   | Open Columns > Geography and inspect Geography                     | No change                            | Geography displays `FIPS Codes`.                                                                                                   |
| 6   | Open Columns > Data and set `Data Column`                          | `Percent Vaccinated`                 | The required-field alert disappears, while the map still reads `No State Selected`.                                                |
| 7   | Open Type > `States Selector` and choose a state                   | `Alabama`                            | An accessible `Alabama county map` renders with exactly 67 county shapes and a five-range numeric legend.                          |
| 8   | Inspect and hover Autauga County                                   | No additional input                  | Its tooltip contains `County: Autauga` and `Percent Vaccinated: 34.13`.                                                            |
| 9   | Inspect Baldwin County                                             | No additional input                  | Its tooltip data contains `County: Baldwin` and `Percent Vaccinated: 37.55`.                                                       |
| 10  | Inspect `Hide Unselected States`                                   | No change                            | The control is visible and selected; no dimmed other-state outlines are rendered.                                                  |
| 11  | Clear `Hide Unselected States`                                     | Off                                  | Dimmed gray outlines for other states appear, while all 67 Alabama counties remain rendered.                                       |
| 12  | Select `Hide Unselected States` again                              | On                                   | Dimmed other-state outlines disappear and all 67 Alabama counties remain rendered.                                                 |

## Final Acceptance Criteria

- The chooser-to-map workflow completes using only bundled data and local topology.
- Geography and Data display `FIPS Codes` and `Percent Vaccinated`; Alabama remains selected.
- The rendered map is named `Alabama county map` and contains exactly 67 county groups.
- Autauga and Baldwin expose their normalized county names and exact vaccination values.
- Hide Unselected States changes only other-state outlines and never removes Alabama counties.
- No unexpected JavaScript errors, unhandled rejections, console errors, or network requests occur.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- The rendered SVG has the accessible name `Alabama county map`.
- Autauga County exposes its exact details through the visible hover tooltip.

## Notes

- Dedicated map stories cover zoom behavior; this regression stays focused on the complete authoring workflow.
- Automated story: `packages/editor/src/_stories/MAP-006.Regression.stories.tsx`
