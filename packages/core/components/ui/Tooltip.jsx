import React from 'react'
import ReactTooltip from 'react-tooltip'

const TooltipTarget = () => null
const TooltipContent = () => null

const Tooltip = ({ position = 'top', trigger = 'hover', float = false, hideOnScroll = true, children }) => {

  const tooltipTargetChildren = children.find(el => el.type === TooltipTarget)
  const tooltipContentChildren = children.find(el => el.type === TooltipContent)

  const uid = 'tooltip-' + Math.floor(Math.random() * 100000)

  return (
    <span className="cove-tooltip">
      <a className="cove-tooltip--target"
         data-place={position}
         data-event={trigger !== 'click' ? null : 'click focus'}
         data-effect={float ? 'float' : 'solid'}
         data-scroll-hide={hideOnScroll}
         data-for={uid}
         data-tip
      >
        {tooltipTargetChildren ? tooltipTargetChildren.props.children : null}
      </a>
      <ReactTooltip className={'cove-tooltip__content' + (trigger === 'click' ? ' cove-tooltip__content--interactive' : '')} id={uid} type="light" effect="solid" globalEventOff='click'>
        {tooltipContentChildren ? tooltipContentChildren.props.children : null}
      </ReactTooltip>
    </span>
  )
}

Tooltip.Target = TooltipTarget
Tooltip.Content = TooltipContent

export default Tooltip
