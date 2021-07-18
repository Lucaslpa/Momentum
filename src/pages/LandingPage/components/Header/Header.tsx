import styles from '../../../../styles/header.module.scss'
import Image from 'next/image'
import Logo from '../../../../public/logo.png'
import {toggleClass} from '../../actions/Header'

export function Header() {


  function openMenu(){
     toggleClass(styles.Menu, styles.Open_Menu)
     toggleClass(styles.Menu_List, styles.Open_MenuList)
  }
    
  
   

    return (
      <header className={styles.Header_Container} >
        <div className={styles.Logo_Image} >
          <Image
           src={Logo}
           alt='Logo'
           width={120}
           height={42}
          />
        </div>
          
        <nav className={styles.Menu}   
         onClick={e => openMenu()}
        >        
            <svg fill='white' className={styles.Menu_Img} viewBox="0 0 100 80" width="30" height="40">
                <rect width="70" height="10"></rect>
                <rect y="30" width="70" height="10"></rect>
                <rect y="60" width="70" height="10"></rect>
             </svg>
             <ul className={styles.Menu_List}  >
                 <li className={styles.Menu_List_Item}>About</li>
                 <li className={styles.Menu_List_Item}>Feature</li>
                 <li className={styles.Menu_List_Item}>How to Use</li>
                 <li className={styles.Menu_List_Item}>Download</li>
             </ul>
          </nav>
      </header>
    )
}