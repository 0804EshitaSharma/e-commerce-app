import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WishlistEntry from './WishlistEntry';

export default function WishlistPage() {
    const wishlistItems = useSelector((state) => state.wishlist.wishlistProducts);
    const dispatch = useDispatch();

  return (
    <div className="wishlist-page-wrapper">
      <div className="wishlist-header">
        <h2>Wish List</h2>
      </div>

      <div className="wishlist-products">
        {wishlistItems.map((item) => {
          return <WishlistEntry key={item.name} item={item}/>
        })}
      </div>
    </div>
  )
}
