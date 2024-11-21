import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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

const MENU = [
    {
        title: 'Việc làm',
        data: [
            {
                title: 'Tìm việc làm',
                icon: (
                    <FontAwesomeIcon icon={faMagnifyingGlass} color="#00b14f" />
                ),
            },
            {
                title: 'Việc làm phù hợp',
                icon: <FontAwesomeIcon icon={faCheckToSlot} color="#00b14f" />,
            },
            {
                title: 'Việc làm IT',
                icon: <FontAwesomeIcon icon={faLaptopCode} color="#00b14f" />,
            },
            {
                title: 'Việc làm Senior',
                icon: <FontAwesomeIcon icon={faMedal} color="#00b14f" />,
            },
        ],
    },
    {
        title: 'Hồ sơ & CV',
        data: [
            {
                title: 'Mẫu CV',
                icon: (
                    <FontAwesomeIcon icon={faFileSignature} color="#00b14f" />
                ),
            },
            {
                title: 'Mẫu Cover Letter',
                icon: <FontAwesomeIcon icon={faFileLines} color="#00b14f" />,
            },
            {
                title: 'Dịch vụ tư vấn CV',
                icon: (
                    <FontAwesomeIcon icon={faFileSignature} color="#00b14f" />
                ),
            },
            {
                title: 'Hướng dẫn viết CV theo ngành nghề',
                icon: <FontAwesomeIcon icon={faFilePen} color="#00b14f" />,
            },
            {
                title: 'Thư viện CV theo ngành nghề',
                icon: (
                    <FontAwesomeIcon icon={faFileClipboard} color="#00b14f" />
                ),
            },
            {
                title: 'TopCV Profile',
                icon: <FontAwesomeIcon icon={faIdBadge} color="#00b14f" />,
            },
        ],
    },
    {
        title: 'Công ty',
    },
    {
        title: 'Công cụ',
    },
    {
        title: 'Cẩm nang nghề nghiệp',
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
                                className="bg-success text-nowrap rounded-md px-4 py-3 text-white"
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
