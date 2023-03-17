export default function useLegendClasses(config) {
  let containerClasses = ['cove-chart__legend-container']

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
