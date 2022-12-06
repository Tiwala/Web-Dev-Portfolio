import Head from 'next/head'
import Header from '../components/layout/Header'
import styles from '../styles/Home.module.css'
import MainBody from '../components/MainBody/MainBody'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Links from '../components/layout/Links'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Gerard&apos;s Portfolio</title>
        <meta name="description" content="Gerard San Juan's Web Dev Portfolio" />
        <link rel="icon" href='./favicon.ico' />
      </Head>
      <Header/>
      <MainBody/>
      <About/>
      <Projects/>
      <Contact/>
      <Links/>
    </div>
  )
}
