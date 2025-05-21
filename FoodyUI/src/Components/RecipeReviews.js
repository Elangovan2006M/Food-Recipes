// src/Components/RecipeReviews.js
import React, { useEffect, useState, useRef } from 'react';
import { getReviewsByRecipe, createReview } from '../Service/ReviewService';
import ReviewCard from './ReviewCard';
import '../Styles/RecipeReview.css';

const RecipeReviews = ({ recipeId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newReview, setNewReview] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const containerRef = useRef(null);

  const fetchReviews = async (pageToFetch = 0, append = false) => {
    setLoading(true);
    try {
      const res = await getReviewsByRecipe(recipeId, pageToFetch);
      const newReviews = res.data.content;

      setReviews(prev =>
        append ? [...prev, ...newReviews] : newReviews
      );
      setHasMore(!res.data.last);
    } catch (error) {
      console.error("Failed to fetch reviews: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (recipeId) {
      setPage(0);
      fetchReviews(0, false);
    }
  }, [recipeId]);

  const handleSubmit = async () => {
    if (!newReview.trim()) return;

    setSubmitting(true);
    try {
      const reviewPayload = {
        recipe: { id: recipeId },
        user: { id: 2 }, // Replace with dynamic user ID when available
        reviewText: newReview.trim()
      };

      await createReview(reviewPayload);
      setNewReview('');
      setPage(0);
      fetchReviews(0, false);
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchReviews(nextPage, true);
    // Scroll to the end after a short delay to let rendering complete
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft = containerRef.current.scrollWidth;
      }
    }, 100);
  };

  return (
      <div className="review-list">
  <div className="align">
    <h2>
      Recipe <span className="home-highlight-style">Reviews</span>
    </h2>
    {hasMore && (
      <button className="load-more-button" onClick={loadMore}>
        Load More
      </button>
    )}
  </div>

  <div className="review-horizontal-wrapper">
    {/* Review input */}
    <div className="review-form">
      <textarea
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
        placeholder="Write your review here..."
        rows={4}
      />
      <button
        onClick={handleSubmit}
        disabled={submitting || !newReview.trim()}
      >
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>
    </div>

    {/* Scrollable Review Cards */}
    <div className="review-cards-container" ref={containerRef}>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review}  className="review-card"/>
      ))}
    </div>
  </div>
</div>

  );
};

export default RecipeReviews;
