let storedData

class Game {
	init() {
		this.gameWorld = new GameWorld()
		storedData = extractData('e8tBallData')
		document.getElementById('player1-title').innerHTML = storedData.player1.username
		document.getElementById('player2-title').innerHTML = storedData.player2.username
		document.getElementById('winner1').innerHTML = storedData.player1.winCount
		document.getElementById('winner2').innerHTML = storedData.player2.winCount
		document.getElementById('totalGames').innerHTML = storedData.totalGames
	}

	start() {
		poolGame.init()

		poolGame.mainLoop()
	}

	mainLoop() {
		Canvas.clear()
		poolGame.gameWorld.update()
		poolGame.gameWorld.draw()
		mouse.reset()

		requestAnimationFrame(poolGame.mainLoop)
	}
}

let poolGame = new Game()
