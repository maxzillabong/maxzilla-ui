import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-tabs')
export class MzTabs extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host{display:block;color:var(--mz-color-neutral-900)}
      .list{display:flex;gap:var(--mz-space-2);border-bottom:1px solid var(--mz-color-neutral-200);}
      .btn{padding:.5rem .75rem;border-radius:.5rem;cursor:pointer;background:transparent;border:0;color:inherit}
      .btn[aria-selected="true"]{background:var(--mz-color-neutral-100);font-weight:600}
      .panels{padding:var(--mz-space-4) 0}
    `
  ]
  @state() private _labels: string[] = []
  @state() private _index = 0
  @property({type:Number}) initial = 0

  firstUpdated(){ this._collect(); this._index=this.initial }
  private _collect(){ this._labels = Array.from(this.querySelectorAll('mz-tab')).map(t=>t.getAttribute('label')||'Tab') }
  private _select(i:number){ this._index=i; this._updatePanels() }
  private _updatePanels(){ const tabs = this.querySelectorAll('mz-tab') as NodeListOf<HTMLElement & { active:boolean }>; tabs.forEach((t,i)=> t.active = i===this._index) }

  render(){
    return html`
      <div class="list" role="tablist">
        ${this._labels.map((l,i)=> html`<button class="btn" role="tab" aria-selected=${String(i===this._index)} @click=${()=>this._select(i)}>${l}</button>`)}
      </div>
      <div class="panels"><slot @slotchange=${()=>{this._collect(); this._updatePanels()}}></slot></div>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-tabs': MzTabs } }

