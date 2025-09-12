import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-pagination')
export class MzPagination extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host{display:flex;align-items:center;gap:.25rem;color:var(--mz-color-neutral-900)}
      button{min-width:2rem;height:2rem;border:1px solid var(--mz-color-neutral-300);background:var(--mz-color-neutral-0);border-radius:.375rem;cursor:pointer}
      button[disabled]{opacity:.5;cursor:not-allowed}
      .active{background:var(--mz-color-primary-500);color:var(--mz-color-neutral-0);border-color:var(--mz-color-primary-500)}
    `
  ]
  @property({type:Number}) total = 0
  @property({type:Number, attribute:'page-size'}) pageSize = 10
  @property({type:Number}) current = 1

  private pages(){ return Math.max(1, Math.ceil(this.total/this.pageSize)) }
  private setPage(p:number){ const max=this.pages(); const np=Math.min(max, Math.max(1,p)); if(np!==this.current){ this.current=np; this.dispatchEvent(new CustomEvent('page-change',{detail:{page:np},bubbles:true})) } }
  render(){
    const max = this.pages(); const items = [] as any[]
    for(let i=1;i<=Math.min(max,7);i++){ items.push(html`<button class=${i===this.current?'active':''} @click=${()=>this.setPage(i)}>${i}</button>`) }
    return html`
      <button @click=${()=>this.setPage(this.current-1)} ?disabled=${this.current<=1} aria-label="Previous">‹</button>
      ${items}
      <button @click=${()=>this.setPage(this.current+1)} ?disabled=${this.current>=max} aria-label="Next">›</button>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-pagination': MzPagination } }

