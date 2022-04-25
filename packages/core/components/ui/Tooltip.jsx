import React from 'react'
import ReactTooltip from 'react-tooltip'

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
                   children
                 }) => {

  const tooltipTargetChildren = children.find(el => el.type === TooltipTarget)
  const tooltipContentChildren = children.find(el => el.type === TooltipContent)

  const uid = 'tooltip-' + Math.floor(Math.random() * 100000)

  return (
    <span className="cove-tooltip">
      <a className="cove-tooltip--target"
         data-for={uid}
         data-place={position}
         data-event={trigger !== 'click' ? null : 'click focus'}
         data-effect={float ? 'float' : 'solid'}
         data-scroll-hide={hideOnScroll}
         data-tip
      >
        {tooltipTargetChildren ? tooltipTargetChildren.props.children : null}
      </a>
      <ReactTooltip
        id={uid}
        className={'cove-tooltip__content' + (trigger === 'click' ? ' interactive' : null) + (border ? (' cove-tooltip--border-' + null) : null) + (shadow ? ' has-shadow' : null)}
        type="light"
        effect="solid"
        border={!!border}
        borderColor={borderColor}
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
