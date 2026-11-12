# Regression: MAP-008 — Build a standard US categorical map

## Purpose

Verify the complete editor workflow from bundled state-data import to a categorical U.S. state map, including the
relationship between category legend swatches, state fills, visible tooltips, and a custom polygon overlay.

## Visualization

- Type: Map
- Starting point: The visualization chooser in a new editor session
- Editor mode: yes
- Browser viewport: Not viewport-dependent; render the Storybook preview fullscreen

## Test Data

- Bundled sample action: `United States: State Sample Data`
- Repository source: `packages/editor/src/components/DataImport/components/samples/valid-data-map.csv`
- Required columns:
  - `STATE`: string; United States geography name
  - `Location`: string; categorical value used to color states
- Deterministic categories: `Vehicle`, `Work`, `Home`, `School`, and `NA`
- Deterministic state checkpoints:
  - Alabama and Colorado are `Vehicle`
  - Alaska is `Work`
- Polygon overlay fixture:
  - Repository source: `packages/map/src/_stories/_mock/oregon-topojson.json`
  - The automated story converts the local fixture to a data URL; it does not make an external request.
  - Object namespace: `cove (1)`
  - Feature name: `Oregon`
  - Geometry: Oregon state outline
  - Fill: aqua (`#00ffff`)
- Do not use the unmatched `Overall` row, territories, or duplicate Montana rows as geography oracles.

## Preconditions

- Start a new visualization with no previously loaded configuration.
- Use the bundled sample; do not upload a local file or depend on an external network response.
- Clear the browser console before starting and monitor it through the final step.

## Steps and Expected Results

| #   | User action                                                 | Input or selection                                                                                           | Expected visible result                                                                                           |
| --- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 1   | Select a visualization from the chooser                     | `United States (State- or County-Level)`                                                                     | The editor displays the numbered workflow tabs, including `2. Import Data`.                                       |
| 2   | Open `2. Import Data` and select the bundled sample         | `United States: State Sample Data`                                                                           | `Data Preview` shows `STATE`, `Rate`, `Location`, and `URL`.                                                      |
| 3   | Under `Data Orientation`, select orientation and series     | `Vertical`; `No`                                                                                             | Both selected options are active.                                                                                 |
| 4   | Continue from Data Mapping                                  | Click `Configure your visualization`                                                                         | The Map editor opens with United States, US State-Level, and Data selected.                                       |
| 5   | In Type, change `Data Classification Type`                  | `Categorical`                                                                                                | The Categorical option is selected.                                                                               |
| 6   | In Columns, set Geography and Data Column                   | `STATE`; `Location`                                                                                          | Required-field alerts disappear and five legend labels appear: Vehicle, Work, Home, School, and NA.               |
| 7   | Compare Alabama and Colorado with the Vehicle legend swatch | No additional input                                                                                          | Both state fills match the Vehicle swatch and match each other.                                                   |
| 8   | Compare Alaska with the Work legend swatch and Alabama      | No additional input                                                                                          | Alaska matches Work and differs from Alabama.                                                                     |
| 9   | In Custom Map Layers, add the local Oregon TopoJSON polygon | File: percent-encode the fixture JSON after `data:application/json,`; namespace: `cove (1)`; fill: `#00ffff` | A visible aqua Oregon outline renders above the categorical state map without changing its legend or state fills. |
| 10  | Hover Alabama, then Alaska                                  | No additional input                                                                                          | Tooltips show `State: Alabama`, `Location: Vehicle`, then `State: Alaska`, `Location: Work`.                      |

## Final Acceptance Criteria

- Geography and Data display `STATE` and `Location`, with no required-field alerts.
- The categorical legend contains exactly Vehicle, Work, Home, School, and NA.
- Same-category state fills match their legend swatch; different categories have different fills.
- The aqua Oregon TopoJSON overlay renders above the state shapes without changing the exact categorical legend or the Alabama, Colorado, Alaska, and Oregon fills.
- Alabama and Alaska visible tooltips expose their exact state and Location values.
- No unexpected JavaScript errors, unhandled rejections, or console errors occur.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- Each category is exposed as a visible label in the categorical gradient legend.
- Alabama and Alaska expose their mapped categorical values through visible hover tooltips.
- The polygon is a visual context layer with no additional tooltip or keyboard interaction in this regression.

## Notes

- Category sorting and legend toggling have focused coverage elsewhere and are outside this workflow regression.
- Automated story: `packages/editor/src/_stories/MAP-008.Regression.stories.tsx`
