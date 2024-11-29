import { useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import {
    faBuilding,
    faLocationDot,
    faHeart as faSolidHeart,
} from '@fortawesome/free-solid-svg-icons';

import styles from './JobDefaultBox.module.scss';
import ToolTip from '~/components/Tippy/ToolTip';
import { GrayBox } from '~/components/Box';
import GreenButton from '~/components/Button/GreenButton';
import ApplyButton from '~/components/Button/ApplyButton/ApplyButton';

function JobDefaultBox({ data }) {
    const [heart, setHeart] = useState(false);
    let province = data?.provinces[0];
    if (data?.provinces.length > 1) {
        province = province + ` & ${data?.provinces.length - 1} địa điểm khác`;
    }
    const provinceList = data?.provinces.join(', ');

    const convertTimeApply = (time) => {
        if (time === 0) return `Hết thời hạn ứng tuyển`;
        if (time <= 24) return `Thời gian ứng tuyển còn ${time} giờ`;
        return `Thời gian ứng tuyển còn ${Math.round(time / 24)} ngày`;
    };

    const convertTimeUpdate = (time) => {
        if (time === 0) return `Mới cập nhật`;
        if (time <= 24) return `Cập nhật ${time} giờ trước`;
        return `Cập nhật ${Math.round(time / 24)} ngày trước`;
    };

    return (
        <div
            className="mb-4 ml-auto mr-auto mt-auto flex h-[152px] cursor-pointer gap-4 rounded-[5px]
                border-[2px] border-solid border-gray-300 bg-white p-3 transition-all
                duration-100"
        >
            <a
                className="aspect-[1/1] h-full"
                href={data?.company?.urlCom}
                target="_blank"
            >
                <img
                    className="h-[100px] w-[100px] object-contain"
                    src={data?.company?.logo}
                    alt=""
                />
            </a>
            <div className="container flex flex-col justify-between">
                <div>
                    <div className="mb-2 flex items-baseline justify-between gap-4">
                        <ToolTip content={data?.name}>
                            <h3
                                className={clsx(
                                    'line-clamp-2 truncate text-wrap text-sm font-semibold text-black',
                                )}
                            >
                                <a
                                    href={`/job-detail/${data?.id}`}
                                    target="_blank"
                                >
                                    {data?.name}
                                </a>
                            </h3>
                        </ToolTip>
                        <span className="text-nowrap text-sm font-semibold text-success">
                            {data?.salary}
                        </span>
                    </div>
                    <ToolTip content={data?.company.name}>
                        <a
                            href="#"
                            className="flex w-fit items-center justify-center gap-2 overflow-hidden text-ellipsis
                                whitespace-nowrap text-xs font-medium leading-3 text-[#6f7882]"
                            target=""
                        >
                            <FontAwesomeIcon
                                icon={faBuilding}
                                className="text-base text-success"
                            />
                            <span>{data?.company.name}</span>
                        </a>
                    </ToolTip>
                </div>
                <div className="container mt-2 flex items-center justify-between">
                    <div className="flex flex-wrap items-center justify-start gap-2">
                        <ToolTip content={provinceList}>
                            <div className="flex items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    className="text-success"
                                />
                                <span>
                                    <GrayBox
                                        content={province}
                                        className="text-xs"
                                    />
                                </span>
                            </div>
                        </ToolTip>

                        <GrayBox content={convertTimeApply(data?.applyTime)} />
                        <GrayBox
                            content={convertTimeUpdate(data?.lastUpdated)}
                        />
                    </div>
                    <div className="flex h-fit w-fit items-end justify-center pr-6">
                        <div className="flex items-center justify-center gap-3">
                            {data?.isApply ? (
                                <button className="w-36 rounded-md bg-success py-2 text-white">
                                    Ứng tuyển lại
                                </button>
                            ) : (
                                <div className="w-36">
                                    <ApplyButton
                                        jobId={data?.id}
                                        content="Ứng tuyển"
                                    />
                                </div>
                            )}
                            <button
                                onClick={() => {
                                    setHeart(!heart);
                                }}
                            >
                                {heart ? (
                                    <FontAwesomeIcon
                                        icon={faSolidHeart}
                                        color="#00b14f"
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faRegularHeart}
                                        color="#00b14f"
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDefaultBox;
