import { ProdCard } from "../../Styles/ProdCard.styled"
import { ProdTextContainer } from "../../Styles/ProdTextContainer.styled"
import Rating from "../../Product/Rating";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    return (
      <ProdCard key={props.item.Name}>
        <div>
          <Link to="/product">
            <img style={{ width: "100%" }} src={props.item.Images[0]} alt="Product" />
          </Link>
        </div>
        <div style={{ margin: "20px" }}>
          <ProdTextContainer>
            <div>
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {props.item.Name}{" "}
              </span>
            </div>
            <div>
                {props.item.Description}
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Price</span>: $
              {props.item.Price}
            </div>
            <div>
              <Rating ratings={props.item.Rating} />
            </div>
          </ProdTextContainer>
        </div>
      </ProdCard>
    );
}