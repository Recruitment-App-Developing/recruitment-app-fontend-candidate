import { useState } from 'react';
import { cn } from '~/lib/utils';

export default function WorkMarketBlock() {
    const [number, setNumber] = useState(dataL);

    const bg =
        'https://static.topcv.vn/v4/image/welcome/dashboard/bg-statistics-job-item.png';

    return (
        <div className="flex h-20 w-full justify-between gap-3">
            <div
                className={`h-full w-full bg-cover px-4 py-[14px] bg-[url(${bg})]`}
            >
                <p className="mb-2 text-2xl font-bold leading-8 text-white">
                    {number.lastestJobInDayNumber}
                </p>
                <p className="text-xs font-medium leading-4 text-white">
                    Việc làm mới 24h gần nhất
                </p>
            </div>
            <div
                className={`h-full w-full bg-cover px-4 py-[14px] bg-[url(${bg})]`}
            >
                <p className="mb-2 text-2xl font-bold leading-8 text-white">
                    {number.hiringJobNumber}
                </p>
                <p className="text-xs font-medium leading-4 text-white">
                    Việc làm đang tuyển
                </p>
            </div>
            <div
                className={`h-full w-full bg-cover px-4 py-[14px] bg-[url(${bg})]`}
            >
                <p className="mb-2 text-2xl font-bold leading-8 text-white">
                    {number.hiringCompanyNumber}
                </p>
                <p className="text-xs font-medium leading-4 text-white">
                    Công ty đang tuyển
                </p>
            </div>
        </div>
    );
}

const dataL = {
    lastestJobInDayNumber: 2354,
    hiringJobNumber: 23443,
    hiringCompanyNumber: 2384,
};
