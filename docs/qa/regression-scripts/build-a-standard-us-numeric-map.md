# Regression: MAP-001 — Build a standard US numeric map

## Purpose

Verify the complete editor handoff from visualization selection through bundled sample-data import to a configured
state-level numeric map. This integration regression protects the workflow connecting the chooser, Data Import,
Data Mapping, and Map editor; focused map stories cover the individual controls in greater depth.

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
  - `Rate`: number; primary value used to color the states
  - `Location`: string; not mapped in this scenario
  - `URL`: string; not mapped in this scenario
- Values used as deterministic checkpoints:
  - Alabama has a `Rate` of `130`
  - Alaska has a `Rate` of `40`
- The fixture also contains an `Overall` row, territories, missing states, and duplicate Montana rows. Those cases
  are outside this build-workflow regression and must not be used as its geography-matching oracle.

## Preconditions

- Start a new visualization in the editor with no previously loaded configuration.
- Use the bundled sample-data action; do not upload a machine-local file or call a network resource.

## Steps and Expected Results

| #   | User action                                                            | Input or selection                       | Expected visible result                                                                                                                                    |
| --- | ---------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Select a visualization from the chooser                                | `United States (State- or County-Level)` | The editor displays the numbered workflow tabs, including `2. Import Data`.                                                                                |
| 2   | Open `2. Import Data`                                                  | No additional input                      | The Data Import screen includes the `United States: State Sample Data` button.                                                                             |
| 3   | Select the bundled sample                                              | `United States: State Sample Data`       | `Data Preview` displays the `STATE`, `Rate`, `Location`, and `URL` column headings.                                                                        |
| 4   | Under `Data Orientation`, select the orientation                       | `Vertical`                               | The `Vertical` data-orientation option is active.                                                                                                          |
| 5   | Answer `Are there multiple series represented in your data?`           | `No`                                     | The `No` option is active.                                                                                                                                 |
| 6   | Continue from Data Mapping                                             | Click `Configure your visualization`     | The rendered map canvas and Map editor accordions `Type`, `General`, and `Columns` are visible.                                                            |
| 7   | Open the Type panel and inspect the starting state                     | No changes                               | Geography is `United States`, Geography Subtype is `US State-Level`, Map Type is `Data`, and Data Classification Type is `Numeric/Quantitative`.           |
| 8   | Open General, then Text Annotations, and inspect their starting states | No changes                               | The General `Title` field is blank, and Text Annotations contains no configured annotation entries.                                                        |
| 9   | Open Columns > Geography and select its source column                  | `STATE`                                  | The Geography control displays `STATE`, and its required-field alert is absent.                                                                            |
| 10  | Open Columns > Data and set `Data Column`                              | `Rate`                                   | State fills update from the `Rate` data and the numeric legend displays five ranges.                                                                       |
| 11  | Compare and hover known geographies in the rendered SVG                | Alabama, then Alaska                     | Alabama and Alaska have different data-fill colors; their visible tooltips contain `State: Alabama` with `Rate: 130` and `State: Alaska` with `Rate: 40`.  |
| 12  | Open General and set `Title`                                           | `Standard US Map Regression Test`        | A visible heading reads exactly `Standard US Map Regression Test`.                                                                                         |
| 13  | Open Text Annotations and click `Add Annotation`                       | No additional input                      | One default map annotation named `New annotation` appears.                                                                                                 |
| 14  | Open the new annotation editor and replace `Annotation Text:`          | `First map annotation`                   | One focusable annotation inside the rendered map has the accessible name `Annotation text that reads: First map annotation`, and `New annotation` is gone. |
| 15  | Click `Add Annotation` again                                           | No additional input                      | A second default map annotation named `New annotation` appears without changing the first annotation.                                                      |
| 16  | Open the newest annotation editor and replace `Annotation Text:`       | `Second map annotation`                  | The rendered map contains one focusable annotation for each requested accessible name and no default `New annotation` annotation.                          |

## Final Acceptance Criteria

- The complete chooser → import → mapping → configuration workflow finishes without an error state.
- The Geography and Data controls display `STATE` and `Rate`, with no required-field alerts.
- A five-range numeric legend is visible, and Alabama and Alaska have different data-fill colors.
- Hovering the Alabama and Alaska SVG geographies displays their exact state names and rates in visible tooltips.
- A visible heading reads exactly `Standard US Map Regression Test`.
- Exactly two focusable annotations inside the rendered map—not editor headings or dropdown copies—have these
  accessible names:
  - `Annotation text that reads: First map annotation`
  - `Annotation text that reads: Second map annotation`
- No rendered-map annotation retains the accessible name `Annotation text that reads: New annotation`.
- No unexpected JavaScript errors, unhandled rejections, or console errors occur.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- The map title is exposed as a visible heading named `Standard US Map Regression Test`.
- Each rendered annotation label is keyboard-focusable and exposes its full `Annotation text that reads: …`
  accessible name.
- Each tooltip is visible only after hovering its rendered state geography and contains both expected text values.

## Notes

- This regression covers the cross-screen integration path. Do not duplicate exhaustive Type, Columns, General, or
  Text Annotations panel coverage here.
- Screenshots may be retained as diagnostic evidence, but functional assertions determine pass or failure.
- Automated story: `packages/editor/src/_stories/MAP-001.Regression.stories.tsx`
