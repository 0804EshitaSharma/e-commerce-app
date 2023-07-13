import ProductList from "./ProdList"
import ProductSlideShow from "./ProdSlideShow"

export default function ProductContainer(props) {
    return (
        <div style={{width: '85%', left: '15%', position: 'absolute'}}>
            <ProductSlideShow />
            <ProductList {...props}/>
        </div>   
    )
}