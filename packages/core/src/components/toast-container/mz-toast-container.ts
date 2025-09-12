import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

type ToastItem = { id: number; message: string; variant?: 'info'|'success'|'warning'|'error'; duration: number }

@customElement('mz-toast-container')
export class MzToastContainer extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host{position:fixed;display:block;z-index:50}
      :host([position="top-right"]){right:1rem;top:1rem}
      :host([position="top-left"]){left:1rem;top:1rem}
      :host([position="bottom-right"]){right:1rem;bottom:1rem}
      :host([position="bottom-left"]){left:1rem;bottom:1rem}
      .item{margin-bottom:.5rem}
    `
  ]
  @state() private _items: ToastItem[] = []
  @property({type:Number}) duration = 2500
  @property({type:String, reflect:true}) position: 'top-left'|'top-right'|'bottom-left'|'bottom-right' = 'top-right'

  public show(message: string, variant: ToastItem['variant'] = 'info', duration = this.duration){
    const id = Date.now()+Math.random()
    this._items = [...this._items, { id, message, variant, duration }]
    setTimeout(()=>{ this._items = this._items.filter(i=>i.id!==id) }, duration)
  }

  render(){
    return html`${this._items.map(i=> html`<div class="item"><mz-alert variant=${i.variant}>${i.message}</mz-alert></div>`)} `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-toast-container': MzToastContainer } }
