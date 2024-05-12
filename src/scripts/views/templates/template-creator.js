import CONFIG from '../../globals/config';

const createResturantDetailTemplate = (restaurant) => `

  <h2 class="restaurant__title" tabindex="0" aria-label="restaurant name ${restaurant.restaurant.name}">${restaurant.restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="$${restaurant.restaurant.name}" />
  <div class="restaurant__info">
    <h3 tabindex="0" aria-label="restaurant information">Information</h3>
    <h4>City</h4>
    <p tabindex="0" aria-label="restaurant city ${restaurant.restaurant.city}">${restaurant.restaurant.city}</p>
    <h4>Rating</h4>
    <p tabindex="0" aria-label="restaurant rating ${restaurant.restaurant.rating}">⭐️${restaurant.restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3 tabindex="0" aria-label="restaurant description">Description</h3>
    <p tabindex="0">${restaurant.restaurant.description}</p>
  </div>

  <div class="restaurant__foods">
    <h3 tabindex="0" aria-label="restaurant foods">Foods</h3>
    <ul>
      ${restaurant.restaurant.menus.foods
        .map((food) => `<li tabindex="0" aria-label="restaurant food ${food.name}">${food.name}</li>`)
        .join('')}
    </ul>
  </div>

  <div class="restaurant__drinks">
    <h3 tabindex="0" aria-label="restaurant drinks">Drinks</h3>
    <ul>
      ${restaurant.restaurant.menus.drinks
        .map((drink) => `<li tabindex="0" aria-label="restaurant drink ${drink.name}">${drink.name}</li>`)
        .join('')}
    </ul>
  </div>

  <div class="restaurant__customerReviews">
    <h3 tabindex="0" aria-label="restaurant reviews">Customer Reviews</h3>
    <ul>
      ${restaurant.restaurant.customerReviews
        .map((review) => `
          <li>
            <h4 tabindex="0" aria-label="customer name ${review.name}">${review.name}</h4>
            <p tabindex="0" aria-label="customer review ${review.review}">${review.review}</p>
          </li>
        `)
        .join('')}
    </ul>
  </div>
`;

const createResturantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
          src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" tabindex="0">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score" tabindex="0" aria-label="rating ${restaurant.rating}">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 tabindex="0" aria-label="restaurant name ${restaurant.name}">${restaurant.name}</h3>
      <p tabindex="0" aria-label="restaurant description">${restaurant.description}</p>
    </div>
    <div class="button-item" style="text-align: center">
      <a href="${`/#/detail/${restaurant.id}`}" aria-label="go to detail">
        <custom-button></custom-button>
      </a>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;



export { createResturantItemTemplate, createResturantDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate };