import React from 'react';
import '../stylings/Button.css';

export default
class Button extends React.Component {

    clickHandler = () => {
        console.log(this.props.number);
    }

    render(){
        console.log(this.props);
        return (
            <div
                className="button"
                onClick={this.clickHandler}
            >
                {this.props.number}
            </div>
        );
    }
}
