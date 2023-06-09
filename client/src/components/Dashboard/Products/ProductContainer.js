import ProductList from "./ProdList"
import ProductSlideShow from "./ProdSlideShow"

export default function ProductContainer() {
    return (
        <div style={{width: '85%'}}>
            <ProductSlideShow />
            <ProductList />
        </div>   
    )
}