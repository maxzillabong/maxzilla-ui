import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface FormProps extends WebComponentProps {

  onSubmit?: (event: Event) => void
}

const eventMap = {
  onSubmit: 'submit'
}

const MzForm = createReactWrapper<HTMLElement>('mz-form', eventMap)

export const Form = MzForm as React.ForwardRefExoticComponent<FormProps>

Form.displayName = 'Form'