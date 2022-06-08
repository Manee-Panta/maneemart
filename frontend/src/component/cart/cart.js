import React from 'react'
import Item from '../Items/Item';
import Basket from '../Basket';
// import items from '../../API/cart.js'

import '../cart/cart.css'

const Cart = (props) => {
  const {products , onAdd}= props;
  return (
    <main className="block col-2">
      
            <h2>MY CART</h2>
          
            <div className="row">
        {products.map((item) => (
          <Item key={item.id} item={item} onAdd={onAdd}></Item>
        ))}
      </div>
      
  </main>
  
  );
}

export default Cart