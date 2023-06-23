import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/wishlistSlice';
import "./Wishlist.css"

export default function WishlistEntry({ item }) {
    const dispatch = useDispatch();

    const remove = () => {
        dispatch(removeItem(item.name));
    }

    return (
        <div className="wishlist-entry-wrapper">
            <div className='entry'>
                <div className='img-wrapper'>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                </div>

                <div className='wishlist-button-price-wrapper'>
                    <div className='price'>
                        <h4>{item.price}</h4>
                    </div>
                    <div className='wishlist-entry-buttons-wrapper'>
                        <button>Add to Cart</button> 
                        <button>Buy Now</button>
                        <button onClick={remove}>Remove</button>
                    </div>
                </div>
            </div>
            
            <hr />

        </div>
    )
}
