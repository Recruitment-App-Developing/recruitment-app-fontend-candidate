import { useEffect, useRef, useState } from 'react';
import Button from '../../../components/Button';
import InputTextIcon from '../../../components/InputTextIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faCircleUser,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { cn } from '~/lib/utils';

const data1 = [
    {
        name: 'Kinh nghiệm',
        value: 'all',
    },
    {
        name: 'Chưa có kinh nghiệm',
        value: 'Chưa có kinh nghiệm',
    },
    {
        name: '1 năm',
        value: '1 năm',
    },
    {
        name: '2 năm',
        value: '2 năm',
    },
    {
        name: '3 năm',
        value: '3 năm',
    },
    {
        name: '4 năm',
        value: '4 năm',
    },
    {
        name: '5 năm',
        value: '5 năm',
    },
    {
        name: 'Trên 5 năm',
        value: 'Trên 5 năm',
    },
];

const leftIcon1 = <FontAwesomeIcon icon={faCircleUser} />;

function DropdownSearchBox({
    id = '',
    onChange = () => {},
    listItem = data1,
    leftIcon = leftIcon1,
    contentInit = 'Kinh nghiệm',
    className,
}) {
    const [searchText, setSearchText] = useState('');
    const [content, setContent] = useState(contentInit);
    const [selectedValue, setSelectedValue] = useState('all');
    const [isClose, setIsClose] = useState(true);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsClose(true);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative w-fit bg-none">
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
                <span className="truncate"> {content}</span>
            </Button>
            {!isClose && listItem.length != 0 && (
                <div
                    className="absolute left-[50%] top-12 z-50 h-fit w-full translate-x-[-50%] overflow-hidden
                        rounded-md border-none bg-white text-black shadow-soft-lg"
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
                                    item.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase()),
                                )
                                .map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={`flex-start small-semibold relative bg-white py-3 pl-4 pr-3 hover:bg-gray-400 ${
                                            selectedValue === item.value
                                                    ? `relative text-[#00b14f] after:absolute after:right-2 after:text-lg
                                                        after:font-bold after:text-[#00b14f] after:content-['✔']`
                                                    : ''
                                            }`}
                                            onClick={() => {
                                                setSelectedValue(item.value);
                                                onChange(id, item.value);
                                                setContent(item.name);
                                                setIsClose(true);
                                            }}
                                            value={item.value}
                                        >
                                            {item.name}
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
