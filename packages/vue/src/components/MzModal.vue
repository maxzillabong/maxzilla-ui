<template>
  <mz-modal
    v-bind="attrs"
    v-on="listeners"
  >
    <slot />
  </mz-modal>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface ModalProps {
  open: boolean
  size: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<ModalProps>(), {
    open: false,
    size: 'md'
})

const emit = defineEmits<{
  'close': [event: CustomEvent]
}>()

// Convert props to attributes for the web component
const attrs = computed(() => ({
      'open': props.open,
      'size': props.size
}))

// Event listeners for the web component
const listeners = computed(() => ({
      'close': (event: CustomEvent) => emit('close', event)
}))
</script>