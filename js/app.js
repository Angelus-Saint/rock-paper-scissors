// jshint esversion:6

function mainGame() {

  let playerScore = 0;
  let botScore = 0;
  let roundNum = 1;
  let playerRoundsWon = 0;
  let botRoundsWon = 0;
  let singleMode = false;

  const displayText = document.querySelector(".display-text");
  const playbtn = document.getElementById("play-btn");
  const modeBtn = document.querySelector("#singe-btn");

  const match = document.querySelector(".match");
  const roundNumberDisplay = document.querySelector(".round-number-display");
  const bRoundsWonDisplay = document.querySelector(".bot-rounds-won-display");
  const pRoundsWonDiplay = document.querySelector(".player-rounds-won-display");
  const playerScoreDisplay = document.querySelector(".player-score-display");
  const botScoreDisplay = document.querySelector(".bot-score-display");

  // Starts the game 
  function startGame() {

    playbtn.addEventListener("click", function() {
      singleMode = false;
      resetGame();
      match.classList.add('fadeIn');
      roundNumberDisplay.innerHTML = roundNum;
      alert("ROUND 1 NORMAL MODE 2 OUT OF 3");
    });
  }

  // Sellect mode function 
  function modeToggle() {
    
    modeBtn.addEventListener("click", function() {
      singleMode = true;
      resetGame();
      

      if (singleMode == true) {
        match.classList.add('fadeIn');
        roundNumberDisplay.innerHTML = roundNum;
        alert("ROUND 1 SINGLE MODE");
      }

    });
    return;
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
    pRoundsWon();
  }

  // Score Update Bot 
  function updateScoreBot() {

    const botScoreDisplay = document.querySelector(".computer-score p");

    displayText.textContent = "Bot Wins";
    botScore += 1;
    botScoreDisplay.innerHTML = botScore;
    bRoundsWon();
  }

  // scoring Update Player 
  function pRoundsWon() {

    if (singleMode == true && playerScore === 1) {
      botScoreDisplay.innerHTML = botScore;
      winner();
    }
    
    if(playerScore === 3) {
      playerRoundsWon += 1;
      pRoundsWonDiplay.innerHTML = playerRoundsWon;
      roundsInfoUpdate();
      playerScoreDisplay.innerHTML = playerScore;
      botScoreDisplay.innerHTML = botScore;
      alert("You won the round!!!");
    }

    if(playerRoundsWon === 2) {
      pRoundsWonDiplay.innerHTML = playerRoundsWon;
      winner();
    }
    return;
  }

  // scoring Update Bot 
  function bRoundsWon() {

    if (singleMode == true && botScore === 1) {
      botScoreDisplay.innerHTML = botScore;
      loser();
    }
    
    if(botScore === 3) {
      botRoundsWon += 1;
      bRoundsWonDisplay.innerHTML = botRoundsWon;
      roundsInfoUpdate();
      playerScoreDisplay.innerHTML = playerScore;
      botScoreDisplay.innerHTML = botScore;
      alert("You Lose the Round");
    }

    if(botRoundsWon === 2) {
      bRoundsWonDisplay.innerHTML = botRoundsWon;
      loser();
    }
    return;
  }

  // update Rounds Player
  function roundsInfoUpdate() {

    roundNum += 1;
    roundNumberDisplay.innerHTML = roundNum;
    botScore = 0;
    playerScore = 0;
    return;
  }

  // Reset Button 
  function resetGame() {
    playerScore = 0;
    botScore = 0;
    roundNum = 1;
    playerRoundsWon = 0;
    botRoundsWon = 0;

    playerScoreDisplay.innerHTML = playerScore;
    pRoundsWonDiplay.innerHTML = playerScore;
    bRoundsWonDisplay.innerHTML = botRoundsWon;
    botScoreDisplay.innerHTML = botScore;
    roundNumberDisplay.innerHTML = roundNum;
  }

  // Winner Function 
  function winner() {

    setTimeout(function() { 
      alert("YOU WIN CONGRATS 🎊🎉");
    }, 200);
    resetGame();
  }

  // Winner Function 
  function loser() {

    setTimeout(function() { 
      alert("YOU LOSE 😕😕");
    }, 200);
    resetGame();
  }


  // calling the inner functions
  startGame();
  modeToggle();
  resetGame();
  playMatch();
}

// start the game function 
mainGame();