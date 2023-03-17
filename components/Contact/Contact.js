import styles from '../../styles/Contact.module.css'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className={styles.container}>
          <h1>Contact Me</h1>
          <div className={styles.contactText}>
              <p>
                  Thank you for checking out my portfolio!
                  Please feel free to say hi, and I&apos;ll definitely message back!
              </p>
          </div>
          <a href="mailto:gerard.c.sanjuan@gmail.com" rel="noopener noreferrer" target="_blank" className={styles.button}>Email</a>
      </div>
    </section>
  )
}

export default Contact