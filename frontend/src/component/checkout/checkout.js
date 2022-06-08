import React from "react";
import "../checkout/checkout.css";
import data from "../../API/cart.js";

const Checkout = () => {
  return (
    <div className="checkout-head">
      <div className="checkout-title">Checkout</div>
      <div className="checkout-body">
        <div className="checkout-col1">
          <div className="col1-title">
            <i class="fa fa-user-plus" aria-hidden="true"></i>
            <h3 className="checkout-h3">YOUR PERSONAL DETAILS</h3>
          </div>

          <label htmlFor="">First Name *</label>
          <input type="text" placeholder="Full Name" />
          <label htmlFor="">Email*</label>
          <input type="text" placeholder="E-mail" />
          <label htmlFor="">Contact Number *</label>
          <input type="text" placeholder="Contact Number" />

          <div className="col1-title">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <h3 className="checkout-h3">DELIVERY ADDRESS</h3>
          </div>
          <label htmlFor="">State *</label>
          <input type="text" placeholder="Select State" />
          <label htmlFor="">Address*</label>
          <input type="text" placeholder="Address" />

          <div className="col1-title">
           <i class="fa fa-commenting" aria-hidden="true"></i>
            <h3 className="checkout-h3">DO YOU HAVE A COUPON OR VOUCHER</h3>
          </div>
    <br />
         <input name="" id="" placeholder="Enter coupon code"></input>
         <button className="checkout-btn">APPLY COUPON</button>
        </div>

        <div className="checkout-col2">
          <div className="col2-title">
            <i class="fa fa-cart-plus" aria-hidden="true"></i>
            <h3 className="checkout-h3">MY CART</h3>
          </div>
          <table>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.productName}</td>
                  <td>{val.quantity}</td>
                  <td>{val.unitPrice}</td>
                  <td>{val.total}</td>
                </tr>
              );
            })}
            <tr>
              <td>SUB-TOTAL</td>
              <td colSpan='3' align="right">RS</td>
          
            </tr>
           
            <tr>
              <td>TOTAL</td>
              <td colSpan='3' align="right">RS</td>
          
            </tr>
           
            
          </table>
          <div className="col2-title">
            <i class="fa fa-ship" aria-hidden="true"></i>
            <h3 className="checkout-h3">SHIPPING INFORMATION</h3>
          </div>
          <label>Shipping Time</label>
          <input type="time" placeholder="Select Time" />
        
        
          <div className="col2-title">
           <i class="fa fa-commenting" aria-hidden="true"></i>
            <h3 className="checkout-h3">ADD COMMENTS ABOUT YOUR ORDER</h3>
          </div>
    <br />
         <textarea name="" id="" cols="30" rows="10"></textarea>
         <button className="checkout-btn">CONFIRM ORDER</button>
        
        </div>
        

        
      </div>
    </div>
  );
};

export default Checkout;
