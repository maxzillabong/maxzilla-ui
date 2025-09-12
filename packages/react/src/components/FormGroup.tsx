import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface FormGroupProps extends WebComponentProps {

}

const eventMap = {}

const MzFormGroup = createReactWrapper<HTMLElement>('mz-form-group')

export const FormGroup = MzFormGroup as React.ForwardRefExoticComponent<FormGroupProps>

FormGroup.displayName = 'FormGroup'