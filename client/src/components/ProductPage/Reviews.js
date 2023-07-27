import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import ReviewCard from "./ReviewCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { APIPaths } from "../../utils/APIPaths";

export default function Reviews({ item }) {
    const currentUser = useSelector((state) => state.user.user);
    const [itemReviewed, setItemReviewed] = useState(item);

    const [rating, setRating] = useState(5);
    const [reviewText, setReviewText] = useState("");

    const addReview = async () => {
        const reviewObject = {
           userId: currentUser._id,
           name: `${currentUser.firstname} ${currentUser.lastname}`,
           stars: rating,
           text: reviewText
        }
        console.log(reviewObject)

        const updatedItem = await axios.patch(`${APIPaths.Product}/review/${itemReviewed._id}`, reviewObject);
        setItemReviewed(updatedItem.data);
    }

    return (
        <>
            {currentUser._id !== null && (
                <div>
                    <select
                        name="Rating"
                        onChange={(e) => setRating(parseInt(e.target.value))}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>

                    <input
                        type="text"
                        value={reviewText}
                        className="add-review-button"
                        onChange={(e) => setReviewText(e.target.value)}
                    />
                    <button onClick={addReview}>
                        Add Review
                    </button>
                </div>
            )}

            <div className="past-reviews-container">
                {itemReviewed.reviews.length === 0 ? (
                    <div className="no-review-wrapper">
                        <h5>No Reviews Yet</h5>
                    </div>
                ) : (
                    <div className="review-cards">
                        {itemReviewed.reviews.map((review, index) => {
                            return <ReviewCard key={index} review={review} />;
                        })}
                    </div>
                )}
            </div>
        </>
    );
}
