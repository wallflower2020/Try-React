import Loadable from 'react-loadable';

const Loading = () => null;

const Home = Loadable ({
    loader: () => import('./Home'),
    loading: Loading
});

const Collecte = Loadable ({
    loader: () => import('./Collecte'),
    loading: Loading
});

const Detail = Loadable ({
    loader: () => import('./Detail'),
    loading: Loading
});

const Login = Loadable ({
    loader: () => import('./Login'),
    loading: Loading
});

const NotFound = Loadable ({
    loader: () => import('./404'),
    loading: Loading
});

export { Home, Detail, NotFound, Login, Collecte }