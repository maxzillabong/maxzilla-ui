#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageRoot = join(__dirname, '..');

// Component definitions with their properties and events
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

// Generate Vue component template
function generateVueComponent(component) {
  const { name, tagName, props, events } = component;
  
  // Generate props interface
  const propsInterface = props.map(prop => {
    const optional = prop.optional ? '?' : '';
    return `  ${prop.name}${optional}: ${prop.type}`;
  }).join('\n');

  // Generate default props
  const defaultProps = props
    .filter(prop => prop.default && !prop.optional)
    .map(prop => `    ${prop.name}: ${prop.default}`)
    .join(',\n');

  // Generate attribute mappings
  const attrMappings = props.map(prop => {
    const attrName = prop.attr || prop.name.replace(/([A-Z])/g, '-$1').toLowerCase();
    return `      '${attrName}': props.${prop.name}`;
  }).join(',\n');

  // Generate event listeners
  const eventListeners = events.map(event => {
    const eventName = event.name === 'input' ? 'mz-input' : 
                     event.name === 'change' ? 'mz-change' :
                     event.name === 'focus' ? 'mz-focus' :
                     event.name === 'blur' ? 'mz-blur' :
                     event.name;
    return `      '${eventName}': (event: ${event.type}) => emit('${event.name}', event)`;
  }).join(',\n');

  // Generate emits array
  const emitsArray = events.map(event => `'${event.name}'`).join(', ');

  return `<template>
  <${tagName}
    v-bind="attrs"
    v-on="listeners"
  >
    <slot />
  </${tagName}>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface ${name}Props {
${propsInterface}
}

const props = withDefaults(defineProps<${name}Props>(), {
${defaultProps}
})

const emit = defineEmits<{
${events.map(event => `  '${event.name}': [event: ${event.type}]`).join('\n')}
}>()

// Convert props to attributes for the web component
const attrs = computed(() => ({
${attrMappings}
}))

// Event listeners for the web component
const listeners = computed(() => ({
${eventListeners}
}))
</script>`;
}

// Generate index file
function generateIndex() {
  const exports = components.map(({ name }) => 
    `export { default as Mz${name} } from './components/Mz${name}.vue'`
  ).join('\n');
  
  const typeExports = components.map(({ name }) => 
    `export type { ${name}Props } from './components/Mz${name}.vue'`
  ).join('\n');

  return `// Auto-generated Vue wrapper components for Maxzilla UI
// Do not edit this file directly - use npm run generate to regenerate

// Import web components to ensure they are registered
import '@maxzilla/ui-core'

// Component exports
${exports}

// Type exports  
${typeExports}

// Plugin for global registration
import type { App } from 'vue'
${components.map(({ name }) => `import Mz${name} from './components/Mz${name}.vue'`).join('\n')}

export default {
  install(app: App) {
${components.map(({ name }) => `    app.component('Mz${name}', Mz${name})`).join('\n')}
  }
}
`;
}

// Create directories
mkdirSync(join(packageRoot, 'src'), { recursive: true });
mkdirSync(join(packageRoot, 'src/components'), { recursive: true });

// Generate component files
for (const component of components) {
  const componentCode = generateVueComponent(component);
  const filePath = join(packageRoot, 'src/components', `Mz${component.name}.vue`);
  
  writeFileSync(filePath, componentCode, 'utf-8');
  console.log(`Generated Mz${component.name}.vue`);
}

// Generate index file
const indexCode = generateIndex();
const indexPath = join(packageRoot, 'src/index.ts');
writeFileSync(indexPath, indexCode, 'utf-8');
console.log('Generated index.ts');

console.log(`✅ Generated ${components.length} Vue wrapper components`);