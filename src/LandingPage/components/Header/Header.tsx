import styles from '../../../styles/header.module.scss'
import Image from 'next/image'
import Logo from '../../../../public/logo.png'
import {toggleClass,focusIn} from '../../actions/Header'

export function Header() {


  function openMenu(){
     toggleClass(styles.Menu, styles.Open_Menu)
     toggleClass(styles.Menu_List, styles.Open_MenuList)
  }
    
    return (
    <header className={styles.Header_Container} >
      <div className={styles.Header_Wrap}>
        <div className={styles.Logo_Image} >
           <span style={{fontSize: 20, fontWeight: 1000}} >MOMENTUM</span>
        </div>
          
        <nav className={styles.Menu}   
         onClick={e => openMenu()}>        
            <svg fill='white' className={styles.Menu_Img} viewBox="0 0 100 80" width="30" height="40">
                <rect width="70" height="10"></rect>
                <rect y="30" width="70" height="10"></rect>
                <rect y="60" width="70" height="10"></rect>
             </svg>
             <ul className={styles.Menu_List}  >
                 <li className={styles.Menu_List_Item} onClick={() => focusIn('About')} >About</li>
                 <li className={styles.Menu_List_Item} onClick={() => focusIn('Feature')}>Feature</li>
                 <li className={styles.Menu_List_Item} onClick={() => focusIn('HowToUse')}>How to Use</li>
                 <li className={styles.Menu_List_Item} onClick={() => focusIn('Download')}>Download</li>
             </ul>
          </nav>
      </div>
    </header>
    )
}