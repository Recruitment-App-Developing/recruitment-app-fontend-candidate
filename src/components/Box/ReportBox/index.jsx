import clsx from 'clsx';
import {
    faCircleExclamation,
    faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ReportBox({ className, type = 'report', children }) {
    if (type == 'report') className = clsx(className, 'bg-[#f4f5f5]');
    const styleIcon = 'text-[15px] font-black leading-5 text-center';
    let icon = (
        <FontAwesomeIcon
            icon={faCircleInfo}
            className={clsx(styleIcon, 'text-success')}
        />
    );
    if (type == 'warning') {
        className = clsx(className, 'bg-[#fff7f0]');
        icon = (
            <FontAwesomeIcon
                icon={faCircleExclamation}
                className={clsx(styleIcon, 'text-warning')}
            />
        );
    }
    return (
        <div
            className={clsx(
                className,
                `flex items-start gap-2 rounded-[5px] p-2 text-sm font-normal leading-[22px]
                tracking-[0.14px] text-[#212f3f]`,
            )}
        >
            <div>{icon}</div>
            <span className="flex flex-col items-start justify-center gap-2 break-words pr-4">
                {children}
            </span>
        </div>
    );
}

export default ReportBox;
