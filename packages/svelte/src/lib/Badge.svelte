<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  // Props
export let variant = 'info';
export let size = 'md';

  // Event dispatcher
  const dispatch = createEventDispatcher<{

  }>();

  // Reactive attributes
  $: attrs = {
    'variant': variant,
    'size': size
  };
</script>

<mz-badge
  {...attrs}

>
  <slot />
</mz-badge>