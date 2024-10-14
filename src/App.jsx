import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("Pick your option!");
  const [score, setScore] = useState(0); 
  const [cscore, setcScore] = useState(0);
  const [winner, setWinner] = useState(null);
  const [human, humanSelect] = useState(null);
  const [ai, aiSelect] = useState(null);

  const Game = (player_Pick) => {
    const choices = ['rock', 'paper', 'scissors']; 
    const computer_pick = choices[Math.floor(Math.random() * 3)];

    let output = '';
    if (player_Pick === computer_pick) {
      output = "It's a tie!";
      setResult(output);
      humanSelect(player_Pick);
      aiSelect(computer_pick);

    } else if (
      (player_Pick === 'rock' && computer_pick === 'scissors') ||
      (player_Pick === 'scissors' && computer_pick === 'paper') ||
      (player_Pick === 'paper' && computer_pick === 'rock')
    ) {
      output = "You Got 1 Point Nice!!";
      setScore(score + 1);
      setResult(output);
      humanSelect(player_Pick);
      aiSelect(computer_pick);
    } else {
      output = "Computer Got 1 Point!";
      setcScore(cscore + 1);
      setResult(output);
      humanSelect(player_Pick);
      aiSelect(computer_pick);
    }

    if (score + 1 === 5) {
      setWinner("You win!");
    } else if (cscore + 1 === 5) {
      setWinner("Computer wins!");
    }
  }

  const resetGame = () => {
    setScore(0);
    setcScore(0);
    setWinner(null);
    setResult("Pick your option!");
    humanSelect(null);
    aiSelect(null);
  }

  return (
    <>
      <div className='App'>
        <h2>Rock, Paper, Scissors</h2>
        <div className='buttons'>
          <button className='btn' onClick={() => Game('rock')}><img className='stone' src='images/rock.png' alt="rock"/></button> 
          <button className='btn' onClick={() => Game('paper')}><img className='stone' src='images/paper.png' alt="paper"/></button> 
          <button className='btn' onClick={() => Game('scissors')}><img className='stone' src='images/scissor.png' alt="scissors"/></button> 
        </div>
        <div className='selection'>
          {human === 'rock' && (
            <div className='output_human'><p>You select</p><img className='rock' src="images/rock.png" alt="rock"/></div>
          )}
          {human === 'paper' && (
            <div className='output_human'><p>You select</p><img className='rock' src="images/paper.png" alt="paper"/></div>
          )}
          {human === 'scissors' && (
            <div className='output_human'><p>You select</p><img className='rock' src="images/scissor.png" alt="scissors"/></div>
          )}
          {ai === 'rock' && (
            <div className='output'><p>Computer Selects</p><img className='rock' src="images/rock.png" alt="rock"/></div>
          )}
          {ai === 'paper' && (
            <div className='output'><p>Computer Selects</p><img className='rock' src="images/paper.png" alt="paper"/></div>
          )}
          {ai === 'scissors' && (
            <div className='output'><p>Computer Selects</p><img className='rock' src="images/scissor.png" alt="scissors"/></div>
          )}
        </div>
        <p className="result-text">{result}</p>
        <div className='human_com'>
          <p className="score-text">Your Score: {score}</p>
          <p className="computer-score-text">Computer Score: {cscore}</p>
        </div>
        {winner && (
          <div className='popup'>
            <h1>{winner}</h1>
            <button onClick={resetGame} className='play_again'>Play again</button>
          </div>
        )}
      </div>
    </>
  )
}

export default App;
