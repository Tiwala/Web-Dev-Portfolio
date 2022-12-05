import styles from '../../styles/Contact.module.css'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className={styles.container}>
          <h1>Contact Me</h1>
          <div className={styles.contactText}>
              <p>
                  I am currently open to opportunities, and would love to discuss any roles you might have for me!
                  Please feel free to say hi, and I'll definitely message back!
              </p>
          </div>
          <a href="mailto:gerard.c.sanjuan@gmail.com" rel="noopener noreferrer" target="_blank" className={styles.button}>Email</a>
      </div>
    </section>
  )
}

export default Contact