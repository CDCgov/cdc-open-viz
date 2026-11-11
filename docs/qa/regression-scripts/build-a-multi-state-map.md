# Regression: MAP-007 — Build a multi-state map

## Purpose

Verify that a map built from bundled county data renders exactly six selected states and excludes every unselected
state.

## Visualization

- Type: Map
- Starting point: The visualization chooser in a new editor session
- Editor mode: yes
- Browser viewport: Not viewport-dependent; render the Storybook preview fullscreen

## Test Data

- Bundled sample action: `United States: County Sample Data`
- Repository source: `packages/editor/src/components/DataImport/components/samples/valid-county-data.csv`
- Required columns:
  - `FIPS Codes`: five-character county geography identifier, including leading zeroes
  - `Percent Vaccinated`: numeric primary value
- Selected states and rendered topology counts:
  - Alabama (`01`): 67 counties
  - Florida (`12`): 67 counties
  - Georgia (`13`): 159 counties
  - Mississippi (`28`): 82 counties
  - Washington (`53`): 39 counties
  - California (`06`): 58 counties

## Preconditions

- Start a new visualization with no previously loaded configuration.
- Use the bundled sample and local 2019 county topology; do not depend on an external network response.
- Clear the browser console before starting and monitor it through the final step.

## Steps and Expected Results

| #   | User action                                                        | Input or selection                                                 | Expected visible result                                                                                                            |
| --- | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Select a visualization from the chooser                            | `U.S. State`                                                       | The editor displays the numbered workflow tabs, including `2. Import Data`.                                                        |
| 2   | Open `2. Import Data` and select the bundled sample                | `United States: County Sample Data`                                | `Data Preview` shows `FIPS Codes`, `County`, `Public Health Jurisdiction`, `Percent Vaccinated`, and `Vaccination Coverage Group`. |
| 3   | Under `Data Orientation`, select the orientation and series answer | `Vertical`; `No`                                                   | Both selected options are active.                                                                                                  |
| 4   | Continue from Data Mapping                                         | Click `Configure your visualization`                               | Type shows `U.S. State`, Map Type `Data`, County Census Year `2019`, and no selected state.                                        |
| 5   | Open Columns and inspect Geography                                 | No change                                                          | Geography displays `FIPS Codes`.                                                                                                   |
| 6   | Set `Data Column`                                                  | `Percent Vaccinated`                                               | The required-field alert disappears while the map still reads `No State Selected`.                                                 |
| 7   | Open Type > `States Selector` and choose six states                | Alabama, Florida, Georgia, Mississippi, Washington, and California | The map is named `Alabama, Florida, Georgia, Mississippi, Washington, California county map`.                                      |
| 8   | Inspect the rendered counties                                      | No additional input                                                | Exactly 472 county shapes render: 67 Alabama, 67 Florida, 159 Georgia, 82 Mississippi, 39 Washington, and 58 California counties.  |
| 9   | Inspect state outlines and `Hide Unselected States`                | No change; leave the control selected                              | Exactly six selected-state outlines render and no unselected-state outlines appear.                                                |

## Final Acceptance Criteria

- The selected-state configuration contains only Alabama, Florida, Georgia, Mississippi, Washington, and California.
- Rendered county FIPS prefixes are exactly `01`, `06`, `12`, `13`, `28`, and `53`, with 472 county shapes total.
- Exactly six selected-state outlines and zero unselected-state outlines appear.
- No unexpected JavaScript errors, unhandled rejections, console errors, or network requests occur.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- The rendered SVG has the accessible name `Alabama, Florida, Georgia, Mississippi, Washington, California county map`.

## Notes

- The bundled CSV has fewer data-backed Georgia rows than Georgia topology counties; county counts validate rendered topology, not data coverage.
- Dedicated map stories cover zoom behavior; this regression stays focused on exact state visibility.
- Automated story: `packages/editor/src/_stories/MAP-007.Regression.stories.tsx`
