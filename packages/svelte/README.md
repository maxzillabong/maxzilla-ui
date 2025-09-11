# @maxzilla/ui-svelte

Svelte wrapper components for Maxzilla UI web components.

## 🚀 Installation

```bash
npm install @maxzilla/ui-svelte @maxzilla/ui-core
```

## 📖 Usage

### Basic Usage

```svelte
<script>
  import { Button, Card, Input, Badge, Avatar, Modal } from '@maxzilla/ui-svelte';
  
  let email = '';
  let isModalOpen = false;
  
  function handleSubmit() {
    console.log('Form submitted with email:', email);
  }
  
  function openModal() {
    isModalOpen = true;
  }
  
  function closeModal() {
    isModalOpen = false;
  }
</script>

<main>
  <Card elevation="md" clickable on:click={() => console.log('Card clicked')}>
    <h2>Welcome to Maxzilla UI</h2>
    <p>Beautiful Svelte components with web component power.</p>
    
    <Input 
      bind:value={email}
      label="Email Address"
      type="email"
      placeholder="Enter your email"
      helperText="We'll never share your email"
      on:input={(e) => console.log('Input:', e.detail.value)}
    />
    
    <div class="actions">
      <Button variant="primary" on:click={handleSubmit}>
        Submit
      </Button>
      
      <Button variant="outline" on:click={openModal}>
        Open Modal
      </Button>
    </div>
    
    <Badge variant="success">New</Badge>
    <Avatar src="/avatar.jpg" alt="User" size="md" online />
  </Card>
  
  <Modal bind:open={isModalOpen} size="md" on:close={closeModal}>
    <h3>Modal Title</h3>
    <p>This is a modal dialog built with Maxzilla UI Svelte components.</p>
    
    <div slot="footer">
      <Button variant="ghost" on:click={closeModal}>Cancel</Button>
      <Button variant="primary" on:click={closeModal}>Confirm</Button>
    </div>
  </Modal>
</main>

<style>
  .actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
</style>
```

## 🎨 Available Components

### Button
```svelte
<Button 
  variant="primary"     <!-- 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' -->
  size="md"             <!-- 'sm' | 'md' | 'lg' -->
  loading={false}
  disabled={false}
  href="/link"          <!-- Optional: makes it a link -->
  target="_blank"
  type="button"         <!-- 'button' | 'submit' | 'reset' -->
  on:click={handleClick}
>
  Button Text
</Button>
```

### Card
```svelte
<Card 
  elevation="md"        <!-- 'none' | 'sm' | 'md' | 'lg' | 'xl' -->
  clickable={true}
  on:click={handleCardClick}
>
  <h3 slot="header">Card Header</h3>
  <p>Card content goes here</p>
  <Button slot="actions">Action</Button>
</Card>
```

### Input
```svelte
<Input
  bind:value={inputValue}
  label="Input Label"
  type="text"           <!-- HTML input types -->
  placeholder="Placeholder text"
  disabled={false}
  required={false}
  readonly={false}
  helperText="Helper text"
  name="field-name"
  min="0"               <!-- For number inputs -->
  max="100"
  step="1"
  on:input={handleInput}
  on:change={handleChange}
  on:focus={handleFocus}
  on:blur={handleBlur}
/>
```

### Badge
```svelte
<Badge 
  variant="success"     <!-- 'success' | 'warning' | 'error' | 'info' -->
  size="md"             <!-- 'sm' | 'md' | 'lg' -->
>
  Badge Text
</Badge>
```

### Avatar
```svelte
<Avatar 
  src="/user-avatar.jpg"
  alt="User Name"
  size="md"             <!-- 'sm' | 'md' | 'lg' -->
  online={true}
/>
```

### Modal
```svelte
<Modal 
  bind:open={isModalOpen}
  size="md"             <!-- 'sm' | 'md' | 'lg' -->
  on:close={handleModalClose}
>
  <h2 slot="header">Modal Title</h2>
  <p>Modal content</p>
  <Button slot="footer" on:click={closeModal}>Close</Button>
</Modal>
```

## 🔧 TypeScript Support

All components come with full TypeScript support:

```svelte
<script lang="ts">
  import type { ButtonProps, CardProps } from '@maxzilla/ui-svelte';
  import { Button, Card } from '@maxzilla/ui-svelte';
  
  // Component props are fully typed
  const buttonProps: ButtonProps = {
    variant: 'primary',
    size: 'lg',
    disabled: false
  };
  
  function handleClick(event: MouseEvent) {
    console.log('Button clicked', event);
  }
  
  function handleInput(event: CustomEvent<{ value: string }>) {
    console.log('Input value:', event.detail.value);
  }
</script>

<Button {...buttonProps} on:click={handleClick}>
  Typed Button
</Button>
```

## 🎭 Reactive Properties

Svelte's reactivity works seamlessly with Maxzilla UI components:

```svelte
<script>
  import { Button, Input } from '@maxzilla/ui-svelte';
  
  let isLoading = false;
  let inputValue = '';
  
  // Reactive statement
  $: buttonText = isLoading ? 'Loading...' : 'Submit';
  $: buttonDisabled = !inputValue || isLoading;
  
  async function handleSubmit() {
    isLoading = true;
    
    try {
      await submitForm(inputValue);
    } finally {
      isLoading = false;
    }
  }
</script>

<Input bind:value={inputValue} label="Name" required />

<Button 
  variant="primary"
  loading={isLoading}
  disabled={buttonDisabled}
  on:click={handleSubmit}
>
  {buttonText}
</Button>
```

## 🚨 Event Handling

Components emit standard Svelte events:

```svelte
<script>
  import { Button, Input, Modal } from '@maxzilla/ui-svelte';
  
  function handleButtonClick(event) {
    console.log('Button clicked:', event);
  }
  
  function handleInputChange(event) {
    console.log('Input changed:', event.detail.value);
  }
  
  function handleModalClose() {
    console.log('Modal closed');
  }
</script>

<Button on:click={handleButtonClick}>Click Me</Button>

<Input 
  on:input={handleInputChange}
  on:change={handleInputChange}
  on:focus={() => console.log('Input focused')}
  on:blur={() => console.log('Input blurred')}
/>

<Modal on:close={handleModalClose}>
  Modal content
</Modal>
```

## 🎨 Styling

The Svelte components inherit all styling from the core Maxzilla UI components:

```svelte
<Button class="custom-button" variant="primary">
  Custom Button
</Button>

<style>
  :global(.custom-button) {
    --mz-button-bg: #custom-color;
    --mz-button-padding: 12px 24px;
  }
</style>
```

## 📦 Binding

Use Svelte's bind directive for two-way data binding:

```svelte
<script>
  import { Input, Modal } from '@maxzilla/ui-svelte';
  
  let inputValue = '';
  let isModalOpen = false;
</script>

<!-- Two-way binding -->
<Input bind:value={inputValue} label="Name" />
<Modal bind:open={isModalOpen}>Modal content</Modal>

<!-- Display bound values -->
<p>Input value: {inputValue}</p>
<p>Modal is {isModalOpen ? 'open' : 'closed'}</p>
```

## 🌟 Best Practices

### 1. Use bind: for Form Controls
```svelte
<Input bind:value={formData.email} label="Email" />
```

### 2. Leverage Svelte's Reactivity
```svelte
$: isValid = email.includes('@') && password.length > 6;
```

### 3. Handle Events Properly
```svelte
<Button on:click={async () => await submitForm()}>
  Submit
</Button>
```

### 4. Use TypeScript
```svelte
<script lang="ts">
  import type { ButtonProps } from '@maxzilla/ui-svelte';
</script>
```

### 5. Organize with Components
```svelte
<!-- UserCard.svelte -->
<script>
  import { Card, Avatar, Button } from '@maxzilla/ui-svelte';
  
  export let user;
  export let onEdit;
</script>

<Card elevation="md">
  <div slot="header" class="user-header">
    <Avatar src={user.avatar} alt={user.name} online={user.online} />
    <h3>{user.name}</h3>
  </div>
  
  <p>{user.bio}</p>
  
  <Button slot="actions" variant="outline" on:click={() => onEdit(user)}>
    Edit Profile
  </Button>
</Card>
```

## 🔗 Related Packages

- [`@maxzilla/ui-core`](../core) - Core web components
- [`@maxzilla/ui-react`](../react) - React wrapper components
- [`@maxzilla/ui-vue`](../vue) - Vue wrapper components
- [`@maxzilla/ui-tokens`](../tokens) - Design tokens and themes

## 📄 License

MIT © Max Vananen