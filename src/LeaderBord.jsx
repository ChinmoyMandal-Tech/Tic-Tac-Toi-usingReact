import styles from './LeaderBord.module.css';

// setplayer_1(player_1 + 1)
function LeaderBord({ result }) {
    // const [player_1, setplayer_1] = useState(0);
    
    
    // const [player_2, setplayer_2] = useState(0);
        // console.log(result);
        // setplayer_2( result==='O' && player_2 + 1);
    return <>
        
        <div className={styles.leaderboard}>
            <div className={styles.box}>
                <div>Player_X</div>
                <div>{result[1]}</div>
            </div>
            <div className={styles.box}>
                <div>Player_O</div>
                <div>{result[2]}</div>
            </div>
        </div>
    </>
}

export default LeaderBord;