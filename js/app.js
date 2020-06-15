// jshint esversion:6

function mainGame() {

  let playerScore = 0;
  let botScore = 0;
  let roundNum = 0;
  let playerRoundsWon = 0;
  let botRoundsWon = 0;

  const displayText = document.querySelector(".display-text");
  const playbtn = document.getElementById("play-btn");
  const rounds = document.querySelector(".roundNumber");
  const bRoundsWonDisplay = document.querySelector(".bot-rounds-won-display");
  const pRoundsWonDiplay = document.querySelector(".player-rounds-won-display");
  const playerScoreDisplay = document.querySelector(".player-score-display");
  const botScoreDisplay = document.querySelector(".bot-score-display");

  // Starts the game 
  function startGame() {

    const match = document.querySelector(".match");

    playbtn.addEventListener("click", function() {
      match.classList.add('fadeIn');
      rounds.innerHTML = "1";
    });
  }

  // play a match 
  function playMatch() {
    const  options = document.querySelectorAll(".options button");
    const  playerHand = document.querySelector(".player-hand");
    const  botHand = document.querySelector(".bot-hand");

    // bot options 
    const botOptions = ["rock", "paper", "scissors"];
    
    // looping though each option
    options.forEach(function (option) {
      option.addEventListener("click", function() {
        // Bot choice 
        const botNum = Math.floor(Math.random() * 3);
        const botChoice = botOptions[botNum];
        // compare Hands call 
        compareHands(this.textContent, botChoice);

        // update the images 
        playerHand.src = `./images/${this.textContent}.png`;
        botHand.src = `./images/${botChoice}.png`;
      });
    });
  }
  
  // See who is winning 
  function compareHands(playerChoice, botChoice) {

    // check for Tie 
    if(playerChoice === botChoice) {
      displayText.textContent = "Tie Try Again";
      return;
    }

    // Check for rock 
    if(playerChoice === "rock" && botChoice === "scissors") {
      updateScorePlayer();
      return;
    } else if (playerChoice === "scissors" && botChoice === "rock") {
      updateScoreBot();
      return;
    }

    // check for paper
    if(playerChoice === "paper" && botChoice === "rock") {
      updateScorePlayer();
      return;
    } else if (playerChoice === "rock" && botChoice === "paper") {
      updateScoreBot();
      return;
    }

    // check for scissors
    if(playerChoice === "scissors" && botChoice === "paper") {
      updateScorePlayer();
      return;
    } else if (playerChoice === "paper" && botChoice === "scissors") {
      updateScoreBot();
      return;
    }
  }

  // Score Update Player
  function updateScorePlayer() {

    const playerScoreDisplay = document.querySelector(".player-score p");
    
    displayText.textContent = "Player Wins";
    playerScore += 1;
    playerScoreDisplay.innerHTML = playerScore;
  }

  // Score Update Bot 
  function updateScoreBot() {

    const botScoreDisplay = document.querySelector(".computer-score p");

    displayText.textContent = "Bot Wins";
    botScore += 1;
    botScoreDisplay.innerHTML = botScore;
  }

  // Round Update Player 
  function pRoundsWon() {
    
    if(playerScore == 5) {
      playerRoundsWon += 1;
      pRoundsWonDiplay.innerHTML = playerRoundsWon;
    }

    // update Rounds Player
    if(playerScore == 5 || 10 || 15 || 20) {
      roundNum += 1;
      rounds.innerHTML = roundNum;
      playerScoreDisplay.innerHTML = "0";
    }
  }

  // Round Update bot 
  function bRoundsWon() {

    // update Rounds Bot
    if(botScore == 5 || 10 || 15 || 20) {
      roundNum = roundNum + 1;
      rounds.innerHTML = roundNum;
    }
    
    if(playerScore == 5) {
      playerRoundsWon += 1;
      pRoundsWonDiplay.innerHTML = playerRoundsWon;
    }
  }

  // Score Update 
  // function bRoundsWon() {
    
  //   if(playerScore == 5) {
  //     playerRoundsWon += 1;
  //     pRoundsWonDiplay.innerHTML = playerRoundsWon;
  //   }
  // }


  // calling the inner functions
  startGame();
  playMatch();
}

// start the game function 
mainGame();