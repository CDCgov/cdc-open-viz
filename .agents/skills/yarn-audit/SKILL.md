---
name: yarn-audit
description: Resolve `yarn audit --groups dependencies` findings in Yarn workspaces, especially when dependency versions drift across packages or a transitive vulnerability requires a targeted upgrade or `resolutions` entry. Use when Codex needs to investigate or fix dependency audit issues and should use `syncpack` when version mismatches are the real problem.
---

# Yarn Audit

Resolve dependency audit findings with the smallest safe change.

## Workflow

1. Reproduce the dependency-only audit issue with `yarn audit --groups dependencies`.
2. Identify the affected package names, severities, advisory paths, and whether the vulnerable package is direct or transitive.
3. Check whether the problem is actually workspace version drift before changing versions:
   - Run `yarn sync:check`.
   - Search manifests with `rg -n '"<package-name>"' package.json packages/*/package.json`.
4. Choose the least invasive fix:
   - If the same dependency or devDependency has inconsistent ranges across workspace manifests, use `syncpack` first.
   - If a direct dependency is vulnerable, bump the direct dependency to the minimum safe range.
   - If the vulnerable package is transitive and the parent can be bumped safely, upgrade the parent package instead of adding a broad override.
   - If the vulnerable package is transitive and no safe parent bump is available, add or tighten a root `resolutions` entry for the minimum fixed version.
5. Regenerate the lockfile with `yarn install` after manifest changes.
6. Re-run `yarn audit --groups dependencies`.
7. Report what changed, what advisory path was addressed, and any remaining findings.

## Use Syncpack When Applicable

Treat `syncpack` as the first fix when audit work reveals monorepo drift rather than a true package-selection problem.

Use it when:
- Multiple workspaces declare the same package with different semver ranges and the audit fix needs them aligned.
- A package upgrade was applied in one workspace but other workspaces still pin an older vulnerable range.
- The repo already exposes `yarn sync:check` and `yarn sync:fix`, which this repository does.

Do not use it when:
- The issue is isolated to one package by design.
- The fix requires changing a root `resolutions` entry for a transitive dependency.
- The audit finding is caused only by the lockfile selecting an old transitive version while manifest ranges are already aligned.

Preferred commands:

```bash
yarn sync:check
yarn sync:fix
yarn install
yarn audit --groups dependencies
```

After `yarn sync:fix`, inspect the manifest diffs before keeping them. If it aligned unrelated packages or widened ranges unnecessarily, adjust the affected `package.json` files manually instead of accepting the full rewrite blindly.

## Fix Selection Rules

Prefer this order:

1. Upgrade an affected direct dependency.
2. Upgrade the parent package that pulls the vulnerable transitive dependency.
3. Add or tighten a root `resolutions` entry.
4. Remove the dependency if it is unused and that removal is clearly safe.

Avoid:
- Editing `yarn.lock` by hand.
- Adding a `resolutions` override when a normal direct upgrade solves the issue.
- Running broad update commands without checking package ownership and blast radius.

## Investigation Aids

Use these commands as needed:

```bash
yarn why <package-name>
rg -n '"<package-name>"' package.json packages/*/package.json
yarn sync:check
```

If the advisory output is noisy, summarize each unique vulnerable package once and map it to the concrete fix path:
- Direct dependency bump
- Parent dependency bump
- Root `resolutions` override
- Workspace version alignment via `syncpack`

## Validation

Minimum validation:

```bash
yarn audit --groups dependencies
```

If the fix touched package manifests in only one package, run targeted tests for the affected package when practical. If the fix changed shared dependency versions or root resolutions, run the smallest relevant quick test suite that exercises impacted packages.

## Output Expectations

When using this skill:
- State whether the vulnerable package was direct or transitive.
- State whether `syncpack` was applicable and why.
- Name the exact manifest or root resolution changes made.
- Call out any remaining audit findings that still require follow-up.
