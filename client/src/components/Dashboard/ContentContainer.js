// referenced from: https://www.youtube.com/watch?v=VVhnuOKVHRs&t=6210s

import axios from "axios";
import "./Dashboard.css";
import Filters from "./Filters";
import ProductContainer from "./Products/ProductContainer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { products, getProdListAsync } from "../../redux/item/itemSlice";

export default function ContentContainer() {
  const list = useSelector(products);
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([
    { id: 1, checked: false, label: "Home" },
    { id: 2, checked: false, label: "Electronics" },
    { id: 3, checked: false, label: "Books" },
    { id: 4, checked: false, label: "Outdoor" },
  ]);

  const [prices, setPrices] = useState([
    { id: 1, checked: false, label: "Under $25" },
    { id: 2, checked: false, label: "$25 ~ $50" },
    { id: 3, checked: false, label: "$50 ~ $100" },
    { id: 4, checked: false, label: "$100 ~ $200" },
    { id: 5, checked: false, label: "Above $200" },
  ]);

  const [ratings, setRatings] = useState([
    { id: 1, checked: false, label: "Above 4" },
    { id: 2, checked: false, label: "3 ~ 4" },
    { id: 3, checked: false, label: "2 ~ 3" },
    { id: 4, checked: false, label: "1 ~ 2" },
    { id: 5, checked: false, label: "Below 1" },
  ]);

    const getFilterURL = () => {
            const categoriesStateList = categories
            const checkedCategories = categoriesStateList.filter(item => item.checked).map(item => {return item.label})
            const categoryParams = checkedCategories.map(i => `category=${i}`).join('&')

            const pricesStateList = prices
            const checkedPrices = pricesStateList.filter(item => item.checked).map(item => {return item.label})
            const priceParams = checkedPrices.map(i => `price=${i}`.replace(/\s/g, '')).join('&')

            const ratingsStateList = ratings
            const checkedRatings = ratingsStateList.filter(item => item.checked).map(item => {return item.label})

            const ratingParams = checkedRatings.map(i => `rating=${i}`.replace(/\s/g, '')).join('&')

            let modifiedURL = `/products`
            if (checkedCategories.length > 0) {
                modifiedURL = `/products?${categoryParams}`
            }
            if (checkedPrices.length > 0) {
                if (modifiedURL.includes('?')) {
                    modifiedURL = `${modifiedURL}&${priceParams}`
                } else {
                    modifiedURL = `/products?${priceParams}`
                }
            }
            if (checkedRatings.length > 0) {
                if (modifiedURL.includes('?')) {
                    modifiedURL = `${modifiedURL}&${ratingParams}`
                } else {
                    modifiedURL = `/products?${ratingParams}`
                }
            }

            return modifiedURL
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
        const filterURL = getFilterURL()
        dispatch(getProdListAsync(filterURL));
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
