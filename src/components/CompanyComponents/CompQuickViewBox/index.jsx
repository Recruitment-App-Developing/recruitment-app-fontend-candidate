import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DoublePeopleIcon, LocationIcon } from '~/components/Icon';
import styles from './CompQuickViewBox.module.scss';
import { GrayBox } from '~/components/Box';
import {
    faArrowUpRightFromSquare,
    faCube,
    faLocationDot,
    faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import ToolTip from '~/components/Tippy/ToolTip';

function CompQuickViewBox({ company }) {
    // The active field of company
    let activeFiels = company?.activeFields[0].name;
    if (company?.activeFields.length > 1) {
        activeFiels =
            activeFiels +
            ` & ${company?.activeFields.length - 1} lĩnh vực khác`;
    }
    const activeFieldsString = company?.activeFields
        .map((field) => field.name)
        .join(', ');

    return (
        <div className="flex w-full flex-col items-start justify-center gap-1 rounded-lg bg-white p-2">
            <div className="mb-3 flex w-full items-start gap-2">
                <div className="flex w-[100px] items-center justify-start">
                    <a
                        href={company?.urlCom}
                        className="flex aspect-[1/1] h-[88px] items-center justify-center rounded-lg border-2
                            border-solid border-[#e9eaec] bg-white p-[7px]"
                    >
                        <img
                            src={company?.logo}
                            className="flex h-[74px] w-[74px] flex-shrink-0 items-center rounded-[5px] object-contain"
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex items-center justify-start">
                    <h2 className={styles.title}>{company?.name}</h2>
                </div>
            </div>
            <div className="flex w-full items-center gap-2">
                <div className="w-22 flex items-center gap-2">
                    <FontAwesomeIcon
                        className="text-xs text-gray-600"
                        icon={faUserGroup}
                    />
                    <h4>Quy mô:</h4>
                </div>
                <h4 className="text-sm font-medium leading-[22px] tracking-[0.14px] text-[#212f3f]">
                    {company?.employeeScale}
                </h4>
            </div>
            <div className="flex w-full gap-2">
                <div className="w-22 flex h-fit flex-shrink-0 items-center gap-2">
                    <FontAwesomeIcon
                        className="text-xs text-gray-600"
                        icon={faCube}
                    />
                    <h4>Lĩnh vực:</h4>
                </div>
                <div className="flex-grow break-words">
                    <ToolTip content={activeFieldsString} placement="top">
                        <h4
                            className="flex-grow cursor-pointer break-words text-sm font-medium leading-[22px]
                                tracking-[0.14px] text-[#212f3f]"
                        >
                            {activeFiels}
                        </h4>
                    </ToolTip>
                </div>
            </div>
            <div className="flex w-full gap-2">
                <div className="w-22 flex h-fit flex-shrink-0 items-center gap-2">
                    <FontAwesomeIcon
                        className="text-xs text-gray-600"
                        icon={faLocationDot}
                    />
                    <h4>Địa điểm:</h4>
                </div>
                <h4
                    className="flex-grow break-words text-sm font-medium leading-[22px] tracking-[0.14px]
                        text-[#212f3f]"
                >
                    {company?.headquarters}
                </h4>
                {/* <div className="w-[140px] items-start">
                    <GrayBox
                        className="bg-none text-sm"
                        iconLeft={
                            <LocationIcon
                                width={16}
                                height={16}
                                fill="#7F878F"
                            />
                        }
                        content="Địa điểm:"
                    />
                </div>
                <div
                    className={clsx(
                        styles.address,
                        'text-sm font-medium leading-[22px] tracking-[0.14px] text-[#212f3f]',
                    )}
                >
                    {company?.headquarters}
                </div> */}
            </div>
            <div className="mt-3 flex w-full items-center justify-center gap-[10px]">
                <a
                    href={company.urlCom}
                    target="_blank"
                    className="text-success text-sm font-semibold leading-[22px] tracking-[0.175px]"
                >
                    Xem trang công ty
                </a>
                <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-success h-4 w-4 text-center text-[15px] font-normal"
                />
            </div>
        </div>
    );
}

export default CompQuickViewBox;
