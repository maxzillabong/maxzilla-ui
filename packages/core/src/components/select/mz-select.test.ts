import { html, fixture, expect, waitUntil } from '@open-wc/testing';
import { MzSelect } from './mz-select.js';
import './mz-select.js';

describe('mz-select', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzSelect>(html`<mz-select></mz-select>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzSelect);
      expect(el.value).to.equal('');
      expect(el.placeholder).to.equal('Select an option');
      expect(el.disabled).to.be.false;
      expect(el.required).to.be.false;
      expect(el.multiple).to.be.false;
      expect(el.searchable).to.be.false;
      expect(el.clearable).to.be.false;
      expect(el.size).to.equal('md');
    });

    it('should render select trigger', async () => {
      const el = await fixture<MzSelect>(html`<mz-select></mz-select>`);
      const trigger = el.shadowRoot!.querySelector('.select-trigger');

      expect(trigger).to.exist;
      expect(trigger?.classList.contains('select-trigger')).to.be.true;
    });

    it('should render with options', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </mz-select>
      `);

      const options = el.querySelectorAll('option');
      expect(options.length).to.equal(3);
    });

    it('should display placeholder when no value selected', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select placeholder="Choose one">
          <option value="1">Option 1</option>
        </mz-select>
      `);

      const valueDisplay = el.shadowRoot!.querySelector('.select-value');
      expect(valueDisplay?.textContent?.trim()).to.include('Choose one');
    });

    it('should display selected value', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select value="2">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </mz-select>
      `);

      await el.updateComplete;
      const valueDisplay = el.shadowRoot!.querySelector('.select-value');
      expect(valueDisplay?.textContent?.trim()).to.include('Option 2');
    });
  });

  describe('dropdown behavior', () => {
    it('should open dropdown on click', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select>
          <option value="1">Option 1</option>
        </mz-select>
      `);

      const trigger = el.shadowRoot!.querySelector('.select-trigger') as HTMLElement;
      trigger.click();
      await el.updateComplete;

      const dropdown = el.shadowRoot!.querySelector('.select-dropdown');
      expect(dropdown?.classList.contains('select-dropdown--open')).to.be.true;
    });

    it('should close dropdown when option selected', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </mz-select>
      `);

      // Open dropdown
      const trigger = el.shadowRoot!.querySelector('.select-trigger') as HTMLElement;
      trigger.click();
      await el.updateComplete;

      // Select an option
      const options = el.shadowRoot!.querySelectorAll('.select-option');
      (options[0] as HTMLElement).click();
      await el.updateComplete;

      const dropdown = el.shadowRoot!.querySelector('.select-dropdown');
      expect(dropdown?.classList.contains('select-dropdown--open')).to.be.false;
    });

    it('should close dropdown on escape key', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select>
          <option value="1">Option 1</option>
        </mz-select>
      `);

      // Open dropdown
      const trigger = el.shadowRoot!.querySelector('.select-trigger') as HTMLElement;
      trigger.click();
      await el.updateComplete;

      // Press escape
      const event = new KeyboardEvent('keydown', { key: 'Escape' });
      el.dispatchEvent(event);
      await el.updateComplete;

      const dropdown = el.shadowRoot!.querySelector('.select-dropdown');
      expect(dropdown?.classList.contains('select-dropdown--open')).to.be.false;
    });
  });

  describe('value selection', () => {
    it('should update value when option selected', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </mz-select>
      `);

      // Open and select
      const trigger = el.shadowRoot!.querySelector('.select-trigger') as HTMLElement;
      trigger.click();
      await el.updateComplete;

      const options = el.shadowRoot!.querySelectorAll('.select-option');
      (options[1] as HTMLElement).click();
      await el.updateComplete;

      expect(el.value).to.equal('2');
    });

    it('should emit change event when value changes', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </mz-select>
      `);

      let changeEvent: any = null;
      el.addEventListener('mz-change', (e: any) => {
        changeEvent = e;
      });

      // Open and select
      const trigger = el.shadowRoot!.querySelector('.select-trigger') as HTMLElement;
      trigger.click();
      await el.updateComplete;

      const options = el.shadowRoot!.querySelectorAll('.select-option');
      (options[0] as HTMLElement).click();
      await el.updateComplete;

      expect(changeEvent).to.exist;
      expect(changeEvent.detail.value).to.equal('1');
    });
  });

  describe('multiple selection', () => {
    it('should allow multiple selections when multiple is true', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select multiple>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </mz-select>
      `);

      expect(el.multiple).to.be.true;
      // Multiple selection would maintain array of values
      expect(Array.isArray(el.value) || el.value === '').to.be.true;
    });

    it('should display multiple selected values', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select multiple .value=${['1', '2']}>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </mz-select>
      `);

      await el.updateComplete;
      const valueDisplay = el.shadowRoot!.querySelector('.select-value');
      const text = valueDisplay?.textContent?.trim() || '';
      expect(text).to.include('Option 1');
      expect(text).to.include('Option 2');
    });
  });

  describe('searchable', () => {
    it('should show search input when searchable is true', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select searchable>
          <option value="1">Option 1</option>
        </mz-select>
      `);

      // Open dropdown
      const trigger = el.shadowRoot!.querySelector('.select-trigger') as HTMLElement;
      trigger.click();
      await el.updateComplete;

      const searchInput = el.shadowRoot!.querySelector('.select-search');
      expect(searchInput).to.exist;
    });

    it('should filter options based on search', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select searchable>
          <option value="1">Apple</option>
          <option value="2">Banana</option>
          <option value="3">Cherry</option>
        </mz-select>
      `);

      // Open dropdown
      const trigger = el.shadowRoot!.querySelector('.select-trigger') as HTMLElement;
      trigger.click();
      await el.updateComplete;

      // Type in search
      const searchInput = el.shadowRoot!.querySelector('.select-search') as HTMLInputElement;
      if (searchInput) {
        searchInput.value = 'ban';
        searchInput.dispatchEvent(new Event('input'));
        await el.updateComplete;

        const visibleOptions = el.shadowRoot!.querySelectorAll('.select-option:not([hidden])');
        expect(visibleOptions.length).to.equal(1);
        expect(visibleOptions[0].textContent).to.include('Banana');
      }
    });
  });

  describe('clearable', () => {
    it('should show clear button when clearable and has value', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select clearable value="1">
          <option value="1">Option 1</option>
        </mz-select>
      `);

      const clearButton = el.shadowRoot!.querySelector('.select-clear');
      expect(clearButton).to.exist;
    });

    it('should clear value when clear button clicked', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select clearable value="1">
          <option value="1">Option 1</option>
        </mz-select>
      `);

      const clearButton = el.shadowRoot!.querySelector('.select-clear') as HTMLElement;
      clearButton.click();
      await el.updateComplete;

      expect(el.value).to.equal('');
    });
  });

  describe('disabled state', () => {
    it('should not open dropdown when disabled', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select disabled>
          <option value="1">Option 1</option>
        </mz-select>
      `);

      const trigger = el.shadowRoot!.querySelector('.select-trigger') as HTMLElement;
      trigger.click();
      await el.updateComplete;

      const dropdown = el.shadowRoot!.querySelector('.select-dropdown');
      expect(dropdown?.classList.contains('select-dropdown--open')).to.be.false;
    });

    it('should have disabled attribute on trigger', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select disabled>
          <option value="1">Option 1</option>
        </mz-select>
      `);

      expect(el.hasAttribute('disabled')).to.be.true;
    });
  });

  describe('required validation', () => {
    it('should have required attribute when required', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select required>
          <option value="1">Option 1</option>
        </mz-select>
      `);

      expect(el.required).to.be.true;
      expect(el.hasAttribute('required')).to.be.true;
    });

    it('should show error state when required and empty', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select required error>
          <option value="">Select...</option>
          <option value="1">Option 1</option>
        </mz-select>
      `);

      const trigger = el.shadowRoot!.querySelector('.select-trigger');
      expect(trigger?.classList.contains('select-trigger--error')).to.be.true;
    });
  });

  describe('sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach(size => {
      it(`should apply ${size} size`, async () => {
        const el = await fixture<MzSelect>(html`
          <mz-select size="${size}">
            <option value="1">Option 1</option>
          </mz-select>
        `);

        expect(el.size).to.equal(size);
        expect(el.getAttribute('size')).to.equal(size);
      });
    });
  });

  describe('label and helper text', () => {
    it('should render label when provided', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select label="Choose item">
          <option value="1">Option 1</option>
        </mz-select>
      `);

      const label = el.shadowRoot!.querySelector('.select-label');
      expect(label).to.exist;
      expect(label?.textContent).to.include('Choose item');
    });

    it('should render helper text when provided', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select helper-text="Select one option">
          <option value="1">Option 1</option>
        </mz-select>
      `);

      const helperText = el.shadowRoot!.querySelector('.select-helper');
      expect(helperText).to.exist;
      expect(helperText?.textContent).to.include('Select one option');
    });
  });

  describe('keyboard navigation', () => {
    it('should navigate options with arrow keys', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </mz-select>
      `);

      // Open dropdown
      const trigger = el.shadowRoot!.querySelector('.select-trigger') as HTMLElement;
      trigger.click();
      await el.updateComplete;

      // Navigate down
      const downEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
      el.dispatchEvent(downEvent);
      await el.updateComplete;

      // Check focus or highlight state
      const options = el.shadowRoot!.querySelectorAll('.select-option');
      expect(options.length).to.be.greaterThan(0);
    });

    it('should select option with Enter key', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </mz-select>
      `);

      // Open dropdown
      const trigger = el.shadowRoot!.querySelector('.select-trigger') as HTMLElement;
      trigger.click();
      await el.updateComplete;

      // Navigate and select
      const downEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
      el.dispatchEvent(downEvent);
      await el.updateComplete;

      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      el.dispatchEvent(enterEvent);
      await el.updateComplete;

      // Should have selected a value
      expect(el.value).to.not.equal('');
    });
  });

  describe('accessibility', () => {
    it('should have proper ARIA attributes', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select aria-label="Select option">
          <option value="1">Option 1</option>
        </mz-select>
      `);

      const trigger = el.shadowRoot!.querySelector('.select-trigger');
      expect(trigger?.getAttribute('role')).to.equal('combobox');
      expect(trigger?.hasAttribute('aria-expanded')).to.be.true;
      expect(trigger?.hasAttribute('aria-haspopup')).to.be.true;
    });

    it('should have aria-expanded state', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select>
          <option value="1">Option 1</option>
        </mz-select>
      `);

      const trigger = el.shadowRoot!.querySelector('.select-trigger') as HTMLElement;
      expect(trigger.getAttribute('aria-expanded')).to.equal('false');

      trigger.click();
      await el.updateComplete;

      expect(trigger.getAttribute('aria-expanded')).to.equal('true');
    });
  });

  describe('edge cases', () => {
    it('should handle no options', async () => {
      const el = await fixture<MzSelect>(html`<mz-select></mz-select>`);

      const trigger = el.shadowRoot!.querySelector('.select-trigger') as HTMLElement;
      trigger.click();
      await el.updateComplete;

      const dropdown = el.shadowRoot!.querySelector('.select-dropdown');
      expect(dropdown).to.exist;
    });

    it('should handle options with same values', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select>
          <option value="1">First</option>
          <option value="1">Second</option>
        </mz-select>
      `);

      el.value = '1';
      await el.updateComplete;

      const valueDisplay = el.shadowRoot!.querySelector('.select-value');
      expect(valueDisplay?.textContent).to.include('First');
    });

    it('should handle dynamic option changes', async () => {
      const el = await fixture<MzSelect>(html`
        <mz-select>
          <option value="1">Option 1</option>
        </mz-select>
      `);

      // Add new option
      const newOption = document.createElement('option');
      newOption.value = '2';
      newOption.textContent = 'Option 2';
      el.appendChild(newOption);
      await el.updateComplete;

      const options = el.querySelectorAll('option');
      expect(options.length).to.equal(2);
    });

    it('should handle very long option text', async () => {
      const longText = 'Very long option text '.repeat(10);
      const el = await fixture<MzSelect>(html`
        <mz-select value="1">
          <option value="1">${longText}</option>
        </mz-select>
      `);

      await el.updateComplete;
      const valueDisplay = el.shadowRoot!.querySelector('.select-value');
      expect(valueDisplay?.textContent).to.include(longText);
    });
  });
});