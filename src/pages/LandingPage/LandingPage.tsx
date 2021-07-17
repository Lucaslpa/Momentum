import Head from 'next/head'
import styles from '../../styles/main.module.scss'
import {Header} from './components/Header/Header'

export  function LandingPage() {
  return (
    <div className={styles.Container}>
      <Head>
        <title>Landing Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
   <Header/>

 
   
    </div>
  )
}
