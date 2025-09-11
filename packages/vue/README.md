# @maxzilla/ui-vue

Vue wrapper components for Maxzilla UI web components.

## 🚀 Installation

```bash
npm install @maxzilla/ui-vue @maxzilla/ui-core
```

## 📖 Usage

### Option 1: Individual Component Imports

```vue
<template>
  <div>
    <MzButton 
      variant="primary" 
      @click="handleClick"
    >
      Click me!
    </MzButton>
    
    <MzCard elevation="md" clickable>
      <h3>Card Title</h3>
      <p>This is a Vue wrapper around the Maxzilla UI card component.</p>
    </MzCard>
    
    <MzInput
      v-model="email"
      label="Email Address"
      type="email"
      placeholder="Enter your email"
      helper-text="We'll never share your email"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MzButton, MzCard, MzInput } from '@maxzilla/ui-vue'

const email = ref('')

function handleClick() {
  console.log('Button clicked!')
}

function handleInput(event: CustomEvent<{ value: string }>) {
  console.log('Input value:', event.detail.value)
}
</script>
```

### Option 2: Global Plugin Registration

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import MaxzillaUI from '@maxzilla/ui-vue'

const app = createApp(App)
app.use(MaxzillaUI)
app.mount('#app')
```

Then use components without importing:

```vue
<template>
  <MzButton variant="primary">Global Component</MzButton>
</template>
```

## 🎨 Available Components

### MzButton
```vue
<MzButton 
  variant="primary"           <!-- 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' -->
  size="md"                   <!-- 'sm' | 'md' | 'lg' -->
  :loading="false"
  :disabled="false"
  href="/link"                <!-- Optional: makes it a link -->
  target="_blank"
  type="button"               <!-- 'button' | 'submit' | 'reset' -->
  @click="handleClick"
>
  Button Text
</MzButton>
```

### MzCard
```vue
<MzCard 
  elevation="md"              <!-- 'none' | 'sm' | 'md' | 'lg' | 'xl' -->
  :clickable="true"
  @click="handleCardClick"
>
  <template #header>
    <h3>Card Header</h3>
  </template>
  
  <p>Card content goes here</p>
  
  <template #actions>
    <MzButton size="sm">Action</MzButton>
  </template>
</MzCard>
```

### MzInput
```vue
<MzInput
  v-model="inputValue"
  label="Input Label"
  type="text"                 <!-- HTML input types -->
  placeholder="Placeholder text"
  :disabled="false"
  :required="false"
  :readonly="false"
  helper-text="Helper text"
  name="field-name"
  min="0"                     <!-- For number inputs -->
  max="100"
  step="1"
  @input="handleInput"
  @change="handleChange"
  @focus="handleFocus"
  @blur="handleBlur"
/>
```

### MzBadge
```vue
<MzBadge 
  variant="success"           <!-- 'success' | 'warning' | 'error' | 'info' -->
  size="md"                   <!-- 'sm' | 'md' | 'lg' -->
>
  Badge Text
</MzBadge>
```

### MzAvatar
```vue
<MzAvatar 
  src="/user-avatar.jpg"
  alt="User Name"
  size="md"                   <!-- 'sm' | 'md' | 'lg' -->
  :online="true"
/>
```

### MzModal
```vue
<MzModal 
  :open="isModalOpen"
  size="md"                   <!-- 'sm' | 'md' | 'lg' -->
  @close="handleModalClose"
>
  <template #header>
    <h2>Modal Title</h2>
  </template>
  
  <p>Modal content</p>
  
  <template #footer>
    <MzButton @click="closeModal">Close</MzButton>
  </template>
</MzModal>
```

## 🔧 TypeScript Support

All components come with full TypeScript support:

```vue
<script setup lang="ts">
import type { ButtonProps, CardProps } from '@maxzilla/ui-vue'

// Component props are fully typed
const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'lg',
  disabled: false
}
</script>
```

## 🎭 Slots

Components that support slots work seamlessly with Vue's slot system:

```vue
<MzCard>
  <!-- Default slot -->
  <p>Main content</p>
  
  <!-- Named slots -->
  <template #header>
    <h3>Card Header</h3>
  </template>
  
  <template #actions>
    <MzButton>Action</MzButton>
  </template>
</MzCard>
```

## 🚨 Events

All components emit native Vue events:

```vue
<template>
  <MzButton @click="handleClick">Click</MzButton>
  <MzInput @input="handleInput" @change="handleChange" />
  <MzModal @close="handleClose" />
</template>

<script setup lang="ts">
function handleClick(event: MouseEvent) {
  console.log('Button clicked', event)
}

function handleInput(event: CustomEvent<{ value: string }>) {
  console.log('Input changed:', event.detail.value)
}

function handleClose() {
  console.log('Modal closed')
}
</script>
```

## 🎨 Styling

The Vue components inherit all styling from the core Maxzilla UI components. You can customize them using CSS custom properties:

```vue
<template>
  <MzButton 
    class="custom-button"
    variant="primary"
  >
    Custom Button
  </MzButton>
</template>

<style>
.custom-button {
  --mz-button-bg: #custom-color;
  --mz-button-padding: 12px 24px;
}
</style>
```

## 🌟 Best Practices

### 1. Use v-model for Form Controls
```vue
<MzInput v-model="formData.email" label="Email" />
```

### 2. Handle Events Properly
```vue
<MzButton @click="async () => await submitForm()">
  Submit
</MzButton>
```

### 3. Leverage TypeScript
```vue
<script setup lang="ts">
import type { InputProps } from '@maxzilla/ui-vue'

const inputProps: InputProps = {
  type: 'email',
  required: true
}
</script>
```

### 4. Use Slots for Content Organization
```vue
<MzCard>
  <template #header>
    <h3>Organized Content</h3>
  </template>
  
  <p>Main content in default slot</p>
  
  <template #actions>
    <MzButton>Action</MzButton>
  </template>
</MzCard>
```

## 🔗 Related Packages

- [`@maxzilla/ui-core`](../core) - Core web components
- [`@maxzilla/ui-react`](../react) - React wrapper components
- [`@maxzilla/ui-tokens`](../tokens) - Design tokens and themes

## 📄 License

MIT © Max Vananen