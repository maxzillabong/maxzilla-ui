#!/usr/bin/env node

import fs from 'fs/promises'
import path from 'path'

// Component definitions with their props and events
const componentDefinitions = {
  'mz-button': {
    props: {
      variant: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'",
      size: "'sm' | 'md' | 'lg'",
      loading: 'boolean',
      disabled: 'boolean',
      href: 'string',
      target: 'string',
      rel: 'string',
      type: "'button' | 'submit' | 'reset'"
    },
    events: {
      onClick: 'click'
    }
  },
  'mz-card': {
    props: {
      elevation: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
      clickable: 'boolean',
      href: 'string',
      target: 'string',
      rel: 'string'
    },
    events: {
      onClick: 'click'
    }
  },
  'mz-input': {
    props: {
      type: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'",
      label: 'string',
      placeholder: 'string',
      value: 'string | number',
      disabled: 'boolean',
      required: 'boolean',
      readonly: 'boolean',
      error: 'boolean',
      helperText: 'string',
      size: "'sm' | 'md' | 'lg'"
    },
    events: {
      onChange: 'change',
      onInput: 'input',
      onFocus: 'focus',
      onBlur: 'blur'
    }
  },
  'mz-badge': {
    props: {
      variant: "'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'",
      size: "'sm' | 'md' | 'lg'",
      dot: 'boolean'
    },
    events: {}
  },
  'mz-avatar': {
    props: {
      src: 'string',
      alt: 'string',
      size: "'sm' | 'md' | 'lg' | 'xl'",
      shape: "'circle' | 'square'",
      online: 'boolean',
      initials: 'string'
    },
    events: {}
  },
  'mz-modal': {
    props: {
      open: 'boolean',
      size: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
      closable: 'boolean',
      backdrop: 'boolean'
    },
    events: {
      onClose: 'close',
      onOpen: 'open'
    }
  }
  ,
  'mz-accordion': {
    props: {
      multiple: 'boolean'
    },
    events: {}
  },
  'mz-accordion-item': {
    props: {
      header: 'string',
      open: 'boolean'
    },
    events: {
      onToggle: 'accordion-toggle'
    }
  }
  ,
  'mz-divider': {
    props: { orientation: "'horizontal' | 'vertical'" },
    events: {}
  },
  'mz-stack': {
    props: {
      direction: "'horizontal' | 'vertical'",
      spacing: "'sm' | 'md' | 'lg'",
      align: "'start' | 'center' | 'end'",
      justify: "'start' | 'center' | 'end' | 'between'"
    },
    events: {}
  },
  'mz-container': {
    props: { size: "'sm' | 'md' | 'lg' | 'xl'", centered: 'boolean' },
    events: {}
  },
  'mz-checkbox': {
    props: { checked: 'boolean', disabled: 'boolean', label: 'string' },
    events: { onChange: 'change' }
  },
  'mz-switch': {
    props: { checked: 'boolean', disabled: 'boolean', label: 'string' },
    events: { onChange: 'change' }
  },
  'mz-textarea': {
    props: { label: 'string', placeholder: 'string', rows: 'number', value: 'string', disabled: 'boolean', helperText: 'string' },
    events: { onInput: 'input', onChange: 'change' }
  }
  ,
  'mz-navbar': { props: {}, events: {} },
  'mz-breadcrumb': { props: {}, events: {} },
  'mz-breadcrumb-item': { props: { href: 'string', current: 'boolean' }, events: {} },
  'mz-drawer': { props: { open: 'boolean', placement: "'left' | 'right'", closable: 'boolean' }, events: { onClose: 'drawer-close' } },
  'mz-radio-group': { props: { name: 'string', value: 'string' }, events: { onChange: 'change' } },
  'mz-radio': { props: { value: 'string', checked: 'boolean', disabled: 'boolean' }, events: { onSelect: 'radio-select' } },
  'mz-tabs': { props: { initial: 'number' }, events: {} },
  'mz-tab': { props: { label: 'string', active: 'boolean' }, events: {} }
  ,
  'mz-popover': { props: { placement: "'top'|'bottom'|'left'|'right'", open: 'boolean', hover: 'boolean' }, events: {} },
  'mz-table': { props: {}, events: {} }
  ,
  'mz-form': { props: {}, events: { onSubmit: 'submit' } },
  'mz-form-group': { props: {}, events: {} },
  'mz-form-actions': { props: {}, events: {} },
  'mz-pagination': { props: { total: 'number', pageSize: 'number', current: 'number' }, events: { onPageChange: 'page-change' } },
  'mz-alert': { props: { variant: "'success'|'info'|'warning'|'error'", dismissible: 'boolean' }, events: { onClose: 'close' } },
  'mz-progress': { props: { value: 'number', max: 'number', label: 'string', showValue: 'boolean' }, events: {} },
  'mz-loading': { props: { overlay: 'boolean', size: "'sm'|'md'|'lg'" }, events: {} },
  'mz-toast-container': { props: { duration: 'number' }, events: {} }
}

function toPascalCase(str) {
  return str.replace(/mz-/, '').replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
    .replace(/^[a-z]/, letter => letter.toUpperCase())
}

function generateWrapper(tagName, definition) {
  const componentName = toPascalCase(tagName)
  const { props, events } = definition
  
  const propsInterface = Object.entries(props)
    .map(([key, type]) => `  ${key}?: ${type}`)
    .join('\n')
  
  const eventProps = Object.keys(events)
    .map(key => `  ${key}?: (event: Event) => void`)
    .join('\n')
  
  const eventMap = Object.keys(events).length > 0 
    ? `const eventMap = {
  ${Object.entries(events).map(([react, web]) => `${react}: '${web}'`).join(',\n  ')}
}`
    : 'const eventMap = {}'

  return `import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface ${componentName}Props extends WebComponentProps {
${propsInterface}${eventProps ? '\n' + eventProps : ''}
}

${eventMap}

const Mz${componentName} = createReactWrapper<HTMLElement>('${tagName}'${Object.keys(events).length > 0 ? ', eventMap' : ''})

export const ${componentName} = Mz${componentName} as React.ForwardRefExoticComponent<${componentName}Props>

${componentName}.displayName = '${componentName}'`
}

function generateIndex(componentNames) {
  const exports = componentNames.map(name => {
    const componentName = toPascalCase(name)
    return `export { ${componentName}, type ${componentName}Props } from './components/${componentName}.js'`
  }).join('\n')
  
  return `// Auto-generated React wrapper components for Maxzilla UI
// Do not edit this file directly - use npm run generate to regenerate

export { useWebComponents } from './utils/createReactWrapper.js'

${exports}`
}

async function generateWrappers() {
  const srcDir = new URL('../src', import.meta.url).pathname
  const componentsDir = path.join(srcDir, 'components')
  
  // Ensure directories exist
  await fs.mkdir(componentsDir, { recursive: true })
  
  // Generate individual component files
  for (const [tagName, definition] of Object.entries(componentDefinitions)) {
    const componentName = toPascalCase(tagName)
    const content = generateWrapper(tagName, definition)
    const filePath = path.join(componentsDir, `${componentName}.tsx`)
    
    await fs.writeFile(filePath, content)
    console.log(`Generated ${componentName}.tsx`)
  }
  
  // Generate index file
  const indexContent = generateIndex(Object.keys(componentDefinitions))
  const indexPath = path.join(srcDir, 'index.ts')
  await fs.writeFile(indexPath, indexContent)
  console.log('Generated index.ts')
  
  console.log(`✅ Generated ${Object.keys(componentDefinitions).length} React wrapper components`)
}

generateWrappers().catch(console.error)
