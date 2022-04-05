import React, { Component } from 'react';

class Card extends Component {

    render(){
        return(
            <img src={this.props.img}/>
        )
    }
}

export default Card;
