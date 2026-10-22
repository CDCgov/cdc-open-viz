import { useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react'
import { Graph } from '@visx/network'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

import ConfigContext from '../../../ConfigContext'
import type { ChartContext } from '../../../types/ChartContext'
import { layoutNetwork, resolveNetworkNodeRadius } from '../helpers/layoutNetwork'
import { prepareNetworkData } from '../helpers/prepareNetworkData'
import { resolveNetworkLabels } from '../helpers/resolveNetworkLabels'
import type { NetworkLayoutLink, NetworkLayoutNode, NetworkProps } from '../types'
import Button from '@cdc/core/components/elements/Button'
import { sanitizePaletteColor } from '@cdc/core/helpers/palettes/colorValidation'
import '../network.css'

type NetworkView = {
  rotation: number
  scale: number
  offsetX: number
  offsetY: number
}

const LINK_KEY_HEIGHT = 32
const DEFAULT_LINK_STYLE_LABELS = { solid: 'Solid', dashed: 'Dashed' } as const

const Network = ({ data, width, height, runtime }: NetworkProps) => {
  const { config, handleChartAriaLabels } = useContext<ChartContext>(ConfigContext)
  const reactId = useId().replace(/:/g, '')
  const network = config.network
  const prepared = useMemo(
    () => prepareNetworkData(data, network?.columns, network?.directed),
    [data, network?.columns, network?.directed]
  )
  const parsedWidth = Number(width)
  const parsedAuthoredHeight = Number(network?.height)
  const parsedParentHeight = Number(height)
  const chartWidth = Math.max(Number.isFinite(parsedWidth) ? parsedWidth : 640, 160)
  const chartHeight = Math.max(
    Number.isFinite(parsedAuthoredHeight)
      ? parsedAuthoredHeight
      : Number.isFinite(parsedParentHeight)
      ? parsedParentHeight
      : 500,
    160
  )
  const linkStyleColumn = network?.columns?.style
  const hasMappedLinkStyle = Boolean(
    linkStyleColumn &&
      Array.isArray(data) &&
      data.some(row => row && typeof row === 'object' && !Array.isArray(row) && linkStyleColumn in row)
  )
  const renderedLinkStyles = useMemo(
    () =>
      hasMappedLinkStyle && !config.legend?.hide
        ? (['solid', 'dashed'] as const).filter(style => prepared.links.some(link => link.style === style))
        : [],
    [config.legend?.hide, hasMappedLinkStyle, prepared.links]
  )
  const plotHeight = chartHeight - (renderedLinkStyles.length ? LINK_KEY_HEIGHT : 0)
  const layout = useMemo(
    () =>
      layoutNetwork(prepared, {
        width: chartWidth,
        height: plotHeight,
        nodeRadius: network?.nodeRadius ?? 8,
        linkDistance: network?.linkDistance ?? 90,
        chargeStrength: network?.chargeStrength ?? -240
      }),
    [chartWidth, network, plotHeight, prepared]
  )
  const constrainedNodeRadius = resolveNetworkNodeRadius(network?.nodeRadius ?? 8, chartWidth, plotHeight)
  const resolvedLabels = useMemo(
    () =>
      resolveNetworkLabels(layout.nodes, layout.links, {
        nodeRadius: constrainedNodeRadius,
        width: chartWidth,
        height: plotHeight
      }),
    [chartWidth, constrainedNodeRadius, layout.links, layout.nodes, plotHeight]
  )
  const labelsByNodeId = useMemo(
    () => new Map(resolvedLabels.map(placement => [placement.nodeId, placement])),
    [resolvedLabels]
  )
  const contentPoints = useMemo(
    () => [
      ...layout.nodes.flatMap(node => [
        { x: node.x - constrainedNodeRadius, y: node.y - constrainedNodeRadius },
        { x: node.x + constrainedNodeRadius, y: node.y - constrainedNodeRadius },
        { x: node.x + constrainedNodeRadius, y: node.y + constrainedNodeRadius },
        { x: node.x - constrainedNodeRadius, y: node.y + constrainedNodeRadius }
      ]),
      ...resolvedLabels.flatMap(({ bounds }) => [
        { x: bounds.x, y: bounds.y },
        { x: bounds.x + bounds.width, y: bounds.y },
        { x: bounds.x + bounds.width, y: bounds.y + bounds.height },
        { x: bounds.x, y: bounds.y + bounds.height }
      ])
    ],
    [constrainedNodeRadius, layout.nodes, resolvedLabels]
  )
  const constrainView = useCallback(
    (nextView: NetworkView): NetworkView => {
      if (!contentPoints.length) return { ...nextView, offsetX: 0, offsetY: 0 }
      const normalizedRotation = Number.isFinite(nextView.rotation) ? ((nextView.rotation % 360) + 360) % 360 : 0
      const radians = (normalizedRotation * Math.PI) / 180
      const cosine = Math.cos(radians)
      const sine = Math.sin(radians)
      const centerX = chartWidth / 2
      const centerY = plotHeight / 2
      const transformedPoints = contentPoints.map(point => {
        const x = point.x - centerX
        const y = point.y - centerY
        return {
          x: centerX + nextView.scale * (cosine * x - sine * y),
          y: centerY + nextView.scale * (sine * x + cosine * y)
        }
      })
      const extents = transformedPoints.reduce(
        (result, point) => ({
          minX: Math.min(result.minX, point.x),
          maxX: Math.max(result.maxX, point.x),
          minY: Math.min(result.minY, point.y),
          maxY: Math.max(result.maxY, point.y)
        }),
        { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity }
      )
      const minX = extents.minX - 4
      const maxX = extents.maxX + 4
      const minY = extents.minY - 4
      const maxY = extents.maxY + 4
      const horizontalLimits = [chartWidth - maxX, -minX].sort((a, b) => a - b)
      const verticalLimits = [plotHeight - maxY, -minY].sort((a, b) => a - b)

      return {
        ...nextView,
        rotation: normalizedRotation,
        offsetX: Math.min(horizontalLimits[1], Math.max(horizontalLimits[0], nextView.offsetX)),
        offsetY: Math.min(verticalLimits[1], Math.max(verticalLimits[0], nextView.offsetY))
      }
    },
    [chartWidth, contentPoints, plotHeight]
  )
  const getInitialView = useCallback(
    () =>
      constrainView({
        rotation: Number.isFinite(Number(network?.rotation)) ? Number(network.rotation) : 0,
        scale: Math.min(4, Math.max(0.25, Number.isFinite(Number(network?.scale)) ? Number(network.scale) : 1)),
        offsetX: Number.isFinite(Number(network?.offsetX)) ? Number(network.offsetX) : 0,
        offsetY: Number.isFinite(Number(network?.offsetY)) ? Number(network.offsetY) : 0
      }),
    [constrainView, network?.offsetX, network?.offsetY, network?.rotation, network?.scale]
  )
  const [view, setView] = useState(getInitialView)
  const dragStart = useRef<{ x: number; y: number; offsetX: number; offsetY: number } | null>(null)

  useEffect(() => {
    setView(getInitialView())
  }, [getInitialView])

  if (config.visualizationType !== 'Network') return null

  if (!network?.columns?.source || !network?.columns?.target) {
    return <div className='network-chart__message'>Select source and target columns to display the network.</div>
  }

  if (!layout.links.length) {
    return (
      <div className='network-chart__message'>
        No valid connections are available. Check the selected columns and remove blank endpoints, self-links, or
        invalid weights.
        {prepared.rejectedRowCount > 0 && ` ${prepared.rejectedRowCount} row(s) were rejected.`}
      </div>
    )
  }

  const instanceId = `${runtime?.uniqueId || 'chart'}-${reactId}`
  const tooltipId = `cdc-open-viz-tooltip-${instanceId}-network`
  const markerId = `network-arrow-${instanceId}`
  const nodeRadius = constrainedNodeRadius
  const nodeColor = sanitizePaletteColor(network.nodeColor) || '#005eaa'
  const linkColor = sanitizePaletteColor(network.linkColor) || '#333333'
  const getLinkStyleLabel = (style: (typeof renderedLinkStyles)[number]) => {
    const authoredLabel: unknown = network.linkStyleLabels?.[style]
    return typeof authoredLabel === 'string' && authoredLabel.trim()
      ? authoredLabel.trim()
      : DEFAULT_LINK_STYLE_LABELS[style]
  }
  const viewTransform = `translate(${chartWidth / 2 + view.offsetX} ${plotHeight / 2 + view.offsetY}) rotate(${
    view.rotation
  }) scale(${view.scale}) translate(${-chartWidth / 2} ${-plotHeight / 2})`
  const zoomBy = (factor: number) =>
    setView(current => constrainView({ ...current, scale: Math.min(4, Math.max(0.25, current.scale * factor)) }))
  const resetView = () => setView(getInitialView())
  const handlePointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
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

  const LinkComponent = ({ link }: { link: NetworkLayoutLink }) => {
    const endpoints = network.directed
      ? `${link.source.id} to ${link.target.id}`
      : `${link.source.id} and ${link.target.id}`
    const label = `${endpoints}, ${link.style} link${prepared.hasWeights ? `, weight ${link.weight}` : ''}`
    const deltaX = link.target.x - link.source.x
    const deltaY = link.target.y - link.source.y
    const distance = Math.hypot(deltaX, deltaY) || 1
    const offsetX = (deltaX / distance) * nodeRadius
    const offsetY = (deltaY / distance) * nodeRadius
    const lineCoordinates = {
      x1: link.source.x + offsetX,
      y1: link.source.y + offsetY,
      x2: link.target.x - offsetX,
      y2: link.target.y - offsetY
    }
    return (
      <g
        className='network-chart__link-group'
        tabIndex={0}
        role='img'
        aria-label={label}
        data-tooltip-id={config.enableTooltips ? tooltipId : undefined}
        data-tooltip-content={config.enableTooltips ? label : undefined}
      >
        <line
          {...lineCoordinates}
          className='network-chart__link-hitbox'
          stroke='transparent'
          strokeWidth={Math.max(link.strokeWidth, 12)}
          pointerEvents='stroke'
        />
        <line
          {...lineCoordinates}
          aria-hidden='true'
          className={`network-chart__link${link.style === 'dashed' ? ' network-chart__link--dashed' : ''}`}
          stroke={linkColor}
          strokeWidth={link.strokeWidth}
          markerEnd={network.directed ? `url(#${markerId})` : undefined}
        />
      </g>
    )
  }

  const NodeComponent = ({ node }: { node: NetworkLayoutNode }) => {
    const placement = labelsByNodeId.get(node.id)
    const label = `${node.id}, ${node.connectionCount} connection${node.connectionCount === 1 ? '' : 's'}`
    return (
      <g
        className='network-chart__node'
        tabIndex={0}
        role='img'
        aria-label={label}
        data-tooltip-id={config.enableTooltips ? tooltipId : undefined}
        data-tooltip-content={config.enableTooltips ? label : undefined}
      >
        <circle r={nodeRadius} fill={node.color || nodeColor} />
        {placement && (
          <text
            className={`network-chart__label network-chart__label--${placement.anchor}`}
            x={placement.x}
            y={placement.y}
            textAnchor={placement.textAnchor}
            dominantBaseline={placement.dominantBaseline}
            fill='currentColor'
          >
            {node.id}
          </text>
        )}
      </g>
    )
  }

  return (
    <div className='network-chart__container' style={{ height: chartHeight }}>
      {renderedLinkStyles.length > 0 && (
        <div className='network-chart__link-key' role='group' aria-label='Link styles'>
          {renderedLinkStyles.map(style => (
            <div className='network-chart__link-key-item' key={style}>
              <svg aria-hidden='true' width='36' height='12' viewBox='0 0 36 12'>
                <line
                  className={`network-chart__link-key-line${style === 'dashed' ? ' network-chart__link--dashed' : ''}`}
                  x1='1'
                  x2='35'
                  y1='6'
                  y2='6'
                  stroke={linkColor}
                  strokeWidth='2'
                />
              </svg>
              <span>{getLinkStyleLabel(style)}</span>
            </div>
          ))}
        </div>
      )}
      <div className='network-chart__plot'>
        {prepared.rejectedRowCount > 0 && (
          <div className='network-chart__status' role='status'>
            {prepared.rejectedRowCount} invalid row(s) excluded.
          </div>
        )}
        <svg
          className='network-chart'
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
          <defs>
            <marker
              id={markerId}
              viewBox='0 0 10 10'
              refX='10'
              refY='5'
              markerWidth='7'
              markerHeight='7'
              orient='auto-start-reverse'
            >
              <path d='M 0 0 L 10 5 L 0 10 z' fill={linkColor} />
            </marker>
          </defs>
          <g className='network-chart__viewport' transform={viewTransform}>
            <Graph<NetworkLayoutLink, NetworkLayoutNode>
              graph={layout}
              linkComponent={LinkComponent}
              nodeComponent={NodeComponent}
            />
          </g>
        </svg>
        <div
          className='network-chart__controls'
          role='group'
          aria-label='Network view controls'
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
        {config.enableTooltips && <ReactTooltip id={tooltipId} variant='light' className='network-chart__tooltip' />}
      </div>
    </div>
  )
}

export default Network
