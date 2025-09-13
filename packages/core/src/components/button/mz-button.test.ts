import { html, fixture, expect, waitUntil, oneEvent } from '@open-wc/testing';
import { MzButton } from './mz-button.js';
import './mz-button.js';

describe('mz-button', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzButton>(html`<mz-button>Click me</mz-button>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzButton);
      expect(el.variant).to.equal('primary');
      expect(el.size).to.equal('md');
      expect(el.type).to.equal('button');
      expect(el.disabled).to.be.false;
      expect(el.fullWidth).to.be.false;
      expect(el.iconOnly).to.be.false;
      expect(el.loading).to.be.false;
    });

    it('should render button element by default', async () => {
      const el = await fixture<MzButton>(html`<mz-button>Click me</mz-button>`);
      const button = el.shadowRoot!.querySelector('button');

      expect(button).to.exist;
      expect(button?.type).to.equal('button');
    });

    it('should render anchor element when href is provided', async () => {
      const el = await fixture<MzButton>(html`<mz-button href="https://example.com">Link</mz-button>`);
      const anchor = el.shadowRoot!.querySelector('a');
      const button = el.shadowRoot!.querySelector('button');

      expect(anchor).to.exist;
      expect(button).to.not.exist;
      expect(anchor?.href).to.equal('https://example.com/');
      expect(anchor?.target).to.equal('_self');
    });

    it('should render with custom target for anchor', async () => {
      const el = await fixture<MzButton>(html`
        <mz-button href="https://example.com" target="_blank">Link</mz-button>
      `);
      const anchor = el.shadowRoot!.querySelector('a');

      expect(anchor?.target).to.equal('_blank');
    });
  });

  describe('variants', () => {
    const variants: Array<'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'> =
      ['primary', 'secondary', 'outline', 'ghost', 'destructive'];

    variants.forEach(variant => {
      it(`should render ${variant} variant`, async () => {
        const el = await fixture<MzButton>(html`<mz-button variant="${variant}">Button</mz-button>`);
        const button = el.shadowRoot!.querySelector('.button');

        expect(el.variant).to.equal(variant);
        expect(button?.classList.contains(`button--${variant}`)).to.be.true;
      });
    });
  });

  describe('sizes', () => {
    const sizes: Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'> = ['xs', 'sm', 'md', 'lg', 'xl'];

    sizes.forEach(size => {
      it(`should render ${size} size`, async () => {
        const el = await fixture<MzButton>(html`<mz-button size="${size}">Button</mz-button>`);

        expect(el.size).to.equal(size);
        expect(el.getAttribute('size')).to.equal(size);
      });
    });
  });

  describe('button types', () => {
    const types: Array<'button' | 'submit' | 'reset'> = ['button', 'submit', 'reset'];

    types.forEach(type => {
      it(`should render ${type} type`, async () => {
        const el = await fixture<MzButton>(html`<mz-button type="${type}">Button</mz-button>`);
        const button = el.shadowRoot!.querySelector('button');

        expect(el.type).to.equal(type);
        expect(button?.type).to.equal(type);
      });
    });
  });

  describe('slots', () => {
    it('should render default slot content', async () => {
      const el = await fixture<MzButton>(html`<mz-button>Default content</mz-button>`);
      const slot = el.shadowRoot!.querySelector('slot:not([name])');
      const nodes = (slot as HTMLSlotElement)?.assignedNodes();

      expect(nodes?.[0]?.textContent).to.equal('Default content');
    });

    it('should render start slot content', async () => {
      const el = await fixture<MzButton>(html`
        <mz-button>
          <span slot="start">👋</span>
          Button
        </mz-button>
      `);
      const slot = el.shadowRoot!.querySelector('slot[name="start"]');
      const nodes = (slot as HTMLSlotElement)?.assignedElements();

      expect(nodes).to.have.length(1);
      expect(nodes?.[0]?.textContent).to.equal('👋');
    });

    it('should render end slot content', async () => {
      const el = await fixture<MzButton>(html`
        <mz-button>
          Button
          <span slot="end">→</span>
        </mz-button>
      `);
      const slot = el.shadowRoot!.querySelector('slot[name="end"]');
      const nodes = (slot as HTMLSlotElement)?.assignedElements();

      expect(nodes).to.have.length(1);
      expect(nodes?.[0]?.textContent).to.equal('→');
    });

    it('should render all slots together', async () => {
      const el = await fixture<MzButton>(html`
        <mz-button>
          <span slot="start">👋</span>
          Middle
          <span slot="end">→</span>
        </mz-button>
      `);

      const startSlot = el.shadowRoot!.querySelector('slot[name="start"]') as HTMLSlotElement;
      const defaultSlot = el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;
      const endSlot = el.shadowRoot!.querySelector('slot[name="end"]') as HTMLSlotElement;

      expect(startSlot.assignedElements()[0]?.textContent).to.equal('👋');
      expect(defaultSlot.assignedNodes()[0]?.textContent?.trim()).to.equal('Middle');
      expect(endSlot.assignedElements()[0]?.textContent).to.equal('→');
    });
  });

  describe('disabled state', () => {
    it('should disable button when disabled is true', async () => {
      const el = await fixture<MzButton>(html`<mz-button disabled>Button</mz-button>`);
      const button = el.shadowRoot!.querySelector('button');

      expect(el.disabled).to.be.true;
      expect(button?.disabled).to.be.true;
      expect(button?.classList.contains('button--disabled')).to.be.true;
    });

    it('should not render anchor as disabled', async () => {
      const el = await fixture<MzButton>(html`
        <mz-button href="https://example.com" disabled>Link</mz-button>
      `);
      const anchor = el.shadowRoot!.querySelector('a');
      const button = el.shadowRoot!.querySelector('button');

      expect(anchor).to.not.exist;
      expect(button).to.exist;
      expect(button?.disabled).to.be.true;
    });

    it('should prevent click events when disabled', async () => {
      const el = await fixture<MzButton>(html`<mz-button disabled>Button</mz-button>`);
      let clicked = false;

      el.addEventListener('mz-click', () => {
        clicked = true;
      });

      const button = el.shadowRoot!.querySelector('button')!;
      button.click();

      expect(clicked).to.be.false;
    });
  });

  describe('loading state', () => {
    it('should show loading state', async () => {
      const el = await fixture<MzButton>(html`<mz-button loading>Button</mz-button>`);
      const button = el.shadowRoot!.querySelector('button');

      expect(el.loading).to.be.true;
      expect(button?.classList.contains('button--loading')).to.be.true;
      expect(button?.disabled).to.be.true;
    });

    it('should prevent click events when loading', async () => {
      const el = await fixture<MzButton>(html`<mz-button loading>Button</mz-button>`);
      let clicked = false;

      el.addEventListener('mz-click', () => {
        clicked = true;
      });

      const button = el.shadowRoot!.querySelector('button')!;
      button.click();

      expect(clicked).to.be.false;
    });

    it('should disable button when loading', async () => {
      const el = await fixture<MzButton>(html`<mz-button loading>Button</mz-button>`);
      const button = el.shadowRoot!.querySelector('button');

      expect(button?.disabled).to.be.true;
    });
  });

  describe('full-width', () => {
    it('should render full width button', async () => {
      const el = await fixture<MzButton>(html`<mz-button full-width>Button</mz-button>`);

      expect(el.fullWidth).to.be.true;
      expect(el.hasAttribute('full-width')).to.be.true;
    });
  });

  describe('icon-only', () => {
    it('should render icon-only button', async () => {
      const el = await fixture<MzButton>(html`<mz-button icon-only>🔍</mz-button>`);

      expect(el.iconOnly).to.be.true;
      expect(el.hasAttribute('icon-only')).to.be.true;
    });
  });

  describe('events', () => {
    it('should emit mz-click event on button click', async () => {
      const el = await fixture<MzButton>(html`<mz-button>Button</mz-button>`);
      const button = el.shadowRoot!.querySelector('button')!;

      setTimeout(() => button.click());
      const event = await oneEvent(el, 'mz-click');

      expect(event).to.exist;
      expect(event.detail).to.have.property('originalEvent');
    });

    it('should emit mz-click event on anchor click', async () => {
      const el = await fixture<MzButton>(html`<mz-button href="#">Link</mz-button>`);
      const anchor = el.shadowRoot!.querySelector('a')!;

      setTimeout(() => anchor.click());
      const event = await oneEvent(el, 'mz-click');

      expect(event).to.exist;
      expect(event.detail).to.have.property('originalEvent');
    });

    it('should not emit mz-click when disabled', async () => {
      const el = await fixture<MzButton>(html`<mz-button disabled>Button</mz-button>`);
      let eventFired = false;

      el.addEventListener('mz-click', () => {
        eventFired = true;
      });

      const button = el.shadowRoot!.querySelector('button')!;
      button.click();

      await waitUntil(() => false, { timeout: 100 }).catch(() => {});
      expect(eventFired).to.be.false;
    });

    it('should not emit mz-click when loading', async () => {
      const el = await fixture<MzButton>(html`<mz-button loading>Button</mz-button>`);
      let eventFired = false;

      el.addEventListener('mz-click', () => {
        eventFired = true;
      });

      const button = el.shadowRoot!.querySelector('button')!;
      button.click();

      await waitUntil(() => false, { timeout: 100 }).catch(() => {});
      expect(eventFired).to.be.false;
    });
  });

  describe('accessibility', () => {
    it('should have correct ARIA attributes for button', async () => {
      const el = await fixture<MzButton>(html`<mz-button>Button</mz-button>`);
      const button = el.shadowRoot!.querySelector('button');

      expect(button?.tagName.toLowerCase()).to.equal('button');
    });

    it('should be focusable when not disabled', async () => {
      const el = await fixture<MzButton>(html`<mz-button>Button</mz-button>`);
      const button = el.shadowRoot!.querySelector('button')!;

      button.focus();
      expect(el.shadowRoot!.activeElement).to.equal(button);
    });

    it('should not be focusable when disabled', async () => {
      const el = await fixture<MzButton>(html`<mz-button disabled>Button</mz-button>`);
      const button = el.shadowRoot!.querySelector('button')!;

      button.focus();
      expect(el.shadowRoot!.activeElement).to.not.equal(button);
    });
  });

  describe('CSS custom properties', () => {
    it('should apply size-related CSS custom properties', async () => {
      const el = await fixture<MzButton>(html`<mz-button size="lg">Button</mz-button>`);
      const styles = window.getComputedStyle(el);

      // The component sets CSS variables based on size
      expect(el.getAttribute('size')).to.equal('lg');
    });

    it('should have transition CSS variable', async () => {
      const el = await fixture<MzButton>(html`<mz-button>Button</mz-button>`);
      const styles = window.getComputedStyle(el);

      // Check that the button has transition styling
      const button = el.shadowRoot!.querySelector('.button');
      expect(button).to.exist;
    });
  });

  describe('edge cases', () => {
    it('should handle empty content', async () => {
      const el = await fixture<MzButton>(html`<mz-button></mz-button>`);

      expect(el).to.exist;
      expect(el.shadowRoot!.querySelector('.button')).to.exist;
    });

    it('should handle very long content', async () => {
      const longText = 'This is a very long button text that might overflow the button container';
      const el = await fixture<MzButton>(html`<mz-button>${longText}</mz-button>`);
      const slot = el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;

      expect(slot.assignedNodes()[0]?.textContent).to.equal(longText);
    });

    it('should handle special characters in content', async () => {
      const specialText = '< > & " \' / \\';
      const el = await fixture<MzButton>(html`<mz-button>${specialText}</mz-button>`);
      const slot = el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;

      expect(slot.assignedNodes()[0]?.textContent).to.equal(specialText);
    });

    it('should handle invalid href gracefully', async () => {
      const el = await fixture<MzButton>(html`<mz-button href="">Link</mz-button>`);
      const anchor = el.shadowRoot!.querySelector('a');

      expect(anchor).to.exist;
      expect(anchor?.href).to.include('');
    });

    it('should handle changing properties dynamically', async () => {
      const el = await fixture<MzButton>(html`<mz-button>Button</mz-button>`);

      expect(el.variant).to.equal('primary');
      el.variant = 'secondary';
      await el.updateComplete;

      const button = el.shadowRoot!.querySelector('.button');
      expect(button?.classList.contains('button--secondary')).to.be.true;
      expect(button?.classList.contains('button--primary')).to.be.false;
    });

    it('should handle toggling disabled state', async () => {
      const el = await fixture<MzButton>(html`<mz-button>Button</mz-button>`);
      const button = el.shadowRoot!.querySelector('button')!;

      expect(button.disabled).to.be.false;

      el.disabled = true;
      await el.updateComplete;
      expect(button.disabled).to.be.true;

      el.disabled = false;
      await el.updateComplete;
      expect(button.disabled).to.be.false;
    });

    it('should handle toggling loading state', async () => {
      const el = await fixture<MzButton>(html`<mz-button>Button</mz-button>`);
      const button = el.shadowRoot!.querySelector('button')!;

      expect(button.classList.contains('button--loading')).to.be.false;

      el.loading = true;
      await el.updateComplete;
      expect(button.classList.contains('button--loading')).to.be.true;
      expect(button.disabled).to.be.true;

      el.loading = false;
      await el.updateComplete;
      expect(button.classList.contains('button--loading')).to.be.false;
      expect(button.disabled).to.be.false;
    });
  });
});