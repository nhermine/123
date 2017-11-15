import React from 'react';

export default
class Movie extends React.Component {
    render(){
      if (!this.props.movie) {
        return null;
      }
      console.log(this.props.movie.score)

        return (
            <div className="movie">
                <p>{this.props.movie.score}<p/>
            </div>
        )
    }
}
