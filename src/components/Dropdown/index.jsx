import { clsx } from 'clsx';
import { useState } from 'react';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { cn } from '~/lib/utils';

const data = [
    'Kinh nghiệm',
    'Chưa có kinh nghiệm',
    '1 năm',
    '2 năm',
    '3 năm',
    '4 năm',
    '5 năm',
    'Trên 5 năm',
];

function Dropdown({ className, icon, title, data = [] }) {
    const [checkDrop, setCheckDrop] = useState(false);

    return (
        <div
            className={clsx(
                className,
                'flex h-10 cursor-pointer gap-3 rounded-md pl-3',
            )}
            onClick={() => {
                setCheckDrop(!checkDrop);
            }}
        >
            <i className="flex-center text-sm">{icon}</i>
            <span className="flex max-w-28 items-center justify-center text-sm font-medium">
                {title}
            </span>
            <i className="flex items-center justify-center text-sm">
                {checkDrop ? (
                    <FontAwesomeIcon icon={faAngleDown} className="text-sm" />
                ) : (
                    <FontAwesomeIcon icon={faAngleUp} className="text-sm" />
                )}
            </i>
        </div>
    );
}

export default Dropdown;
