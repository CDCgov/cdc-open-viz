import type { ComponentProps, ReactNode } from 'react'
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'

export type PanelSectionProps = {
  title: ReactNode
  children: ReactNode
  itemProps?: Omit<ComponentProps<typeof AccordionItem>, 'children'>
  headingProps?: Omit<ComponentProps<typeof AccordionItemHeading>, 'children'>
  buttonProps?: Omit<ComponentProps<typeof AccordionItemButton>, 'children' | 'onClick' | 'onKeyDown'>
  panelProps?: Omit<ComponentProps<typeof AccordionItemPanel>, 'children'>
}

const PanelSection = ({ title, children, itemProps, headingProps, buttonProps, panelProps }: PanelSectionProps) => (
  <AccordionItem {...itemProps}>
    <AccordionItemHeading {...headingProps}>
      <AccordionItemButton {...buttonProps}>{title}</AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel {...panelProps}>{children}</AccordionItemPanel>
  </AccordionItem>
)

export default PanelSection
