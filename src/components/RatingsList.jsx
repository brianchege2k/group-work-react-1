// RatingsList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from './Rating';
import { AverageRating } from './AverageRating';
const RatingsList = ({ ratings }) => {
  return (
    <div className="ratings">
      <AverageRating ratings={ratings} />
      {ratings.map((rating, index) => (
        <Rating key={index} {...rating} />
      ))}
    </div>
  );
};

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
