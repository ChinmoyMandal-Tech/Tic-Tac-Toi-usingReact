import styles from "./box.module.css"

function Box({ item, OnClickBox, allButton, disabled,boxItem }) {
    
    
    return <>
        <button disabled={disabled || allButton} id={item} className={styles.boxx} onClick={(event) => OnClickBox(event)}>
            {boxItem}
        </button>
    </>
}

export default Box;