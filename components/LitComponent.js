import { html, css, LitElement } from 'lit'

export class LitComponent extends LitElement {
  static styles = css`p { color: red; font-weight: 700; margin: 1rem; }`
  static properties = {
    name: { type: String }
  }

  constructor () {
    super()
    this.name = 'World'
  }

  render () {
    return html`<p>Hello ${this.name}!</p>`
  }
}
customElements.define('lit-component', LitComponent)
