import React, { Component } from 'react';
import axios from 'axios';
import Card from './card.js'

const APIurl = "https://deckofcardsapi.com/api/deck/new/shuffle/"

class Deck extends Component {
    constructor(props){
        super(props);
        this.state = {
            deck : '',
            img: '',
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
        this.setState({img: imginfo.data.cards[0].image})
        console.log('h'+ this.state.img)
    }
    render(){
        return(
            <div>
            <Card img={this.state.img}/>
            <button onClick={this.handleClick}>New Card</button>
            </div>
        )
    }
}

export default Deck;