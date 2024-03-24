const template = document.createElement("template");
template.innerHTML = `
	<style>
		.navbar {
			background-color: #333;
			color: #fff;
			padding: 10px 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: fixed;
			width: 100%;
			top: 0;
            z-index: 800;
		}
		.logo {
			font-size: 24px;
			font-weight: bold;
			margin-right: auto;
		}

		@media (max-width: 768px) {
			.navbar {
				flex-direction: column;
				align-items: center;
			}
			.nav-links {
				margin-top: 10px;
			}
			.nav-link {
				margin-right: 0;
				margin-bottom: 10px;
			}
		}
	</style>
	<nav class="navbar">
		<h3 class="logo">App Notes</h3>
	</nav>
`;

class Navbar extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("my-navbar", Navbar);
