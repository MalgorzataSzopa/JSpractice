const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('ERROR')
  }
};

const getComputerChoice = () => {
  const temp = Math.floor(Math.random() * 3);
  if(temp === 0) {
    return 'rock';
  } else if (temp === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'TIE';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "AI won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "AI won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "AI won!";
    } else {
      return "You won!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();

  console.log(userChoice + ' vs ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();




