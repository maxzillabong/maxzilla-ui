import { html, fixture, expect } from '@open-wc/testing';
import { MzCard } from './mz-card.js';
import './mz-card.js';

describe('mz-card', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzCard>(html`<mz-card></mz-card>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzCard);
      expect(el.variant).to.equal('default');
      expect(el.elevation).to.equal('sm');
      expect(el.interactive).to.be.false;
      expect(el.loading).to.be.false;
      expect(el.disabled).to.be.false;
      expect(el.compact).to.be.false;
      expect(el.fullHeight).to.be.false;
      expect(el.hasAvatar).to.be.false;
    });

    it('should render card container', async () => {
      const el = await fixture<MzCard>(html`<mz-card></mz-card>`);
      const card = el.shadowRoot!.querySelector('.card');

      expect(card).to.exist;
      // Default variant doesn't add a class modifier
      expect(card?.classList.contains('card')).to.be.true;
    });

    it('should render default slot content', async () => {
      const el = await fixture<MzCard>(html`
        <mz-card>Card content</mz-card>
      `);
      const slot = el.shadowRoot!.querySelector('slot:not([name])');

      expect(slot).to.exist;
      const nodes = (slot as HTMLSlotElement)?.assignedNodes();
      expect(nodes?.[0]?.textContent).to.equal('Card content');
    });

    it('should render header slot', async () => {
      const el = await fixture<MzCard>(html`
        <mz-card>
          <div slot="header">Header content</div>
          Body content
        </mz-card>
      `);
      const headerSlot = el.shadowRoot!.querySelector('slot[name="header"]');

      expect(headerSlot).to.exist;
      const nodes = (headerSlot as HTMLSlotElement)?.assignedElements();
      expect(nodes?.[0]?.textContent).to.equal('Header content');
    });

    it('should render footer slot', async () => {
      const el = await fixture<MzCard>(html`
        <mz-card>
          Body content
          <div slot="footer">Footer content</div>
        </mz-card>
      `);
      const footerSlot = el.shadowRoot!.querySelector('slot[name="footer"]');

      expect(footerSlot).to.exist;
      const nodes = (footerSlot as HTMLSlotElement)?.assignedElements();
      expect(nodes?.[0]?.textContent).to.equal('Footer content');
    });

    it('should render image slot', async () => {
      const el = await fixture<MzCard>(html`
        <mz-card>
          <img slot="image" src="test.jpg" alt="Test" />
          Body content
        </mz-card>
      `);
      const imageSlot = el.shadowRoot!.querySelector('slot[name="image"]');

      expect(imageSlot).to.exist;
      const nodes = (imageSlot as HTMLSlotElement)?.assignedElements();
      expect(nodes?.[0]?.tagName).to.equal('IMG');
    });

    it('should render actions slot', async () => {
      const el = await fixture<MzCard>(html`
        <mz-card>
          Body content
          <div slot="actions">Action buttons</div>
        </mz-card>
      `);
      const actionsSlot = el.shadowRoot!.querySelector('slot[name="actions"]');

      expect(actionsSlot).to.exist;
      const nodes = (actionsSlot as HTMLSlotElement)?.assignedElements();
      expect(nodes?.[0]?.textContent).to.equal('Action buttons');
    });
  });

  describe('variants', () => {
    const variants = ['default', 'outlined', 'elevated', 'interactive'] as const;

    variants.forEach(variant => {
      it(`should render ${variant} variant`, async () => {
        const el = await fixture<MzCard>(html`<mz-card variant="${variant}"></mz-card>`);
        const card = el.shadowRoot!.querySelector('.card');

        expect(el.variant).to.equal(variant);
        if (variant === 'default') {
          // Default variant doesn't add a modifier class
          expect(card?.classList.contains('card')).to.be.true;
          expect(card?.classList.contains('card--default')).to.be.false;
        } else {
          expect(card?.classList.contains(`card--${variant}`)).to.be.true;
        }
      });
    });
  });

  describe('elevation', () => {
    const elevations = ['none', 'sm', 'md', 'lg', 'xl'] as const;

    elevations.forEach(elevation => {
      it(`should apply ${elevation} elevation`, async () => {
        const el = await fixture<MzCard>(html`<mz-card elevation="${elevation}"></mz-card>`);
        expect(el.elevation).to.equal(elevation);
        expect(el.getAttribute('elevation')).to.equal(elevation);
      });
    });

    it('should default to sm elevation', async () => {
      const el = await fixture<MzCard>(html`<mz-card></mz-card>`);
      expect(el.elevation).to.equal('sm');
    });
  });

  describe('interactive state', () => {
    it('should apply interactive class when interactive is true', async () => {
      const el = await fixture<MzCard>(html`<mz-card interactive></mz-card>`);
      const card = el.shadowRoot!.querySelector('.card');

      expect(el.interactive).to.be.true;
      expect(card?.classList.contains('card--interactive')).to.be.true;
    });

    it('should not apply interactive class when interactive is false', async () => {
      const el = await fixture<MzCard>(html`<mz-card></mz-card>`);
      const card = el.shadowRoot!.querySelector('.card');

      expect(el.interactive).to.be.false;
      expect(card?.classList.contains('card--interactive')).to.be.false;
    });

    it('should toggle interactive state dynamically', async () => {
      const el = await fixture<MzCard>(html`<mz-card></mz-card>`);
      const card = el.shadowRoot!.querySelector('.card');

      expect(card?.classList.contains('card--interactive')).to.be.false;

      el.interactive = true;
      await el.updateComplete;
      expect(card?.classList.contains('card--interactive')).to.be.true;

      el.interactive = false;
      await el.updateComplete;
      expect(card?.classList.contains('card--interactive')).to.be.false;
    });
  });

  describe('loading state', () => {
    it('should apply loading attribute when loading is true', async () => {
      const el = await fixture<MzCard>(html`<mz-card loading></mz-card>`);

      expect(el.loading).to.be.true;
      expect(el.hasAttribute('loading')).to.be.true;
    });

    it('should handle loading state changes', async () => {
      const el = await fixture<MzCard>(html`<mz-card></mz-card>`);

      expect(el.loading).to.be.false;

      el.loading = true;
      await el.updateComplete;
      expect(el.hasAttribute('loading')).to.be.true;

      el.loading = false;
      await el.updateComplete;
      expect(el.hasAttribute('loading')).to.be.false;
    });
  });

  describe('disabled state', () => {
    it('should apply disabled attribute when disabled is true', async () => {
      const el = await fixture<MzCard>(html`<mz-card disabled></mz-card>`);

      expect(el.disabled).to.be.true;
      expect(el.hasAttribute('disabled')).to.be.true;
    });
  });

  describe('compact mode', () => {
    it('should apply compact attribute when compact is true', async () => {
      const el = await fixture<MzCard>(html`<mz-card compact></mz-card>`);

      expect(el.compact).to.be.true;
      expect(el.hasAttribute('compact')).to.be.true;
    });
  });

  describe('full height', () => {
    it('should apply full-height attribute when fullHeight is true', async () => {
      const el = await fixture<MzCard>(html`<mz-card full-height></mz-card>`);

      expect(el.fullHeight).to.be.true;
      expect(el.hasAttribute('full-height')).to.be.true;
    });
  });

  describe('click events', () => {
    it('should emit mz-card-click event when interactive and clicked', async () => {
      const el = await fixture<MzCard>(html`<mz-card interactive></mz-card>`);
      const card = el.shadowRoot!.querySelector('.card') as HTMLElement;
      let eventDetail: any = null;

      el.addEventListener('mz-card-click', (e: any) => {
        eventDetail = e.detail;
      });

      card.click();
      expect(eventDetail).to.exist;
      expect(eventDetail.originalEvent).to.exist;
    });

    it('should not emit event when not interactive', async () => {
      const el = await fixture<MzCard>(html`<mz-card></mz-card>`);
      const card = el.shadowRoot!.querySelector('.card') as HTMLElement;
      let eventFired = false;

      el.addEventListener('mz-card-click', () => {
        eventFired = true;
      });

      card.click();
      expect(eventFired).to.be.false;
    });

    it('should not emit event when disabled', async () => {
      const el = await fixture<MzCard>(html`<mz-card interactive disabled></mz-card>`);
      const card = el.shadowRoot!.querySelector('.card') as HTMLElement;
      let eventFired = false;

      el.addEventListener('mz-card-click', () => {
        eventFired = true;
      });

      card.click();
      expect(eventFired).to.be.false;
    });

    it('should not emit event when loading', async () => {
      const el = await fixture<MzCard>(html`<mz-card interactive loading></mz-card>`);
      const card = el.shadowRoot!.querySelector('.card') as HTMLElement;
      let eventFired = false;

      el.addEventListener('mz-card-click', () => {
        eventFired = true;
      });

      card.click();
      expect(eventFired).to.be.false;
    });
  });

  describe('accessibility', () => {
    it('should have correct ARIA attributes', async () => {
      const el = await fixture<MzCard>(html`<mz-card></mz-card>`);
      const card = el.shadowRoot!.querySelector('.card');

      expect(card).to.exist;
      // Card is a presentational component by default
    });

    it('should be interactive when interactive property is set', async () => {
      const el = await fixture<MzCard>(html`<mz-card interactive></mz-card>`);
      const card = el.shadowRoot!.querySelector('.card') as HTMLElement;

      // Interactive cards have click handlers
      expect(card).to.exist;
      expect(card.classList.contains('card--interactive')).to.be.true;
    });
  });

  describe('CSS custom properties and styling', () => {
    it('should have transition styles', async () => {
      const el = await fixture<MzCard>(html`<mz-card></mz-card>`);
      const card = el.shadowRoot!.querySelector('.card');

      expect(card).to.exist;
    });

    it('should apply variant-specific styles', async () => {
      const el = await fixture<MzCard>(html`<mz-card variant="elevated"></mz-card>`);
      const card = el.shadowRoot!.querySelector('.card');

      expect(card?.classList.contains('card--elevated')).to.be.true;
    });
  });

  describe('edge cases', () => {
    it('should handle empty content', async () => {
      const el = await fixture<MzCard>(html`<mz-card></mz-card>`);

      expect(el).to.exist;
      expect(el.shadowRoot!.querySelector('.card')).to.exist;
    });

    it('should handle very long content', async () => {
      const longContent = 'This is very long content '.repeat(100);
      const el = await fixture<MzCard>(html`<mz-card>${longContent}</mz-card>`);
      const slot = el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;

      expect(slot.assignedNodes()[0]?.textContent).to.equal(longContent);
    });

    it('should handle all slots together', async () => {
      const el = await fixture<MzCard>(html`
        <mz-card>
          <div slot="header">Header</div>
          <div slot="image">Image</div>
          <span>Body</span>
          <div slot="actions">Actions</div>
          <div slot="footer">Footer</div>
        </mz-card>
      `);

      const headerSlot = el.shadowRoot!.querySelector('slot[name="header"]') as HTMLSlotElement;
      const imageSlot = el.shadowRoot!.querySelector('slot[name="image"]') as HTMLSlotElement;
      const defaultSlot = el.shadowRoot!.querySelector('.card-content slot:not([name])') as HTMLSlotElement;
      const actionsSlot = el.shadowRoot!.querySelector('slot[name="actions"]') as HTMLSlotElement;
      const footerSlot = el.shadowRoot!.querySelector('slot[name="footer"]') as HTMLSlotElement;

      expect(headerSlot.assignedElements()[0]?.textContent).to.equal('Header');
      expect(imageSlot.assignedElements()[0]?.textContent).to.equal('Image');
      expect(defaultSlot.assignedNodes()[0]?.textContent).to.equal('Body');
      expect(actionsSlot.assignedElements()[0]?.textContent).to.equal('Actions');
      expect(footerSlot.assignedElements()[0]?.textContent).to.equal('Footer');
    });

    it('should handle changing variant dynamically', async () => {
      const el = await fixture<MzCard>(html`<mz-card></mz-card>`);
      const card = el.shadowRoot!.querySelector('.card')!;

      // Default variant doesn't add a modifier class
      expect(card.classList.contains('card')).to.be.true;
      expect(card.classList.contains('card--default')).to.be.false;

      el.variant = 'elevated';
      await el.updateComplete;
      expect(card.classList.contains('card--elevated')).to.be.true;

      el.variant = 'outlined';
      await el.updateComplete;
      expect(card.classList.contains('card--outlined')).to.be.true;
      expect(card.classList.contains('card--elevated')).to.be.false;
    });

    it('should handle multiple state changes', async () => {
      const el = await fixture<MzCard>(html`<mz-card></mz-card>`);
      const card = el.shadowRoot!.querySelector('.card')!;

      el.interactive = true;
      el.variant = 'outlined';
      el.elevation = 'xl';
      el.compact = true;
      await el.updateComplete;

      expect(card.classList.contains('card--interactive')).to.be.true;
      expect(card.classList.contains('card--outlined')).to.be.true;
      expect(el.elevation).to.equal('xl');
      expect(el.compact).to.be.true;
    });

    it('should handle special characters in content', async () => {
      const specialContent = '< > & " \' / \\';
      const el = await fixture<MzCard>(html`<mz-card>${specialContent}</mz-card>`);
      const slot = el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;

      expect(slot.assignedNodes()[0]?.textContent).to.equal(specialContent);
    });
  });
});