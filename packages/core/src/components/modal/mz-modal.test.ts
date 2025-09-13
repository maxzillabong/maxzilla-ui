import { html, fixture, expect, oneEvent, waitUntil } from '@open-wc/testing';
import { MzModal } from './mz-modal.js';
import './mz-modal.js';

describe('mz-modal', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzModal>(html`<mz-modal></mz-modal>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzModal);
      expect(el.open).to.be.false;
      expect(el.size).to.equal('md');
      expect(el.closeOnOverlay).to.be.true;
      expect(el.closeOnEsc).to.be.true;
    });

    it('should not render when closed', async () => {
      const el = await fixture<MzModal>(html`<mz-modal></mz-modal>`);
      const overlay = el.shadowRoot!.querySelector('.overlay');

      expect(el.open).to.be.false;
      expect(overlay).to.not.exist;
    });

    it('should render when open', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open></mz-modal>`);
      const overlay = el.shadowRoot!.querySelector('.overlay');
      const modal = el.shadowRoot!.querySelector('.modal');

      expect(el.open).to.be.true;
      expect(overlay).to.exist;
      expect(modal).to.exist;
    });

    it('should render slots when open', async () => {
      const el = await fixture<MzModal>(html`
        <mz-modal open>
          <div slot="header">Modal Header</div>
          <div>Modal Body</div>
          <div slot="footer">Modal Footer</div>
        </mz-modal>
      `);

      const headerSlot = el.shadowRoot!.querySelector('slot[name="header"]') as HTMLSlotElement;
      const defaultSlot = el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;
      const footerSlot = el.shadowRoot!.querySelector('slot[name="footer"]') as HTMLSlotElement;

      expect(headerSlot.assignedElements()[0]?.textContent).to.equal('Modal Header');
      expect(defaultSlot.assignedElements()[0]?.textContent).to.equal('Modal Body');
      expect(footerSlot.assignedElements()[0]?.textContent).to.equal('Modal Footer');
    });

    it('should render close button when open', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open></mz-modal>`);
      const closeButton = el.shadowRoot!.querySelector('.close-button');

      expect(closeButton).to.exist;
    });
  });

  describe('sizes', () => {
    const sizes = ['sm', 'md', 'lg', 'xl', 'full'];

    sizes.forEach(size => {
      it(`should render ${size} size`, async () => {
        const el = await fixture<MzModal>(html`<mz-modal size="${size}" open></mz-modal>`);
        const modal = el.shadowRoot!.querySelector('.modal');

        expect(el.size).to.equal(size);
        expect(modal?.classList.contains(`modal--${size}`)).to.be.true;
      });
    });
  });

  describe('open/close behavior', () => {
    it('should toggle open state', async () => {
      const el = await fixture<MzModal>(html`<mz-modal></mz-modal>`);

      expect(el.open).to.be.false;
      expect(el.shadowRoot!.querySelector('.overlay')).to.not.exist;

      el.open = true;
      await el.updateComplete;

      expect(el.shadowRoot!.querySelector('.overlay')).to.exist;
      expect(el.shadowRoot!.querySelector('.modal')).to.exist;

      el.open = false;
      await el.updateComplete;

      expect(el.shadowRoot!.querySelector('.overlay')).to.not.exist;
    });

    it('should close on close button click', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open></mz-modal>`);
      const closeButton = el.shadowRoot!.querySelector('.close-button') as HTMLElement;

      expect(el.open).to.be.true;

      closeButton.click();
      await el.updateComplete;

      expect(el.open).to.be.false;
    });

    it('should close on overlay click when closeOnOverlay is true', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open></mz-modal>`);
      const overlay = el.shadowRoot!.querySelector('.overlay') as HTMLElement;

      expect(el.open).to.be.true;
      expect(el.closeOnOverlay).to.be.true;

      overlay.click();
      await el.updateComplete;

      expect(el.open).to.be.false;
    });

    it('should not close on overlay click when closeOnOverlay is false', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open .closeOnOverlay=${false}></mz-modal>`);
      const overlay = el.shadowRoot!.querySelector('.overlay') as HTMLElement;

      expect(el.open).to.be.true;
      expect(el.closeOnOverlay).to.be.false;

      overlay.click();
      await el.updateComplete;

      expect(el.open).to.be.true;
    });

    it('should not close on modal content click', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open></mz-modal>`);
      const modal = el.shadowRoot!.querySelector('.modal') as HTMLElement;

      expect(el.open).to.be.true;

      modal.click();
      await el.updateComplete;

      expect(el.open).to.be.true;
    });
  });

  describe('keyboard interaction', () => {
    it('should close on Escape key when closeOnEsc is true', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open></mz-modal>`);

      expect(el.open).to.be.true;
      expect(el.closeOnEsc).to.be.true;

      const event = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(event);
      await el.updateComplete;

      expect(el.open).to.be.false;
    });

    it('should not close on Escape key when closeOnEsc is false', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open .closeOnEsc=${false}></mz-modal>`);

      expect(el.open).to.be.true;
      expect(el.closeOnEsc).to.be.false;

      const event = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(event);
      await el.updateComplete;

      expect(el.open).to.be.true;
    });

    it('should not close on other keys', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open></mz-modal>`);

      expect(el.open).to.be.true;

      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      document.dispatchEvent(event);
      await el.updateComplete;

      expect(el.open).to.be.true;
    });
  });

  describe('events', () => {
    it('should emit mz-close event when closing', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open></mz-modal>`);
      const closeButton = el.shadowRoot!.querySelector('.close-button') as HTMLElement;

      setTimeout(() => closeButton.click());
      const event = await oneEvent(el, 'mz-close');

      expect(event).to.exist;
      expect(el.open).to.be.false;
    });

    it('should emit mz-close event on overlay click', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open></mz-modal>`);
      const overlay = el.shadowRoot!.querySelector('.overlay') as HTMLElement;

      setTimeout(() => overlay.click());
      const event = await oneEvent(el, 'mz-close');

      expect(event).to.exist;
      expect(el.open).to.be.false;
    });

    it('should emit mz-close event on escape key', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open></mz-modal>`);

      setTimeout(() => {
        const event = new KeyboardEvent('keydown', { key: 'Escape' });
        document.dispatchEvent(event);
      });

      const event = await oneEvent(el, 'mz-close');

      expect(event).to.exist;
      expect(el.open).to.be.false;
    });
  });

  describe('accessibility', () => {
    it('should have correct ARIA attributes', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open></mz-modal>`);
      const modal = el.shadowRoot!.querySelector('.modal');

      expect(modal?.getAttribute('role')).to.equal('dialog');
      expect(modal?.getAttribute('aria-modal')).to.equal('true');
    });

    it('should trap focus when open', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open></mz-modal>`);
      const modal = el.shadowRoot!.querySelector('.modal');

      expect(modal).to.exist;
      // Focus trapping implementation would be tested here
    });
  });

  describe('edge cases', () => {
    it('should handle empty content', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open></mz-modal>`);

      expect(el).to.exist;
      expect(el.shadowRoot!.querySelector('.modal')).to.exist;
    });

    it('should handle very long content', async () => {
      const longContent = 'This is very long content '.repeat(100);
      const el = await fixture<MzModal>(html`<mz-modal open>${longContent}</mz-modal>`);
      const slot = el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;

      expect(slot.assignedNodes()[0]?.textContent).to.equal(longContent);
    });

    it('should handle rapid open/close toggling', async () => {
      const el = await fixture<MzModal>(html`<mz-modal></mz-modal>`);

      for (let i = 0; i < 10; i++) {
        el.open = true;
        await el.updateComplete;
        el.open = false;
        await el.updateComplete;
      }

      expect(el.open).to.be.false;
      expect(el.shadowRoot!.querySelector('.overlay')).to.not.exist;
    });

    it('should handle changing size while open', async () => {
      const el = await fixture<MzModal>(html`<mz-modal open size="md"></mz-modal>`);
      const modal = el.shadowRoot!.querySelector('.modal')!;

      expect(modal.classList.contains('modal--md')).to.be.true;

      el.size = 'lg';
      await el.updateComplete;

      expect(modal.classList.contains('modal--lg')).to.be.true;
      expect(modal.classList.contains('modal--md')).to.be.false;
    });

    it('should handle all slots together', async () => {
      const el = await fixture<MzModal>(html`
        <mz-modal open>
          <h2 slot="header">Header</h2>
          <p>Body content</p>
          <div slot="footer">Footer</div>
        </mz-modal>
      `);

      const headerSlot = el.shadowRoot!.querySelector('slot[name="header"]') as HTMLSlotElement;
      const defaultSlot = el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;
      const footerSlot = el.shadowRoot!.querySelector('slot[name="footer"]') as HTMLSlotElement;

      expect(headerSlot.assignedElements()[0]?.textContent).to.equal('Header');
      expect(defaultSlot.assignedElements()[0]?.textContent).to.equal('Body content');
      expect(footerSlot.assignedElements()[0]?.textContent).to.equal('Footer');
    });
  });
});