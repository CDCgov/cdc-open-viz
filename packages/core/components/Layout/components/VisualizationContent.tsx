import React from 'react'

type VisualizationContentInnerProps = Omit<React.ComponentPropsWithRef<'div'>, 'className'>

type VisualizationContentProps = {
  bodyFooter?: React.ReactNode
  bodySubtext?: React.ReactNode
  bodyClassName?: string
  bodyWrapClassName?: string
  children: React.ReactNode
  footer?: React.ReactNode
  header?: React.ReactNode
  innerClassName?: string
  innerProps?: VisualizationContentInnerProps
  message?: React.ReactNode
  messageClassName?: string
  messageIsIntroText?: boolean
  subtext?: React.ReactNode
}

const VisualizationContent = ({
  bodyFooter,
  bodySubtext,
  bodyClassName,
  bodyWrapClassName,
  children,
  footer,
  header,
  innerClassName,
  innerProps,
  message,
  messageClassName,
  messageIsIntroText,
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
              className={[
                'cove-visualization__message',
                'cove-visualization__message-section',
                messageIsIntroText && 'introText',
                messageClassName
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {message}
            </section>
          ) : null}
          {children}
          {bodySubtext ? (
            <section className='cove-visualization__body-subtext-section mt-4 mb-4'>{bodySubtext}</section>
          ) : null}
          {bodyFooter ? <section className='cove-visualization__body-footer-section'>{bodyFooter}</section> : null}
        </div>
        {subtext ? <section className='cove-visualization__subtext-section mt-4 mb-4'>{subtext}</section> : null}
      </div>
      {footer}
    </div>
  )
}

export default VisualizationContent
