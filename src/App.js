import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import { Home } from './components/Home/Home';
import Cart from './components/Cart/Cart';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Context 
import { CartProvider } from './components/Context/CartContext';



class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <CartProvider>
            <div className="App">
              <Header />
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/products" component={Products}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
              <Footer />
             </div>
        </CartProvider>
       </BrowserRouter>
      
    );
  }
}

export default App;