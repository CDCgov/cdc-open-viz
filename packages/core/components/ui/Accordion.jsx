import React, { Children } from 'react'
import {
  Accordion as AccordionComponent,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'
import PropTypes from 'prop-types'

import Icon from './Icon'
import Tooltip from './Tooltip'

import '../../styles/v2/components/accordion.scss'
import './accordion.styles.css'

//Define the "slots" to be populated by subcomponents
const AccordionSection = children => children

const Accordion = ({ children }) => {
  const childNodes = Children.toArray(children)
  const accordionSections = childNodes.filter(child => child?.type === AccordionSection)

  return (
    <AccordionComponent allowZeroExpanded={true}>
      {accordionSections &&
        accordionSections.map((section, index) => (
          <AccordionItem className='cove-accordion__item' key={index}>
            <AccordionItemHeading className='cove-accordion__heading'>
              <AccordionItemButton className='cove-accordion__button'>
                {section.props.icon}
                {section.props.title}
                {section.props.tooltipText ? (
                  <Tooltip position='bottom'>
                    <Tooltip.Target>
                      <Icon display='question' size={14} />
                    </Tooltip.Target>
                    <Tooltip.Content>{section.props.tooltipText}</Tooltip.Content>
                  </Tooltip>
                ) : null}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='cove-accordion__panel'>{section.props.children}</AccordionItemPanel>
          </AccordionItem>
        ))}
    </AccordionComponent>
  )
}

//Create subcomponents as "slots" within component namespace
Accordion.Section = AccordionSection

Accordion.Section.propTypes = {
  /* Icon for the accordion label */
  icon: PropTypes.node,
  /* Title for the accordion label*/
  title: PropTypes.string,
  /* Tooltip for the accordion label*/
  tooltipText: PropTypes.object
}

export default Accordion
