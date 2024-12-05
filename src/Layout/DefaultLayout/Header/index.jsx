import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressBook,
    faBuilding,
    faCheckToSlot,
    faFileClipboard,
    faFilePen,
    faFileSignature,
    faLaptopCode,
    faMagnifyingGlass,
    faMedal,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import MenuItem from '~/components/Popper/Menu';
import { faFileLines, faIdBadge } from '@fortawesome/free-regular-svg-icons';
import ActionHeaderNoAuth from './ActionHeader/ActionHeaderNoAuth';
import ActionHeaderAuth from './ActionHeader/ActionHeaderAuth';
import useAuth from '~/hooks/useAuth';
import CvProfileItem from './MenuItem/CvProfileItem';

const MENU = [
    {
        title: 'Việc làm',
        data: [
            {
                title: <a href="/search-job">Tìm việc làm</a>,
                icon: (
                    <FontAwesomeIcon icon={faMagnifyingGlass} color="#00b14f" />
                ),
            },
            {
                title: <a href="/application-history">Lịch sử ứng tuyển</a>,
                icon: <FontAwesomeIcon icon={faAddressBook} color="#00b14f" />,
            },
        ],
    },
    {
        title: 'Hồ sơ & CV',
        data: [
            {
                title: <a href="/my-infor">Thông tin cá nhân</a>,
                icon: (
                    <FontAwesomeIcon icon={faFileSignature} color="#00b14f" />
                ),
            },
            {
                title: <a href="/manage-cv">Quản lý CV</a>,
                icon: (
                    <FontAwesomeIcon icon={faFileSignature} color="#00b14f" />
                ),
            },
            {
                title: <CvProfileItem />,
                icon: <FontAwesomeIcon icon={faIdBadge} color="#00b14f" />,
            },
        ],
    },
    {
        title: 'Công ty',
        data: [
            {
                title: <a href="/company">Danh sách công ty</a>,
                icon: <FontAwesomeIcon icon={faBuilding} color="#00b14f" />,
            },
        ],
    },
];

export default function Header() {
    const { logout, isAuthenticated } = useAuth();

    const renderMenu = () => {
        const menuLength = MENU.length;

        return MENU.map((item, index) => {
            return (
                <li className={clsx('h-full')} key={index}>
                    <MenuItem items={item.data}>
                        {
                            <button className={clsx(styles['menu-item'])}>
                                {item.title}
                            </button>
                        }
                    </MenuItem>
                </li>
            );
        });
    };

    return (
        <nav className={clsx(styles.wrapper, 'w-full')}>
            <div className="flex h-full w-full justify-between bg-white">
                <div className="mr-5 h-full">
                    <a href="#">
                        <img
                            className="h-[72px]"
                            src="https://static.topcv.vn/v4/image/logo/topcv-logo-6.png"
                            alt="Logo"
                        />
                    </a>
                </div>
                <div>
                    <ul className="flex h-full w-full">{renderMenu()}</ul>
                </div>
                <div className="ml-auto flex items-center bg-white">
                    {isAuthenticated ? (
                        <div className="flex">
                            <ActionHeaderAuth />
                            <button
                                onClick={logout}
                                className="text-nowrap rounded-md bg-success px-4 py-3 text-white"
                            >
                                Đăng xuất
                            </button>
                        </div>
                    ) : (
                        <ActionHeaderNoAuth />
                    )}
                </div>
            </div>
        </nav>
    );
}
