/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/main.module.scss'
import {Header} from './components/Header/Header'
import {HomeSection} from './components/HomeSection/HomeSection'
import {AboutSection} from './components/AboutSection/AboutSection'
import {FeatureSection} from './components/FeatureSection/FeatureSection'
import {DownloadSection} from './components/DownloadSection/DownloadSection'
import {UpdateSction} from './components/UpdatesSection/UpdatesSection'
import {Footer} from './components/Footer/Footer'

export  function LandingPage() {
  return (
  <div className={styles.Container}>
   <Header/>
    <main>
      <HomeSection/>
      <AboutSection/>
      <FeatureSection/>
      <img className={styles.bottom_IMG} alt=''  src="https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b10cd0c3a8396da6772516b_bg-apps.jpg" />
      <DownloadSection/>
      <UpdateSction/>
    </main>
    <Footer/>
  </div>
  )
}
