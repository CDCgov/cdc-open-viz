# Regression: SANKEY-001 — Build and configure a Sankey diagram

## Purpose

Protect fresh Sankey authoring from the visualization chooser through required column mapping and the dedicated
Sankey settings. The regression verifies exact flow semantics, tooltip output, horizontal scrolling, and keyboard
downstream highlighting in one editor session.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes
- Storybook area: `Regression Tests/Chart Scripts/Sankey`

## Test Data

Upload `sankey-regression.csv` from this exact fixture:

```csv
Source,Target,People
Referral,Screened,100
Screened,Eligible,80
Screened,Ineligible,20
Eligible,Enrolled,60
```

The fixture produces five nodes and four directed links. Node values are Referral 100, Screened 100, Eligible 80,
Ineligible 20, and Enrolled 60.

## Preconditions

- Start the single `SANKEY001` story from an empty `CdcEditor` configuration.
- Use only the inline CSV and one continuing editor session.
- Do not modify production Chart or Editor behavior to satisfy this regression.

## Steps and Expected Results

| #   | User action                         | Input or selection             | Expected visible result                                                                                                          |
| --- | ----------------------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Choose Sankey Diagram and import    | Exact CSV fixture              | Data Preview preserves all headings and four rows; Configure becomes available without Data Designer                             |
| 2   | Open Configure without mappings     | No new input                   | Source Column, Target Column, and Value Column guidance is actionable; no Sankey diagram renders                                 |
| 3   | Map the source                      | Source Column = Source         | Target Column and Value Column guidance remains; rendering stays blocked                                                         |
| 4   | Map the target                      | Target Column = Target         | Only Value Column guidance remains; rendering stays blocked                                                                      |
| 5   | Complete the mappings               | Value Column = People          | Guidance clears; five exact nodes, four exact directed links, labels, values, and positive geometry render with no rejected rows |
| 6   | Enable and disable tooltips         | Show Tooltips on, then off     | All nine semantic elements gain their exact tooltip payloads and then lose them without changing diagram identity                |
| 7   | Remove and restore fixed width      | Clear, then enter `1100`       | Diagram changes from fixed-width scrolling to fluid width and then to a 1100-pixel scrollable region without semantic drift      |
| 8   | Activate Screened from the keyboard | Focus Screened and press Enter | Screened, Eligible, Ineligible, Enrolled, and their downstream links stay active; Referral and its incoming link become inactive |

## Final Acceptance Criteria

- Required guidance blocks rendering until all three imported columns are mapped.
- Exactly five nodes and four links match the fixture's identities, values, labels, and directed relationships.
- Every dedicated Sankey panel control produces its intended observable output.
- Fluid and scrollable layouts preserve the same semantic inventory.
- Keyboard activation highlights only the selected node's downstream flow.
- No unexpected JavaScript errors appear in the browser console.

## Persistence Check

- Required: no.

## Accessibility or Interaction Check

- Locate chooser, Configure, required-field actions, accordion, selects, checkbox, and width input by accessible role or label.
- Confirm each Sankey node is a focusable button with an exact accessible name.
- Activate Screened with Enter and assert the rendered highlight state.

## Notes

- Narrow-viewport, invalid-row, palette, data-table, annotation, and generic Chart-panel coverage remain outside this focused workflow.
- Automated story: `packages/editor/src/_stories/SANKEY-001.Regression.stories.tsx`
