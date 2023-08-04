import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import ReviewCard from "./ReviewCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { APIPaths } from "../../utils/APIPaths";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1,
    },
};

export default function Reviews({ item }) {
    const currentUser = useSelector((state) => state.user.user);
    const [itemReviewed, setItemReviewed] = useState(item);
    const [rating, setRating] = useState(5);
    const [reviewText, setReviewText] = useState("");

    useEffect(() => {
        setItemReviewed(item);
    }, [item])

    const addReview = async () => {
        const userInReviews = item.reviews.find((reviews) => {
            return reviews.userId === currentUser._id;
        })
        if (userInReviews !== undefined) {
            setRating(1);
            setReviewText("");
            return;
        }

        const reviewObject = {
            userId: currentUser._id,
            name: `${currentUser.firstname} ${currentUser.lastname}`,
            stars: rating,
            text: reviewText,
        };

        const updatedItem = await axios.patch(
            `${APIPaths.Product}/review/${itemReviewed._id}`,
            reviewObject
        );
        setItemReviewed(updatedItem.data);
        setRating(1);
        setReviewText("");
    };

    return (
        <>
            {currentUser._id !== null && (
                <div className="add-review-container">
                    <div className="add-review-header">
                        <h5>Add Your Review</h5>
                    </div>
                    <div className="add-review-form">
                        <div className="review-inputs">
                            <select
                                id="rating-selector"
                                name="Rating"
                                value={rating}
                                onChange={(e) =>
                                    setRating(parseInt(e.target.value))
                                }
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
                                id="review-text"
                                placeholder="Add Review Here"
                                onChange={(e) => setReviewText(e.target.value)}
                            />
                        </div>
                        <div className="add-review-button">
                            <button onClick={addReview}>Add Review</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="past-reviews-container">
                {itemReviewed.reviews.length === 0 ? (
                    <div className="no-review-wrapper">
                        <h5>No Reviews Yet</h5>
                    </div>
                ) : (
                    <Carousel // https://www.npmjs.com/package/react-multi-carousel
                        swipeable={false}
                        draggable={false}
                        arrows={true}
                        responsive={responsive}
                        infinite={true}
                        customTransition="transform 300ms ease-in-out"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        slidesToSlide={2}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                    >
                        {itemReviewed.reviews.map((review, index) => {
                            return <ReviewCard key={index} review={review} />;
                        })}
                    </Carousel>
                )}
            </div>
        </>
    );
}
