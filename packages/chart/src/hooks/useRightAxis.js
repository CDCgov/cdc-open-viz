import { scaleLinear } from '@visx/scale';

export default function useRightAxis({config, yMax = 0, data = [], updateConfig}) {
	const hasRightAxis = (config.visualizationType === 'Combo') && config.orientation === 'vertical'
	const rightSeriesKeys = config.series && config.series.filter( series => series.axis === 'Right').map( key => key.dataKey )
	
	const allRightAxisData = (rightSeriesKeys) => {
		if(!rightSeriesKeys) return [0];
		let rightAxisData = [];
		rightSeriesKeys.map( (key,index) => {
			return rightAxisData = [...rightAxisData, ...data.map( item => Number(item[key]) )]
		})
		return rightAxisData;
	}

	const min = Math.min.apply(null, allRightAxisData(rightSeriesKeys))
	const max = Math.max.apply(null, allRightAxisData(rightSeriesKeys))

	const yScaleRight = scaleLinear({
		domain: [0, max],
		range: [yMax, 0],
	});

	return {yScaleRight, hasRightAxis};
}
