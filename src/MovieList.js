import React, { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component{
  
    render() {
      // const {title,plot,price,rating,count,isFav,isCard,poster}=this.state.movies;
      const {movies,addStars,decStars,toggleCart,toggleFav}=this.props;
      // console.log(this.props);
      return (
        <>
         {movies.map((movie)=><MovieCard movies={movie}
                                         addStars={addStars}
                                         decStars={decStars}
                                         toggleCart={toggleCart}
                                         toggleFav={toggleFav}
                                         key={movie.id}
          />)}
        </>
        )
    }
}
export default MovieList;