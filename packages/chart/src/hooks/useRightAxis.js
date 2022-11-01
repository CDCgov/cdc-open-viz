import { scaleLinear } from '@visx/scale';

export default function useRightAxis({config, yMax = 0, data = []}) {

	const hasRightAxis = (config.visualizationType === 'Bar' || config.visualizationType === 'Combo' || config.visualizationType === 'Line') && config.orientation === 'vertical'
	const rightColumnName = config.yAxis.rightSeries;
	const rightAxisData = data.map( item => item[rightColumnName] )

	const min = Math.min.apply(null, rightAxisData)
	const max = Math.max.apply(null, rightAxisData)

	const yScaleRight = scaleLinear({
		domain: [min, max],
		range: [yMax, 0],
	});


	return {yScaleRight, hasRightAxis};
}
