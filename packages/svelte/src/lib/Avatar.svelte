<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  // Props
export let src= undefined;
export let alt = '';
export let size = 'md';
export let online = false;

  // Event dispatcher
  const dispatch = createEventDispatcher<{

  }>();

  // Reactive attributes
  $: attrs = {
    'src': src,
    'alt': alt,
    'size': size,
    'online': online
  };
</script>

<mz-avatar
  {...attrs}

>
  <slot />
</mz-avatar>