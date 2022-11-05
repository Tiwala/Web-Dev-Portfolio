import React from 'react'
import styles from '../../styles/MainBody.module.css'

const MainBody = () => {
  return (
    <div className={styles.container}>
        <div className={styles.spacerDiv}></div>
        <div className={styles.normalText}>
            Hi. I'm
        </div>
        <div className={styles.name}>Gerard C. San Juan</div>
        <div className={styles.normalText}>
          I create
        </div>
    </div>
  )
}

export default MainBody