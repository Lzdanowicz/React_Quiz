import React, {Component} from 'react';
import QuizOptions from './QuizOptions.js';
import Request from 'superagent';

class Quiz extends Component {
	constructor(props) {
		super(props);

		this.state = {
			correctPlayer: {},
			fieldOptions: []
		}

		this.renderOptions = this.renderOptions.bind(this);

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
				correctPlayer: playersData[randomNumber],
				fieldOptions: setFieldOptions()
			})

			function shuffle(array) {
			    let counter = array.length;

			    // While there are elements in the array
			    while (counter > 0) {
			        // Pick a random index
			        let index = Math.floor(Math.random() * counter);

			        // Decrease counter by 1
			        counter--;

			        // And swap the last element with it
			        let temp = array[counter];
			        array[counter] = array[index];
			        array[index] = temp;
			    }

			    return array;
			}

			function setFieldOptions() {
				var fieldOptionsHolder = []
				fieldOptionsHolder.push(playersData[randomNumber])
				while (fieldOptionsHolder.length < 4) {
					var randomPlayer = playersData[randomNumberGen(0,responseLength)]
					if (fieldOptionsHolder.includes(randomPlayer)) {
						continue
					}
					fieldOptionsHolder.push(randomPlayer)
				}
				var randomizedSelection = shuffle(fieldOptionsHolder);
				return randomizedSelection
			}
		});

	}

	renderOptions() {
		return(
			<div className="options">
				{ this.state.fieldOptions.map((option, i) =>
					<QuizOptions option={option} key={i}/>
				)}
			</div>
		)
	}


	render() {
		return (
			<div className="quiz">
				<div className="quiz-content">
					<p className="question">Who Is This Guy?</p>
				</div>
				<div className="player-image">
					<img src={this.state.correctPlayer.PhotoUrl} />
				</div>
				{this.renderOptions()}
			</div>
		)
	}
}

export default Quiz