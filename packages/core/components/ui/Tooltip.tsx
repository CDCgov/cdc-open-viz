import { useId } from 'react'

// Third Party
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import type { PlacesType } from 'react-tooltip'

// Styles
import '../../styles/v2/components/ui/tooltip.scss'

const TooltipTarget = children => children
const TooltipContent = children => children

type ToolTipProps = {
  place?: PlacesType
  trigger?: 'hover' | 'focus' | 'click'
  float?: boolean
  shadow?: boolean
  border?: boolean
  children: React.ReactElement[]
  style?: React.CSSProperties
}

const Tooltip: React.FC<ToolTipProps> & { Target; Content } = ({
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

  return (
    <span className='cove-tooltip' style={style} {...attributes}>
      <a
        id={uid}
        role='dialog'
        tabIndex={0}
        className='cove-tooltip--target'
        data-tooltip-float={float}
        data-tooltip-place={place}
        data-tooltip-isOpen={true}
      >
        {tooltipTargetChildren ? tooltipTargetChildren.props.children : null}
      </a>
      <ReactTooltip
        id={uid}
        // ! do not remove the deprecated property, it will break tooltips in the editor.
        anchorId={uid}
        className={
          'cove-tooltip__content' +
          (' place-' + place) +
          (!float ? ' cove-tooltip__content--animated' : '') +
          (trigger === 'click' ? ' interactive' : '') +
          (border ? ' cove-tooltip--border' : '') +
          (shadow ? ' has-shadow' : '')
        }
      >
        {tooltipContentChildren ? tooltipContentChildren.props.children : null}
      </ReactTooltip>
    </span>
  )
}

Tooltip.Target = TooltipTarget
Tooltip.Content = TooltipContent

export default Tooltip
