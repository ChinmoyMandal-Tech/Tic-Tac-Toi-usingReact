import styles from './DisplayWin.module.css'
function DispayWin({gameResult}) {

    return <div className={styles.win}>
        {(gameResult.length===1) ? `winer is ${gameResult}` : `Game is Draw`}
    </div>
    
}

export default DispayWin;