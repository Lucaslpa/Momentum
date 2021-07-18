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
                 src="https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5afa1b861bc189407c1a9b2c_dash-device.png"
                 width={2250}
                 height={1390}
                 layout="responsive"
                 />
        </div>
    )
}