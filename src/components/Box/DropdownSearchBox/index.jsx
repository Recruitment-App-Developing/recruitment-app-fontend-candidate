import { useState } from 'react';
import styles from './DropdownSearchBox.module.scss';

import Button from '~/components/Button';
import InputTextIcon from '~/components/InputTextIcon';
import clsx from 'clsx';
import { cn } from '~/lib/utils';

import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import {
    faMagnifyingGlass,
    faAngleDown,
    faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const data1 = [
    'Kinh nghiệm',
    'Chưa có kinh nghiệm',
    '1 năm',
    '2 năm',
    '3 năm',
    '4 năm',
    '5 năm',
    'Trên 5 năm',
];

const leftIcon1 = <FontAwesomeIcon icon={faCircleUser} />;

function DropdownSearchBox({
    listItem = data1,
    leftIcon = leftIcon1,
    content = 'Kinh nghiệm',
    className,
}) {
    const [searchText, setSearchText] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isClose, setIsClose] = useState(true);

    const handleClick = () => {
        setIsClose((prev) => !prev);
    };
    return (
        <div className="relative w-fit bg-none">
            <Button
                leftIcon={leftIcon}
                className={cn(
                    `flex h-10 w-fit items-center justify-between gap-3 whitespace-nowrap rounded-md
                    bg-[#145c3e] px-3 text-white`,
                    className,
                )}
                rightIcon={
                    isClose ? (
                        <FontAwesomeIcon icon={faAngleDown} />
                    ) : (
                        <FontAwesomeIcon icon={faAngleUp} />
                    )
                }
                onClick={() => setIsClose((prev) => !prev)}
            >
                {content}
            </Button>
            {!isClose && (
                <div
                    className="shadow-soft-lg absolute left-[50%] top-12 h-fit w-full translate-x-[-50%]
                        overflow-hidden rounded-md border-none bg-white text-black"
                >
                    <div className="px-2 pb-2 pt-2">
                        <InputTextIcon
                            placeholder="Type here"
                            className="w-full"
                            leftIcon={
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            }
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                    <div className="h-full w-full bg-yellow-300">
                        <ul className="max-h-60 overflow-y-auto">
                            {listItem
                                .filter((item) =>
                                    item
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase()),
                                )
                                .map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={`flex-start small-semibold relative bg-white py-3 pl-4 pr-3 hover:bg-gray-400
                                            ${selectedIndex === index ? styles.selected : ''}`}
                                            onClick={() =>
                                                setSelectedIndex(index)
                                            }
                                        >
                                            {item}
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DropdownSearchBox;
