import { ProdCard } from "../../Styles/ProdCard.styled";
import { ProdTextContainer } from "../../Styles/ProdTextContainer.styled";
import Rating from "../../Product/Rating";
import { Link } from "react-router-dom";
import AddToCartButton from "../../ProductPage/AddToCartButton";

export default function ProductCard(props) {
  const productDetails = {
    name: props.item.description,
    description: "placeholder info",
    price: props.item.price,
    rating: props.item.rating,
    category: "some random category",
    imgURLs: [props.item.image],
  };
  const quantity = 1;
  return (
    <ProdCard key={props.item.description}>
      <div>
        <Link to="/product">
          <img style={{ width: "100%" }} src={props.item.image} alt="Product" />
        </Link>
      </div>
      <div style={{ margin: "20px" }}>
        <ProdTextContainer>
          <div>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {props.item.description}{" "}
            </span>
          </div>
          <div>
            <span style={{ fontWeight: "bold" }}>Price</span>: $
            {props.item.price}
          </div>
          <div>
            <Rating ratings={props.item.rating} />
            <AddToCartButton
              productDetails={productDetails}
              quantity={quantity}
            />
          </div>
        </ProdTextContainer>
      </div>
    </ProdCard>
  );
}
