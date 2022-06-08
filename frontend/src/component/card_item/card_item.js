import React , {useState, useEffect} from "react";
import "../card_item/card_item.css";
import axios from "axios";

class Card_item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      count: 0,
      cart: []
    };
  }
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/product")
      .then((response) => {
        const products = response.data;
        this.setState({ products });
        console.log(products);
      })

      .catch((err) => console.log(err));
  }

  addtoCart = (product) => {
    this.setState({
      count: this.state.count + 1,
      cart: this.state.cart.concat(product)
    });
    console.log(this.state.cart);
  };

  render() {
    return (
      <div>
        <div id="container">
          {this.state.products.length ? (
            this.state.products.map((product) => (
              <div className="productContainer" id="product" key={product.id}>
                <img className="img" src={product.image} alt="product-store" />
                <h1>{product.category}</h1>
                <h4>{product.price}</h4>
                <button onClick={() => this.addtoCart(product)}>
                  Add To Cart
                </button>
              </div>
            ))
          ) : (
            <div className="productContainer">
              <p>Loading</p>
            </div>
          )}
        </div>
        {this.state.products.length > 0 && (
          <div className="cart">
            <p>{this.state.count}</p>
            {this.state.cart?.map((item) => (
              <div className="itemBox">
                <div style={{ marginLeft: 5 }}>
                  <img className="cartImage" src={item.image} />
                </div>
                <div> {item?.title.substr(0, 10) + "..."}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default Card_item;
