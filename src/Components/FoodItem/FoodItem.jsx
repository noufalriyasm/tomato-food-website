import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id,name,image,price,description}) => {

    
    const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)
  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img className='food-item-image' src={image}></img>
            <div className="counter">
        { !cartItems[id] ? <img className='zero-btn' onClick={()=>addToCart(id)} src={assets.add_icon_white} ></img> :
            <div className='food-item-counter'>
                <img className='add-btn' onClick={()=>addToCart(id)} src={assets.add_icon_green}></img>
                <p>{cartItems[id]}</p>
                <img className='remove-btn' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}></img>

            </div>
            }
        </div>
            
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} ></img>
            </div>
            <p className='food-item-desc'>{description}.</p>
            <p className='food-item-price'>${price}.</p>
        </div>
        
    </div>

  )
}

export default FoodItem