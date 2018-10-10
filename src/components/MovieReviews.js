// Code MovieReviews Here

import React from 'react';

const Review = ({
  headline,
}) => {
  return (

    <div key={headline} className="review" >
        <a className="review-link" >
          {headline}
        </a>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
