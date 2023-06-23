import React from 'react'
import { useDispatch } from 'react-redux'
import "./Wishlist.css"

export default function WishlistEntry({ item }) {
    const dispatch = useDispatch();

    return (
        <div className="wishlist-entry-wrapper">
            <div className='img-wrapper'>
                <img src={item.image} alt="Item Image" />

                <div className='wishlist-button-price-wrapper'>
                    <div className='price'>
                        <h4>{item.price}</h4>
                    </div>
                    <div className='wishlist-entry-buttons-wrapper'>
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                        <button>Remove From Wishlist</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
