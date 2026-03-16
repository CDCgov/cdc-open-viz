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
  messageClassName?: string
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
  messageClassName,
  subtext
}: VisualizationContentProps) => {
  const resolvedInnerClasses = ['cove-visualization__inner', innerClassName].filter(Boolean).join(' ')
  const bodyClasses = ['cove-visualization__body', bodyClassName].filter(Boolean).join(' ')
  const bodyWrapClasses = ['cove-visualization__body-wrap', bodyWrapClassName].filter(Boolean).join(' ')

  return (
    <div {...innerProps} className={resolvedInnerClasses}>
      {header}
      <div className={bodyClasses}>
        <div className={bodyWrapClasses}>
          {message ? (
            <section
              className={['cove-visualization__message', 'cove-visualization__message-section', messageClassName]
                .filter(Boolean)
                .join(' ')}
            >
              {message}
            </section>
          ) : null}
          {children}
        </div>
        {subtext ? <section className='cove-visualization__subtext-section'>{subtext}</section> : null}
      </div>
      {footer}
    </div>
  )
}

export default VisualizationContent
