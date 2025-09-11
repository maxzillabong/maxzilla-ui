<template>
  <mz-avatar
    v-bind="attrs"
    v-on="listeners"
  >
    <slot />
  </mz-avatar>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface AvatarProps {
  src?: string
  alt: string
  size: 'sm' | 'md' | 'lg'
  online: boolean
}

const props = withDefaults(defineProps<AvatarProps>(), {
    alt: '',
    size: 'md',
    online: false
})

const emit = defineEmits<{

}>()

// Convert props to attributes for the web component
const attrs = computed(() => ({
      'src': props.src,
      'alt': props.alt,
      'size': props.size,
      'online': props.online
}))

// Event listeners for the web component
const listeners = computed(() => ({

}))
</script>