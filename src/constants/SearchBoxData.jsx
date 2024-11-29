import {
    faBusinessTime,
    faCircleDollarToSlot,
    faCube,
    faGlobeAsia,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CompanyField = {
    title: 'Lĩnh vực công ty',
    data: [
        'Lĩnh vực công ty',
        'Agency (Desgin/Development)',
        'Agency (Marketing, Advertising)',
        'Bán lẻ - Hàng tiêu dùng - FMCG',
        'Bảo hiểm',
        'Bảo trì / Sửa chữa',
        'Bất động sản',
        'Bất động sản',
        'Chứng khoán',
    ],
};

export const Salary = {
    title: 'Mức lương',
    data: ['Mức lương', '10 - 15 triệu'],
};

export const Location = {
    title: 'Địa điểm',
    data: ['Bắc Giang', 'Hà Nội', 'Ninh Bình', 'Lào Cai'],
};

export const searchDataConstant = [
    {
        id: 'workField',
        title: 'Lĩnh vực công ty',
        items: [
            { value: 'all', name: 'Địa điểm' },
            { value: 1, name: 'IT Phần mềm' },
            { value: 2, name: 'Kỹ thuật điện - điện tử' },
            { value: 3, name: 'Xây dựng' },
            { value: 4, name: 'Y tế và chăm sóc sức khỏe' },
            { value: 5, name: 'Giáo dục' },
            { value: 6, name: 'Tài chính - Ngân hàng' },
            { value: 7, name: 'Kế toán - Kiểm toán' },
            { value: 8, name: 'Marketing' },
            { value: 9, name: 'Thương mại điện tử' },
            { value: 10, name: 'Bất động sản' },
            { value: 11, name: 'Luật' },
            { value: 12, name: 'Du lịch và Khách sạn' },
            { value: 13, name: 'Xuất nhập khẩu' },
            { value: 14, name: 'Kỹ thuật cơ khí' },
            { value: 15, name: 'Truyền thông và báo chí' },
            { value: 16, name: 'Nhân sự' },
            { value: 17, name: 'Thiết kế đồ họa' },
            { value: 18, name: 'Nông nghiệp' },
            { value: 19, name: 'Hóa chất và Dược phẩm' },
            { value: 20, name: 'Logistics' },
        ],
        leftIcon: <FontAwesomeIcon icon={faCube} />,
    },
    {
        id: 'experienceRequired',
        title: 'Kinh nghiệm',
        items: [
            {
                name: 'Kinh nghiệm',
                value: 'all',
            },
            {
                name: 'Chưa có kinh nghiệm',
                value: 'Chưa có kinh nghiệm',
            },
            {
                name: '1 năm',
                value: '1 năm',
            },
            {
                name: '2 năm',
                value: '2 năm',
            },
            {
                name: '3 năm',
                value: '3 năm',
            },
            {
                name: '4 năm',
                value: '4 năm',
            },
            {
                name: '5 năm',
                value: '5 năm',
            },
            {
                name: 'Trên 5 năm',
                value: 'Trên 5 năm',
            },
        ],
        leftIcon: <FontAwesomeIcon icon={faStar} />,
    },
    {
        title: 'Mức lương',
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
        leftIcon: <FontAwesomeIcon icon={faCircleDollarToSlot} />,
    },
    {
        id: 'jobPosition',
        title: 'Cấp bậc',
        items: [
            { value: 'all', name: 'Cấp bậc' },
            { value: 'NHAN_VIEN', name: 'Nhân viên' },
            { value: 'CHUYEN_VIEN', name: 'Chuyên viên' },
            { value: 'QUAN_LY', name: 'Quản lý' },
            { value: 'GIAM_DOC', name: 'Giám đốc' },
            { value: 'TRUONG_PHONG', name: 'Trưởng phòng' },
            { value: 'PHO_PHONG', name: 'Phó phòng' },
            { value: 'TRUONG_NHOM', name: 'Trưởng nhóm' },
            { value: 'GIAM_SAT', name: 'Giám sát' },
            { value: 'THUC_TAP_SINH', name: 'Thực tập sinh' },
            { value: 'FREELANCER', name: 'Freelancer' },
        ],
        leftIcon: <FontAwesomeIcon icon={faGlobeAsia} />,
    },
    {
        id: 'workMethod',
        title: 'Hình thức làm việc',
        items: [
            { value: 'all', name: 'Hình thức làm việc' },
            { value: 'FULLTIME', name: 'Full-time' },
            { value: 'PARTTIME', name: 'Part-time' },
            { value: 'DIRECTLY', name: 'Làm việc trực tiếp' },
            { value: 'REMOTE', name: 'Làm việc từ xa' },
            { value: 'HYBRID', name: 'Làm việc kết hợp' },
            { value: 'PROJECT_BASED', name: 'Làm việc theo dự án' },
            { value: 'FLEXIBLE', name: 'Làm việc linh hoạt' },
            { value: 'FREELANCE', name: 'Làm việc độc lập' },
        ],
        leftIcon: <FontAwesomeIcon icon={faBusinessTime} />,
    },
];
