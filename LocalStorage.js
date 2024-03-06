const initalStoredData = {
	totalGames: 0,
	lastWinner: '',
	player1: { username: 'player1', winCount: 0 },
	player2: { username: 'player2', winCount: 0 }
}

const extractData = (key) => {
	data = localStorage.getItem(key)
	return data ? JSON.parse(data) : initalStoredData
}

const storeData = (key, value) => localStorage.setItem(key, JSON.stringify(value))
