import React, {Component} from 'react';
import QuizChoice from './QuizChoice.js'


class QuizOptions extends Component {
	constructor(props) {
		super(props)

		this.state = {
			correctAnswer: false,
			wrongAnswer: false
		}


		this.checkResults = this.checkResults.bind(this);
	}

	endGame() {
		this.props.endGame()
	}



	getNewPlayers(result) {
		var that = this
		if (result) {
			this.setState({ correctAnswer: true})	
		} else {
			this.setState({ wrongAnswer: true})	
		}
		setTimeout(function(){
			if (result) {
				that.setState({ correctAnswer: false})
			} else {
				that.setState({ wrongAnswer: false})
			}
			console.log(that.props.questionCount)
			if (that.props.questionCount > 0) {
				that.props.fetchPlayers();
			} else {
				that.endGame()
			}
		}, 2500)
	}


	checkResults(id) {
		console.log(id)
		console.log(this.props.correctPlayer.PlayerID)
		if (id === this.props.correctPlayer.PlayerID) {
			this.props.correctChoice()
			this.getNewPlayers(true)
		} else {
			this.props.wrongChoice()
			this.getNewPlayers(false)
		}
	}

	renderOptions(){
		if (!this.state.wrongAnswer & !this.state.correctAnswer) {
			return (
				<div className={this.props.gameState}>
					<div className="options">
						{ this.props.fieldOptions.map((option, i) =>
							<QuizChoice option={option} key={i} checkResults={ (option) => this.checkResults(option.PlayerID)} />
						)}
					</div>
				</div>
			)
		} else if (this.state.wrongAnswer) {
			return (
				<div className="wrong">
					<h2> Wrong! </h2>
				</div>
			)
		} else if (this.state.correctAnswer) {
			return (
				<div className="correct">
					<h2> Correct! </h2>
				</div>
			)
		}
	}



	render() {
		return (
			this.renderOptions() 
		)
	}
}

export default QuizOptions