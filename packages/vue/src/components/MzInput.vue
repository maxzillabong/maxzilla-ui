<template>
  <mz-input
    v-bind="attrs"
    v-on="listeners"
  >
    <slot />
  </mz-input>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface InputProps {
  label?: string
  type: string
  value: string
  placeholder?: string
  disabled: boolean
  required: boolean
  readonly: boolean
  helperText?: string
  name?: string
  min?: string
  max?: string
  step?: string
}

const props = withDefaults(defineProps<InputProps>(), {
    type: 'text',
    value: '',
    disabled: false,
    required: false,
    readonly: false
})

const emit = defineEmits<{
  'input': [event: CustomEvent<{ value: string }>]
  'change': [event: CustomEvent<{ value: string }>]
  'focus': [event: FocusEvent]
  'blur': [event: FocusEvent]
}>()

// Convert props to attributes for the web component
const attrs = computed(() => ({
      'label': props.label,
      'type': props.type,
      'value': props.value,
      'placeholder': props.placeholder,
      'disabled': props.disabled,
      'required': props.required,
      'readonly': props.readonly,
      'helper-text': props.helperText,
      'name': props.name,
      'min': props.min,
      'max': props.max,
      'step': props.step
}))

// Event listeners for the web component
const listeners = computed(() => ({
      'mz-input': (event: CustomEvent<{ value: string }>) => emit('input', event),
      'mz-change': (event: CustomEvent<{ value: string }>) => emit('change', event),
      'mz-focus': (event: FocusEvent) => emit('focus', event),
      'mz-blur': (event: FocusEvent) => emit('blur', event)
}))
</script>