import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

import styles from './RemindUpdCvBox.module.scss';

function RemindUpdCvBox({ className }) {
    return (
        <div className={clsx(styles.wrapper, className)}>
            <img
                src="https://static.topcv.vn/v4/image/job-detail/remind-update-cv/cv.png"
                alt=""
                className="mr-1"
            />
            <div className="p-4">
                <p className="mb-1 text-sm font-semibold leading-5 text-[#263a4d]">
                    Số lượng NTD tìm kiếm những ứng viên như bạn đã tăng lên
                    khoảng <span className="text-success">7%</span> trong 1 tuần
                    gần đây.
                </p>
                <p className="mb-2 text-[13px] font-normal leading-5 text-[rgba(33,47,63,.8)]">
                    Tạo mới CV ngay để không bỏ lỡ những cơ hội tốt nhất
                </p>
                <a href="#" className={styles['btn-create-cv']} target="_blank">
                    Tạo CV ngay{' '}
                    <i className={styles['fa-arrow-right']}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </i>
                </a>
            </div>
            <div className="relative mb-4 ml-6 mr-5 mt-[10px] flex-shrink-0">
                <div className="absolute left-3 top-0 flex items-center gap-1">
                    <i className={styles['fa-arrow-trend-up']}>
                        <FontAwesomeIcon icon={faArrowTrendUp} />
                    </i>
                    <span className={styles.percent}>7%</span>
                </div>
                <img
                    className="mt-8"
                    src="https://static.topcv.vn/v4/image/company-search/chart.png"
                    alt=""
                />
            </div>
        </div>
    );
}

export default RemindUpdCvBox;
