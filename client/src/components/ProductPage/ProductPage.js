import React from "react";
import "./ProductPage.css";
import Navbar from "../Navbar/Navbar.js";
import ImageGallery from "react-image-gallery";
import Rating from "../Product/Rating";
import { useState } from "react";

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

    return (
        <div className="full-page-wrapper">
            <Navbar />
            <div className="product-page-content">
                <div className="product-header">
                    <div className="product-name-seller">
                        <h2>Artificial House Plant</h2>
                        <h5>Ikea</h5>
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
                                FEJKA artificial potted plants that don’t
                                require a green thumb. Perfect when you have
                                better things to do than water plants and tidy
                                up dead leaves. You’ll have everyone fooled
                                because they look so lifelike. FEJKA artificial
                                potted plants that don’t require a green thumb.
                                Perfect when you have better things to do than
                                water plants and tidy up dead leaves. You’ll
                                have everyone fooled because they look so
                                lifelike. FEJKA artificial potted plants that
                                don’t require a green thumb. Perfect when you
                                have better things to do than water plants and
                                tidy up dead leaves. You’ll have everyone fooled
                                because they look so lifelike.
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
                                <button
                                    className="purchase-button"
                                    id="add-cart"
                                >
                                    Add To Cart
                                </button>
                                <button
                                    className="purchase-button"
                                    id="buy-now"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="related-items">
                    <h3>Related Items</h3>
                    <div className="related-products"></div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
