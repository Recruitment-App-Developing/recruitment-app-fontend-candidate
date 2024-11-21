import clsx from 'clsx';

import styles from './JobDetailBox.module.scss';
import ToolTip from '~/components/Tippy/ToolTip';

function IconJobDetailInfor({ className, icon, title, value, tooltip }) {
    return (
        <div
            className={clsx(
                className,
                'flex cursor-pointer items-center justify-start gap-4',
            )}
        >
            <div className={styles['job-detail-icon']}>{icon}</div>
            <div className="flex flex-col gap-[2px]">
                <div className="text-sm font-normal tracking-[0.14px] text-[#263a4d]">
                    {title}
                </div>
                {tooltip ? (
                    <ToolTip content={tooltip} placement="bottom">
                        <div className="text-sm font-semibold tracking-[0.175px] text-[#212f3f]">
                            {value}
                        </div>
                    </ToolTip>
                ) : (
                    <div className="text-sm font-semibold tracking-[0.175px] text-[#212f3f]">
                        {value}
                    </div>
                )}
            </div>
        </div>
    );
}

export default IconJobDetailInfor;
