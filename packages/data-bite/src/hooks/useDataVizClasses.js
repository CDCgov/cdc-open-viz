export default function useDataVizClasses(config) {
	let innerContainerClasses = ['cove-component__inner']
	let contentClasses = ['cove-component__content'];

	config.title && innerContainerClasses.push('component--has-title')
	config.subtext && innerContainerClasses.push('component--has-subtext')
	config.biteStyle && innerContainerClasses.push(`bite__style--${config.biteStyle}`)
	config.general?.isCompactStyle && innerContainerClasses.push(`component--isCompactStyle`)

	!config.visual?.border && contentClasses.push('no-borders');
	config.visual?.borderColorTheme && contentClasses.push('component--has-borderColorTheme');
	config.visual?.accent && contentClasses.push('component--has-accent');
	config.visual?.background && contentClasses.push('component--has-background');
	config.visual?.hideBackgroundColor && contentClasses.push('component--hideBackgroundColor');

	// ! these two will be retired.
	config.shadow && innerContainerClasses.push('shadow')
	config?.visual?.roundedBorders && innerContainerClasses.push('bite--has-rounded-borders')

	return { innerContainerClasses, contentClasses};
}
