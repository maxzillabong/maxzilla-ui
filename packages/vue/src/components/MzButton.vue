<template>
  <mz-button
    v-bind="attrs"
    v-on="listeners"
  >
    <slot />
  </mz-button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size: 'sm' | 'md' | 'lg'
  loading: boolean
  disabled: boolean
  href?: string
  target?: string
  rel?: string
  type: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    type: 'button'
})

const emit = defineEmits<{
  'click': [event: MouseEvent]
}>()

// Convert props to attributes for the web component
const attrs = computed(() => ({
      'variant': props.variant,
      'size': props.size,
      'loading': props.loading,
      'disabled': props.disabled,
      'href': props.href,
      'target': props.target,
      'rel': props.rel,
      'type': props.type
}))

// Event listeners for the web component
const listeners = computed(() => ({
      'click': (event: MouseEvent) => emit('click', event)
}))
</script>