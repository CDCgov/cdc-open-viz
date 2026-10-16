# Developer Wiki

<details>
<summary>Git Workflow</summary>

- All of this should be included in our [contributing.md](./../../CONTRIBUTING.md)
- Clone the repository if you do not already have a local copy

```bash
# Download the repository using SSH
git clone git@github.com:CDCgov/cdc-open-viz.git
# Move into the cloned repository
cd cdc-open-viz
```

- Branch from dev for next release candidate
- Branch from test for current release patch

```bash
# Switch to the enhancement base branch
git checkout dev
# Switch to the patch base branch
git checkout test
```

- Create an enhancement or patch branch

```bash
# create fix branch
git checkout -b fix/DEV-12345
# Create an enhancement branch from the current base branch
git checkout -b enhancement/DEV-12345
```

- Complete your work on that branch and push

```bash
# add individual file(s)
git add <files>
# add all changes
git add .
# -n (no verify) will bypass checks if linting is blocking something
git commit -m "enhancement: this is a message" -n
```

- Open a [Pull Request](https://github.com/CDCgov/cdc-open-viz/pulls)

</details>

<details>
<summary>Linting and Commit Blocks</summary>

Use the root lint scripts before committing broad changes, or run the focused commands when you already know which check is failing.

```bash
yarn lint # Run ESLint against package source files
yarn lint:css # Run Stylelint against package CSS files
yarn lint:css:fix # Run Stylelint and apply supported CSS fixes
```

The pre-commit hook runs staged-file checks through Husky:

```bash
react-doctor --staged --blocking warning # Inspect staged React Doctor warnings from the pre-commit hook
react-doctor rules list # Show current React Doctor rule categories and severities
npx lint-staged --verbose # Run the same staged lint and format tasks used during commit
```

Rules checked by the local linting setup:

| Tool | Files | Rules checked |
| --- | --- | --- |
| ESLint | `./packages/*/src/**/*.{js,jsx,ts,tsx}` | Blocks `console` except `console.error` and `console.warn`; blocks `debugger`; enforces React Hooks rules from `plugin:react-hooks/recommended`; `react-hooks/exhaustive-deps` is disabled. |
| Stylelint | `packages/**/*.css` | Enforces alphabetical CSS property order with `order/properties-alphabetical-order`; ignores build output, `node_modules`, examples, and dev templates. |
| Prettier | Staged JS, JSX, TS, TSX, CSS, and SCSS files matched by `lint-staged` | Formats with no semicolons, single quotes, JSX single quotes, spaces instead of tabs, no trailing commas, and 120-character print width. |
| React Doctor | Staged files during pre-commit | Uses React Doctor's default staged rules at `--blocking warning`; current categories include accessibility, bugs, maintainability, performance, and security. Run `react-doctor rules list` for the full effective rule list. |

Rules commonly surfaced by React Doctor in this repo include missing JSX keys, full lodash imports, uncleaned effects, state synced from props in effects, mutable values in effect dependencies, random keys, hook usage violations, labels without associated controls, ambiguous link text, missing button types, controlled inputs without `onChange`, click handlers without keyboard handlers, non-passive scroll listeners, and controls without accessible labels.

Common commit blocks:

1. ESLint errors in staged JS, JSX, TS, or TSX files.
2. Stylelint errors in staged CSS files.
3. Prettier rewrites from `lint-staged` that leave files changed after the commit attempt.
4. React Doctor staged warnings. These are reported by the hook as non-blocking, but should still be reviewed before pushing.

If the commit hook changes files, review the diff and stage the updated files before committing again:

```bash
git diff # Review files changed by lint-staged or manual fixes
git add <files> # Stage the updated files before retrying the commit
git commit -m "enhancement: this is a message" # Retry the commit after resolving hook output
```

Use `git commit -n` only when a hook is blocking urgent work and the issue will be fixed immediately afterward.

</details>

<details>
<summary>Testing</summary>

Default to targeted tests for the files or components you changed. Use quick suites when a change crosses packages or shared behavior. Normal/full suites are available, but should only be run when explicitly needed.

- Unit tests
  - Run through package test scripts with Lerna.
  - Targeted tests use package-relative paths after `--scope`.
  - Quick mode sets `COVE_QUICK_TESTS=1` and skips slower standalone build checks.
  - Normal mode runs the full unit workflow without quick-test shortcuts.

  ```bash
  yarn test-unit:quick -- --scope @cdc/<package-name> -- src/.../<file>.test.<js|jsx|ts|tsx> # Run one package-relative unit test file
  yarn test-unit:quick # Run the quick unit suite with COVE_QUICK_TESTS=1
  yarn test-unit # Run the full unit suite
  ```

- Storybook and Playwright tests
  - Run through Vitest's `storybook` project.
  - Use the Storybook Vitest addon with a Playwright-backed headless Chromium browser.
  - Quick mode sets `COVE_QUICK_TESTS=1` and excludes `*.smoke.stories.*` files.
  - Normal mode runs the full Storybook test project, including smoke stories.

  ```bash
  yarn test-storybook:quick packages/.../_stories/<file>.stories.<js|jsx|ts|tsx> # Run one Storybook story test file
  yarn test-storybook:quick # Run the quick Storybook suite and skip *.smoke.stories.* files
  yarn test-storybook # Run the full Storybook test suite
  ```

- Browser debugging
  - Start Storybook when you need to inspect behavior in the browser.
  - The Storybook MCP server is available at `http://localhost:6006/mcp` only while Storybook is running.
  - The optional Playwright MCP server is configured in `.vscode/mcp.json` for browser-driven debugging from chat.

  ```bash
  yarn storybook # Start Storybook on http://localhost:6006
  yarn test-storybook:quick packages/chart/src/_stories/ChartEditor.stories.tsx # Re-run a specific browser-backed story test
  ```

- Backstop visual regression tests (experimental at the moment)
  - Backstop compares Storybook iframe snapshots from `backstop.json`.
  - Run Backstop only when explicitly checking or updating visual baselines.
  - Start Storybook before running Backstop commands.

  ```bash
  yarn storybook # Serve the Storybook iframe URLs used by Backstop
  yarn backstop:reference # Capture or refresh baseline screenshots
  yarn backstop:test # Compare current screenshots against the baseline
  yarn backstop:open # Open the latest Backstop HTML report
  yarn backstop:approve # Promote the latest passing changes to the baseline after review
  ```

Testing notes:

1. Use package-relative test paths after `--scope` for targeted unit tests.
2. Use shared Storybook helpers from `@cdc/core/helpers/testing`, such as `performAndAssert`, `waitForEditor`, `openAccordion`, and `assertVisualizationRendered`.
3. Assert on visualization output, not only editor control state.
4. Treat Backstop approvals as intentional visual baseline changes; review the report before running `yarn backstop:approve`.

</details>

<details>
<summary>Knip</summary>

Use Knip to find unused files, dependencies, exports, and types before cleanup work. Treat the output as a review queue: confirm each finding before deleting code or removing packages, because dynamic imports, package entrypoints, and config-driven usage can need local judgment.

Knip configuration lives in `knip.json`. The root scripts expose focused scans:

```bash
yarn knip # Run the full unused-code and dependency scan
yarn knip:production # Run Knip in production mode to reduce development-only noise
yarn knip:unused-deps # Report unused dependencies and devDependencies
yarn knip:unused-exports # Report unused exports and types
yarn knip:unused-files # Report unused source files
```

Recommended workflow:

1. Pick the narrowest Knip command for the cleanup you are doing.
2. Review each finding against package entrypoints, Storybook stories, tests, examples, and any config-driven imports.
3. Remove or fix confirmed issues in small batches.
4. Re-run the same Knip command to verify the findings are resolved.
5. Run relevant targeted tests, or quick suites if the cleanup touches shared code:

   ```bash
   yarn test-unit:quick # Run the quick unit test suite
   yarn test-storybook:quick # Run the quick Storybook interaction test suite
   ```

</details>

<details>
<summary>Package Management</summary>

Use syncpack as a consistency tool, not as the thing that decides what to upgrade. In this repo, the scripts are:

```bash
yarn sync:check # Report dependency version mismatches across package manifests
yarn sync:fix # Align mismatched dependency versions using syncpack rules
yarn sync:format # Sort and format package manifests using syncpack rules
```

Recommended workflow:

1. Decide the target version manually, from release notes / audit finding / compatibility need.
2. Update the relevant `package.json` entries:
   - Root dev/build tooling: root `package.json`
   - Package-specific runtime dependency: that package's `package.json`
   - Shared dependency used in many packages: update one or more manifests intentionally, then let syncpack align them
3. Run:

   ```bash
   yarn install # Update node_modules and yarn.lock after manifest changes
   yarn sync:check # Confirm dependency versions are consistent
   yarn sync:fix # Fix dependency version mismatches when syncpack can resolve them
   yarn sync:format # Normalize package.json ordering and formatting
   ```

4. Run targeted tests first, or quick suites if the dependency is broad:

   ```bash
   yarn test-unit:quick # Run the quick unit test suite
   yarn test-storybook:quick # Run the quick Storybook interaction test suite
   ```

For audit-driven upgrades, start with:

```bash
yarn audit --groups dependencies # Scan production dependencies for known vulnerabilities
```

</details>

<details>
<summary>Publishing to npm and GitHub Releases</summary>

Use Lerna publishing only when the release is explicitly approved. This repo uses independent package versions, so Lerna creates package-specific tags such as `@cdc/chart@4.26.7` rather than a single `v4.26.7` tag.

- Preflight release checks
  - Publish from the release branch after the release changes have been merged.
  - Confirm npm authentication and permissions before starting the interactive publish flow.
  - Run the relevant validation commands before publishing.

  ```bash
  git checkout main # Switch to the release branch used for publishing
  git pull origin main # Make sure the local release branch is current
  npm login # Sign in to npm before starting the publish flow
  npm whoami # Confirm you are authenticated to npm
  yarn sync:check # Confirm package manifests are version-consistent
  yarn test-unit:quick # Run the quick unit test suite
  yarn test-storybook:quick # Run the quick Storybook interaction test suite
  ```

- Publish packages to npm with Lerna
  - `lerna.json` is configured with `"version": "independent"`.
  - `npx lerna publish` detects changed packages, prompts for versions, updates package manifests, creates git tags, and publishes changed packages to npm.
  - The root `publish` script delegates to the same command.

  ```bash
  npx lerna changed # Preview packages Lerna sees as changed since the last publish tags
  npx lerna publish # Version changed packages, create git tags, and publish to npm
  yarn run publish # Run the repo publish script, which delegates to npx lerna publish
  ```

- Recover from a failed Lerna publish
  - Use this only when Lerna already versioned packages but npm publishing failed partway through.
  - Confirm which package versions are already on npm before retrying.
  - This command attempts `npm publish` inside each package and exits cleanly for packages that fail, including packages already published.
  - Review the output carefully, because `|| exit 0` prevents one failed package from stopping the rest.

  ```bash
  lerna exec -- "npm publish || exit 0" # Retry npm publishing package-by-package without stopping on already-published packages
  ```

- Verify and push tags
  - Lerna publish should create package tags for the packages it publishes.
  - If tags were not pushed by the publish flow, push the release commit and tags manually.

  ```bash
  git tag --list '@cdc/*@4.26.7' # List package tags for a specific published version
  git push origin main # Push the release commit if it was not already pushed
  git push origin '@cdc/chart@4.26.7' # Push one package release tag if needed
  ```

- Create a GitHub release from the tag
  - GitHub releases are tied to one git tag.
  - If multiple packages were published, create a release for the package tag that should own the release notes, or create separate releases for each package tag.
  - Use the GitHub UI or the GitHub CLI.

  ```bash
  gh release create '@cdc/chart@4.26.7' --title '@cdc/chart@4.26.7' --notes 'Release notes for @cdc/chart 4.26.7' # Create a GitHub release from the package tag
  gh release view '@cdc/chart@4.26.7' --web # Open the created GitHub release in the browser
  ```

</details>

<details>
<summary>Resolving a yarn audit scan</summary>

All of the yarn production dependencies can be resolved manually or with an agent [following this skills instructions](./../../.agents/skills/yarn-audit/SKILL.md).

</details>
