import React, { Component } from 'react';
import Bar from "./Bar";
import Movie from "./Movie";

class App extends Component {

constructor(){
    super();
    this.state = {

      movieData: "",
      movies: []
    };
}

    search = async () => {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${this.state.movieData}`);
      const data = await response.json();
      this.setState({movies: data});
    }

    change = (e) => {
    this.setState({movieData:e.target.value})
    }

  render() {
    const content = this.state.movies.map((movie) => {
      return (<Movie movie = {movie} />);
  });
    return (
      <div className="App">
        <Bar change ={this.change} search = {this.search}/>
         {content}
      </div>
    )
    }
}

export default App;
