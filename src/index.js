import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Deck from './deck.js'
import "./index.css"

class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
        <div>
        <h1>Card Dealer Simulator</h1>
        <Deck />
        </div>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));