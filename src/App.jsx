import { useState, useEffect } from 'react'
import styles from './App.module.css'
import Box from './box'
import DispayWin from './DisplayWin';
import LeaderBord from './LeaderBord';

function App() {
  const [allButton, setallButton] = useState('');
  const [count, setCount] = useState(0);
  const [boxContex, setboxContex] = useState(['', '', '', '', '', '', '', '', '']);
  const [allDisable, setallDisable] = useState(['', '', '', '', '', '', '', '', '']);
  const box = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const winer = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 3, 6]]
  const [newButton, setnewButton] = useState(0)
  const [player, setplayer] = useState("X")
  const [gameResult, setgameResult] = useState('');

  const priveasData = JSON.parse(localStorage.getItem("tic-tac-toi")) || {};
  
  const [leaderboard, setleaderboard] = useState({
        1: priveasData[1] ? priveasData[1] : 0,
        2: priveasData[2] ? priveasData[2] : 0
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tic-tac-toi")) || {};
    data[1] = leaderboard[1];
    data[2] = leaderboard[2];
    localStorage.setItem("tic-tac-toi", JSON.stringify(data));
  }, [leaderboard]);

  function ResetGame() {
    const isConfirmed = confirm("Are you sure you want to reset the game?");
    if (isConfirmed) {
      console.log("yes");
      localStorage.removeItem("tic-tac-toi");
      setleaderboard({ 1: 0, 2: 0 });
      newGame();
    }
  }

  const leaderboradUpdate = (event) => {
    console.log(event);
    if (event === 'O') {
      setleaderboard(prev => ({
        ...prev,
        2: prev[2] + 1
      }));
      console.log("o");
    } else if (event === 'X') {
      setleaderboard(prev => ({
        ...prev,
        1: prev[1] + 1
      }));
    }

    console.log(leaderboard[1]);
  }

  const OnClickBox = (item) => {
    const BoxId = item.target.id;
    if (boxContex[BoxId] || newButton === 1) return;

    const newContext = [...boxContex];
    newContext[BoxId] = player;
    setboxContex(newContext);

    const newDisable = [...allDisable];
    newDisable[BoxId] = true;
    setallDisable(newDisable);

    const newCount = count + 1;
    setCount(newCount);

    for (let i = 0; i < winer.length; i++) {
      const [a, b, c] = winer[i];
      if (newContext[a] && newContext[a] === newContext[b] && newContext[b] === newContext[c]) {
        setgameResult(`${newContext[a]}`);
        setallButton('1');
        setnewButton(1);
        console.log(`Winner: ${gameResult}`);
        leaderboradUpdate(newContext[a]);
        // return;
      }
    }

    if (newCount === 9) {
      console.log("Draw");
      setgameResult("Draw")
      setnewButton(1);
    }

    setplayer(player === "X" ? "O" : "X");
  };



  const newGame = () => {
    setallButton('')
    setnewButton(0)
    setCount(0);
    setgameResult('')
    let i
    for (i = 0; i < 9; i++) {
      boxContex[i] = ''
      allDisable[i] = ''
    }
  }

  return (<center>
    <div className={styles.tital}>Tic Tac Toi</div>
    <LeaderBord result={leaderboard} />
    <div className={styles.display}>
      <div className={styles.box}>
        {box.map((item) => <Box
          key={item}
          item={item}
          disabled={allDisable[item]}
          allButton={allButton}
          boxItem={boxContex[item]}
          OnClickBox={OnClickBox}
        />)}
      </div>
    </div>
    {gameResult.length >= 1 && <DispayWin gameResult={gameResult} />}
    <button className={styles.newbutton} onClick={() => newGame()}>New Game</button>
    <button className={styles.resetbutton} onClick={() => ResetGame()}>Reset Game</button>
  </center>
  )
}

export default App
