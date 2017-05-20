import React, { Component } from 'react';
import './App.css';
import Quiz from './Quiz.js';
import GameOver from './gameOver.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gameOver: false
    }

    this.updateShared = this.updateShared.bind(this);

  }

  updateShared(shared_value){
    this.setState({
      gameOver: shared_value.gameOver,
      score: shared_value.score
    })
  }


  render() {
    return (
      <div className={this.state.gameOver}>
        <GameOver isGameOver = {this.state.gameOver} score={this.state.score} />
        <Quiz isGameOver = {this.state.gameOver} updateShared={this.updateShared}/>
      </div>
    )
  }
}

export default App;
