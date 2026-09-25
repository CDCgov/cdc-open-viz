import { useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

import Button from '@cdc/core/components/elements/Button'
import { sanitizePaletteColor } from '@cdc/core/helpers/palettes/colorValidation'

import ConfigContext from '../../../ConfigContext'
import type { ChartContext } from '../../../types/ChartContext'
import { layoutDendrogram } from '../helpers/layoutDendrogram'
import { prepareDendrogramData } from '../helpers/prepareDendrogramData'
import type { DendrogramLayoutLink, DendrogramLayoutNode, DendrogramProps } from '../types'
import '../dendrogram.css'

type DendrogramView = {
  scale: number
  offsetX: number
  offsetY: number
}

const DEFAULT_VIEW: DendrogramView = { scale: 1, offsetX: 0, offsetY: 0 }

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
  const showLabels = dendrogram?.showLabels !== false
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
  const contentBounds = useMemo(() => {
    if (!layout.nodes.length) return null
    const extents = layout.nodes.reduce(
      (result, node) => ({
        longestLabelWidth: Math.max(result.longestLabelWidth, Math.max(1, node.label.length) * 7),
        minX: Math.min(result.minX, node.x),
        maxX: Math.max(result.maxX, node.x),
        minY: Math.min(result.minY, node.y),
        maxY: Math.max(result.maxY, node.y)
      }),
      { longestLabelWidth: 0, minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity }
    )
    const longestLabelWidth = showLabels ? extents.longestLabelWidth : 0
    const horizontalLabelWidth = orientation === 'horizontal' ? longestLabelWidth + 8 : 0
    const verticalLabelRadius = orientation === 'vertical' ? longestLabelWidth / 2 : 0
    const labelHeight = showLabels && orientation === 'vertical' ? 22 : 0
    const padding = nodeRadius + 4
    const minNodeX = extents.minX - padding - verticalLabelRadius
    const maxNodeX = extents.maxX + padding + horizontalLabelWidth + verticalLabelRadius
    const minNodeY = extents.minY - padding
    const maxNodeY = extents.maxY + padding + labelHeight
    return { minX: minNodeX, maxX: maxNodeX, minY: minNodeY, maxY: maxNodeY }
  }, [layout, nodeRadius, orientation, showLabels])

  const constrainView = useCallback(
    (nextView: DendrogramView): DendrogramView => {
      if (!contentBounds) return DEFAULT_VIEW
      const centerX = chartWidth / 2
      const centerY = chartHeight / 2
      const minX = centerX + (contentBounds.minX - centerX) * nextView.scale
      const maxX = centerX + (contentBounds.maxX - centerX) * nextView.scale
      const minY = centerY + (contentBounds.minY - centerY) * nextView.scale
      const maxY = centerY + (contentBounds.maxY - centerY) * nextView.scale
      const horizontalLimits = [chartWidth - maxX, -minX].sort((a, b) => a - b)
      const verticalLimits = [chartHeight - maxY, -minY].sort((a, b) => a - b)

      return {
        ...nextView,
        offsetX: Math.min(horizontalLimits[1], Math.max(horizontalLimits[0], nextView.offsetX)),
        offsetY: Math.min(verticalLimits[1], Math.max(verticalLimits[0], nextView.offsetY))
      }
    },
    [chartHeight, chartWidth, contentBounds]
  )

  const getAlignedView = useCallback((): DendrogramView => {
    if (!contentBounds) return DEFAULT_VIEW
    const alignment = ['center', 'right'].includes(dendrogram?.alignment || '') ? dendrogram!.alignment : 'left'
    const verticalAlignment = ['center', 'bottom'].includes(dendrogram?.verticalAlignment || '')
      ? dendrogram!.verticalAlignment
      : 'top'
    const offsetX =
      alignment === 'right'
        ? chartWidth - contentBounds.maxX
        : alignment === 'center'
        ? chartWidth / 2 - (contentBounds.minX + contentBounds.maxX) / 2
        : -contentBounds.minX
    const offsetY =
      verticalAlignment === 'bottom'
        ? chartHeight - contentBounds.maxY
        : verticalAlignment === 'center'
        ? chartHeight / 2 - (contentBounds.minY + contentBounds.maxY) / 2
        : -contentBounds.minY
    return constrainView({ ...DEFAULT_VIEW, offsetX, offsetY })
  }, [chartHeight, chartWidth, constrainView, contentBounds, dendrogram?.alignment, dendrogram?.verticalAlignment])

  const [view, setView] = useState<DendrogramView>(DEFAULT_VIEW)
  const dragStart = useRef<{ x: number; y: number; offsetX: number; offsetY: number } | null>(null)

  useEffect(() => {
    setView(getAlignedView())
  }, [getAlignedView])

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
  const viewTransform = `translate(${chartWidth / 2 + view.offsetX} ${chartHeight / 2 + view.offsetY}) scale(${
    view.scale
  }) translate(${-chartWidth / 2} ${-chartHeight / 2})`
  const childCounts = new Map<string, number>()
  layout.nodes.forEach(node => {
    if (node.parentId !== null) childCounts.set(node.parentId, (childCounts.get(node.parentId) || 0) + 1)
  })

  const zoomBy = (factor: number) =>
    setView(current => constrainView({ ...current, scale: Math.min(4, Math.max(0.25, current.scale * factor)) }))
  const resetView = () => setView(getAlignedView())
  const handlePointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
    if (event.button !== 0) return
    event.currentTarget.setPointerCapture(event.pointerId)
    dragStart.current = { x: event.clientX, y: event.clientY, offsetX: view.offsetX, offsetY: view.offsetY }
  }
  const handlePointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    if (!dragStart.current) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const scaleX = bounds.width ? chartWidth / bounds.width : 1
    const scaleY = bounds.height ? chartHeight / bounds.height : 1
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
    if (orientation === 'vertical') {
      const midpoint = (link.source.y + link.target.y) / 2
      return `M ${link.source.x} ${link.source.y} C ${link.source.x} ${midpoint}, ${link.target.x} ${midpoint}, ${link.target.x} ${link.target.y}`
    }
    const midpoint = (link.source.x + link.target.x) / 2
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
        {showLabels && (
          <text
            className={`dendrogram-chart__label dendrogram-chart__label--${orientation}`}
            x={orientation === 'horizontal' ? nodeRadius + 5 : 0}
            y={orientation === 'horizontal' ? 0 : nodeRadius + 12}
          >
            {node.label}
          </text>
        )}
      </g>
    )
  }

  return (
    <div className='dendrogram-chart__container' style={{ height: chartHeight }}>
      {prepared.rejectedRowCount > 0 && (
        <div className='dendrogram-chart__status' role='status'>
          {prepared.rejectedRowCount} invalid row(s) excluded.
        </div>
      )}
      <svg
        className='dendrogram-chart'
        width='100%'
        height='100%'
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
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
  )
}

export default Dendrogram
