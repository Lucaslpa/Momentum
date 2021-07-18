import styles from '../../../styles/footer.module.scss'

export function Footer() {
    return (
        <footer className={styles.Container} >
            <div className={styles.Contacts_Wrap} >
                <a>facebook</a>
                <a>instagram</a>
                <a>Email</a>
                <a>twitter</a>
            </div>
            <span>clone de <a href="http://momentum-template.webflow.io/" >template</a> feito por <a href="https://github.com/lucaslpa12345" > Lucas Pereira </a> </span>
        </footer>
    )
}