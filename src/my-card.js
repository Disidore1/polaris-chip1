import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
    
  }

  constructor() {
    super();
    this.title = "Wanted";
    this.subtitle = "DEAD OR ALIVE";
    this.name = "CHOPPER";
    this.bounty = "$1000";
    this.img = "https://www.thepopverse.com/_next/image?url=https%3A%2F%2Fmedia.thepopverse.com%2Fmedia%2Ftony-tony-chopper-from-one-piece-t0mkr5fnn5tevppawlpiwuqtca.jpg&w=1280&q=75";
    this.bg = "#D8C4A8";
    this.fancy = false;
  }

  static get styles() {
  return css`
    :host {
      display: inline-block;
    }

    .card {
      width: 200px;
      padding: 16px;
      border: 3px solid black;
      border-radius: 8px;
      text-align: center;
      background-color: var(--bg, #D8C4A8);
      box-sizing: border-box;
    }

    img {
      width: 100%;
      height: auto;
      border: 2px solid black;
      box-sizing: border-box;
    }
  `;
}


  render() {
   return html`
    <div class="card" style="--bg:${this.bg}">
      <h2 class="card-title">${this.title}</h2>
      <img src="${this.img}">
      <p>${this.subtitle}</p>
      <h3>${this.name}</h3>
      <p>${this.bounty}</p>
    </div>
  `;
  }

  static get properties() {
    return {
      title: { type: String },
      img: { type: String },
      subtitle: { type: String },
      name: { type: String },
      bounty: { type: String },
      bg: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
