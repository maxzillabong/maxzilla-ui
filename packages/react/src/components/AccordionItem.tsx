import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface AccordionItemProps extends WebComponentProps {
  header?: string
  open?: boolean
  onToggle?: (event: Event) => void
}

const eventMap = {
  onToggle: 'accordion-toggle'
}

const MzAccordionItem = createReactWrapper<HTMLElement>('mz-accordion-item', eventMap)

export const AccordionItem = MzAccordionItem as React.ForwardRefExoticComponent<AccordionItemProps>

AccordionItem.displayName = 'AccordionItem'