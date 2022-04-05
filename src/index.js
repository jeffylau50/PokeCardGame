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
        <Deck />
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));