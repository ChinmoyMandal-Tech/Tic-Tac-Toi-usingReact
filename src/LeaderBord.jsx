import styles from './LeaderBord.module.css';
import { useState } from 'react'


function LeaderBord({ xy }) {
    const [player_1,setplayer_1] = useState(0);
    let player_2 = 0;
    if (xy) setplayer_1(player_1+1);
    return <>
        
        <div className={styles.leaderboard}>
            <div className={styles.box}>
                <div>Player_X</div>
                <div>{ player_1}</div>
            </div>
            <div className={styles.box}>
                <div>Player_O</div>
                <div>{player_2}</div>
            </div>
        </div>
    </>
}

export default LeaderBord;