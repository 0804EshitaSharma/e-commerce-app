import { ProdCard } from "../../Styles/ProdCard.styled"
import { ProdTextContainer } from "../../Styles/ProdTextContainer.styled"
import Rating from "../../Product/Rating";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    return (
      <ProdCard key={props.item.Name}>
        <div style={{ backgroundColor: 'white' }}>
          <Link to="/product">
            <img style={{ width: "100%", height: "200px", objectFit: 'contain' }} src={props.item.Images[0]} alt="Product" />
          </Link>
        </div>
        <div style={{ margin: "10px" }}>
          <ProdTextContainer>
            <div>
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {props.item.Name}{" "}
              </span>
            </div>
            <div style={{ fontSize: '13px', margin: '10px'}}>
                {props.item.Description}
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Category</span>:&nbsp;
              {props.item.Category}
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