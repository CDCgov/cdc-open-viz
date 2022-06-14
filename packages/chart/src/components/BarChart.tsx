import React, { useContext, useState, useEffect } from 'react';

import { Group } from '@visx/group';
import { BarGroup, BarStack } from '@visx/shape';
import { Text } from '@visx/text';
import chroma from 'chroma-js';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';

import Context from '../context';
import ReactTooltip from 'react-tooltip';
import { BarStackHorizontal } from '@visx/shape';



export default function BarChart({ xScale, yScale, seriesScale, xMax, yMax, getXAxisData, getYAxisData }) {
  const { transformedData: data, colorScale, seriesHighlight, config, formatNumber, updateConfig, setParentConfig, colorPalettes } = useContext<any>(Context);
  const { orientation, visualizationSubType } = config;
  const isHorizontal = orientation === 'horizontal';

  const lollipopBarWidth = config.lollipopSize === 'large' ? 7 : config.lollipopSize === 'medium' ? 6 : 5;
  const lollipopShapeSize = config.lollipopSize === 'large' ? 14 : config.lollipopSize === 'medium' ? 12 : 10;

  const isLabelBelowBar = config.yAxis.labelPlacement === "Below Bar";
  const isLabelOnYAxis = config.yAxis.labelPlacement === "On Date/Category Axis";
  const isLabelOnBar = config.yAxis.labelPlacement === "On Bar";
  const isLabelMissing = !config.yAxis.labelPlacement;
  const displayNumbersOnBar = config.yAxis.displayNumbersOnBar;

  const isStacked = config.visualizationSubType === 'stacked';
  const isRounded = config.barStyle==='rounded';
  const tipRounding =  config.tipRounding ;
  const roundingStyle = config.roundingStyle;
  const radius = config.roundingStyle ==='standard' ? '8px' : config.roundingStyle ==='shallow' ? '5px': config.roundingStyle ==='finger' ? '15px':'0px';
  let style = {};
  if(isHorizontal  && isRounded && isStacked ) style = tipRounding==='top'  ? {borderRadius:`0 ${radius} ${radius} 0  `}:tipRounding==='full'  && config.runtime.seriesKeys.length>1  ? {borderRadius:`0  ${radius} ${radius} 0`} : {borderRadius: radius};
  if(!isHorizontal && isRounded && isStacked ) style = tipRounding==='top'  ? {borderRadius:`${radius} ${radius} 0 0  `}:tipRounding==='full'  && config.runtime.seriesKeys.length>1  ? {borderRadius:`${radius} ${radius} 0 0 `} : {borderRadius: radius};
  if(isHorizontal  && isRounded && !isStacked) style = tipRounding==='top'  ? {borderRadius:`0 ${radius} ${radius} 0  `}:tipRounding==='full'  ? {borderRadius:radius}:{};
  if(!isHorizontal && isRounded && !isStacked) style = tipRounding==='top'  ? {borderRadius:` ${radius} ${radius} 0 0 `}:tipRounding==='full'  ? {borderRadius:radius}:{};

  // Using State
  const [horizBarHeight, setHorizBarHeight] = useState(null);
  const [textWidth, setTextWidth] = useState(null);

  useEffect(() => {
    if(orientation === "horizontal" && !config.yAxis.labelPlacement) {
      updateConfig({
        ...config,
        yAxis: {
          ...config,
          labelPlacement: "Below Bar"
        }
      })
    }
  }, [config, updateConfig]);

  useEffect(() => {
    if(config.isLollipopChart === false && config.barHeight < 25) {
      updateConfig({ ...config, barHeight: 25 })
    }
  }, [config.isLollipopChart]);

  useEffect(() => {
    if(config.visualizationSubType === 'horizontal') {
      updateConfig({
        ...config,
        orientation: 'horizontal'
      })
    }
  }, []);
  
  useEffect(()=>{
    if(config.barStyle==='lollipop' && !config.isLollipopChart ){
     updateConfig({ ...config, isLollipopChart:true })
    }
    if( isRounded || config.barStyle==='flat' ){
    updateConfig({ ...config, isLollipopChart:false })
    }
  },[config.barStyle])

  return (
    <ErrorBoundary component="BarChart">
      <Group left={config.runtime.yAxis.size}>
        
        {/* Stacked Vertical */}
        { config.visualizationSubType === 'stacked' && !isHorizontal && (
          <BarStack
            data={data}
            keys={(config.runtime.barSeriesKeys || config.runtime.seriesKeys)}
            x={(d: any) => d[config.runtime.xAxis.dataKey]}
            xScale={xScale}
            yScale={yScale}
            color={colorScale}
          >
            {barStacks => barStacks.reverse().map(barStack => barStack.bars.map(bar => {
              let yAxisTooltip = config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${formatNumber(bar.bar ? bar.bar.data[bar.key] : 0)}` : formatNumber(bar.bar ? bar.bar.data[bar.key] : 0)
              let xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${data[bar.index][config.runtime.xAxis.dataKey]}` : data[bar.index][config.runtime.xAxis.dataKey]

              const tooltip = `<div>
              ${yAxisTooltip}<br />
              ${xAxisTooltip}<br />
              ${config.seriesLabel ? `${config.seriesLabel}: ${bar.key}` : ''}`

              let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1;
              let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1;
              let barThickness = xMax / barStack.bars.length;
              let barThicknessAdjusted = barThickness * (config.barThickness || 0.8);
              let offset = barThickness * (1 - (config.barThickness || 0.8)) / 2;
              return (
              <Group key={`bar-stack-${barStack.index}-${bar.index}`}>
              <Text
                display={config.labels && displayBar ? 'block' : 'none'}
                opacity={transparentBar ? 0.5 : 1}
                x={barThickness * (bar.index + 0.5) + offset}
                y={bar.y - 5}
                fill={bar.color}
                textAnchor="middle">
                  {formatNumber(bar.bar ? bar.bar.data[bar.key] : 0)}
              </Text>
              <foreignObject 
                key={`bar-stack-${barStack.index}-${bar.index}`}
                className={`${isRounded && barStacks.length > 1 ? ` ${roundingStyle} stack-vertical-${tipRounding}-${barStack.index}` : ''}`}
                x={barThickness * bar.index + offset}
                y={bar.y}
                width={barThicknessAdjusted}
                height={bar.height}
                style={{background:bar.color,border:`${config.barBorderThickness ||1}px solid #333`,...style}}
                opacity={transparentBar ? 0.5 : 1}
                display={displayBar ? 'block' : 'none'}
                data-tip={tooltip}
                data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
              >  </foreignObject> 
              </Group>
            )}
            ))}
          </BarStack>
        )}

        {/* Stacked Horizontal */}
        { config.visualizationSubType === 'stacked' && isHorizontal && (
          <>
          <BarStackHorizontal
              data={data}
              keys={(config.runtime.barSeriesKeys || config.runtime.seriesKeys)}
              height={yMax }
              y={(d: any) => d[config.runtime.yAxis.dataKey]}
              xScale={xScale}
              yScale={yScale}
              color={colorScale}
              offset="none"
            >
              {(barStacks) =>
                barStacks.map((barStack) =>
                  barStack.bars.map((bar, index) => {
                    
                    let yAxisTooltip = config.yAxis.label ? `${config.yAxis.label}: ${data[bar.index][bar.key]}` : `${bar.key}: ${data[bar.index][bar.key]}`
                    let xAxisTooltip = config.xAxis.label ? `${config.xAxis.label}: ${data[bar.index][config.runtime.originalXAxis.dataKey]}` :`${data[bar.index].name}`
                    const tooltip = `<div>
                    ${yAxisTooltip}<br />
                    ${xAxisTooltip}<br />
                    ${config.seriesLabel ? `${config.seriesLabel}: ${bar.key}` : ''}`
                    let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1;
                    let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1;
                    const barsPerGroup = config.series.length;
                    let barHeight = config.barHeight ? config.barHeight : 25;
                    let barPadding = barHeight;

                    config.barHeight = Number(config.barHeight)
                    
                    if (orientation=== "horizontal") {
  
                      if(isLabelBelowBar || isLabelMissing || isLabelOnYAxis) {
                        if(barHeight < 40) {
                          config.barPadding = 40;
                        } else {
                          config.barPadding = Number(barPadding);
                        }
                      } else {
                        config.barPadding = Number(barPadding) / 2;
                      }
                    }

                    config.height = (Number(barHeight) ) * data.length + (Number(config.barPadding) * data.length);

                    let labelColor = "#000000";

                    let textPosition = (bar.y - config.barPadding/2 - Number(config.barHeight/2) + Number(config.barHeight) ) + 5;

                    if (chroma.contrast(labelColor, bar.color) < 4.9) {
                      labelColor = '#FFFFFF';
                    }

                    return (
                      <Group key={index}>
                          <foreignObject
                          className={`${isRounded && barStacks.length > 1 ? ` ${roundingStyle} stack-horizontal-${tipRounding}-${barStack.index}` : ''}`}
                          key={`barstack-horizontal-${barStack.index}-${bar.index}-${index}`}
                          x={bar.x}
                          y={ bar.y - config.barPadding/2 - config.barHeight/2 }
                          width={bar.width}
                          height={config.barHeight}
                          stroke="#333"
                          style={{background:bar.color,border:`${config.barBorderThickness ||1}px solid #333`,...style}}
                          opacity={transparentBar ? 0.5 : 1}
                          display={displayBar ? 'block' : 'none'}
                          data-tip={tooltip}
                          data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                        ></foreignObject>

                      {(orientation === 'horizontal' && visualizationSubType === 'stacked') && isLabelBelowBar && barStack.index === 0 && !config.yAxis.hideLabel &&
                          <Text
                            x={ `${bar.x + (config.isLollipopChart ? 15 : 5)}` } // padding
                            y={textPosition}
                            fill={ '#000000' }
                            textAnchor="start"
                            verticalAnchor="start"
                          >
                           {data[bar.index][config.runtime.originalXAxis.dataKey]}
                          </Text>
                      }

                      { displayNumbersOnBar && textWidth + 50 < bar.width &&
                          <Text
                            x={ bar.x + barStack.bars[bar.index].width / 2 } // padding
                            y={ textPosition - 5 - config.barHeight/2 }
                            fill={ labelColor }
                            textAnchor="middle"
                            verticalAnchor="middle"
                            innerRef={
                              (e) => {
                                if(e) {
                                  // use font sizes and padding to set the bar height
                                  let elem = e.getBBox()
                                    setTextWidth(elem.width)
                                }
                              }
                            }
                          >
                            {  data[bar.index][bar.key]}
                          </Text>
                      }
                      </Group>
                    )
                  }
                ))
              }
            </BarStackHorizontal>
          </>
        )}

        {/* Bar Groups: Not Stacked */}
        { config.visualizationSubType !== 'stacked' && (
          <Group>
            <BarGroup
              data={data}
              keys={(config.runtime.barSeriesKeys || config.runtime.seriesKeys)}
              height={yMax}
              x0={(d: any) => d[config.runtime.originalXAxis.dataKey]}
              x0Scale={config.runtime.horizontal ? yScale : xScale}
              x1Scale={seriesScale}
              yScale={config.runtime.horizontal ? xScale : yScale}
              color={() => {return '';}}
            >
              {(barGroups) => {

                if (orientation=== "horizontal") {
                  const barsPerGroup = config.series.length;
                  let barHeight = config.barHeight ? config.barHeight : 25;
                  let barPadding = barHeight;

                  if(isLabelBelowBar || isLabelMissing || isLabelOnYAxis) {
                    if(barHeight < 40) {
                      config.barPadding = 40;
                    } else {
                      config.barPadding = barPadding;
                    }
                  } else {
                    config.barPadding = barPadding / 2;
                  }

                  if(config.isLollipopChart && config.yAxis.labelPlacement === 'Below Bar') {
                    config.barPadding = config.barPadding + 7;
                  }
                  config.barHeight = config.isLollipopChart ? lollipopBarWidth : barHeight;
                  config.height = (barsPerGroup * barHeight) * barGroups.length + (config.barPadding * barGroups.length);
                }

                return barGroups.map((barGroup, index) => (
                <Group 
                  className={`bar-group-${barGroup.index}-${barGroup.x0}--${index}`}
                  key={`bar-group-${barGroup.index}-${barGroup.x0}--${index}`} 
                  top={config.runtime.horizontal ? yMax / barGroups.length * barGroup.index : 0} 
                  left={config.runtime.horizontal ? 0 : xMax / barGroups.length * barGroup.index}>
                  {barGroup.bars.map((bar,index) => {

                    let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1;
                    let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1;
                    let barHeight = orientation === "horizontal" ? config.barHeight : Math.abs(yScale(bar.value) - yScale(0));
                    let barY = bar.value >= 0 ? bar.y : yScale(0);
                    let barGroupWidth = (config.runtime.horizontal ? yMax : xMax) / barGroups.length * (config.barThickness || 0.8);
                    let offset = (config.runtime.horizontal ? yMax : xMax) / barGroups.length * (1 - (config.barThickness || 0.8)) / 2;

                    // ! Unsure if this should go back.
                    if(config.isLollipopChart) {
                      offset = ( (config.runtime.horizontal ? yMax : xMax) / barGroups.length / 2) - lollipopBarWidth / 2
                    }

                    let barWidth = config.isLollipopChart ? lollipopBarWidth : barGroupWidth / barGroup.bars.length;
                    let barColor = config.runtime.seriesLabels && config.runtime.seriesLabels[bar.key] ? colorScale(config.runtime.seriesLabels[bar.key]) : colorScale(bar.key);

                    let yAxisValue = formatNumber(bar.value);
                    let xAxisValue = data[barGroup.index][config.runtime.originalXAxis.dataKey];

                    if(config.runtime.horizontal){
                      let tempValue = yAxisValue;
                      yAxisValue = xAxisValue;
                      xAxisValue = tempValue;
                      barWidth = config.barHeight
                    }

                    let yAxisTooltip = config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${yAxisValue}` : yAxisValue
                    let xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisValue
                    let horizBarLabelPadding = null;
                    let labelColor = "#000000";

                    // Set label color
                    if (chroma.contrast(labelColor, barColor) < 4.9) {
                      labelColor = '#FFFFFF';
                    }

                    // font size and text spacing used for centering text on bar
                    if(config.fontSize === "small") {
                      horizBarLabelPadding = 16;
                    } else if(config.fontSize === "medium") {
                      horizBarLabelPadding = 18;
                    } else{
                      horizBarLabelPadding = 20;
                    }
                    const onBarTextSpacing = 25;
                    const tooltip = `<div>
                    ${yAxisTooltip}<br />
                    ${xAxisTooltip}<br />
                    ${config.seriesLabel ? `${config.seriesLabel}: ${bar.key}` : ''}`
                    return (
                    <Group key={`bar-sub-group-${barGroup.index}-${barGroup.x0}-${barY}--${index}`}>
                      <Text
                        display={config.labels && displayBar ? 'block' : 'none'}
                        opacity={transparentBar ? 0.5 : 1}
                        x={barWidth * (barGroup.bars.length - bar.index - 0.5) + offset}
                        y={barY - 5}
                        fill={barColor}
                        textAnchor="middle">
                          {formatNumber(bar.value)}
                      </Text>
                      <foreignObject
                        key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                        x={ config.runtime.horizontal ? 0 : barWidth * (barGroup.bars.length - bar.index - 1) + offset }
                        y={config.runtime.horizontal ? barWidth * (barGroup.bars.length - bar.index - 1) + (config.isLollipopChart && isLabelOnYAxis ? offset : 0) : barY }
                        width={config.runtime.horizontal ?  bar.y : barWidth}
                        height={config.runtime.horizontal ? barWidth : barHeight}
                        style={{
                          background:config.isLollipopChart && config.lollipopColorStyle === 'regular' ? barColor : 
                            config.isLollipopChart && config.lollipopColorStyle === 'two-tone' ? chroma(barColor).brighten(1) : barColor ,
                          border:`${config.isLollipopChart ? 0 : config.barBorderThickness || 1}px solid #333`,
                          ...style
                        }}
                        opacity={transparentBar ? 0.5 : 1}
                        display={displayBar ? 'block' : 'none'}
                        data-tip={tooltip}
                        data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                      ></foreignObject>
                      {config.isLollipopChart && config.lollipopShape === 'circle' &&
                        <circle 
                          cx={orientation === 'horizontal' ? bar.y : barWidth * (barGroup.bars.length - bar.index - 1) + (isLabelBelowBar && orientation === 'horizontal' ? 0 : offset) + lollipopShapeSize/3.5}
                          cy={orientation === 'horizontal' ? lollipopShapeSize/3.5 + (isLabelBelowBar && orientation === 'horizontal' ? 0: offset) : bar.y}
                          r={lollipopShapeSize/2} 
                          fill={barColor} 
                          key={`circle--${bar.index}`}
                          data-tip={tooltip}
                          data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                          style={{ 'opacity': 1, filter: 'unset' }}
                        />
                      }
                      {config.isLollipopChart && config.lollipopShape === 'square' &&
                        <rect 
                          x={
                            (orientation === 'horizontal' && bar.y > 10) ? bar.y - lollipopShapeSize / 2 : (orientation === 'horizontal' && bar.y < 10) ? 0 :
                            (orientation !== 'horizontal') ? offset - lollipopBarWidth / 2 : barWidth * (barGroup.bars.length - bar.index - 1) + offset - 5.25
                          }
                          y={
                            orientation === 'horizontal' ? 0 - lollipopBarWidth / 2 + (isLabelBelowBar ? 0 : offset) : config.height - bar.y > 10 ? bar.y - lollipopShapeSize / 2 : 0 }
                          width={lollipopShapeSize}
                          height={lollipopShapeSize}
                          fill={barColor} 
                          key={`circle--${bar.index}`}
                          data-tip={tooltip}
                          data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                          style={{ 'opacity': 1, filter: 'unset' }}
                        />
                      }
                      {orientation === "horizontal" && textWidth + 100 < bar.y ?
                        config.yAxis.labelPlacement === "On Bar" &&
                          <Group>
                              <Text
                                innerRef={
                                  (e) => {
                                    if(e) {
                                      // use font sizes and padding to set the bar height
                                      let elem = e.getBBox()
                                        setTextWidth(elem.width)
                                        config.barHeight = ( (elem.height * 2) + (horizBarLabelPadding * 2) + onBarTextSpacing / 2 )
                                        config.barPadding = ( horizBarHeight / 2 )
                                    }
                                  }
                                }
                                x={ bar.y - horizBarLabelPadding }
                                y={ barHeight * (barGroup.bars.length - bar.index - 1) + ( horizBarLabelPadding * 2 ) }
                                fill={ labelColor }
                                textAnchor="end"
                              >
                                { yAxisValue }
                              </Text>
                              <Text
                                x={ bar.y - horizBarLabelPadding }
                                y={ barWidth * (barGroup.bars.length - bar.index - 1) + ( horizBarLabelPadding * 2 ) + onBarTextSpacing }
                                fill={ labelColor }
                                textAnchor="end"
                              >
                                { xAxisValue }
                              </Text>
                          </Group>
                        :
                        (isLabelOnBar) &&
                          <Group>
                              {/* hide y label if we're only showing data on bar */}
                              <Text
                                  x={ bar.y + horizBarLabelPadding }
                                  y={ barWidth * (barGroup.bars.length - bar.index - 1) + ( horizBarLabelPadding * 2 ) }
                                  fill={ "#000" }
                                  textAnchor="start"
                                  verticalAnchor="end"
                                >{yAxisValue}</Text>
                              <Text
                                  x={ bar.y + horizBarLabelPadding }
                                  y={ barWidth * (barGroup.bars.length - bar.index - 1) + ( horizBarLabelPadding * 2 ) + onBarTextSpacing }
                                  fill={ "#000" }
                                  textAnchor="start"
                                  verticalAnchor="start"
                                >
                                  { xAxisValue }
                                </Text>
                          </Group>
                      }

                      { orientation === "horizontal" && isLabelBelowBar && !config.yAxis.hideLabel &&
                      <>
                        <Text
                            x={ config.yAxis.hideAxis ? 0 : 5 } // padding
                            y={ config.isLollipopChart ? lollipopShapeSize * config.series.length + 2 : barWidth * config.series.length + 7   }
                            verticalAnchor={"start"}
                            textAnchor={"start"}
                          >{yAxisValue}
                        </Text>

                        { (displayNumbersOnBar) ?
                           (textWidth + 100 < bar.y && !config.isLollipopChart) ?
                            (
                                <Text
                                  x={ bar.y - 5 } // padding
                                  y={ config.isLollipopChart ? offset : (config.barHeight / 2 ) + config.barHeight * (barGroup.bars.length - bar.index - 1) }
                                  fill={ labelColor }
                                  textAnchor="end"
                                  verticalAnchor="middle"
                                >
                                  { xAxisValue }
                                </Text>
                            )
                            : (
                                <Text
                                  x={ `${bar.y + (config.isLollipopChart ? 15 : 5) + (config.isLollipopChart && barGroup.bars.length === bar.index ? offset : 0 ) }`} // padding
                                  y={ config.isLollipopChart ? 0 : (config.barHeight / 2 ) + config.barHeight * (barGroup.bars.length - bar.index - 1)}
                                  fill={ '#000000'}
                                  textAnchor="start"
                                  verticalAnchor="middle"
                                  fontWeight={'normal'}
                                >
                                  { xAxisValue }
                                </Text>
                            )
                          : ""
                        }
                      </>
                      }

                      { (isLabelOnYAxis && orientation === "horizontal") &&
                        <>
                          { (displayNumbersOnBar) ?
                            (textWidth + 100 < bar.y && !config.isLollipopChart) ?
                              (
                                  <Text
                                    x={ bar.y - 5 } // padding
                                    y={ 
                                        config.isLollipopChart ? (config.barHeight * (barGroup.bars.length - bar.index - 1) ) + offset :
                                        (config.barHeight * (barGroup.bars.length - bar.index - 1) )  + (config.barHeight / 2 )
                                      }
                                    fill={ labelColor }
                                    textAnchor="end"
                                    verticalAnchor="middle"
                                  >
                                    { xAxisValue }
                                  </Text>
                              )
                              : (
                                  <Text
                                    x={ `${bar.y + (config.isLollipopChart ? 15 : 5)}` } // padding
                                    y={ 
                                        config.isLollipopChart ? (config.barHeight * (barGroup.bars.length - bar.index - 1) ) + offset :
                                        (config.barHeight * (barGroup.bars.length - bar.index - 1) )  + (config.barHeight / 2 )
                                      }
                                    fill={ '#000000' }
                                    textAnchor="start"
                                    verticalAnchor="middle"
                                  >
                                    { xAxisValue }
                                  </Text>
                              )
                            : ""
                          }
                          </>
                          }
                    </Group>
                  )}
                  )}
                </Group>
                  ))}}
            </BarGroup>

            {Object.keys(config.confidenceKeys).length > 0 ? data.map((d) => {
              let xPos = xScale(getXAxisData(d));
              let upperPos = yScale(getYAxisData(d, config.confidenceKeys.lower));
              let lowerPos = yScale(getYAxisData(d, config.confidenceKeys.upper));
              let tickWidth = 5;

              return (
                <path key={`confidence-interval-${d[config.runtime.originalXAxis.dataKey]}`} stroke="#333" strokeWidth="2px" d={`
                  M${xPos - tickWidth} ${upperPos}
                  L${xPos + tickWidth} ${upperPos}
                  M${xPos} ${upperPos}
                  L${xPos} ${lowerPos}
                  M${xPos - tickWidth} ${lowerPos}
                  L${xPos + tickWidth} ${lowerPos}`}/>
              );
            }) : ''}
          </Group>
        )}
      </Group>
    </ErrorBoundary>
  );
}
