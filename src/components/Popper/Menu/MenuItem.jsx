import styles from './Menu.module.scss';

function MenuItem({ data }) {
    return (
        <button className={styles.button}>
            <div className={styles.svg}>{data.icon}</div>
            <div className={styles.text}>{data.title}</div>
        </button>
    );
}

export default MenuItem;
