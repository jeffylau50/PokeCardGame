import React, { Component } from 'react';
import './card.css'

class Card extends Component {

    render(){
        return(
            <div >
            <img className='card' src={this.props.img}/>
            </div>
        )
    }
}

export default Card;
