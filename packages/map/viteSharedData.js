import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const mapRoot = fs.realpathSync(path.dirname(fileURLToPath(import.meta.url)))

// Keep these lazy map data imports as one package path across the map,
// dashboard, and editor library builds. A consuming bundler can then give each
// dataset one module identity without changing the standalone package builds.
const sharedData = new Set([
  'src/components/UsaMap/data/cb_2019_us_county_20m.json',
  'src/components/UsaMap/data/hsa_fips_mapping.json',
  'src/components/UsaMap/data/us-regions-topo-2.json',
  'src/components/UsaMap/data/us-topo.json',
  'src/components/WorldMap/data/world-topo.json'
])

export default function sharedMapData() {
  return {
    name: 'cove-shared-map-data',
    apply: 'build',
    enforce: 'pre',
    resolveId(source, importer) {
      if (!importer || !source.startsWith('.') || !source.endsWith('.json')) return null

      let resolved
      try {
        resolved = fs.realpathSync(path.resolve(path.dirname(importer.split('?')[0]), source))
      } catch {
        return null
      }

      const relative = path.relative(mapRoot, resolved).split(path.sep).join('/')
      if (!sharedData.has(relative)) return null
      return { id: `@cdc/map/${relative}`, external: true }
    }
  }
}
