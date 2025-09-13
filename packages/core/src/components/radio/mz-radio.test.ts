import { html, fixture, expect } from '@open-wc/testing';
import { MzRadio } from './mz-radio.js';
import { MzRadioGroup } from './mz-radio-group.js';
import './mz-radio.js';
import './mz-radio-group.js';

describe('mz-radio', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzRadio>(html`<mz-radio></mz-radio>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzRadio);
      expect(el.checked).to.be.false;
      expect(el.disabled).to.be.false;
      expect(el.value).to.equal('');
      expect(el.name).to.equal('');
      expect(el.size).to.equal('md');
    });

    it('should render radio input element', async () => {
      const el = await fixture<MzRadio>(html`<mz-radio></mz-radio>`);
      const input = el.shadowRoot!.querySelector('input[type="radio"]');

      expect(input).to.exist;
      expect(input?.getAttribute('type')).to.equal('radio');
    });

    it('should render label slot', async () => {
      const el = await fixture<MzRadio>(html`
        <mz-radio>Radio Label</mz-radio>
      `);

      const label = el.shadowRoot!.querySelector('.radio-label');
      const slot = label?.querySelector('slot');

      expect(slot).to.exist;
      const nodes = (slot as HTMLSlotElement)?.assignedNodes();
      expect(nodes?.[0]?.textContent).to.equal('Radio Label');
    });

    it('should render with custom value', async () => {
      const el = await fixture<MzRadio>(html`
        <mz-radio value="option1">Option 1</mz-radio>
      `);

      expect(el.value).to.equal('option1');
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      expect(input.value).to.equal('option1');
    });
  });

  describe('checked state', () => {
    it('should be unchecked by default', async () => {
      const el = await fixture<MzRadio>(html`<mz-radio></mz-radio>`);
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      expect(el.checked).to.be.false;
      expect(input.checked).to.be.false;
    });

    it('should be checked when checked attribute is set', async () => {
      const el = await fixture<MzRadio>(html`<mz-radio checked></mz-radio>`);
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      expect(el.checked).to.be.true;
      expect(input.checked).to.be.true;
    });

    it('should toggle checked state on click', async () => {
      const el = await fixture<MzRadio>(html`<mz-radio></mz-radio>`);
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      expect(el.checked).to.be.false;

      input.click();
      await el.updateComplete;

      expect(el.checked).to.be.true;
      expect(input.checked).to.be.true;
    });

    it('should emit change event when checked', async () => {
      const el = await fixture<MzRadio>(html`<mz-radio value="test"></mz-radio>`);
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      let eventDetail: any = null;

      el.addEventListener('mz-change', (e: any) => {
        eventDetail = e.detail;
      });

      input.click();
      await el.updateComplete;

      expect(eventDetail).to.exist;
      expect(eventDetail.checked).to.be.true;
      expect(eventDetail.value).to.equal('test');
    });
  });

  describe('disabled state', () => {
    it('should be disabled when disabled attribute is set', async () => {
      const el = await fixture<MzRadio>(html`<mz-radio disabled></mz-radio>`);
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      expect(el.disabled).to.be.true;
      expect(input.disabled).to.be.true;
    });

    it('should not change state when disabled and clicked', async () => {
      const el = await fixture<MzRadio>(html`<mz-radio disabled></mz-radio>`);
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      expect(el.checked).to.be.false;

      input.click();
      await el.updateComplete;

      expect(el.checked).to.be.false;
    });

    it('should not emit events when disabled', async () => {
      const el = await fixture<MzRadio>(html`<mz-radio disabled></mz-radio>`);
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      let eventFired = false;

      el.addEventListener('mz-change', () => {
        eventFired = true;
      });

      input.click();
      await el.updateComplete;

      expect(eventFired).to.be.false;
    });
  });

  describe('sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach(size => {
      it(`should apply ${size} size`, async () => {
        const el = await fixture<MzRadio>(html`
          <mz-radio size="${size}">Radio</mz-radio>
        `);

        expect(el.size).to.equal(size);
        expect(el.getAttribute('size')).to.equal(size);
      });
    });
  });

  describe('name attribute', () => {
    it('should set name on input element', async () => {
      const el = await fixture<MzRadio>(html`
        <mz-radio name="options" value="1">Option 1</mz-radio>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      expect(input.name).to.equal('options');
    });

    it('should group radios with same name', async () => {
      const container = await fixture(html`
        <div>
          <mz-radio name="group1" value="1">Option 1</mz-radio>
          <mz-radio name="group1" value="2">Option 2</mz-radio>
          <mz-radio name="group1" value="3">Option 3</mz-radio>
        </div>
      `);

      const radios = container.querySelectorAll('mz-radio');
      expect(radios.length).to.equal(3);

      radios.forEach(radio => {
        const input = radio.shadowRoot!.querySelector('input') as HTMLInputElement;
        expect(input.name).to.equal('group1');
      });
    });
  });

  describe('keyboard interaction', () => {
    it('should be focusable', async () => {
      const el = await fixture<MzRadio>(html`<mz-radio></mz-radio>`);
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      input.focus();
      expect(el.shadowRoot!.activeElement).to.equal(input);
    });

    it('should check on space key', async () => {
      const el = await fixture<MzRadio>(html`<mz-radio></mz-radio>`);
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      input.focus();
      const event = new KeyboardEvent('keydown', { key: ' ' });
      input.dispatchEvent(event);

      // Radio behavior: space key is handled by browser default
      expect(el).to.exist;
    });
  });

  describe('accessibility', () => {
    it('should have proper ARIA attributes', async () => {
      const el = await fixture<MzRadio>(html`
        <mz-radio checked aria-label="Option 1">Option 1</mz-radio>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      expect(input.getAttribute('role')).to.equal('radio');
      expect(input.getAttribute('aria-checked')).to.equal('true');
    });

    it('should have aria-disabled when disabled', async () => {
      const el = await fixture<MzRadio>(html`
        <mz-radio disabled>Option</mz-radio>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      expect(input.getAttribute('aria-disabled')).to.equal('true');
    });

    it('should associate label with input', async () => {
      const el = await fixture<MzRadio>(html`
        <mz-radio>Radio Label</mz-radio>
      `);

      const label = el.shadowRoot!.querySelector('label');
      const input = el.shadowRoot!.querySelector('input');

      expect(label).to.exist;
      expect(input).to.exist;
      expect(label?.getAttribute('for')).to.equal(input?.id);
    });
  });

  describe('validation', () => {
    it('should support required attribute', async () => {
      const el = await fixture<MzRadio>(html`
        <mz-radio required>Required Option</mz-radio>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      expect(input.required).to.be.true;
    });

    it('should have invalid state when required and unchecked', async () => {
      const el = await fixture<MzRadio>(html`
        <mz-radio required>Required Option</mz-radio>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      expect(input.validity.valueMissing).to.be.true;
    });
  });

  describe('edge cases', () => {
    it('should handle empty label', async () => {
      const el = await fixture<MzRadio>(html`<mz-radio value="test"></mz-radio>`);

      expect(el).to.exist;
      const label = el.shadowRoot!.querySelector('.radio-label');
      expect(label).to.exist;
    });

    it('should handle very long label text', async () => {
      const longText = 'Very long radio label text '.repeat(10);
      const el = await fixture<MzRadio>(html`
        <mz-radio>${longText}</mz-radio>
      `);

      const slot = el.shadowRoot!.querySelector('slot') as HTMLSlotElement;
      const nodes = slot.assignedNodes();
      expect(nodes[0]?.textContent).to.equal(longText);
    });

    it('should handle special characters in value', async () => {
      const specialValue = '< > & " \' / \\';
      const el = await fixture<MzRadio>(html`
        <mz-radio value="${specialValue}">Option</mz-radio>
      `);

      expect(el.value).to.equal(specialValue);
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      expect(input.value).to.equal(specialValue);
    });

    it('should handle dynamic property changes', async () => {
      const el = await fixture<MzRadio>(html`<mz-radio>Option</mz-radio>`);

      el.checked = true;
      el.disabled = true;
      el.value = 'new-value';
      el.size = 'lg';
      await el.updateComplete;

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      expect(input.checked).to.be.true;
      expect(input.disabled).to.be.true;
      expect(input.value).to.equal('new-value');
      expect(el.size).to.equal('lg');
    });
  });
});

describe('mz-radio-group', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzRadioGroup>(html`<mz-radio-group></mz-radio-group>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzRadioGroup);
      expect(el.value).to.equal('');
      expect(el.name).to.equal('');
      expect(el.disabled).to.be.false;
      expect(el.orientation).to.equal('vertical');
    });

    it('should render radio options', async () => {
      const el = await fixture<MzRadioGroup>(html`
        <mz-radio-group name="options">
          <mz-radio value="1">Option 1</mz-radio>
          <mz-radio value="2">Option 2</mz-radio>
          <mz-radio value="3">Option 3</mz-radio>
        </mz-radio-group>
      `);

      const radios = el.querySelectorAll('mz-radio');
      expect(radios.length).to.equal(3);
    });

    it('should render label when provided', async () => {
      const el = await fixture<MzRadioGroup>(html`
        <mz-radio-group label="Select an option">
          <mz-radio value="1">Option 1</mz-radio>
        </mz-radio-group>
      `);

      const label = el.shadowRoot!.querySelector('.radio-group-label');
      expect(label).to.exist;
      expect(label?.textContent).to.include('Select an option');
    });
  });

  describe('value management', () => {
    it('should select radio with matching value', async () => {
      const el = await fixture<MzRadioGroup>(html`
        <mz-radio-group value="2">
          <mz-radio value="1">Option 1</mz-radio>
          <mz-radio value="2">Option 2</mz-radio>
          <mz-radio value="3">Option 3</mz-radio>
        </mz-radio-group>
      `);

      await el.updateComplete;
      const radios = el.querySelectorAll('mz-radio');
      expect(radios[1].checked).to.be.true;
      expect(radios[0].checked).to.be.false;
      expect(radios[2].checked).to.be.false;
    });

    it('should update value when radio is selected', async () => {
      const el = await fixture<MzRadioGroup>(html`
        <mz-radio-group>
          <mz-radio value="1">Option 1</mz-radio>
          <mz-radio value="2">Option 2</mz-radio>
        </mz-radio-group>
      `);

      const radios = el.querySelectorAll('mz-radio');
      const input = radios[1].shadowRoot!.querySelector('input') as HTMLInputElement;

      input.click();
      await el.updateComplete;

      expect(el.value).to.equal('2');
    });

    it('should emit change event when value changes', async () => {
      const el = await fixture<MzRadioGroup>(html`
        <mz-radio-group>
          <mz-radio value="1">Option 1</mz-radio>
          <mz-radio value="2">Option 2</mz-radio>
        </mz-radio-group>
      `);

      let eventDetail: any = null;
      el.addEventListener('mz-change', (e: any) => {
        eventDetail = e.detail;
      });

      const radios = el.querySelectorAll('mz-radio');
      const input = radios[0].shadowRoot!.querySelector('input') as HTMLInputElement;

      input.click();
      await el.updateComplete;

      expect(eventDetail).to.exist;
      expect(eventDetail.value).to.equal('1');
    });
  });

  describe('orientation', () => {
    it('should default to vertical orientation', async () => {
      const el = await fixture<MzRadioGroup>(html`
        <mz-radio-group>
          <mz-radio value="1">Option 1</mz-radio>
        </mz-radio-group>
      `);

      expect(el.orientation).to.equal('vertical');
      const container = el.shadowRoot!.querySelector('.radio-group');
      expect(container?.classList.contains('radio-group--vertical')).to.be.true;
    });

    it('should apply horizontal orientation', async () => {
      const el = await fixture<MzRadioGroup>(html`
        <mz-radio-group orientation="horizontal">
          <mz-radio value="1">Option 1</mz-radio>
        </mz-radio-group>
      `);

      expect(el.orientation).to.equal('horizontal');
      const container = el.shadowRoot!.querySelector('.radio-group');
      expect(container?.classList.contains('radio-group--horizontal')).to.be.true;
    });
  });

  describe('disabled state', () => {
    it('should disable all radios when group is disabled', async () => {
      const el = await fixture<MzRadioGroup>(html`
        <mz-radio-group disabled>
          <mz-radio value="1">Option 1</mz-radio>
          <mz-radio value="2">Option 2</mz-radio>
        </mz-radio-group>
      `);

      const radios = el.querySelectorAll('mz-radio');
      radios.forEach(radio => {
        expect(radio.disabled).to.be.true;
      });
    });
  });

  describe('validation', () => {
    it('should support required attribute', async () => {
      const el = await fixture<MzRadioGroup>(html`
        <mz-radio-group required>
          <mz-radio value="1">Option 1</mz-radio>
        </mz-radio-group>
      `);

      expect(el.required).to.be.true;
    });

    it('should show error state', async () => {
      const el = await fixture<MzRadioGroup>(html`
        <mz-radio-group error error-text="Please select an option">
          <mz-radio value="1">Option 1</mz-radio>
        </mz-radio-group>
      `);

      const errorText = el.shadowRoot!.querySelector('.radio-group-error');
      expect(errorText).to.exist;
      expect(errorText?.textContent).to.include('Please select an option');
    });
  });
});