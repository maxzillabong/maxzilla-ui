<template>
  <mz-card
    v-bind="attrs"
    v-on="listeners"
  >
    <slot />
  </mz-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface CardProps {
  elevation: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  clickable: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
    elevation: 'md',
    clickable: false
})

const emit = defineEmits<{
  'click': [event: MouseEvent]
}>()

// Convert props to attributes for the web component
const attrs = computed(() => ({
      'elevation': props.elevation,
      'clickable': props.clickable
}))

// Event listeners for the web component
const listeners = computed(() => ({
      'click': (event: MouseEvent) => emit('click', event)
}))
</script>