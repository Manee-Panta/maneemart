import React , {useState, useEffect} from "react";
import "../product_details/product_details.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios  from "axios";

const Product_details = (props) => {
  const {item , onAdd} = props;
  const [count, setcount] = useState(0);
  const { pk , cid} = useParams();

  const [pdetails, setpdetails]=useState([])
  const baseurl=`http://127.0.0.1:8000/api/product/${pk}/${cid}`
  
  useEffect(()=>{
    async function fetchdata (){
         const response =await axios.get(baseurl,{header:{'content-type':'multipart/form-data'}})
      
    setpdetails(response.data)
    }
       fetchdata()
     },[baseurl])


 function decrease (){
   if(count===0){
     setcount(0)
   }else {
     setcount(count-1)
   }
 }
  return (<>
    <div className="product-details-main">
      <div className="col1">
        <img src={`http://127.0.0.1:8000${pdetails.image}`} alt={pdetails.id} />
      </div>
      <div className="col2">
        <div className="description">
          <h1>{pdetails.pname}</h1>
          <h2>⭐⭐⭐⭐⭐</h2>
          <h3>Rs {pdetails.price}</h3>
          <h2>Available</h2>
          <div className="qty">
          <i class="fa fa-plus-circle" aria-hidden="true" onClick={()=>{setcount(count+1)}}></i>
          <h2>Quantity ({count})</h2>
          <i class="fa fa-minus-circle" aria-hidden="true"onClick={decrease}></i>
          </div>
          

          <p>
           {pdetails.des}
          </p>
          <div className="productDetailBtn">
         <Link to='/checkout'>   <button className="buybtn">Buy Now</button> </Link>
         <button  onClick={() => onAdd(item)}>Add To Cart</button>

 
          </div>
        </div>
      </div>
     
    </div>
   
   </>
  );
};

export default Product_details;
