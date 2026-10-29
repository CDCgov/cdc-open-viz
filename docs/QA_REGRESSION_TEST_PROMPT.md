# QA Regression Test Prompt

Use this prompt to convert a completed
[`QA_REGRESSION_SCRIPT_TEMPLATE.md`](./QA_REGRESSION_SCRIPT_TEMPLATE.md) script into a durable Storybook regression
test. Replace the content between the input markers; do not rewrite the instructions for individual tests.

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
4. Create or update a Storybook `play` test under the affected package's `_stories` directory. Prefer extending a
   focused existing story file over creating overlapping coverage. Do not add the regression to a
   `*.smoke.stories.*` file because quick mode excludes those files.
5. Use accessible queries by role, label, or visible text. Use CSS selectors only when the rendered visualization
   has no appropriate accessible query, and derive those selectors from the implementation rather than guessing.
6. Use shared helpers from `@cdc/core/helpers/testing`, including `waitForEditor`, `openAccordion`,
   `performAndAssert`, and `assertVisualizationRendered` when applicable.
7. Assert the expected starting state before acting. After every meaningful QA step—including configuration, hover,
   keyboard, focus, tooltip, and download interactions—assert its specific visible, functional, or accessibility
   outcome. Checking only an editor control's value is insufficient.
8. Use deterministic local fixture data. Prefer an existing package fixture. For upload behavior, construct a browser
   `File` or use a repository fixture; never depend on a QA engineer's machine-specific path. Mock an unavoidable
   external response at the test boundary rather than calling the live network.
9. Give every story isolated state. Clone mutable configurations and fixture data so the play function cannot mutate
   imported objects or make sibling stories order-dependent.
10. Verify the exact exported fields, reconstruction path, and rendered output after reload when the script requires
    persistence; an in-memory remount is not a substitute unless that is the specified persistence mechanism.
11. Keep focused editor-control coverage organized by accordion section. Use a multi-section workflow story only
    when the complete sequence is itself the regression risk; do not duplicate lower-level coverage unnecessarily.
12. Fail loudly if required controls or outputs are missing. Do not use conditional early returns, arbitrary sleeps,
    custom polling, generic DOM-change assertions, or brittle selectors copied from a Playwright recording.
13. Check the browser console during exploration and the targeted runner output. Treat unexplained JavaScript errors,
    unhandled rejections, and console errors as failures; add a focused assertion when the regression specifically
    concerns error logging.
14. Run only the targeted story file using the exact repository command shape:
    `yarn test-storybook:quick packages/.../_stories/<file>.stories.<js|jsx|ts|tsx>`
    This executes all eligible stories in the file. Confirm from runner output that the new exported story was
    collected, distinguish new-story failures from sibling failures, and do not run full suites unless explicitly
    requested.

Completion criteria

- The QA workflow has isolated, deterministic setup and actions.
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
- story file and exported story name;
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
