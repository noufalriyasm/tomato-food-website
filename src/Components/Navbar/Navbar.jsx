import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState('Home');
   
    const {getTotalCartAmount,cart,setCart}=useContext(StoreContext)
  return (
    <div className="navbar">
      
       <Link to='/'> <img src={assets.logo} className='logo' onClick={()=>setCart('home-page-navbar')}></img></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>{setMenu("Home"); setCart("home-page-navbar")}} className={menu==="Home"? "active":""}>Home</Link>
            {/* the below condition is added to remove menu,mobile app and contact from all other pages otherthan homepage. for that created a use state in 
            context page through that we can access it everywhere */}
            {cart==="home-page-navbar" ? 
            <div className='navbar-menu'> <a href='#explore-menu' onClick={()=>{setMenu("Menu")}} className={menu==="Menu"? "active":""}>Menu </a>
            <a href='#app-download' onClick={()=>{setMenu("Mobile App")}} className={menu==="Mobile App"? "active":""}>Mobile App </a>
            <a href='#footer'onClick={()=>{setMenu("Contact Us")}} className={menu==="Contact Us"? "active":""}>Contact Us </a>
            </div>
            :""}
            
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon}></img>
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} onClick={()=>setCart("cart")}></img></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar