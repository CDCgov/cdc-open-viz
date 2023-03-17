export default function useLegendClasses(config) {
  let containerClasses = ['cove-chart__legend-container']

	// Legend Positioning
	if (config.legend.position === "left") {
		containerClasses.push('cove-chart__legend-container--left')
	}
	if (config.legend.position === "bottom") {
		containerClasses.push('cove-chart__legend-container--bottom')
	}

	if(config.legend.position==='bottom' && config.legend.singleRow){
    containerClasses.push('cove-chart__legend-container--single-row')
	}

  // Legend > Item Ordering
  if (config.legend.reverseLabelOrder) {
    containerClasses.push('cove-chart__legend-container--reverse')
  }

  return {
    containerClasses
  }
}
