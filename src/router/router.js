import { Home, Detail, NotFound, Login, Collecte } from '../pages/index';

const routes = [{
    path: '/home',
    component: Home
},{
    path: '/Collecte',
    component: Collecte
},{
    path: '/Detail',
    component: Detail
},{
    path: '/404',
    components: NotFound
},{
    path: '/Login',
    component: Login
}];

export default routes