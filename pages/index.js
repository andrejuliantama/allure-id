import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Jump from 'react-reveal/Jump';
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.container}>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Jump>
            <h1 className={styles.title}>
              Hell - <o>o</o>
            </h1>
          </Jump>
          
        </main>
        <footer className={styles.footer}> 
            <Link href="/about-me">
              <a>about me</a>
            </Link>
            <div className={styles.line}></div>
            <Link href="/weather">
              <a>weather</a>
            </Link>
          
         
          
        </footer>
      </div>
    </div>
  )
}
