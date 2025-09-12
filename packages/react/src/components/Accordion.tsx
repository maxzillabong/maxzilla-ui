import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface AccordionProps extends WebComponentProps {
  multiple?: boolean
}

const eventMap = {}

const MzAccordion = createReactWrapper<HTMLElement>('mz-accordion')

export const Accordion = MzAccordion as React.ForwardRefExoticComponent<AccordionProps>

Accordion.displayName = 'Accordion'