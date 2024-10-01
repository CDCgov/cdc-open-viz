import useDataVizClasses from './useDataVizClasses.ts'

// All content under the title/header in the visualization
const ContentWrapper = ({ config, ariaLabel, missingRequiredSections = () => false, newViz, children, viewport }) => {
  const { contentClasses } = useDataVizClasses(config, viewport)
  return (
    <div className={contentClasses.join(' ')} aria-label={ariaLabel} tabIndex={0}>
      {children}
    </div>
  )
}

export default ContentWrapper
