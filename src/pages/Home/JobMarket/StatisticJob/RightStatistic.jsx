import { useEffect, useState } from 'react';
import DistributedChart from '~/components/Chart/DistributedChart';
import { fetchStatistcGeneralJobByIndustry } from '~/services/statisticService';

export default function RightStatistic() {
    const [statistic, setStatistic] = useState();

    useEffect(() => {
        fetchStatistcGeneralJobByIndustry().then((data) =>
            setStatistic(data.data),
        );
    }, []);

    return (
        <div className="bg-[rgba(33, 47, 63, .3)] h-full w-full">
            <DistributedChart
                data={statistic?.data}
                categories={statistic?.categories}
            />
        </div>
    );
}
