import clsx from 'clsx';

import styles from './GreenButton.module.scss';
import { cn } from '~/lib/utils';

function GreenButton({
    type = 'button',
    content,
    leftIcon,
    className = 'text-sm h-fit w-fit',
    onClick,
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={cn(
                styles['btn-green'],
                'h-fit w-fit text-sm',
                className,
            )}
        >
            {leftIcon && (
                <div className="flex h-6 w-6 items-center justify-center p-1 text-[15px] font-normal leading-5">
                    {leftIcon}
                </div>
            )}
            <span className="flex items-center justify-center text-nowrap">
                {content}
            </span>
        </button>
    );
}

export default GreenButton;
