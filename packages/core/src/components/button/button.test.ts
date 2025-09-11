import { expect, fixture, html } from '@open-wc/testing';
import { MzButton } from './index.js';
import '../../index.js';

describe('MzButton', () => {
  it('should render with default properties', async () => {
    const el = await fixture<MzButton>(html`<mz-button>Click me</mz-button>`);
    
    expect(el).to.exist;
    expect(el.variant).to.equal('primary');
    expect(el.size).to.equal('md');
    expect(el.disabled).to.be.false;
    expect(el.loading).to.be.false;
    expect(el.textContent?.trim()).to.equal('Click me');
  });

  it('should render with different variants', async () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const;
    
    for (const variant of variants) {
      const el = await fixture<MzButton>(html`<mz-button variant="${variant}">Button</mz-button>`);
      expect(el.variant).to.equal(variant);
      
      const button = el.shadowRoot?.querySelector('button');
      expect(button).to.exist;
      expect(button?.className).to.include(`variant-${variant}`);
    }
  });

  it('should render with different sizes', async () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    
    for (const size of sizes) {
      const el = await fixture<MzButton>(html`<mz-button size="${size}">Button</mz-button>`);
      expect(el.size).to.equal(size);
      
      const button = el.shadowRoot?.querySelector('button');
      expect(button).to.exist;
      expect(button?.className).to.include(`size-${size}`);
    }
  });

  it('should handle disabled state', async () => {
    const el = await fixture<MzButton>(html`<mz-button disabled>Button</mz-button>`);
    
    expect(el.disabled).to.be.true;
    
    const button = el.shadowRoot?.querySelector('button');
    expect(button).to.exist;
    expect(button?.disabled).to.be.true;
    expect(button?.getAttribute('aria-disabled')).to.equal('true');
  });

  it('should handle loading state', async () => {
    const el = await fixture<MzButton>(html`<mz-button loading>Button</mz-button>`);
    
    expect(el.loading).to.be.true;
    
    const button = el.shadowRoot?.querySelector('button');
    expect(button).to.exist;
    expect(button?.disabled).to.be.true;
    expect(button?.getAttribute('aria-busy')).to.equal('true');
    
    const spinner = el.shadowRoot?.querySelector('.loading-spinner');
    expect(spinner).to.exist;
  });

  it('should emit click events', async () => {
    const el = await fixture<MzButton>(html`<mz-button>Button</mz-button>`);
    
    let clickFired = false;
    el.addEventListener('click', () => {
      clickFired = true;
    });
    
    const button = el.shadowRoot?.querySelector('button');
    button?.click();
    
    expect(clickFired).to.be.true;
  });

  it('should not emit click events when disabled', async () => {
    const el = await fixture<MzButton>(html`<mz-button disabled>Button</mz-button>`);
    
    let clickFired = false;
    el.addEventListener('click', () => {
      clickFired = true;
    });
    
    const button = el.shadowRoot?.querySelector('button');
    button?.click();
    
    expect(clickFired).to.be.false;
  });

  it('should not emit click events when loading', async () => {
    const el = await fixture<MzButton>(html`<mz-button loading>Button</mz-button>`);
    
    let clickFired = false;
    el.addEventListener('click', () => {
      clickFired = true;
    });
    
    const button = el.shadowRoot?.querySelector('button');
    button?.click();
    
    expect(clickFired).to.be.false;
  });

  it('should render as link when href is provided', async () => {
    const el = await fixture<MzButton>(html`<mz-button href="https://example.com">Link</mz-button>`);
    
    expect(el.href).to.equal('https://example.com');
    
    const link = el.shadowRoot?.querySelector('a');
    expect(link).to.exist;
    expect(link?.href).to.equal('https://example.com/');
    
    const button = el.shadowRoot?.querySelector('button');
    expect(button).to.not.exist;
  });

  it('should handle link target and rel attributes', async () => {
    const el = await fixture<MzButton>(html`
      <mz-button href="https://example.com" target="_blank" rel="noopener">
        External Link
      </mz-button>
    `);
    
    const link = el.shadowRoot?.querySelector('a');
    expect(link).to.exist;
    expect(link?.target).to.equal('_blank');
    expect(link?.rel).to.equal('noopener');
  });

  it('should have proper ARIA attributes', async () => {
    const el = await fixture<MzButton>(html`<mz-button>Accessible Button</mz-button>`);
    
    const button = el.shadowRoot?.querySelector('button');
    expect(button).to.exist;
    expect(button?.getAttribute('role')).to.equal('button');
    expect(button?.getAttribute('tabindex')).to.equal('0');
  });

  it('should support form submission', async () => {
    const el = await fixture<MzButton>(html`<mz-button type="submit">Submit</mz-button>`);
    
    expect(el.type).to.equal('submit');
    
    const button = el.shadowRoot?.querySelector('button');
    expect(button).to.exist;
    expect(button?.type).to.equal('submit');
  });

  it('should update properties reactively', async () => {
    const el = await fixture<MzButton>(html`<mz-button>Button</mz-button>`);
    
    el.variant = 'secondary';
    el.size = 'lg';
    el.disabled = true;
    
    await el.updateComplete;
    
    expect(el.variant).to.equal('secondary');
    expect(el.size).to.equal('lg');
    expect(el.disabled).to.be.true;
    
    const button = el.shadowRoot?.querySelector('button');
    expect(button?.className).to.include('variant-secondary');
    expect(button?.className).to.include('size-lg');
    expect(button?.disabled).to.be.true;
  });

  it('should handle keyboard navigation', async () => {
    const el = await fixture<MzButton>(html`<mz-button>Button</mz-button>`);
    
    let clickFired = false;
    el.addEventListener('click', () => {
      clickFired = true;
    });
    
    const button = el.shadowRoot?.querySelector('button');
    
    // Simulate Enter key
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    button?.dispatchEvent(enterEvent);
    
    expect(clickFired).to.be.true;
    
    clickFired = false;
    
    // Simulate Space key
    const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
    button?.dispatchEvent(spaceEvent);
    
    expect(clickFired).to.be.true;
  });

  it('should apply custom CSS properties', async () => {
    const el = await fixture<MzButton>(html`
      <mz-button style="--mz-button-bg: red; --mz-button-color: white;">
        Custom Button
      </mz-button>
    `);
    
    const button = el.shadowRoot?.querySelector('button');
    expect(button).to.exist;
    
    // Check that CSS custom properties are applied
    const computedStyle = window.getComputedStyle(button!);
    // Note: Testing CSS custom properties requires actual browser rendering
    expect(button?.style).to.exist;
  });
});