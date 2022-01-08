import { html, css, LitElement } from 'lit'

export class LitComponent extends LitElement {
  static styles = css`p { color: red; font-weight: 700; margin: 1rem; }`
  static properties = {
    name: { type: String },
    age: { type: Number }
  }

  constructor () {
    super()
    this.name = 'World'
  }

  render () {
    return this.age > 0 ? html`<p>Hello ${this.name}! I'm guessing your age is ${this.age}</p>` : html`<p>Hello ${this.name}! Guessing your age...</p>`
  }
}
customElements.define('lit-component', LitComponent)
