import { scaleLinear } from '@visx/scale';

export default function useRightAxis({config, yMax = 0, data = []}, updateConfig) {

	const hasRightAxis = (config.visualizationType === 'Bar' || config.visualizationType === 'Combo' || config.visualizationType === 'Line') && config.orientation === 'vertical'
	const rightColumnName = config.yAxis.rightSeries;
	const rightAxisData = data.map( item => item[rightColumnName] )
	const min = Math.min.apply(null, rightAxisData)
	const max = Math.max.apply(null, rightAxisData)

	const yScaleRight = scaleLinear({
		domain: [min, max],
		range: [yMax, 0],
	});

	const addRightAxisSeries = (seriesKey) => {
		let newSeries = config.rightSeries ? [ ...config.rightSeries ] : []
		newSeries.push({ dataKey: seriesKey, type: 'Bar' });
		updateConfig({ ...config, rightSeries: newSeries });
	}

	const removeRightAxisSeries = (seriesKey) => {
		let series = [ ...config.rightSeries ]
		let seriesIndex = -1
	
		for (let i = 0; i < series.length; i++) {
		  if (series[i].dataKey === seriesKey) {
			seriesIndex = i
			break
		  }
		}
	
		if (seriesIndex !== -1) {
		  series.splice(seriesIndex, 1)
	
		  let newConfig = { ...config, rightSeries: series }
	
		  if (series.length === 0) {
			delete newConfig.series
		  }
	
		  updateConfig(newConfig)
		}
	}

	return {yScaleRight, hasRightAxis, addRightAxisSeries, removeRightAxisSeries};
}
