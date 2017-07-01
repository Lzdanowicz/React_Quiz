import React, { Component } from 'react';
import Header from './Header.js';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import QuizOptions from './QuizOptions.js'
import QuizQuestion from './QuizQuestion.js'
import Scoreboard from './Scoreboard.js'

class App extends Component {

  render() {
    return (
      <div>
        <QuizQuestion gameState={this.props.gameState} correctPlayer={this.props.correctPlayer} />
        <Header startGame={this.props.actions.startGame} score={this.props.score} fetchPlayers={this.props.actions.fetchPlayers} gameState={this.props.gameState} />
        <Scoreboard score={this.props.score} />
        <QuizOptions fetchPlayers={this.props.actions.fetchPlayers} gameState={this.props.gameState} endGame={this.props.actions.endGame} questionCount={this.props.questionCount} wrongChoice={this.props.actions.wrongChoice} correctChoice={this.props.actions.correctChoice} gameState={this.props.gameState} correctPlayer={this.props.correctPlayer} fieldOptions={this.props.fieldOptions} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}


//wrapped with the dispatcher so we don't have to continuiously call it
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)