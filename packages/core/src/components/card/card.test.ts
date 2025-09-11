import { expect, fixture, html } from '@open-wc/testing';
import { MzCard } from './index.js';
import '../../index.js';

describe('MzCard', () => {
  it('should render with default properties', async () => {
    const el = await fixture<MzCard>(html`
      <mz-card>
        <p>Card content</p>
      </mz-card>
    `);
    
    expect(el).to.exist;
    expect(el.elevation).to.equal('md');
    expect(el.clickable).to.be.false;
    expect(el.textContent?.trim()).to.equal('Card content');
  });

  it('should render with different elevations', async () => {
    const elevations = ['none', 'sm', 'md', 'lg', 'xl'] as const;
    
    for (const elevation of elevations) {
      const el = await fixture<MzCard>(html`
        <mz-card elevation="${elevation}">Content</mz-card>
      `);
      
      expect(el.elevation).to.equal(elevation);
      
      const card = el.shadowRoot?.querySelector('.card');
      expect(card).to.exist;
      expect(card?.className).to.include(`elevation-${elevation}`);
    }
  });

  it('should handle clickable state', async () => {
    const el = await fixture<MzCard>(html`
      <mz-card clickable>Clickable card</mz-card>
    `);
    
    expect(el.clickable).to.be.true;
    
    const card = el.shadowRoot?.querySelector('.card');
    expect(card).to.exist;
    expect(card?.className).to.include('clickable');
    expect(card?.getAttribute('tabindex')).to.equal('0');
    expect(card?.getAttribute('role')).to.equal('button');
  });

  it('should emit click events when clickable', async () => {
    const el = await fixture<MzCard>(html`
      <mz-card clickable>Clickable card</mz-card>
    `);
    
    let clickFired = false;
    el.addEventListener('click', () => {
      clickFired = true;
    });
    
    const card = el.shadowRoot?.querySelector('.card');
    card?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    
    expect(clickFired).to.be.true;
  });

  it('should not emit click events when not clickable', async () => {
    const el = await fixture<MzCard>(html`
      <mz-card>Non-clickable card</mz-card>
    `);
    
    let clickFired = false;
    el.addEventListener('click', () => {
      clickFired = true;
    });
    
    const card = el.shadowRoot?.querySelector('.card');
    card?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    
    expect(clickFired).to.be.false;
  });

  it('should render slotted content correctly', async () => {
    const el = await fixture<MzCard>(html`
      <mz-card>
        <h2 slot="header">Card Header</h2>
        <p>Main content</p>
        <button slot="actions">Action</button>
      </mz-card>
    `);
    
    const headerSlot = el.shadowRoot?.querySelector('slot[name="header"]');
    const defaultSlot = el.shadowRoot?.querySelector('slot:not([name])');
    const actionsSlot = el.shadowRoot?.querySelector('slot[name="actions"]');
    
    expect(headerSlot).to.exist;
    expect(defaultSlot).to.exist;
    expect(actionsSlot).to.exist;
    
    // Check that slotted content is present
    const header = el.querySelector('[slot="header"]');
    const actions = el.querySelector('[slot="actions"]');
    
    expect(header?.textContent).to.equal('Card Header');
    expect(actions?.textContent).to.equal('Action');
  });

  it('should handle keyboard navigation when clickable', async () => {
    const el = await fixture<MzCard>(html`
      <mz-card clickable>Keyboard navigable card</mz-card>
    `);
    
    let clickFired = false;
    el.addEventListener('click', () => {
      clickFired = true;
    });
    
    const card = el.shadowRoot?.querySelector('.card');
    
    // Simulate Enter key
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    card?.dispatchEvent(enterEvent);
    
    expect(clickFired).to.be.true;
    
    clickFired = false;
    
    // Simulate Space key
    const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
    card?.dispatchEvent(spaceEvent);
    
    expect(clickFired).to.be.true;
  });

  it('should update properties reactively', async () => {
    const el = await fixture<MzCard>(html`<mz-card>Card</mz-card>`);
    
    el.elevation = 'lg';
    el.clickable = true;
    
    await el.updateComplete;
    
    expect(el.elevation).to.equal('lg');
    expect(el.clickable).to.be.true;
    
    const card = el.shadowRoot?.querySelector('.card');
    expect(card?.className).to.include('elevation-lg');
    expect(card?.className).to.include('clickable');
  });

  it('should have proper ARIA attributes when clickable', async () => {
    const el = await fixture<MzCard>(html`
      <mz-card clickable>Accessible card</mz-card>
    `);
    
    const card = el.shadowRoot?.querySelector('.card');
    expect(card).to.exist;
    expect(card?.getAttribute('role')).to.equal('button');
    expect(card?.getAttribute('tabindex')).to.equal('0');
    expect(card?.getAttribute('aria-pressed')).to.equal('false');
  });

  it('should apply hover effects when clickable', async () => {
    const el = await fixture<MzCard>(html`
      <mz-card clickable>Hoverable card</mz-card>
    `);
    
    const card = el.shadowRoot?.querySelector('.card');
    expect(card).to.exist;
    
    // Simulate mouse enter
    card?.dispatchEvent(new MouseEvent('mouseenter'));
    
    // Check that hover state is applied (this would need actual CSS testing)
    expect(card?.className).to.include('clickable');
    
    // Simulate mouse leave
    card?.dispatchEvent(new MouseEvent('mouseleave'));
  });

  it('should handle focus and blur events when clickable', async () => {
    const el = await fixture<MzCard>(html`
      <mz-card clickable>Focusable card</mz-card>
    `);
    
    const card = el.shadowRoot?.querySelector('.card');
    expect(card).to.exist;
    
    // Focus the card
    card?.focus();
    expect(document.activeElement).to.equal(el);
    
    // Blur the card
    card?.blur();
  });

  it('should render empty slots gracefully', async () => {
    const el = await fixture<MzCard>(html`<mz-card></mz-card>`);
    
    const slots = el.shadowRoot?.querySelectorAll('slot');
    expect(slots).to.have.length.greaterThan(0);
    
    // Should not crash with empty slots
    expect(el).to.exist;
  });
});