const { get } = require("lodash");

// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide gamescreen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph = game.userName + ':' + score.user + 'v. CPU' + score.cpu;


}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph = " ";
  gameHistoryParagraph = scoreParagraph;

}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username ;
  game = new RockPaperScissors(userName);
  // Complete
});

// go-button EventListener
startGameButton.addEventListener(`click`, function () {
  get.userSelection;
  get.RockPaperScissors.play(userSelection);
  scoreParagraph = updateScoreTallyUI();
  gameHistoryParagraph = updateGameHistoryUI();
  
});