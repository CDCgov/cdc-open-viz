import React, { useId } from 'react'

// Third Party
import { Tooltip as ReactTooltip } from 'react-tooltip'
import PropTypes from 'prop-types'

// Styles
import 'react-tooltip/dist/react-tooltip.css'
import '../../styles/v2/components/ui/tooltip.scss'

const TooltipTarget = () => null
const TooltipContent = () => null

const Tooltip = (
  {
    place = 'top',
    trigger = 'hover',
    float = false,
    shadow = true,
    border = false,
    children,
    style,
    ...attributes
  }
) => {

  const tooltipTargetChildren = children.find(el => el.type === TooltipTarget)
  const tooltipContentChildren = children.find(el => el.type === TooltipContent)

  const uid = 'tooltip-' + useId()

  const tooltipClasses = () => {
    const classList = ['cove-tooltip__content']
    if (!float) classList.push('cove-tooltip--animated')
    if (trigger === 'click') classList.push('cove-tooltip--can-click')
    if (border) classList.push('cove-tooltip--border')
    if (shadow) classList.push('cove-tooltip--shadow')
    return classList.join(' ')
  }
  const generateTriggerEvent = (trigger) => {
    const eventList = {
      'hover': 'hover',
      'click': 'click'
    }
    return eventList[trigger]
  }

  return (
    <span className="cove-tooltip" style={style} {...attributes}>
      <a className="cove-tooltip--target"
         data-tooltip-id={uid}
         data-tooltip-float={float}
         data-tooltip-place={place}
         data-tooltip-events={generateTriggerEvent(trigger)}
         /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
         tabIndex={0}
      >
        {tooltipTargetChildren ? tooltipTargetChildren.props.children : null}
      </a>
      <ReactTooltip id={uid} className={tooltipClasses()}>
        {tooltipContentChildren ? tooltipContentChildren.props.children : null}
      </ReactTooltip>
    </span>
  )
}

Tooltip.Target = TooltipTarget
Tooltip.Target.displayName = 'Tooltip.Target'

Tooltip.Content = TooltipContent
Tooltip.Content.displayName = 'Tooltip.Content'

export default Tooltip

Tooltip.propTypes = {
  /** Position of the tooltip relative to the tooltip target */
  place: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** Set the trigger event of the tooltip */
  trigger: PropTypes.oneOf(['hover', 'click']),
  /** Sets the tooltip to follow the cursor movement around the target - for use with `trigger='hover'` */
  float: PropTypes.bool,
  /** Display a shadow on the tooltip */
  shadow: PropTypes.bool,
  /** Border tooltip */
  border: PropTypes.bool,
  /** Style of the tooltip */
  style: PropTypes.object
}
