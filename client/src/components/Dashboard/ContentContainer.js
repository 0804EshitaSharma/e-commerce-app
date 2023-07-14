// referenced from: https://www.youtube.com/watch?v=VVhnuOKVHRs&t=6210s

import axios from 'axios';
import './Dashboard.css'
import Filters from "./Filters";
import ProductContainer from './Products/ProductContainer';
import { useState, useEffect } from "react"
// import { initialState } from './Products/ProdDataList';

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
            console.log(ratingsStateList)
            const checkedRatings = ratingsStateList.filter(item => item.checked).map(item => {return item.label})
            console.log(checkedRatings)

            const ratingParams = checkedRatings.map(i => `rating=${i}`.replace(/\s/g, '')).join('&')
            console.log(ratingParams)

            let modifiedURL = `${baseURL}/products`
            if (checkedCategories.length > 0) {
                modifiedURL = `${baseURL}/products?${categoryParams}`
                console.log(modifiedURL)
            }
            if (checkedPrices.length > 0) {
                if (modifiedURL.includes('?')) {
                    modifiedURL = `${modifiedURL}&${priceParams}`
                    console.log(modifiedURL)
                } else {
                    modifiedURL = `${baseURL}/products?${priceParams}`
                    console.log(modifiedURL)
                }
            }
            if (checkedRatings.length > 0) {
                if (modifiedURL.includes('?')) {
                    modifiedURL = `${modifiedURL}&${ratingParams}`
                    console.log(modifiedURL)
                } else {
                    modifiedURL = `${baseURL}/products?${ratingParams}`
                    console.log(modifiedURL)
                }
            }

            axios.get(modifiedURL).then((res) => {
                console.log('api call')
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

    const applyFilters = () => {
        console.log('call get list in filter')
        getProdList()

        let updatedList = list
        console.log(updatedList)

        // Category Filter
        const categoriesChecked = categories
            .filter((item) => item.checked)
            .map((item) => item.label);

        if (categoriesChecked.length) {
            updatedList = updatedList.filter((item) =>
            categoriesChecked.includes(item.category)
            );
        }

        // Price Filter
        const pricesChecked = prices
            .filter((item) => item.checked)
            .map((item) => item.label);

        if (pricesChecked.length) {
            updatedList = updatedList.filter(item => {
                if (Number(item.price) < 25) {
                    return prices[0].checked
                } else if (Number(item.price) >= 25 && Number(item.price) < 50) {
                    return prices[1].checked
                } else if (Number(item.price) >= 50 && Number(item.price) < 100) {
                    return prices[2].checked
                } else if (Number(item.price) >= 100 && Number(item.price) < 200) {
                    return prices[3].checked
                } else if (Number(item.price) > 200) {
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
                if (Number(item.rating) >= 4) {
                    return ratings[0].checked
                } else if (Number(item.rating) >= 3 && Number(item.rating) < 4) {
                    return ratings[1].checked
                } else if (Number(item.rating) >= 2 && Number(item.rating) < 3) {
                    return ratings[2].checked
                } else if (Number(item.rating) >= 1 && Number(item.rating) < 2) {
                    return ratings[3].checked
                } else if (Number(item.rating) < 1) {
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

    useEffect(()=>{
        console.log('call get list on load')
        getProdList()
    }, []) 

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