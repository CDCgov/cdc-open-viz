# Public Documentation Workflow

Use this workflow when drafting public COVE documentation for feature branches that add or change user-facing COVE editor behavior. This usually means new editor controls, option values, labels, settings, or workflows that COVE users can interact with.

Public documentation is written for COVE editor users: somewhat technical, but not expected to understand package internals, config schemas, migrations, or rendering code. This workflow is not for internal implementation notes, developer-facing config docs, or architecture documentation.

## Goal

Produce a short copy-paste-ready markdown draft for the public documentation maintainer. Save the same draft locally as a backup in `.public-docs/<branch-name>.md`, and also print the full draft in the final response.

Do not mirror, cache, or check in public documentation pages. Fetch only the live public pages needed for the current branch.

## Workflow

1. Compare the current branch against `dev` by default.
2. Identify user-facing editor changes from the branch diff, especially editor controls, labels, options, stories, tests, config documentation, migrations, and context docs.
3. Use the URL index below to choose the likely public documentation page or pages.
4. Fetch the live public page before drafting so the new copy fits the existing page and avoids duplicating current content.
5. Draft only the new documentation text needed for the feature.
6. Save the draft to `.public-docs/<branch-name>.md`.
7. Print the full draft in the final response.

## Draft Format

Use this structure:

```md
# Public Documentation Draft

## <Public Documentation Page Title>
<page URL>

**<Editor option/control name>:** <Plain-language description for COVE users.>

- **<Option label>:** <What this option does.>
- **<Option label>:** <What this option does.>
```

Formatting rules:

- The title is always `# Public Documentation Draft`. Do not include the branch name in the title.
- Each new editor option or control starts with a bold label followed by a colon.
- Values for a select, radio group, mode picker, or similar option set are bullets.
- Each option bullet starts with the bold option label followed by a colon.
- Keep the copy short, public-facing, and editor-oriented.
- Do not include implementation notes, open questions, branch summaries, reviewed-page lists, or maintainer instructions unless the user explicitly asks.
- If more than one public page needs updates, repeat the page section for each page.

## URL Index

Use these pages as the first routing map for public documentation drafts. Fetch the live page before writing.

| Page | URL | Covers | Likely feature types |
| --- | --- | --- | --- |
| COVE Documentation Index | https://www.cdc.gov/cove/documentation/index.html | Main documentation index | Use when no page below is clearly right. |
| Type Panel | https://www.cdc.gov/cove/documentation/type-panel.html | Visualization type and chart/map type selection | New visualization types, subtype choices, type-specific setup options. |
| Data Panel | https://www.cdc.gov/cove/documentation/data-panel.html | Data source, columns, data functions, component data setup | New data controls, data transforms, metric inputs, dataset behavior. |
| Data Format & Segments Panels | https://www.cdc.gov/cove/documentation/data-format-segments-panel.html | Data format and segmentation controls | Data format options, segment definitions, series grouping setup. |
| Data Series Panel | https://www.cdc.gov/cove/documentation/data-series-panel.html | Chart data series setup | Series controls, dynamic series, labels, series-level settings. |
| Measures Panel | https://www.cdc.gov/cove/documentation/measures-panel.html | Measure configuration | Measure values, calculated or displayed measures, measure-specific controls. |
| General Panel | https://www.cdc.gov/cove/documentation/general-panel.html | General visualization settings | Global visualization title, type, and common setup controls. |
| Visual Panel - Charts & Maps | https://www.cdc.gov/cove/documentation/visual-panel-charts-maps.html | Chart and map visual appearance controls | Style controls that are not more specifically covered elsewhere. |
| Visual Panel - Specialized Styles | https://www.cdc.gov/cove/documentation/visual-panel-miscellaneous-styles.html | Specialized visual styles | Data-driven colors, component-specific styles, uncommon visual controls. |
| Left Value Axis Panel | https://www.cdc.gov/cove/documentation/left-value-axis-panel.html | Chart left/value axis controls | Y-axis labels, value-axis domain, min/max, padding, ticks, gridlines, axis behavior. |
| Date / Category Axis Panel | https://www.cdc.gov/cove/documentation/date-category-axis-panel.html | Chart date/category axis controls | X-axis labels, categories, date display, tick behavior, category axis options. |
| Right Value Axis Panel | https://www.cdc.gov/cove/documentation/right-value-axis-panel.html | Combo chart right axis controls | Right-axis min/max, labels, ticks, dual-axis behavior. |
| Columns Panel - Charts | https://www.cdc.gov/cove/documentation/columns-panel-charts.html | Chart column mapping | Source column selection, chart column roles, column-driven chart settings. |
| Columns Panel - Maps | https://www.cdc.gov/cove/documentation/columns-panel-maps.html | Map column mapping | Geography columns, value columns, map data fields, tooltip/table column setup. |
| Regions Panel | https://www.cdc.gov/cove/documentation/regions-panel.html | Map region setup | Region selection, geography level, map boundary behavior. |
| Legend Panel - Charts | https://www.cdc.gov/cove/documentation/legend-panel-charts.html | Chart legend controls | Legend layout, labels, placement, behavior, series display controls. |
| Legend Panel - Maps | https://www.cdc.gov/cove/documentation/legend-panel-maps.html | Map legend controls | Map legend bins, labels, placement, color scale behavior. |
| Filters Panel | https://www.cdc.gov/cove/documentation/filters-panel.html | Visualization filter controls | Filter setup, filter type, filter visibility, filter option behavior. |
| Sankey Settings Panel | https://www.cdc.gov/cove/documentation/sankey-settings-panel.html | Sankey chart settings | Sankey node/link settings, flow behavior, Sankey-specific controls. |
| Image Panel | https://www.cdc.gov/cove/documentation/image-panel.html | Image visualization controls | Image source, alt text, image display behavior. |
| Custom Map Layers Panel | https://www.cdc.gov/cove/documentation/custom-map-layers-panel.html | Custom map layers | Additional map layers, layer styling, map overlay settings. |
| Pattern Settings Panel | https://www.cdc.gov/cove/documentation/pattern-settings-panel.html | Pattern settings | Pattern fills, pattern display, accessibility-related visual distinctions. |
| Interactivity Panel | https://www.cdc.gov/cove/documentation/interactivity-panel.html | Interactive visualization behavior | Tooltips, hover/click behavior, interaction settings. |
| Small Multiples - Charts & Maps | https://www.cdc.gov/cove/documentation/small-multiples-charts-maps.html | Small multiples controls | Small-multiple grouping, layout, shared chart/map behavior. |
| Data Table Panel | https://www.cdc.gov/cove/documentation/data-table-panel.html | Supporting data table controls | Data table visibility, table columns, downloads, table presentation. |
| Text Annotations Panel | https://www.cdc.gov/cove/documentation/text-annotations-panel.html | Chart text annotations | Annotation placement, anchoring, series-linked annotations, annotation styling. |
| Markup Variable Panel | https://www.cdc.gov/cove/documentation/markup-variable-panel-new.html | Dashboard markup variables | New variable sources, data-driven variables, markup tags, icon or text variable controls. |
| Dashboards Index | https://www.cdc.gov/cove/dashboards/index.html | Dashboard documentation index | Use when a dashboard feature does not clearly belong on a page below. |
| Building Dashboards | https://www.cdc.gov/cove/dashboards/building-dashboards.html | Dashboard authoring concepts | Dashboard rows, components, dashboard-level behavior, conditions, filters, layout interactions. |
| Dashboard-Level Filtering | https://www.cdc.gov/cove/dashboards/dashboard-level-filtering.html | Dashboard shared filters | Dashboard filter setup, shared filter behavior, cross-component filtering. |
| Dynamic Footnotes | https://www.cdc.gov/cove/dashboards/dynamic-footnotes.html | Dashboard dynamic footnotes | Footnote variables, dashboard footnote behavior, data-driven footnote updates. |
| Filtered Text Component | https://www.cdc.gov/cove/dashboards/filtered-text-component.html | Dashboard filtered text | Filtered text behavior, text components tied to dashboard data or filters. |
| Markup Include Component | https://www.cdc.gov/cove/dashboards/markup-include-component.html | Dashboard markup include component | Markup include behavior, embedded markup, markup-driven dashboard content. |
| Multi-Visualization | https://www.cdc.gov/cove/dashboards/multi-visualization.html | Dashboard multi-visualization rows | Multiple visualizations in one row, row layout, multi-viz behavior. |
| Table Component | https://www.cdc.gov/cove/dashboards/table-component.html | Dashboard table component | Dashboard table setup, table component behavior, table-specific controls. |

If a relevant page is missing from this index, use the COVE Documentation Index to find the best page, then update this index as part of the same workflow improvement.
