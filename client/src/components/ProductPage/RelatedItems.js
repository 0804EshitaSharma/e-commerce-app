import React from 'react'
import axios from 'axios';
import { ProdListContainer } from '../Styles/ProdListContainer.styled';
import { useState, useEffect } from 'react';
import ProductCard from '../Dashboard/Products/ProductCard';

export default function RelatedItems({ item }) {
    const [relatedItems, setRelatedItems] = useState([]);

    const getRelatedItems = async () => {
        const relItems = await axios.get(`http://localhost:5001/products/${item.category}`);
        setRelatedItems(relItems.data);
    }

    useEffect(() => {
        getRelatedItems();
    }, [item]);

    return (
        <ProdListContainer>
            {relatedItems.map((relatedItem) => {
                if (item._id !== relatedItem._id) {
                    return <ProductCard key={relatedItem._id} item={relatedItem} />
                }
            })}
        </ProdListContainer>
    )
}
