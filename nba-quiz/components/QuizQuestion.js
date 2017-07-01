import React, {Component} from 'react';
// import QuizOptions from './QuizOptions.js';
// import Request from 'superagent';

class QuizQuestion extends Component {
	constructor(props) {
		super(props)
	}


	render() {
		return (
			<div className={this.props.gameState}>
				<div className="quiz">
					<div className="quiz-content">
						<p className="question">Who Is This Guy?</p>
					</div>
					<div className="player-image">
						<img src={this.props.correctPlayer.PhotoUrl} />
					</div>
				</div>
			</div>
		)
	}
}

export default QuizQuestion