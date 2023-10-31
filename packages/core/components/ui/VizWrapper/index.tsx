import './VizWrapper.scss'

import { type VizWrapperProps } from './types/VizWrapper'

const hasShowTitleProps = (props: VizWrapperProps) => {
  return 'showTitle' in props
}

const VizWrapper = (props: VizWrapperProps) => {
  const { children, visualizationType, visualSettings, title, showTitle, subType, className, ...otherProps } = props
  let contentClasses = ['cove-component__content']

  if (title && showTitle) contentClasses.push('component--has-title')

  if (hasShowTitleProps(props)) {
    showTitle && contentClasses.push('component--has-title')
  }

  console.log(subType)

  if (subType === 'Spark Line') {
    contentClasses.push('sparkline')
  }

  if (subType === 'Spark Line' || visualizationType === 'chart') {
    if (title && showTitle) contentClasses.push('component--has-title')
  }

  console.log('visualSettings', visualSettings)
  if (visualSettings) {
    !visualSettings.border && contentClasses.push('no-borders')
    visualSettings.borderColorTheme && contentClasses.push('component--has-borderColorTheme')
    visualSettings.accent && contentClasses.push('component--has-accent')
    visualSettings.background && contentClasses.push('component--has-background')
    visualSettings.hideBackgroundColor && contentClasses.push('component--hideBackgroundColor')
  }

  console.log('cccc', contentClasses)

  const updatedClasses = [className, contentClasses.join(' ')]

  return (
    <div className={updatedClasses.join(' ')} {...otherProps}>
      {children}
    </div>
  )
}

export default VizWrapper
