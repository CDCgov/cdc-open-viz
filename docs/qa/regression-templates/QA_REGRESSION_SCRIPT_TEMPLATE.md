# QA Regression Script Template

QA authors should describe the workflow using visible UI language. Name controls by their label and describe exactly
what a user should observe. Do not provide CSS selectors, test code, arbitrary wait times, or machine-specific paths.

Every action that changes the visualization needs an observable expected result. Replace phrases such as "works,"
"updates correctly," or "looks right" with the text, value, element, style, or behavior that proves success.

Copy and complete the template below, then paste it into
[`QA_REGRESSION_TEST_PROMPT.md`](./QA_REGRESSION_TEST_PROMPT.md).

Save each completed script as `docs/qa/regression-scripts/<title>.md`, where `<title>` is the regression's short title
normalized using Unicode NFKD, removing combining marks, replacing `&` with `and`, replacing each run of non-ASCII
letters or digits with one hyphen, lowercasing, and trimming leading or trailing hyphens. For example,
`Build a standard US numeric map` becomes
`docs/qa/regression-scripts/build-a-standard-us-numeric-map.md`.

If the resulting path already contains a different tracking ID, choose a more specific short title before saving;
never overwrite another regression script.

```markdown
# Regression: <tracking ID> — <short title>

## Purpose

<What defect, workflow, or high-risk behavior must this test catch?>

## Visualization

- Type: <Chart, Map, Dashboard, Data Table, Data Bite, Waffle Chart, or other>
- Starting point: <new visualization or the visible name of an existing example/configuration>
- Editor mode: <yes or no>
- Browser viewport: <exact width × height and orientation for each required size; omit when behavior is not viewport-dependent>

## Test Data

- Source: <attached file, repository fixture if known, or inline data below>
- Required columns:
  - `<column>`: <data type, what it represents, and any parsing/format rule>
- Values important to this regression:
  - <specific rows, categories, dates, numeric strings, leading zeros, nulls, or empty strings that must remain distinct>

<Include a small Markdown table or fenced CSV block when the data is not already available as an attachment. State
the delimiter and locale when they affect parsing. If using an attachment, attach it in the same request as the
completed prompt and record its exact filename here.>

## Preconditions

- <state that must already exist>
- <required feature setting or configuration assumption>
- <external data contract that must be mocked locally, if relevant>

## Steps and Expected Results

| #   | User action                              | Input or selection       | Expected visible result                |
| --- | ---------------------------------------- | ------------------------ | -------------------------------------- |
| 1   | <Open or select a visibly named control> | <value, file, or option> | <specific rendered result>             |
| 2   | <Next action>                            | <input>                  | <specific change from the prior state> |
| 3   | <Next action>                            | <input>                  | <specific rendered result>             |

## Final Acceptance Criteria

- <Exact rendered text, data value, element count, style, layout, or interaction behavior>
- <Behavior or error that must not occur>
- No unexpected JavaScript errors appear in the browser console.

## Persistence Check

- Required: <yes or no>
- User surface: <the exact save, export, reload, reopen, or replace-data action; or not applicable>
- Reconstruction: <how the saved output is loaded into a fresh visualization instance>
- Serialized checks: <specific fields and values that must be present or absent>
- Expected result after reload: <specific persisted setting and rendered output>

## Accessibility or Interaction Check

- <Keyboard, focus, accessible name, tooltip, or screen-reader behavior; write "None" if not relevant>

## Notes

- <Optional business context or description of the previous failure>
- <Optional technical hints such as a known story or fixture; these are not required>
- Automated story: <package-relative story path; add when automation is created>
```

## Script Readiness Checklist

Before handing the script to the agent, confirm:

- The regression has a stable tracking ID and a single clear purpose.
- The completed script is saved under `docs/qa/regression-scripts/` using its lowercase kebab-case title.
- Its canonical path does not collide with a different regression tracking ID.
- Test data is attached, included, or identified precisely enough to reproduce.
- Attached data accompanies the prompt and its exact filename matches the script.
- Data types, parsing-sensitive values, nulls, and empty strings are unambiguous.
- Each meaningful action has a specific expected visible result.
- Final acceptance criteria distinguish a pass from a plausible but incorrect rendering.
- Save/reload expectations are stated explicitly.
- Viewport requirements use exact dimensions, and accessibility requirements are included when relevant.
