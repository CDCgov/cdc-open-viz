import { ChartConfig, Legend } from '../types/ChartConfig'

export const computeMarginBottom = (config: ChartConfig, legend: Legend, currentViewport: string): string | number => {
  const isLegendBottom = legend.position === 'bottom' || ['sm', 'xs', 'xxs'].includes(currentViewport)
  const isHorizontal = config.orientation === 'horizontal'
  const tickRotation = Number(config.xAxis.tickRotation) > 0 ? Number(config.xAxis.tickRotation) : 0
  const isBrush = config?.brush?.active
  const offset = 20
  const brushHeight = config?.brush?.height
  let bottom = 0
  if (!isLegendBottom && isHorizontal && !config.yAxis.label) {
    bottom = Number(config.xAxis.labelOffset)
  }
  if (!isLegendBottom && isHorizontal && config.yAxis.label && !config.isResponsiveTicks) {
    bottom = Number(config.runtime.xAxis.size) + Number(config.xAxis.labelOffset)
  }
  if (!isLegendBottom && isHorizontal && config.yAxis.label && config.isResponsiveTicks) {
    bottom = config.dynamicMarginTop + offset
  }
  if (!isLegendBottom && isHorizontal && !config.yAxis.label && config.isResponsiveTicks) {
    bottom = config.dynamicMarginTop ? config.dynamicMarginTop - offset : Number(config.xAxis.labelOffset) - offset
  }
  if (!isLegendBottom && isHorizontal && config.yAxis.label && config.isResponsiveTicks) {
    bottom = config.dynamicMarginTop ? config.dynamicMarginTop + offset : Number(config.xAxis.labelOffset)
  }

  if (!isHorizontal && !isLegendBottom && config.xAxis.label && tickRotation && !config.isResponsiveTicks) {
    bottom = isBrush ? brushHeight + config.xAxis.tickWidthMax + -config.xAxis.size + config.xAxis.labelOffset + offset : config.xAxis.tickWidthMax + offset + -config.xAxis.size + config.xAxis.labelOffset
  }
  if (!isHorizontal && !isLegendBottom && !config.xAxis.label && tickRotation && !config.isResponsiveTicks) {
  }
  if (!isHorizontal && !isLegendBottom && !config.xAxis.label && tickRotation && !config.dynamicMarginTop && !config.isResponsiveTicks) {
    bottom = isBrush ? config.xAxis.tickWidthMax + brushHeight + offset + -config.xAxis.size : 0
  }

  if (!isHorizontal && !isLegendBottom && config.xAxis.label && !tickRotation && !config.isResponsiveTicks) {
    bottom = isBrush ? brushHeight + -config.xAxis.size + config.xAxis.labelOffset + offset : -config.xAxis.size + config.xAxis.labelOffset + offset
  }
  if (!isHorizontal && !isLegendBottom && config.xAxis.label && config.dynamicMarginTop && config.isResponsiveTicks) {
    bottom = isBrush ? brushHeight + config.xAxis.labelOffset + -config.xAxis.size + config.xAxis.tickWidthMax : config.dynamicMarginTop + -config.xAxis.size + offset
  }
  if (!isHorizontal && !isLegendBottom && !config.xAxis.label && config.dynamicMarginTop && config.isResponsiveTicks) {
    bottom = isBrush ? brushHeight + config.xAxis.labelOffset + -config.xAxis.size + config.xAxis.tickWidthMax : config.dynamicMarginTop + -config.xAxis.size - offset
  }
  if (!isHorizontal && !isLegendBottom && config.xAxis.label && !config.dynamicMarginTop && config.isResponsiveTicks) {
    bottom = isBrush ? brushHeight + config.xAxis.labelOffset + -config.xAxis.size + 25 : config.xAxis.labelOffset + -config.xAxis.size + offset
  }
  if (!isHorizontal && !isLegendBottom && !config.xAxis.label && !config.dynamicMarginTop && config.isResponsiveTicks) {
    bottom = -config.xAxis.size + offset + config.xAxis.labelOffset
  }
  if (!isHorizontal && !isLegendBottom && !config.xAxis.label && !tickRotation && !config.dynamicMarginTop && !config.isResponsiveTicks) {
    bottom = isBrush ? brushHeight + -config.xAxis.size + config.xAxis.labelOffset : 0
  }
  return `${bottom}px`
}
