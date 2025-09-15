import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-form')
export class MzForm extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        /* Form wrapper - inherits spacing from parent */
      }

      form {
        width: 100%;
      }
    `
  ]

  @property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;
  @property({ type: String, attribute: 'aria-labelledby' }) ariaLabelledBy?: string;

  private handleSubmit = (event: Event) => {
    event.preventDefault();

    // Dispatch submit event with form data
    const formData = new FormData(event.target as HTMLFormElement);

    this.dispatchEvent(
      new CustomEvent('mz-submit', {
        detail: {
          formData: formData,
          originalEvent: event
        },
        bubbles: true,
        composed: true,
      })
    );

    // Also dispatch legacy event for backwards compatibility
    this.dispatchEvent(new Event('submit', { bubbles: true }));
  };

  private handleReset = (event: Event) => {
    this.dispatchEvent(
      new CustomEvent('mz-reset', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  };

  private handleInvalid = (event: Event) => {
    this.dispatchEvent(
      new CustomEvent('mz-invalid', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  };

  render() {
    return html`
      <form
        role="form"
        aria-label=${this.ariaLabel || ''}
        aria-labelledby=${this.ariaLabelledBy || ''}
        @submit=${this.handleSubmit}
        @reset=${this.handleReset}
        @invalid=${this.handleInvalid}
      >
        <slot></slot>
      </form>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-form': MzForm } }

