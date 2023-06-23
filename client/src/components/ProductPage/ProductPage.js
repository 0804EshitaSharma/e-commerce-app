import React from "react";
import "./ProductPage.css";
import ImageGallery from "react-image-gallery";
import Rating from "../Product/Rating";
import { useState } from "react";
import ProductList from "../Dashboard/Products/ProdList";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/wishlistSlice";

const EXAMPLE_IMAGES = [
  {
    original:
      "https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-monstera__0959226_pe809439_s5.jpg?f=xl",
    thumbnail:
      "https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-monstera__0959226_pe809439_s5.jpg?f=xs",
  },
  {
    original:
      "https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-monstera__0959228_pe809441_s5.jpg?f=xl",
    thumbnail:
      "https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-monstera__0959228_pe809441_s5.jpg?f=s",
  },
  {
    original:
      "https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-monstera__0959227_pe809440_s5.jpg?f=xl",
    thumbnail:
      "https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-monstera__0959227_pe809440_s5.jpg?f=xxs",
  },
];

function ProductPage() {
  // TODO: Add prop for product details
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Lego Tree",
    description: "Lego Orchid",
    price: "59.98",
    rating: "5",
    image: "https://m.media-amazon.com/images/I/71iY-AO2D1L._AC._SR360,460.jpg",
  }

  const wishlist = useSelector((state) => state.wishlist.wishlistProducts);
  const dispatch = useDispatch();

  const translateImages = (imgURL) => {
    return {
      original: imgURL,
      thumbnail: imgURL
    }
  }

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

  const addToWishList = () => {
    dispatch(addItem(product));
  }

  const isAddedToWishlist = (name) => {
    // https://stackoverflow.com/a/8217584
    return wishlist.some(item => item.name === name) ? "red" : "none";
  }

  return (
    <div className="full-page-wrapper">
      <div className="product-page-content">
        <div className="product-header">
          <div className="product-header-wrapper">
            <div className="product-name-seller">
              <h2>{product.name}</h2>
              <h5>Ikea</h5>
            </div>
            <svg
              className="navbar_wishlist_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill={isAddedToWishlist(product.name)}
              viewBox="0 0 24 24"
              strokeWidth="1.9"
              stroke="currentColor"
              onClick={addToWishList}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="rating-wrapper">
            <Rating ratings={5} />
          </div>
        </div>
        <div className="product-details">
          <div className="product-images-wrapper">
            <ImageGallery // https://www.npmjs.com/package/react-image-gallery
              items={EXAMPLE_IMAGES}
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
              <p className="desc-text">
                FEJKA artificial potted plants that don’t require a green thumb.
                Perfect when you have better things to do than water plants and
                tidy up dead leaves. You’ll have everyone fooled because they
                look so lifelike. FEJKA artificial potted plants that don’t
                require a green thumb. Perfect when you have better things to do
                than water plants and tidy up dead leaves. You’ll have everyone
                fooled because they look so lifelike. FEJKA artificial potted
                plants that don’t require a green thumb. Perfect when you have
                better things to do than water plants and tidy up dead leaves.
                You’ll have everyone fooled because they look so lifelike.
              </p>
            </div>
            <div className="buy-options">
              <div className="price-quantity">
                <h4>$99.99</h4>
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
                <button className="purchase-button" id="add-cart">
                  Add To Cart
                </button>
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
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
