import { NavLink } from 'react-router-dom';
import SmallBox from './SmallBox';

const boxes = [
    {
        title: 'TỔNG LƯỢNG CV ỨNG VIÊN',
        number: 100,
        className: 'text-black',
    },
    {
        title: 'CV ỨNG TUYỂN',
        number: 15,
        className: 'text-success',
    },
    {
        title: 'CV MỞ LIÊN HỆ',
        number: 32,
        className: 'text-red-500',
    },
];

const menus = [
    'Tin tuyển dụng',
    'CV ứng tuyển',
    'Ứng viên đã xem tin',
    'CV tìm kiếm',
    'CV đang theo dõi',
    'CV được hỗ trợ',
];

export default function LayoutList({
    children,
    boxList = boxes,
    menuList = menus,
}) {
    return (
        <div className="h-[600px] w-[1000px] bg-slate-300">
            <div className="flex flex-row justify-between">
                {boxList.map((item, index) => (
                    <div>
                        <SmallBox
                            key={index}
                            title={item.title}
                            number={item.number}
                            className={item.className}
                        />
                    </div>
                ))}
            </div>
            <div className="mt-3 flex flex-row bg-white">
                {menuList.map((item) => (
                    <NavLink>
                        <h4 className="px-2 py-1">{item}</h4>
                    </NavLink>
                ))}
            </div>
            <div>{children}</div>
        </div>
    );
}
