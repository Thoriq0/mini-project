import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createResturantItemTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
      <div class="content" id="other">
        <h2 class="content__heading">Favorited Restaurants</h2>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createResturantItemTemplate(restaurant);
    });

  },
};

export default Favorite;