import React, {useEffect, useState} from "react";
import "./product.css";
import Card from "../productList/card";
import axios from "axios";
const Product = () => {
  const [homeproducts, sethomeproducts]=useState([])
  const [homeproducts1, sethomeproducts1]=useState([])
  const [homeproducts2, sethomeproducts2]=useState([])
  const baseurl='http://127.0.0.1:8000/api/product/'
  const baseurl1='http://127.0.0.1:8000/api/product1/'
  const baseurl2='http://127.0.0.1:8000/api/product2/'
 

  useEffect(()=>{
    async function fetchdata (){
         const response =await axios.get(baseurl,{header:{'content-type':'multipart/form-data'}})
             sethomeproducts(response.data)
         const response1 =await axios.get(baseurl1,{header:{'content-type':'multipart/form-data'}})
             sethomeproducts1(response1.data)
         const response2 =await axios.get(baseurl2,{header:{'content-type':'multipart/form-data'}})
             sethomeproducts2(response2.data)
    }
       fetchdata()
     },[baseurl])
  return (
    <>
      <div className="product-main">
        <Card title='Recommended For You' data={homeproducts}/>
        <Card title='New Arrivals' data={homeproducts1}/>
        <div className="banner">
          <img src="../collection/banner/main.gif" alt="banner" />
        </div>
        <Card title='Most Popular' data={homeproducts2}/>
      </div>
    </>
  );
};

export default Product;
