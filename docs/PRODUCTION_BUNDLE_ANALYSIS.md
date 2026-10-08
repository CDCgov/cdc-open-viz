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

Numbered priorities reflect the inspected pages and measured final webpack output. The unmeasured follow-up is listed beside the related dashboard work. Conditional assets are called out separately from initial page requests.

| Priority | Opportunity | Evidence and size signal | Main work needed |
| --- | --- | --- | --- |
| 1 (implemented) | Load dashboard child renderers only when needed | Stubbing the map child in an earlier local build reduced the dashboard chunk from **951,862 to 776,919 B gzip** (174,943 B). The inspected life satisfaction dashboards do not contain a map, yet the dashboard previously imported map code statically. | Child renderers now load by type; see the measured final build and browser checks in Optimization progress below. |
| Follow-up (unmeasured) | Share one chart renderer file between standalone charts and dashboard charts | The completed lazy-loading change makes dashboards request chart code conditionally, but standalone charts still load a separate `chart-*.js` file while dashboard charts load numbered chunks. Separate COVE Vite library builds incorporate `CdcChartComponent` into both outputs, so the browser cannot reuse one chart renderer file across those paths. No final-build saving has been measured for sharing it. | Prototype a common production build with chart and dashboard entries, or a separately built renderer artifact imported by both. Preserve standalone package builds and dashboard-only conditional loading. Compare final webpack requests, gzip bytes, caching, CSS, exports, and standalone/dashboard/editor behavior. |
| 2 | Isolate Vega code by runtime need | Replacing Vega and Vega-Lite in a chart probe reduced its chunk from **682,405 to 516,048 B gzip** (166,357 B). Vite reports showed approximately 961 KiB of rendered Vega package code in each chart, map, and dashboard entry before minification. | Trace real calls from [`CdcChartComponent.tsx`](../packages/chart/src/CdcChartComponent.tsx) into [`vegaConfig.ts`](../packages/core/helpers/vegaConfig.ts). Legacy data extraction actually creates a Vega view, so removal requires preserving that behavior or moving it behind a conditional load. |
| 3 | Defer editor code on public rendering paths | Replacing chart `EditorPanel` in a probe reduced the chart chunk from **682,405 to 554,025 B gzip** (128,380 B). Vite reports showed substantial editor code in chart, map, and dashboard entries. | Separate rendering and editing import paths, then verify editor entry, preview, and published visualization behavior. |
| 4 (implemented) | Deduplicate React DOM and scheduler across the two builds | Aliasing their COVE copies to the wrapper's copies reduced total local emitted JavaScript from **6,327,890 to 6,285,286 B gzip** (42,604 B) under the clean lockfile install. A numbered shared chunk disappeared. | Completed in the wrapper webpack configuration; continue checking React behavior as other bundles change. |
| 5 | Share identical Vite lazy modules across packages | Byte-identical topology and `html2canvas` modules are emitted at distinct paths and webpack retains multiple copies. A temporary canonicalization probe reduced the US topology chunk from **81,802 to 27,768 B gzip** (54,034 B) for a map page. | Give webpack a safe common identity for equivalent modules, then verify loading and caching across map/dashboard/editor paths. |
| 6 | Remove repeated injected CSS across visualization entries | Extracted local Vite CSS strings were about 252K chars for chart, 250K for map, and 398K for dashboard; chart/map shared about 207K chars of identical rule text by a simple rule split. The wrapper also loads core CSS. | Inspect final webpack CSS ownership and run a final-build extraction probe. Overlap in source strings is **not** a measured transfer saving. |
| 7 | Review broad Lodash imports and static map metadata | Vite reports included the full Lodash module (roughly 565 KiB before minification) in chart, map, and dashboard, with many root imports. Map also statically includes `supported-counties.json` (about 21,403 B gzip alone). | Trace used functions and map paths, then measure final webpack output before estimating benefit. |

The earlier top three candidates of Vega, editor code, and React DOM remain substantial. Including the dashboard page moves conditional dashboard child loading ahead of React DOM in the page-focused ranking.

## Optimization progress

Track final webpack output here as each change is implemented. Figures use local gzip level 9 on emitted files, so they are comparable within the same build pair. The chart, map, dashboard, and editor figures include the wrapper entry, the visualization entry, and the shared chunk when present; the map figure also includes US topology. The dashboard figure excludes optional child chunks. These are not CDN transfer measurements. Savings from separate changes must be measured together before reporting a cumulative total.

| Change | Status | Baseline → candidate total emitted JS | Observed page effect | Cumulative implemented reduction |
| --- | --- | ---: | --- | ---: |
| Deduplicate React DOM and scheduler | Implemented in TemplatePackage webpack config; clean dependency install and full two-stage build passed | 6,327,890 → 6,285,286 B gzip (**42,604 B less**) | Chart: 866,068 → 823,466 B; map with US topology: 907,958 → 865,356 B; dashboard entry: 1,135,058 → 1,092,454 B; editor: 1,346,632 → 1,304,030 B | **42,604 B gzip** across emitted JS |
| Load dashboard child renderers only when needed | Implemented for dashboard child components; dashboard editor and visualization palette remain eager. Vite and TemplatePackage webpack builds passed | 6,285,286 → 6,305,912 B gzip (**20,626 B more** across all emitted JS) | Local no-map dashboard example: 1,092,454 → 919,840 B (**172,614 B less** in requested JS). Dashboard entry: 949,313 → 326,611 B. Local map dashboard requested its map and US topology chunks; the no-map example did not. | **21,978 B gzip less** across emitted JS than the original baseline |

The conditional dashboard result was measured against the existing local TemplatePackage output before the candidate build, using gzip level 9 for all top-level JavaScript files. The no-map example requested `main.js`, the dashboard entry, and six numbered chunks; the map example requested the map child chunk and US topology instead of the no-map example's chart/data-bite path. Both rendered in local `bundle=production` mode with no page errors. A delayed-chart check showed a blank child slot until the chart loaded, with no added dashboard loading overlay. The 20,626 B increase in total emitted JavaScript is the cost of the additional chunk boundaries and duplicated code; only assets requested by a given page affect that page's uncached transfer. This result does not establish a deployed CDN saving or a timing improvement.

For the React DOM change, the baseline and candidate used the same local COVE output and TemplatePackage webpack configuration, with only aliases for `react-dom` and `scheduler` removed from the baseline. Webpack stats showed two copies of each in the baseline (one from each repository's `node_modules`) and one in the candidate. The numbered shared React DOM chunk was 43,004 B gzip and disappeared; `main.js` grew by 402 B gzip. The candidate rendered chart, map, dashboard, and editor examples in a browser through `bundle=production` in the initial probe, with no console errors; a chart table control, map legend, dashboard filter, and editor accordion were exercised. After reinstalling dependencies, the full `build.sh` pipeline emitted JavaScript byte-identical to the clean-install candidate, and the local production-mode chart rendered with no console errors. This is a measured local build reduction, not a deployed CDN measurement.

**Dependency-version qualification:** The first probe used a stale local wrapper install with React and React DOM 18.2.0 and scheduler 0.23.0, giving a 42,628 B reduction. The measurement above replaces it: the wrapper was reinstalled with `npm ci --legacy-peer-deps`, followed by the same Babel 7 compatibility install used in TemplatePackage CI. The installed wrapper and COVE both use React/React DOM 18.3.1 and scheduler 0.23.2, as pinned in their lockfiles. The webpack aliases ensure one matching React runtime in this build.

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

## Reproduce an optimization measurement

Use this workflow for each item above. Measure the **final webpack output** before and after a single change, then verify the requested browser paths. Keep COVE and TemplatePackage revisions, lockfiles, Node version, and build commands the same for both runs. Save the baseline before the candidate build: webpack cleans `dist` and replaces hashed filenames. If a change touches the TemplatePackage webpack configuration, baseline and candidate must use the corresponding before/after configuration too.

### 1. Prepare both repositories

Run the first block from this repository's root. These commands assume TemplatePackage is checked out beside it. Set `TP_WIDGET` to another absolute path if needed. For a new checkout, initialize its real COVE submodule (`git submodule update --init --recursive` from the TemplatePackage root) and work on your COVE branch there. **Do not replace the submodule with a symlink**; Git expects a submodule directory. The tracked TemplatePackage CI workflow installs the widget dependencies as follows:

```bash
export TP_WIDGET="$(cd ../TemplatePackage/src/contrib/widgets/openVizWrapper && pwd)"
export COVE_BUILD="$TP_WIDGET/cdc-open-viz"

cd "$COVE_BUILD"
yarn install --frozen-lockfile

cd "$TP_WIDGET"
npm ci --legacy-peer-deps
npm install --no-save --legacy-peer-deps \
  @babel/core@7.28.3 @babel/preset-env@7.28.3 \
  @babel/preset-react@7.28.5 babel-loader@8.4.1
```

The second npm command matches TemplatePackage's `.github/workflows/cove-dist.yml` compatibility step; the wrapper currently declares Babel 8 but CI builds with these Babel 7 packages. Run this setup once for a comparison, and repeat it if the lockfiles change. The wrapper's `package-lock.json` and COVE's `yarn.lock` currently resolve React and React DOM 18.3.1 and scheduler 0.23.2. Check installed versions if a future measurement unexpectedly changes.

This repository may also be a separate sibling checkout. The local, **untracked** `$TP_WIDGET/build.sh`, if present, builds that checkout with `COVE_SOURCE_DIR=/absolute/path/to/cdc-open-viz "$TP_WIDGET/build.sh"` while leaving the real submodule intact. It skips dependency installation when webpack is already installed, so use the explicit clean install above before a controlled comparison. Other developers should use the tracked submodule and commands below unless they have an equivalent local adapter; `build.sh` is not part of either repository's committed setup.

### 2. Capture baseline and candidate

Before editing, build both stages and copy the resulting webpack output outside `dist`. Run the commands in the **same shell** so the exported paths remain available:

```bash
export BUNDLE_BASELINE="$(mktemp -d "${TMPDIR:-/tmp}/cove-bundle-baseline.XXXXXX")"
export BUNDLE_CANDIDATE="$(mktemp -d "${TMPDIR:-/tmp}/cove-bundle-candidate.XXXXXX")"

cd "$COVE_BUILD"
yarn build
cd "$TP_WIDGET"
npm run build
cp -R dist/. "$BUNDLE_BASELINE/"
```

Make one change, then repeat the same two builds and preserve the candidate:

```bash
cd "$COVE_BUILD"
yarn build
cd "$TP_WIDGET"
npm run build
cp -R dist/. "$BUNDLE_CANDIDATE/"
```

If you are developing in the sibling COVE checkout using the local `build.sh`, run it in place of each `yarn build` + `npm run build` pair, with `COVE_SOURCE_DIR` set. Keep the baseline and candidate snapshots from the same checkout arrangement. Record `git rev-parse --short HEAD` in both repositories and `node --version` with the result. If the candidate is already edited, use a separate clean checkout/worktree for the baseline rather than trying to infer it from old production hashes.

### 3. Compare compressed webpack assets

The following uses only Python 3. It reports gzip level 9 bytes for every top-level webpack JavaScript asset in each saved `dist`, grouped by logical chunk name so changed content hashes do not hide the comparison. A missing chunk counts as zero. The `TOTAL` includes lazy chunks whether or not one page requests them, and excludes `dist/embed` (measure that separately if your change affects it).

```bash
python3 - "$BUNDLE_BASELINE" "$BUNDLE_CANDIDATE" <<'PY'
from pathlib import Path
import gzip
import re
import sys

def measure(directory):
    chunks = {}
    for asset in Path(directory).glob('*.js'):
        name = re.sub(r'-[0-9a-f]{20}(?=\.js$)', '', asset.name)
        name = name.removesuffix('.js')
        if name in chunks:
            raise SystemExit(f'Duplicate logical chunk: {name} in {directory}')
        chunks[name] = len(gzip.compress(asset.read_bytes(), compresslevel=9, mtime=0))
    return chunks

before, after = map(measure, sys.argv[1:3])
print(f'{"Chunk":30} {"Baseline":>12} {"Candidate":>12} {"Saved":>12}')
for name in sorted(before.keys() | after.keys()):
    old, new = before.get(name, 0), after.get(name, 0)
    print(f'{name:30} {old:12,} {new:12,} {old-new:12,}')
old_total, new_total = sum(before.values()), sum(after.values())
print(f'{"TOTAL":30} {old_total:12,} {new_total:12,} {old_total-new_total:12,}')
print(f'Total reduction: {(old_total-new_total)/old_total:.2%}')
PY
```

The gzip level and `mtime=0` make the local comparison repeatable; CDN `Content-Length` can differ. Check **both** the total and the relevant page's loaded assets. A smaller chart chunk can be offset by a larger shared or `main.js` chunk, and a lazy chunk reduction may have no effect on the initial request. Use each build's actual Network requests to identify the page asset set, then sum those chunks from the report; do not assume the numbered shared chunk or content hashes stay the same. Record any new request, removed request, and changed loading time (initial render versus interaction). Keep raw bytes and compressed bytes separate if reporting both.

### 4. Verify behavior in the browser

Start a package dev server from this repository's root: `yarn dev:chart` (port 3001), `yarn dev:map` (3008), `yarn dev:dashboard` (3003), or `yarn dev:editor` (3006). Set `COVE_WRAPPER_DIST` **before starting the server** to select a saved build. For example, `COVE_WRAPPER_DIST="$BUNDLE_BASELINE" yarn dev:chart` serves the baseline; stop that server and restart with `COVE_WRAPPER_DIST="$BUNDLE_CANDIDATE" yarn dev:chart` for the candidate. The same pattern works for the other packages. This makes it possible to inspect both builds even after webpack has replaced `dist`. Compare the same example with and without `bundle=production`, using the sidebar or `config` parameter:

- Chart: `http://localhost:3001/?bundle=production&config=/examples/default.json`
- Map: `http://localhost:3008/?bundle=production&config=/examples/default.json`
- Dashboard: `http://localhost:3003/?bundle=production&config=/examples/default.json`
- Editor: `http://localhost:3006/?bundle=production&config=/examples/chart/default.json`

For each affected visualization, confirm it renders, data and styling match the source-mode page, and there are no console errors or failed `dist` requests. In DevTools Network, filter for `/TemplatePackage/contrib/widgets/openVizWrapper/dist/` and verify `main.js` plus the expected hashed visualization and conditional chunks come from localhost. Exercise the behavior your change could affect: chart table/legend and Vega-backed legacy configs; map geography and legend; dashboard child types and filters; editor controls; and export paths if they trigger new chunks. Refresh after rebuilding because the HTML entry and hashed chunk names may change. Targeted unit or Storybook tests should cover changed code as appropriate, but they do not replace this final-bundle check.

Finally, update the optimization table above with baseline → candidate gzip totals, the relevant page's requested-asset total, and the browser paths exercised. For cumulative savings, compare the newest build against the original baseline with **all implemented changes together**; do not add isolated probe estimates, because webpack can reorganize chunks between builds.
