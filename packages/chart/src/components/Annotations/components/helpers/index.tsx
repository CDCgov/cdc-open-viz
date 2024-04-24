const applyBandScaleOffset = (num: number, config, xScale) => num + Number(config.yAxis.size) + xScale.bandwidth() / 2

export { applyBandScaleOffset }
