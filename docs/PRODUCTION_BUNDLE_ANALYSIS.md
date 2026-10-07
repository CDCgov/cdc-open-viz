# Production bundle analysis

Investigation snapshot: October 7, 2026. This document records how COVE code reaches CDC production pages, which JavaScript files those pages request, and the size opportunities identified so far. The measurements are a starting point for implementation and should be repeated after any build change.

## Build and measurement scope

The production path has two builds:

1. In this repository, `yarn build` runs the package builds through Lerna. Chart, map, dashboard, and other visualization packages use Vite library builds configured by [`packages/core/generateViteConfig.js`](../packages/core/generateViteConfig.js). These builds emit JavaScript with CSS injected at runtime. React and React DOM are external to these Vite builds.
2. `TemplatePackage/src/contrib/widgets/openVizWrapper` imports the built COVE packages through its wrapper and runs a production webpack build. Webpack emits `main.js`, shared numbered chunks, visualization chunks, and `ssi.html`; a separate step copies the embed files. The webpack output is what CDC pages load. A Vite size report alone therefore does not describe the delivered bundle or its chunk boundaries.

The local analysis used COVE revision `8171bc02d` and TemplatePackage `cove-updates` revision `a0eebe9488`. The production file hashes differ. The inspected production responses reported `Last-Modified: Wed, 30 Sep 2026 17:41:08 GMT`. Treat local build probes as directional estimates, not exact predictions for those deployed files.

The live sizes below are CDN `Content-Length` responses with `Content-Encoding: gzip`. They represent the JavaScript assets identified for each visualization page, assuming an uncached request for each asset. They exclude other CDC page assets, data requests, request overhead, and browser cache effects. Local probe sizes below were gzip level 9 measurements of emitted webpack files and are comparable *within* a probe, but do not necessarily match the CDN's compression.

## Production pages and assets

| Page | COVE JavaScript assets observed | Sum of compressed asset sizes |
| --- | --- | ---: |
| [Most impacted](https://www.cdc.gov/respiratory-viruses/data/most-impacted.html) | main, shared `653`, chart | **847,212 B** |
| [Illness severity](https://www.cdc.gov/respiratory-viruses/data/illness-severity.html) | main, shared `653`, chart, map, US topology | **1,566,393 B** |
| [Life satisfaction](https://www.cdc.gov/mental-health/about-data/life-satisfaction.html) | main, shared `653`, dashboard, waffle chart, data bite | **1,447,649 B** |

| Production asset | Gzip size |
| --- | ---: |
| [`main.js?0fa486f59737c8435dc8`](https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/main.js?0fa486f59737c8435dc8) | 143,619 B |
| [`653-4b054beb106457dafc6d.js`](https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/653-4b054beb106457dafc6d.js) | 43,168 B |
| [`chart-b7cb11b716793b4633ea.js`](https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/chart-b7cb11b716793b4633ea.js) | 660,425 B |
| [`map-7f5dc61dce20bb634529.js`](https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/map-7f5dc61dce20bb634529.js) | 635,350 B |
| [`us-topo-f33bd38df247cc1658c7.js`](https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/us-topo-f33bd38df247cc1658c7.js) | 83,831 B |
| [`dashboard-99251c0406d7dd27e096.js`](https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/dashboard-99251c0406d7dd27e096.js) | 924,179 B |
| [`waffle-chart-abfe79232bfc2dc4aec9.js`](https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/waffle-chart-abfe79232bfc2dc4aec9.js) | 164,180 B |
| [`data-bite-47278e282a00ff8cc81d.js`](https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/data-bite-47278e282a00ff8cc81d.js) | 172,503 B |

The life satisfaction page has dashboard configurations containing charts, filters, and tables, but no map child. It requests a dashboard chunk rather than separate chart and map chunks. This distinction matters because dashboard statically imports child renderers through [`VisualizationRow.tsx`](../packages/dashboard/src/components/VisualizationRow.tsx) and editor code; chart and map code can consequently be present inside the dashboard bundle even when a given dashboard does not render a map.

## How the candidates were measured

Webpack stats from an unmodified local production configuration gave 18 assets, 16 chunks, and 557 modules. For reference, its main/chart/map/dashboard emitted files measured 130,125 / 682,405 / 642,187 / 951,862 B gzip. The Vite chart/map/dashboard entry files were approximately 3.53 / 3.10 / 4.97 MB before webpack. Webpack sees each Vite entry largely as one input module, so its stats alone do not identify the source modules inside those entries.

Temporary Vite `generateBundle` reports supplied the inner module inventory; temporary webpack builds with replacements measured effects on final emitted files. These experiments changed only temporary build configurations and outputs. The replacements intentionally disabled functionality, so the measured savings are **upper bounds**, not ready-made fixes. Experiments overlap, can alter webpack's chunk graph, and must **not** be added together to forecast a total reduction.

## Ranked opportunities

Ranking reflects the inspected pages and measured final webpack output. Conditional assets are called out separately from initial page requests.

| Priority | Opportunity | Evidence and size signal | Main work needed |
| --- | --- | --- | --- |
| 1 | Load dashboard child renderers only when needed | Stubbing the map child in a local build reduced the dashboard chunk from **951,862 to 776,919 B gzip** (174,943 B). The inspected life satisfaction dashboards do not contain a map, yet the dashboard imports map code statically. | Split child renderer and editor imports without breaking dashboard composition, exports, or editor behavior. Rebuild through webpack and inspect actual page requests. |
| 2 | Isolate Vega code by runtime need | Replacing Vega and Vega-Lite in a chart probe reduced its chunk from **682,405 to 516,048 B gzip** (166,357 B). Vite reports showed approximately 961 KiB of rendered Vega package code in each chart, map, and dashboard entry before minification. | Trace real calls from [`CdcChartComponent.tsx`](../packages/chart/src/CdcChartComponent.tsx) into [`vegaConfig.ts`](../packages/core/helpers/vegaConfig.ts). Legacy data extraction actually creates a Vega view, so removal requires preserving that behavior or moving it behind a conditional load. |
| 3 | Defer editor code on public rendering paths | Replacing chart `EditorPanel` in a probe reduced the chart chunk from **682,405 to 554,025 B gzip** (128,380 B). Vite reports showed substantial editor code in chart, map, and dashboard entries. | Separate rendering and editing import paths, then verify editor entry, preview, and published visualization behavior. |
| 4 | Deduplicate React DOM and scheduler across the two builds | Aliasing their COVE copies to the wrapper's copies reduced total local emitted JavaScript from **6,326,592 to 6,283,964 B gzip** (42,628 B). A numbered shared chunk disappeared. | Establish one runtime copy in the real build configuration and test React behavior across visualization types. |
| 5 | Share identical Vite lazy modules across packages | Byte-identical topology and `html2canvas` modules are emitted at distinct paths and webpack retains multiple copies. A temporary canonicalization probe reduced the US topology chunk from **81,802 to 27,768 B gzip** (54,034 B) for a map page. | Give webpack a safe common identity for equivalent modules, then verify loading and caching across map/dashboard/editor paths. |
| 6 | Remove repeated injected CSS across visualization entries | Extracted local Vite CSS strings were about 252K chars for chart, 250K for map, and 398K for dashboard; chart/map shared about 207K chars of identical rule text by a simple rule split. The wrapper also loads core CSS. | Inspect final webpack CSS ownership and run a final-build extraction probe. Overlap in source strings is **not** a measured transfer saving. |
| 7 | Review broad Lodash imports and static map metadata | Vite reports included the full Lodash module (roughly 565 KiB before minification) in chart, map, and dashboard, with many root imports. Map also statically includes `supported-counties.json` (about 21,403 B gzip alone). | Trace used functions and map paths, then measure final webpack output before estimating benefit. |

The earlier top three candidates of Vega, editor code, and React DOM remain substantial. Including the dashboard page moves conditional dashboard child loading ahead of React DOM in the page-focused ranking.

### Conditional chunk duplication

Additional canonicalization probes found large savings for chunks loaded only by certain maps or interactions: county topology **692,431 → 230,418 B gzip** (462,013 B), regions topology **733,741 → 245,244 B** (488,497 B), world topology **167,725 → 55,932 B** (111,793 B), HSA mapping **38,095 → 12,802 B** (25,293 B), and `html2canvas` **225,609 → 45,289 B** (180,320 B). These are per-file local probes, not savings on the three sample pages. For example, the sample map page loads US topology, and `html2canvas` loads during export-related interaction. Priority should rise for these assets if traffic or field measurements show those paths are common.

## Next analysis and validation steps

1. Make one narrowly scoped candidate change at a time and run the complete Vite-then-webpack pipeline. Compare final asset manifests, compressed emitted sizes, and actual asset requests for chart, map, and dashboard pages.
2. Test relevant runtime paths as well as initial rendering: dashboard children of each type, editor entry, Vega-based legacy configurations, map geography changes, and export. Chunk savings are only useful if those paths continue to work.
3. Measure browser transfer and timing with cache state stated explicitly. The CDN size inventory above establishes asset sizes, but does not measure a user's full page load or repeat visit.
4. Recheck the deployment revision before treating a local result as a production forecast. Keep separate columns for source/Vite output, final webpack output, and production CDN assets; webpack can reorganize the Vite code substantially.

## Inspect the local production build in a browser

After running the full COVE → TemplatePackage build, restart the package's Vite development server so it registers the built-asset middleware. The local package pages accept `?bundle=production`:

- Editor with a chart example: `http://localhost:8080/?bundle=production&config=/examples/chart/default.json` when the editor server is on port 8080.
- Chart package: `http://localhost:3001/?bundle=production` when started with `yarn dev:chart`.
- Dev portal: `http://localhost:8080/?bundle=production` when started with `yarn dev:portal`; the portal passes `bundle=production` to its package iframe.

The same example picker, `config`, `editor`, and `preview` parameters remain available. In built mode, the page passes the selected example to the TemplatePackage wrapper, loads its production `main.js`, and serves its hashed lazy chunks from the local TemplatePackage `dist` directory at webpack's compiled public path. It does not import the Vite development renderer. The wrapper build is expected at the sibling `TemplatePackage/src/contrib/widgets/openVizWrapper/dist` directory; set `COVE_WRAPPER_DIST` to an absolute alternative path **before starting the Vite server** if your checkouts differ.

After each rebuild, reload the browser page. Check Network for `localhost` requests under `/TemplatePackage/contrib/widgets/openVizWrapper/dist/`, check the console for failed requests or runtime errors, and exercise relevant controls. The development page itself still comes from Vite; this mode verifies the visualization wrapper and its final webpack chunks. A production build must exist before using the mode. For size comparisons, measure the emitted webpack assets separately from the browser interaction check.
