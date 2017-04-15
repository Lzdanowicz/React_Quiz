import React, {Component} from 'react';
// import QuizOptions from './QuizOptions.js';
import Request from 'superagent';

class Quiz extends Component {
	constructor(props) {
		super(props);

		this.state = {
			correctPlayer: {},
			fieldOptions: []
		}

		// this.renderOptions = this.renderOptions.bind(this);
	}

	randomNumber(min, max) {
		return Math.floor(Math.random() * (max-min+1)) + min;
	}

	componentWillMount() {
		var url = 'https://api.fantasydata.net/nba/v2/json/Players';
		var randomNumberGen = this.randomNumber;
		Request.get(url).set("Ocp-Apim-Subscription-Key", "0aa332c1c9e547679652afd412b94c77").end((err, response) => {
			var responseLength = response.body.length;
			var playersData = response.body;
			var randomNumber = randomNumberGen(0,responseLength);
			this.setState({
				correctPlayer: playersData[randomNumber]
			})
			console.log(this)
		});
	}


	render() {
		console.log(this.state)
		return (
			<div className="quiz">
				<div className="quiz-content">
					<p className="question">Who Is This Guy?</p>
				</div>
				<div className="player-image">
					<img src={this.state.correctPlayer.PhotoUrl} />
				</div>
			</div>
		)
	}
}

export default Quiz