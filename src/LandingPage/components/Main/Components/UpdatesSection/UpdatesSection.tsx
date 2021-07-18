import styles from '../../../../../styles/update.module.scss'
export function UpdateSction() {

    return (
        <div className={styles.Container} >
            <div className={`${styles.Wrapper} a`} >
               <h1>Get updates</h1>
               <p>Lorem ipsum dolor sit.</p>
               <form>
                   <input placeholder='Enter your email' ></input>
                   <button>Subscribe</button>
              </form>
            </div>
        </div>
    )
}