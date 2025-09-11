import { expect, fixture, html } from '@open-wc/testing';
import { MzInput } from './index.js';
import '../../index.js';

describe('MzInput', () => {
  it('should render with default properties', async () => {
    const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
    
    expect(el).to.exist;
    expect(el.type).to.equal('text');
    expect(el.disabled).to.be.false;
    expect(el.required).to.be.false;
    expect(el.readonly).to.be.false;
    expect(el.value).to.equal('');
  });

  it('should render with label', async () => {
    const el = await fixture<MzInput>(html`
      <mz-input label="Email Address"></mz-input>
    `);
    
    expect(el.label).to.equal('Email Address');
    
    const label = el.shadowRoot?.querySelector('label');
    expect(label).to.exist;
    expect(label?.textContent?.trim()).to.equal('Email Address');
  });

  it('should render with different input types', async () => {
    const types = ['text', 'email', 'password', 'number', 'tel', 'url'] as const;
    
    for (const type of types) {
      const el = await fixture<MzInput>(html`<mz-input type="${type}"></mz-input>`);
      
      expect(el.type).to.equal(type);
      
      const input = el.shadowRoot?.querySelector('input');
      expect(input).to.exist;
      expect(input?.type).to.equal(type);
    }
  });

  it('should handle value changes', async () => {
    const el = await fixture<MzInput>(html`<mz-input value="initial"></mz-input>`);
    
    expect(el.value).to.equal('initial');
    
    const input = el.shadowRoot?.querySelector('input');
    expect(input).to.exist;
    expect(input?.value).to.equal('initial');
    
    // Update value programmatically
    el.value = 'updated';
    await el.updateComplete;
    
    expect(el.value).to.equal('updated');
    expect(input?.value).to.equal('updated');
  });

  it('should emit input events', async () => {
    const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
    
    let inputEventFired = false;
    let eventValue = '';
    
    el.addEventListener('mz-input', (event: Event) => {
      const customEvent = event as CustomEvent;
      inputEventFired = true;
      eventValue = customEvent.detail.value;
    });
    
    const input = el.shadowRoot?.querySelector('input');
    
    // Simulate user input
    input!.value = 'test input';
    input?.dispatchEvent(new Event('input'));
    
    expect(inputEventFired).to.be.true;
    expect(eventValue).to.equal('test input');
  });

  it('should emit change events', async () => {
    const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
    
    let changeEventFired = false;
    let eventValue = '';
    
    el.addEventListener('mz-change', (event: Event) => {
      const customEvent = event as CustomEvent;
      changeEventFired = true;
      eventValue = customEvent.detail.value;
    });
    
    const input = el.shadowRoot?.querySelector('input');
    
    // Simulate user input and change
    input!.value = 'changed value';
    input?.dispatchEvent(new Event('change'));
    
    expect(changeEventFired).to.be.true;
    expect(eventValue).to.equal('changed value');
  });

  it('should handle disabled state', async () => {
    const el = await fixture<MzInput>(html`<mz-input disabled></mz-input>`);
    
    expect(el.disabled).to.be.true;
    
    const input = el.shadowRoot?.querySelector('input');
    expect(input).to.exist;
    expect(input?.disabled).to.be.true;
    expect(input?.getAttribute('aria-disabled')).to.equal('true');
  });

  it('should handle required state', async () => {
    const el = await fixture<MzInput>(html`<mz-input required></mz-input>`);
    
    expect(el.required).to.be.true;
    
    const input = el.shadowRoot?.querySelector('input');
    expect(input).to.exist;
    expect(input?.required).to.be.true;
    expect(input?.getAttribute('aria-required')).to.equal('true');
  });

  it('should handle readonly state', async () => {
    const el = await fixture<MzInput>(html`<mz-input readonly></mz-input>`);
    
    expect(el.readonly).to.be.true;
    
    const input = el.shadowRoot?.querySelector('input');
    expect(input).to.exist;
    expect(input?.readOnly).to.be.true;
  });

  it('should render placeholder text', async () => {
    const el = await fixture<MzInput>(html`
      <mz-input placeholder="Enter your email"></mz-input>
    `);
    
    expect(el.placeholder).to.equal('Enter your email');
    
    const input = el.shadowRoot?.querySelector('input');
    expect(input).to.exist;
    expect(input?.placeholder).to.equal('Enter your email');
  });

  it('should render helper text', async () => {
    const el = await fixture<MzInput>(html`
      <mz-input helper-text="We'll never share your email"></mz-input>
    `);
    
    expect(el.helperText).to.equal("We'll never share your email");
    
    const helperText = el.shadowRoot?.querySelector('.helper-text');
    expect(helperText).to.exist;
    expect(helperText?.textContent?.trim()).to.equal("We'll never share your email");
  });

  it('should handle validation states', async () => {
    const el = await fixture<MzInput>(html`
      <mz-input type="email" value="invalid-email" required></mz-input>
    `);
    
    const input = el.shadowRoot?.querySelector('input');
    expect(input).to.exist;
    
    // Trigger validation
    input?.dispatchEvent(new Event('blur'));
    
    // Should have invalid state
    expect(input?.validity.valid).to.be.false;
  });

  it('should associate label with input via id', async () => {
    const el = await fixture<MzInput>(html`
      <mz-input label="Username"></mz-input>
    `);
    
    const label = el.shadowRoot?.querySelector('label');
    const input = el.shadowRoot?.querySelector('input');
    
    expect(label).to.exist;
    expect(input).to.exist;
    
    const forAttribute = label?.getAttribute('for');
    const inputId = input?.getAttribute('id');
    
    expect(forAttribute).to.equal(inputId);
    expect(inputId).to.match(/^mz-input-/);
  });

  it('should handle focus and blur events', async () => {
    const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
    
    let focusEventFired = false;
    let blurEventFired = false;
    
    el.addEventListener('mz-focus', () => {
      focusEventFired = true;
    });
    
    el.addEventListener('mz-blur', () => {
      blurEventFired = true;
    });
    
    const input = el.shadowRoot?.querySelector('input');
    
    // Simulate focus
    input?.dispatchEvent(new Event('focus'));
    expect(focusEventFired).to.be.true;
    
    // Simulate blur
    input?.dispatchEvent(new Event('blur'));
    expect(blurEventFired).to.be.true;
  });

  it('should support form integration', async () => {
    const form = await fixture(html`
      <form>
        <mz-input name="username" value="testuser"></mz-input>
      </form>
    `);
    
    const input = form.querySelector('mz-input') as MzInput;
    const nativeInput = input.shadowRoot?.querySelector('input');
    
    expect(input.name).to.equal('username');
    expect(nativeInput?.name).to.equal('username');
    expect(nativeInput?.value).to.equal('testuser');
  });

  it('should handle min and max attributes for number inputs', async () => {
    const el = await fixture<MzInput>(html`
      <mz-input type="number" min="0" max="100" value="50"></mz-input>
    `);
    
    expect(el.min).to.equal('0');
    expect(el.max).to.equal('100');
    
    const input = el.shadowRoot?.querySelector('input');
    expect(input).to.exist;
    expect(input?.min).to.equal('0');
    expect(input?.max).to.equal('100');
  });

  it('should update properties reactively', async () => {
    const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
    
    el.label = 'New Label';
    el.placeholder = 'New Placeholder';
    el.disabled = true;
    el.required = true;
    
    await el.updateComplete;
    
    expect(el.label).to.equal('New Label');
    expect(el.placeholder).to.equal('New Placeholder');
    expect(el.disabled).to.be.true;
    expect(el.required).to.be.true;
    
    const label = el.shadowRoot?.querySelector('label');
    const input = el.shadowRoot?.querySelector('input');
    
    expect(label?.textContent?.trim()).to.equal('New Label');
    expect(input?.placeholder).to.equal('New Placeholder');
    expect(input?.disabled).to.be.true;
    expect(input?.required).to.be.true;
  });

  it('should handle step attribute for number inputs', async () => {
    const el = await fixture<MzInput>(html`
      <mz-input type="number" step="0.1"></mz-input>
    `);
    
    expect(el.step).to.equal('0.1');
    
    const input = el.shadowRoot?.querySelector('input');
    expect(input).to.exist;
    expect(input?.step).to.equal('0.1');
  });
});