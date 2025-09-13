import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-radio')
export class MzRadio extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
        color: var(--mz-color-neutral-900);
      }

      .root {
        display: inline-flex;
        align-items: center;
        gap: var(--mz-space-2);
        cursor: pointer;
      }

      .outer {
        width: var(--mz-space-4); /* 1.1rem -> 1rem (closest available token) */
        height: var(--mz-space-4); /* 1.1rem -> 1rem (closest available token) */
        border: var(--mz-space-px) solid var(--mz-color-neutral-300); /* 1px */
        border-radius: var(--mz-radius-full); /* 9999px */
        display: grid;
        place-items: center;
        background: var(--mz-color-neutral-0);
      }

      .dot {
        width: var(--mz-space-2); /* 0.55rem -> 0.5rem (closest available token) */
        height: var(--mz-space-2); /* 0.55rem -> 0.5rem (closest available token) */
        border-radius: var(--mz-radius-full); /* 9999px */
        background: var(--mz-color-primary-500);
        transform: scale(0);
        transition: transform var(--mz-transition-normal);
      }

      .checked .dot {
        transform: scale(1);
      }
    `
  ]
  @property({type:String}) value = ''
  @property({type:Boolean, reflect:true}) checked = false
  @property({type:Boolean}) disabled = false

  private select(){ if(this.disabled) return; this.checked=true; this.dispatchEvent(new CustomEvent('radio-select',{detail:{value:this.value},bubbles:true})) }
  private onKey(e:KeyboardEvent){ if(e.key===' '||e.key==='Enter'){e.preventDefault();this.select()} }

  render(){
    return html`
      <div class="root ${this.checked?'checked':''}" role="radio" aria-checked=${this.checked} tabindex=${this.disabled?-1:0}
        @click=${this.select} @keydown=${this.onKey} aria-disabled=${this.disabled}>
        <div class="outer"><div class="dot"></div></div>
        <slot></slot>
      </div>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-radio': MzRadio } }

