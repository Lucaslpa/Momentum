import Image from 'next/image'
import styles from '../../../../../../styles/slide.module.scss'
import { useState } from 'react'


export function Slide() {
   const [currentIndex, setCurrentIndex ] = useState(0)
   
    const texts = [{text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, harum iusto nostrum sint assumenda corrupti at consectetur, alias molestias, esse facilis fugiat! Nisi aspernatur, tempora earum nesciunt voluptate numquam sequi quam officiis, a ex repellendus aperiam. Temporibus sequi deserunt atque.' , source: 'Washington Post'}, {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, harum iusto nostrum sint assumenda corrupti at consectetur.',
        source: 'New York Times'
    }, {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, harum iusto nostrum sint assumenda corrupti at consectetur Awesome Handle with a MORE AND MORE.',
        source: 'revista Caras'
    }]  

    function slideLeft() {
        if(currentIndex === 0) {
               setCurrentIndex(texts.length - 1)
        } else {
               setCurrentIndex(currentIndex - 1)
        }
    }
    function slideRight() {
         if(currentIndex === (texts.length - 1)) {
             setCurrentIndex(0)
         } else {
            setCurrentIndex(currentIndex + 1)
         }
    }

    return ( 
        <div className={`${styles.Container} a`} >
            <div>
                 <Image
                   alt='review'
                   src="https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b14481dda3c5c4b9bfe5147_quotation.svg"
                   width={60}
                   height={60}
                 />
            </div>
            <div className={styles.slide_Wrapper} >
                <button onClick={() => slideLeft()} >
                        {'<'}
                 </button>
               <div className={styles.Slide_Contents} >
               <div className={styles.Content} >
                      <p>{texts[currentIndex].text}</p>
                      <strong>{texts[currentIndex].source}</strong>
                  </div>    
               </div>
                 <button onClick={() => slideRight()} >
                        {'>'}
                </button>
             </div>
        </div>

    )
}