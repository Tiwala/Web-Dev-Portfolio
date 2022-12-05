import Image from 'next/image'
import styles from '../../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {

    
  return (
    <div className={styles.header}>
      <div className={styles.logoDiv}>
          <a href="">
            <Image src='/./Logo.png' alt="Gerard San Juan Logo" width={90} height={90}/>
          </a>
      </div>
      <div className={styles.headerDiv}>
        <div className={styles.headerDiv2}>
          <Link className={styles.nav} href='#about'>
              About
          </Link>
          <Link className={styles.nav} href='#projects'>
              Projects
          </Link>
          <Link className={styles.nav} href='#contact'>
              Contact
          </Link>
          <Link className={styles.nav} href='https://drive.google.com/file/d/1FIW2agnwP8Fn9aQHo8jxSMfzEsR4R_1n/view?usp=sharing' target="_blank" rel="noreferrer">
              Resume
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header