import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WishlistEntry from './WishlistEntry';
import { clearWishlist } from '../../redux/wishlistSlice';
import "./Wishlist.css"
import { Link } from 'react-router-dom';

export default function WishlistPage() {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistProducts);
  const dispatch = useDispatch();

  const removeAll = () => {
    dispatch(clearWishlist());
  }

  return (
    <div className="wishlist-page-wrapper">
      <div className="wishlist-header">
        <h2>Wish List</h2>
      </div>

      {wishlistItems.length === 0 ? (
        <div className='no-items-wrapper'>
          <h3>Add items to your Wishlist to see them here!</h3>
          <Link to="/">
            <button id="browse">Browse Products</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="wishlist-products">
            {wishlistItems.map((item) => {
              return <WishlistEntry key={item.Name} item={item}/>
            })}
          </div>

          <div className='clear-button-wrapper'>
            <button id="remove-all" onClick={removeAll}>Remove All</button>
          </div>
        </>

      )}

    </div>
  )
}
