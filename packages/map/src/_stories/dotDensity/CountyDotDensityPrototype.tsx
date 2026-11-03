import { useEffect, useId, useMemo, useRef } from 'react'
import { geoPath } from 'd3-geo'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import { select } from 'd3-selection'
import { zoom, zoomIdentity } from 'd3-zoom'
import { feature } from 'topojson-client'
import type { FeatureCollection } from 'geojson'
import countyTopology from '../../components/UsaMap/data/cb_2019_us_county_20m.json'
import { generateDensityDots, getDotCount, type DotDensityGeometry } from '../../helpers/dotDensity'

const MAX_DOTS = 100000
const WIDTH = 960
const HEIGHT = 600
const allCounties = (
  feature(countyTopology as any, countyTopology.objects.counties as any) as unknown as FeatureCollection
).features as DotDensityGeometry[]

const syntheticTotal = (county: DotDensityGeometry) => 1000 + ((Number(county.id) * 7919) % 149000)
const geographyLabels = { '04': 'Arizona', '06': 'California', all: 'United States' }

export type CountyDotDensityProps = {
  geography: keyof typeof geographyLabels
  dotValue: number
  dotRadius: number
  seed: number
  empty?: boolean
}

/** Story-only experiment: no saved configuration or production map rendering is changed. */
export default function CountyDotDensityPrototype({
  geography,
  dotValue,
  dotRadius,
  seed,
  empty = false
}: CountyDotDensityProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const zoomInRef = useRef<HTMLButtonElement>(null)
  const zoomOutRef = useRef<HTMLButtonElement>(null)
  const resetRef = useRef<HTMLButtonElement>(null)
  const captionId = useId()
  const radiusError = Number.isFinite(dotRadius) && dotRadius > 0 ? '' : 'Choose a positive, finite dot radius.'
  const counties = useMemo(
    () => allCounties.filter(county => geography === 'all' || String(county.id).startsWith(geography)),
    [geography]
  )
  const rows = useMemo(
    () => (empty ? [] : counties.map(county => ({ county, total: syntheticTotal(county) }))),
    [counties, empty]
  )
  const generated = useMemo(() => {
    if (!Number.isFinite(seed)) return { layers: [], count: 0, error: 'Choose a finite seed.' }
    if (!Number.isFinite(dotValue) || dotValue <= 0) {
      return { layers: [], count: 0, error: 'Choose a positive, finite dot value.' }
    }
    const requested = rows.reduce((total, row) => total + getDotCount(row.total, dotValue), 0)
    if (requested > MAX_DOTS) {
      return {
        layers: [],
        count: 0,
        error: `${requested.toLocaleString()} dots requested. Increase the dot value to stay within the ${MAX_DOTS.toLocaleString()}-dot prototype budget.`
      }
    }
    const layers = rows.map(({ county, total }) => ({
      county,
      ...generateDensityDots({ feature: county, value: total, dotValue, seed })
    }))
    if (layers.some(layer => !layer.complete)) {
      return {
        layers: [],
        count: 0,
        error: 'Placement limit reached. Increase the dot value; no partial distribution is shown.'
      }
    }
    return { layers, count: requested, error: '' }
  }, [rows, dotValue, seed])

  useEffect(() => {
    const canvas = canvasRef.current
    const zoomIn = zoomInRef.current
    const zoomOut = zoomOutRef.current
    const reset = resetRef.current
    if (!canvas || !zoomIn || !zoomOut || !reset) return
    const context = canvas.getContext('2d')
    if (!context) return

    const collection: FeatureCollection = { type: 'FeatureCollection', features: counties }
    const projection = geoAlbersUsaTerritories().fitExtent(
      [
        [24, 24],
        [WIDTH - 24, HEIGHT - 24]
      ],
      collection
    )
    const path = geoPath(projection)
    const outlines = counties.map(county => new Path2D(path(county) || ''))
    const points = radiusError
      ? []
      : generated.layers.flatMap(layer =>
          layer.points.flatMap(point => {
            const projected = projection(point)
            return projected ? [projected] : []
          })
        )
    let transform = zoomIdentity
    // Geographic signature lets browser tests verify that zoom redraws never regenerate dots.
    canvas.dataset.positionSignature = generated.layers
      .map(
        layer =>
          `${layer.county.id}:${layer.points
            .slice(0, 3)
            .map(point => point.join(','))
            .join(';')}`
      )
      .join('|')

    const draw = () => {
      const ratio = window.devicePixelRatio || 1
      const width = canvas.getBoundingClientRect().width
      if (width <= 0) return
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round((width * HEIGHT * ratio) / WIDTH)
      const scale = canvas.width / WIDTH
      context.setTransform(1, 0, 0, 1, 0, 0)
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.setTransform(scale, 0, 0, scale, 0, 0)
      context.fillStyle = '#ffffff'
      context.fillRect(0, 0, WIDTH, HEIGHT)
      context.save()
      context.translate(transform.x, transform.y)
      context.scale(transform.k, transform.k)
      context.fillStyle = '#f3f5f7'
      context.strokeStyle = '#87939f'
      context.lineWidth = 0.5 / transform.k
      outlines.forEach(outline => {
        context.fill(outline)
        context.stroke(outline)
      })
      context.fillStyle = '#005ea8'
      context.beginPath()
      const radius = dotRadius / transform.k
      points.forEach(([x, y]) => {
        context.moveTo(x + radius, y)
        context.arc(x, y, radius, 0, Math.PI * 2)
      })
      context.fill()
      context.restore()
      canvas.dataset.drawnDots = String(points.length)
      canvas.dataset.zoomScale = String(transform.k)
      canvas.dataset.zoomX = String(transform.x)
      canvas.dataset.zoomY = String(transform.y)
    }

    // Match COVE's county Canvas approach: apply D3's view transform during drawing.
    const behavior = zoom<HTMLCanvasElement, unknown>()
      .extent(() => [
        [0, 0],
        [canvas.clientWidth, canvas.clientHeight]
      ])
      .scaleExtent([1, 12])
      .on('zoom', event => {
        const width = canvas.getBoundingClientRect().width
        if (width <= 0) return
        // D3 pointer coordinates are CSS pixels; drawing uses a fixed map coordinate space.
        transform = zoomIdentity
          .translate((event.transform.x * WIDTH) / width, (event.transform.y * WIDTH) / width)
          .scale(event.transform.k)
        draw()
      })
    const selection = select(canvas)
    selection.call(behavior).call(behavior.transform, zoomIdentity)
    const handleZoomIn = () => selection.call(behavior.scaleBy, 1.5)
    const handleZoomOut = () => selection.call(behavior.scaleBy, 1 / 1.5)
    const handleReset = () => selection.call(behavior.transform, zoomIdentity)
    zoomIn.addEventListener('click', handleZoomIn)
    zoomOut.addEventListener('click', handleZoomOut)
    reset.addEventListener('click', handleReset)
    const observer = new ResizeObserver(() => {
      const width = canvas.getBoundingClientRect().width
      if (width <= 0) return
      // Keep D3's CSS-pixel transform aligned with our stable map-space transform.
      selection.call(
        behavior.transform,
        zoomIdentity.translate((transform.x * width) / WIDTH, (transform.y * width) / WIDTH).scale(transform.k)
      )
    })
    observer.observe(canvas)
    draw()
    return () => {
      observer.disconnect()
      selection.on('.zoom', null)
      zoomIn.removeEventListener('click', handleZoomIn)
      zoomOut.removeEventListener('click', handleZoomOut)
      reset.removeEventListener('click', handleReset)
    }
  }, [counties, generated, dotRadius, radiusError])

  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>
      <h1>County dot density prototype</h1>
      <p>Synthetic county totals · {geographyLabels[geography]} · Bundled 2019 county boundaries</p>
      <figure style={{ margin: 0 }}>
        <figcaption id={captionId}>
          <strong>1 dot = {dotValue.toLocaleString()} people.</strong> Dots show an approximate distribution within each
          county, not individual locations. Whole dots only: remainders below one dot per county are not displayed.
        </figcaption>
        <p role='status'>
          {radiusError ||
            generated.error ||
            `${generated.count.toLocaleString()} dots · ${rows.length.toLocaleString()} counties with synthetic data`}
          {!generated.error && empty ? ' · No data to display.' : ''}
        </p>
        <div role='group' aria-label='Map zoom controls' style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <button ref={zoomInRef} type='button'>
            Zoom in
          </button>
          <button ref={zoomOutRef} type='button'>
            Zoom out
          </button>
          <button ref={resetRef} type='button'>
            Reset zoom
          </button>
        </div>
        <canvas
          ref={canvasRef}
          role='img'
          aria-label={`${geographyLabels[geography]} county dot density map. Exact totals are in the table below.`}
          aria-describedby={captionId}
          style={{ display: 'block', width: '100%', aspectRatio: `${WIDTH} / ${HEIGHT}`, touchAction: 'none' }}
        />
      </figure>
      <details>
        <summary>County totals ({rows.length.toLocaleString()} counties)</summary>
        <table>
          <caption>Synthetic counts for prototype evaluation; these are not published population estimates.</caption>
          <thead>
            <tr>
              <th scope='col'>County FIPS</th>
              <th scope='col'>County</th>
              <th scope='col'>People</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ county, total }) => (
              <tr key={String(county.id)}>
                <td>{String(county.id)}</td>
                <th scope='row'>{county.properties?.name}</th>
                <td>{total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </main>
  )
}
