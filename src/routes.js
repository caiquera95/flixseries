import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

import Header from './Components/Header'

import Home from './Pages/Home';
import Search from './Pages/Search'
import Detail from './Pages/Details'
import MyList from './Pages/MyList'

// import Filme from './pages/Filme';
// import Favoritos from './pages/Favoritos';
// import Erro from './pages/Erro';


const Routes = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/alta" component={Home} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/detail/:serieId" component={Detail} />
                <Route exact path="/mylist" component={MyList} />
            </Switch>

        </BrowserRouter>
    )
}

export default Routes;