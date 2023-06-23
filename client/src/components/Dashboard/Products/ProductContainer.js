import ProductList from "./ProdList"
import ProductSlideShow from "./ProdSlideShow"

export default function ProductContainer(props) {
    return (
        <div style={{width: '85%'}}>
            <ProductSlideShow />
            <ProductList list={props.list}/>
        </div>   
    )
}