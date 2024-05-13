import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

// Custome-Element
// eslint-disable-next-line no-unused-vars
import CustomButton from '../scripts/views/templates/custome-button';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// SKIP
// const skip = document.querySelector('.skip-link');

// skip.addEventListener('click', (event) => {
//   event.preventDefault();
//   const hash = window.location.hash;

//   const targetId = hash !== '' && hash !== '#/home' ? '#other' : '#skip';
//   const targetElement = document.querySelector(targetId);
  
//   if (targetElement) {
//     targetElement.scrollIntoView({ behavior: 'smooth' });
//     targetElement.focus();
//   }

// });
