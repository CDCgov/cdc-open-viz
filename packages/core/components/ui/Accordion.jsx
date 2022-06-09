import React, { Children } from 'react'
import {
  Accordion as AccordionComponent,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion'
import PropTypes from 'prop-types'

import Icon from './Icon'
import Tooltip from './Tooltip'

import '../../styles/v2/components/ui/accordion.scss'

//Define the "slots" to be populated by subcomponents
const AccordionSection = () => null

const Accordion = ({children}) => {
  const childNodes = Children.toArray(children)
  const accordionSections = childNodes.filter(child => child?.type === AccordionSection)

  return (
    <AccordionComponent allowZeroExpanded={true}>
      {accordionSections && accordionSections.map((section, index) => (
        <AccordionItem className="cove-accordion__item" key={index}>
          <AccordionItemHeading className="cove-accordion__heading">
            <AccordionItemButton className="cove-accordion__button">
              <span className="cove-accordion__button--text">
                {section.props.label}{section.props.warnIf ? <Icon display="warningCircle" size={14}/> : null}
              </span>
              {section.props.tooltip
                ? (
                  <Tooltip position="bottom">
                    <Tooltip.Target>
                      <Icon display="question" size={14}/>
                    </Tooltip.Target>
                    <Tooltip.Content>
                      {section.props.tooltip}
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

Accordion.Section.propTypes = {
  /* Show warning if supplied statement or value is truthy */
  warnIf: PropTypes.any,
  /* Title for the accordion label*/
  label: PropTypes.string,
  /* Tooltip for the accordion label*/
  tooltip: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
}

export default Accordion
