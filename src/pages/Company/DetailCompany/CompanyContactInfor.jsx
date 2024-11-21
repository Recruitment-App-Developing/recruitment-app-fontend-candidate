import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './detail-company.module.scss';
import { faBuilding, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { cn } from '~/lib/utils';

export default function CompanyContactInfor({
    headQuaters = '',
    subAddress = [],
}) {
    return (
        <section className={cn(styles['box-infor'], 'pb-5')}>
            <h3 className={styles.title}>Thông tin liên hệ</h3>
            <div className="flex flex-col gap-2 p-4">
                <div className="flex items-center gap-4">
                    <FontAwesomeIcon
                        icon={faBuilding}
                        className="text-lg text-success"
                    />
                    <span className="text-lg font-medium">
                        Địa chỉ trụ sở chính
                    </span>
                </div>
                <span className="text-sm font-medium text-[#4d5965]">
                    {headQuaters}
                </span>
            </div>
            <div className="flex flex-col gap-2">
                {subAddress.map((item, index) => (
                    <div className="flex flex-col gap-1 px-5">
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="text-lg text-success"
                            />
                            <span className="text-lg font-medium">
                                Chi nhánh {index + 1}
                            </span>
                        </div>
                        <span className="text-sm font-medium text-[#4d5965]">
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
