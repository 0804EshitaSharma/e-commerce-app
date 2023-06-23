import ProductList from "./ProdList"
import ProductSlideShow from "./ProdSlideShow"

export default function ProductContainer(props) {
    console.log('Product Container')
    console.log(props.list)
    return (
        <div style={{width: '85%'}}>
            <ProductSlideShow />
            <ProductList list={props.list}/>
        </div>   
    )
}