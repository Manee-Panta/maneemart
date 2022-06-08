import React from 'react'

const Item = (props) => {
    const {item , onAdd} = props;
  return (
    <div>
        <h3>Hello</h3>
      <img className="small" src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <div>Rs{item.price}</div>
      <div>
        <button className='items-btn' onClick={() => onAdd(item)}>Add To Cart</button>
      </div>
    </div>
  )
}

export default Item;
