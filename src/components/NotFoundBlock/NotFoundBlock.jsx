import React from 'react'
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <p>😕</p>
            <p>Ничего не найдено </p>
            <p className={styles.description}>К сожалению данная страница не существует</p>
        </div>
    )
}
export default NotFoundBlock

