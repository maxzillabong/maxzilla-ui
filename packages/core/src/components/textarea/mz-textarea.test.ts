import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import { MzTextarea } from './mz-textarea.js';
import './mz-textarea.js';

describe('mz-textarea', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea></mz-textarea>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzTextarea);
      expect(el.value).to.equal('');
      expect(el.placeholder).to.equal('');
      expect(el.rows).to.equal(4);
      expect(el.disabled).to.be.false;
      expect(el.readonly).to.be.false;
      expect(el.error).to.be.false;
      expect(el.success).to.be.false;
    });

    it('should render textarea element', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea');

      expect(textarea).to.exist;
      expect(textarea?.classList.contains('textarea')).to.be.true;
      expect(textarea?.rows).to.equal(4);
    });

    it('should render with custom value', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea value="test value"></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      expect(el.value).to.equal('test value');
      expect(textarea.value).to.equal('test value');
    });

    it('should render with placeholder', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea placeholder="Enter text..."></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      expect(el.placeholder).to.equal('Enter text...');
      expect(textarea.placeholder).to.equal('Enter text...');
    });

    it('should render with custom rows', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea rows="10"></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      expect(el.rows).to.equal(10);
      expect(textarea.rows).to.equal(10);
    });
  });

  describe('disabled state', () => {
    it('should disable textarea when disabled is true', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea disabled></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      expect(el.disabled).to.be.true;
      expect(textarea.disabled).to.be.true;
    });

    it('should not allow input when disabled', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea disabled value="initial"></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      textarea.value = 'changed';
      textarea.dispatchEvent(new Event('input'));
      await el.updateComplete;

      expect(el.value).to.equal('initial');
    });

    it('should toggle disabled state dynamically', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      expect(textarea.disabled).to.be.false;

      el.disabled = true;
      await el.updateComplete;
      expect(textarea.disabled).to.be.true;

      el.disabled = false;
      await el.updateComplete;
      expect(textarea.disabled).to.be.false;
    });
  });

  describe('readonly state', () => {
    it('should set readonly when readonly is true', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea readonly></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      expect(el.readonly).to.be.true;
      expect(textarea.readOnly).to.be.true;
    });

    it('should toggle readonly state dynamically', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      expect(textarea.readOnly).to.be.false;

      el.readonly = true;
      await el.updateComplete;
      expect(textarea.readOnly).to.be.true;

      el.readonly = false;
      await el.updateComplete;
      expect(textarea.readOnly).to.be.false;
    });
  });

  describe('error state', () => {
    it('should show error state', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea error></mz-textarea>`);

      expect(el.error).to.be.true;
      expect(el.hasAttribute('error')).to.be.true;
    });

    it('should toggle error state dynamically', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea></mz-textarea>`);

      expect(el.error).to.be.false;

      el.error = true;
      await el.updateComplete;
      expect(el.hasAttribute('error')).to.be.true;

      el.error = false;
      await el.updateComplete;
      expect(el.hasAttribute('error')).to.be.false;
    });
  });

  describe('success state', () => {
    it('should show success state', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea success></mz-textarea>`);

      expect(el.success).to.be.true;
      expect(el.hasAttribute('success')).to.be.true;
    });

    it('should toggle success state dynamically', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea></mz-textarea>`);

      expect(el.success).to.be.false;

      el.success = true;
      await el.updateComplete;
      expect(el.hasAttribute('success')).to.be.true;

      el.success = false;
      await el.updateComplete;
      expect(el.hasAttribute('success')).to.be.false;
    });
  });

  describe('events', () => {
    it('should emit mz-input event on input', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      setTimeout(() => {
        textarea.value = 'new value';
        textarea.dispatchEvent(new Event('input'));
      });

      const event = await oneEvent(el, 'mz-input');

      expect(event).to.exist;
      expect(event.detail).to.deep.equal({ value: 'new value' });
      expect(el.value).to.equal('new value');
    });

    it('should emit mz-focus event on focus', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      setTimeout(() => textarea.focus());
      const event = await oneEvent(el, 'mz-focus');

      expect(event).to.exist;
    });

    it('should emit mz-blur event on blur', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      textarea.focus();
      setTimeout(() => textarea.blur());
      const event = await oneEvent(el, 'mz-blur');

      expect(event).to.exist;
    });

    it('should update value on input event', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      expect(el.value).to.equal('');

      textarea.value = 'typed text';
      textarea.dispatchEvent(new Event('input'));
      await el.updateComplete;

      expect(el.value).to.equal('typed text');
    });

    it('should handle multiple input events', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;
      const events: CustomEvent[] = [];

      el.addEventListener('mz-input', (e) => {
        events.push(e as CustomEvent);
      });

      textarea.value = 'first';
      textarea.dispatchEvent(new Event('input'));
      await el.updateComplete;

      textarea.value = 'second';
      textarea.dispatchEvent(new Event('input'));
      await el.updateComplete;

      expect(events).to.have.length(2);
      expect(events[0].detail.value).to.equal('first');
      expect(events[1].detail.value).to.equal('second');
    });
  });

  describe('accessibility', () => {
    it('should be focusable when not disabled', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      textarea.focus();
      expect(el.shadowRoot!.activeElement).to.equal(textarea);
    });

    it('should have correct textarea role', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      expect(textarea.tagName.toLowerCase()).to.equal('textarea');
    });
  });

  describe('edge cases', () => {
    it('should handle empty value', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea value=""></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      expect(el.value).to.equal('');
      expect(textarea.value).to.equal('');
    });

    it('should handle very long value', async () => {
      const longValue = 'a'.repeat(10000);
      const el = await fixture<MzTextarea>(html`<mz-textarea value="${longValue}"></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      expect(el.value).to.equal(longValue);
      expect(textarea.value).to.equal(longValue);
    });

    it('should handle multi-line value', async () => {
      const multilineValue = 'Line 1\nLine 2\nLine 3';
      const el = await fixture<MzTextarea>(html`<mz-textarea value="${multilineValue}"></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      expect(el.value).to.equal(multilineValue);
      expect(textarea.value).to.equal(multilineValue);
    });

    it('should handle special characters in value', async () => {
      const specialValue = '< > & " \' / \\';
      const el = await fixture<MzTextarea>(html`<mz-textarea value="${specialValue}"></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      expect(el.value).to.equal(specialValue);
      expect(textarea.value).to.equal(specialValue);
    });

    it('should handle value changes programmatically', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      el.value = 'programmatic value';
      await el.updateComplete;

      expect(textarea.value).to.equal('programmatic value');
    });

    it('should handle rapid value changes', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      for (let i = 0; i < 10; i++) {
        textarea.value = `value ${i}`;
        textarea.dispatchEvent(new Event('input'));
      }
      await el.updateComplete;

      expect(el.value).to.equal('value 9');
    });

    it('should handle changing rows dynamically', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea rows="4"></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      expect(textarea.rows).to.equal(4);

      el.rows = 10;
      await el.updateComplete;
      expect(textarea.rows).to.equal(10);

      el.rows = 2;
      await el.updateComplete;
      expect(textarea.rows).to.equal(2);
    });

    it('should handle simultaneous error and success states', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea error success></mz-textarea>`);

      // Both states can be true, component should handle this gracefully
      expect(el.error).to.be.true;
      expect(el.success).to.be.true;
    });

    it('should preserve value when toggling disabled', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea value="test"></mz-textarea>`);

      el.disabled = true;
      await el.updateComplete;
      expect(el.value).to.equal('test');

      el.disabled = false;
      await el.updateComplete;
      expect(el.value).to.equal('test');
    });

    it('should preserve value when toggling readonly', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea value="test"></mz-textarea>`);

      el.readonly = true;
      await el.updateComplete;
      expect(el.value).to.equal('test');

      el.readonly = false;
      await el.updateComplete;
      expect(el.value).to.equal('test');
    });

    it('should handle both disabled and readonly', async () => {
      const el = await fixture<MzTextarea>(html`<mz-textarea disabled readonly></mz-textarea>`);
      const textarea = el.shadowRoot!.querySelector('textarea')!;

      expect(el.disabled).to.be.true;
      expect(el.readonly).to.be.true;
      expect(textarea.disabled).to.be.true;
      expect(textarea.readOnly).to.be.true;
    });
  });
});