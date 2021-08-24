import React from 'react'
import ItemListContainer from './components/ItemListContainter/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
//import ItemDetailContainer from './components/Items/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Items/ItemDetailContainer';

const App = () => {
    return (
        
        

        
        <Router>
        <NavBar></NavBar>
            <Switch>
              <Route path="/" exact component={ItemListContainer}></Route>
              <Route path="/detail/:id"  component={ItemDetailContainer}></Route>
            </Switch>
        </Router>
        
      
    );
}

export default App;