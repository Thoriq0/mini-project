const template = document.createElement("template");
template.innerHTML = `
	<style>
		#footer{
			background-color: #000;
		 	color: #ffff;
			text-align: center;
			max-width: 800px;
			height: 80px;
			line-height: 80px;
			margin: 0 auto;
			// border: 1px solid black;
			// border-top: none;
		}
	</style>
	<div id="footer">
		<h6>copyright@2024</h6>
		<!-- <slot name="created"></slot> -->
	</div>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    // let div = document.createElement('div');
    // div.textContent = 'coba';
    // shadowRoot.append(div);
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}
customElements.define("my-footer", Footer);
