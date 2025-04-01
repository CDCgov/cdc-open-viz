import React, { useContext } from 'react'
import { BarStack, Line } from '@visx/shape'
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import ConfigContext from '../../ConfigContext'
import chroma from 'chroma-js'
import createBarElement from '@cdc/core/components/createBarElement'
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import { APP_FONT_SIZE } from '@cdc/core/helpers/cove/fontSettings'

const CategoricalYAxis = ({ yMax, leftSize, max, xMax }) => {
  const { config } = useContext(ConfigContext)

  const { orientation } = config

  const getValidColor = (color, defaultColor = '#f1f1f1') => {
    try {
      return chroma(color).hex() // Returns the color if valid
    } catch (e) {
      return defaultColor
    }
  }

  const categories = config.yAxis?.categories

  const createDataShape = categories => {
    const categoryObj = [...categories].reduce((acc, item) => {
      acc[item.label] = item.height
      return acc
    }, {})

    return categoryObj
  }
  const updateCategory = categoryObj => {
    // Get all the heights in the object
    const heights = Object.keys(categoryObj)

    // Get the last label
    const lastheight = heights[heights.length - 1]

    // Check if the last label's value is empty
    if (categoryObj[lastheight] === '') {
      // Calculate the sum of the numeric values of all other heights
      const sumOfValues = heights.slice(0, -1).reduce((sum, label) => {
        const value = Number(categoryObj[label])
        return sum + (isNaN(value) ? 0 : value)
      }, 0)

      // Calculate the new value for the last emty height
      const newValue = max - sumOfValues

      // Update the last height with the new value
      categoryObj[lastheight] = newValue
    }

    return [categoryObj]
  }

  const transformedData = updateCategory(createDataShape(categories))

  // Define the scales
  const xScaleValue = 0

  const xScale = scaleBand<number>({
    domain: [xScaleValue],
    padding: 0,
    range: [0, leftSize]
  })

  const yScale = scaleLinear({
    domain: [0, max],
    range: [yMax, 0],
    clamp: true
  })

  const colorScale = scaleOrdinal({
    domain: categories.map(d => d?.label),
    range: categories.map(d => getValidColor(d?.color?.trim()))
  })

  const keys = Object.keys(transformedData[0])
  return (
    <Group left={leftSize - xScale.bandwidth()} top={0}>
      <BarStack
        data={transformedData}
        keys={keys}
        x={() => xScale(xScaleValue)}
        xScale={xScale}
        yScale={yScale}
        color={colorScale}
      >
        {barStacks =>
          barStacks.map(barStack =>
            barStack.bars.map(bar => {
              const isLastIndex = config.yAxis.categories.length - 1 === barStack.index
              const textSize = APP_FONT_SIZE / 1.3
              const textColor = chroma(bar.color).luminance() < 0.4 ? '#fff' : '#000'
              const textWidth = getTextWidth(bar.key, `${textSize}px`)
              const displayText = Number(textWidth) < bar.width && bar.height > textSize
              const tooltip = `<ul>
              <li class="tooltip-heading""> Label : ${bar.key}  </li>
                    </li></ul>`
              return (
                <Group key={`${barStack.index}--${bar.index}--${orientation}`}>
                  <Group
                    key={`bar-stack-${barStack.index}-${bar.index}`}
                    id={`barStack${barStack.index}-${bar.index}`}
                    className='stack vertical'
                  >
                    {createBarElement({
                      type: 'axisBar',
                      config: config,
                      index: barStack.index,
                      background: colorScale(bar.key),
                      borderColor: '#333',
                      borderStyle: 'solid',
                      borderWidth: 0,
                      width: xScale.bandwidth(),
                      height: bar.height,
                      x: bar.x,
                      y: bar.y,
                      tooltipHtml: tooltip,
                      tooltipId: `cdc-open-viz-tooltip-${config.runtime.uniqueId}`
                    })}
                    {/* Label for axis stacks */}
                    <Text // ignore
                      display={!displayText ? 'none' : 'block'}
                      key={`text-${barStack.index}-${bar.index}`}
                      x={bar.x + xScale.bandwidth() / 2}
                      y={bar.y + bar.height / 2}
                      fill={textColor}
                      textAnchor='middle'
                      verticalAnchor='middle'
                      style={{ fontSize: textSize }}
                    >
                      {bar.key}
                    </Text>
                    {/* gridLines */}
                    {config.runtime.yAxis.gridLines && (
                      <Line
                        from={{ x: bar.x + xScale.bandwidth(), y: bar.y }}
                        to={{ x: xMax + xScale.bandwidth(), y: bar.y }}
                        stroke='#d6d6d6'
                      />
                    )}
                    {/* White background spacing between stackes */}
                    {!isLastIndex && <rect x={bar.x} y={bar.y} width={bar.width} height={1} fill={'#fff'}></rect>}
                    {/* Right side Axis line */}
                    <rect x={bar.x + bar.width} y={0} width={1} height={yMax} fill={'#000'}></rect>
                  </Group>
                </Group>
              )
            })
          )
        }
      </BarStack>
    </Group>
  )
}

export default CategoricalYAxis
