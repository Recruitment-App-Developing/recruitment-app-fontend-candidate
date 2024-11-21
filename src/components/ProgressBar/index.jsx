import clsx from 'clsx';
import styles from './ProgressBar.module.scss';

function ProgressBar() {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className="grid-col-4">
                    <h3 className={clsx(styles['progress-title'])}>HTML5</h3>
                    <div className={styles['orange']}>
                        <div
                            className={styles['progress-bar']}
                            style={{ width: '60%', background: '#fe3b3b' }}
                        >
                            <div className={styles['progress-value']}>60%</div>
                        </div>
                    </div>
                    <h3 className={styles['progress-title']}>CSS3</h3>
                    <div className={styles['blue']}>
                        <div
                            className={styles['progress-bar']}
                            style={{ width: '90%', background: '#1a4966' }}
                        >
                            <div className={styles['progress-value']}>90%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
