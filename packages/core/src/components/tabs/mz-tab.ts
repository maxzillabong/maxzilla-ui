import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-tab')
export class MzTab extends LitElement {
  static styles = [baseStyles, css`:host{display:block}`]
  @property({type:String}) label = 'Tab'
  @property({type:Boolean, reflect:true}) active = false
  render(){ return this.active ? html`<div role="tabpanel"><slot></slot></div>` : html`` }
}

declare global { interface HTMLElementTagNameMap { 'mz-tab': MzTab } }

