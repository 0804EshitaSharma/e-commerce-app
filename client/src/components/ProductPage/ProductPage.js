import React from "react";
import "./ProductPage.css";
import ImageGallery from "react-image-gallery";
import Rating from "../Product/Rating";
import AddToCartButton from "./AddToCartButton";
import QuantityButton from "./QuantityButton";
import { useState } from "react";
import ProductList from "../Dashboard/Products/ProdList";
import { initialState } from "../Dashboard/Products/ProdDataList";

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

  const productDetails = {
    name: "Artificial House Plant",
    description: `FEJKA artificial potted plants that don’t require a green thumb.
                Perfect when you have better things to do than water plants and
                tidy up dead leaves. You’ll have everyone fooled because they
                look so lifelike. FEJKA artificial potted plants that don’t
                require a green thumb. Perfect when you have better things to do
                than water plants and tidy up dead leaves. You’ll have everyone
                fooled because they look so lifelike. FEJKA artificial potted
                plants that don’t require a green thumb. Perfect when you have
                better things to do than water plants and tidy up dead leaves.
                You’ll have everyone fooled because they look so lifelike.`,
    category: "Home",
    price: 99.99,
    rating: 5,
    imgURLs: EXAMPLE_IMAGES,
  };

  return (
    <div className="full-page-wrapper">
      <div className="product-page-content">
        <div className="product-header">
          <div className="product-name-seller">
            <h2>{productDetails.name}</h2>
            <h5>Ikea</h5>
          </div>
          <div className="rating-wrapper">
            <Rating ratings={productDetails.rating} />
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
              <p className="desc-text">{productDetails.description}</p>
            </div>
            <div className="buy-options">
              <div className="price-quantity">
                <h4>${productDetails.price}</h4>
                <QuantityButton initialQuantity={1} />
              </div>
              <div className="purchase-buttons">
                <AddToCartButton productDetails={productDetails} />
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
            <ProductList list={initialState.list}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
