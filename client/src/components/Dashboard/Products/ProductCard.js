import { ProdCard } from "../../Styles/ProdCard.styled";
import { ProdTextContainer } from "../../Styles/ProdTextContainer.styled";
import Rating from "../../Product/Rating";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../redux/cart/cartSlice";

export default function ProductCard(props) {
  // https://stackoverflow.com/a/71247418
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToProduct = (item) => {
    navigate(`/product/${item.Name}`, { state: { item } });
  };
  const productDetails = {
    Name: props.item.Name,
    Description: props.item.Description,
    Price: props.item.Price,
    Rating: props.item.Rating,
    Category: props.item.Category,
    Images: props.item.Images,
  };
  const quantity = 1;
  return (
    <ProdCard key={props.item.Name}>
      <div style={{ backgroundColor: "white" }}>
        <img
          style={{ width: "100%", height: "200px", objectFit: "contain" }}
          src={props.item.Images[0]}
          alt="Product"
          onClick={() => goToProduct(props.item)}
        />
      </div>
      <div style={{ margin: "10px" }}>
        <ProdTextContainer>
          <svg
            className="navbar_shopping-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            style={{ float: "right" }}
            onClick={() => {
              dispatch(addProductToCart({ productDetails, quantity }));
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div>
            <span style={{ fontWeight: "bold" }}> {props.item.Name} </span>
          </div>
          <div style={{ fontSize: "13px", margin: "10px" }}>
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
