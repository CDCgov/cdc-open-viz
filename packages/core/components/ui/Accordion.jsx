import React, { Children, useState, useEffect } from 'react'

// Third Party
import {
  Accordion as AccordionComponent,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'

// Components
import Icon from './Icon'
import Tooltip from './Tooltip'

// Styles
import '../../styles/v2/components/ui/accordion.scss'

//Define the "slots" to be populated by subcomponents
const AccordionSection = () => null

const Accordion = ({ children }) => {
  const [ activeChildren, setActiveChildren ] = useState(children)

  useEffect(() => {
    setActiveChildren(children)
  }, [ children ])

  const childNodes = Children.toArray(activeChildren)
  const accordionSections = childNodes.filter(child => child?.type === AccordionSection) || activeChildren

  const warningIcon = <Icon className="cove-icon--warning" display="warningCircle" size={14}/>

  const checkValidTrue = (value) => {
    return value === undefined || value === true;
  }

  return (
    <AccordionComponent allowZeroExpanded={true}>
      {accordionSections && accordionSections.map((section, index) => (
        <AccordionItem className="cove-accordion__item" style={checkValidTrue(section.props.showIf) ? {} : { visibility: 'hidden', display: 'none' }} key={index}>
          <AccordionItemHeading className="cove-accordion__heading">
            <AccordionItemButton className="cove-accordion__button">
              <span className="cove-accordion__button--text">
                {section.props.label}{section.props.warnIf ? warningIcon : null}
              </span>
              {section.props.tooltip
                ? (
                  <Tooltip position="bottom">
                    <Tooltip.Target>
                      <Icon display="questionCircle" size={14}/>
                    </Tooltip.Target>
                    <Tooltip.Content>
                      {parse(section.props.tooltip)}
                    </Tooltip.Content>
                  </Tooltip>
                )
                : null
              }
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="cove-accordion__panel">
            {section.props.children}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </AccordionComponent>
  )
}

//Create subcomponents as "slots" within component namespace
Accordion.Section = AccordionSection

Accordion.propTypes = {
  /** Show warning if supplied statement or value is truthy */
  warnIf: PropTypes.any,
  /** Title for the accordion label*/
  label: PropTypes.string,
  /** Tooltip for the accordion label; JSX markup can also be supplied */
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default Accordion
