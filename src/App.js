import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./MovieData";

class App extends React.Component {
  
  constructor(){
    super();
    this.state={
      movies:movies,
      cartCount:0
    }
}

   
    handleIncStar=(movie)=>{
      const {movies}=this.state;
      const mid=movies.indexOf(movie);

      if(movies[mid].star>=5){
        return;
      }
      movies[mid].star +=0.5;

       this.setState({
          movies
       })
    }

    handleDecStar=(movie)=>{
      const {movies}=this.state;
      const mid=movies.indexOf(movie);
      
      if(movies[mid].star<=0){
        return;
      }
      movies[mid].star-=0.5;

      this.setState({
        movies
      })
    }

    handleChangeFav=(movie)=>{
      const {movies}=this.state;
      const mid=movies.indexOf(movie);
    
      movies[mid].fav=!movies[mid].fav;
      this.setState({
        movies
      })
    }

    handleChangeCard=(movie)=>{
      let {movies,cartCount}=this.state;
      const mid=movies.indexOf(movie);

      // console.log('nice');
      movies[mid].isInCart=!movies[mid].isInCart;
      console.log(movies[mid].isInCart);
      if(movies[mid].isInCart){
        cartCount=cartCount+1;
      }
      else {
        cartCount=cartCount-1;
      }
      this.setState({
        movies,
        cartCount:cartCount
      })
      console.log(cartCount);
    }

  render(){

    const {movies,cartCount}=this.state;
    return (
      <>
        <Navbar cartCount={cartCount}/>
        <MovieList movies={movies}
                   addStars={this.handleIncStar}
                   decStars={this.handleDecStar}
                   toggleCart={this.handleChangeCard}
                   toggleFav={this.handleChangeFav}
                    />
      </>
    )
  }
}

export default App;
