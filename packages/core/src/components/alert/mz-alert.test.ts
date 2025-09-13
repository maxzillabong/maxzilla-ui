import { html, fixture, expect } from '@open-wc/testing';
import { MzAlert } from './mz-alert.js';
import './mz-alert.js';

describe('mz-alert', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzAlert>(html`<mz-alert></mz-alert>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzAlert);
      expect(el.variant).to.equal('info');
      expect(el.closable).to.be.false;
      expect(el.icon).to.be.true;
      expect(el.open).to.be.true;
    });

    it('should render alert container', async () => {
      const el = await fixture<MzAlert>(html`<mz-alert></mz-alert>`);
      const alert = el.shadowRoot!.querySelector('.alert');

      expect(alert).to.exist;
      expect(alert?.classList.contains('alert')).to.be.true;
    });

    it('should render slot content', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert>Alert message content</mz-alert>
      `);

      const slot = el.shadowRoot!.querySelector('slot:not([name])');
      expect(slot).to.exist;

      const nodes = (slot as HTMLSlotElement)?.assignedNodes();
      expect(nodes?.[0]?.textContent).to.equal('Alert message content');
    });

    it('should render title slot', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert>
          <span slot="title">Alert Title</span>
          Alert message
        </mz-alert>
      `);

      const titleSlot = el.shadowRoot!.querySelector('slot[name="title"]');
      expect(titleSlot).to.exist;

      const nodes = (titleSlot as HTMLSlotElement)?.assignedElements();
      expect(nodes?.[0]?.textContent).to.equal('Alert Title');
    });
  });

  describe('variants', () => {
    const variants = ['info', 'success', 'warning', 'error'] as const;

    variants.forEach(variant => {
      it(`should render ${variant} variant`, async () => {
        const el = await fixture<MzAlert>(html`
          <mz-alert variant="${variant}">Alert message</mz-alert>
        `);

        expect(el.variant).to.equal(variant);
        const alert = el.shadowRoot!.querySelector('.alert');
        expect(alert?.classList.contains(`alert--${variant}`)).to.be.true;
      });
    });

    it('should default to info variant', async () => {
      const el = await fixture<MzAlert>(html`<mz-alert>Message</mz-alert>`);

      expect(el.variant).to.equal('info');
      const alert = el.shadowRoot!.querySelector('.alert');
      expect(alert?.classList.contains('alert--info')).to.be.true;
    });
  });

  describe('icon', () => {
    it('should show icon by default', async () => {
      const el = await fixture<MzAlert>(html`<mz-alert>Message</mz-alert>`);

      expect(el.icon).to.be.true;
      const iconContainer = el.shadowRoot!.querySelector('.alert-icon');
      expect(iconContainer).to.exist;
    });

    it('should hide icon when icon is false', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert .icon=${false}>Message</mz-alert>
      `);

      expect(el.icon).to.be.false;
      const iconContainer = el.shadowRoot!.querySelector('.alert-icon');
      expect(iconContainer).to.not.exist;
    });

    it('should render custom icon slot', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert>
          <svg slot="icon" width="16" height="16">
            <circle cx="8" cy="8" r="4" />
          </svg>
          Custom icon message
        </mz-alert>
      `);

      const iconSlot = el.shadowRoot!.querySelector('slot[name="icon"]');
      expect(iconSlot).to.exist;

      const nodes = (iconSlot as HTMLSlotElement)?.assignedElements();
      expect(nodes?.[0]?.tagName).to.equal('SVG');
    });

    it('should show default icon when no custom icon provided', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert variant="success">Success message</mz-alert>
      `);

      const defaultIcon = el.shadowRoot!.querySelector('.alert-icon-default');
      expect(defaultIcon).to.exist;
    });
  });

  describe('closable', () => {
    it('should not show close button by default', async () => {
      const el = await fixture<MzAlert>(html`<mz-alert>Message</mz-alert>`);

      expect(el.closable).to.be.false;
      const closeButton = el.shadowRoot!.querySelector('.alert-close');
      expect(closeButton).to.not.exist;
    });

    it('should show close button when closable is true', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert closable>Closable message</mz-alert>
      `);

      expect(el.closable).to.be.true;
      const closeButton = el.shadowRoot!.querySelector('.alert-close');
      expect(closeButton).to.exist;
    });

    it('should close alert when close button is clicked', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert closable>Closable message</mz-alert>
      `);

      const closeButton = el.shadowRoot!.querySelector('.alert-close') as HTMLElement;
      expect(el.open).to.be.true;

      closeButton.click();
      await el.updateComplete;

      expect(el.open).to.be.false;
    });

    it('should emit close event when closed', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert closable>Message</mz-alert>
      `);

      let eventFired = false;
      el.addEventListener('mz-close', () => {
        eventFired = true;
      });

      const closeButton = el.shadowRoot!.querySelector('.alert-close') as HTMLElement;
      closeButton.click();
      await el.updateComplete;

      expect(eventFired).to.be.true;
    });

    it('should prevent close if event is cancelled', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert closable>Message</mz-alert>
      `);

      el.addEventListener('mz-close', (e) => {
        e.preventDefault();
      });

      const closeButton = el.shadowRoot!.querySelector('.alert-close') as HTMLElement;
      closeButton.click();
      await el.updateComplete;

      expect(el.open).to.be.true;
    });
  });

  describe('open state', () => {
    it('should be open by default', async () => {
      const el = await fixture<MzAlert>(html`<mz-alert>Message</mz-alert>`);

      expect(el.open).to.be.true;
      expect(el.hasAttribute('open')).to.be.true;
    });

    it('should be hidden when open is false', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert .open=${false}>Hidden message</mz-alert>
      `);

      expect(el.open).to.be.false;
      expect(el.hasAttribute('open')).to.be.false;

      const alert = el.shadowRoot!.querySelector('.alert');
      expect(alert?.classList.contains('alert--hidden')).to.be.true;
    });

    it('should toggle open state programmatically', async () => {
      const el = await fixture<MzAlert>(html`<mz-alert>Message</mz-alert>`);

      expect(el.open).to.be.true;

      el.open = false;
      await el.updateComplete;
      expect(el.hasAttribute('open')).to.be.false;

      el.open = true;
      await el.updateComplete;
      expect(el.hasAttribute('open')).to.be.true;
    });
  });

  describe('animation', () => {
    it('should have animation class when opening', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert .open=${false}>Message</mz-alert>
      `);

      el.open = true;
      await el.updateComplete;

      const alert = el.shadowRoot!.querySelector('.alert');
      expect(alert?.classList.contains('alert--opening')).to.be.true;
    });

    it('should have animation class when closing', async () => {
      const el = await fixture<MzAlert>(html`<mz-alert>Message</mz-alert>`);

      el.open = false;
      await el.updateComplete;

      const alert = el.shadowRoot!.querySelector('.alert');
      expect(alert?.classList.contains('alert--closing')).to.be.true;
    });
  });

  describe('accessibility', () => {
    it('should have proper ARIA attributes', async () => {
      const el = await fixture<MzAlert>(html`<mz-alert>Message</mz-alert>`);

      const alert = el.shadowRoot!.querySelector('.alert');
      expect(alert?.getAttribute('role')).to.equal('alert');
      expect(alert?.getAttribute('aria-live')).to.equal('polite');
    });

    it('should have assertive aria-live for error alerts', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert variant="error">Error message</mz-alert>
      `);

      const alert = el.shadowRoot!.querySelector('.alert');
      expect(alert?.getAttribute('aria-live')).to.equal('assertive');
    });

    it('should have proper close button attributes', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert closable>Closable message</mz-alert>
      `);

      const closeButton = el.shadowRoot!.querySelector('.alert-close');
      expect(closeButton?.getAttribute('aria-label')).to.include('Close');
      expect(closeButton?.getAttribute('type')).to.equal('button');
    });
  });

  describe('CSS custom properties', () => {
    it('should support custom CSS properties', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert style="--alert-padding: 20px;">Message</mz-alert>
      `);

      expect(el.style.getPropertyValue('--alert-padding')).to.equal('20px');
    });
  });

  describe('methods', () => {
    it('should have show method', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert .open=${false}>Message</mz-alert>
      `);

      expect(el.open).to.be.false;

      el.show();
      await el.updateComplete;

      expect(el.open).to.be.true;
    });

    it('should have hide method', async () => {
      const el = await fixture<MzAlert>(html`<mz-alert>Message</mz-alert>`);

      expect(el.open).to.be.true;

      el.hide();
      await el.updateComplete;

      expect(el.open).to.be.false;
    });

    it('should have toggle method', async () => {
      const el = await fixture<MzAlert>(html`<mz-alert>Message</mz-alert>`);

      expect(el.open).to.be.true;

      el.toggle();
      await el.updateComplete;
      expect(el.open).to.be.false;

      el.toggle();
      await el.updateComplete;
      expect(el.open).to.be.true;
    });
  });

  describe('edge cases', () => {
    it('should handle empty content', async () => {
      const el = await fixture<MzAlert>(html`<mz-alert></mz-alert>`);

      expect(el).to.exist;
      const alert = el.shadowRoot!.querySelector('.alert');
      expect(alert).to.exist;
    });

    it('should handle very long content', async () => {
      const longContent = 'Very long alert message content '.repeat(20);
      const el = await fixture<MzAlert>(html`<mz-alert>${longContent}</mz-alert>`);

      const slot = el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;
      const nodes = slot.assignedNodes();
      expect(nodes[0]?.textContent).to.equal(longContent);
    });

    it('should handle HTML content', async () => {
      const el = await fixture<MzAlert>(html`
        <mz-alert>
          <strong>Important:</strong> This is a message with <em>formatting</em>.
        </mz-alert>
      `);

      const slot = el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;
      const nodes = slot.assignedElements();
      expect(nodes.length).to.be.greaterThan(0);
      expect(nodes[0].tagName).to.equal('STRONG');
    });

    it('should handle rapid open/close cycles', async () => {
      const el = await fixture<MzAlert>(html`<mz-alert>Message</mz-alert>`);

      // Rapidly toggle state
      for (let i = 0; i < 5; i++) {
        el.open = false;
        el.open = true;
        await el.updateComplete;
      }

      expect(el.open).to.be.true;
    });

    it('should handle dynamic property changes', async () => {
      const el = await fixture<MzAlert>(html`<mz-alert>Message</mz-alert>`);

      el.variant = 'error';
      el.closable = true;
      el.icon = false;
      await el.updateComplete;

      const alert = el.shadowRoot!.querySelector('.alert');
      const closeButton = el.shadowRoot!.querySelector('.alert-close');
      const iconContainer = el.shadowRoot!.querySelector('.alert-icon');

      expect(alert?.classList.contains('alert--error')).to.be.true;
      expect(closeButton).to.exist;
      expect(iconContainer).to.not.exist;
    });
  });
});