import {
    faBusinessTime,
    faClock,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

// const ITEM = {
//     images: 'https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/cong-ty-co-phan-ha-thanh-o-to-5ef0865ab523b.jpg',
//     title: 'Chuyên Viên Marketing Kiêm Admin Văn Phòng aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
//     companyName: 'Công ty cổ phần Hà Thành Ô Tô',
//     salary: '20 - 30 triệu',
//     location: 'Hà Nội',
//     exp: 'Không yêu cầu kinh nghiệm',
//     deadline: 'Còn 28 ngày',
// };

function BoxHeader({ className, data }) {
    return (
        <div
            className={clsx(
                className,
                'sticky flex w-full flex-col gap-4 bg-white pb-3 pl-6 pr-6 pt-5',
            )}
        >
            <div className="flex w-full items-start gap-6">
                <div
                    className="flex h-[100px] w-[100px] items-center rounded-xl border-2 border-solid
                        border-[#e9eaec] bg-white p-2"
                >
                    <img
                        src={data?.company?.logo}
                        className="h-[100px] w-[100px] border-none object-contain"
                        alt=""
                    />
                </div>
                <div className="flex w-[361px] flex-col gap-1 bg-white">
                    <h2
                        className="w-[355px] text-wrap break-words text-left text-base font-semibold
                            tracking-[-0.01em]"
                    >
                        {data?.name}
                    </h2>
                    <a
                        href="#"
                        className="text-left text-sm font-medium tracking-[-0.01em] text-[#7f878f]"
                    >
                        {data?.company?.name}
                    </a>
                    <label
                        htmlFor=""
                        className="text-left text-sm font-semibold tracking-[0.0125em] text-[#00b14f]"
                    >
                        {data?.salary}
                    </label>
                </div>
            </div>
            <div className="flex flex-wrap gap-3">
                <div
                    className="flex h-6 items-center gap-2 rounded-[4px] bg-[#f2f4f5] pb-1 pl-2 pr-3 pt-1
                        text-[#7f878f]"
                >
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-center text-xs font-black tracking-[0]"
                    />
                    <span className="truncate text-wrap text-left text-xs font-medium tracking-[0.0125em]">
                        {data?.address}
                    </span>
                </div>
                <div
                    className="flex h-6 items-center gap-2 rounded-[4px] bg-[#f2f4f5] pb-1 pl-2 pr-3 pt-1
                        text-[#7f878f]"
                >
                    <FontAwesomeIcon
                        icon={faBusinessTime}
                        className="ttext-xs text-center font-black tracking-[0]"
                    />
                    <span className="text-left text-xs font-medium tracking-[0.0125em]">
                        {data?.jobExp}
                    </span>
                </div>
                <div
                    className="flex h-6 items-center gap-2 rounded-[4px] bg-[#f2f4f5] pb-1 pl-2 pr-3 pt-1
                        text-[#7f878f]"
                >
                    <FontAwesomeIcon
                        icon={faClock}
                        className="text-center text-xs font-black tracking-[0]"
                    />
                    <span className="text-left text-xs font-medium tracking-[0.0125em]">
                        {data?.applicationDueTime}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BoxHeader;
