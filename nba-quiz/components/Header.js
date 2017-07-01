import React, { Component } from 'react';
import actions from '../redux/actions';

class Header extends Component {

	startGame(e){
		e.preventDefault();
		this.props.startGame();
		this.props.fetchPlayers();
	}

	render() {
		return (
		<div className={this.props.gameState}>
			<div className="game-start-screen">
				<h2>Press Play to start game</h2>
				<button onClick={this.startGame.bind(this)}>Play</button>
			</div>
			<div className="game-over-screen">
				<h2>You got {this.props.score} out of 10 correct</h2>
				<button onClick={this.startGame.bind(this)}>Play Again</button>
			</div>
		</div>
		)
	}
}

export default Header