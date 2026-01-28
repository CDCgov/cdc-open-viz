import React, { useContext } from 'react'
import ConfigContext from '../../ConfigContext'
import { VISUALIZATION_TYPES, LINE_CHART_EXCLUDED_TYPES } from './linearChart.constants'

// Visualization components
import { AreaChartStacked } from '../AreaChart'
import BarChart from '../BarChart'
import BoxPlotVertical from '../BoxPlot/BoxPlot.Vertical'
import BoxPlotHorizontal from '../BoxPlot/BoxPlot.Horizontal'
import DeviationBar from '../DeviationBar'
import Forecasting from '../Forecasting'
import ForestPlot from '../ForestPlot'
import LineChart from '../LineChart'
import PairedBarChart from '../PairedBarChart'
import ScatterPlot from '../ScatterPlot'
import WarmingStripes from '../WarmingStripes'

interface VisualizationRendererProps {
  xScale: any
  yScale: any
  xMax: number
  yMax: number
  seriesScale: any
  xScaleNoPadding: any
  min: number
  max: number
  parentWidth: number
  yAxisWidth: number
  forestHeight: number
  animatedChart: boolean
  tooltipData: any
  showTooltip: any
  handleTooltipMouseOver: (e: any, additionalData?: any) => void
  handleTooltipMouseOff: () => void
  handleTooltipClick: (e: any) => void
  getXAxisData: (d: any) => any
  getYAxisData: (d: any, seriesKey: string) => any
  svgRef: React.RefObject<any>
  forestPlotRightLabelRef: React.RefObject<any>
}

const VisualizationRenderer: React.FC<VisualizationRendererProps> = ({
  xScale,
  yScale,
  xMax,
  yMax,
  seriesScale,
  xScaleNoPadding,
  min,
  max,
  parentWidth,
  yAxisWidth,
  forestHeight,
  animatedChart,
  tooltipData,
  showTooltip,
  handleTooltipMouseOver,
  handleTooltipMouseOff,
  handleTooltipClick,
  getXAxisData,
  getYAxisData,
  svgRef,
  forestPlotRightLabelRef
}) => {
  const { config, convertLineToBarGraph } = useContext(ConfigContext)
  const { visualizationType, visualizationSubType } = config

  return (
    <>
      {/* Deviation Bar */}
      {visualizationType === 'Deviation Bar' && config.runtime.series?.length === 1 && (
        <DeviationBar animatedChart={animatedChart} xScale={xScale} yScale={yScale} width={xMax} height={yMax} />
      )}

      {/* Paired Bar Chart */}
      {visualizationType === 'Paired Bar' && <PairedBarChart originalWidth={parentWidth} width={xMax} height={yMax} />}

      {/* Scatter Plot */}
      {visualizationType === 'Scatter Plot' && (
        <ScatterPlot
          xScale={xScale}
          yScale={yScale}
          getXAxisData={getXAxisData}
          getYAxisData={getYAxisData}
          xMax={xMax}
          yMax={yMax}
          handleTooltipMouseOver={handleTooltipMouseOver}
          handleTooltipMouseOff={handleTooltipMouseOff}
          handleTooltipClick={handleTooltipClick}
          tooltipData={tooltipData}
          showTooltip={showTooltip}
        />
      )}

      {/* Warming Stripes */}
      {visualizationType === 'Warming Stripes' && (
        <WarmingStripes xScale={xScale} yScale={yScale} xMax={xMax} yMax={yMax} />
      )}

      {/* Box Plot - Vertical */}
      {visualizationType === 'Box Plot' && config.orientation === 'vertical' && (
        <BoxPlotVertical
          seriesScale={seriesScale}
          xMax={xMax}
          yMax={yMax}
          min={min}
          max={max}
          xScale={xScale}
          yScale={yScale}
        />
      )}

      {/* Box Plot - Horizontal */}
      {visualizationType === 'Box Plot' && config.orientation === 'horizontal' && (
        <BoxPlotHorizontal
          seriesScale={seriesScale}
          xMax={xMax}
          yMax={yMax}
          min={min}
          max={max}
          xScale={xScale}
          yScale={yScale}
        />
      )}

      {/* Area Chart (Stacked) - also used by Combo */}
      {((visualizationType === 'Area Chart' && visualizationSubType === 'stacked') ||
        visualizationType === 'Combo') && (
        <AreaChartStacked
          xScale={xScale}
          yScale={yScale}
          yMax={yMax}
          xMax={xMax}
          chartRef={svgRef}
          width={xMax}
          height={yMax}
          handleTooltipMouseOver={handleTooltipMouseOver}
          handleTooltipMouseOff={handleTooltipMouseOff}
          tooltipData={tooltipData}
          showTooltip={showTooltip}
        />
      )}

      {/* Bar Chart - also used by Combo and when line is converted to bar */}
      {(visualizationType === 'Bar' || visualizationType === 'Combo' || convertLineToBarGraph) && (
        <BarChart
          xScale={xScale}
          yScale={yScale}
          seriesScale={seriesScale}
          xMax={xMax}
          yMax={yMax}
          yAxisWidth={yAxisWidth}
          getXAxisData={getXAxisData}
          getYAxisData={getYAxisData}
          animatedChart={animatedChart}
          visible={animatedChart}
          handleTooltipMouseOver={handleTooltipMouseOver}
          handleTooltipMouseOff={handleTooltipMouseOff}
          handleTooltipClick={handleTooltipClick}
          tooltipData={tooltipData}
          showTooltip={showTooltip}
          chartRef={svgRef}
        />
      )}

      {/* Line Chart for Combo and Bump Chart */}
      {(visualizationType === 'Combo' || visualizationType === 'Bump Chart') && (
        <LineChart
          xScale={xScale}
          yScale={yScale}
          getXAxisData={getXAxisData}
          getYAxisData={getYAxisData}
          xMax={xMax}
          yMax={yMax}
          seriesStyle={config.runtime.series}
          handleTooltipMouseOver={handleTooltipMouseOver}
          handleTooltipMouseOff={handleTooltipMouseOff}
          handleTooltipClick={handleTooltipClick}
          tooltipData={tooltipData}
          showTooltip={showTooltip}
        />
      )}

      {/* Line Chart for other visualization types */}
      {!LINE_CHART_EXCLUDED_TYPES.includes(visualizationType as any) && !convertLineToBarGraph && (
        <LineChart
          xScale={xScale}
          yScale={yScale}
          getXAxisData={getXAxisData}
          getYAxisData={getYAxisData}
          xMax={xMax}
          yMax={yMax}
          seriesStyle={config.runtime.series}
          tooltipData={tooltipData}
          handleTooltipMouseOver={handleTooltipMouseOver}
          handleTooltipMouseOff={handleTooltipMouseOff}
        />
      )}

      {/* Forecasting - also used by Combo */}
      {(visualizationType === 'Forecasting' || visualizationType === 'Combo') && (
        <Forecasting
          showTooltip={showTooltip}
          tooltipData={tooltipData}
          xScale={xScale}
          yScale={yScale}
          width={xMax}
          height={yMax}
          xScaleNoPadding={xScaleNoPadding}
          chartRef={svgRef}
          handleTooltipMouseOver={handleTooltipMouseOver}
          handleTooltipMouseOff={handleTooltipMouseOff}
        />
      )}

      {/* Forest Plot */}
      {visualizationType === 'Forest Plot' && (
        <ForestPlot
          xScale={xScale}
          yScale={yScale}
          seriesScale={seriesScale}
          width={parentWidth}
          height={forestHeight}
          getXAxisData={getXAxisData}
          getYAxisData={getYAxisData}
          animatedChart={animatedChart}
          visible={animatedChart}
          handleTooltipMouseOver={handleTooltipMouseOver}
          handleTooltipMouseOff={handleTooltipMouseOff}
          handleTooltipClick={handleTooltipClick}
          tooltipData={tooltipData}
          showTooltip={showTooltip}
          chartRef={svgRef}
          config={config}
          forestPlotRightLabelRef={forestPlotRightLabelRef}
        />
      )}
    </>
  )
}

export default VisualizationRenderer
