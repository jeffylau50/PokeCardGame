import React, { Component } from 'react';
import axios from 'axios';
import Card from './card.js'
import './deck.css'

const APIurl = "https://deckofcardsapi.com/api/deck/new/shuffle/"

class Deck extends Component {
    constructor(props){
        super(props);
        this.state = {
            deck : '',
            img: [],
        };
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount() {
    let deck = await axios.get(APIurl);
    this.setState({deck: deck.data})
    }
    async handleClick(){
        let imginfo = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/`)
        console.log(imginfo.data.cards[0].image)
        this.setState(state => ({ img: [...state.img, imginfo.data.cards[0].image ]}))
    }
    render(){
        return(
            <div>
            <div className='buttonclass'>
            <button className='btn btn-info mt-5 mb-5' onClick={this.handleClick}>Draw a Card</button>
            </div>
            <div className='deckClass'>
            {this.state.img.map(img => <Card img={img}/>)}
            </div>
            </div>
        )
    }
}

export default Deck;