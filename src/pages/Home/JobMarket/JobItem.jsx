import { Tooltip } from '@mui/material';

export default function JobItem({ data }) {
    return (
        <div className="mb-4 flex h-16 w-[229px] gap-[10px] opacity-[1]">
            <div className="h-12 w-12 flex-shrink-0">
                <a
                    target="_blank"
                    href={`/company-detail/${data.company.id}`}
                    className="h-12 w-12"
                >
                    <img
                        src={data.company.logo}
                        className="aspect-square h-full w-full rounded bg-white object-contain"
                        alt=""
                    />
                </a>
            </div>
            <div className="flex flex-grow flex-col gap-1 pl-1">
                <div>
                    <Tooltip title={data.name}>
                        <a className="w-full" target="_blank" href="">
                            <span className="line-clamp-2 w-full truncate text-wrap text-xs font-bold text-white">
                                {data.name}
                            </span>
                        </a>
                    </Tooltip>
                </div>
                <div>
                    <Tooltip title={data.company.name}>
                        <a
                            href={`/company-detail/${data.company.id}`}
                            className="line-clamp-1 truncate text-wrap text-xs font-semibold text-[#a6acb2]"
                        >
                            <span>{data.company.name}</span>
                        </a>
                    </Tooltip>
                </div>
                <div className="cursor-pointer">
                    <Tooltip title={data.cities}>
                        <div className="line-clamp-1 truncate text-wrap text-[10px] font-semibold text-[#a6acb2]">
                            <span>{data.cities}</span>
                        </div>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}

const dataL = {
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
};
