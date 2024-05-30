// RatingsList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from './Rating';
import { AverageRating } from './AverageRating';

/**
 * This component displays a list of ratings.
 * It accepts a prop ratings which is an array of objects representing individual ratings.
 */
const RatingsList = ({ ratings }) => {
  // Return a div element with a class of "ratings".
  return (
    <div className="ratings">
      {/* Display the average rating. */}
      <AverageRating ratings={ratings} />
      {/* Map over the ratings array and display each rating. */}
      {ratings.map((rating, index) => (
        // Pass the rating object and its index as a key to the Rating component.
        <Rating key={index} {...rating} />
      ))}
    </div>
  );
};

/**
 * Define the prop types for the RatingsList component.
 * The ratings prop is required and must be an array of objects.
 * Each object in the array must have three properties: name, rate, and content.
 */
RatingsList.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RatingsList;