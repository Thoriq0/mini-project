class CustomButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'closed'});

    const style = document.createElement('style');
    style.textContent = `
      button {
        background-color: #0CCA4A;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        font-weight: 600;
        border-radius: 0.3rem;
        cursor: pointer;
        width: 90%;
        margin: 5px auto 15px auto;
        min-width: 44px;
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
      }
    `;
    shadow.appendChild(style);

    const button = document.createElement('button');
    button.textContent = 'Read More';

    button.classList.add('custom-button');

    // button.addEventListener('click', () => {
    //   alert('Tombol diklik!');
    // });

    shadow.appendChild(button);
  }
}

customElements.define('custom-button', CustomButton);
