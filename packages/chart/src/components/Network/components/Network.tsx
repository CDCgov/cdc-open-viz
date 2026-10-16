import { useContext, useEffect, useId, useMemo, useRef, useState } from 'react'
import { Graph } from '@visx/network'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

import ConfigContext from '../../../ConfigContext'
import type { ChartContext } from '../../../types/ChartContext'
import { layoutNetwork, resolveNetworkNodeRadius } from '../helpers/layoutNetwork'
import { prepareNetworkData } from '../helpers/prepareNetworkData'
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
  const showLabels = network?.showLabels !== false
  const layout = useMemo(
    () =>
      layoutNetwork(prepared, {
        width: chartWidth,
        height: chartHeight,
        nodeRadius: network?.nodeRadius ?? 8,
        linkDistance: network?.linkDistance ?? 90,
        chargeStrength: network?.chargeStrength ?? -240,
        showLabels
      }),
    [chartHeight, chartWidth, network, prepared, showLabels]
  )
  const constrainedNodeRadius = resolveNetworkNodeRadius(network?.nodeRadius ?? 8, chartWidth, chartHeight, showLabels)
  const constrainView = (nextView: NetworkView): NetworkView => {
    const radians = (nextView.rotation * Math.PI) / 180
    const cosine = Math.cos(radians)
    const sine = Math.sin(radians)
    const centerX = chartWidth / 2
    const centerY = chartHeight / 2
    const padding = constrainedNodeRadius * nextView.scale
    const transformedNodes = layout.nodes.map(node => {
      const x = node.x - centerX
      const y = node.y - centerY
      return {
        x: centerX + nextView.scale * (cosine * x - sine * y),
        y: centerY + nextView.scale * (sine * x + cosine * y)
      }
    })

    if (!transformedNodes.length) return { ...nextView, offsetX: 0, offsetY: 0 }

    const minX = Math.min(...transformedNodes.map(node => node.x)) - padding
    const maxX = Math.max(...transformedNodes.map(node => node.x)) + padding
    const minY = Math.min(...transformedNodes.map(node => node.y)) - padding
    const maxY = Math.max(...transformedNodes.map(node => node.y)) + padding
    const horizontalLimits = [chartWidth - maxX, -minX].sort((a, b) => a - b)
    const verticalLimits = [chartHeight - maxY, -minY].sort((a, b) => a - b)

    return {
      ...nextView,
      offsetX: Math.min(horizontalLimits[1], Math.max(horizontalLimits[0], nextView.offsetX)),
      offsetY: Math.min(verticalLimits[1], Math.max(verticalLimits[0], nextView.offsetY))
    }
  }
  const getInitialView = () =>
    constrainView({
      rotation: Number.isFinite(Number(network?.rotation)) ? Number(network.rotation) : 0,
      scale: Math.min(4, Math.max(0.25, Number.isFinite(Number(network?.scale)) ? Number(network.scale) : 1)),
      offsetX: Number.isFinite(Number(network?.offsetX)) ? Number(network.offsetX) : 0,
      offsetY: Number.isFinite(Number(network?.offsetY)) ? Number(network.offsetY) : 0
    })
  const [view, setView] = useState(getInitialView)
  const dragStart = useRef<{ x: number; y: number; offsetX: number; offsetY: number } | null>(null)

  useEffect(() => {
    setView(getInitialView())
  }, [network?.rotation, network?.scale, network?.offsetX, network?.offsetY, layout])

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
  const viewTransform = `translate(${chartWidth / 2 + view.offsetX} ${chartHeight / 2 + view.offsetY}) rotate(${
    view.rotation
  }) scale(${view.scale}) translate(${-chartWidth / 2} ${-chartHeight / 2})`
  const zoomBy = (factor: number) =>
    setView(current => constrainView({ ...current, scale: Math.min(4, Math.max(0.25, current.scale * factor)) }))
  const rotateBy = (degrees: number) =>
    setView(current => constrainView({ ...current, rotation: current.rotation + degrees }))
  const resetView = () => setView(getInitialView())
  const handlePointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
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
        {showLabels && (
          <text className='network-chart__label' x={nodeRadius + 5} y={0} fill='currentColor'>
            {node.id}
          </text>
        )}
      </g>
    )
  }

  return (
    <div className='network-chart__container' style={{ height: chartHeight }}>
      {prepared.rejectedRowCount > 0 && (
        <div className='network-chart__status' role='status'>
          {prepared.rejectedRowCount} invalid row(s) excluded.
        </div>
      )}
      <svg
        className='network-chart'
        width='100%'
        height='100%'
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        role='group'
        aria-label={handleChartAriaLabels(config)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
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
        <Button type='button' variant='light' size='sm' onClick={() => rotateBy(-15)} aria-label='Rotate left'>
          ↶
        </Button>
        <Button type='button' variant='light' size='sm' onClick={() => rotateBy(15)} aria-label='Rotate right'>
          ↷
        </Button>
        <Button type='button' variant='light' size='sm' onClick={resetView} aria-label='Reset view'>
          Reset
        </Button>
      </div>
      {config.enableTooltips && <ReactTooltip id={tooltipId} variant='light' className='network-chart__tooltip' />}
    </div>
  )
}

export default Network
