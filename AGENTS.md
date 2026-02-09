# AI Agent Instructions

This file helps AI coding assistants understand how to work with this repository. It serves as an index to context documents that provide deeper knowledge for specific areas of the codebase.

## Context Documents

Before working on a specific area, read the relevant context document from the `docs/` directory:

| Document                         | When to Use                                                                                                                                                    |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/TESTING_BEST_PRACTICES.md` | Writing or reviewing editor interaction tests. Covers the `performAndAssert` pattern, testing helpers, and common pitfalls to avoid.                           |
| `docs/DASHBOARD_FILTERS_FLOW.md` | Working on dashboard filtering, data flow, or filter-related bugs. Contains flow diagrams, data transformation pipelines, and refactoring notes.               |
| `docs/PACKAGE_DEPENDENCIES.md`   | Adding imports between packages or understanding the monorepo architecture. Explains the allowed dependency hierarchy (core → visualizations → orchestrators). |
| `docs/PALETTE_MIGRATION.md`      | Working with color palettes or the palette selection system. Covers the v1 → v2 migration, helper functions, and configuration structure.                      |
| `docs/COVE_EVENTS.md`            | Adding analytics events or working with the metrics system. Documents the event format, available event types, and usage patterns.                             |

## Creating New Context Documents

When you complete work on a substantial feature or complex system, **prompt the user** to consider creating a new context document if:

- The feature involves non-obvious data flow or state management
- There are important patterns or conventions that future developers should follow
- The implementation has gotchas, edge cases, or decisions that aren't self-evident from the code
- Multiple files or packages interact in ways that would take time to rediscover

Suggest a document name and brief outline. Context documents are not user documentation—they're notes for developers (human or AI) who will work on this area again.
