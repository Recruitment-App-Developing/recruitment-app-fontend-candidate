import clsx from 'clsx';

import Button from '~/components/Button';
import styles from './ActionHeader.module.scss';

function ActionHeaderNoAuth() {
    const styleStr =
        'h-10 pl-4 pr-4 items-center flex leading-6 justify-center rounded-[4px] text-sm font-semibold tracking-[0.175px]';

    return (
        <div className="container flex items-center gap-3 border-[2px] border-solid bg-white">
            <a
                href="/login"
                className={clsx(
                    styleStr,
                    `border-success text-success border-[2px] border-solid bg-transparent bg-white
                    hover:bg-[rgba(229,247,237,.5)]`,
                )}
            >
                Đăng nhập
            </a>
            <a
                href="/register"
                className={clsx(
                    styleStr,
                    `border-success bg-success border-[2px] border-solid text-white
                    hover:bg-[#3ba769]`,
                )}
            >
                Đăng kí
            </a>
            <a
                href="#"
                className={clsx(
                    styleStr,
                    `border-[2px] border-solid border-[#212f3f] bg-[#212f3f] text-white
                    hover:bg-[#161f29]`,
                )}
            >
                Đăng tuyển & tìm hồ sơ
            </a>
        </div>
    );
}

export default ActionHeaderNoAuth;
