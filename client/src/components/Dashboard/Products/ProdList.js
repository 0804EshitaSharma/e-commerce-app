import ProductCard from "./ProductCard";
import { ProdListContainer } from "../../Styles/ProdListContainer.styled";

export default function ProductList(props) {
  console.log('Product List')
  console.log(props.list)
    return (
        <ProdListContainer>
            {props.list.map((item) => (
                <ProductCard key={item.Name} item={item} />
                ))}
        </ProdListContainer> 
    )
}