import styles from '../../../../styles/download.module.scss'
export function DownloadSection() {

    return ( 
        <div className={styles.Container} >
               <div className={styles.Content_Wrap} >
                    <h1>Ready to get started?</h1>
 
                    <div className={styles.Buttons_Wrap} >
                      <button>
                         Download now 
                       </button>
                      <button>
                        Get in Touch
                      </button>
                    </div>
               </div>

        </div>
        
    )
}