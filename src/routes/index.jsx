import App from '../App';
import Home from '../views/Home';

var indexRoutes = [
  { path: "/", name: "Home", component: Home },
  { path: '/test', name: 'test', component: App}
];

export default indexRoutes;
