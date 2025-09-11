<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  // Props
export let label= undefined;
export let type = 'text';
export let value = '';
export let placeholder= undefined;
export let disabled = false;
export let required = false;
export let readonly = false;
export let helperText= undefined;
export let name= undefined;
export let min= undefined;
export let max= undefined;
export let step= undefined;

  // Event dispatcher
  const dispatch = createEventDispatcher<{
    input: CustomEvent<{ value: string }>
    change: CustomEvent<{ value: string }>
    focus: FocusEvent
    blur: FocusEvent
  }>();

  // Reactive attributes
  $: attrs = {
    'label': label,
    'type': type,
    'value': value,
    'placeholder': placeholder,
    'disabled': disabled,
    'required': required,
    'readonly': readonly,
    'helper-text': helperText,
    'name': name,
    'min': min,
    'max': max,
    'step': step
  };
</script>

<mz-input
  {...attrs}
      on:mz-input={(event) => dispatch('input', event)}
      on:mz-change={(event) => dispatch('change', event)}
      on:mz-focus={(event) => dispatch('focus', event)}
      on:mz-blur={(event) => dispatch('blur', event)}
>
  <slot />
</mz-input>