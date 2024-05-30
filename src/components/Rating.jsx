// Rating.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component displays an individual rating item.
 */
export const Rating = ({ name, rate, content }) => {
  // Define the total number of stars.
  const totalStars = 5;

  // Calculate the number of filled stars based on the rating.
  const filledStars = rate;

  // Calculate the number of empty stars.
  const emptyStars = totalStars - filledStars;

  return (
    // Wrap the rating item in a div with the class "ratings__item".
    <div className="ratings__item">
      {/* Display the name of the reviewer. */}
      <h3>{name}</h3>
      {/* Display the content of the review. */}
      <p>{content}</p>
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
 * Define the prop types for the Rating component.
 * The name, rate, and content props are required.
 */
Rating.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};
