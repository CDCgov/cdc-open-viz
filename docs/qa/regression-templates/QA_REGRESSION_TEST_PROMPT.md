# QA Regression Test Prompt

Use this prompt to convert a completed
[`QA_REGRESSION_SCRIPT_TEMPLATE.md`](./QA_REGRESSION_SCRIPT_TEMPLATE.md) script into a durable Storybook regression
test. Completed scripts belong in `docs/qa/regression-scripts/<title>.md`, with `<title>` normalized as defined in the
prompt below. Replace the content between the input markers; do not rewrite the instructions for individual tests.

## Reusable Prompt

```text
You are converting a UI-focused QA regression script into durable automated coverage for cdc-open-viz.

Repository rules

1. Read AGENTS.md and docs/TESTING_BEST_PRACTICES.md before changing code. Read any additional context document
   that AGENTS.md identifies for the affected visualization or system.
2. Treat the QA script's purpose, user actions, and expected outcomes as the product requirements. Discover code
   locations, stories, fixtures, accessible queries, and selectors from the repository; do not require QA to provide
   implementation details.
3. If required expected outcomes, fixtures, starting state, persistence behavior, or viewport details are genuinely
   ambiguous and cannot be resolved from the repository, stop and send one concise clarification request listing
   every blocking question. Do not invent product behavior. Otherwise, proceed autonomously.
4. Preserve unrelated working-tree changes. Do not update snapshots or fixtures merely to hide a regression.
5. This task creates regression coverage; it does not authorize production-code fixes. If the current product
   contradicts the script's expected behavior, preserve the expected assertion, report the reproduced defect, and
   do not weaken the test or change production behavior unless the user explicitly requests a fix.
6. Treat `docs/qa/regression-scripts/<title>.md` as the canonical source for saved regression scripts. If the script
   was supplied only in chat, save it there before creating test code. Preserve its tracking ID and heading. Derive
   `<title>` by applying Unicode NFKD normalization, removing combining marks, replacing `&` with `and`, replacing
   every run of non-ASCII letters or digits with one hyphen, lowercasing, and trimming leading or trailing hyphens.
   Search all canonical scripts for the tracking ID before writing. If the ID already exists under an old title, move
   that file; if the target path belongs to a different ID, stop and ask rather than overwrite it.

Required workflow

1. Parse the script into: regression ID, risk being protected, visualization type, starting state, fixture data,
   preconditions, actions, checkpoints, final acceptance criteria, persistence behavior, and accessibility behavior.
2. Inspect the relevant component, editor controls, existing stories, existing fixtures, and shared testing helpers.
   Reuse the nearest established patterns.
3. When browser exploration is useful, reuse Storybook on port 6006 when it is already running. Otherwise, start
   `yarn storybook` with the environment's background-process support, wait for readiness, and stop only the process
   you started after exploration. Use the Storybook MCP server at `http://localhost:6006/mcp` to locate and inspect
   the relevant story, and use Playwright MCP to reproduce or debug the workflow. If either optional MCP integration
   is unavailable, inspect the story files directly and use the available browser/test runner; do not block test
   authoring on optional tooling. Browser exploration is evidence for authoring the test, not the durable artifact.
4. Create one dedicated Storybook `play` test file per regression under the owning package's `_stories` directory;
   do not mix QA regressions into editor-control or smoke story files. The owning package is the package responsible
   for the workflow's starting user surface: use `packages/editor` for chooser or Data Import workflows. Otherwise,
   map canonical types as follows: `Chart` → `packages/chart`, `Map` → `packages/map`, `Dashboard` →
   `packages/dashboard`, `Data Table` → `packages/data-table`, `Data Bite` → `packages/data-bite`, and `Waffle Chart`
   → `packages/waffle-chart`. Stop and ask for any other type. Name the file
   `<RegressionID>.Regression.stories.tsx`, replacing each run of non-ASCII letters or digits in the ID with one
   hyphen and trimming hyphens. Do not use `*.smoke.stories.*` because quick mode excludes it.
5. Normalize the script's `Visualization > Type` to one of the canonical display labels in step 4. Set the Storybook
   meta title to `Regression Tests/<Visualization>` and give the single exported story the visible name
   `<Regression ID> — <short title>`. Replace `/` in the visible short title with `–` so it cannot create an unintended
   Storybook hierarchy. Use the tracking ID stripped to ASCII letters and digits as the exported symbol, prefixed
   with `Regression` if it would begin with a digit. Before writing, search existing regression story filenames and
   exports; if either normalized value collides with a different tracking ID, stop and ask. This produces a uniquely
   selectable regression beneath the top-level `Regression Tests` sidebar group without an extra story-name level.
6. Add `// Source regression: docs/qa/regression-scripts/<title>.md` to the story file and update the script's Notes
   with `Automated story: <package-relative story path>`. Keep both references synchronized on moves or renames.
7. Use accessible queries by role, label, or visible text. Use CSS selectors only when the rendered visualization
   has no appropriate accessible query, and derive those selectors from the implementation rather than guessing.
8. Use shared helpers from `@cdc/core/helpers/testing`, including `waitForEditor`, `openAccordion`,
   `performAndAssert`, and `assertVisualizationRendered` when applicable.
9. Assert the expected starting state before acting. After every meaningful QA step—including configuration, hover,
   keyboard, focus, tooltip, and download interactions—assert its specific visible, functional, or accessibility
   outcome. Checking only an editor control's value is insufficient.
10. Use deterministic local fixture data. Prefer an existing package fixture. For upload behavior, construct a browser
   `File` or use a repository fixture; never depend on a QA engineer's machine-specific path. Mock an unavoidable
   external response at the test boundary rather than calling the live network.
11. Give every story isolated state. Clone mutable configurations and fixture data so the play function cannot mutate
   imported objects or make sibling stories order-dependent.
12. For viewport-sensitive scripts, confirm that the repository's current Storybook runner can enforce the requested
    browser or preview dimensions. If it cannot, report the unsupported requirement and stop rather than substituting
    canvas dimensions or claiming deterministic viewport coverage.
13. Verify the exact exported fields, reconstruction path, and rendered output after reload when the script requires
    persistence; an in-memory remount is not a substitute unless that is the specified persistence mechanism.
14. Keep focused editor-control coverage organized by accordion section. Use a multi-section workflow story only
    when the complete sequence is itself the regression risk; do not duplicate lower-level coverage unnecessarily.
15. Fail loudly if required controls or outputs are missing. Do not use conditional early returns, arbitrary sleeps,
    custom polling, generic DOM-change assertions, or brittle selectors copied from a Playwright recording.
16. Check the browser console during exploration and the targeted runner output. Treat unexplained JavaScript errors,
    unhandled rejections, and console errors as failures; add a focused assertion when the regression specifically
    concerns error logging.
17. Run only the targeted story file using the exact repository command shape:
    `yarn test-storybook:quick packages/.../_stories/<file>.stories.<js|jsx|ts|tsx>`
    This executes all eligible stories in the file. Confirm from runner output that the new exported story was
    collected, distinguish new-story failures from sibling failures, and do not run full suites unless explicitly
    requested.

Completion criteria

- The QA workflow has isolated, deterministic setup and actions.
- The canonical script is saved under `docs/qa/regression-scripts/`, and the test appears under the top-level
  Storybook `Regression Tests` group with its own regression entry.
- The starting state, every checkpoint, every accessibility requirement, and every final acceptance criterion has a
  specific assertion against observable behavior or persisted configuration.
- When behavior already matches the script, the new story is collected and the targeted story file passes without
  unexplained errors.
- When the script reproduces a current defect, report the run as `BLOCKED — defect reproduced`; do not claim the
  regression test is complete or change production behavior without authorization.
- Screenshots may be captured for diagnosis, but they are not the pass/fail oracle and no image baseline is added.

Final report

Return:
- regression ID and result: `PASS`, `FAIL — test implementation`, or `BLOCKED — defect reproduced`;
- story file, exported symbol, and visible Storybook name;
- a short mapping from QA checkpoints to implemented assertions;
- the exact targeted command, collection evidence for the new export, and its result;
- deviations from the supplied steps and why they were necessary;
- failure evidence and likely cause, if unsuccessful;
- remaining coverage gaps, or `None`.

<qa_regression_script>
PASTE THE COMPLETED QA REGRESSION SCRIPT HERE
</qa_regression_script>
```

## Expected Result

The agent should leave behind a maintainable Storybook `play` test and a concise execution report. Playwright helps
the agent observe and debug the real browser workflow; the committed story remains the repeatable CI regression test.
