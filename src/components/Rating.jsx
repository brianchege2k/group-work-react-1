// Rating.jsx
import React from 'react';
import PropTypes from 'prop-types';

export const Rating = ({ name, rate, content }) => {
  const totalStars = 5;
  const filledStars = rate;
  const emptyStars = totalStars - filledStars;

  return (
    <div className="ratings__item">
      <h3>{name}</h3>
      <p>{content}</p>
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

Rating.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};
