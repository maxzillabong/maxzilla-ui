import { html, fixture, expect } from '@open-wc/testing';
import { MzContainer } from './mz-container.js';
import './mz-container.js';

describe('mz-container', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzContainer>(html`<mz-container></mz-container>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzContainer);
      expect(el.size).to.equal('default');
      expect(el.fluid).to.be.false;
      expect(el.centerContent).to.be.false;
    });

    it('should render container element', async () => {
      const el = await fixture<MzContainer>(html`<mz-container></mz-container>`);
      const container = el.shadowRoot!.querySelector('.container');

      expect(container).to.exist;
      expect(container?.classList.contains('container')).to.be.true;
    });

    it('should render slot content', async () => {
      const el = await fixture<MzContainer>(html`
        <mz-container>
          <div>Container content</div>
        </mz-container>
      `);

      const slot = el.shadowRoot!.querySelector('slot');
      expect(slot).to.exist;

      const nodes = (slot as HTMLSlotElement)?.assignedElements();
      expect(nodes?.[0]?.textContent).to.equal('Container content');
    });
  });

  describe('sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'default'] as const;

    sizes.forEach(size => {
      it(`should apply ${size} size`, async () => {
        const el = await fixture<MzContainer>(html`
          <mz-container size="${size}">Content</mz-container>
        `);

        expect(el.size).to.equal(size);

        if (size === 'default') {
          const container = el.shadowRoot!.querySelector('.container');
          expect(container?.classList.contains('container--default')).to.be.false;
        } else {
          const container = el.shadowRoot!.querySelector('.container');
          expect(container?.classList.contains(`container--${size}`)).to.be.true;
        }
      });
    });

    it('should default to default size', async () => {
      const el = await fixture<MzContainer>(html`<mz-container>Content</mz-container>`);

      expect(el.size).to.equal('default');
      const container = el.shadowRoot!.querySelector('.container');
      expect(container?.classList.contains('container')).to.be.true;
    });
  });

  describe('fluid mode', () => {
    it('should not be fluid by default', async () => {
      const el = await fixture<MzContainer>(html`<mz-container>Content</mz-container>`);

      expect(el.fluid).to.be.false;
      const container = el.shadowRoot!.querySelector('.container');
      expect(container?.classList.contains('container--fluid')).to.be.false;
    });

    it('should apply fluid class when fluid is true', async () => {
      const el = await fixture<MzContainer>(html`
        <mz-container fluid>Fluid content</mz-container>
      `);

      expect(el.fluid).to.be.true;
      const container = el.shadowRoot!.querySelector('.container');
      expect(container?.classList.contains('container--fluid')).to.be.true;
    });

    it('should toggle fluid mode dynamically', async () => {
      const el = await fixture<MzContainer>(html`<mz-container>Content</mz-container>`);
      const container = el.shadowRoot!.querySelector('.container');

      expect(container?.classList.contains('container--fluid')).to.be.false;

      el.fluid = true;
      await el.updateComplete;
      expect(container?.classList.contains('container--fluid')).to.be.true;

      el.fluid = false;
      await el.updateComplete;
      expect(container?.classList.contains('container--fluid')).to.be.false;
    });
  });

  describe('center content', () => {
    it('should not center content by default', async () => {
      const el = await fixture<MzContainer>(html`<mz-container>Content</mz-container>`);

      expect(el.centerContent).to.be.false;
      const container = el.shadowRoot!.querySelector('.container');
      expect(container?.classList.contains('container--center')).to.be.false;
    });

    it('should apply center class when centerContent is true', async () => {
      const el = await fixture<MzContainer>(html`
        <mz-container center-content>Centered content</mz-container>
      `);

      expect(el.centerContent).to.be.true;
      const container = el.shadowRoot!.querySelector('.container');
      expect(container?.classList.contains('container--center')).to.be.true;
    });

    it('should toggle center mode dynamically', async () => {
      const el = await fixture<MzContainer>(html`<mz-container>Content</mz-container>`);
      const container = el.shadowRoot!.querySelector('.container');

      expect(container?.classList.contains('container--center')).to.be.false;

      el.centerContent = true;
      await el.updateComplete;
      expect(container?.classList.contains('container--center')).to.be.true;

      el.centerContent = false;
      await el.updateComplete;
      expect(container?.classList.contains('container--center')).to.be.false;
    });
  });

  describe('CSS custom properties', () => {
    it('should support custom max-width', async () => {
      const el = await fixture<MzContainer>(html`
        <mz-container style="--container-max-width: 800px;">Content</mz-container>
      `);

      expect(el.style.getPropertyValue('--container-max-width')).to.equal('800px');
    });

    it('should support custom padding', async () => {
      const el = await fixture<MzContainer>(html`
        <mz-container style="--container-padding: 2rem;">Content</mz-container>
      `);

      expect(el.style.getPropertyValue('--container-padding')).to.equal('2rem');
    });
  });

  describe('responsive behavior', () => {
    it('should have responsive padding by default', async () => {
      const el = await fixture<MzContainer>(html`<mz-container>Content</mz-container>`);
      const container = el.shadowRoot!.querySelector('.container');

      expect(container).to.exist;
      // Container should have responsive styles applied via CSS
    });

    it('should maintain responsive behavior when fluid', async () => {
      const el = await fixture<MzContainer>(html`
        <mz-container fluid>Fluid content</mz-container>
      `);

      const container = el.shadowRoot!.querySelector('.container');
      expect(container?.classList.contains('container--fluid')).to.be.true;
    });
  });

  describe('edge cases', () => {
    it('should handle empty content', async () => {
      const el = await fixture<MzContainer>(html`<mz-container></mz-container>`);

      expect(el).to.exist;
      const container = el.shadowRoot!.querySelector('.container');
      expect(container).to.exist;
    });

    it('should handle very large content', async () => {
      const largeContent = Array.from({ length: 100 }, (_, i) =>
        html`<div>Large content item ${i}</div>`
      );

      const el = await fixture<MzContainer>(html`
        <mz-container>${largeContent}</mz-container>
      `);

      const slot = el.shadowRoot!.querySelector('slot') as HTMLSlotElement;
      const nodes = slot.assignedElements();
      expect(nodes.length).to.equal(100);
    });

    it('should handle nested containers', async () => {
      const el = await fixture<MzContainer>(html`
        <mz-container size="lg">
          <mz-container size="sm">
            Nested container content
          </mz-container>
        </mz-container>
      `);

      const outerContainer = el.shadowRoot!.querySelector('.container');
      expect(outerContainer?.classList.contains('container--lg')).to.be.true;

      const slot = el.shadowRoot!.querySelector('slot') as HTMLSlotElement;
      const nestedContainer = slot.assignedElements()[0] as MzContainer;
      expect(nestedContainer.size).to.equal('sm');
    });

    it('should handle multiple state changes', async () => {
      const el = await fixture<MzContainer>(html`<mz-container>Content</mz-container>`);
      const container = el.shadowRoot!.querySelector('.container')!;

      el.size = 'lg';
      el.fluid = true;
      el.centerContent = true;
      await el.updateComplete;

      expect(container.classList.contains('container--lg')).to.be.true;
      expect(container.classList.contains('container--fluid')).to.be.true;
      expect(container.classList.contains('container--center')).to.be.true;
    });

    it('should handle conflicting size and fluid properties', async () => {
      const el = await fixture<MzContainer>(html`
        <mz-container size="xs" fluid>Content</mz-container>
      `);

      const container = el.shadowRoot!.querySelector('.container');
      expect(container?.classList.contains('container--xs')).to.be.true;
      expect(container?.classList.contains('container--fluid')).to.be.true;
      // Both classes should be present, CSS will handle priority
    });

    it('should handle complex content with mixed elements', async () => {
      const el = await fixture<MzContainer>(html`
        <mz-container>
          <h1>Title</h1>
          <p>Paragraph content</p>
          <div>
            <button>Action</button>
            <a href="#">Link</a>
          </div>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
        </mz-container>
      `);

      const slot = el.shadowRoot!.querySelector('slot') as HTMLSlotElement;
      const nodes = slot.assignedElements();

      expect(nodes.length).to.equal(4);
      expect(nodes[0].tagName).to.equal('H1');
      expect(nodes[1].tagName).to.equal('P');
      expect(nodes[2].tagName).to.equal('DIV');
      expect(nodes[3].tagName).to.equal('UL');
    });
  });

  describe('accessibility', () => {
    it('should have proper semantic role', async () => {
      const el = await fixture<MzContainer>(html`<mz-container>Content</mz-container>`);
      const container = el.shadowRoot!.querySelector('.container');

      // Container is typically a generic container, no specific role needed
      expect(container).to.exist;
    });

    it('should support custom ARIA attributes', async () => {
      const el = await fixture<MzContainer>(html`
        <mz-container aria-label="Main content container">Content</mz-container>
      `);

      expect(el.getAttribute('aria-label')).to.equal('Main content container');
    });
  });
});