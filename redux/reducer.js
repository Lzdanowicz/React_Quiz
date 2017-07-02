import Request from 'superagent';

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max-min+1)) + min;
}

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

function setFieldOptions(list) {
	var fieldOptionsHolder = []
	while (fieldOptionsHolder.length < 4) {
		var randomPlayer = list[randomNumber(0,list.length)]
		if (fieldOptionsHolder.includes(randomPlayer)) {
			continue
		}
		fieldOptionsHolder.push(randomPlayer)
	}
	var randomizedSelection = shuffle(fieldOptionsHolder);
	return randomizedSelection
}


let reducer = (state=initialState, action) => {
	switch(action.type) {
		case "FETCH_PLAYERS":
      		return Object.assign({}, state, {
        			fieldOptions: setFieldOptions(action.payload),
      			});
		case "START_GAME":
		    return Object.assign({}, state, {
		    	gameState:"",
		    	score: 0
		    });
		case "SELECT_CORRECT_PLAYER":
		    return Object.assign({}, state, {
		    	correctPlayer: state.fieldOptions[randomNumber(0,3)]
		    });
		 case "CORRECT_CHOICE":
		    return Object.assign({}, state, {
		    	score: state.score + 1,
		    	questionCount: state.questionCount - 1,
		    });
		case "WRONG_CHOICE":
		    return Object.assign({}, state, {
		    	questionCount: state.questionCount - 1
		    })
		case "END_GAME": 
		    return Object.assign({}, state, {
		    	gameState: "game-over"
		    })	
		default:
			return state;
	}
}

export default reducer