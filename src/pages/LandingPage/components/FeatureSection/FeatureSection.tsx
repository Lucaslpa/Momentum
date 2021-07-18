/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styles from '../../../../styles/feature.module.scss'
import Img1 from '../../../../public/section2.png'
import Img2 from '../../../../public/section3.png'
import Img3 from '../../../../public/section4.png'
import Img4 from '../../../../public/burguer.jpg'
import Img5 from '../../../../public/burguer2.jpg'
import Img6 from '../../../../public/plataformas.png'
import {Slide} from './Slide'

const FeatureWraper = ({img}: {img: StaticImageData}) => {
    return (<div className={styles.Feature_wrap} >
     <h4> Lorem, ipsum dolor. </h4>
     <h1> Lorem ipsum dolor sit amet consectetur. </h1>
     <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente soluta facilis ipsum deleniti sed. Incidunt.
     </p>
     <Image
      alt=''
      src={img}
     />
 </div>)
}

const ExtraFeatureWraper = ({img}: {img: string}) => {
    return (<div className={styles.Extra_Feature_wrap} >
     <Image
      alt=''
      src={img}
      width = {40}
      height = {50}
     />
      <h2> Lorem ipsum dolor sit amet consectetur. </h2>
     <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente soluta facilis ipsum deleniti sed. Incidunt.
     </p>
 </div>)
}

const FeatureNumbers = () => {
      return ( 
         <div className={styles.Numbers} >
             <div>
                 <span>+12k</span>
                 <span>Lorem, ipsum.</span>
             </div>
             <div>
                  <span>84</span>
                  <span>Lorem, ipsum.</span>
             </div>
             <div>
                 <span>3,07</span>
                 <span>Lorem, ipsum.</span>

             </div>
             <div>
                  <span>24h</span>
                  <span>Lorem, ipsum.</span>
             </div>
         </div>
      )
}



export function FeatureSection() {
    return ( 
        <div  className={styles.Container} >
             <FeatureWraper img={Img1} />
             <FeatureWraper img={Img2} />
             <FeatureWraper img={Img3} />
             <ExtraFeatureWraper img='https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b11be7f11a9de6a863497c0_icon-burger-magenta.svg' />
             <ExtraFeatureWraper img='https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b11be87d0d5fe5d7ff154af_icon-silverware-magenta.svg' />
             <ExtraFeatureWraper img='https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b11be8e11a9dee3ed3497c6_icon-data-magenta.svg' />
             <FeatureNumbers/>
             <FeatureWraper img={Img4} />
             <FeatureWraper img={Img5} />
             <Slide />
             
             <img className={styles.platformsIMG} alt='' src='https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b11c4dc541a84578a131910_logos.png' ></img>
         
            <div>
           
            </div>
        </div>
    )
}