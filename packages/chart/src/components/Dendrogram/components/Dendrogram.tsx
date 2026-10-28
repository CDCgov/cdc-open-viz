import { useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

import Button from '@cdc/core/components/elements/Button'
import { sanitizePaletteColor } from '@cdc/core/helpers/palettes/colorValidation'

import ConfigContext from '../../../ConfigContext'
import type { ChartContext } from '../../../types/ChartContext'
import { layoutDendrogram } from '../helpers/layoutDendrogram'
import { prepareDendrogramData } from '../helpers/prepareDendrogramData'
import { resolveDendrogramLabels } from '../helpers/resolveDendrogramLabels'
import type { DendrogramLayoutLink, DendrogramLayoutNode, DendrogramProps } from '../types'
import '../dendrogram.css'

type DendrogramView = {
  scale: number
  offsetX: number
  offsetY: number
}

const DEFAULT_VIEW: DendrogramView = { scale: 1, offsetX: 0, offsetY: 0 }
const LINK_KEY_HEIGHT = 32
const DEFAULT_LINK_STYLE_LABELS = { solid: 'Solid', dashed: 'Dashed' } as const

const Dendrogram = ({ data, width, height, runtime }: DendrogramProps) => {
  const { config, handleChartAriaLabels } = useContext<ChartContext>(ConfigContext)
  const dendrogram = config.dendrogram
  const reactId = useId().replace(/:/g, '')
  const parsedWidth = Number(width)
  const parsedHeight = Number(dendrogram?.height)
  const parsedParentHeight = Number(height)
  const chartWidth = Math.max(Number.isFinite(parsedWidth) ? parsedWidth : 640, 160)
  const chartHeight = Math.max(
    Number.isFinite(parsedHeight) ? parsedHeight : Number.isFinite(parsedParentHeight) ? parsedParentHeight : 500,
    160
  )
  const orientation = dendrogram?.orientation === 'vertical' ? 'vertical' : 'horizontal'
  const connectionType = ['line', 'elbow'].includes(dendrogram?.connectionType || '')
    ? dendrogram!.connectionType
    : 'curve'
  const nodeRadius = Math.max(2, Number.isFinite(Number(dendrogram?.nodeRadius)) ? Number(dendrogram.nodeRadius) : 6)
  const prepared = useMemo(() => prepareDendrogramData(data, dendrogram?.columns), [data, dendrogram?.columns])
  const layout = useMemo(
    () =>
      layoutDendrogram(prepared, {
        orientation,
        leafSpacing: dendrogram?.leafSpacing ?? 40,
        depthSpacing: dendrogram?.depthSpacing ?? 140,
        nodeRadius
      }),
    [dendrogram?.depthSpacing, dendrogram?.leafSpacing, nodeRadius, orientation, prepared]
  )
  const linkStyleColumn = dendrogram?.columns?.style
  const hasMappedLinkStyle = Boolean(
    linkStyleColumn &&
      Array.isArray(data) &&
      data.some(row => row && typeof row === 'object' && !Array.isArray(row) && linkStyleColumn in row)
  )
  const renderedLinkStyles = useMemo(
    () =>
      hasMappedLinkStyle && layout.links.length
        ? (['solid', 'dashed'] as const).filter(style => layout.links.some(link => link.style === style))
        : [],
    [hasMappedLinkStyle, layout.links]
  )
  const plotHeight = chartHeight - (renderedLinkStyles.length ? LINK_KEY_HEIGHT : 0)
  const resolvedLabels = useMemo(
    () => resolveDendrogramLabels(layout.nodes, layout.links, { orientation, connectionType, nodeRadius }),
    [connectionType, layout.links, layout.nodes, nodeRadius, orientation]
  )
  const labelsByNodeId = useMemo(
    () => new Map(resolvedLabels.map(placement => [placement.nodeId, placement])),
    [resolvedLabels]
  )
  const contentBounds = useMemo(() => {
    if (!layout.nodes.length) return null
    const extents = layout.nodes.reduce(
      (result, node) => ({
        minX: Math.min(result.minX, node.x - nodeRadius),
        maxX: Math.max(result.maxX, node.x + nodeRadius),
        minY: Math.min(result.minY, node.y - nodeRadius),
        maxY: Math.max(result.maxY, node.y + nodeRadius)
      }),
      { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity }
    )
    resolvedLabels.forEach(({ bounds }) => {
      extents.minX = Math.min(extents.minX, bounds.x)
      extents.maxX = Math.max(extents.maxX, bounds.x + bounds.width)
      extents.minY = Math.min(extents.minY, bounds.y)
      extents.maxY = Math.max(extents.maxY, bounds.y + bounds.height)
    })
    const padding = 4
    return {
      minX: extents.minX - padding,
      maxX: extents.maxX + padding,
      minY: extents.minY - padding,
      maxY: extents.maxY + padding
    }
  }, [layout.nodes, nodeRadius, resolvedLabels])

  const constrainView = useCallback(
    (nextView: DendrogramView): DendrogramView => {
      if (!contentBounds) return DEFAULT_VIEW
      const centerX = chartWidth / 2
      const centerY = plotHeight / 2
      const minX = centerX + (contentBounds.minX - centerX) * nextView.scale
      const maxX = centerX + (contentBounds.maxX - centerX) * nextView.scale
      const minY = centerY + (contentBounds.minY - centerY) * nextView.scale
      const maxY = centerY + (contentBounds.maxY - centerY) * nextView.scale
      const horizontalLimits = [chartWidth - maxX, -minX].sort((a, b) => a - b)
      const verticalLimits = [plotHeight - maxY, -minY].sort((a, b) => a - b)

      return {
        ...nextView,
        offsetX: Math.min(horizontalLimits[1], Math.max(horizontalLimits[0], nextView.offsetX)),
        offsetY: Math.min(verticalLimits[1], Math.max(verticalLimits[0], nextView.offsetY))
      }
    },
    [chartWidth, contentBounds, plotHeight]
  )

  const getAlignedView = useCallback((): DendrogramView => {
    if (!contentBounds) return DEFAULT_VIEW
    const offsetX = chartWidth / 2 - (contentBounds.minX + contentBounds.maxX) / 2
    const offsetY = plotHeight / 2 - (contentBounds.minY + contentBounds.maxY) / 2
    return constrainView({ ...DEFAULT_VIEW, offsetX, offsetY })
  }, [chartWidth, constrainView, contentBounds, plotHeight])

  const alignedView = useMemo(getAlignedView, [getAlignedView])
  const [view, setView] = useState<DendrogramView>(alignedView)
  const previousAlignedView = useRef(alignedView)
  const dragStart = useRef<{ x: number; y: number; offsetX: number; offsetY: number } | null>(null)

  useEffect(() => {
    const previous = previousAlignedView.current
    if (
      previous.scale === alignedView.scale &&
      previous.offsetX === alignedView.offsetX &&
      previous.offsetY === alignedView.offsetY
    )
      return

    previousAlignedView.current = alignedView
    setView(alignedView)
  }, [alignedView])

  if (config.visualizationType !== 'Dendrogram') return null

  if (!dendrogram?.columns?.node || !dendrogram?.columns?.parent) {
    return (
      <div className='dendrogram-chart__message'>Select Node ID and Parent ID columns to display the dendrogram.</div>
    )
  }

  const selectedColumnsExist = [dendrogram.columns.node, dendrogram.columns.parent].every(column =>
    Array.isArray(data)
      ? data.some(row => row && typeof row === 'object' && !Array.isArray(row) && column in row)
      : false
  )
  if (!selectedColumnsExist) {
    return (
      <div className='dendrogram-chart__message'>
        Select Node ID and Parent ID columns that exist in the imported data to display the dendrogram.
      </div>
    )
  }

  if (!prepared.nodes.length) {
    return (
      <div className='dendrogram-chart__message'>
        No valid hierarchy rows are available. Check the selected Node ID and Parent ID columns.
        {prepared.rejectedRowCount > 0 && ` ${prepared.rejectedRowCount} row(s) were rejected.`}
      </div>
    )
  }

  if (prepared.error) {
    return (
      <div className='dendrogram-chart__message' role='alert'>
        {prepared.error.message}
        {prepared.rejectedRowCount > 0 && ` ${prepared.rejectedRowCount} row(s) were rejected.`}
      </div>
    )
  }

  const instanceId = `${runtime?.uniqueId || 'chart'}-${reactId}`
  const tooltipId = `cdc-open-viz-tooltip-${instanceId}-dendrogram`
  const nodeColor = sanitizePaletteColor(dendrogram?.nodeColor) || '#005eaa'
  const linkColor = sanitizePaletteColor(dendrogram?.linkColor) || '#333333'
  const getLinkStyleLabel = (style: (typeof renderedLinkStyles)[number]) => {
    const authoredLabel: unknown = dendrogram.linkStyleLabels?.[style]
    return typeof authoredLabel === 'string' && authoredLabel.trim()
      ? authoredLabel.trim()
      : DEFAULT_LINK_STYLE_LABELS[style]
  }
  const viewTransform = `translate(${chartWidth / 2 + view.offsetX} ${plotHeight / 2 + view.offsetY}) scale(${
    view.scale
  }) translate(${-chartWidth / 2} ${-plotHeight / 2})`
  const childCounts = new Map<string, number>()
  layout.nodes.forEach(node => {
    if (node.parentId !== null) childCounts.set(node.parentId, (childCounts.get(node.parentId) || 0) + 1)
  })

  const zoomBy = (factor: number) =>
    setView(current => constrainView({ ...current, scale: Math.min(4, Math.max(0.25, current.scale * factor)) }))
  const resetView = () => setView(alignedView)
  const handlePointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
    if (event.button !== 0) return
    event.currentTarget.setPointerCapture(event.pointerId)
    dragStart.current = { x: event.clientX, y: event.clientY, offsetX: view.offsetX, offsetY: view.offsetY }
  }
  const handlePointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    if (!dragStart.current) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const scaleX = bounds.width ? chartWidth / bounds.width : 1
    const scaleY = bounds.height ? plotHeight / bounds.height : 1
    setView(current =>
      constrainView({
        ...current,
        offsetX: dragStart.current!.offsetX + (event.clientX - dragStart.current!.x) * scaleX,
        offsetY: dragStart.current!.offsetY + (event.clientY - dragStart.current!.y) * scaleY
      })
    )
  }
  const handlePointerUp = (event: React.PointerEvent<SVGSVGElement>) => {
    dragStart.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId)
  }
  const getLinkPath = (link: DendrogramLayoutLink) => {
    if (connectionType === 'line') {
      return `M ${link.source.x} ${link.source.y} L ${link.target.x} ${link.target.y}`
    }
    if (orientation === 'vertical') {
      const midpoint = (link.source.y + link.target.y) / 2
      if (connectionType === 'elbow') {
        return `M ${link.source.x} ${link.source.y} L ${link.source.x} ${midpoint} L ${link.target.x} ${midpoint} L ${link.target.x} ${link.target.y}`
      }
      return `M ${link.source.x} ${link.source.y} C ${link.source.x} ${midpoint}, ${link.target.x} ${midpoint}, ${link.target.x} ${link.target.y}`
    }
    const midpoint = (link.source.x + link.target.x) / 2
    if (connectionType === 'elbow') {
      return `M ${link.source.x} ${link.source.y} L ${midpoint} ${link.source.y} L ${midpoint} ${link.target.y} L ${link.target.x} ${link.target.y}`
    }
    return `M ${link.source.x} ${link.source.y} C ${midpoint} ${link.source.y}, ${midpoint} ${link.target.y}, ${link.target.x} ${link.target.y}`
  }

  const renderLink = (link: DendrogramLayoutLink) => {
    const label = `${link.source.label} to ${link.target.label}, ${link.style} link`
    const path = getLinkPath(link)
    return (
      <g
        key={link.id}
        className='dendrogram-chart__link-group'
        tabIndex={0}
        role='img'
        aria-label={label}
        data-tooltip-id={config.enableTooltips ? tooltipId : undefined}
        data-tooltip-content={config.enableTooltips ? label : undefined}
      >
        <path className='dendrogram-chart__link-hitbox' d={path} stroke='transparent' strokeWidth={12} />
        <path
          aria-hidden='true'
          className={`dendrogram-chart__link${link.style === 'dashed' ? ' dendrogram-chart__link--dashed' : ''}`}
          d={path}
          stroke={linkColor}
        />
      </g>
    )
  }

  const renderNode = (node: DendrogramLayoutNode) => {
    const placement = labelsByNodeId.get(node.id)
    const children = childCounts.get(node.id) || 0
    const accessibleName = node.label === node.id ? node.label : `${node.label} (${node.id})`
    const label = `${accessibleName}, depth ${node.depth}, ${children} ${children === 1 ? 'child' : 'children'}`
    return (
      <g
        key={node.id}
        className='dendrogram-chart__node'
        transform={`translate(${node.x} ${node.y})`}
        tabIndex={0}
        role='img'
        aria-label={label}
        data-tooltip-id={config.enableTooltips ? tooltipId : undefined}
        data-tooltip-content={config.enableTooltips ? label : undefined}
      >
        <circle r={nodeRadius} fill={node.color || nodeColor} />
        {placement && (
          <text
            className={`dendrogram-chart__label dendrogram-chart__label--${placement.anchor}`}
            x={placement.x}
            y={placement.y}
            textAnchor={placement.textAnchor}
            dominantBaseline={placement.dominantBaseline}
          >
            {node.label}
          </text>
        )}
      </g>
    )
  }

  return (
    <div className='dendrogram-chart__container' style={{ height: chartHeight }}>
      {renderedLinkStyles.length > 0 && (
        <div className='dendrogram-chart__link-key' role='group' aria-label='Link styles'>
          {renderedLinkStyles.map(style => (
            <div className='dendrogram-chart__link-key-item' key={style}>
              <svg aria-hidden='true' width='36' height='12' viewBox='0 0 36 12'>
                <line
                  className={`dendrogram-chart__link${style === 'dashed' ? ' dendrogram-chart__link--dashed' : ''}`}
                  x1='1'
                  x2='35'
                  y1='6'
                  y2='6'
                  stroke={linkColor}
                />
              </svg>
              <span>{getLinkStyleLabel(style)}</span>
            </div>
          ))}
        </div>
      )}
      <div className='dendrogram-chart__plot'>
        {prepared.rejectedRowCount > 0 && (
          <div className='dendrogram-chart__status' role='status'>
            {prepared.rejectedRowCount} invalid row(s) excluded.
          </div>
        )}
        <svg
          className='dendrogram-chart'
          width='100%'
          height='100%'
          viewBox={`0 0 ${chartWidth} ${plotHeight}`}
          role='group'
          aria-label={handleChartAriaLabels(config)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onLostPointerCapture={() => {
            dragStart.current = null
          }}
        >
          <g className='dendrogram-chart__viewport' transform={viewTransform}>
            {layout.links.map(renderLink)}
            {layout.nodes.map(renderNode)}
          </g>
        </svg>
        <div
          className='dendrogram-chart__controls'
          role='group'
          aria-label='Dendrogram view controls'
          data-html2canvas-ignore='true'
        >
          <Button type='button' variant='light' size='sm' onClick={() => zoomBy(1.2)} aria-label='Zoom in'>
            +
          </Button>
          <Button type='button' variant='light' size='sm' onClick={() => zoomBy(1 / 1.2)} aria-label='Zoom out'>
            −
          </Button>
          <Button type='button' variant='light' size='sm' onClick={resetView} aria-label='Reset view'>
            Reset
          </Button>
        </div>
        {config.enableTooltips && <ReactTooltip id={tooltipId} variant='light' className='dendrogram-chart__tooltip' />}
      </div>
    </div>
  )
}

export default Dendrogram
