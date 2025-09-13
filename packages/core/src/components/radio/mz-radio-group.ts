import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-radio-group')
export class MzRadioGroup extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        color: var(--mz-color-neutral-900);
      }
    `
  ]
  @property({ type: String }) name = ''
  @property({ type: String }) value: string | null = null

  @property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;
  connectedCallback(): void {
    super.connectedCallback()
    this.addEventListener('radio-select', this.onSelect as EventListener)
  }
  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.removeEventListener('radio-select', this.onSelect as EventListener)
  }
  private onSelect = (e: CustomEvent<{ value: string }>) => {
    this.value = e.detail.value
    const radios = this.querySelectorAll('mz-radio') as NodeListOf<HTMLElement & { checked: boolean; value: string }>
    radios.forEach(r => (r.checked = r.value === this.value))
    this.dispatchEvent(new Event('change', { bubbles: true }))
  }
  
  private handleKeyDown(e: KeyboardEvent) {
    const radios = this.querySelectorAll('mz-radio');
    const currentIndex = Array.from(radios).findIndex(r => r.checked);
    let newIndex = currentIndex;

    switch(e.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        newIndex = currentIndex > 0 ? currentIndex - 1 : radios.length - 1;
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        newIndex = currentIndex < radios.length - 1 ? currentIndex + 1 : 0;
        break;
      default:
        return;
    }

    if (newIndex !== currentIndex) {
      e.preventDefault();
      radios[newIndex].checked = true;
      radios[newIndex].focus();
    }
  }

  render(){
    return html`
      <div
        role="radiogroup"
        aria-label=${this.ariaLabel || ''}
        aria-describedby=${this.ariaDescribedBy || ''}
        @keydown=${this.handleKeyDown}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-radio-group': MzRadioGroup } }

