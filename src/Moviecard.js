// import React, { Component } from "react";

function MovieCard(props) {
    
        // console.log(props);
        const {movies,addStars,decStars,toggleFav,toggleCart}=props;
      const {title,plot,price,rating,star,fav,isInCart,poster}=props.movies;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src={poster} className=""/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        
                        <div className="plot">{plot}</div>
                        <div className="price">Rs.{price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img alt="decrease"
                                className="str-btn"
                                src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                                onClick={()=>decStars(movies)} />
                                <img alt="star" 
                                className="stars"
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                                <img alt="increase"
                                className="str-btn"
                                src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                                onClick={()=>addStars(movies)}/>

                                <span>{star}</span>
                            </div>
                            <button className={fav ? "unfavourite-btn":"favourite-btn" } onClick={()=>toggleFav(movies)}>
                              { fav ? "UnFavourite":"Favourite"}</button>
                            <button className={isInCart ? "unfavourite-btn": "cart-btn" } onClick={()=>toggleCart(movies)}>{isInCart ? "Remove the card":"Add to cart"} </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}
export default MovieCard;