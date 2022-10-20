export default function useLegendClasses(config) {
	let containerClasses = ['legend-container']
	let innerClasses = ['legend-container__inner'];

	// Legend Positioning
	if (config.legend.position === "left") {
		containerClasses.push('left')
	}

	// Legend > Item Ordering
	if (config.legend.reverseLabelOrder) {
		innerClasses.push('d-flex')
		innerClasses.push('flex-column-reverse')
	}

	return {
		containerClasses,
		innerClasses
	};
}
