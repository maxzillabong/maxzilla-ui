#!/usr/bin/env node

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Enhanced component definitions with better typing and event handling
const componentDefinitions = {
  'mz-button': {
    props: {
      variant: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'",
      size: "'sm' | 'md' | 'lg'",
      loading: 'boolean',
      disabled: 'boolean',
      fullWidth: 'boolean',
      href: 'string',
      target: 'string',
      rel: 'string',
      type: "'button' | 'submit' | 'reset'"
    },
    events: {
      onClick: { webEvent: 'click', hasDetail: false }
    },
    methods: ['click', 'focus', 'blur']
  },
  'mz-input': {
    props: {
      type: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local'",
      label: 'string',
      placeholder: 'string',
      value: 'string',
      name: 'string',
      disabled: 'boolean',
      required: 'boolean',
      readonly: 'boolean',
      error: 'boolean',
      success: 'boolean',
      helperText: 'string',
      size: "'sm' | 'md' | 'lg'",
      fullWidth: 'boolean',
      pattern: 'string',
      autocomplete: 'string',
      min: 'string | number',
      max: 'string | number',
      minLength: 'number',
      maxLength: 'number',
      step: 'number',
      autofocus: 'boolean'
    },
    events: {
      onChange: { webEvent: 'change', hasDetail: false },
      onInput: { webEvent: 'mz-input', hasDetail: true },
      onFocus: { webEvent: 'mz-focus', hasDetail: false },
      onBlur: { webEvent: 'mz-blur', hasDetail: false }
    },
    methods: ['focus', 'blur', 'select', 'setSelectionRange', 'validate', 'checkValidity', 'reportValidity']
  },
  'mz-checkbox': {
    props: {
      checked: 'boolean',
      disabled: 'boolean',
      indeterminate: 'boolean',
      label: 'string',
      name: 'string',
      value: 'string',
      required: 'boolean'
    },
    events: {
      onChange: { webEvent: 'change', hasDetail: false },
      onMzChange: { webEvent: 'mz-change', hasDetail: true }
    },
    methods: ['click', 'focus', 'blur', 'validate', 'checkValidity', 'reportValidity']
  },
  'mz-modal': {
    props: {
      open: 'boolean',
      title: 'string',
      size: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
      animation: "'scale' | 'fade' | 'slide-up'",
      noCloseOnBackdrop: 'boolean',
      noCloseButton: 'boolean',
      scrollable: 'boolean'
    },
    events: {
      onShow: { webEvent: 'mz-modal-show', hasDetail: false },
      onClose: { webEvent: 'mz-modal-close', hasDetail: false },
      onClosed: { webEvent: 'mz-modal-closed', hasDetail: false }
    },
    methods: ['show', 'close']
  },
  'mz-tabs': {
    props: {
      initial: 'number',
      orientation: "'horizontal' | 'vertical'"
    },
    events: {
      onChange: { webEvent: 'mz-tab-change', hasDetail: true }
    },
    methods: []
  },
  'mz-drawer': {
    props: {
      open: 'boolean',
      placement: "'left' | 'right'",
      closable: 'boolean',
      noCloseButton: 'boolean',
      size: "'sm' | 'md' | 'lg' | 'full'"
    },
    events: {
      onOpen: { webEvent: 'mz-drawer-open', hasDetail: false },
      onClose: { webEvent: 'mz-drawer-close', hasDetail: false },
      onClosed: { webEvent: 'mz-drawer-closed', hasDetail: false }
    },
    methods: ['show', 'close']
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
      onClick: { webEvent: 'click', hasDetail: false }
    },
    methods: []
  },
  'mz-badge': {
    props: {
      variant: "'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'",
      size: "'sm' | 'md' | 'lg'",
      dot: 'boolean'
    },
    events: {},
    methods: []
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
    events: {},
    methods: []
  },
  'mz-alert': {
    props: {
      variant: "'info' | 'success' | 'warning' | 'error'",
      dismissible: 'boolean',
      icon: 'boolean'
    },
    events: {
      onDismiss: { webEvent: 'dismiss', hasDetail: false }
    },
    methods: ['dismiss']
  },
  'mz-switch': {
    props: {
      checked: 'boolean',
      disabled: 'boolean',
      label: 'string',
      name: 'string',
      value: 'string',
      required: 'boolean'
    },
    events: {
      onChange: { webEvent: 'change', hasDetail: false }
    },
    methods: ['click', 'focus', 'blur']
  },
  'mz-select': {
    props: {
      value: 'string',
      label: 'string',
      placeholder: 'string',
      disabled: 'boolean',
      required: 'boolean',
      error: 'boolean',
      helperText: 'string',
      name: 'string',
      size: "'sm' | 'md' | 'lg'"
    },
    events: {
      onChange: { webEvent: 'change', hasDetail: false }
    },
    methods: ['focus', 'blur', 'validate']
  },
  'mz-textarea': {
    props: {
      value: 'string',
      placeholder: 'string',
      disabled: 'boolean',
      readonly: 'boolean',
      required: 'boolean',
      rows: 'number',
      cols: 'number',
      maxLength: 'number',
      minLength: 'number',
      name: 'string',
      label: 'string',
      helperText: 'string',
      error: 'boolean',
      success: 'boolean',
      resize: "'none' | 'both' | 'horizontal' | 'vertical'"
    },
    events: {
      onChange: { webEvent: 'change', hasDetail: false },
      onInput: { webEvent: 'mz-input', hasDetail: true },
      onFocus: { webEvent: 'mz-focus', hasDetail: false },
      onBlur: { webEvent: 'mz-blur', hasDetail: false }
    },
    methods: ['focus', 'blur', 'select', 'setSelectionRange', 'validate']
  }
}

// Generate improved React wrapper with proper typing and ref forwarding
function generateReactWrapper(componentName, definition) {
  const componentNamePascal = componentName.split('-').map(part =>
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join('').replace('Mz', '')

  const propsInterface = Object.entries(definition.props || {})
    .map(([name, type]) => `  ${name}?: ${type}`)
    .join('\n')

  const eventHandlers = Object.entries(definition.events || {})
    .map(([name, eventConfig]) => {
      const eventType = eventConfig.hasDetail ?
        `CustomEvent<any>` :
        `Event`
      return `  ${name}?: (event: ${eventType}) => void`
    })
    .join('\n')

  const hasChildren = !['mz-input', 'mz-textarea', 'mz-select', 'mz-switch', 'mz-checkbox'].includes(componentName)

  const publicMethods = definition.methods || []
  const methodDeclarations = publicMethods
    .map(method => {
      // Special handling for methods with parameters
      if (method === 'setSelectionRange') {
        return `    ${method}: (start: number, end: number, direction?: 'forward' | 'backward' | 'none') => void`
      }
      return `    ${method}: () => void`
    })
    .join('\n')

  const methodImplementations = publicMethods
    .map(method => {
      if (method === 'setSelectionRange') {
        return `    ${method}: (start: number, end: number, direction?: 'forward' | 'backward' | 'none') => {
      elementRef.current?.${method}(start, end, direction)
    }`
      }
      return `    ${method}: () => elementRef.current?.${method}()`
    })
    .join(',\n')

  const eventSetup = Object.entries(definition.events || {})
    .map(([name, eventConfig]) => {
      return `
      if (${name}) {
        element.addEventListener('${eventConfig.webEvent}', ${name} as EventListener)
      }`
    })
    .join('')

  const eventCleanup = Object.entries(definition.events || {})
    .map(([name, eventConfig]) => {
      return `
        if (${name}) {
          element.removeEventListener('${eventConfig.webEvent}', ${name} as EventListener)
        }`
    })
    .join('')

  const hasEvents = Object.keys(definition.events || {}).length > 0
  const hasMethods = publicMethods.length > 0

  return `import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core/${componentName.slice(3)}'

interface ${componentNamePascal}Props {
${propsInterface}
${eventHandlers}
  className?: string
  style?: React.CSSProperties
${hasChildren ? '  children?: React.ReactNode' : ''}
}

${hasMethods ? `export interface ${componentNamePascal}Ref {
${methodDeclarations}
}` : ''}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      '${componentName}': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & ${componentNamePascal}Props,
        HTMLElement
      >
    }
  }
}

export const ${componentNamePascal} = forwardRef<
  ${hasMethods ? `${componentNamePascal}Ref` : 'HTMLElement'},
  ${componentNamePascal}Props
>((props, ref) => {
  const {
    ${Object.keys(definition.events || {}).length > 0 ? Object.keys(definition.events || {}).join(',\n    ') + ',' : ''}
    className,
    style,
    ${hasChildren ? 'children,' : ''}
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  ${hasMethods ? `useImperativeHandle(ref, () => ({
${methodImplementations}
  }), [])` : `useImperativeHandle(ref, () => elementRef.current as HTMLElement, [])`}

  ${hasEvents ? `useEffect(() => {
    const element = elementRef.current
    if (!element) return
${eventSetup}

    return () => {${eventCleanup}
    }
  }, [${Object.keys(definition.events || {}).join(', ')}])` : ''}

  // Handle controlled components
  ${componentName === 'mz-input' || componentName === 'mz-textarea' || componentName === 'mz-select' ? `
  useEffect(() => {
    const element = elementRef.current as any
    if (element && props.value !== undefined) {
      element.value = props.value
    }
  }, [props.value])` : ''}

  ${componentName === 'mz-checkbox' || componentName === 'mz-switch' ? `
  useEffect(() => {
    const element = elementRef.current as any
    if (element && props.checked !== undefined) {
      element.checked = props.checked
    }
  }, [props.checked])` : ''}

  return (
    <${componentName}
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      ${hasChildren ? '{children}' : ''}
    </${componentName}>
  )
})

${componentNamePascal}.displayName = '${componentNamePascal}'
`
}

// Generate index file
function generateIndexFile(componentNames) {
  const exports = componentNames
    .map(name => {
      const componentNamePascal = name.split('-').map(part =>
        part.charAt(0).toUpperCase() + part.slice(1)
      ).join('').replace('Mz', '')
      return `export { ${componentNamePascal} } from './${componentNamePascal}'`
    })
    .join('\n')

  const typeExports = componentNames
    .filter(name => componentDefinitions[name].methods?.length > 0)
    .map(name => {
      const componentNamePascal = name.split('-').map(part =>
        part.charAt(0).toUpperCase() + part.slice(1)
      ).join('').replace('Mz', '')
      return `export type { ${componentNamePascal}Ref } from './${componentNamePascal}'`
    })
    .join('\n')

  return `// Auto-generated React wrappers for Maxzilla UI web components
${exports}

// Type exports for components with ref methods
${typeExports}
`
}

async function generateWrappers() {
  const outputDir = path.join(__dirname, '..', 'src', 'components')

  // Create output directory
  await fs.mkdir(outputDir, { recursive: true })

  // Generate wrapper for each component
  for (const [componentName, definition] of Object.entries(componentDefinitions)) {
    const componentNamePascal = componentName.split('-').map(part =>
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join('').replace('Mz', '')

    const wrapperCode = generateReactWrapper(componentName, definition)
    const outputPath = path.join(outputDir, `${componentNamePascal}.tsx`)

    await fs.writeFile(outputPath, wrapperCode)
    console.log(`✅ Generated ${componentNamePascal}.tsx`)
  }

  // Generate index file
  const indexCode = generateIndexFile(Object.keys(componentDefinitions))
  await fs.writeFile(path.join(outputDir, 'index.ts'), indexCode)
  console.log('✅ Generated index.ts')

  console.log('\n🎉 React wrappers generated successfully!')
}

// Run the generator
generateWrappers().catch(console.error)