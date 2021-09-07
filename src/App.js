import React from 'react'
import ItemListContainer from './components/ItemListContainter/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
//import ItemDetailContainer from './components/Items/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import CategoryContainer from './components/CategoryContainer/CategoryContainer';
import { Cartprovider } from './components/Context/context';
import CartView from './components/CartView/CartView';
const App = () => {
    return (
        
        

        <Cartprovider>
        <Router>
        <NavBar></NavBar>
            <Switch>
              <Route path="/" exact component={ItemListContainer}></Route>
              <Route path="/detail/:id"  component={ItemDetailContainer}></Route>
              <Route path="/category/:id" component={CategoryContainer}></Route>
              <Route path="/cart" component={CartView}></Route>
            </Switch>
        </Router>
        </Cartprovider>
      
    );
}

export default App;