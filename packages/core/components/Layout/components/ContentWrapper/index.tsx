import useDataVizClasses from './useDataVizClasses.ts'

// All content under the title/header in the visualization
const ContentWrapper = ({ config, ariaLabel, missingRequiredSections = () => false, newViz, children, viewport }) => {
  const { contentClasses } = useDataVizClasses(config, viewport)
  return (
    // not missing required sections and not a new viz
    !missingRequiredSections() &&
    !newViz && (
      <div className={contentClasses.join(' ')} aria-label={ariaLabel} tabIndex={0}>
        {children}
      </div>
    )
  )
}

export default ContentWrapper
