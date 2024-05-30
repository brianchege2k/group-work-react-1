// AverageRating.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component calculates and displays the average rating from an array of ratings.
 */
export const AverageRating = ({ ratings }) => {
  // Calculate the total number of ratings.
  const totalRatings = ratings.length;

  // Calculate the sum of all ratings.
  const sumRatings = ratings.reduce((acc, rating) => acc + rating.rate, 0);

  // Calculate the average rating by dividing the sum by the total number of ratings.
  const averageRating = Math.ceil(sumRatings / totalRatings);

  // Define the total number of stars.
  const totalStars = 5;

  // Calculate the number of filled stars based on the average rating.
  const filledStars = averageRating;

  // Calculate the number of empty stars.
  const emptyStars = totalStars - filledStars;

  return (
    // Wrap the average rating in a div with the class "ratings__average".
    <div className="ratings__average">
      {/* Display the title "Average Rating". */}
      <h3>Average Rating</h3>
      {/* Create a div to hold the filled and empty stars. */}
      <div>
        {/* Map over the filled stars and display each star as a span. */}
        {[...Array(filledStars)].map((_, index) => (
          // Use a key for each star to ensure React can track them.
          <span key={index}>★</span>
        ))}
        {/* Map over the empty stars and display each star as a span. */}
        {[...Array(emptyStars)].map((_, index) => (
          // Use a key for each star to ensure React can track them.
          <span key={index}>☆</span>
        ))}
      </div>
    </div>
  );
};

/**
 * Define the prop types for the AverageRating component.
 * The ratings prop is required and must be an array of objects.
 * Each object in the array must have three properties: name, rate, and content.
 */
AverageRating.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
