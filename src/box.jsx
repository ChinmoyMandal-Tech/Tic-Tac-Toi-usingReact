import { useState } from "react"
import styles from "./box.module.css"

function Box({ item, OnClickBox }) {
    const [Disabled,setDisabled] = useState(0)

    return <>
        <button disabled={Disabled} id={item} className={styles.boxx} onClick={(event) => OnClickBox(event,setDisabled)}>
            
        </button>
    </>
}

export default Box;