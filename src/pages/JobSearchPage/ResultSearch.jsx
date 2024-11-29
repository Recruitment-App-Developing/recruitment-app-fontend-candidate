import { JobDefaultBox } from '~/components/JobBox';

export default function ResultSearch({ jobList = [] }) {
    return (
        <div className="flex w-[1170px] gap-5 px-4">
            <div className="h-fit w-[1100px]">
                {jobList.length == 0 ? (
                    <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white pb-2">
                        <img
                            className="h-52 w-52"
                            src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/job-list/none-result.png"
                            alt=""
                        />
                        <h2 className="font-medium text-[#6f7882]">
                            Chưa tìm thấy việc làm phù hợp với yêu cầu của bạn
                        </h2>
                    </div>
                ) : (
                    jobList.map((item) => (
                        <JobDefaultBox key={item.id} data={item} />
                    ))
                )}
            </div>
            <div className="flex h-fit">
                <img
                    className="s rounded-lg"
                    src="https://res.cloudinary.com/dtcokd0bb/image/upload/v1732626449/TopCV/Default/bkpa4djmuynxpix5eemz.webp"
                    alt=""
                />
            </div>
        </div>
    );
}
