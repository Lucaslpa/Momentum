import Image from 'next/image'
import AboutIMG from '../../../../public/section1.png'
import styles from '../../../../styles/about.module.scss'


export function AboutSection() {
    return (
        <div className={styles.Container} >
             <h3> Lorem ipsum dolor sit. </h3>
             <h1> Lorem ipsum dolor sit amet consectetur adipisicing. </h1>
             <Image
              alt=''
              src={AboutIMG}
             />
        </div>
    )
}