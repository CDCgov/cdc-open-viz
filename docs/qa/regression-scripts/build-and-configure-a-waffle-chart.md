# Regression: WAFFLE-001 — Build and configure a Waffle Chart

## Purpose

Protect the complete Waffle Chart authoring workflow from visualization selection and deterministic data import
through HTML text, number formatting, data-point filters, chart settings, theme color, and visual treatment.

## Visualization

- Type: Waffle Chart
- Starting point: New visualization
- Editor mode: yes

## Test Data

- Source: Inline comma-delimited CSV uploaded as `waffle-chart-regression.csv`
- Required columns:
  - `Region`: text used by the first data-point filter
  - `Year`: integer used by the second data-point filter
  - `Participants`: integer values summed for the numerator
- Values important to this regression:

```csv
Region,Year,Participants
North,2024,20
South,2024,15
North,2025,10
West,2025,15
```

## Preconditions

- Start with an empty editor configuration.
- Use only the inline CSV; do not call live data.
- Keep the default static denominator of 100 and Show Percentage enabled.

## Steps and Expected Results

| #   | User action                                           | Input or selection                                                                                                                                                           | Expected visible result                                                                                                        |
| --- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Select Waffle Chart and open Import Data              | Upload `waffle-chart-regression.csv`                                                                                                                                         | Data Preview shows Region, Year, and Participants plus all four fixture rows                                                   |
| 2   | Choose the import orientation and series behavior     | Vertical; No for multiple series                                                                                                                                             | Vertical and No are visibly selected, and Configure your visualization is available                                            |
| 3   | Configure the visualization                           | Continue from Data Import                                                                                                                                                    | General, Data, Chart Settings, Visual, and Markup Variables sections are visible                                               |
| 4   | Enable and disable TP5 white background style         | On, then off                                                                                                                                                                 | The white-background class and callout flag toggle, then the original data-callout treatment is restored                       |
| 5   | Change General Chart Type                             | Waffle                                                                                                                                                                       | The standard Waffle renders with SVG nodes                                                                                     |
| 6   | Configure Data                                        | Participants; Sum; static denominator 100                                                                                                                                    | The metric reads `60%` and exactly 60 nodes are filled                                                                         |
| 7   | Exercise Numerator functions and conditions           | Count, Max, Mean, Median, Min, Sum; text and numeric `=`, `≠`, `<`, `<=`, `>`, `>=`                                                                                          | Every selection produces its documented exact metric and matching filled-node count, then restores to `60%` and 60 nodes       |
| 8   | Author supported HTML in all three General fields     | Title: `<strong>Waffle</strong> <em>Regression</em>`; Message: `Participants<sup>1</sup> <strong>within target</strong>`; Subtext/Citation: `<em>Source</em><sub>2026</sub>` | The title, message, and citation render formatted text with semantic strong, em, sup, and sub elements; no literal tags appear |
| 9   | Change number formatting                              | Prefix `~`; suffix ` percent`; Round `1`                                                                                                                                     | The normalized rendered metric reads exactly `~60.0 percent`                                                                   |
| 10  | Restore number formatting                             | Empty prefix; suffix `%`; Round `0`                                                                                                                                          | The rendered metric returns exactly to `60%`                                                                                   |
| 11  | Add the first Data Point Filter                       | Region = North                                                                                                                                                               | The metric reads `30%` and exactly 30 nodes are filled                                                                         |
| 12  | Add the second Data Point Filter                      | Year = 2024                                                                                                                                                                  | The metric reads `20%` and exactly 20 nodes are filled                                                                         |
| 13  | Remove the Year filter, then remove the Region filter | Remove the second filter before the first                                                                                                                                    | The metric and filled nodes restore first to 30 and then to the 60%/60-node baseline                                           |
| 14  | Change Chart Settings                                 | Shape = square; Layout = vertical                                                                                                                                            | The Waffle uses rectangular nodes and its rendered container uses the vertical layout                                          |
| 15  | Change the Visual theme                               | theme-purple                                                                                                                                                                 | Waffle nodes use the exact fill `#712177`                                                                                      |
| 16  | Toggle every standard Visual checkbox, restoring each | Display Border; Use Border Color Theme; Use Accent Style; Use Theme Background Color; Hide Background Color                                                                  | Each corresponding rendered treatment class changes and returns to its initial state                                           |
| 17  | Configure Markup Variables                            | Enable/add; generated tag; decimals; condition; date and locale; null hiding; close/edit/delete                                                                              | Authored variables update Waffle message text through the complete lifecycle                                                   |

## Final Acceptance Criteria

- The complete chooser-to-editor workflow uses the four deterministic fixture rows and produces the exact metric/fill sequence
  60/60 → 30/30 → 20/20 → 30/30 → 60/60.
- Supported HTML is rendered semantically in all three General text fields and is never displayed as literal markup.
- Square shape, vertical layout, exact purple node fill, and both directions of every standard Visual checkbox are observable
  in the rendered visualization.
- Markup Variables cover generated tags, rendered values, formatting, conditions, locale-aware dates, null hiding, and lifecycle actions.
- No unexpected console errors, window errors, or unhandled promise rejections occur.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- Locate chooser actions, accordion sections, form fields, filter controls, theme, and accent controls by their accessible
  role, label, or visible name.
- Confirm that each editor section required by the workflow is exposed as a visible button.

## Notes

- This remains one story because the integrated chooser, import, and multi-section editor sequence is the protected risk.
- Automated story: `packages/editor/src/_stories/WAFFLE-001.Regression.stories.tsx`
