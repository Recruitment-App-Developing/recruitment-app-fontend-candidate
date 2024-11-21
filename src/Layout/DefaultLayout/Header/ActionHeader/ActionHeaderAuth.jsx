import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMessage } from '@fortawesome/free-solid-svg-icons';
import { faCircleUp, faPenToSquare } from '@fortawesome/free-regular-svg-icons';

import styles from './ActionHeader.module.scss';
import ButtonEmployee from './ButtonEmployee';
import Menu from '~/components/Popper/Menu';
import images from '~/assets/images';

const data = [
    {
        title: 'Cài đặt thông tin cá nhân',
        icon: <FontAwesomeIcon icon={faPenToSquare} color="#00b14f" />,
    },
    {
        title: 'Nâng cấp tài khoản VIP',
        icon: <FontAwesomeIcon icon={faCircleUp} color="#00b14f" />,
    },
];

function ActionHeaderAuth() {
    return (
        <div className="container flex h-full items-center justify-center gap-3">
            <div className="items-center">
                <p className="leadign-[14px] mb-1 text-xs font-normal text-[#7f878f]">
                    Bạn là nhà tuyển dụng?
                </p>
                <ButtonEmployee />
            </div>
            <div className="flex h-full w-12 items-center">
                <a
                    href=""
                    className="h-10 rounded-[50%] bg-green-200 p-[10px] align-middle"
                >
                    <FontAwesomeIcon
                        icon={faBell}
                        color="#00b14f"
                        fontSize="20px"
                    />
                </a>
            </div>
            <div className="flex h-full w-12 items-center">
                <a
                    href=""
                    className="h-10 rounded-[50%] bg-green-200 p-[10px] align-middle"
                >
                    <FontAwesomeIcon
                        icon={faMessage}
                        color="#00b14f"
                        fontSize="20px"
                    />
                </a>
            </div>
            <div className="flex h-full items-center justify-center">
                <Menu items={data}>
                    {
                        <div className="flex h-10 w-16 items-center rounded-[40px] bg-[#fafafa] pb-1 pl-1 pr-[6px] pt-1">
                            <img
                                src={images.avatar}
                                width="50px"
                                height="50px"
                                alt="Personal Image"
                                className="h-8 w-8 rounded-[50%]"
                            />
                        </div>
                    }
                </Menu>
            </div>
        </div>
    );
}

export default ActionHeaderAuth;
