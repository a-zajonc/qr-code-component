import { QRImage } from "./QRImage";
import { Text } from "./Text";
import styles from './index.module.css';

export function QRComponent() {
    return <div className={styles.componentDiv}>
        <QRImage />
        <Text />
    </div>
}