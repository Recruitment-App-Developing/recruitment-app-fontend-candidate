import clsx from 'clsx';
import styles from './LoginButton.module.scss';

function LoginButton({ children, type, className, onClick }) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={clsx(styles.button, className)}
        >
            {children}
        </button>
    );
}
export default LoginButton;
