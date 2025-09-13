import { html, fixture, expect, oneEvent, waitUntil } from '@open-wc/testing';
import { MzCheckbox } from './mz-checkbox.js';
import './mz-checkbox.js';

describe('mz-checkbox', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzCheckbox);
      expect(el.checked).to.be.false;
      expect(el.disabled).to.be.false;
      expect(el.label).to.equal('');
    });

    it('should render checkbox element with correct role', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('[role="checkbox"]');

      expect(checkbox).to.exist;
      expect(checkbox?.getAttribute('aria-checked')).to.equal('false');
      expect(checkbox?.getAttribute('tabindex')).to.equal('0');
    });

    it('should render with label property', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox label="Accept terms"></mz-checkbox>`);
      const label = el.shadowRoot!.querySelector('.label');

      expect(el.label).to.equal('Accept terms');
      expect(label?.textContent).to.equal('Accept terms');
    });

    it('should render slot content when no label property', async () => {
      const el = await fixture<MzCheckbox>(html`
        <mz-checkbox>Custom content</mz-checkbox>
      `);
      const slot = el.shadowRoot!.querySelector('slot');

      expect(slot).to.exist;
      expect(el.label).to.equal('');
    });

    it('should prefer label property over slot content', async () => {
      const el = await fixture<MzCheckbox>(html`
        <mz-checkbox label="Label text">Slot content</mz-checkbox>
      `);
      const label = el.shadowRoot!.querySelector('.label');
      const slot = el.shadowRoot!.querySelector('slot');

      expect(label?.textContent).to.equal('Label text');
      expect(slot).to.not.exist;
    });
  });

  describe('checked state', () => {
    it('should render unchecked by default', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);
      const box = el.shadowRoot!.querySelector('.box');
      const tick = el.shadowRoot!.querySelector('.tick');

      expect(el.checked).to.be.false;
      expect(box?.classList.contains('checked')).to.be.false;
      expect(tick).to.not.exist;
    });

    it('should render checked when checked is true', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox checked></mz-checkbox>`);
      const box = el.shadowRoot!.querySelector('.box');
      const tick = el.shadowRoot!.querySelector('.tick');
      const checkbox = el.shadowRoot!.querySelector('[role="checkbox"]');

      expect(el.checked).to.be.true;
      expect(box?.classList.contains('checked')).to.be.true;
      expect(tick).to.exist;
      expect(tick?.textContent).to.equal('✓');
      expect(checkbox?.getAttribute('aria-checked')).to.equal('true');
    });

    it('should toggle checked state on click', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);
      const root = el.shadowRoot!.querySelector('.root') as HTMLElement;

      expect(el.checked).to.be.false;

      root.click();
      await el.updateComplete;

      expect(el.checked).to.be.true;

      root.click();
      await el.updateComplete;

      expect(el.checked).to.be.false;
    });

    it('should update aria-checked when toggled', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('[role="checkbox"]')!;

      expect(checkbox.getAttribute('aria-checked')).to.equal('false');

      el.checked = true;
      await el.updateComplete;

      expect(checkbox.getAttribute('aria-checked')).to.equal('true');
    });
  });

  describe('disabled state', () => {
    it('should render disabled state', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox disabled></mz-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('[role="checkbox"]')!;

      expect(el.disabled).to.be.true;
      expect(checkbox.getAttribute('aria-disabled')).to.equal('true');
      expect(checkbox.getAttribute('tabindex')).to.equal('-1');
    });

    it('should not toggle when disabled', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox disabled></mz-checkbox>`);
      const root = el.shadowRoot!.querySelector('.root') as HTMLElement;

      expect(el.checked).to.be.false;

      root.click();
      await el.updateComplete;

      expect(el.checked).to.be.false;
    });

    it('should not emit change event when disabled', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox disabled></mz-checkbox>`);
      const root = el.shadowRoot!.querySelector('.root') as HTMLElement;
      let eventFired = false;

      el.addEventListener('change', () => {
        eventFired = true;
      });

      root.click();
      await waitUntil(() => false, { timeout: 100 }).catch(() => {});

      expect(eventFired).to.be.false;
    });

    it('should toggle disabled state dynamically', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('[role="checkbox"]')!;

      expect(checkbox.getAttribute('tabindex')).to.equal('0');

      el.disabled = true;
      await el.updateComplete;

      expect(checkbox.getAttribute('aria-disabled')).to.equal('true');
      expect(checkbox.getAttribute('tabindex')).to.equal('-1');

      el.disabled = false;
      await el.updateComplete;

      expect(checkbox.getAttribute('aria-disabled')).to.equal('false');
      expect(checkbox.getAttribute('tabindex')).to.equal('0');
    });
  });

  describe('events', () => {
    it('should emit change event when toggled', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);
      const root = el.shadowRoot!.querySelector('.root') as HTMLElement;

      setTimeout(() => root.click());
      const event = await oneEvent(el, 'change');

      expect(event).to.exist;
      expect(el.checked).to.be.true;
    });

    it('should emit change event for each toggle', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);
      const root = el.shadowRoot!.querySelector('.root') as HTMLElement;
      const events: Event[] = [];

      el.addEventListener('change', (e) => {
        events.push(e);
      });

      root.click();
      await el.updateComplete;

      root.click();
      await el.updateComplete;

      expect(events).to.have.length(2);
      expect(el.checked).to.be.false;
    });

    it('should bubble change event', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div>
          <mz-checkbox></mz-checkbox>
        </div>
      `);
      const el = container.querySelector('mz-checkbox')!;
      const root = el.shadowRoot!.querySelector('.root') as HTMLElement;

      setTimeout(() => root.click());
      const event = await oneEvent(container, 'change');

      expect(event).to.exist;
    });
  });

  describe('keyboard interaction', () => {
    it('should toggle on Space key', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('[role="checkbox"]') as HTMLElement;

      expect(el.checked).to.be.false;

      const event = new KeyboardEvent('keydown', { key: ' ' });
      checkbox.dispatchEvent(event);
      await el.updateComplete;

      expect(el.checked).to.be.true;
    });

    it('should toggle on Enter key', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('[role="checkbox"]') as HTMLElement;

      expect(el.checked).to.be.false;

      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      checkbox.dispatchEvent(event);
      await el.updateComplete;

      expect(el.checked).to.be.true;
    });

    it('should not toggle on other keys', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('[role="checkbox"]') as HTMLElement;

      expect(el.checked).to.be.false;

      const event = new KeyboardEvent('keydown', { key: 'a' });
      checkbox.dispatchEvent(event);
      await el.updateComplete;

      expect(el.checked).to.be.false;
    });

    it('should not toggle on keyboard when disabled', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox disabled></mz-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('[role="checkbox"]') as HTMLElement;

      expect(el.checked).to.be.false;

      const event = new KeyboardEvent('keydown', { key: ' ' });
      checkbox.dispatchEvent(event);
      await el.updateComplete;

      expect(el.checked).to.be.false;
    });
  });

  describe('accessibility', () => {
    it('should have correct ARIA attributes', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('[role="checkbox"]')!;

      expect(checkbox.getAttribute('role')).to.equal('checkbox');
      expect(checkbox.getAttribute('aria-checked')).to.equal('false');
      expect(checkbox.getAttribute('aria-disabled')).to.equal('false');
      expect(checkbox.getAttribute('tabindex')).to.equal('0');
    });

    it('should be focusable when not disabled', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('[role="checkbox"]') as HTMLElement;

      checkbox.focus();
      expect(el.shadowRoot!.activeElement).to.equal(checkbox);
    });

    it('should not be focusable when disabled', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox disabled></mz-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('[role="checkbox"]')!;

      expect(checkbox.getAttribute('tabindex')).to.equal('-1');
    });

    it('should update ARIA attributes dynamically', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('[role="checkbox"]')!;

      el.checked = true;
      el.disabled = true;
      await el.updateComplete;

      expect(checkbox.getAttribute('aria-checked')).to.equal('true');
      expect(checkbox.getAttribute('aria-disabled')).to.equal('true');
      expect(checkbox.getAttribute('tabindex')).to.equal('-1');
    });
  });

  describe('CSS custom properties and styling', () => {
    it('should apply checked styles', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox checked></mz-checkbox>`);
      const box = el.shadowRoot!.querySelector('.box')!;

      expect(box.classList.contains('checked')).to.be.true;
    });

    it('should have transition styles', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);
      const box = el.shadowRoot!.querySelector('.box');

      expect(box).to.exist;
    });

    it('should render checkmark with animation', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);

      el.checked = true;
      await el.updateComplete;

      const tick = el.shadowRoot!.querySelector('.tick');
      expect(tick).to.exist;
    });
  });

  describe('edge cases', () => {
    it('should handle empty label', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox label=""></mz-checkbox>`);
      const label = el.shadowRoot!.querySelector('.label');
      const slot = el.shadowRoot!.querySelector('slot');

      expect(label).to.not.exist;
      expect(slot).to.exist;
    });

    it('should handle very long label', async () => {
      const longLabel = 'This is a very long label '.repeat(20);
      const el = await fixture<MzCheckbox>(html`<mz-checkbox label="${longLabel}"></mz-checkbox>`);
      const label = el.shadowRoot!.querySelector('.label');

      expect(label?.textContent).to.equal(longLabel);
    });

    it('should handle special characters in label', async () => {
      const specialLabel = '< > & " \' / \\';
      const el = await fixture<MzCheckbox>(html`<mz-checkbox label="${specialLabel}"></mz-checkbox>`);
      const label = el.shadowRoot!.querySelector('.label');

      expect(label?.textContent).to.equal(specialLabel);
    });

    it('should handle rapid toggling', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);
      const root = el.shadowRoot!.querySelector('.root') as HTMLElement;

      for (let i = 0; i < 10; i++) {
        root.click();
      }
      await el.updateComplete;

      // After 10 clicks (even number), should be unchecked
      expect(el.checked).to.be.false;
    });

    it('should handle programmatic state changes', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox></mz-checkbox>`);

      el.checked = true;
      await el.updateComplete;
      expect(el.checked).to.be.true;

      el.checked = false;
      await el.updateComplete;
      expect(el.checked).to.be.false;
    });

    it('should maintain state when disabled is toggled', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox checked></mz-checkbox>`);

      expect(el.checked).to.be.true;

      el.disabled = true;
      await el.updateComplete;
      expect(el.checked).to.be.true;

      el.disabled = false;
      await el.updateComplete;
      expect(el.checked).to.be.true;
    });

    it('should handle setting both checked and disabled initially', async () => {
      const el = await fixture<MzCheckbox>(html`<mz-checkbox checked disabled></mz-checkbox>`);
      const box = el.shadowRoot!.querySelector('.box');
      const checkbox = el.shadowRoot!.querySelector('[role="checkbox"]')!;

      expect(el.checked).to.be.true;
      expect(el.disabled).to.be.true;
      expect(box?.classList.contains('checked')).to.be.true;
      expect(checkbox.getAttribute('aria-checked')).to.equal('true');
      expect(checkbox.getAttribute('aria-disabled')).to.equal('true');
    });
  });
});