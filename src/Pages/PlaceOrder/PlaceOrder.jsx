import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type='text' placeholder='First Name'></input>
          <input type='text' placeholder='Second Name'></input>
        </div>
        <input type="Email" placeholder='Email'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type='text' placeholder='City'></input>
          <input type='text' placeholder='State'></input>
        </div>
        <div className="multi-fields">
          <input type='text' placeholder='Zip Code'></input>
          <input type='text' placeholder='Counrty'></input>
        </div>
        <input type='text' placeholder='Phone'></input>
      </div>
      <div className="place-order-right">
         <div className="cart-total">
           <h2>Cart Total</h2>
           <div className="cart-total-details">
             <p>Subtotal</p>
             <p>${getTotalCartAmount()}</p>
           </div>
           <hr></hr>
           <div className="cart-total-details">
             <p>Delivery Fee</p>
             <p>${getTotalCartAmount()===0?0:2}</p>
           </div>
           <hr></hr>
           <div className="cart-total-details">
             <b>Total</b>
             <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
           </div>
            <button >Proceed to Payment</button>
         </div>
      </div>
    </form>
  )
}

export default PlaceOrder