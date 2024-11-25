import Header from './Header';
import LatestJob from './LastestJob';
import JobStatistic from './StatisticJob';

export default function JobMarket() {
    return (
        <div className="h-fit w-full rounded-lg bg-gradient-to-r from-[#122235] to-[#1aa357]">
            <Header />
            <div className="flex justify-center gap-5 p-5">
                <LatestJob />
                <div className="w-full flex-grow">
                    <JobStatistic />
                </div>
            </div>
        </div>
    );
}
