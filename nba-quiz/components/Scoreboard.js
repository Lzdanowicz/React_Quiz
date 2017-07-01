import React, {Component} from 'react';


class Scoreboard extends Component {
	constructor(props) {
		super(props)

	}


	render() {
		return (
		<div>
			<h4>Score: {this.props.score}</h4>
		</div>
		)
	}
}

export default Scoreboard