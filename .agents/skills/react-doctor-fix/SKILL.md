---
name: react-doctor-fix
description: Read a React Doctor review file, let the user choose a rule type to work on, then apply fixes sequentially with confirmation at each step. Use this skill whenever the user wants to fix React Doctor issues, work through a review file, or asks to resolve a specific rule type or section of react doctor output.
---

# React Doctor Fix

## Workflow

1. Extract the target path from the user's message. If no path is provided, default to `packages/map`.
2. Derive the review filename by replacing `/` with `-` in the path (e.g. `packages/map` → `_react-doctor/output/packages-map-review.md`).
3. Read the review file. If it doesn't exist, tell the user to run the `react-doctor` skill first.
4. List the available rule type sections found in the file and ask the user which one they want to work on:

```
Available rule types:
  1. react/jsx-key (2 issues)
  2. react-hooks/exhaustive-deps (2 issues)
  3. react-hooks/rules-of-hooks (1 issue)

Which would you like to work on?
```

5. Once the user selects a section, work through each issue in that section one at a time:
   a. State the issue clearly — file path, line number, and what's wrong.
   b. Show the fix using `// Before` / `// After` comments.
   c. Apply the fix to the file.
   d. Mark the issue as done in the review file: `- [x]`
   e. Ask the user to confirm before moving to the next issue.

6. When all issues in the section are resolved, ask if the user wants to move on to another rule type.

## Constraints

- Only fix what is listed in the review file.
- Preserve existing code style, naming conventions, and imports.
- If a fix requires a new dependency, flag it with a `// NOTE:` comment and do not apply it automatically.
- If an issue is ambiguous or the fix could have side effects, explain the concern and ask before proceeding.
- Keep the review file up to date as issues are resolved.
