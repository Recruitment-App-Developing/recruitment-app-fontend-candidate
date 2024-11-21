import clsx from 'clsx';
import styles from './CurtainButton.module.scss';

function CurtainButton({
    children,
    className = 'h-full w-full',
    type = 'submit',
}) {
    return (
        <button type={type} className={clsx(className, styles.button)}>
            <p>{children}</p>
        </button>
    );
}

export default CurtainButton;
