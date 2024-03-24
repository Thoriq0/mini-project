const template = document.createElement("template");
template.innerHTML = `
    <style>
        #head{
            background-color: #3498db;
            color: #fff;
            text-align: center;
            padding: 20px;
        }
    </style>
    <div id="head">
        <h1>Daily Notes</h1>
    </div>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}
customElements.define("my-head", Header);
