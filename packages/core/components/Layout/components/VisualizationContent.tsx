import React from 'react'

type VisualizationContentInnerProps = Omit<React.ComponentPropsWithRef<'div'>, 'className'>

type VisualizationContentProps = {
  bodyClassName?: string
  bodyWrapClassName?: string
  children: React.ReactNode
  footer?: React.ReactNode
  header?: React.ReactNode
  innerClassName?: string
  innerProps?: VisualizationContentInnerProps
  message?: React.ReactNode
  subtext?: React.ReactNode
}

const VisualizationContent = ({
  bodyClassName,
  bodyWrapClassName,
  children,
  footer,
  header,
  innerClassName,
  innerProps,
  message,
  subtext
}: VisualizationContentProps) => {
  const resolvedInnerClasses = ['cove-visualization__inner', innerClassName].filter(Boolean).join(' ')
  const bodyClasses = ['cove-visualization__body', bodyClassName].filter(Boolean).join(' ')
  const bodyWrapClasses = ['cove-visualization__body-wrap', bodyWrapClassName].filter(Boolean).join(' ')

  return (
    <div {...innerProps} className={resolvedInnerClasses}>
      {header}
      <div className={bodyClasses}>
        {message ? <section className='cove-visualization__message-section'>{message}</section> : null}
        <div className={bodyWrapClasses}>{children}</div>
        {subtext ? <section className='cove-visualization__subtext-section'>{subtext}</section> : null}
      </div>
      {footer}
    </div>
  )
}

export default VisualizationContent
