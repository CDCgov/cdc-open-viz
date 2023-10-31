import { forwardRef, type ComponentPropsWithRef } from 'react'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'

type ComponentProps = ComponentPropsWithRef<'div'> & {
  config: any
}

const Wrapper = forwardRef<HTMLDivElement, ComponentProps>((props: ComponentProps, ref) => {
  const { className, config, ...otherProps } = props

  // stamp the component-wrapper class on to every wrapper
  // TODO: add the helper classes here for fonts, themes, etc.
  const { innerContainerClasses } = useDataVizClasses(config)
  const updatedClasses = ['cove-component', props.className ?? '', ...(innerContainerClasses ?? '')]

  return (
    <div className={updatedClasses.join(' ')} ref={ref} {...otherProps}>
      {props.children}
    </div>
  )
})

export default Wrapper
