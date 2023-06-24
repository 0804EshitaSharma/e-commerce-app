import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/wishlistSlice';
import "./Wishlist.css"

export default function WishlistEntry({ item }) {
    const dispatch = useDispatch();

    const remove = () => {
        dispatch(removeItem(item.Name));
    }

    return (
        <div className="wishlist-entry-wrapper">
            <div className='entry'>
                <div className='img-wrapper'>
                    <img src={item.Images[0]} alt={item.Name} />
                    <p>{item.Name}</p>
                </div>

                <div className='wishlist-button-price-wrapper'>
                    <div className='price'>
                        <h4>{item.Price}</h4>
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
