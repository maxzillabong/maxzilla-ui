<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  // Props
export let open = false;
export let size = 'md';

  // Event dispatcher
  const dispatch = createEventDispatcher<{
    close: CustomEvent
  }>();

  // Reactive attributes
  $: attrs = {
    'open': open,
    'size': size
  };
</script>

<mz-modal
  {...attrs}
      on:close={(event) => dispatch('close', event)}
>
  <slot />
</mz-modal>