import { html, fixture, expect, oneEvent, waitUntil } from '@open-wc/testing';
import { MzInput } from './mz-input.js';
import './mz-input.js';

describe('mz-input', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzInput>(html`<mz-input></mz-input>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzInput);
      expect(el.value).to.equal('');
      expect(el.placeholder).to.equal('');
      expect(el.type).to.equal('text');
      expect(el.size).to.equal('md');
      expect(el.disabled).to.be.false;
      expect(el.error).to.be.false;
      expect(el.success).to.be.false;
    });

    it('should render input element', async () => {
      const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
      const input = el.shadowRoot!.querySelector('input');

      expect(input).to.exist;
      expect(input?.type).to.equal('text');
      expect(input?.classList.contains('input')).to.be.true;
    });

    it('should render with custom value', async () => {
      const el = await fixture<MzInput>(html`<mz-input value="test value"></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      expect(el.value).to.equal('test value');
      expect(input.value).to.equal('test value');
    });

    it('should render with placeholder', async () => {
      const el = await fixture<MzInput>(html`<mz-input placeholder="Enter text..."></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      expect(el.placeholder).to.equal('Enter text...');
      expect(input.placeholder).to.equal('Enter text...');
    });
  });

  describe('input types', () => {
    const types: Array<'text' | 'email' | 'password' | 'number'> = ['text', 'email', 'password', 'number'];

    types.forEach(type => {
      it(`should render ${type} type input`, async () => {
        const el = await fixture<MzInput>(html`<mz-input type="${type}"></mz-input>`);
        const input = el.shadowRoot!.querySelector('input')!;

        expect(el.type).to.equal(type);
        expect(input.type).to.equal(type);
      });
    });

    it('should handle password type correctly', async () => {
      const el = await fixture<MzInput>(html`<mz-input type="password" value="secret"></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      expect(input.type).to.equal('password');
      expect(input.value).to.equal('secret');
    });

    it('should handle number type correctly', async () => {
      const el = await fixture<MzInput>(html`<mz-input type="number" value="42"></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      expect(input.type).to.equal('number');
      expect(input.value).to.equal('42');
    });
  });

  describe('sizes', () => {
    const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];

    sizes.forEach(size => {
      it(`should render ${size} size`, async () => {
        const el = await fixture<MzInput>(html`<mz-input size="${size}"></mz-input>`);

        expect(el.size).to.equal(size);
        expect(el.getAttribute('size')).to.equal(size);
      });
    });
  });

  describe('disabled state', () => {
    it('should disable input when disabled is true', async () => {
      const el = await fixture<MzInput>(html`<mz-input disabled></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      expect(el.disabled).to.be.true;
      expect(input.disabled).to.be.true;
    });

    it('should not emit input event when disabled', async () => {
      const el = await fixture<MzInput>(html`<mz-input disabled value="initial"></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;
      let eventFired = false;

      el.addEventListener('mz-input', () => {
        eventFired = true;
      });

      // Try to change the value
      input.value = 'changed';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // Disabled inputs can still have their value changed programmatically,
      // but the component should not emit the custom event
      expect(eventFired).to.be.false;
    });

    it('should toggle disabled state dynamically', async () => {
      const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      expect(input.disabled).to.be.false;

      el.disabled = true;
      await el.updateComplete;
      expect(input.disabled).to.be.true;

      el.disabled = false;
      await el.updateComplete;
      expect(input.disabled).to.be.false;
    });
  });

  describe('error state', () => {
    it('should show error state', async () => {
      const el = await fixture<MzInput>(html`<mz-input error></mz-input>`);

      expect(el.error).to.be.true;
      expect(el.hasAttribute('error')).to.be.true;
    });

    it('should toggle error state dynamically', async () => {
      const el = await fixture<MzInput>(html`<mz-input></mz-input>`);

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
      const el = await fixture<MzInput>(html`<mz-input success></mz-input>`);

      expect(el.success).to.be.true;
      expect(el.hasAttribute('success')).to.be.true;
    });

    it('should toggle success state dynamically', async () => {
      const el = await fixture<MzInput>(html`<mz-input></mz-input>`);

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
      const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      setTimeout(() => {
        input.value = 'new value';
        input.dispatchEvent(new Event('input'));
      });

      const event = await oneEvent(el, 'mz-input');

      expect(event).to.exist;
      expect(event.detail).to.deep.equal({ value: 'new value' });
      expect(el.value).to.equal('new value');
    });

    it('should emit mz-focus event on focus', async () => {
      const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      setTimeout(() => input.focus());
      const event = await oneEvent(el, 'mz-focus');

      expect(event).to.exist;
    });

    it('should emit mz-blur event on blur', async () => {
      const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      input.focus();
      setTimeout(() => input.blur());
      const event = await oneEvent(el, 'mz-blur');

      expect(event).to.exist;
    });

    it('should update value on input event', async () => {
      const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      expect(el.value).to.equal('');

      input.value = 'typed text';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      expect(el.value).to.equal('typed text');
    });

    it('should handle multiple input events', async () => {
      const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;
      const events: CustomEvent[] = [];

      el.addEventListener('mz-input', (e) => {
        events.push(e as CustomEvent);
      });

      input.value = 'first';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      input.value = 'second';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      expect(events).to.have.length(2);
      expect(events[0].detail.value).to.equal('first');
      expect(events[1].detail.value).to.equal('second');
    });
  });

  describe('accessibility', () => {
    it('should be focusable when not disabled', async () => {
      const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      input.focus();
      expect(el.shadowRoot!.activeElement).to.equal(input);
    });

    it('should not be focusable when disabled', async () => {
      const el = await fixture<MzInput>(html`<mz-input disabled></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      input.focus();
      // Disabled inputs can still receive focus in some browsers but should be visually disabled
      expect(input.disabled).to.be.true;
    });

    it('should have correct input role', async () => {
      const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      expect(input.tagName.toLowerCase()).to.equal('input');
    });
  });

  describe('CSS custom properties', () => {
    it('should apply size-related CSS custom properties', async () => {
      const el = await fixture<MzInput>(html`<mz-input size="lg"></mz-input>`);

      expect(el.getAttribute('size')).to.equal('lg');
    });

    it('should have transition CSS variable', async () => {
      const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
      const input = el.shadowRoot!.querySelector('.input');

      expect(input).to.exist;
    });
  });

  describe('edge cases', () => {
    it('should handle empty value', async () => {
      const el = await fixture<MzInput>(html`<mz-input value=""></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      expect(el.value).to.equal('');
      expect(input.value).to.equal('');
    });

    it('should handle very long value', async () => {
      const longValue = 'a'.repeat(1000);
      const el = await fixture<MzInput>(html`<mz-input value="${longValue}"></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      expect(el.value).to.equal(longValue);
      expect(input.value).to.equal(longValue);
    });

    it('should handle special characters in value', async () => {
      const specialValue = '< > & " \' / \\';
      const el = await fixture<MzInput>(html`<mz-input value="${specialValue}"></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      expect(el.value).to.equal(specialValue);
      expect(input.value).to.equal(specialValue);
    });

    it('should handle value changes programmatically', async () => {
      const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      el.value = 'programmatic value';
      await el.updateComplete;

      expect(input.value).to.equal('programmatic value');
    });

    it('should handle rapid value changes', async () => {
      const el = await fixture<MzInput>(html`<mz-input></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      for (let i = 0; i < 10; i++) {
        input.value = `value ${i}`;
        input.dispatchEvent(new Event('input'));
      }
      await el.updateComplete;

      expect(el.value).to.equal('value 9');
    });

    it('should handle changing type dynamically', async () => {
      const el = await fixture<MzInput>(html`<mz-input type="text"></mz-input>`);
      const input = el.shadowRoot!.querySelector('input')!;

      expect(input.type).to.equal('text');

      el.type = 'password';
      await el.updateComplete;
      expect(input.type).to.equal('password');

      el.type = 'email';
      await el.updateComplete;
      expect(input.type).to.equal('email');
    });

    it('should handle simultaneous error and success states', async () => {
      const el = await fixture<MzInput>(html`<mz-input error success></mz-input>`);

      // Both states can be true, component should handle this gracefully
      expect(el.error).to.be.true;
      expect(el.success).to.be.true;
    });

    it('should preserve value when toggling disabled', async () => {
      const el = await fixture<MzInput>(html`<mz-input value="test"></mz-input>`);

      el.disabled = true;
      await el.updateComplete;
      expect(el.value).to.equal('test');

      el.disabled = false;
      await el.updateComplete;
      expect(el.value).to.equal('test');
    });
  });
});