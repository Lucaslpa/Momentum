import Head from 'next/head'
import Image  from 'next/image'
import styles from '../styles/main.module.scss'
import {LandingPage} from './LandingPage/LandingPage'


export default function index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Landing Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
      </Head>
      <LandingPage/>
    </div>
  )
}
