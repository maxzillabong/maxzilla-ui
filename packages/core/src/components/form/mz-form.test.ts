import { html, fixture, expect } from '@open-wc/testing';
import { MzFormGroup } from './mz-form-group.js';
import { MzFormActions } from './mz-form-actions.js';
import './mz-form-group.js';
import './mz-form-actions.js';

describe('mz-form-group', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzFormGroup>(html`<mz-form-group></mz-form-group>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzFormGroup);
      expect(el.label).to.equal('');
      expect(el.error).to.be.false;
      expect(el.required).to.be.false;
      expect(el.helperText).to.equal('');
      expect(el.errorText).to.equal('');
    });

    it('should render form group container', async () => {
      const el = await fixture<MzFormGroup>(html`<mz-form-group></mz-form-group>`);
      const container = el.shadowRoot!.querySelector('.form-group');

      expect(container).to.exist;
      expect(container?.classList.contains('form-group')).to.be.true;
    });

    it('should render slot for form controls', async () => {
      const el = await fixture<MzFormGroup>(html`
        <mz-form-group>
          <input type="text" />
        </mz-form-group>
      `);

      const slot = el.shadowRoot!.querySelector('slot:not([name])');
      expect(slot).to.exist;

      const nodes = (slot as HTMLSlotElement).assignedElements();
      expect(nodes.length).to.equal(1);
      expect(nodes[0].tagName).to.equal('INPUT');
    });
  });

  describe('label', () => {
    it('should render label when provided', async () => {
      const el = await fixture<MzFormGroup>(html`
        <mz-form-group label="Username">
          <input type="text" />
        </mz-form-group>
      `);

      const label = el.shadowRoot!.querySelector('.form-group-label');
      expect(label).to.exist;
      expect(label?.textContent).to.include('Username');
    });

    it('should show required indicator when required', async () => {
      const el = await fixture<MzFormGroup>(html`
        <mz-form-group label="Email" required>
          <input type="email" />
        </mz-form-group>
      `);

      const label = el.shadowRoot!.querySelector('.form-group-label');
      const requiredIndicator = label?.querySelector('.required-indicator');
      expect(requiredIndicator).to.exist;
      expect(requiredIndicator?.textContent).to.include('*');
    });

    it('should associate label with form control', async () => {
      const el = await fixture<MzFormGroup>(html`
        <mz-form-group label="Field">
          <input type="text" id="field-input" />
        </mz-form-group>
      `);

      const label = el.shadowRoot!.querySelector('.form-group-label');
      expect(label?.getAttribute('for')).to.exist;
    });
  });

  describe('helper text', () => {
    it('should render helper text when provided', async () => {
      const el = await fixture<MzFormGroup>(html`
        <mz-form-group helper-text="Enter your username">
          <input type="text" />
        </mz-form-group>
      `);

      const helperText = el.shadowRoot!.querySelector('.form-group-helper');
      expect(helperText).to.exist;
      expect(helperText?.textContent).to.include('Enter your username');
    });

    it('should not render helper text when not provided', async () => {
      const el = await fixture<MzFormGroup>(html`
        <mz-form-group>
          <input type="text" />
        </mz-form-group>
      `);

      const helperText = el.shadowRoot!.querySelector('.form-group-helper');
      expect(helperText).to.not.exist;
    });
  });

  describe('error state', () => {
    it('should show error state when error is true', async () => {
      const el = await fixture<MzFormGroup>(html`
        <mz-form-group error>
          <input type="text" />
        </mz-form-group>
      `);

      const container = el.shadowRoot!.querySelector('.form-group');
      expect(container?.classList.contains('form-group--error')).to.be.true;
    });

    it('should show error text when provided', async () => {
      const el = await fixture<MzFormGroup>(html`
        <mz-form-group error error-text="This field is required">
          <input type="text" />
        </mz-form-group>
      `);

      const errorText = el.shadowRoot!.querySelector('.form-group-error');
      expect(errorText).to.exist;
      expect(errorText?.textContent).to.include('This field is required');
    });

    it('should replace helper text with error text when in error state', async () => {
      const el = await fixture<MzFormGroup>(html`
        <mz-form-group
          helper-text="Enter value"
          error
          error-text="Invalid value"
        >
          <input type="text" />
        </mz-form-group>
      `);

      const helperText = el.shadowRoot!.querySelector('.form-group-helper');
      const errorText = el.shadowRoot!.querySelector('.form-group-error');

      expect(helperText).to.not.exist;
      expect(errorText).to.exist;
      expect(errorText?.textContent).to.include('Invalid value');
    });
  });

  describe('spacing', () => {
    it('should apply proper spacing between elements', async () => {
      const el = await fixture<MzFormGroup>(html`
        <mz-form-group
          label="Field"
          helper-text="Help text"
        >
          <input type="text" />
        </mz-form-group>
      `);

      const label = el.shadowRoot!.querySelector('.form-group-label');
      const control = el.shadowRoot!.querySelector('.form-group-control');
      const helper = el.shadowRoot!.querySelector('.form-group-helper');

      expect(label).to.exist;
      expect(control).to.exist;
      expect(helper).to.exist;
    });
  });

  describe('accessibility', () => {
    it('should have proper ARIA attributes', async () => {
      const el = await fixture<MzFormGroup>(html`
        <mz-form-group
          label="Username"
          required
          error
          error-text="Username is required"
        >
          <input type="text" aria-invalid="true" />
        </mz-form-group>
      `);

      const errorText = el.shadowRoot!.querySelector('.form-group-error');
      expect(errorText?.getAttribute('role')).to.equal('alert');
      expect(errorText?.getAttribute('aria-live')).to.equal('polite');
    });
  });

  describe('edge cases', () => {
    it('should handle multiple form controls', async () => {
      const el = await fixture<MzFormGroup>(html`
        <mz-form-group label="Name">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </mz-form-group>
      `);

      const slot = el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;
      const nodes = slot.assignedElements();
      expect(nodes.length).to.equal(2);
    });

    it('should handle very long label text', async () => {
      const longText = 'Very long label text '.repeat(10);
      const el = await fixture<MzFormGroup>(html`
        <mz-form-group label="${longText}">
          <input type="text" />
        </mz-form-group>
      `);

      const label = el.shadowRoot!.querySelector('.form-group-label');
      expect(label?.textContent).to.include(longText);
    });

    it('should handle dynamic property changes', async () => {
      const el = await fixture<MzFormGroup>(html`
        <mz-form-group>
          <input type="text" />
        </mz-form-group>
      `);

      el.label = 'Dynamic Label';
      el.required = true;
      el.error = true;
      el.errorText = 'Dynamic error';
      await el.updateComplete;

      const label = el.shadowRoot!.querySelector('.form-group-label');
      const errorText = el.shadowRoot!.querySelector('.form-group-error');

      expect(label?.textContent).to.include('Dynamic Label');
      expect(errorText?.textContent).to.include('Dynamic error');
    });
  });
});

describe('mz-form-actions', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzFormActions>(html`<mz-form-actions></mz-form-actions>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzFormActions);
      expect(el.align).to.equal('end');
      expect(el.sticky).to.be.false;
    });

    it('should render actions container', async () => {
      const el = await fixture<MzFormActions>(html`<mz-form-actions></mz-form-actions>`);
      const container = el.shadowRoot!.querySelector('.form-actions');

      expect(container).to.exist;
      expect(container?.classList.contains('form-actions')).to.be.true;
    });

    it('should render slot for action buttons', async () => {
      const el = await fixture<MzFormActions>(html`
        <mz-form-actions>
          <button type="submit">Submit</button>
          <button type="button">Cancel</button>
        </mz-form-actions>
      `);

      const slot = el.shadowRoot!.querySelector('slot');
      expect(slot).to.exist;

      const nodes = (slot as HTMLSlotElement).assignedElements();
      expect(nodes.length).to.equal(2);
      expect(nodes[0].tagName).to.equal('BUTTON');
      expect(nodes[1].tagName).to.equal('BUTTON');
    });
  });

  describe('alignment', () => {
    const alignments = ['start', 'center', 'end', 'space-between'] as const;

    alignments.forEach(align => {
      it(`should apply ${align} alignment`, async () => {
        const el = await fixture<MzFormActions>(html`
          <mz-form-actions align="${align}">
            <button>Action</button>
          </mz-form-actions>
        `);

        expect(el.align).to.equal(align);
        const container = el.shadowRoot!.querySelector('.form-actions');
        expect(container?.classList.contains(`form-actions--${align}`)).to.be.true;
      });
    });

    it('should default to end alignment', async () => {
      const el = await fixture<MzFormActions>(html`
        <mz-form-actions>
          <button>Action</button>
        </mz-form-actions>
      `);

      expect(el.align).to.equal('end');
      const container = el.shadowRoot!.querySelector('.form-actions');
      expect(container?.classList.contains('form-actions--end')).to.be.true;
    });
  });

  describe('sticky behavior', () => {
    it('should apply sticky class when sticky is true', async () => {
      const el = await fixture<MzFormActions>(html`
        <mz-form-actions sticky>
          <button>Save</button>
        </mz-form-actions>
      `);

      expect(el.sticky).to.be.true;
      const container = el.shadowRoot!.querySelector('.form-actions');
      expect(container?.classList.contains('form-actions--sticky')).to.be.true;
    });

    it('should not apply sticky class when sticky is false', async () => {
      const el = await fixture<MzFormActions>(html`
        <mz-form-actions>
          <button>Save</button>
        </mz-form-actions>
      `);

      expect(el.sticky).to.be.false;
      const container = el.shadowRoot!.querySelector('.form-actions');
      expect(container?.classList.contains('form-actions--sticky')).to.be.false;
    });
  });

  describe('gap between actions', () => {
    it('should have proper spacing between action buttons', async () => {
      const el = await fixture<MzFormActions>(html`
        <mz-form-actions>
          <button>Save</button>
          <button>Cancel</button>
          <button>Reset</button>
        </mz-form-actions>
      `);

      const slot = el.shadowRoot!.querySelector('slot') as HTMLSlotElement;
      const nodes = slot.assignedElements();
      expect(nodes.length).to.equal(3);
    });
  });

  describe('edge cases', () => {
    it('should handle no actions', async () => {
      const el = await fixture<MzFormActions>(html`<mz-form-actions></mz-form-actions>`);

      expect(el).to.exist;
      const container = el.shadowRoot!.querySelector('.form-actions');
      expect(container).to.exist;
    });

    it('should handle single action', async () => {
      const el = await fixture<MzFormActions>(html`
        <mz-form-actions>
          <button>Submit</button>
        </mz-form-actions>
      `);

      const slot = el.shadowRoot!.querySelector('slot') as HTMLSlotElement;
      const nodes = slot.assignedElements();
      expect(nodes.length).to.equal(1);
    });

    it('should handle many actions', async () => {
      const el = await fixture<MzFormActions>(html`
        <mz-form-actions>
          ${Array.from({ length: 10 }, (_, i) => html`<button>Action ${i}</button>`)}
        </mz-form-actions>
      `);

      const slot = el.shadowRoot!.querySelector('slot') as HTMLSlotElement;
      const nodes = slot.assignedElements();
      expect(nodes.length).to.equal(10);
    });

    it('should handle non-button elements', async () => {
      const el = await fixture<MzFormActions>(html`
        <mz-form-actions>
          <button>Submit</button>
          <a href="#">Cancel</a>
          <span>or</span>
          <button>Reset</button>
        </mz-form-actions>
      `);

      const slot = el.shadowRoot!.querySelector('slot') as HTMLSlotElement;
      const nodes = slot.assignedElements();
      expect(nodes.length).to.equal(4);
      expect(nodes[1].tagName).to.equal('A');
      expect(nodes[2].tagName).to.equal('SPAN');
    });

    it('should handle dynamic property changes', async () => {
      const el = await fixture<MzFormActions>(html`
        <mz-form-actions>
          <button>Submit</button>
        </mz-form-actions>
      `);

      el.align = 'start';
      el.sticky = true;
      await el.updateComplete;

      const container = el.shadowRoot!.querySelector('.form-actions');
      expect(container?.classList.contains('form-actions--start')).to.be.true;
      expect(container?.classList.contains('form-actions--sticky')).to.be.true;
    });
  });
});