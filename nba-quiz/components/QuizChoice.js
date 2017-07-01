import React, {Component} from 'react';


class QuizChoice extends Component {
	constructor(props) {
		super(props)

		// this.state = {};
		this.callParentCheckOptions = this.callParentCheckOptions.bind(this)

	}

	callParentCheckOptions() {
		this.props.checkResults(this.props.option);
	}


	render() {
		return (
		<div className="fields" onClick={() => { this.callParentCheckOptions() }}>
			<div className="field-block"> {this.props.option.FirstName} {this.props.option.LastName} </div>
		</div>
		)
	}
}

export default QuizChoice