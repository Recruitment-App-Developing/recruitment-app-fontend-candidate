import { useEffect, useRef, useState } from 'react';
import { cn } from '~/lib/utils';
import Button from '../../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faCircleDollarToSlot,
} from '@fortawesome/free-solid-svg-icons';
import {
    allowOnlyNumbers,
    formatMoney,
    formatMoneyToInt,
} from '~/constants/common';

const listItem = [
    {
        index: 0,
        title: 'Tất cả',
        salaryFrom: '',
        salaryTo: '',
    },
    {
        index: 1,
        title: 'Dưới 10 triệu đồng',
        salaryTo: 10000000,
        salaryFrom: 0,
    },
    {
        index: 2,
        title: 'Từ 10 đến 15 triệu đồng',
        salaryTo: 15000000,
        salaryFrom: 10000000,
    },
    {
        index: 3,
        title: 'Từ 15 đến 20 triệu đồng',
        salaryTo: 20000000,
        salaryFrom: 15000000,
    },
    {
        index: 4,
        title: 'Từ 20 đến 25 triệu đồng',
        salaryTo: 25000000,
        salaryFrom: 20000000,
    },
    {
        index: 5,
        title: 'Từ 25 đến 30 triệu đồng',
        salaryTo: 30000000,
        salaryFrom: 25000000,
    },
    {
        index: 6,
        title: 'Từ 30 đến 50 triệu đồng',
        salaryTo: 50000000,
        salaryFrom: 30000000,
    },
    {
        index: 7,
        title: 'Trên 50 triệu đồng',
        salaryTo: null,
        salaryFrom: 50000000,
    },
];

export default function SalarySearchBox({ handleSalary }) {
    const leftIcon = <FontAwesomeIcon icon={faCircleDollarToSlot} />;

    const [selectedValue, setSelectedValue] = useState(0);
    const [isClose, setIsClose] = useState(true);
    const [salaryFrom, setSalaryFrom] = useState('');
    const [salaryTo, setSalaryTo] = useState('');
    const [checkSalary, setCheckSalary] = useState(true);
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

    useEffect(() => {
        setCheckSalary(
            salaryTo >= salaryFrom ||
                salaryFrom == '' ||
                salaryTo == '' ||
                salaryFrom == null ||
                salaryTo == null,
        );
        const run = async () => {
            for (const item of listItem) {
                if (
                    item.salaryFrom == salaryFrom &&
                    item.salaryTo == salaryTo
                ) {
                    setSelectedValue(item.index);
                    return;
                }
            }
            setSelectedValue('');
        };
        run();
    }, [salaryFrom, salaryTo]);

    return (
        <div ref={dropdownRef} className="relative w-fit bg-none">
            <Button
                leftIcon={leftIcon}
                className={cn(
                    `flex h-10 w-fit items-center justify-between gap-3 whitespace-nowrap rounded-md
                    bg-[#145c3e] px-3 text-white`,
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
                <span className="truncate"> Mức lương</span>
            </Button>
            {!isClose && (
                <div
                    className="absolute left-[50%] top-12 z-50 h-fit w-[350px] translate-x-[-50%]
                        overflow-hidden rounded-md border-none bg-white text-black shadow-soft-lg"
                >
                    <div className="flex items-center justify-center px-2 pb-2 pt-2">
                        {/* <InputTextIcon
                            placeholder="Type here"
                            className="w-full"
                            leftIcon={
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            }
                            onChange={(e) => setSearchText(e.target.value)}
                        /> */}
                        <div className="relative w-32">
                            <input
                                type="text"
                                inputMode="numeric"
                                value={formatMoney(salaryFrom)}
                                onChange={(e) => {
                                    setSalaryFrom(
                                        formatMoneyToInt(e.target.value),
                                    );
                                }}
                                className={cn(
                                    `w-full rounded-full border border-green-500 px-4 py-1.5 pr-10 text-sm
                                    outline-none focus:ring-2 focus:ring-green-300`,
                                    !checkSalary &&
                                        'border-red-500 focus:ring-red-300',
                                )}
                                onKeyDown={allowOnlyNumbers}
                            />
                            <div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col justify-center">
                                <button
                                    onClick={() => {
                                        setSalaryFrom(
                                            (prev) =>
                                                formatMoneyToInt(prev) + 500000,
                                        );
                                    }}
                                    className="text-xs text-gray-500 hover:text-black"
                                >
                                    ▲
                                </button>
                                <button
                                    onClick={() => {
                                        if (
                                            salaryFrom == 0 ||
                                            salaryFrom == null
                                        )
                                            setSalaryFrom(null);
                                        else {
                                            setSalaryFrom(
                                                (prev) =>
                                                    formatMoneyToInt(prev) -
                                                    500000,
                                            );
                                        }
                                    }}
                                    className="text-xs text-gray-500 hover:text-black"
                                >
                                    ▼
                                </button>
                            </div>
                        </div>
                        <div className="px-2 font-medium">{'-'}</div>
                        <div className="relative w-32">
                            <input
                                type="text"
                                inputMode="numeric"
                                value={formatMoney(salaryTo)}
                                onChange={(e) => {
                                    setSalaryTo(
                                        formatMoneyToInt(e.target.value),
                                    );
                                }}
                                className={cn(
                                    `w-full rounded-full border border-green-500 px-4 py-1.5 pr-10 text-sm
                                    outline-none focus:ring-2 focus:ring-green-300`,
                                    !checkSalary &&
                                        'border-red-500 focus:ring-red-300',
                                )}
                                onKeyDown={allowOnlyNumbers}
                            />
                            <div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col justify-center">
                                <button
                                    onClick={() => {
                                        setSalaryTo(
                                            (prev) =>
                                                formatMoneyToInt(prev) + 500000,
                                        );
                                    }}
                                    className="text-xs text-gray-500 hover:text-black"
                                >
                                    ▲
                                </button>
                                <button
                                    onClick={() => {
                                        if (salaryTo == 0 || salaryTo == null)
                                            setSalaryTo(null);
                                        else {
                                            setSalaryTo(
                                                (prev) =>
                                                    formatMoneyToInt(prev) -
                                                    500000,
                                            );
                                        }
                                    }}
                                    className="text-xs text-gray-500 hover:text-black"
                                >
                                    ▼
                                </button>
                            </div>
                        </div>
                        <div className="pl-2 font-normal">{'đồng'}</div>
                    </div>
                    <div className="flex h-full w-full items-center justify-center">
                        <button
                            disabled={!checkSalary}
                            onClick={() => {
                                handleSalary(salaryFrom, salaryTo);
                                setIsClose(true);
                            }}
                            className="mx-4 my-3 w-full rounded-md bg-green-500 p-1 text-lg font-medium text-white
                                disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Áp dụng
                        </button>
                    </div>
                    <div className="h-full w-full bg-yellow-300">
                        <ul className="max-h-60 overflow-y-auto">
                            {listItem.map((item) => {
                                return (
                                    <li
                                        key={item.index}
                                        className={`flex-start small-semibold relative bg-white py-3 pl-4 pr-3 hover:bg-gray-400 ${
                                        selectedValue === item.index
                                                ? `relative text-[#00b14f] after:absolute after:right-2 after:text-lg
                                                    after:font-bold after:text-[#00b14f] after:content-['✔']`
                                                : ''
                                        }`}
                                        onClick={() => {
                                            setSelectedValue(item.index);
                                            setSalaryFrom(item.salaryFrom);
                                            setSalaryTo(item.salaryTo);
                                        }}
                                        value={item.index}
                                    >
                                        {item.title}
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
