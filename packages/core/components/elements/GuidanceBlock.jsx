import React, { Children } from 'react'

// Third Party
import PropTypes from 'prop-types'

// Components - Core
import Icon from '../ui/Icon'

// Styles
import '../../styles/v2/components/element/guidance-block.scss'

// Slots
const GuidanceTitle = () => null
const GuidanceContent = () => null

const GuidanceBlock = ({ linkTo, icon, target = '_blank', accentColor = '#005eaa', children, className, ...attributes }) => {

  //Parse, organize, and pull "slotted" children data from subcomponents
  const childNodes = Children.toArray(children)
  const guidanceTitleChildren = childNodes.find(child => child?.type === GuidanceTitle)
  const guidanceContentChildren = childNodes.find(child => child?.type === GuidanceContent)

  return (<>
    {accentColor && (
      <style>
      {`.cove-guidance-block:before {
        background: ${accentColor};
      }`}
      </style>
    )}
    <a
      className={`cove-guidance-block${className ? ' ' + className : ''}`}
      href={linkTo || '#'}
      target={target}
      {...attributes}
    >
      {icon && (
        <div className="cove-guidance-block__icon" style={{ color: accentColor ? accentColor : null }}>
          <Icon display={icon} base/>
        </div>
      )}
      <div className="cove-guidance-block__content-wrapper">
        {guidanceTitleChildren && (
          <h3 className="cove-guidance-block__header">
            {guidanceTitleChildren?.props.children}
          </h3>
        )}
        {guidanceContentChildren && (
          <div className="cove-guidance-block__content">
            {guidanceContentChildren?.props.children}
          </div>
        )}
      </div>
    </a>
  </>)
}

//Create subcomponents as "slots" within component namespace
GuidanceBlock.Title = GuidanceTitle
GuidanceBlock.Title.displayName = 'GuidanceBlock.Title'

GuidanceBlock.Content = GuidanceContent
GuidanceBlock.Content.displayName = 'GuidanceBlock.Content'

GuidanceBlock.propTypes = {
  /** Specify an internal/external link that is opened when users click the Guidance Block */
  linkTo: PropTypes.string,
  /** Display an icon by your block by supplying a valid Icon component code; see the [Components/UI/Icon](../?path=/docs/components-ui-icon--docs) section for options */
  icon: PropTypes.string,
  /** Specify the `target` namespace for the link to use when opened. `_blank` can be used to open the link in a new tab */
  target: PropTypes.string,
  /** Override the default icon and border accent color */
  accentColor: PropTypes.string
}

export default GuidanceBlock
