import React from 'react';
import '../styles/HomePageStyles.css';
import step1 from '../images/step1.jpg';
import step2 from '../images/step2.jpg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const startGame = () => {
      navigate('/simulation'); // Adjust the path as necessary
    };

  return (
    <div className="home-container">
        <div className="content-container">
        <div className="home-description">
        <h1 className="home-title">Welcome to the Game of Life</h1>
      <p className="home-text">
        Conway’s Game of Life (or just, Life, as I will call it) is a game that is “played” based on a grid system.
        Every individual location on the grid can be understood as a cell. The game, or simulation, occurs over
        iterations, or generations. After a generation, a cell may change from living or dead based on how many living
        or dead neighbors it had in a previous iteration. A neighbor is any immediately adjacent spot on the grid
        (horizontal, vertical, or diagonal). We can understand this more clearly with an example and a clear demonstration
        of the rules.
      </p>
      <h2>Rules of the Game</h2>
      <p>You are welcome to read about the four simple rules of Life:</p>
      <ul className="game-rules">
        <li>A living cell with less than two living neighbours dies, as if by underpopulation.</li>
        <li>A living cell with two or three live neighbours lives on to the next generation.</li>
        <li>A living cell with more than three live neighbours dies, as if by overpopulation.</li>
        <li>A dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
      </ul>
        </div>
        <div className="home-photo">
        <img src={step1} alt="Game of Life Iteration 1" />
        <img src={step2} alt="Game of Life Iteration 2" />
        <div className="game-description">
        <p>
        In the above examples, we can understand the white boxes to be dead cells and the black cells to be alive.  In the next iteration, most of the cells would stay the same.  The exceptions here would be cell 3, which would turn from dead (pink) to alive (black), due to rule number 4.  Additionally, 8 would turn from alive (black) to dead (pink) due to rule 1. 
        On the next iteration, the board would like the second photo.
        </p>
        </div>
        </div>
      </div>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
};

export default HomePage;