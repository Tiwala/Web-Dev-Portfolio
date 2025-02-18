import styles from '../../styles/MainBody.module.css'

const MainBody = () => {
  

  return (
    <div className={styles.container}>
        <div className={styles.normalText}>
          <h2>Hi. I&apos;m</h2>
        </div>
        <div className={styles.name}>Gerard San Juan</div>
        <div className={styles.normalText}>
          <h2>Software Engineer, Web Developer, and Army Veteran.</h2>
          <p className={styles.paragraph}>I am a software engineer specialized in creating applications that provide value to organizations, big and small.
          <br/>
          <br/>
          Whether it&apos;s to sell candy, or to save the world, we will create great things together, with style.
          </p>
        </div>
    </div>
  )
}

export default MainBody