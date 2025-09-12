import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface FormActionsProps extends WebComponentProps {

}

const eventMap = {}

const MzFormActions = createReactWrapper<HTMLElement>('mz-form-actions')

export const FormActions = MzFormActions as React.ForwardRefExoticComponent<FormActionsProps>

FormActions.displayName = 'FormActions'