const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput
    } else {
    console.log('Error! Try again.')
  }
  }
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
      default:
        return 'Invalid';
        break;
    }
  }
  
  determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie!'
    } 
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
          return 'Computer wins!'
      } else {
          return 'You win!'
      }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'Computer wins!'
      } else {
        return 'You win!'
      }
      }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!'
      } else {
        return 'You win!'
      }
    }
    if (userChoice === 'bomb'){
      return 'You win!'
    } else {
      return 'You win!'
    }
  }
  // console.log(determineWinner('rock', 'rock'))
  
  playGame = () => {
    let userChoice = getUserChoice('bomb')
    let computerChoice = getComputerChoice()
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame()