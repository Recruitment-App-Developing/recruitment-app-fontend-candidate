import {
    faArrowRotateRight,
    faCircleCheck,
    faClock,
    faLock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconJobDetailInfor from './IconJobDetailInfor';
import { ExperienceIcon, LocationIcon, SalaryIcon } from '~/components/Icon';
import styles from './JobDetailBox.module.scss';
import { faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import ApplyButton from '~/components/Button/ApplyButton/ApplyButton';
import ToolTip from '~/components/Tippy/ToolTip';

function JobDetailTitleBox({ data, jobId }) {
    let province = data?.provinceList[0];
    if (data?.provinceList.length > 1) {
        province =
            province + ` & ${data?.provinceList.length - 1} địa điểm khác`;
    }
    const provinceList = data?.provinceList.join(', ');

    return (
        // Job Detail Infor
        <div className="flex h-fit w-full flex-col gap-4 rounded-lg bg-white pb-5 pl-6 pr-6 pt-5">
            <div className="flex items-center justify-start gap-2">
                <ToolTip content={data?.name}>
                    <h1
                        className="max-w-[95%] justify-center overflow-hidden text-ellipsis whitespace-nowrap
                            text-xl font-bold leading-7 tracking-[-0.2px] text-[#263a4d]"
                    >
                        {data?.name}
                    </h1>
                </ToolTip>
                {data?.employer_verified && (
                    <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-lg text-[#00b14f]"
                    />
                )}
            </div>
            <section className="flex items-center justify-between pr-5">
                <IconJobDetailInfor
                    className="w-fit"
                    icon={<SalaryIcon />}
                    title="Mức lương"
                    value={data?.salary}
                />
                <IconJobDetailInfor
                    className="w-fit"
                    icon={<LocationIcon />}
                    title="Địa điểm"
                    value={province}
                    tooltip={provinceList}
                />
                <IconJobDetailInfor
                    className="w-fit"
                    icon={<ExperienceIcon />}
                    title="Kinh nghiệm"
                    value={data?.jobExp}
                />
            </section>
            <section className="flex items-center justify-start gap-4">
                <div
                    className="flex w-fit items-center justify-start gap-2 rounded-md border-[1px] border-solid
                        border-[#99e0b9] bg-[#f2f4f5] pb-[2px] pl-2 pr-2 pt-[2px]"
                >
                    <FontAwesomeIcon
                        icon={faLock}
                        className="align-middle text-[15px] font-black text-[#7f878f]"
                    />
                    <div
                        className="flex items-center justify-center align-middle font-normal leading-[22px]
                            tracking-[0.0125em] text-[#263a4d]"
                    >
                        Chưa hỗ trợ xem số lượt ứng tuyển
                    </div>
                </div>
                <div
                    className="flex w-fit items-center justify-start gap-2 rounded-md border-[1px] border-solid
                        border-[#99e0b9] bg-[#f2f4f5] pb-[2px] pl-2 pr-2 pt-[2px] leading-[22px]"
                >
                    <FontAwesomeIcon
                        icon={faClock}
                        className="align-middle text-[15px] font-black text-[#7f878f]"
                    />
                    <div
                        className="flex items-center justify-center text-center font-normal tracking-[0.0125em]
                            text-[#263a4d]"
                    >
                        Hạn nộp hồ sơ:{' '}
                        <b className="pl-1">{data?.applicationDueTime}</b>
                    </div>
                </div>
            </section>
            <section className="mt-1 flex flex-row items-center gap-3">
                {/* <button className={styles['btn-apply']}>
                    <div className="flex items-center justify-center h-6 w-6 p-1">
                        <FontAwesomeIcon
                            icon={faPaperPlane}
                            className="text-[15px] font-normal leading-5 align-middle"
                        />
                    </div>
                    Ứng tuyển ngay
                </button> */}
                {!data?.isApply ? (
                    <ApplyButton jobId={jobId} jobName={data?.name} />
                ) : (
                    <button className="flex-center h-10 flex-grow rounded-md bg-success font-semibold text-white">
                        <div className="flex h-6 w-6 items-center justify-center p-1">
                            <FontAwesomeIcon
                                icon={faArrowRotateRight}
                                className="align-middle text-[15px] font-normal leading-5"
                            />
                        </div>
                        Ứng tuyển lại
                    </button>
                )}
                <button className={styles['btn-save']}>
                    <div className="flex h-6 w-6 items-center justify-center p-1">
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="align-middle text-[15px] font-normal leading-5"
                        />
                    </div>
                    Lưu tin
                </button>
            </section>
        </div>
    );
}

export default JobDetailTitleBox;
