# Regression: GAUGE-001 — Build and configure a Gauge Chart

## Purpose

Protect the complete TP5 Gauge authoring workflow from the editor chooser through data import and the Gauge-specific
General, Data, trend, filter, Visual, Markup Variables, and Advanced Editor settings.

## Visualization

- Type: Waffle Chart
- Starting point: New Gauge Chart visualization
- Editor mode: yes

## Test Data

- Source: Inline CSV uploaded as `gauge-regression.csv`
- Required columns: `Category`, `Current`, `Previous`, `Denominator`, `Status`, `Report Date`, and `Optional`

```csv
Category,Current,Previous,Denominator,Status,Report Date,Optional
Total,40,30,100,High,2026-01-15,Present
Other,20,15,100,Low,2026-02-20,
Zero,0,0,100,Stable,2026-03-01,Zero
```

## Preconditions

- Open Storybook with a fresh editor story and no saved configuration.
- Do not request live data.

## Steps and Expected Results

| #   | User action                                          | Input or selection                                                                                     | Expected visible result                                                  |
| --- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 1   | Select Gauge Chart and upload the CSV in Import Data | Vertical; no multiple series                                                                           | Data Preview shows all columns and three rows                            |
| 2   | Configure the visualization                          | Current; Sum                                                                                           | A rendered TP5 Gauge appears and Chart Settings remains absent           |
| 3   | Configure General                                    | chart type, title, show title, message, citation, locale                                               | Gauge type and authored text update visibly                              |
| 4   | Configure numerator and condition                    | data column/function; numeric and text comparisons                                                     | Primary value and validation feedback update                             |
| 5   | Configure denominator and formatting                 | static/data denominator, prefix, suffix, round, commas, descriptor, percentage, denominator visibility | Primary text and gauge output reflect each setting                       |
| 6   | Add and remove a filter                              | Category = Other                                                                                       | The displayed metric changes and restores after removal                  |
| 7   | Configure trends                                     | numeric up/down/flat, threshold, labels, unsupported function, categorical mapping                     | Accessible trend arrows and conditional controls match the configuration |
| 8   | Configure Visual                                     | white background and value above message                                                               | Callout style, flag, and layout classes update                           |
| 9   | Configure Markup Variables                           | enable, add, format, condition, date/locale, hide-null, close/edit/delete                              | Generated text and authoring lifecycle update visibly                    |
| 10  | Use Advanced Editor                                  | change title and apply                                                                                 | The rendered Gauge title reflects the applied configuration              |

## Final Acceptance Criteria

- The workflow begins at the editor chooser and imports deterministic local data.
- Every TP5 Gauge accordion and supported conditional control is reached.
- Meaningful setting changes have specific rendered-output, conditional-UI, or validation assertions.
- No unexpected console errors, unhandled rejections, or window errors appear.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- Numeric trend up, down, and flat states expose accessible names.
- Editor controls are located by visible label, role, or text when available.

## Notes

- The single story crosses accordion boundaries because the complete import-to-settings sequence is the regression risk.
- Automated story: `packages/editor/src/_stories/GAUGE-001.Regression.stories.tsx`
