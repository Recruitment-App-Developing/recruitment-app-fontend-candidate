import clsx from 'clsx';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

function Button({
    to,
    href,
    children,
    type = 'button',
    onClick,
    disabled = false,
    styleProps,
    className,
    size = 'medium',
    leftIcon,
    rightIcon,
    ...passProp
}) {
    let Comp = 'button';

    let props = {
        onClick,
        ...passProp,
    };

    if (disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (Comp === 'button') props = { ...props, type: type };

    const classes = clsx(styles.wrapper, disabled && styles.disabled, {
        [styles[styleProps]]: styleProps,
        [styles[size]]: size,
        [styles[className]]: className,
    });

    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        // <Comp className={clsx(classes)} {...props}>
        <Comp className={className} onClick={handleClick} {...props}>
            {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
            <span className={styles.title}>{children}</span>
            {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
