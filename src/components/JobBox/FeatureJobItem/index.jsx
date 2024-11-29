import { useState } from 'react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';

import ToolTip from '../../Tippy/ToolTip';
import JobBox from '../JobQuickViewBox';
import { Link } from 'react-router-dom';

function JobItem({ data }) {
    const [heart, setHeart] = useState(false);

    return (
        <div
            className="flex h-full w-full items-center justify-center rounded-[4px] border-none
                bg-white p-3"
        >
            <a
                className="aspect-[1/1] h-[74px] w-[74px]"
                href={data?.company.urlCom}
                target="_blank"
            >
                <img
                    className="mx-auto h-[74px] w-[74px] object-contain"
                    src={data.company.logo}
                    alt=""
                />
            </a>
            <div className="container min-h-11 overflow-hidden text-ellipsis whitespace-nowrap pl-3">
                <JobBox jobId={data.id}>
                    <h3
                        className="mb-[3px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold
                            text-black"
                    >
                        <Link to={`/job-detail/${data.id}`} target="_blank ">
                            {data.name}
                        </Link>
                    </h3>
                </JobBox>
                <ToolTip content={data.company.name}>
                    <a
                        href="#"
                        className="overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium leading-3
                            text-[#6f7882]"
                        target=""
                    >
                        {data.company.name}
                    </a>
                </ToolTip>
                <div className="container mt-2 flex items-center justify-between gap-1">
                    <div className="overflow-hidden">
                        <span
                            className="mr-1 text-ellipsis rounded bg-[#f4f5f5] pb-1 pl-2 pr-2 pt-1 text-xs font-medium
                                leading-4"
                        >
                            {data.salary}
                        </span>
                        <ToolTip content={data.cities}>
                            <span
                                className="mr-auto text-ellipsis rounded bg-[#f4f5f5] pb-1 pl-2 pr-2 pt-1 text-xs
                                    font-medium leading-4"
                            >
                                {data.cities}
                            </span>
                        </ToolTip>
                    </div>
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
    );
}

export default JobItem;
