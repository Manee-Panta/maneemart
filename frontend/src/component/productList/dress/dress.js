import React, {useEffect,useState} from "react";
import "./dress.css";
import "../../productList/productlist.css";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

const Dress = () => {
  const [dresses, setdresses]=useState([])
  const {id}=useParams()

  useEffect(()=>{
    async function fetchdata (){
         const response =await axios.get(`http://127.0.0.1:8000/api/product/${id}`,{header:{'content-type':'multipart/form-data'}})
    setdresses(response.data)
    }
       fetchdata()
     },[id])

  return (
    <div className="productlist-main">
      <div className="productlist-title">
      <h2>Our Product</h2>
      </div>
      <div className="productlist-body">
        {dresses.map((item, index) => {
          return (
            <div>
             {/* <h2>{item.category}</h2> */}
              <div className="manage">
              <Link key={item.pk} to={`/product_details/${item.pk}/${item.category}`}>
                <img src={`http://127.0.0.1:8000${item.image}`} alt={item.id}/>  </Link>
                <div className="product-name">{item.pname} </div>
                <div className="product-price">{item.price} </div>
                <button className="cartbtn"> Add to cart</button>
              </div>
          
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dress;
