<template>
  <mz-badge
    v-bind="attrs"
    v-on="listeners"
  >
    <slot />
  </mz-badge>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface BadgeProps {
  variant: 'success' | 'warning' | 'error' | 'info'
  size: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<BadgeProps>(), {
    variant: 'info',
    size: 'md'
})

const emit = defineEmits<{

}>()

// Convert props to attributes for the web component
const attrs = computed(() => ({
      'variant': props.variant,
      'size': props.size
}))

// Event listeners for the web component
const listeners = computed(() => ({

}))
</script>