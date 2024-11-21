import clsx from 'clsx';

import styles from './WhiteButton.module.scss';

function WhiteButton({ content, leftIcon, className = 'text-sm h-fit w-fit' }) {
    return (
        <button className={clsx(styles['btn-white'], className)}>
            {leftIcon && (
                <div
                    className="flex h-6 w-6 items-center justify-center p-1 align-middle text-[15px]
                        font-normal leading-5"
                >
                    {leftIcon}
                </div>
            )}
            <span className="flex items-center justify-center text-nowrap">
                {content}
            </span>
        </button>
    );
}

export default WhiteButton;
