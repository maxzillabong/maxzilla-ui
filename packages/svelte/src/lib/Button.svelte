<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  // Props
export let variant = 'primary';
export let size = 'md';
export let loading = false;
export let disabled = false;
export let href= undefined;
export let target= undefined;
export let rel= undefined;
export let type = 'button';

  // Event dispatcher
  const dispatch = createEventDispatcher<{
    click: MouseEvent
  }>();

  // Reactive attributes
  $: attrs = {
    'variant': variant,
    'size': size,
    'loading': loading,
    'disabled': disabled,
    'href': href,
    'target': target,
    'rel': rel,
    'type': type
  };
</script>

<mz-button
  {...attrs}
      on:click={(event) => dispatch('click', event)}
>
  <slot />
</mz-button>