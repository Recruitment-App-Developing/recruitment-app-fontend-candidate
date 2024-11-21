import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './JobDetailDescribleBox.module.scss';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

function JobDetailDescribeBox() {
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-center gap-3">
                    <FontAwesomeIcon
                        icon={faCircleInfo}
                        className="flex items-center justify-center text-xl text-green-500"
                    />
                    <h2 className={styles.title}>Chi tiết tin tuyển dụng</h2>
                </div>
                <button className={styles['btn-job-similar']}>
                    <FontAwesomeIcon
                        icon={faBell}
                        className="text-center text-sm font-normal leading-5 text-[#00b14f]"
                    />
                    <span className="text-center text-sm font-semibold tracking-[0.0125em] text-[#00b14f]">
                        Gửi tôi việc làm tương tự
                    </span>
                </button>
            </div>
        </div>
    );
}

export default JobDetailDescribeBox;
