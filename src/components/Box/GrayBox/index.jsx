import clsx from 'clsx';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '~/lib/utils';

function GrayBox({ iconLeft, content, className, classIcon, classContent }) {
    return (
        <div
            className={cn(
                `border-nonebg-[#f2f4f5] flex h-fit w-fit items-center justify-start gap-2
                rounded-md pb-[2px] pl-2 pr-2 pt-[2px] text-[15px] leading-[22px]`,
                className,
            )}
        >
            {iconLeft && (
                <i
                    className={cn(
                        'items-center justify-center font-black text-[#7f878f]',
                        classIcon,
                    )}
                >
                    {iconLeft}
                </i>
            )}
            <div
                className={cn(
                    `flex items-center justify-center text-center font-normal tracking-[0.0125em]
                    text-[#263a4d]`,
                    classContent,
                )}
            >
                {content}
            </div>
        </div>
    );
}

export default GrayBox;
