import Main from '../views/pages/main';
import Detail from '../views/pages/details';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Main, // default page
  '/home': Main,
  '/favorite': Favorite,
  '/detail/:id': Detail,

  // getPage(url) {
  //   return this._routes[url] || Main; 
  // }
};

export default routes;