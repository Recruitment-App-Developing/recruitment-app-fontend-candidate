import LeftStatistic from './LeftStatistic';
import RightStatistic from './RightStatistic';
import WorkMarketBlock from './WorkMarketBlock';

export default function JobStatistic() {
    return (
        <div className="w-full">
            <WorkMarketBlock />
            <div className="flex h-full w-full flex-row">
                <LeftStatistic />
                <RightStatistic />
            </div>
        </div>
    );
}
