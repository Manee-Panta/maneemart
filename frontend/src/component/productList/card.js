import React from 'react'
import { Link } from 'react-router-dom';
const Card = ({title,data}) => {
  return (
    <div className='cart'>
      <div className="product-title">
          <h2>{title}</h2>
        </div>
        <div className="product-body">
          {data.map((item) => {
            return (
              <Link key={item.pk} to={`/product_details/${item.pk}/${item.category}`}>
      
                <img src={item.image} alt={item.id} />
              </Link>
            );
          })}
        </div>
    </div>
  )
}

export default Card