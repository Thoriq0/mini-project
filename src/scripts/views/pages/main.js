import RestaurantDbSource from "../../data/restaurant-db";
import { createResturantItemTemplate } from "../templates/template-creator";

const Main = {
  async render() {
    return `
      <a href="#restaurants" class="skip-link">Skip To Content</a>
      <div class="content">
      <div class="loader" id="loader"></div>

      <div class="hero" tabindex="0">
        <article>
          <div>
            <h2>Restoran.</h2>
            <br>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis deleniti, ipsa incidunt aspernatur, temporibus molestiae suscipit eius iusto provident facilis ex laborum veniam hic commodi ullam odio laboriosam eaque ipsam.</p>
          </div>
        </article>
      </div>
        <h2 class="content__heading" style="text-align: center; font-weight: bold" tabindex="0">Daftar Restoran</h2>
        <div id="restaurants" class="restaurants">
        
        </div>
      </div>

    `;
  },

  async afterRender() {
    const loader = document.getElementById('loader');
    const hero = document.querySelector('.hero');
    const heading = document.querySelector('.content__heading');

    heading.style.display = 'none';
    hero.style.display = 'none';
    loader.style.display = 'block';

    await new Promise(resolve => setTimeout(resolve, 1000));

    const restaurants = await RestaurantDbSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createResturantItemTemplate(restaurant);
    });

    loader.style.display = 'none';
    hero.style.display = 'block';
    heading.style.display = 'block';
  },
};

export default Main;