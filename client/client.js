import React from 'react';
import App from '../components/App';
import { render } from 'react-dom';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import Request from 'superagent';
import { createLogger } from 'redux-logger';
import reducer from '../redux/reducer'
import configureStore from '../redux/store'

const initialState = {
	questionCount: 10,
	score: 0,
	wrongAnswer: false,
	gameOver: true,
	correctPlayer: {},
	gameState: 'game-start',
	fieldOptions: []
}

let store = configureStore(initialState)



render(
	<Provider store={store}>
	  <App />
	</Provider>,
	  document.getElementById('root')
);
