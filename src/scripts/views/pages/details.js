import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from "../../data/restaurant-db";
import { createResturantDetailTemplate } from "../templates/template-creator";
import FavButtonInitiator from '../../utils/fav-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="loader" class="loader"></div>
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const loader = document.getElementById('loader');
    const restaurantContainer = document.querySelector('#restaurant');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    loader.style.display = 'block';
    likeButtonContainer.style.display = 'none';

    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);

    restaurantContainer.innerHTML = createResturantDetailTemplate(restaurant);
    loader.style.display = 'none'; 
    likeButtonContainer.style.display = 'block';

    FavButtonInitiator.init({
      likeButtonContainer,
      restaurant: { 
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        rating: restaurant.restaurant.rating,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
      },
    });

    // DEBUG
    // console.log(restaurant);
    // console.log(url);
  },
};

export default Detail;
