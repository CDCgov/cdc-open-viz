import React from 'react'

type VisualizationContentProps = {
  bodyClassName?: string
  bodyWrapClassName?: string
  children: React.ReactNode
  footer?: React.ReactNode
  header?: React.ReactNode
  innerClassName?: string
  innerProps?: React.HTMLAttributes<HTMLDivElement>
}

const VisualizationContent = ({
  bodyClassName,
  bodyWrapClassName,
  children,
  footer,
  header,
  innerClassName,
  innerProps
}: VisualizationContentProps) => {
  const resolvedInnerClasses = ['cove-visualization__inner', innerClassName].filter(Boolean).join(' ')
  const bodyClasses = ['cove-visualization__body', bodyClassName].filter(Boolean).join(' ')
  const bodyWrapClasses = ['cove-visualization__body-wrap', bodyWrapClassName].filter(Boolean).join(' ')

  return (
    <div className={resolvedInnerClasses} {...innerProps}>
      {header}
      <div className={bodyClasses}>
        <div className={bodyWrapClasses}>{children}</div>
      </div>
      {footer}
    </div>
  )
}

export default VisualizationContent
