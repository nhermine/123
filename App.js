import React, { Component } from 'react';
import Bar from "./Bar";
import Bar from "./Movie";

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
    }

    change = (e) => {
    this.setState({movieData:e.target.value})
    }
    //this.setState({movieData: data});

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
