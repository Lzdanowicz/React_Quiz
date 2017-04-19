import React, {Component} from 'react';


class QuizOptions extends Component {
	render() {
		console.log(this.props.option)
		return (
		<div className="fields">
			<div className="field-block">{this.props.option.FirstName} {this.props.option.LastName} </div>
		</div>
		)
	}
}

export default QuizOptions