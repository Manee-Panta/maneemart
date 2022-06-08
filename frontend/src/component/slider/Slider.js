import React, {useEffect, useState} from "react";
import "./slider.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import axios from 'axios'

const Slider = () => {
  const baseurl='http://127.0.0.1:8000/api/category/'
  const [category, setcategory]=useState([])
 useEffect(()=>{
 async function fetchdata (){
      const response =await axios.get(baseurl)
      setcategory(response.data)
 }
    fetchdata()
  },[])

  return (
    <>
      <div className="crowser">
        <div className="crowser-left">
          {category.map((item, index) => {
            return (
                <Link key={item.id}  to={ `/category/${item.id}`}> 
                {item.name}
                </Link>
       
            );
          })}
        </div>
        <div className="crowser-right">
          <OwlCarousel items={1} loop autoplay={true}>
            <div>
              <img className="img" src="../collection/banner/banner12.jpg" alt='no data'/>
            </div>
            <div>
              <img className="img" src="../collection/banner/banner8.jpg" alt='no data' />
            </div>
            <div>
              <img className="img" src="../collection/banner/banner10.jpg" alt='no data'/>
            </div>
            <div>
              <img className="img" src="../collection/banner/banner11.jpg"  alt='no data'/>
            </div>
            
          </OwlCarousel>
        </div>
      </div>
      <div className="topbanner">
        <img src="../collection/banner/top-banner.png" alt='no data' />
      </div>
    </>
  );
};

export default Slider;
