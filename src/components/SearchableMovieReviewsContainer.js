// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews';

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      reviews: []
    };
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <p>Reviews: {this.state.reviews.length}</p>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
