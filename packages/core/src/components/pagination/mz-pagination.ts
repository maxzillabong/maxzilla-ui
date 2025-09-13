import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-pagination')
export class MzPagination extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: flex;
        align-items: center;
        gap: var(--mz-space-1); /* was .25rem */
        color: var(--mz-color-neutral-900);
      }

      button {
        min-width: var(--mz-space-8); /* was 2rem */
        height: var(--mz-space-8); /* was 2rem */
        border: 1px solid var(--mz-color-neutral-300);
        background: var(--mz-color-neutral-0);
        border-radius: var(--mz-radius-md); /* was .375rem */
        cursor: pointer;
        font-size: var(--mz-text-sm); /* adding consistent text size */
        font-weight: var(--mz-font-medium); /* adding font weight for clarity */
        line-height: var(--mz-leading-normal); /* adding consistent line height */
        letter-spacing: var(--mz-tracking-normal); /* adding consistent letter spacing */
        transition: var(--mz-transition-fast); /* adding smooth transitions */
      }

      button:hover:not([disabled]) {
        background: var(--mz-color-neutral-50);
        border-color: var(--mz-color-neutral-400);
      }

      button:focus-visible {
        outline: 2px solid var(--mz-color-primary-500);
        outline-offset: var(--mz-space-0-5); /* was 2px, using 0.125rem */
      }

      button[disabled] {
        opacity: 0.5; /* keeping as is - no specific token for opacity */
        cursor: not-allowed;
      }

      .active {
        background: var(--mz-color-primary-500);
        color: var(--mz-color-neutral-0);
        border-color: var(--mz-color-primary-500);
        font-weight: var(--mz-font-semibold); /* making active state more prominent */
      }

      .active:hover {
        background: var(--mz-color-primary-600);
        border-color: var(--mz-color-primary-600);
      }
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

