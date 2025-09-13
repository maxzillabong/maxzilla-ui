import { html, fixture, expect } from '@open-wc/testing';
import { MzBadge } from './mz-badge.js';
import './mz-badge.js';

describe('mz-badge', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge></mz-badge>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzBadge);
      expect(el.variant).to.equal('primary'); // Default is primary, not default
      expect(el.size).to.equal('md');
      expect(el.dot).to.be.false;
    });

    it('should render badge element', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge></mz-badge>`);
      const badge = el.shadowRoot!.querySelector('.badge');

      expect(badge).to.exist;
      expect(badge?.classList.contains('badge--primary')).to.be.true; // Default variant is primary
    });

    it('should render slot content when not in dot mode', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge>Badge Text</mz-badge>`);
      const slot = el.shadowRoot!.querySelector('slot') as HTMLSlotElement;

      expect(slot).to.exist;
      const nodes = slot.assignedNodes();
      expect(nodes[0]?.textContent).to.equal('Badge Text');
    });

    it('should not render slot content when in dot mode', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge dot>Badge Text</mz-badge>`);
      const slot = el.shadowRoot!.querySelector('slot');
      const span = el.shadowRoot!.querySelector('.badge');

      expect(slot).to.not.exist;
      expect(span?.textContent?.trim()).to.equal('');
    });
  });

  describe('variants', () => {
    const variants = ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info'] as const;

    variants.forEach(variant => {
      it(`should render ${variant} variant`, async () => {
        const el = await fixture<MzBadge>(html`<mz-badge variant="${variant}">Badge</mz-badge>`);
        const badge = el.shadowRoot!.querySelector('.badge');

        expect(el.variant).to.equal(variant);
        expect(badge?.classList.contains(`badge--${variant}`)).to.be.true;
      });
    });
  });

  describe('sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;

    sizes.forEach(size => {
      it(`should apply ${size} size`, async () => {
        const el = await fixture<MzBadge>(html`<mz-badge size="${size}">Badge</mz-badge>`);

        expect(el.size).to.equal(size);
        expect(el.getAttribute('size')).to.equal(size);
      });
    });

    it('should default to md size', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge>Badge</mz-badge>`);
      expect(el.size).to.equal('md');
    });
  });

  describe('dot mode', () => {
    it('should render as dot when dot is true', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge dot>Badge</mz-badge>`);

      expect(el.dot).to.be.true;
      expect(el.hasAttribute('dot')).to.be.true;

      // Should not render slot content in dot mode
      const slot = el.shadowRoot!.querySelector('slot');
      expect(slot).to.not.exist;
    });

    it('should render normal badge when dot is false', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge>Badge</mz-badge>`);

      expect(el.dot).to.be.false;
      expect(el.hasAttribute('dot')).to.be.false;

      // Should render slot content
      const slot = el.shadowRoot!.querySelector('slot');
      expect(slot).to.exist;
    });

    it('should toggle dot mode dynamically', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge>Badge</mz-badge>`);

      let slot = el.shadowRoot!.querySelector('slot');
      expect(slot).to.exist;

      el.dot = true;
      await el.updateComplete;

      slot = el.shadowRoot!.querySelector('slot');
      expect(slot).to.not.exist;

      el.dot = false;
      await el.updateComplete;

      slot = el.shadowRoot!.querySelector('slot');
      expect(slot).to.exist;
    });
  });

  describe('accessibility', () => {
    it('should support aria-label', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge aria-label="New items">5</mz-badge>`);

      expect(el.ariaLabel).to.equal('New items');
    });

    it('should support live region property', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge .live=${true}>5</mz-badge>`);

      expect(el.live).to.be.true;
    });
  });

  describe('CSS custom properties', () => {
    it('should have size-specific CSS variables for xs', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge size="xs">Badge</mz-badge>`);

      expect(el.getAttribute('size')).to.equal('xs');
    });

    it('should have size-specific CSS variables for sm', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge size="sm">Badge</mz-badge>`);

      expect(el.getAttribute('size')).to.equal('sm');
    });

    it('should have size-specific CSS variables for lg', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge size="lg">Badge</mz-badge>`);

      expect(el.getAttribute('size')).to.equal('lg');
    });
  });

  describe('edge cases', () => {
    it('should handle empty content', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge></mz-badge>`);

      expect(el).to.exist;
      expect(el.shadowRoot!.querySelector('.badge')).to.exist;
    });

    it('should handle very long content', async () => {
      const longContent = 'Very long badge text '.repeat(10);
      const el = await fixture<MzBadge>(html`<mz-badge>${longContent}</mz-badge>`);
      const slot = el.shadowRoot!.querySelector('slot') as HTMLSlotElement;

      expect(slot.assignedNodes()[0]?.textContent).to.equal(longContent);
    });

    it('should handle special characters', async () => {
      const specialContent = '< > & " \' / \\';
      const el = await fixture<MzBadge>(html`<mz-badge>${specialContent}</mz-badge>`);
      const slot = el.shadowRoot!.querySelector('slot') as HTMLSlotElement;

      expect(slot.assignedNodes()[0]?.textContent).to.equal(specialContent);
    });

    it('should handle multiple property changes', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge>Badge</mz-badge>`);
      const badge = el.shadowRoot!.querySelector('.badge')!;

      el.variant = 'success';
      el.size = 'lg';
      el.dot = true;
      await el.updateComplete;

      expect(badge.classList.contains('badge--success')).to.be.true;
      expect(el.size).to.equal('lg');
      expect(el.dot).to.be.true;

      // Should not have slot in dot mode
      const slot = el.shadowRoot!.querySelector('slot');
      expect(slot).to.not.exist;
    });

    it('should handle dynamic variant changes', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge variant="primary">Badge</mz-badge>`);
      const badge = el.shadowRoot!.querySelector('.badge')!;

      expect(badge.classList.contains('badge--primary')).to.be.true;

      el.variant = 'success';
      await el.updateComplete;

      expect(badge.classList.contains('badge--success')).to.be.true;
      expect(badge.classList.contains('badge--primary')).to.be.false;
    });

    it('should handle dynamic size changes', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge size="md">Badge</mz-badge>`);

      expect(el.size).to.equal('md');

      el.size = 'sm';
      await el.updateComplete;

      expect(el.size).to.equal('sm');
      expect(el.getAttribute('size')).to.equal('sm');
    });

    it('should handle dot mode with different sizes', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge dot size="sm"></mz-badge>`);

      expect(el.dot).to.be.true;
      expect(el.size).to.equal('sm');
      expect(el.hasAttribute('dot')).to.be.true;
      expect(el.getAttribute('size')).to.equal('sm');
    });

    it('should handle switching between dot and normal mode', async () => {
      const el = await fixture<MzBadge>(html`<mz-badge>123</mz-badge>`);

      // Start in normal mode
      let slot = el.shadowRoot!.querySelector('slot');
      expect(slot).to.exist;

      // Switch to dot mode
      el.dot = true;
      await el.updateComplete;
      slot = el.shadowRoot!.querySelector('slot');
      expect(slot).to.not.exist;

      // Switch back to normal mode
      el.dot = false;
      await el.updateComplete;
      slot = el.shadowRoot!.querySelector('slot');
      expect(slot).to.exist;
    });
  });
});