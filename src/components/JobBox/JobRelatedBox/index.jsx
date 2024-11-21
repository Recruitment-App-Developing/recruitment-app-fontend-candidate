import styles from './JobRelatedBox.module.scss';

import { JobDefaultBox } from '..';

function JobRelatedBox() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className={styles.title}>Việc làm liên quan</h2>
            <div className="w-full">
                {data.jobs.map((item, index) => {
                    return <JobDefaultBox key={index} />;
                })}
            </div>
        </div>
    );
}

export default JobRelatedBox;

const data = {
    status: 'success',
    jobs: [
        {
            address:
                '<div style="margin-bottom: 10px">- Hồ Chí Minh: 11 Nguyễn Huy Tưởng, Bình Thạnh  </div>',
            apply_url: false,
            cities: "<p style='text-align: left'>Hồ Chí Minh: Bình Thạnh</p>",
            company: {
                logo_url:
                    'https://www.topcv.vn/v4/image/normal-company/logo_default.png',
                name: 'CÔNG TY TNHH THƯƠNG MẠI AILINK',
                url: 'https://www.topcv.vn/cong-ty/cong-ty-tnhh-thuong-mai-ailink/170956.html',
            },
            //deadline: '11/07/2024',
            deadline: 'Còn 5 ngày',
            employer_verified: true,
            id: 1365848,
            is_applied: false,
            is_bg_featured: true,
            is_diamond_employer: false,
            is_featured: true,
            is_highlight: false,
            is_hot: false,
            is_job_flash: false,
            is_new: false,
            is_paid_featured: true,
            is_remote: false,
            is_urgent: false,
            is_vip_employer: false,
            is_yellow_bg: 0,
            job_exp: '3 năm',
            no_sort: false,
            remain_deadline_by_day: 28,
            remain_deadline_by_hour: 675,
            salary: '9 - 15 triệu',
            score: 0,
            short_cities: 'Hồ Chí Minh',
            title: 'Nhân Viên Vận Hành Sàn Thương Mại Điện Tử',
            updated_at_str: '1 giờ trước',
            url: 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_LinkDetail',
        },
        {
            address:
                '<div style="margin-bottom: 10px">- Hồ Chí Minh: 11 Nguyễn Huy Tưởng, Bình Thạnh  </div>',
            apply_url: false,
            cities: "<p style='text-align: left'>Hồ Chí Minh: Bình Thạnh</p>",
            company: {
                logo_url:
                    'https://www.topcv.vn/v4/image/normal-company/logo_default.png',
                name: 'CÔNG TY TNHH THƯƠNG MẠI AILINK',
                url: 'https://www.topcv.vn/cong-ty/cong-ty-tnhh-thuong-mai-ailink/170956.html',
            },
            //deadline: '11/07/2024',
            deadline: 'Còn 5 ngày',
            employer_verified: true,
            id: 1365848,
            is_applied: false,
            is_bg_featured: true,
            is_diamond_employer: false,
            is_featured: true,
            is_highlight: false,
            is_hot: false,
            is_job_flash: false,
            is_new: false,
            is_paid_featured: true,
            is_remote: false,
            is_urgent: false,
            is_vip_employer: false,
            is_yellow_bg: 0,
            job_exp: '3 năm',
            no_sort: false,
            remain_deadline_by_day: 28,
            remain_deadline_by_hour: 675,
            salary: '9 - 15 triệu',
            score: 0,
            short_cities: 'Hồ Chí Minh',
            title: 'Nhân Viên Vận Hành Sàn Thương Mại Điện Tử',
            updated_at_str: '1 giờ trước',
            url: 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_LinkDetail',
        },
    ],
};
