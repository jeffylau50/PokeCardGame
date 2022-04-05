import React, { Component } from 'react';
import './card.css'

class Card extends Component {
    constructor(props) {
        super(props);
        let angle = Math.random()* 90-45;
        let xpos = Math.random()* 40-20;
        let y = Math.random()* 40-20;
        this._transform = `translate(${xpos}px, ${y}px) rotate(${angle}deg)`;
    };

   
    render(){ 
        
        
        return(
            <div >
            <img className='card' style={{transform: this._transform}} src={this.props.img}/>
            </div>
        )
    }
}

export default Card;
