import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'

const Content = ({ config, ariaLabel, missingRequiredSections, newViz, children }) => {
  const { contentClasses } = useDataVizClasses(config)
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

export default Content
