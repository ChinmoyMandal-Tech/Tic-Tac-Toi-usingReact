import { useState } from 'react'
import styles from './App.module.css'
import Box from './box'

function App() {
  const [allButton, setallButton] = useState('');
  const [count, setCount] = useState(0)
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
        console.log(`Winner: ${newContext[a]}`);
        setallButton('1');
        setnewButton(1);
        return;
      }
    }

    if (newCount === 9) {
      console.log("Draw");
      setnewButton(1);
    }

    setplayer(player === "X" ? "O" : "X");
  };


  const newGame = () => {
    setallButton('')
    setnewButton(0)
    setCount(0);
    let i
    for (i = 0; i < 9; i++) {
      boxContex[i] = ''
      allDisable[i] = ''
    }
  }

  return (<center>
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
    {newButton === 1 && <button className={styles.newbutton} onClick={() => newGame()}>New Game</button>}
  </center>
  )
}

export default App
