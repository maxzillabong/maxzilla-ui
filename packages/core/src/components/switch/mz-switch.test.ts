import { html, fixture, expect, oneEvent, waitUntil } from '@open-wc/testing';
import { MzSwitch } from './mz-switch.js';
import './mz-switch.js';

describe('mz-switch', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch></mz-switch>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzSwitch);
      expect(el.checked).to.be.false;
      expect(el.disabled).to.be.false;
      expect(el.label).to.equal('');
    });

    it('should render switch element with correct role', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch></mz-switch>`);
      const switchEl = el.shadowRoot!.querySelector('[role="switch"]');

      expect(switchEl).to.exist;
      expect(switchEl?.getAttribute('aria-checked')).to.equal('false');
      expect(switchEl?.getAttribute('tabindex')).to.equal('0');
    });

    it('should render with label property', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch label="Enable notifications"></mz-switch>`);
      const span = el.shadowRoot!.querySelector('span');

      expect(el.label).to.equal('Enable notifications');
      expect(span?.textContent).to.equal('Enable notifications');
    });

    it('should render slot content when no label property', async () => {
      const el = await fixture<MzSwitch>(html`
        <mz-switch>Custom content</mz-switch>
      `);
      const slot = el.shadowRoot!.querySelector('slot');

      expect(slot).to.exist;
      expect(el.label).to.equal('');
    });
  });

  describe('checked state', () => {
    it('should render unchecked by default', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch></mz-switch>`);
      const root = el.shadowRoot!.querySelector('.root');

      expect(el.checked).to.be.false;
      expect(root?.classList.contains('on')).to.be.false;
    });

    it('should render checked when checked is true', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch checked></mz-switch>`);
      const root = el.shadowRoot!.querySelector('.root');
      const switchEl = el.shadowRoot!.querySelector('[role="switch"]');

      expect(el.checked).to.be.true;
      expect(root?.classList.contains('on')).to.be.true;
      expect(switchEl?.getAttribute('aria-checked')).to.equal('true');
    });

    it('should toggle checked state on click', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch></mz-switch>`);
      const root = el.shadowRoot!.querySelector('.root') as HTMLElement;

      expect(el.checked).to.be.false;

      root.click();
      await el.updateComplete;

      expect(el.checked).to.be.true;

      root.click();
      await el.updateComplete;

      expect(el.checked).to.be.false;
    });
  });

  describe('disabled state', () => {
    it('should render disabled state', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch disabled></mz-switch>`);
      const switchEl = el.shadowRoot!.querySelector('[role="switch"]')!;

      expect(el.disabled).to.be.true;
      expect(switchEl.getAttribute('aria-disabled')).to.equal('true');
      expect(switchEl.getAttribute('tabindex')).to.equal('-1');
    });

    it('should not toggle when disabled', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch disabled></mz-switch>`);
      const root = el.shadowRoot!.querySelector('.root') as HTMLElement;

      expect(el.checked).to.be.false;

      root.click();
      await el.updateComplete;

      expect(el.checked).to.be.false;
    });

    it('should not emit change event when disabled', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch disabled></mz-switch>`);
      const root = el.shadowRoot!.querySelector('.root') as HTMLElement;
      let eventFired = false;

      el.addEventListener('change', () => {
        eventFired = true;
      });

      root.click();
      await waitUntil(() => false, { timeout: 100 }).catch(() => {});

      expect(eventFired).to.be.false;
    });
  });

  describe('events', () => {
    it('should emit change event when toggled', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch></mz-switch>`);
      const root = el.shadowRoot!.querySelector('.root') as HTMLElement;

      setTimeout(() => root.click());
      const event = await oneEvent(el, 'change');

      expect(event).to.exist;
      expect(el.checked).to.be.true;
    });

    it('should bubble change event', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div>
          <mz-switch></mz-switch>
        </div>
      `);
      const el = container.querySelector('mz-switch')!;
      const root = el.shadowRoot!.querySelector('.root') as HTMLElement;

      setTimeout(() => root.click());
      const event = await oneEvent(container, 'change');

      expect(event).to.exist;
    });
  });

  describe('keyboard interaction', () => {
    it('should toggle on Space key', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch></mz-switch>`);
      const switchEl = el.shadowRoot!.querySelector('[role="switch"]') as HTMLElement;

      expect(el.checked).to.be.false;

      const event = new KeyboardEvent('keydown', { key: ' ' });
      switchEl.dispatchEvent(event);
      await el.updateComplete;

      expect(el.checked).to.be.true;
    });

    it('should toggle on Enter key', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch></mz-switch>`);
      const switchEl = el.shadowRoot!.querySelector('[role="switch"]') as HTMLElement;

      expect(el.checked).to.be.false;

      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      switchEl.dispatchEvent(event);
      await el.updateComplete;

      expect(el.checked).to.be.true;
    });

    it('should not toggle on other keys', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch></mz-switch>`);
      const switchEl = el.shadowRoot!.querySelector('[role="switch"]') as HTMLElement;

      expect(el.checked).to.be.false;

      const event = new KeyboardEvent('keydown', { key: 'a' });
      switchEl.dispatchEvent(event);
      await el.updateComplete;

      expect(el.checked).to.be.false;
    });

    it('should not toggle on keyboard when disabled', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch disabled></mz-switch>`);
      const switchEl = el.shadowRoot!.querySelector('[role="switch"]') as HTMLElement;

      expect(el.checked).to.be.false;

      const event = new KeyboardEvent('keydown', { key: ' ' });
      switchEl.dispatchEvent(event);
      await el.updateComplete;

      expect(el.checked).to.be.false;
    });
  });

  describe('accessibility', () => {
    it('should have correct ARIA attributes', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch></mz-switch>`);
      const switchEl = el.shadowRoot!.querySelector('[role="switch"]')!;

      expect(switchEl.getAttribute('role')).to.equal('switch');
      expect(switchEl.getAttribute('aria-checked')).to.equal('false');
      expect(switchEl.getAttribute('aria-disabled')).to.equal('false');
      expect(switchEl.getAttribute('tabindex')).to.equal('0');
    });

    it('should be focusable when not disabled', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch></mz-switch>`);
      const switchEl = el.shadowRoot!.querySelector('[role="switch"]') as HTMLElement;

      switchEl.focus();
      expect(el.shadowRoot!.activeElement).to.equal(switchEl);
    });

    it('should not be focusable when disabled', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch disabled></mz-switch>`);
      const switchEl = el.shadowRoot!.querySelector('[role="switch"]')!;

      expect(switchEl.getAttribute('tabindex')).to.equal('-1');
    });

    it('should update ARIA attributes dynamically', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch></mz-switch>`);
      const switchEl = el.shadowRoot!.querySelector('[role="switch"]')!;

      el.checked = true;
      el.disabled = true;
      await el.updateComplete;

      expect(switchEl.getAttribute('aria-checked')).to.equal('true');
      expect(switchEl.getAttribute('aria-disabled')).to.equal('true');
      expect(switchEl.getAttribute('tabindex')).to.equal('-1');
    });
  });

  describe('CSS custom properties and styling', () => {
    it('should apply checked styles', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch checked></mz-switch>`);
      const root = el.shadowRoot!.querySelector('.root')!;

      expect(root.classList.contains('on')).to.be.true;
    });

    it('should have transition styles', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch></mz-switch>`);
      const track = el.shadowRoot!.querySelector('.track');
      const thumb = el.shadowRoot!.querySelector('.thumb');

      expect(track).to.exist;
      expect(thumb).to.exist;
    });
  });

  describe('edge cases', () => {
    it('should handle empty label', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch label=""></mz-switch>`);
      const span = el.shadowRoot!.querySelector('span');
      const slot = el.shadowRoot!.querySelector('slot');

      expect(span).to.not.exist;
      expect(slot).to.exist;
    });

    it('should handle very long label', async () => {
      const longLabel = 'This is a very long label '.repeat(20);
      const el = await fixture<MzSwitch>(html`<mz-switch label="${longLabel}"></mz-switch>`);
      const span = el.shadowRoot!.querySelector('span');

      expect(span?.textContent).to.equal(longLabel);
    });

    it('should handle rapid toggling', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch></mz-switch>`);
      const root = el.shadowRoot!.querySelector('.root') as HTMLElement;

      for (let i = 0; i < 10; i++) {
        root.click();
      }
      await el.updateComplete;

      // After 10 clicks (even number), should be unchecked
      expect(el.checked).to.be.false;
    });

    it('should handle programmatic state changes', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch></mz-switch>`);

      el.checked = true;
      await el.updateComplete;
      expect(el.checked).to.be.true;

      el.checked = false;
      await el.updateComplete;
      expect(el.checked).to.be.false;
    });

    it('should maintain state when disabled is toggled', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch checked></mz-switch>`);

      expect(el.checked).to.be.true;

      el.disabled = true;
      await el.updateComplete;
      expect(el.checked).to.be.true;

      el.disabled = false;
      await el.updateComplete;
      expect(el.checked).to.be.true;
    });

    it('should handle setting both checked and disabled initially', async () => {
      const el = await fixture<MzSwitch>(html`<mz-switch checked disabled></mz-switch>`);
      const root = el.shadowRoot!.querySelector('.root');
      const switchEl = el.shadowRoot!.querySelector('[role="switch"]')!;

      expect(el.checked).to.be.true;
      expect(el.disabled).to.be.true;
      expect(root?.classList.contains('on')).to.be.true;
      expect(switchEl.getAttribute('aria-checked')).to.equal('true');
      expect(switchEl.getAttribute('aria-disabled')).to.equal('true');
    });
  });
});