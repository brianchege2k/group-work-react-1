// AverageRating.jsx
import React from 'react';
import PropTypes from 'prop-types';

export const AverageRating = ({ ratings }) => {
  const totalRatings = ratings.length;
  const sumRatings = ratings.reduce((acc, rating) => acc + rating.rate, 0);
  const averageRating = Math.ceil(sumRatings / totalRatings);
  const totalStars = 5;
  const filledStars = averageRating;
  const emptyStars = totalStars - filledStars;

  return (
    <div className="ratings__average">
      <h3>Average Rating</h3>
      <div>
        {[...Array(filledStars)].map((_, index) => (
          <span key={index}>★</span>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={index}>☆</span>
        ))}
      </div>
    </div>
  );
};

AverageRating.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
