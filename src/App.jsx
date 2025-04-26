import { useState } from 'react'
import styles from './App.module.css'
import Box from './box'

function App() {
  const [count, setCount] = useState(0)
  const [boxContex, setboxContex] = useState(['', '', '', '', '', '', '', '', '']);
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
  const [click, setclick] = useState([])
  const [player, setplayer] = useState("X")

  const OnClickBox = (item, setDisabled) => {
    let BoxId = item.target.id;
    // console.log(BoxId)
    // console.log(count)

    if (player === "X") {
      item.target.innerText = "X"
      boxContex[BoxId] = 'X'
      setplayer("O")
      item.disabled = true
    } else {
      item.target.innerText = "O"
      boxContex[BoxId] = 'O'
      setplayer("X")
    }
    // console.log(boxContex)
    console.log(count)
    let z = count + 1;
    setCount(z)
    console.log(count)
    setDisabled(1)
    let i
    for (i = 0; i < 8; i++) {
      let a = winer[i][0]
      let b = winer[i][1]
      let c = winer[i][2]
      if (boxContex[a] && boxContex[a] === boxContex[b] && boxContex[b] === boxContex[c]) {
        console.log(boxContex[a])
        // break
        return 1
      }
      if (count === 9) {

        console.log("Drow", count)
      }
    }

  }

  return (
    <div className={styles.display}>
      <div className={styles.box}>
        {box.map((item) => <Box key={item} item={item} OnClickBox={OnClickBox}></Box>)}
      </div>

    </div>
  )
}

export default App
