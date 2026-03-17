import React from 'react'

type VisualizationContentInnerProps = Omit<React.ComponentPropsWithRef<'div'>, 'className'>

type VisualizationContentProps = {
  bodyFooter?: React.ReactNode
  bodySubtext?: React.ReactNode
  bodyClassName?: string
  bodyWrapClassName?: string
  children: React.ReactNode
  filters?: React.ReactNode
  footer?: React.ReactNode
  header?: React.ReactNode
  innerClassName?: string
  innerProps?: VisualizationContentInnerProps
  message?: React.ReactNode
  messageClassName?: string
  messageIsIntroText?: boolean
}

const VisualizationContent = ({
  bodyFooter,
  bodySubtext,
  bodyClassName,
  bodyWrapClassName,
  children,
  filters,
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
  const bodyClasses = ['cove-visualization__body', !subtext && 'cove-visualization__body--no-subtext', bodyClassName].filter(Boolean).join(' ')
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
          {filters ? <section className='cove-visualization__filters-section'>{filters}</section> : null}
          <section className='cove-visualization__content-section'>{children}</section>
          {bodySubtext ? (
            <section className='cove-visualization__body-subtext-section'>{bodySubtext}</section>
          ) : null}
          {bodyFooter ? <section className='cove-visualization__body-footer-section'>{bodyFooter}</section> : null}
          {subtext ? <section className='cove-visualization__subtext-section'>{subtext}</section> : null}
        </div>
      </div>
      {footer}
    </div>
  )
}

export default VisualizationContent
