import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className=" footerc">
          <p>Know More us</p>
         <Link  className='link' to='/about'>About</Link>
         <Link  className='link'  to='/faq'>FAQ</Link>
         <Link   className='link' to='/contact'>Blog</Link>
         <Link   className='link' to=''>Services</Link>
         <Link  className='link' to='/'>History</Link>

        </div>
        <div className=" footerc">
          <p>New Features</p>
        <Link   className='link'to='/'>Summer Items</Link>
        <Link  className='link' to='/'>New Arrival</Link>
        <Link   className='link'to='/'>Women Items</Link>
        <Link   className='link'to='/'>Women Beauty</Link>
        <Link  className='link' to='/contact'>Contact</Link>
        </div>
        <div className="footer-right ">
        <p>News Letter</p>
          <input type="text" placeholder='Send us your Email' />
          <button>Send</button>
        </div>
    </div>
  )
}

export default Footer