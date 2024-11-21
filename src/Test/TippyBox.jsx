import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import InputTextIcon from '~/components/InputTextIcon';
import styles from './test.module.scss';

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

export function TippyBox({
    listItem = data1,
    leftIcon = leftIcon1,
    content = 'Kinh nghiệm',
}) {
    const [searchText, setSearchText] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isClose, setIsClose] = useState(false);

    const handleClick = () => {
        setIsClose(!isClose);
    };

    return (
        <div className="shadow-soft-lg h-fit w-56 overflow-hidden rounded-md border-none bg-white">
            <div className="px-2 pb-2 pt-2">
                <InputTextIcon
                    placeholder="Type here"
                    className="w-full"
                    leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
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
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    {item}
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}
