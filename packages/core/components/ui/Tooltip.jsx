import React from 'react'
import ReactTooltip from 'react-tooltip'

const TooltipTarget = () => null
const TooltipContent = () => null

const Tooltip = ({ position = 'top', trigger = 'hover focus', float = false, shadow = true, border = null, borderColor = '#bdbdbd', hideOnScroll = true, children, style, ...attributes }) => {
  const tooltipTargetChildren = children.find(el => el.type === TooltipTarget)
  const tooltipContentChildren = children.find(el => el.type === TooltipContent)

  const uid = 'tooltip-' + Math.floor(Math.random() * 100000)

  return (
    <span className='cove-tooltip' style={style} {...attributes}>
      <button
        className='cove-tooltip--target'
        data-for={uid}
        data-place={position}
        data-event={trigger}
        data-effect={float ? 'float' : 'solid'}
        data-scroll-hide={hideOnScroll}
        data-tip
        onClick={e => {
          e.preventDefault()
        }}
        onMouseEnter={e => ReactTooltip.show(e.target)}
        onMouseLeave={e => ReactTooltip.hide(e.target)}
        onFocus={e => ReactTooltip.show(e.target)}
        onBlur={e => ReactTooltip.hide(e.target)}
        style={{ background: 'transparent', border: 'none' }}
      >
        {tooltipTargetChildren ? tooltipTargetChildren.props.children : null}
      </button>
      <ReactTooltip id={uid} className={'cove-tooltip__content' + (trigger === 'click' ? ' interactive' : '') + (border ? ' cove-tooltip--border-' + border : '') + (shadow ? ' has-shadow' : '')} type='light' effect='solid' border={!!border} borderColor={borderColor} globalEventOff='click'>
        {tooltipContentChildren ? tooltipContentChildren.props.children : null}
      </ReactTooltip>
    </span>
  )
}

Tooltip.Target = TooltipTarget
Tooltip.Content = TooltipContent

export default Tooltip
