import React from 'react'
import styles from '../../styles/Links.module.css'
import Image from 'next/image'

const Links = () => {
  return (
    <div className={styles.linksDiv}>
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <a className={styles.tags} href="https://github.com/Tiwala" aria-label="GitHub" target="_blank" rel="noreferrer">
                    <Image alt="GitHub Icon" width={'35'} height={'35'} src="/GitHubIcon.png"/>
                </a>
            </li>
            <li className={styles.listItem}>
                <a className={styles.tags} href="https://linkedin.com/in/gerardsanjuan" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                    <Image alt="LinkedIn Icon" width={'35'} height={'35'} src="/LinkedinIcon.png"/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Links