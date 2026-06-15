---
name: react-doctor
description: Run React Doctor against a path and write a single markdown checklist grouped by rule type. Use this skill whenever the user wants to scan and review React issues, run react doctor, or get a prioritized list of React problems ready for fixing.
---

# React Doctor

## Workflow

1. Extract the target path from the user's message. If no path is provided, default to `packages/map`.
2. Derive the base filename by replacing `/` with `-` in the path (e.g. `packages/map` → `packages-map`).
3. Create the output directory if it doesn't exist:

```bash
mkdir -p _react-doctor/output
```

4. Run React Doctor and capture output in memory only — do not save the raw scan to disk:

```bash
if command -v react-doctor &> /dev/null; then
  react-doctor <PATH>
else
  npx react-doctor@latest <PATH>
fi
```

5. Parse all issues from the output.
6. Group issues by rule type (e.g. `react/jsx-key`, `react-hooks/exhaustive-deps`). Within each rule group, sort by ease of fixing: quick fixes first, involved last.
7. Write the checklist to `_react-doctor/output/<BASENAME>-review.md`:

```markdown
# React Doctor Review — packages/map

## react/jsx-key
> Missing `key` prop in list renders — mechanical fix, no logic impact
- [ ] `src/components/MapLayer.jsx:67` — Missing `key` prop in list render
- [ ] `src/components/Legend.jsx:34` — Missing `key` prop in list render

## react-hooks/exhaustive-deps
> Missing or incorrect hook dependency arrays — may require reasoning about effect scope
- [ ] `src/components/Map.jsx:42` — useEffect missing dependency: `data`

## react-hooks/rules-of-hooks
> Hook usage violations — touch component logic, review carefully
- [ ] `src/components/Legend.jsx:18` — Hook called conditionally

---
X issues across Y rule types.
```

8. Tell the user the review file has been written to `_react-doctor/output/<BASENAME>-review.md`.
9. Tell the user to check off issues in the review file, then run the `react-doctor-fix` skill to work through them one by one.

Do not suggest or provide any fixes at this stage. Do not create any other files.
