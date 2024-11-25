import { useEffect, useState } from 'react';
import AreaChart from '~/components/Chart/AreaChart';
import { fetchStatisticGeneralJobByDay } from '~/services/statisticService';

export default function LeftStatistic() {
    const [statistic, setStatistic] = useState();

    useEffect(() => {
        fetchStatisticGeneralJobByDay().then((data) => setStatistic(data.data));
    }, []);

    return (
        <div className="bg-[rgba(33, 47, 63, .3)] h-full w-full">
            <AreaChart
                data={statistic?.data}
                categories={statistic?.categories}
            />
        </div>
    );
}
