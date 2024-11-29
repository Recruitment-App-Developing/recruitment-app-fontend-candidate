import JobList from '~/components/JobList';
import JobMarket from './JobMarket';

function Home() {
    return (
        <div className="container mt-4 flex flex-col items-center justify-center">
            <JobMarket />
            <h1 className="my-4 text-3xl font-bold text-success">
                Danh sách việc làm
            </h1>
            <JobList />
        </div>
    );
}

export default Home;
