import { useId } from 'react'

// Third Party
import { Tooltip as ReactTooltip } from 'react-tooltip'

// Styles
import '../../styles/v2/components/ui/tooltip.scss'

const TooltipTarget = () => null
const TooltipContent = () => null

const Tooltip = ({
                   place = 'top',
                   trigger = 'hover',
                   float = false,
                   shadow = true,
                   border = false,
                   children,
                   style,
                   ...attributes
                 }) => {

  const tooltipTargetChildren = children.find(el => el.type === TooltipTarget)
  const tooltipContentChildren = children.find(el => el.type === TooltipContent)

  const uid = 'tooltip-' + useId()

  const generateTriggerEvent = (trigger) => {
    const eventList = {
      'hover': null,
      'focus': 'focus',
      'click': 'click focus'
    }
    return eventList[trigger]
  }

  return (
    <span className="cove-tooltip" style={style} {...attributes}>
      <a id={uid} className="cove-tooltip--target"
         data-tooltip-float={float}
         data-tooltip-place={place}
         data-tooltip-events={generateTriggerEvent()}
      >
        {tooltipTargetChildren ? tooltipTargetChildren.props.children : null}
      </a>
      <ReactTooltip
        id={uid} anchorId={uid}
        className={'cove-tooltip__content' + (' place-' + place) + (!float ? ' cove-tooltip__content--animated' : '') + (trigger === 'click' ? ' interactive' : '') + (border ? (' cove-tooltip--border') : '') + (shadow ? ' has-shadow' : '')}
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
