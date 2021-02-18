import Link from 'next/link'
import Head from 'next/head'
import Profile from '../components/profile.js'
import styles from '../styles/aboutme.module.scss'




export default function AboutMe() {
  return (
    <div className={styles.aboutme}>
      <Head>
        <title>about me</title>
      </Head>
      <main className={styles.main}>
        <Profile />

      </main>
      <footer className={styles.footer}>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </footer>

      
    </div>
  )
}