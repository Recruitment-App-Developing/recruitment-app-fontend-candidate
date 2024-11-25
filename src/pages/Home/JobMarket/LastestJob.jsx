import { useState } from 'react';
import JobItem from './JobItem';

export default function LatestJob() {
    const [jobList, setJobList] = useState(data);

    return (
        <div className="w-[298px] flex-shrink-0">
            <img
                className="mb-5 h-32 w-full object-contain align-middle"
                src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/dashboard/dashboard-item.png"
                alt=""
            />
            <p className="text-base font-semibold leading-5 text-white">
                Việc làm mới nhất
            </p>
            <div className="relative mt-2 h-[233px] overflow-y-hidden transition-[0.5s]">
                {jobList?.map((item) => (
                    <JobItem key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

const data = [
    {
        id: 41,
        name: 'Quản Đốc Xưởng Dịch Vụ Ô Tô - Lương Từ 20 Triệu - Đi Làm Ngay',
        cities: 'Bắc Kạn, Bắc Kạn',
        company: {
            id: '16',
            urlCom: 'https://www.sonat.vn/',
            logo: 'https://res.cloudinary.com/dtcokd0bb/image/upload/v1730083629/TopCV/Image/CompanyLogo/jktqdnpuohhxhuahplq7.jpg',
            name: 'SonatGame Studio',
        },
        salary: '10234',
    },
    {
        id: 40,
        name: 'Quản Lý Thi Công Tại Hà Nội',
        cities: 'Tuyên Quang, Cao Bằng',
        company: {
            id: '17',
            urlCom: ' http://cigpower.com',
            logo: 'https://res.cloudinary.com/dtcokd0bb/image/upload/v1730083629/TopCV/Image/CompanyLogo/jktqdnpuohhxhuahplq7.jpg',
            name: 'CÔNG TY TNHH KHOA HỌC KỸ THUẬT CIG',
        },
        salary: '10000000',
    },
    {
        id: 39,
        name: 'Nhân Viên Kinh Doanh/Tư Vấn/ Sales Thị Trường ( LCB Từ 8-15 Triệu) - Đi Làm Ngay',
        cities: 'Cần Thơ',
        company: {
            id: '1',
            urlCom: 'http://topcv.com',
            logo: 'https://res.cloudinary.com/dtcokd0bb/image/upload/v1720661226/TopCV/Image/Avatar/fygskc2luq5kuyckuuq5.png',
            name: 'Công ty cổ phần TopCV',
        },
        salary: '10000000',
    },
    {
        id: 38,
        name: '2D UI/UX Game Artist (Casual/Puzzle) - Từ 1 Năm KN - Thu Nhập Đến $1,000',
        cities: 'Gia Lai, Lào Cai, Hà Nội',
        company: {
            id: '16',
            urlCom: 'https://www.sonat.vn/',
            logo: 'https://res.cloudinary.com/dtcokd0bb/image/upload/v1730083629/TopCV/Image/CompanyLogo/jktqdnpuohhxhuahplq7.jpg',
            name: 'SonatGame Studio',
        },
        salary: 'Từ 22000000',
    },
];
