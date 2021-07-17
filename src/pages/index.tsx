import Head from 'next/head'
import Image  from 'next/image'
import styles from '../styles/main.module.scss'
import {LandingPage} from './LandingPage/LandingPage'


export default function index() {
  return (
    <div className={styles.container}>
      <LandingPage/>
    </div>
  )
}
