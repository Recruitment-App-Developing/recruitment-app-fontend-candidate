import clsx from 'clsx';
import styles from './ActionHeader.module.scss';

function ButtonEmployee() {
    return (
        <button className={clsx(styles['button-employee'])}>
            <p className={clsx(styles['button-text'])}>Đăng tuyển ngay</p>
            <div className={clsx(styles['arrow-wrapper'])}>
                <div className={clsx(styles.arrow)}></div>
            </div>
        </button>
    );
}

export default ButtonEmployee;
