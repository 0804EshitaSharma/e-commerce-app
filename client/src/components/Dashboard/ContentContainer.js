// referenced from: https://www.youtube.com/watch?v=VVhnuOKVHRs&t=6210s

import './Dashboard.css'
import Filters from "./Filters";
import ProductContainer from './Products/ProductContainer';
import { useState, useEffect } from "react"
import { initialState } from './Products/ProdDataList';

export default function ContentContainer() {

    const [resultsFound, setResultsFound] = useState(true);
    const [list, setList] = useState(initialState.list);

    const [categories, setCategories] = useState([
        { id: 1, checked: false, label: 'Home' },
        { id: 2, checked: false, label: 'Electronics' },
        { id: 3, checked: false, label: 'Books' },
        { id: 4, checked: false, label: 'Fashion' },
    ])

    const handleChangeChecked = (id) => {
        const categoriesStateList = categories;
        const changeCheckedCategories = categoriesStateList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
        );
        setCategories(changeCheckedCategories);
    };

    const applyFilters = () => {
        let updatedList = initialState.list;

        // Cuisine Filter
        const categoriesChecked = categories
            .filter((item) => item.checked)
            .map((item) => item.label);

        if (categoriesChecked.length) {
            updatedList = updatedList.filter((item) =>
            categoriesChecked.includes(item.Category)
            );
        }

        setList(updatedList);
        !updatedList.length ? setResultsFound(false) : setResultsFound(true);
    }

    useEffect(() => {
        applyFilters();
    }, [categories]);

    return (
        <div className="horizontal-container">
            <div className="filter-container">
                <Filters 
                    categories={categories}
                    changeChecked={handleChangeChecked}
                />
            </div>
            <ProductContainer list={list}/>
        </div>   
    )
}