import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface DatePickerProps extends WebComponentProps {
  label?: string
  value?: string
  onChange?: (event: Event) => void
}

const eventMap = {
  onChange: 'change'
}

const MzDatePicker = createReactWrapper<HTMLElement>('mz-date-picker', eventMap)

export const DatePicker = MzDatePicker as React.ForwardRefExoticComponent<DatePickerProps>

DatePicker.displayName = 'DatePicker'