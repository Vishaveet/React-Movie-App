import React, { Component } from "react";

class MovieCard extends Component{
    constructor(){
        super();
        this.state={
            title:"The Avengers",
            plot:"Supernatural powers shown in the movie.",
            price:199,
            rating:8.9,
            count:0,
            isFav:true,
            iscard:true
        }
    }
    // 1 form 
    // handleInc=()=>{
    //     this.setState({
    //         count:this.state.count+0.5
    //     })
    // } 
    // 2 form 
    handleInc=()=>{
        this.setState((prevState)=>{
            if(prevState.count>=5){
                return;
            }
            return {
                count:prevState.count+0.5
            }
        })
    }

    handleDec=()=>{
      this.setState((prevState)=>{
        if(prevState.count<=0){
            return;
        }
        return {
            count:prevState.count-0.5
        }
      })
    } 
    addFav=()=>{
        this.setState((prevState)=>{
            return {
                isFav:!(prevState.isFav)
            }
        })
    }
    addCard=()=>{
        this.setState((prevState)=>{
            return {
                iscard:!(prevState.iscard)
            }
        })
    }
    render() {
      const {title,plot,price,rating,count,isFav,iscard}=this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74LN-TOnPClmQKaZNX5cbcXuisfHyjZ-C6Q&usqp=CAU" className=""/>
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
                                onClick={this.handleDec} />
                                <img alt="star" 
                                className="stars"
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                                <img alt="increase"
                                className="str-btn"
                                src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                                onClick={this.handleInc}/>

                                <span>{count}</span>
                            </div>
                            <button className={isFav ? "favourite-btn" : "unfavourite-btn"} onClick={this.addFav}>
                              { isFav ? "Favourite":"UnFavourite"}</button>
                            <button className={iscard ? "cart-btn" : "unfavourite-btn"} onClick={this.addCard}>{iscard ? "Add to cart": "Remove the card"} </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieCard;