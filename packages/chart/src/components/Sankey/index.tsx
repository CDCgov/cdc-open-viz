import { SankeyGraph, sankey, sankeyLinkHorizontal, sankeyLeft } from 'd3-sankey'
import './sankey.scss'
import { useContext, useState, useRef, useEffect } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import ConfigContext from '@cdc/chart/src/ConfigContext'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { ChartContext } from '../../types/ChartContext'

type Link = { source: string; target: string; value: number }

type Data = {
  links: Link[]
}

type SankeyNode = {
  id: string
}

type SankeyProps = {
  width: number
  height: number
  data: Data
}

const Sankey = ({ width, height }: SankeyProps) => {
  // Merges initial-state with the passed config in examples/feature/sankey/initial.json
  const DEBUG = true
  const { config } = useContext<ChartContext>(ConfigContext)
  const { sankey: sankeyConfig } = config
  const data = sankeyConfig?.data
  const [largestGroupWidth, setLargestGroupWidth] = useState(0)
  const groupRefs = useRef([])

  const [tooltipID, setTooltipID] = useState<string>('')

  const handleNodeClick = (nodeId: string) => {
    setTooltipID(nodeId)
  }

  const clearNodeClick = () => {
    setTooltipID('')
  }

  // Uses Visx Groups innerRef to get all Group elements that are mapped.
  // Sets the largest group width in state and subtracts that group the svg width to calculate overall width.
  useEffect(() => {
        let largest = 0
    groupRefs?.current?.map(g => {
      const groupWidth = g?.getBoundingClientRect().width
      if (groupWidth > largest) {
        largest = groupWidth
      }
    })
    setLargestGroupWidth(largest)
  }, [groupRefs])
 
  //Retrieve all the unique values for the Nodes
  const uniqueNodes = Array.from(new Set(data.links.flatMap(link => [link.source, link.target])))

  // Convert JSON data to the format required
  const sankeyData: SankeyGraph<SankeyNode, { source: number; target: number }> = {
    nodes: uniqueNodes.map(nodeId => ({ id: nodeId })),
    links: data.links.map(link => ({
      source: uniqueNodes.findIndex(node => node === link.source),
      target: uniqueNodes.findIndex(node => node === link.target),
      value: link.value
    }))
  }

  let textPositionHorizontal = 5

  // Set the sankey diagram properties
  const sankeyGenerator = sankey<SankeyNode, { source: number; target: number }>()
    .nodeWidth(sankeyConfig.nodeSize.nodeWidth)
    .nodePadding(sankeyConfig.nodePadding)
    .iterations(sankeyConfig.iterations)
    .nodeAlign(sankeyLeft)
    .extent([
      [sankeyConfig.margin.margin_x, sankeyConfig.margin.margin_y],
      [width - textPositionHorizontal - largestGroupWidth, height]
    ])

  const { nodes, links } = sankeyGenerator(sankeyData)

  const nodeIdToExclude = 'nothing' // ID of the nothing node since we dont want that displayed

  // Filter out the node to be excluded
  const filteredNodes = sankeyData.nodes.filter(node => node.id !== nodeIdToExclude)

  const nodeStyle = (id: string) => {
    let textPositionHorizontal = 30
    let textPositionVertical = 0
    let classStyle = 'node-value--storynode'
    let storyNodes = true

    // TODO: need a dynamic way to apply classes here instead of checking static values.
    if (id.toString() !== 'Suicide EMS Responses' && id.toString() !== 'Treated' && id.toString() !== 'Transported to hospital') {
      storyNodes = false
      textPositionVertical = 10
      textPositionHorizontal = 8
      classStyle = 'node-value'
    }

    return { textPositionHorizontal, textPositionVertical, classStyle, storyNodes }
  }

  const activeConnection = (id: String) => {
    const currentNode = sankeyData.nodes.find(node => node.id === id);

    const sourceNodes = [];
    const activeLinks = [];

    if (currentNode) {
      links.forEach((link) => {
        const targetObj: any = link.target
        const sourceObj: any = link.source
        if(targetObj.id === id) {
          sourceNodes.push(sourceObj.id);
        }
      })

      sourceNodes.forEach((id) => {
        links.forEach((link) => {
          const targetObj: any = link.target
          const sourceObj: any = link.source
          if(targetObj.id === tooltipID && sourceObj.id === id) {
            activeLinks.push(link);
          }
        })

      })
    }

    return {sourceNodes, activeLinks}
  }


  const tooltipVal = `${(sankeyConfig.tooltips.find(item => item.node === tooltipID) || {}).value}`;
  const tooltipPct = `(${(sankeyConfig.tooltips.find(item => item.node === tooltipID) || {}).value_pct}%)`;
  const tooltipSummary = `${(sankeyConfig.tooltips.find(item => item.node === tooltipID) || {}).summary}`;
  const tooltipMaleVal = `${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.Gender.some(g => g.gender === 'Male')))?.Gender.find(g => g.gender === 'Male')?.dem_value}`;
  const tooltipMalePct = `(${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.Gender.some(g => g.gender === 'Male')))?.Gender.find(g => g.gender === 'Male')?.dem_pct}%)`;
  const tooltipFemaleVal = `${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.Gender.some(g => g.gender === 'Female')))?.Gender.find(g => g.gender === 'Female')?.dem_value}`;
  const tooltipFemalePct = `(${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.Gender.some(g => g.gender === 'Female')))?.Gender.find(g => g.gender === 'Female')?.dem_pct}%)`;
  const tooltipUnknownVal = `${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.Gender.some(g => g.gender === 'Unknown')))?.Gender.find(g => g.gender === 'Unknown')?.dem_value}`;
  const tooltipUnknownPct = `(${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.Gender.some(g => g.gender === 'Unknown')))?.Gender.find(g => g.gender === 'Unknown')?.dem_pct}%)`;
  const tooltipNonHispanicWVal = `${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.race_and_ethnicity.some(r => r.race_ethnicity === 'Non-Hispanic White')))?.race_and_ethnicity.find(r => r.race_ethnicity === 'Non-Hispanic White')?.dem_value}`;
  const tooltipNonHispanicWPct = `(${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.race_and_ethnicity.some(r => r.race_ethnicity === 'Non-Hispanic White')))?.race_and_ethnicity.find(r => r.race_ethnicity === 'Non-Hispanic White')?.dem_pct}%)`;
  const tooltipNonHispanicBVal = `${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.race_and_ethnicity.some(r => r.race_ethnicity === 'Non-Hispanic Black')))?.race_and_ethnicity.find(r => r.race_ethnicity === 'Non-Hispanic Black')?.dem_value}`;
  const tooltipNonHispanicBPct = `(${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.race_and_ethnicity.some(r => r.race_ethnicity === 'Non-Hispanic Black')))?.race_and_ethnicity.find(r => r.race_ethnicity === 'Non-Hispanic Black')?.dem_pct}%)`;
  const tooltipHispanicVal = `${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.race_and_ethnicity.some(r => r.race_ethnicity === 'Hispanic')))?.race_and_ethnicity.find(r => r.race_ethnicity === 'Hispanic')?.dem_value}`;
  const tooltipHispanicPct = `(${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.race_and_ethnicity.some(r => r.race_ethnicity === 'Hispanic')))?.race_and_ethnicity.find(r => r.race_ethnicity === 'Hispanic')?.dem_pct}%)`;
  const tooltipNonHispanicAIVal = `${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.race_and_ethnicity.some(r => r.race_ethnicity === 'Non-Hispanic American Indian or Alaska Native')))?.race_and_ethnicity.find(r => r.race_ethnicity === 'Non-Hispanic American Indian or Alaska Native')?.dem_value}`;
  const tooltipNonHispanicAIPct = `(${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.race_and_ethnicity.some(r => r.race_ethnicity === 'Non-Hispanic American Indian or Alaska Native')))?.race_and_ethnicity.find(r => r.race_ethnicity === 'Non-Hispanic American Indian or Alaska Native')?.dem_pct}%)`;
  const tooltipNonHispanicAsianVal = `${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.race_and_ethnicity.some(r => r.race_ethnicity === 'Non-Hispanic Asian')))?.race_and_ethnicity.find(r => r.race_ethnicity === 'Non-Hispanic Asian')?.dem_value}`;
  const tooltipNonHispanicAsianPct = `(${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.race_and_ethnicity.some(r => r.race_ethnicity === 'Non-Hispanic Asian')))?.race_and_ethnicity.find(r => r.race_ethnicity === 'Non-Hispanic Asian')?.dem_pct}%)`;
  const tooltipNonHispanicNAVal = `${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.race_and_ethnicity.some(r => r.race_ethnicity === 'Non-Hispanic Native Hawaiian or Other Pacific Islander')))?.race_and_ethnicity.find(r => r.race_ethnicity === 'Non-Hispanic Native Hawaiian or Other Pacific Islander')?.dem_value}`;
  const tooltipNonHispanicNAPct = `(${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.race_and_ethnicity.some(r => r.race_ethnicity === 'Non-Hispanic Native Hawaiian or Other Pacific Islander')))?.race_and_ethnicity.find(r => r.race_ethnicity === 'Non-Hispanic Native Hawaiian or Other Pacific Islander')?.dem_pct}%)`;
  const tooltipMissingVal = `${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.race_and_ethnicity.some(r => r.race_ethnicity === 'Missing')))?.race_and_ethnicity.find(r => r.race_ethnicity === 'Missing')?.dem_value}`;
  const tooltipMissingNAPct = `(${(sankeyConfig.tooltips.find(item => item.node === tooltipID && item.race_and_ethnicity.some(r => r.race_ethnicity === 'Missing')))?.race_and_ethnicity.find(r => r.race_ethnicity === 'Missing')?.dem_pct}%)`;

  const sankeyToolTip = `<div class="sankey-chart__tooltip">
                    <span class="sankey-chart__tooltip--tooltip-header">${tooltipID}</span>
                    <span class="sankey-chart__tooltip--tooltip-header">${tooltipVal} ${tooltipPct}</span>
                    <div class="divider"></div>
                    <span><strong>Summary: </strong>${tooltipSummary}</span>
                    <div class="divider"></div>
                    <div class="sankey-chart__tooltip--info-section">
                    <div>
                      <span><strong>Gender<strong></span>
                        <ul>
                          <li>Male: ${tooltipMaleVal} ${tooltipMalePct}</li>
                          <li>Female: ${tooltipFemaleVal} ${tooltipFemalePct}</li>
                          <li>Unknown: ${tooltipUnknownVal} ${tooltipUnknownPct}</li>
                        </ul>
                      </div>
                      <div>
                      <span><strong>Race and ethnicity<strong></span>
                        <ul>
                          <li>Non-Hispanic White: ${tooltipNonHispanicWVal} ${tooltipNonHispanicWPct}</li>
                          <li>Non-Hispanic Black: ${tooltipNonHispanicBVal} ${tooltipNonHispanicBPct}</li>
                          <li>Hispanic: ${tooltipHispanicVal} ${tooltipHispanicPct}</li>
                          <li>Non-Hispanic American Indian or Alaska Native: ${tooltipNonHispanicAIVal} ${tooltipNonHispanicAIPct}</li>
                          <li>Non-Hispanic Asian: ${tooltipNonHispanicAsianVal} ${tooltipNonHispanicAsianPct}</li>
                          <li>Non-Hispanic Native Hawaiian or Other Pacific Islander: ${tooltipNonHispanicNAVal} ${tooltipNonHispanicNAPct}</li>
                          <li>Missing: ${tooltipMissingVal} ${tooltipMissingNAPct}</li>
                          </ul>
                      </div>
                    </div>
                  </div>`

  // Draw the nodes
  const allNodes = filteredNodes.map((node, i) => {
    let { textPositionHorizontal, textPositionVertical, classStyle, storyNodes } = nodeStyle(node.id)
    let { sourceNodes } = activeConnection(tooltipID);

    let opacityValue = sankeyConfig.opacity.nodeOpacityDefault
    let nodeColor = sankeyConfig.nodeColor.default

    if (tooltipID !== node.id && tooltipID !== '' && !sourceNodes.includes(node.id)) {
      nodeColor = sankeyConfig.nodeColor.inactive
      opacityValue = sankeyConfig.opacity.nodeOpacityInactive
    }


    return (
      <Group className='' key={i} innerRef={el => (groupRefs.current[i] = el)}>
        <rect
          height={node.y1! - node.y0! + 2} // increasing node size to account for smaller nodes
          width={sankeyGenerator.nodeWidth()}
          x={node.x0}
          y={node.y0! - 1} //adjusting here the node starts so it looks more center with the link
          fill={nodeColor}
          fillOpacity={opacityValue}
          rx={sankeyConfig.rxValue}
          data-tooltip-html={sankeyToolTip}
          data-tooltip-id={`tooltip`}
          onClick={() => handleNodeClick(node.id)}
          style={{ pointerEvents: 'visible', cursor: 'pointer' }}
        />
        {storyNodes ? (
          <>
            <Text
              /* Text Position Horizontal
              x0 is the left edge of the node
              # - positions text # units to the right of the left edge of the node */
              x={node.x0! + textPositionHorizontal}
              textAnchor={filteredNodes.length - 1 === i ? 'end' : 'start'}
              verticalAnchor='end'
              /*Text Position Vertical
              y1 and y0 are the top and bottom edges of the node
              y1+y0 = total height
              dividing by 2 gives you the midpoint of the node
              minus 30 raises the vertical position to be higher
              */
              y={(node.y1! + node.y0!) / 2 - 30}
              /* Using x and y in combination with dominant baseline allows for a more
              precise positioning of the text within the svg
              dominant baseline allows for different vertical alignments
              text-before-edge aligns the text's bottom edge with the bottom edge of the container
              */
              fill={sankeyConfig.nodeFontColor}
              fontWeight='bold' // font weight
              style={{ pointerEvents: 'none' }}
              className='node-text'
            >
              {(sankeyConfig.storyNodeText.find(storyNode => storyNode.StoryNode === node.id) || {}).segmentTextBefore}
            </Text>
            <Text verticalAnchor='end' className={classStyle} x={node.x0! + textPositionHorizontal} y={(node.y1! + node.y0! + 25) / 2} fill={sankeyConfig.nodeFontColor} fontWeight='bold' textAnchor='start' style={{ pointerEvents: 'none' }}>
              {typeof node.value === 'number' ? node.value.toLocaleString() : node.value}
            </Text>
            <Text
              x={node.x0! + textPositionHorizontal}
              // plus 50 will move the vertical position down
              y={(node.y1! + node.y0!) / 2 + 50}
              fill={sankeyConfig.nodeFontColor}
              fontWeight='bold'
              textAnchor={filteredNodes.length === i ? 'end' : 'start'}
              style={{ pointerEvents: 'none' }}
              className='node-text'
              verticalAnchor='end'
            >
              {(sankeyConfig.storyNodeText.find(storyNode => storyNode.StoryNode === node.id) || {}).segmentTextAfter}
            </Text>
          </>
        ) : (
          <>
            <text x={node.x0! + textPositionHorizontal} y={(node.y1! + node.y0!) / 2 + textPositionVertical} dominantBaseline='text-before-edge' fill={sankeyConfig.nodeFontColor} fontWeight='bold' textAnchor='start' style={{ pointerEvents: 'none' }}>
              <tspan id={node.id} className='node-id'>
                {node.id}
              </tspan>
            </text>
            <text
              x={node.x0! + textPositionHorizontal}
              /* adding 30 allows the node value to be on the next line underneath the node id */
              y={(node.y1! + node.y0!) / 2 + 30}
              dominantBaseline='text-before-edge'
              //fill="black"
              fill={sankeyConfig.nodeFontColor}
              //fontSize={16}
              fontWeight='bold'
              textAnchor='start'
              style={{ pointerEvents: 'none' }}
            >
              <tspan className={classStyle}>{sankeyConfig.nodeValueStyle.textBefore + (typeof node.value === 'number' ? node.value.toLocaleString() : node.value) + sankeyConfig.nodeValueStyle.textAfter}</tspan>
            </text>
          </>
        )}
      </Group>
    )
  })

  // Draw the links
  const allLinks = links.map((link, i) => {
    const linkGenerator = sankeyLinkHorizontal()
    const path = linkGenerator(link)
    const sourceObj: any = link.source
    const targetObj: any = link.target
    let opacityValue = sankeyConfig.opacity.LinkOpacityDefault
    let strokeColor = sankeyConfig.linkColor.default

    let { activeLinks } = activeConnection(tooltipID)

    if (!activeLinks.includes(link) && tooltipID !== '') {
      strokeColor = sankeyConfig.linkColor.inactive
      opacityValue = sankeyConfig.opacity.LinkOpacityInactive
    }

    return (
      <path
        key={i}
        d={path!}
        stroke={strokeColor}
        fill='none'
        strokeOpacity={opacityValue}
        strokeWidth={targetObj.id === 'nothing' ? link.width : link.width! + 2}
        //making link widths larger for those that are really small but excluding nothing nodes
      />
    )
  })

  return (
    <div className='sankey-chart'>
      <svg className='sankey-chart__diagram' width={width} height={height} style={{ overflow: 'visible' }}>
        <Group className='links'>{allLinks}</Group>
        <Group className='nodes'>{allNodes}</Group>
      </svg>
      <ReactTooltip id={`tooltip`} afterHide={() => clearNodeClick()} events={['click']} html='true' place='top' style={{ backgroundColor: `rgba(238, 238, 238, 1)`, color: 'black', boxShadow: `0 3px 10px rgb(0 0 0 / 0.2)` }} />
    </div>
  )
}
export default Sankey
