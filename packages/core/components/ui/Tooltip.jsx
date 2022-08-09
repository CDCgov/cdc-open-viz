import React from 'react'

// Third Party
import ReactTooltip from 'react-tooltip'

// Styles
import '../../styles/components/ui/tooltip.scss'

const TooltipTarget = () => null
const TooltipContent = () => null

const Tooltip = ({
                   position = 'top',
                   trigger = 'hover',
                   float = false,
                   shadow = true,
                   border = null,
                   borderColor = '#bdbdbd',
                   hideOnScroll = true,
                   children,
                   style,
                   ...attributes
                 }) => {

  const tooltipTargetChildren = children.find(el => el.type === TooltipTarget)
  const tooltipContentChildren = children.find(el => el.type === TooltipContent)

  const uid = 'tooltip-' + Math.floor(Math.random() * 100000)

  const generateTriggerEvent = (trigger) => {
    const eventList = {
      'hover': null,
      'focus': 'focus',
      'click': 'click focus'
    }
    return eventList[trigger]
  }

  // Props added to anchor are local
  // Props added to ReactTooltip are global
  return (
    <span className="cove-tooltip" style={style} {...attributes}>
      <a className="cove-tooltip--target"
         data-border={!!border}
         data-border-color={borderColor}
         data-effect={float ? 'float' : 'solid'}
         data-event={generateTriggerEvent()}
         data-for={uid}
         data-place={position ? position : null}
         data-scroll-hide={hideOnScroll}
         data-type="light"
         data-tip
      >
        {tooltipTargetChildren ? tooltipTargetChildren.props.children : null}
      </a>
      <ReactTooltip
        id={uid}
        className={'cove-tooltip__content' + (!float ? ' cove-tooltip__content--animated' : '') + (trigger === 'click' ? ' interactive' : '') + (border ? (' cove-tooltip--border-' + border) : '') + (shadow ? ' has-shadow' : '')}
        globalEventOff="click"
      >
        {tooltipContentChildren ? tooltipContentChildren.props.children : null}
      </ReactTooltip>
    </span>
  )
}

Tooltip.Target = TooltipTarget
Tooltip.Content = TooltipContent

export default Tooltip
