import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
   <div className="footer" id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo}></img>
            <p>There are many variations of passages of Lorem Ipsum available,
                 but the majority have suffered alteration in some form,
                  by injected humour, or randomised words which don't look even 
                  slightly believable.
            </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon}></img>
                <img src={assets.twitter_icon}></img>
                <img src={assets.linkedin_icon}></img>
            </div>

        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                 <li>Home</li>
                 <li>About Us</li>
                 <li>Delivery</li>
                 <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
                <li>+1-212-547-78</li>
                <li>Contact@tomato.com</li>
            </ul>

        </div>
        
    </div>
    <hr></hr>
   <p className="footer-copyright">
    All Rights Reserved
   </p>
   </div>
  )
}

export default Footer