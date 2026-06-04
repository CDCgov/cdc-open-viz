---
name: cove-public-docs
description: Draft public COVE documentation for user-facing feature branches by comparing against dev, fetching relevant live public docs pages, and producing a concise copy-paste markdown draft in .public-docs.
metadata:
  short-description: Draft public COVE docs
---

# COVE Public Docs

Use this skill when the user asks to draft, generate, or prepare public COVE documentation for feature work in this repository.

Follow `docs/PUBLIC_DOCUMENTATION_WORKFLOW.md`. That tracked document is the source of truth for the workflow, URL index, output location, and draft format.

Key reminders:

- Compare feature branches against `dev` unless the user specifies another base.
- Fetch relevant live public documentation pages before drafting.
- Save the draft to `.public-docs/<branch-name>.md`.
- Also print the complete draft in the final response.
- Keep the draft short and copy-paste-ready.
- Describe current editor behavior directly; avoid migration, legacy, deprecation, replacement-history framing, and transition phrases like `now` or `no longer` in public copy.
