import styles from '../index.module.css'

export function Text() {
    return <div className={styles.textBox}>
        <h3 className={styles.heading}>Improve your front-end skills by building projects</h3>
        <p className={styles.text}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
}