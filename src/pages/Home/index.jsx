import JobList from '~/components/JobList';
import JobMarket from './JobMarket';

function Home() {
    return (
        <div className="container flex flex-col items-center justify-center">
            <JobMarket />
            <JobList />
        </div>
    );
}

export default Home;
