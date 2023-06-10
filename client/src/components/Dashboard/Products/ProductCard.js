import { ProdCard } from "../../Styles/ProdCard.styled"
import { ProdTextContainer } from "../../Styles/ProdTextContainer.styled"
import Rating from "../../Product/Rating";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
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
            </div>
          </ProdTextContainer>
        </div>
      </ProdCard>
    );
}