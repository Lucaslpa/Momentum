/* eslint-disable @next/next/no-img-element */
import {AboutSection} from './Components/AboutSection/AboutSection'
import {DownloadSection} from './Components/DownloadSection/DownloadSection'
import {FeatureSection} from './Components/FeatureSection/FeatureSection'
import {HomeSection} from './Components/HomeSection/HomeSection'
import {UpdateSction} from './Components/UpdatesSection/UpdatesSection'
import styles from '../../../../styles/main.module.scss'

export function Main() {
    return (
        <main>
             <HomeSection/>
             <AboutSection/>
             <FeatureSection/>
             <img className={`${styles.bottom_IMG} `} alt=''  src="https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b10cd0c3a8396da6772516b_bg-apps.jpg" />
             <DownloadSection/>
             <UpdateSction/>
        </main>
         
    )
}