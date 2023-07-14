// referenced from: https://www.youtube.com/watch?v=VVhnuOKVHRs&t=6210s

import axios from 'axios';
import './Dashboard.css'
import Filters from "./Filters";
import ProductContainer from './Products/ProductContainer';
import { useState, useEffect } from "react"

export default function ContentContainer() {
    const [list, setList] = useState([]);

    const baseURL = "http://localhost:5001"
    
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

    const getProdList = async () => {
        try {
            const categoriesStateList = categories
            const checkedCategories = categoriesStateList.filter(item => item.checked).map(item => {return item.label})
            const categoryParams = checkedCategories.map(i => `category=${i}`).join('&')

            const pricesStateList = prices
            const checkedPrices = pricesStateList.filter(item => item.checked).map(item => {return item.label})
            const priceParams = checkedPrices.map(i => `price=${i}`.replace(/\s/g, '')).join('&')

            const ratingsStateList = ratings
            const checkedRatings = ratingsStateList.filter(item => item.checked).map(item => {return item.label})

            const ratingParams = checkedRatings.map(i => `rating=${i}`.replace(/\s/g, '')).join('&')

            let modifiedURL = `${baseURL}/products`
            if (checkedCategories.length > 0) {
                modifiedURL = `${baseURL}/products?${categoryParams}`
            }
            if (checkedPrices.length > 0) {
                if (modifiedURL.includes('?')) {
                    modifiedURL = `${modifiedURL}&${priceParams}`
                } else {
                    modifiedURL = `${baseURL}/products?${priceParams}`
                }
            }
            if (checkedRatings.length > 0) {
                if (modifiedURL.includes('?')) {
                    modifiedURL = `${modifiedURL}&${ratingParams}`
                } else {
                    modifiedURL = `${baseURL}/products?${ratingParams}`
                }
            }

            axios.get(modifiedURL).then((res) => {
                setList(res.data)
            })
        } catch (error) {
          console.log(error)
        }
    };

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

    useEffect(() => {
        getProdList();
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