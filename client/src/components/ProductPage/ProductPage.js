import React, { useEffect } from "react";
import "./ProductPage.css";
import ImageGallery from "react-image-gallery";
import Rating from "../Product/Rating";
import { FacebookShareButton, FacebookIcon } from "react-share";
import AddToCartButton from "./AddToCartButton";
import QuantityButton from "./QuantityButton";
import { useState } from "react";
import ProductList from "../Dashboard/Products/ProdList";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/wishlistSlice";
import { initialState } from "../Dashboard/Products/ProdDataList";
import { useLocation } from "react-router-dom";

function ProductPage() {
  // TODO: Add prop for product details
  const [quantity, setQuantity] = useState(1);
  const shareUrl = "https://www.google.co.in/";
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
      (wishlistItem) => item.Name === wishlistItem.Name
    );
    if (isInWishlist) {
      dispatch(removeItem(item.Name));
    } else {
      dispatch(addItem(item));
    }
  };

  const isAddedToWishlist = (name) => {
    // https://stackoverflow.com/a/8217584
    return wishlist.some((item) => item.Name === name) ? "red" : "none";
  };
  // const shareUrl =
  //   "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com&ext=1688347174&hash=AeZ1yHfTShU_z1f1CHg";
  return (
    <div className="full-page-wrapper">
      <div className="product-page-content">
        <div className="product-header">
          <div className="product-header-wrapper">
            <div className="product-name-seller">
              <h2>{item.Name}</h2>
            </div>
            <svg
              className="navbar_wishlist_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill={isAddedToWishlist(item.Name)}
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
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={30} round={true}></FacebookIcon>
            </FacebookShareButton>
          </div>
          <div className="rating-wrapper">
            <Rating ratings={parseFloat(item.Rating)} />
          </div>
        </div>
        <div className="product-details">
          <div className="product-images-wrapper">
            <ImageGallery // https://www.npmjs.com/package/react-image-gallery
              items={translateImages(item.Images)}
              showPlayButton={false}
              autoPlay={true}
              thumbnailClass={"thumbnails"}
              showFullscreenButton={false}
              showNav={false}
              slideInterval={5000}
            />
          </div>
          <div className="purchase-wrapper">
            <div className="description-wrapper">
              <p className="desc-text">{item.Description}</p>
            </div>
            <div className="buy-options">
              <div className="price-quantity">
                <h4>{item.Price}</h4>
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
                <button className="purchase-button" id="buy-now">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="related-items">
          <h3>Related Items</h3>
          <div className="related-products">
            <ProductList list={initialState.list} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
