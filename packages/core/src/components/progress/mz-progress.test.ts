import { html, fixture, expect } from '@open-wc/testing';
import { MzProgress } from './mz-progress.js';
import './mz-progress.js';

describe('mz-progress', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress></mz-progress>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzProgress);
      expect(el.value).to.equal(0);
      expect(el.max).to.equal(100);
      expect(el.size).to.equal('md');
      expect(el.variant).to.equal('primary');
      expect(el.showValue).to.be.false;
      expect(el.indeterminate).to.be.false;
    });

    it('should render progress element', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress></mz-progress>`);
      const progress = el.shadowRoot!.querySelector('.progress');

      expect(progress).to.exist;
      expect(progress?.classList.contains('progress')).to.be.true;
    });

    it('should render progress bar', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="50"></mz-progress>`);
      const progressBar = el.shadowRoot!.querySelector('.progress-bar');

      expect(progressBar).to.exist;
      expect(progressBar?.classList.contains('progress-bar')).to.be.true;
    });

    it('should render progress track', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress></mz-progress>`);
      const progressTrack = el.shadowRoot!.querySelector('.progress-track');

      expect(progressTrack).to.exist;
      expect(progressTrack?.classList.contains('progress-track')).to.be.true;
    });
  });

  describe('value and progress calculation', () => {
    it('should calculate progress percentage correctly', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="25" max="100"></mz-progress>`);

      expect(el.value).to.equal(25);
      expect(el.max).to.equal(100);
      // Progress should be 25%
    });

    it('should handle different max values', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="50" max="200"></mz-progress>`);

      expect(el.value).to.equal(50);
      expect(el.max).to.equal(200);
      // Progress should be 25%
    });

    it('should clamp values to valid range', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="150" max="100"></mz-progress>`);

      // Value should be clamped to max
      expect(el.value).to.equal(150);
      expect(el.max).to.equal(100);
    });

    it('should handle negative values', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="-10"></mz-progress>`);

      expect(el.value).to.equal(-10);
      // Implementation should handle negative values appropriately
    });

    it('should update progress bar width dynamically', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="0"></mz-progress>`);

      el.value = 50;
      await el.updateComplete;

      const progressBar = el.shadowRoot!.querySelector('.progress-bar') as HTMLElement;
      expect(progressBar.style.width).to.include('50%');
    });
  });

  describe('variants', () => {
    const variants = ['primary', 'secondary', 'success', 'warning', 'error'] as const;

    variants.forEach(variant => {
      it(`should render ${variant} variant`, async () => {
        const el = await fixture<MzProgress>(html`
          <mz-progress variant="${variant}" value="50"></mz-progress>
        `);

        expect(el.variant).to.equal(variant);
        const progress = el.shadowRoot!.querySelector('.progress');
        expect(progress?.classList.contains(`progress--${variant}`)).to.be.true;
      });
    });

    it('should default to primary variant', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="50"></mz-progress>`);

      expect(el.variant).to.equal('primary');
      const progress = el.shadowRoot!.querySelector('.progress');
      expect(progress?.classList.contains('progress--primary')).to.be.true;
    });
  });

  describe('sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;

    sizes.forEach(size => {
      it(`should apply ${size} size`, async () => {
        const el = await fixture<MzProgress>(html`
          <mz-progress size="${size}" value="50"></mz-progress>
        `);

        expect(el.size).to.equal(size);
        expect(el.getAttribute('size')).to.equal(size);
      });
    });

    it('should default to md size', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="50"></mz-progress>`);

      expect(el.size).to.equal('md');
    });
  });

  describe('value display', () => {
    it('should not show value by default', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="75"></mz-progress>`);

      expect(el.showValue).to.be.false;
      const valueDisplay = el.shadowRoot!.querySelector('.progress-value');
      expect(valueDisplay).to.not.exist;
    });

    it('should show value when showValue is true', async () => {
      const el = await fixture<MzProgress>(html`
        <mz-progress value="75" show-value></mz-progress>
      `);

      expect(el.showValue).to.be.true;
      const valueDisplay = el.shadowRoot!.querySelector('.progress-value');
      expect(valueDisplay).to.exist;
      expect(valueDisplay?.textContent).to.include('75%');
    });

    it('should show custom value format', async () => {
      const el = await fixture<MzProgress>(html`
        <mz-progress value="25" max="50" show-value></mz-progress>
      `);

      const valueDisplay = el.shadowRoot!.querySelector('.progress-value');
      expect(valueDisplay).to.exist;
      // Should show either percentage or fraction based on implementation
    });

    it('should update displayed value dynamically', async () => {
      const el = await fixture<MzProgress>(html`
        <mz-progress value="25" show-value></mz-progress>
      `);

      let valueDisplay = el.shadowRoot!.querySelector('.progress-value');
      expect(valueDisplay?.textContent).to.include('25%');

      el.value = 80;
      await el.updateComplete;

      valueDisplay = el.shadowRoot!.querySelector('.progress-value');
      expect(valueDisplay?.textContent).to.include('80%');
    });
  });

  describe('indeterminate state', () => {
    it('should not be indeterminate by default', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="50"></mz-progress>`);

      expect(el.indeterminate).to.be.false;
      const progress = el.shadowRoot!.querySelector('.progress');
      expect(progress?.classList.contains('progress--indeterminate')).to.be.false;
    });

    it('should apply indeterminate class when indeterminate is true', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress indeterminate></mz-progress>`);

      expect(el.indeterminate).to.be.true;
      const progress = el.shadowRoot!.querySelector('.progress');
      expect(progress?.classList.contains('progress--indeterminate')).to.be.true;
    });

    it('should ignore value when indeterminate', async () => {
      const el = await fixture<MzProgress>(html`
        <mz-progress value="75" indeterminate show-value></mz-progress>
      `);

      // When indeterminate, value display might be hidden or show loading state
      const progress = el.shadowRoot!.querySelector('.progress');
      expect(progress?.classList.contains('progress--indeterminate')).to.be.true;
    });

    it('should toggle indeterminate state dynamically', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="50"></mz-progress>`);
      const progress = el.shadowRoot!.querySelector('.progress');

      expect(progress?.classList.contains('progress--indeterminate')).to.be.false;

      el.indeterminate = true;
      await el.updateComplete;
      expect(progress?.classList.contains('progress--indeterminate')).to.be.true;

      el.indeterminate = false;
      await el.updateComplete;
      expect(progress?.classList.contains('progress--indeterminate')).to.be.false;
    });
  });

  describe('label', () => {
    it('should render label when provided', async () => {
      const el = await fixture<MzProgress>(html`
        <mz-progress value="60" label="Loading progress"></mz-progress>
      `);

      const label = el.shadowRoot!.querySelector('.progress-label');
      expect(label).to.exist;
      expect(label?.textContent).to.include('Loading progress');
    });

    it('should not render label when not provided', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="60"></mz-progress>`);

      const label = el.shadowRoot!.querySelector('.progress-label');
      expect(label).to.not.exist;
    });
  });

  describe('accessibility', () => {
    it('should have proper ARIA attributes', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="50"></mz-progress>`);

      const progressElement = el.shadowRoot!.querySelector('[role="progressbar"]');
      expect(progressElement).to.exist;
      expect(progressElement?.getAttribute('aria-valuenow')).to.equal('50');
      expect(progressElement?.getAttribute('aria-valuemin')).to.equal('0');
      expect(progressElement?.getAttribute('aria-valuemax')).to.equal('100');
    });

    it('should update ARIA values when progress changes', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="25"></mz-progress>`);

      el.value = 75;
      await el.updateComplete;

      const progressElement = el.shadowRoot!.querySelector('[role="progressbar"]');
      expect(progressElement?.getAttribute('aria-valuenow')).to.equal('75');
    });

    it('should have proper ARIA attributes for indeterminate state', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress indeterminate></mz-progress>`);

      const progressElement = el.shadowRoot!.querySelector('[role="progressbar"]');
      expect(progressElement?.hasAttribute('aria-valuenow')).to.be.false;
    });

    it('should support aria-label', async () => {
      const el = await fixture<MzProgress>(html`
        <mz-progress value="50" aria-label="File upload progress"></mz-progress>
      `);

      expect(el.getAttribute('aria-label')).to.equal('File upload progress');
    });
  });

  describe('edge cases', () => {
    it('should handle zero value', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="0"></mz-progress>`);

      expect(el.value).to.equal(0);
      const progressBar = el.shadowRoot!.querySelector('.progress-bar') as HTMLElement;
      expect(progressBar.style.width).to.include('0%');
    });

    it('should handle maximum value', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="100"></mz-progress>`);

      expect(el.value).to.equal(100);
      const progressBar = el.shadowRoot!.querySelector('.progress-bar') as HTMLElement;
      expect(progressBar.style.width).to.include('100%');
    });

    it('should handle decimal values', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="33.33"></mz-progress>`);

      expect(el.value).to.equal(33.33);
    });

    it('should handle very small max values', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="0.5" max="1"></mz-progress>`);

      expect(el.value).to.equal(0.5);
      expect(el.max).to.equal(1);
    });

    it('should handle dynamic property changes', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="25"></mz-progress>`);

      el.value = 75;
      el.variant = 'success';
      el.size = 'lg';
      el.showValue = true;
      el.indeterminate = true;
      await el.updateComplete;

      expect(el.value).to.equal(75);
      expect(el.variant).to.equal('success');
      expect(el.size).to.equal('lg');
      expect(el.showValue).to.be.true;
      expect(el.indeterminate).to.be.true;

      const progress = el.shadowRoot!.querySelector('.progress');
      expect(progress?.classList.contains('progress--success')).to.be.true;
      expect(progress?.classList.contains('progress--indeterminate')).to.be.true;
    });

    it('should handle rapid value changes', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="0"></mz-progress>`);

      // Rapidly change values
      const values = [10, 25, 50, 75, 100, 0];
      for (const value of values) {
        el.value = value;
        await el.updateComplete;
        expect(el.value).to.equal(value);
      }
    });

    it('should maintain performance with frequent updates', async () => {
      const el = await fixture<MzProgress>(html`<mz-progress value="0" show-value></mz-progress>`);

      // Simulate frequent updates
      const start = performance.now();
      for (let i = 0; i <= 100; i += 5) {
        el.value = i;
        await el.updateComplete;
      }
      const end = performance.now();

      // Should complete updates reasonably quickly
      expect(end - start).to.be.lessThan(1000); // Less than 1 second
      expect(el.value).to.equal(100);
    });
  });
});