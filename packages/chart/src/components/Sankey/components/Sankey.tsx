import { useContext, useMemo, useState } from 'react'

// External Libraries
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { sankey, sankeyJustify, sankeyLinkHorizontal } from 'd3-sankey'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { getPaletteColors } from '@cdc/core/helpers/palettes/utils'

// Cdc
import './../sankey.scss'
import 'react-tooltip/dist/react-tooltip.css'
import ConfigContext from '../../../ConfigContext'
import type { ChartContext } from '../../../types/ChartContext'
import { getSankeyTooltip } from '../helpers/getSankeyTooltip'
import { prepareSankeyData } from '../helpers/prepareSankeyData'
import type { SankeyLayoutLink, SankeyLayoutNode, SankeyProps } from '../types'

const formatNodeValue = (value: unknown, locale?: string) =>
  typeof value === 'number' ? value.toLocaleString(locale) : String(value ?? '')

const Sankey = ({ width, height, runtime }: SankeyProps) => {
  const { colorPalettes, config, handleChartAriaLabels } = useContext<ChartContext>(ConfigContext)
  const { sankey: sankeyConfig } = config
  const [activeNode, setActiveNode] = useState<string>('')

  const preparedData = useMemo(
    () => prepareSankeyData(config?.data, sankeyConfig?.columns),
    [config?.data, sankeyConfig?.columns]
  )
  const paletteColors = useMemo(() => {
    const orderedCustomColors = config.general?.palette?.customColorsOrdered
    const colors =
      Array.isArray(orderedCustomColors) && orderedCustomColors.length > 0
        ? orderedCustomColors
        : getPaletteColors(config, colorPalettes)
    const validColors = colors.filter(color => typeof color === 'string' && color.trim() !== '')

    return validColors.length ? validColors : [sankeyConfig?.nodeColor?.default || '#005eaa']
  }, [colorPalettes, config, sankeyConfig?.nodeColor?.default])

  const paletteColorPair = useMemo(
    () => ({
      node: paletteColors[0] || sankeyConfig?.nodeColor?.default || '#005eaa',
      link: paletteColors[paletteColors.length - 1] || sankeyConfig?.linkColor?.default || paletteColors[0] || '#7bafd4'
    }),
    [paletteColors, sankeyConfig?.linkColor?.default, sankeyConfig?.nodeColor?.default]
  )

  const layout = useMemo(() => {
    const containerWidth = Number(width) || 640
    const isCompact = containerWidth < 520
    const configuredHorizontalScrollWidth = sankeyConfig?.horizontalScrollWidth
    const hasHorizontalScrollWidth =
      (typeof configuredHorizontalScrollWidth === 'number' &&
        Number.isFinite(configuredHorizontalScrollWidth) &&
        configuredHorizontalScrollWidth > 0) ||
      (typeof configuredHorizontalScrollWidth === 'string' &&
        configuredHorizontalScrollWidth.trim() !== '' &&
        Number.isFinite(Number(configuredHorizontalScrollWidth)) &&
        Number(configuredHorizontalScrollWidth) > 0)
    const horizontalScrollWidth = hasHorizontalScrollWidth ? Number(configuredHorizontalScrollWidth) : containerWidth
    const isScrollable = hasHorizontalScrollWidth && containerWidth < horizontalScrollWidth
    const labelWidth = isCompact
      ? Math.max(64, Math.min(96, Math.floor(containerWidth * 0.28)))
      : Math.max(128, Math.min(180, Math.floor(containerWidth * 0.22)))
    const horizontalMargin = Math.max(Number(sankeyConfig?.margin?.margin_x) || 0, labelWidth + 16)
    const topMargin = Math.max(Number(sankeyConfig?.margin?.margin_y) || 0, 18)
    const bottomMargin = 28
    const layoutWidth = Math.max(isScrollable ? horizontalScrollWidth : containerWidth, horizontalMargin * 2 + 120)
    const configuredHeight = Number(config?.heights?.vertical) || Number(height) || 500
    const minimumHeight = Math.max(
      isCompact ? 360 : 420,
      preparedData.nodes.length * (isCompact ? 28 : 34),
      preparedData.links.length * 20
    )
    const layoutHeight = Math.max(configuredHeight, minimumHeight)
    const nodeWidth = Math.max(10, Math.min(Number(sankeyConfig?.nodeSize?.nodeWidth) || 18, isCompact ? 14 : 24))
    const nodePadding = Math.max(8, Math.min(Number(sankeyConfig?.nodePadding) || 24, isCompact ? 16 : 32))
    const iterations = Math.max(Number(sankeyConfig?.iterations) || 1, 6)

    try {
      const graph = {
        nodes: preparedData.nodes.map(node => ({ ...node })),
        links: preparedData.links.map(link => ({ ...link }))
      }

      const sankeyGenerator = sankey<SankeyLayoutNode, any>()
        .nodeId(node => node.id)
        .nodeWidth(nodeWidth)
        .nodePadding(nodePadding)
        .iterations(iterations)
        .nodeAlign(sankeyJustify)
        .extent([
          [horizontalMargin, topMargin],
          [layoutWidth - horizontalMargin, layoutHeight - bottomMargin]
        ])

      const sankeyGraph = sankeyGenerator(graph as any)

      return {
        error: '',
        isCompact,
        isScrollable,
        labelWidth,
        links: sankeyGraph.links as SankeyLayoutLink[],
        nodes: sankeyGraph.nodes as SankeyLayoutNode[],
        width: layoutWidth,
        height: layoutHeight
      }
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'Unable to render Sankey data.',
        isCompact,
        isScrollable,
        labelWidth,
        links: [] as SankeyLayoutLink[],
        nodes: [] as SankeyLayoutNode[],
        width: layoutWidth,
        height: layoutHeight
      }
    }
  }, [height, preparedData, sankeyConfig, width, config?.heights?.vertical])

  const activeFlow = useMemo(() => {
    if (!activeNode) return null

    const nodeIds = new Set<string>([activeNode])
    const linkIds = new Set<string>()
    const nodesToVisit = [activeNode]

    while (nodesToVisit.length) {
      const currentNodeId = nodesToVisit.shift()
      const downstreamLinks = layout.links.filter(link => link.source.id === currentNodeId)

      downstreamLinks.forEach(link => {
        linkIds.add(link.id)

        if (!nodeIds.has(link.target.id)) {
          nodeIds.add(link.target.id)
          nodesToVisit.push(link.target.id)
        }
      })
    }

    return { nodeIds, linkIds }
  }, [activeNode, layout.links])

  if (config.visualizationType !== 'Sankey') return null

  const tooltipId = `cdc-open-viz-tooltip-${runtime?.uniqueId || 'chart'}-sankey`
  const hasRenderableData = layout.links.length > 0 && layout.nodes.length > 0
  const valuePrefix = sankeyConfig?.nodeValueStyle?.textBefore ?? '('
  const valueSuffix = sankeyConfig?.nodeValueStyle?.textAfter ?? ')'
  const a11y = handleChartAriaLabels(config)

  const toggleActiveNode = (nodeId: string) => {
    setActiveNode(currentActiveNode => (currentActiveNode === nodeId ? '' : nodeId))
  }

  const handleKeyboardToggle = (event: React.KeyboardEvent<SVGElement>, nodeId: string) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    toggleActiveNode(nodeId)
  }

  const getNodeOpacity = (nodeId: string) => {
    if (!activeFlow) return Number(sankeyConfig?.opacity?.nodeOpacityDefault) || 1
    return activeFlow.nodeIds.has(nodeId)
      ? Number(sankeyConfig?.opacity?.nodeOpacityDefault) || 1
      : Number(sankeyConfig?.opacity?.nodeOpacityInactive) || 0.1
  }

  const getLinkOpacity = (link: SankeyLayoutLink) => {
    if (!activeFlow) return Number(sankeyConfig?.opacity?.LinkOpacityDefault) || 0.75
    return activeFlow.linkIds.has(link.id)
      ? Number(sankeyConfig?.opacity?.LinkOpacityDefault) || 0.75
      : Number(sankeyConfig?.opacity?.LinkOpacityInactive) || 0.1
  }

  const getNodeColor = (nodeId: string) =>
    !activeFlow || activeFlow.nodeIds.has(nodeId)
      ? paletteColorPair.node
      : sankeyConfig?.nodeColor?.inactive || '#808080'

  const getLinkColor = (link: SankeyLayoutLink) =>
    !activeFlow || activeFlow.linkIds.has(link.id)
      ? paletteColorPair.link
      : sankeyConfig?.linkColor?.inactive || '#D3D3D3'

  if (!hasRenderableData) {
    return (
      <div className='sankey-chart sankey-chart--empty' role='status'>
        {layout.error || config?.chartMessage?.noData || 'No Data Available'}
      </div>
    )
  }

  return (
    <div
      className={`sankey-chart${layout.isCompact ? ' sankey-chart--compact' : ''}${
        layout.isScrollable ? ' sankey-chart--scrollable' : ''
      }`}
    >
      <div
        className='sankey-chart__scroll-area'
        role={layout.isScrollable ? 'region' : undefined}
        tabIndex={layout.isScrollable ? 0 : undefined}
        aria-label={layout.isScrollable ? 'Scrollable Sankey diagram' : undefined}
      >
        <svg
          className='sankey-chart__diagram'
          height={layout.height}
          role='img'
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          width={layout.isScrollable ? layout.width : '100%'}
          aria-label={a11y}
          data-rejected-row-count={preparedData.rejectedRowCount}
        >
          <Group className='sankey-chart__links'>
            {layout.links.map(link => {
              const path = sankeyLinkHorizontal()(link as any)
              const tooltipValue = formatNodeValue(link.value, config.locale)
              const linkOpacity = getLinkOpacity(link)
              const linkWidth = Math.max(1, link.width || 1)

              return (
                <path
                  key={link.id}
                  className='sankey-chart__link'
                  d={path || ''}
                  fill='none'
                  stroke={getLinkColor(link)}
                  strokeOpacity={linkOpacity}
                  strokeWidth={linkWidth}
                  onClick={() => toggleActiveNode(link.source.id)}
                  data-tooltip-html={config.enableTooltips ? getSankeyTooltip(link.target.id, tooltipValue) : undefined}
                  data-tooltip-id={tooltipId}
                  data-link-source-id={link.source.id}
                  data-link-target-id={link.target.id}
                />
              )
            })}
          </Group>

          <Group className='sankey-chart__nodes'>
            {layout.nodes.map(node => {
              const nodeHeight = Math.max(1, (node.y1 || 0) - (node.y0 || 0))
              const nodeWidth = Math.max(1, (node.x1 || 0) - (node.x0 || 0))
              const labelOnLeft = !node.targetLinks?.length
              const labelX = labelOnLeft ? (node.x0 || 0) - 8 : (node.x1 || 0) + 8
              const labelY = ((node.y0 || 0) + (node.y1 || 0)) / 2
              const value = formatNodeValue(node.value, config.locale)
              const label = `${node.id} ${valuePrefix}${value}${valueSuffix}`
              const tooltipValue = `${node.id}: ${value}`

              return (
                <Group key={node.id} className='sankey-chart__node-group'>
                  <rect
                    className='sankey-chart__node'
                    height={nodeHeight}
                    width={nodeWidth}
                    x={node.x0}
                    y={node.y0}
                    fill={getNodeColor(node.id)}
                    fillOpacity={getNodeOpacity(node.id)}
                    rx={Number(sankeyConfig?.rxValue) || 0}
                    role='button'
                    tabIndex={0}
                    aria-label={`${node.id}, ${value}`}
                    onClick={() => toggleActiveNode(node.id)}
                    onKeyDown={event => handleKeyboardToggle(event, node.id)}
                    data-tooltip-html={config.enableTooltips ? getSankeyTooltip(node.id, tooltipValue) : undefined}
                    data-tooltip-id={tooltipId}
                    data-node-id={node.id}
                  />
                  <Text
                    className='sankey-chart__label'
                    data-label-side={labelOnLeft ? 'left' : 'right'}
                    data-node-id={node.id}
                    dominantBaseline='middle'
                    fill={sankeyConfig?.nodeFontColor}
                    fontWeight={600}
                    pointerEvents='none'
                    textAnchor={labelOnLeft ? 'end' : 'start'}
                    verticalAnchor='middle'
                    width={layout.labelWidth}
                    x={labelX}
                    y={labelY}
                  >
                    {label}
                  </Text>
                </Group>
              )
            })}
          </Group>
        </svg>
      </div>

      <ReactTooltip
        id={tooltipId}
        afterHide={() => setActiveNode('')}
        events={['click']}
        place='bottom'
        style={{
          backgroundColor: 'rgba(238, 238, 238, 1)',
          color: 'black',
          boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
        }}
      />
    </div>
  )
}

export default Sankey
