import dayjs from 'dayjs';

export default function Header() {
    return (
        <div
            className="relative z-0 h-14 w-full rounded-t-lg
                bg-[url('https://static.topcv.vn/v4/image/welcome/dashboard/dashboard-bg-header.png')]
                bg-cover px-6 py-3"
        >
            <h3 className="text-2xl font-semibold leading-8 text-white">
                Thị trường việc làm hôm nay{' '}
                <span className="text-[#11d769]">
                    {dayjs().format('DD/MM/YYYY').toString()}
                </span>
            </h3>
        </div>
    );
}
