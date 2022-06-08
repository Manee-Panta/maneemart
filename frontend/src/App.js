import Header from "./component/header/header.js";
import Slider from "./component/slider/Slider.js";
import Product from "./component/product/product.js";
import Footer from "./component/footer/footer.js";
import Error from "./component/Error/Error.js";
import Register from "./Registration/register/Register.js";
import Login from "./Registration/login/Login.js";
import { Switch, Route } from "react-router-dom";
import Checkout from "./component/checkout/checkout.js";
import Cart from './component/cart/cart.js';
import About from "./component/about/about.js";
import Contact from "./component/contact/contact.js";
import Faq from "./component/faq/faq.js";
import Product_details from "./component/product_details/product_details.js";
import Dress from "./component/productList/dress/dress.js";
import Card_item from "./component/card_item/card_item.js";
import data from "./API/data.js";
import Card from "./component/productList/card.js";
import Basket from "./component/Basket.js";

import Item from "./component/Items/Item.js";
import { useState } from 'react';
function App() {
  //for adding items in cart
const {products}=data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };
  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };






  //
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Header countCartItems={cartItems.length}/>
            
            <Slider />
            <Product />
            <Footer />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/about">
          <Header countCartItems={cartItems.length}></Header>
            <About />
            <Footer />
          </Route>
          <Route exact path="/contact">
          <Header countCartItems={cartItems.length}></Header>
            <Contact />
            <Footer />
          </Route>
          <Route exact path="/faq">
          <Header countCartItems={cartItems.length}></Header>
            <Faq />
            <Footer />
          </Route>

          <Route exact path="/checkout">
          <Header countCartItems={cartItems.length}></Header>
            <Checkout />
            <Footer />
          </Route>


          {/* <Route exact path="/cart">
            <Header />
            <Cart products={products} onAdd={onAdd}/>
            <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
            <Footer />
          </Route> */}



  <Route exact path="/cart">
  <Header countCartItems={cartItems.length}></Header>
  <div className="row">
        <Cart products={products} onAdd={onAdd}></Cart>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
      </Route> 

          <Route exact path="/item">
          <Header countCartItems={cartItems.length}></Header>
            <Item/>
            <Footer />
          </Route>

          <Route exact path="/product_details/:pk/:cid">
          <Header countCartItems={cartItems.length}  ></Header>
          
            <Product_details  cartItems={cartItems} onAdd={onAdd} />
            <Footer />
          </Route>
          <Route exact path="/category/:id">
          <Header countCartItems={cartItems.length}></Header>
            <Dress />
            <Footer />
          </Route>
          
          <Route exact path="/basket">
          <Header countCartItems={cartItems.length}></Header>
            <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
            <Footer />
          </Route>

          <Route exact>
            <Error />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
