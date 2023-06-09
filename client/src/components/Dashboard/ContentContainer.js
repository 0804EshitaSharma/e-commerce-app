import './Dashboard.css'
import Filters from "./Filters";
import ProductContainer from './Products/ProductContainer';

export default function ContentContainer() {
    return (
        <div className="horizontal-container">
            <div className="filter-container">
                <Filters />
            </div>
            <ProductContainer />
        </div>   
    )
}