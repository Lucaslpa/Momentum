/* eslint-disable @next/next/no-img-element */
import styles from '../styles/main.module.scss'
import {Header} from './components/Header/Header'
import {Main} from './components/Main/Main'
import {Footer} from './components/Footer/Footer'
import { useEffect } from 'react'
import animate from '../styles/subir.module.scss'

export  function LandingPage() {

 
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
           if(entry.isIntersecting) {
             entry.target.classList.add(animate.Subir)
           }
      });
 }, { threshold: 0.20}); 
    const elements = document.querySelectorAll('.a')
   if(elements.length > 0) {
    elements.forEach(element => observer.observe(element))
   }
   }, [])

  return (
  <div id='Container' className={styles.Container}>
    <Header/>
    <Main/>
    <Footer/>
  </div>
  )
}
