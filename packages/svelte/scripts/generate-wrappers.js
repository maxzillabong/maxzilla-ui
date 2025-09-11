#!/usr/bin/env node

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageRoot = join(__dirname, '..');

// Component definitions
const components = [
  {
    name: 'Button',
    tagName: 'mz-button',
    props: [
      { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'", default: "'primary'" },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'" },
      { name: 'loading', type: 'boolean', default: 'false' },
      { name: 'disabled', type: 'boolean', default: 'false' },
      { name: 'href', type: 'string', optional: true },
      { name: 'target', type: 'string', optional: true },
      { name: 'rel', type: 'string', optional: true },
      { name: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'" }
    ],
    events: [
      { name: 'click', type: 'MouseEvent' }
    ]
  },
  {
    name: 'Card',
    tagName: 'mz-card',
    props: [
      { name: 'elevation', type: "'none' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'" },
      { name: 'clickable', type: 'boolean', default: 'false' }
    ],
    events: [
      { name: 'click', type: 'MouseEvent' }
    ]
  },
  {
    name: 'Input',
    tagName: 'mz-input',
    props: [
      { name: 'label', type: 'string', optional: true },
      { name: 'type', type: 'string', default: "'text'" },
      { name: 'value', type: 'string', default: "''" },
      { name: 'placeholder', type: 'string', optional: true },
      { name: 'disabled', type: 'boolean', default: 'false' },
      { name: 'required', type: 'boolean', default: 'false' },
      { name: 'readonly', type: 'boolean', default: 'false' },
      { name: 'helperText', type: 'string', optional: true, attr: 'helper-text' },
      { name: 'name', type: 'string', optional: true },
      { name: 'min', type: 'string', optional: true },
      { name: 'max', type: 'string', optional: true },
      { name: 'step', type: 'string', optional: true }
    ],
    events: [
      { name: 'input', type: 'CustomEvent<{ value: string }>' },
      { name: 'change', type: 'CustomEvent<{ value: string }>' },
      { name: 'focus', type: 'FocusEvent' },
      { name: 'blur', type: 'FocusEvent' }
    ]
  },
  {
    name: 'Badge',
    tagName: 'mz-badge',
    props: [
      { name: 'variant', type: "'success' | 'warning' | 'error' | 'info'", default: "'info'" },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'" }
    ],
    events: []
  },
  {
    name: 'Avatar',
    tagName: 'mz-avatar',
    props: [
      { name: 'src', type: 'string', optional: true },
      { name: 'alt', type: 'string', default: "''" },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'" },
      { name: 'online', type: 'boolean', default: 'false' }
    ],
    events: []
  },
  {
    name: 'Modal',
    tagName: 'mz-modal',
    props: [
      { name: 'open', type: 'boolean', default: 'false' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'" }
    ],
    events: [
      { name: 'close', type: 'CustomEvent' }
    ]
  }
];

// Generate Svelte component template
function generateSvelteComponent(component) {
  const { name, tagName, props, events } = component;
  
  // Generate props interface
  const propsInterface = props.map(prop => {
    const optional = prop.optional ? '?' : '';
    return `  ${prop.name}${optional}: ${prop.type}`;
  }).join('\n');

  // Generate exported props
  const exportedProps = props.map(prop => {
    const defaultValue = prop.default || 'undefined';
    return `export let ${prop.name}${prop.optional ? '= undefined' : ` = ${defaultValue}`};`;
  }).join('\n');

  // Generate attributes object
  const attributes = props.map(prop => {
    const attrName = prop.attr || prop.name.replace(/([A-Z])/g, '-$1').toLowerCase();
    return `    '${attrName}': ${prop.name}`;
  }).join(',\n');

  // Generate event handlers
  const eventHandlers = events.map(event => {
    const eventName = event.name === 'input' ? 'mz-input' : 
                     event.name === 'change' ? 'mz-change' :
                     event.name === 'focus' ? 'mz-focus' :
                     event.name === 'blur' ? 'mz-blur' :
                     event.name;
    return `    on:${eventName}`;
  }).join('\n');

  return `<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  // Props
${exportedProps}

  // Event dispatcher
  const dispatch = createEventDispatcher<{
${events.map(event => `    ${event.name}: ${event.type}`).join('\n')}
  }>();

  // Reactive attributes
  $: attrs = {
${attributes}
  };
</script>

<${tagName}
  {...attrs}
${eventHandlers ? eventHandlers.split('\n').map(line => `  ${line}={(event) => dispatch('${events.find(e => line.includes(e.name === 'input' ? 'mz-input' : e.name === 'change' ? 'mz-change' : e.name === 'focus' ? 'mz-focus' : e.name === 'blur' ? 'mz-blur' : e.name))?.name}', event)}`).join('\n') : ''}
>
  <slot />
</${tagName}>`;
}

// Generate index file
function generateIndex() {
  const exports = components.map(({ name }) => 
    `export { default as ${name} } from './lib/${name}.svelte';`
  ).join('\n');

  return `// Auto-generated Svelte wrapper components for Maxzilla UI
// Do not edit this file directly - use npm run generate to regenerate

// Import web components to ensure they are registered
import '@maxzilla/ui-core';

// Component exports
${exports}

// Type definitions
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  clickable?: boolean;
}

export interface InputProps {
  label?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  helperText?: string;
  name?: string;
  min?: string;
  max?: string;
  step?: string;
}

export interface BadgeProps {
  variant?: 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  online?: boolean;
}

export interface ModalProps {
  open?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
`;
}

// Create directories
mkdirSync(join(packageRoot, 'src'), { recursive: true });
mkdirSync(join(packageRoot, 'src/lib'), { recursive: true });

// Generate component files
for (const component of components) {
  const componentCode = generateSvelteComponent(component);
  const filePath = join(packageRoot, 'src/lib', `${component.name}.svelte`);
  
  writeFileSync(filePath, componentCode, 'utf-8');
  console.log(`Generated ${component.name}.svelte`);
}

// Generate index file
const indexCode = generateIndex();
const indexPath = join(packageRoot, 'src/index.ts');
writeFileSync(indexPath, indexCode, 'utf-8');
console.log('Generated index.ts');

console.log(`✅ Generated ${components.length} Svelte wrapper components`);