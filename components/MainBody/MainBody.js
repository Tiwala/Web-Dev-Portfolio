import React from 'react'
import styles from '../../styles/MainBody.module.css'

const MainBody = () => {
  

  return (
    <section className='landing'>
      <div className={styles.container}>
          <div className={styles.normalText}>
            <h2>Hi. I'm</h2>
          </div>
          <div className={styles.name}>Gerard San Juan</div>
          <div className={styles.normalText}>
            <h2>Software Engineer, Web Developer, and Army Veteran.</h2>
            <p className={styles.paragraph}>I am a software engineer specialized in creating applications that make people's lives easier.
            <br/>
            <br/>
            If I made it, I made it with you in mind.
            </p>
          </div>
      </div>
    </section>
  )
}

export default MainBody