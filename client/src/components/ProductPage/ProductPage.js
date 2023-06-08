import React from "react";
import "./ProductPage.css";
import Navbar from "../Navbar";
import ImageGallery from "react-image-gallery";

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
    return (
        <div className="full-page-wrapper">
            <Navbar />
            <div className="product-page-content">
                <div className="product-header">
                    <div className="product-name-seller">
                        <h2>Artificial House Plant</h2>
                        <h5>Ikea</h5>
                    </div>
                    <div className="rating-wrapper">*****(0)</div>
                </div>
                <div className="product-details">
                    <div className="product-images-wrapper">
                        <ImageGallery
                            items={EXAMPLE_IMAGES}
                            showPlayButton={false}
                            autoPlay={true}
                            thumbnailClass={"thumbnails"}
                            showFullscreenButton={false}
                        />
                    </div>
                    <div className="purchase-wrapper">
                        <div className="description-wrapper">
                            <p>Product Description Wrapper</p>
                        </div>
                        <div className="price-quantity">
                            <h4>$99.99</h4>
                        </div>
                        <div className="quantity-picker"></div>
                        <div className="purchase-buttons">
                            <button>Add To Cart</button>
                            <button>Buy Now</button>
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
