import styles from './JobQuickViewBox.module.scss';

function BoxFooter() {
    return (
        <div className={styles.footer}>
            <a href="#" className={styles['btn-apply']}>
                Ứng tuyển
            </a>
            <a href="#" className={styles['btn-view-detail']}>
                Xem chi tiết
            </a>
        </div>
    );
}

export default BoxFooter;
