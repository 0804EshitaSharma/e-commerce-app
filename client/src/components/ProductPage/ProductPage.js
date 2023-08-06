import React, { useEffect } from "react";
import "./ProductPage.css";
import ImageGallery from "react-image-gallery";
import Rating from "../Product/Rating";
import { FacebookShareButton, FacebookIcon } from "react-share";
import AddToCartButton from "./AddToCartButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/wishlistSlice";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RelatedItems from "./RelatedItems";
import Reviews from "./Reviews";

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const shareUrl = window.location.origin + window.location.pathname;
  const quote = "See this Awesome product";
  // https://stackoverflow.com/a/71247418
  const { state } = useLocation();
  const item = state.item || {};

  useEffect(() => {
    setQuantity(1);
    setTimeout(() => window.scroll(0, 0), 200);
  }, [item]);

  const wishlist = useSelector((state) => state.wishlist.wishlistProducts);
  const dispatch = useDispatch();

  const translateImages = (imgArray) => {
    return imgArray.map((imgURL) => ({ original: imgURL, thumbnail: imgURL }));
  };

  const updateQuantity = (value) => {
    const valueAsInt = parseInt(value);
    if (quantity > 1 || valueAsInt >= 0) {
      setQuantity(quantity + valueAsInt);
    }
  };

  const handleQuantityTypingInput = (e) => {
    const valueAsInt = parseInt(e.target.value);
    isNaN(valueAsInt) ? setQuantity(1) : setQuantity(valueAsInt);
  };

  const toggleWishlist = () => {
    const isInWishlist = wishlist.some(
      (wishlistItem) => item.name === wishlistItem.name
    );
    if (isInWishlist) {
      dispatch(removeItem(item.name));
      toast.success("Removed from Wishlist!", {
        position: "bottom-right",
        theme: "colored",
        autoClose: 2000,
      });
    } else {
      dispatch(addItem(item));
      toast.success("Added to Wishlist!", {
        position: "bottom-right",
        theme: "colored",
        autoClose: 2000,
      });
    }
  };

  const isAddedToWishlist = (name) => {
    // https://stackoverflow.com/a/8217584
    return wishlist.some((item) => item.name === name) ? "red" : "none";
  };

  return (
    <div className="full-page-wrapper">
      <div className="product-page-content">
        <div className="product-header">
          <div className="product-header-wrapper">
            <div className="product-name-seller">
              <h2>{item.name}</h2>
            </div>
          </div>
          <div className="rating-wrapper">
          <svg
              className="navbar_wishlist_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill={isAddedToWishlist(item.name)}
              viewBox="0 0 24 24"
              strokeWidth="1.9"
              stroke="currentColor"
              onClick={() => toggleWishlist()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <FacebookShareButton url={shareUrl} quote={quote}>
              <FacebookIcon size={30} round={true}></FacebookIcon>
            </FacebookShareButton>
            <Rating ratings={parseFloat(item.rating)} />
          </div>
        </div>
        <div className="product-details">
          <div className="product-images-wrapper">
            <ImageGallery // https://www.npmjs.com/package/react-image-gallery
              items={translateImages(item.images)}
              showPlayButton={false}
              autoPlay={true}
              thumbnailClass={"thumbnails"}
              showFullscreenButton={false}
              showNav={false}
              slideInterval={5000}
              id="product-image-gallery"
            />
          </div>
          <div className="purchase-wrapper">
            <div className="description-wrapper">
              <p className="desc-text">{item.description}</p>
            </div>
            <div className="buy-options">
              <div className="price-quantity">
                <h4>${item.price}</h4>
                <div className="quantity-picker-wrapper">
                  <h4>Quantity:</h4>
                  <div className="quantity-picker">
                    <button
                      className="purchase-button"
                      onClick={(e) => updateQuantity(-1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      min="1"
                      minLength={1}
                      className="purchase-button"
                      onChange={handleQuantityTypingInput}
                    />
                    <button
                      className="purchase-button"
                      onClick={(e) => updateQuantity(1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="purchase-buttons">
                <AddToCartButton productDetails={item} quantity={1} />
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-container">
          <h3>Reviews</h3>
          <div className="reviews">
            <Reviews item={item}/>
          </div>
        </div>

        <div className="related-items">
          <h3>Related Items</h3>
          <div className="related-products">
            <RelatedItems item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
