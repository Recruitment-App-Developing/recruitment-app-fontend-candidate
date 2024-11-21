import clsx from 'clsx';
import styles from './IconLoginButton.module.scss';

function IconLoginButton({ leftIcon, content, className, disable = false }) {
    return (
        <button className={clsx(styles.button, className)} disabled={disable}>
            <div className={clsx(styles['svg-wrapper-1'])}>
                <div className={clsx(styles['svg-wrapper'])}>{leftIcon}</div>
            </div>
            <span>{content}</span>
        </button>
    );
}

export default IconLoginButton;
