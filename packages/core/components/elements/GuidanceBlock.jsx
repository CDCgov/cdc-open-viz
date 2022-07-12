import React, { Children } from 'react'
import PropTypes from 'prop-types'

import '../../styles/v2/components/element/guidance-block.scss'

//Define the "slots" to be populated by subcomponents
const GuidanceTitle = () => null
const GuidanceContent = () => null

const GuidanceBlock = ({linkTo, target = "_blank", children, ...attributes}) => {

  //Parse, organize, and pull "slotted" children data from subcomponents
  const childNodes = Children.toArray(children)
  const guidanceTitleChildren = childNodes.find(child => child?.type === GuidanceTitle)
  const guidanceContentChildren = childNodes.find(child => child?.type === GuidanceContent)

  const filteredAttrs = { ...attributes }
  delete filteredAttrs.className //Remove classes from object, spread without conflicting with hardcoded classNames

  return (
    <a
      className={`cove-guidance-block${(attributes.className.length > 0) ? (' ' + attributes.className) : ''}`}
      href={linkTo}
      target={target}
      {...filteredAttrs}
    >
      {guidanceTitleChildren && (
        <h3 className="cove-guidance-block__header">
          {guidanceTitleChildren.props.children}
        </h3>
      )}
      {guidanceContentChildren && (
        <div className="cove-guidance-block__content">
          {guidanceContentChildren.props.children}
        </div>
      )}
    </a>
  )
}

//Create subcomponents as "slots" within component namespace
GuidanceBlock.Title = GuidanceTitle
GuidanceBlock.Content = GuidanceContent

GuidanceBlock.propTypes = {
  link: PropTypes.string,
  target: PropTypes.string
}

export default GuidanceBlock
