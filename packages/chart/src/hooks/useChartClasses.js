export default function useChartClasses(config) {
	let lineDatapointClass = ''
	let barBorderClass = ''

	if (config.lineDatapointStyle === "hover") { lineDatapointClass = ' chart-line--hover' }
	if (config.lineDatapointStyle === "always show") { lineDatapointClass = ' chart-line--always' }
	if (config.barHasBorder === "false") { barBorderClass = ' chart-bar--no-border' }

	let innerContainerClasses = ['cove-component__inner']
	config.title && innerContainerClasses.push('component--has-title')
	config.subtext && innerContainerClasses.push('component--has-subtext')
	config.biteStyle && innerContainerClasses.push(`bite__style--${config.biteStyle}`)
	config.general?.isCompactStyle && innerContainerClasses.push(`component--isCompactStyle`)

	let contentClasses = ['cove-component__content'];
	config.visualizationType === 'Spark Line' && contentClasses.push('sparkline')
	!config.visual?.border && contentClasses.push('no-borders');
	config.visual?.borderColorTheme && contentClasses.push('component--has-borderColorTheme');
	config.visual?.accent && contentClasses.push('component--has-accent');
	config.visual?.background && contentClasses.push('component--has-background');
	config.visual?.hideBackgroundColor && contentClasses.push('component--hideBackgroundColor');

	let sparkLineStyles = {
		width: '100%',
		height: '100px',
	}

	return {
		barBorderClass,
		lineDatapointClass,
		contentClasses,
		innerContainerClasses,
		sparkLineStyles
	};
}
