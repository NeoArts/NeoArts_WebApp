import React from 'react'
import * as styles from './button.module.css'

function Button( { text, type } ) {
    return (
        <div className={styles[type]}>
            {text}
        </div>
    )
}

export default Button