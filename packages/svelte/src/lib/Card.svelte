<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  // Props
export let elevation = 'md';
export let clickable = false;

  // Event dispatcher
  const dispatch = createEventDispatcher<{
    click: MouseEvent
  }>();

  // Reactive attributes
  $: attrs = {
    'elevation': elevation,
    'clickable': clickable
  };
</script>

<mz-card
  {...attrs}
      on:click={(event) => dispatch('click', event)}
>
  <slot />
</mz-card>