import Request from 'superagent';


let actions = {
	startGame: function() {
		return (dispatch) => {
				dispatch({
					type: "START_GAME"
				})
			} 
	},

	fetchPlayers: function() {
		return (dispatch) => {
			var url = 'https://api.fantasydata.net/nba/v2/json/Players';

			Request.get(url).set("Ocp-Apim-Subscription-Key", "0aa332c1c9e547679652afd412b94c77")
				.then((response) => {
				var payload = response.body
				dispatch({
					type: "FETCH_PLAYERS",
					payload: payload
				})
			})
			.then(()=>{
				dispatch({
					type: "SELECT_CORRECT_PLAYER"
				})
			})
		}
	},

	correctChoice: function() {
		return(dispatch) => {
			dispatch({
				type: "CORRECT_CHOICE"
			})
		}
	},

	wrongChoice: function() {
		return(dispatch) => {
			dispatch({
				type: "WRONG_CHOICE"
			})
		}
	},

	endGame: function() {
		return(dispatch) => {
			dispatch({
				type: "END_GAME"
			})
		}
	}
}

export default actions