/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styles from '../../../../styles/feature.module.scss'
import {Slide} from './Slide'


const FeatureWraper = ({img, height}: {img: string, height: string}) => {
    return (<div className={styles.Feature_wrap} >
   <div>
       <h4> Lorem, ipsum dolor. </h4>
       <h1> Lorem ipsum dolor sit amet consectetur. </h1>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente soluta facilis ipsum deleniti sed. Incidunt.
        </p>
   </div>
     <div className={styles.Image} style={{margin: '10px' ,position: "relative", width: "100%", height:`${height}`, paddingBottom: "20%" }} >
     <Image
      alt=''
      src={img}
      layout="fill"
      objectFit="contain" 
     />
     </div>
    
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
             {
                 ["https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b11c6a9804c1fef0bd52833_app-06.png", "https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b11bd467f519f18c7efccba_app-05.png",
                  "https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b10d56ff2733b40d5e55e64_app-04.png"].map((imagem, index) => <FeatureWraper key={index} height='400px' img={imagem} />)
             }
           <div className={styles.Extra} >
           {
                 ['https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b11be7f11a9de6a863497c0_icon-burger-magenta.svg','https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b11be87d0d5fe5d7ff154af_icon-silverware-magenta.svg', 'https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b11be8e11a9dee3ed3497c6_icon-data-magenta.svg'].map((image, index) => <ExtraFeatureWraper key={index} img={image} />)
             }
           </div>
             <FeatureNumbers/>
            {
                 ["https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5afa50601bc189f92b1ad1f1_img-003.jpg", "https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5afa506095815377cd097a34_img-002.jpg"].map((imagem, index) => <FeatureWraper key={index} height='250px' img={imagem} />)
            }
             <Slide />
             <img className={styles.platformsIMG} alt='' src='https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b11c4dc541a84578a131910_logos.png' ></img>
        </div>
    )
}