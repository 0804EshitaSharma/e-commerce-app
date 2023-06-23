// referenced from: https://www.youtube.com/watch?v=VVhnuOKVHRs&t=6210s

import './Dashboard.css'
import Filters from "./Filters";
import ProductContainer from './Products/ProductContainer';
import { useState, useEffect } from "react"
import { initialState } from './Products/ProdDataList';

export default function ContentContainer() {

    const [list, setList] = useState(initialState.list);

    const [categories, setCategories] = useState([
        { id: 1, checked: false, label: 'Home' },
        { id: 2, checked: false, label: 'Electronics' },
        { id: 3, checked: false, label: 'Books' },
        { id: 4, checked: false, label: 'Outdoor' }
    ])

    const [prices, setPrices] = useState([
        { id: 1, checked: false, label: 'Under $25' },
        { id: 2, checked: false, label: '$25 ~ $50' },
        { id: 3, checked: false, label: '$50 ~ $100' },
        { id: 4, checked: false, label: '$100 ~ $200' },
        { id: 5, checked: false, label: 'Above $200' }
    ])

    const [ratings, setRatings] = useState([
        { id: 1, checked: false, label: 'Above 4' },
        { id: 2, checked: false, label: '3 ~ 4' },
        { id: 3, checked: false, label: '2 ~ 3' },
        { id: 4, checked: false, label: '1 ~ 2' },
        { id: 5, checked: false, label: 'Below 1' }
    ])

    const handleCategoryChecked = (id) => {
        const categoriesStateList = categories;
        const changeCheckedCategories = categoriesStateList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
        );
        setCategories(changeCheckedCategories);
    };

    const handlePriceChecked = (id) => {
        const pricesStateList = prices;
        const changeCheckedPrices = pricesStateList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
        );
        setPrices(changeCheckedPrices);
    };

    const handleRatingChecked = (id) => {
        const ratingsStateList = ratings;
        const changeCheckedRatings = ratingsStateList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
        );
        setRatings(changeCheckedRatings);
    };

    const applyFilters = () => {
        let updatedList = initialState.list;

        // Category Filter
        const categoriesChecked = categories
            .filter((item) => item.checked)
            .map((item) => item.label);

        if (categoriesChecked.length) {
            updatedList = updatedList.filter((item) =>
            categoriesChecked.includes(item.Category)
            );
        }

        // Price Filter
        const pricesChecked = prices
            .filter((item) => item.checked)
            .map((item) => item.label);

        if (pricesChecked.length) {
            updatedList = updatedList.filter(item => {
                if (Number(item.Price) < 25) {
                    return prices[0].checked
                } else if (Number(item.Price) >= 25 && Number(item.Price) < 50) {
                    return prices[1].checked
                } else if (Number(item.Price) >= 50 && Number(item.Price) < 100) {
                    return prices[2].checked
                } else if (Number(item.Price) >= 100 && Number(item.Price) < 200) {
                    return prices[3].checked
                } else if (Number(item.Price) > 200) {
                    return prices[4].checked
                }
                return false
            })
        }

        // Price Filter
        const ratingsChecked = ratings
            .filter((item) => item.checked)
            .map((item) => item.label);

        if (ratingsChecked.length) {
            updatedList = updatedList.filter(item => {
                if (Number(item.Rating) >= 4) {
                    return ratings[0].checked
                } else if (Number(item.Rating) >= 3 && Number(item.Rating) < 4) {
                    return ratings[1].checked
                } else if (Number(item.Rating) >= 2 && Number(item.Rating) < 3) {
                    return ratings[2].checked
                } else if (Number(item.Rating) >= 1 && Number(item.Rating) < 2) {
                    return ratings[3].checked
                } else if (Number(item.Rating) < 1) {
                    return ratings[4].checked
                }
                return false
            })
        }

        setList(updatedList);
    }

    useEffect(() => {
        applyFilters();
    }, [categories, prices, ratings]);

    return (
        <div className="horizontal-container">
            <div className="filter-container">
                <Filters 
                    categories={categories}
                    changeCategory={handleCategoryChecked}
                    prices={prices}
                    changePrice={handlePriceChecked}
                    ratings={ratings}
                    changeRating={handleRatingChecked}
                />
            </div>
            <ProductContainer list={list}/>
        </div>   
    )
}