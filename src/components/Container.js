import styles from './Container.module.css'
import React from 'react'

const Container = ({ children }) => (
    <div className={styles.container}>{children}</div>
)

export default Container