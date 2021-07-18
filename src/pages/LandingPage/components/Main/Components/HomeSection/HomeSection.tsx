import Image from 'next/image'
import decorationIMG from '../../../../../../public/back.png'
import styles from '../../../../../../styles/sectionhome.module.scss'


export function HomeSection() {


    return (
        <div className={styles.Container}> 
         
             <div className={`${styles.Interactions} a`}  >
                   <h1 className={styles.Text} >Momentum</h1>
                   <h3 className={styles.Sub_Text} >Launch the product-and savor the momemtum</h3>
                   <button className={styles.Button } >Get the App</button>
             </div>
             <div className={`${styles.decoration_IMG} a`} >
                <Image alt= '' src={decorationIMG} />
             </div>
         
                 <Image alt='' src='https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b1437cbda3c5c3369fe4460_arrow.svg' 
                 width={1300}
                 height={740}
                 layout="responsive"

                 />
            
        </div>
    )
}