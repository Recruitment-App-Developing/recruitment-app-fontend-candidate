import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './JobDetail.module.scss';
import {
    JobDetailDescribeBox,
    JobDetailTitleBox,
    JobGeneralInfor,
    JobRelatedBox,
} from '~/components/JobBox';
import BreadCrumb from '~/components/BreadCrumb';
import BoxBodyItem from '~/components/JobBox/JobQuickViewBox/BoxBodyItem';
import GreenButton from '~/components/Button/GreenButton';
import WhiteButton from '~/components/Button/WhiteButton';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { GrayBox, RemindUpdCvBox, ReportBox } from '~/components/Box';
import { CompQuickViewBox } from '~/components/CompanyComponents';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDetailPageJob } from '~/services/jobService';
import ListImage from './ListImage';

const breadcrumb = [{ title: 'Trang chủ', link: '/' }];

function JobDetail() {
    const { jobId } = useParams();

    const [data, setJob] = useState();
    useEffect(() => {
        fetchDetailPageJob(jobId).then((data) => setJob(data.data));
    }, []);

    return (
        <div className="justify-top container flex flex-col items-center">
            <BreadCrumb
                data={[
                    ...breadcrumb,
                    { title: data?.mainIndustry.name, link: '/' },
                    { title: data?.name, link: `/job-detail/${jobId}` },
                ]}
                title={data?.title}
            />
            {/* Job Detail Wrapper */}
            <div className="flex h-full w-full flex-row gap-5 rounded-md">
                {/* Job detail left */}
                <div className="flex w-[67%] flex-col rounded-lg">
                    <JobDetailTitleBox
                        data={data}
                        jobId={jobId}
                        setJob={setJob}
                    />
                    <div
                        className="mt-4 flex flex-col items-center justify-center rounded-lg bg-white pb-5 pl-6
                            pr-6 pt-3"
                    >
                        <JobDetailDescribeBox />
                        <div className="mb-3 mt-3 w-full">
                            <ListImage imageList={data?.imageList ?? []} />
                        </div>
                        <div className="ml-2">
                            <BoxBodyItem
                                title="Mô tả công việc"
                                text={data?.jobDescript}
                            />
                            <BoxBodyItem
                                title="Yêu cầu ứng viên"
                                text={data?.jobRequirement}
                            />
                            <BoxBodyItem
                                title="Quyền lợi"
                                text={data?.jobBenefit}
                            />
                            <BoxBodyItem
                                title="Địa chỉ làm việc"
                                text={data?.address?.join('<br />')}
                                //{data?.address}
                            />
                            <BoxBodyItem
                                title="Cách thức ứng tuyển"
                                text={data?.applicationMethod}
                            />
                            <div className="mb-4 mt-4 flex items-center justify-start gap-3">
                                <GreenButton
                                    leftIcon={
                                        <FontAwesomeIcon
                                            icon={faPaperPlane}
                                            className="align-middle text-[15px] font-normal leading-5"
                                        />
                                    }
                                    content="Ứng tuyển ngay"
                                />

                                <WhiteButton content="Lưu tin" />
                            </div>
                            <GrayBox
                                iconLeft={<FontAwesomeIcon icon={faLock} />}
                                content={0}
                            />
                            <ReportBox className="mt-4">
                                <span>
                                    Báo cáo tin tuyển dụng: Nếu bạn thấy rằng
                                    tin tuyển dụng này không đúng hoặc có dấu
                                    hiệu lừa đảo,{' '}
                                    <a href="#" className="text-success">
                                        hãy phản ánh với chúng tôi.
                                    </a>
                                </span>
                            </ReportBox>
                            <RemindUpdCvBox className="mb-4 mt-4" />
                            <JobRelatedBox />
                        </div>
                    </div>
                </div>
                {/* Job detail right */}
                <div className={clsx(styles['job-detail-right'])}>
                    {!!data?.company && (
                        <CompQuickViewBox company={data?.company} />
                    )}
                    {!!data && <JobGeneralInfor data={data} />}
                </div>
            </div>
        </div>
    );
}

export default JobDetail;
