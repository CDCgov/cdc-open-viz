import useDataVizClasses from './useDataVizClasses.ts'

type ContentWrapperProps = {
  config: any
  ariaLabel: string
  children: React.ReactNode
  viewport: any
}

// All content under the title/header in the visualization
const ContentWrapper: React.FC<ContentWrapperProps> = ({ config, ariaLabel, children, viewport }) => {
  const { contentClasses } = useDataVizClasses(config, viewport)
  return (
    <div className={contentClasses.join(' ')} aria-label={ariaLabel} tabIndex={0}>
      {children}
    </div>
  )
}

export default ContentWrapper
