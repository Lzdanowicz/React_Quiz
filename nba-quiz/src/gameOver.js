import React, { Component } from 'react';
import './App.css';
import Quiz from './Quiz.js'

class GameOver extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="game-over-screen">
				<h2>You got {this.props.score} out of 10 correct</h2>
				<button onClick={this.restartGame}>Play Again</button>
			</div>
		)
	}
}

export default GameOver