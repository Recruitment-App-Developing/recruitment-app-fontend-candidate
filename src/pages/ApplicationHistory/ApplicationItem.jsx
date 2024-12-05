import {
    faCircleDollarToSlot,
    faEye,
    faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const dataL = {
    cvLink: 'http://res.cloudinary.com/dtcokd0bb/image/upload/v1727627225/TopCV/Cv/jslyrpu5bl0gjare6qy1.jpg',
    status: 'NEW',
    applicationTime: '13:42:01 29-11-2024',
    statusChangeTime: null,
    jobInfor: {
        id: 28,
        name: 'Network Engineer (ISP/Enterprise) - Tại Đà Nẵng',
        cities: 'Bạc Liêu',
        company: {
            logo: 'http://res.cloudinary.com/dtcokd0bb/image/upload/v1732862136/TopCV/Image/Avatar/aw0gaq8nlocys4qpiyjb.jpg',
            name: 'Công ty cổ phần TopCV',
            id: '1',
            urlCom: 'http://topcv.com',
        },
        salary: '346',
    },
};

export default function ApplicationItem({ data = dataL }) {
    return (
        <div className="flex w-full gap-5 rounded-md border-[1px] border-solid border-[#f4f4f4] p-4">
            <div
                className="h-24 flex-shrink-0 items-center justify-center rounded-lg bg-white p-2 outline
                    outline-1 outline-[#e9eaec]"
            >
                <img
                    className="w-max-[150px] h-full w-full rounded-md object-contain"
                    src={data.jobInfor.company.logo}
                />
            </div>
            <div className="flex-grow">
                <div className="mb-2 flex items-center gap-x-6">
                    <div className="flex-1">
                        <a
                            target="_blank"
                            href={`/job-detail/${data.jobInfor.id}`}
                            className="text-lg font-bold text-black hover:underline"
                        >
                            {data.jobInfor.name}
                        </a>
                    </div>
                    <div className="block whitespace-nowrap break-words text-lg font-bold text-success">
                        <FontAwesomeIcon
                            icon={faCircleDollarToSlot}
                            className="mr-2"
                        />
                        <span>{data.jobInfor.salary}</span>
                    </div>
                </div>
                <div className="mb-2">
                    <a
                        target="_blank"
                        className="text-base font-normal text-[#6f7882] hover:underline"
                        href={`/company-detail/${data.jobInfor.company.id}`}
                    >
                        {data.jobInfor.company.name}
                    </a>
                </div>
                <div className="mb-[10px]">
                    <span className="text-[15px] font-semibold leading-5 text-[#424e5c]">
                        Thời gian ứng tuyển: {data.applicationTime}
                    </span>
                </div>
                <div className="flex items-center gap-y-6">
                    <div className="ml-auto flex gap-4 text-right">
                        <a
                            href=""
                            target="_blank"
                            className="flex items-center justify-center gap-2 rounded-[30px] bg-[#e5f7ed] px-2 py-1
                                text-lg font-medium leading-5 text-[#00b14f]"
                        >
                            <FontAwesomeIcon icon={faMessage} className="" />
                            <span>Nhắn tin</span>
                        </a>
                        <a
                            href={data.cvLink}
                            target="_blank"
                            className="flex items-center justify-center gap-2 rounded-[30px] bg-[#e5f7ed] px-2 py-1
                                text-lg font-medium leading-5 text-[#00b14f]"
                        >
                            <FontAwesomeIcon icon={faEye} className="" />
                            <span>Xem CV</span>
                        </a>
                    </div>
                </div>
                <div className="my-3 flex justify-between gap-y-3 border-t-[1px] border-solid border-t-[#e7e7e7]">
                    <div className="w-1/2">
                        <span className="text-base font-medium text-[#6f7882]">
                            Hồ sơ chưa phù hợp (20-09-2024 15:34)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
