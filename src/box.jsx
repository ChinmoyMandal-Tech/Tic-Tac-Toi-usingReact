import { useState } from "react"
import styles from "./box.module.css"

function Box({ item, allButton, OnClickBox }) {
    const [Disabled,setDisabled] = useState(0)

    return <>
        <button disabled={Disabled || allButton} id={item} className={styles.boxx} onClick={(event) => OnClickBox(event,setDisabled)}>
            
        </button>
    </>
}

export default Box;