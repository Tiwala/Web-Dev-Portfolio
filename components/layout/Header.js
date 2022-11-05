import React from 'react'
import styles from '../../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerDiv}>
              <a className={styles.nav}>
                  About
              </a>
              <a className={styles.nav}>
                  Experience
              </a>
              <a className={styles.nav}>
                  Projects
              </a>
              <a className={styles.nav}>
                  Contact
              </a>
      </div>
    </div>
  )
}

export default Header