import { useEffect, useState } from 'react';
import { FeatureJobItem } from '../JobBox';
import { fetchListJob } from '~/services/jobService';
import { Pagination } from '@mui/material';

function JobList() {
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [isHover, setIsHover] = useState(false);

    const [jobList, setJobList] = useState(null);
    useEffect(() => {
        fetchListJob(currentPage - 1).then((data) => {
            console.log(data.data);
            setJobList(data.data);
            setTotalPage(data.meta.totalPages);
            //setCurrentPage(data.meta.currentPage)
        });
    }, [currentPage]);

    // useEffect(() => {
    //     if (!isHover) {
    //         const timeout = setTimeout(() => {
    //             if (currentPage == totalPage) setCurrentPage(1);
    //             else setCurrentPage((prev) => prev + 1);
    //         }, 5000);
    //         return () => clearTimeout(timeout);
    //     }
    // }, [currentPage, isHover]);

    return (
        <div
            className="flex flex-col justify-center gap-5 py-1"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className="grid h-[350px] w-full auto-rows-auto grid-cols-3 gap-x-6 gap-y-6">
                {jobList?.map((item) => {
                    return <FeatureJobItem key={item.id} data={item} />;
                })}
            </div>
            <Pagination
                className="flex-center"
                onChange={(_e, p) => {
                    setCurrentPage(p);
                }}
                page={currentPage}
                count={totalPage}
                variant="outlined"
                color="primary"
            />
        </div>
    );
}

export default JobList;

// const jobList = {
//     status: 'success',
//     jobs: [
//         {
//             address:
//                 '<div style="margin-bottom: 10px">- Hồ Chí Minh: 11 Nguyễn Huy Tưởng, Bình Thạnh  </div>',
//             apply_url: false,
//             cities: "<p style='text-align: left'>Hồ Chí Minh: Bình Thạnh</p>",
//             company: {
//                 logo_url:
//                     'https://www.topcv.vn/v4/image/normal-company/logo_default.png',
//                 name: 'CÔNG TY TNHH THƯƠNG MẠI AILINK',
//                 url: 'https://www.topcv.vn/cong-ty/cong-ty-tnhh-thuong-mai-ailink/170956.html',
//             },
//             company_short_description: '',
//             //deadline: '11/07/2024',
//             deadline: 'Còn 5 ngày',
//             employer_verified: false,
//             id: 1365848,
//             is_applied: false,
//             is_bg_featured: true,
//             is_diamond_employer: false,
//             is_featured: true,
//             is_highlight: false,
//             is_hot: false,
//             is_job_flash: false,
//             is_new: false,
//             is_paid_featured: true,
//             is_remote: false,
//             is_urgent: false,
//             is_vip_employer: false,
//             is_yellow_bg: 0,
//             job_benefit:
//                 '<p>1. Thưởng lương tháng 13, sinh nhật, hiếu hỉ...\n</p><p>2. Được đóng BHXH, BHYT, BHTN và các chế độ khác theo Luật quy định\n</p><p>3. Làm việc từ 9h00 – 17h00, từ thứ 2 đến thứ 7 hàng tuần.\n</p><p>4. Làm việc trong môi trường năng động, trẻ trung, chuyên nghiệp có nhiều cơ hội thăng \n</p><p>tiến.\n</p><ul><li>Được cơ hội đào tạo nâng cao kỹ năng trong và ngoài công ty.</li></ul>',
//             job_description:
//                 '<p>1. Phụ trách vận hành các sàn TMĐT của Công ty, duy trì và quản lý, đảm bảo cho tài khoản</p><p>không bị vị phạm quy tắc sàn;</p><p>2. Hoàn thành đăng sản phẩm, mô tả sản phẩm, tối ưu hóa từ khóa sản phẩm, lên kế hoạch</p><p>các chương trình khuyến mãi;</p><p>3. Luôn theo dõi và cập nhật các chính sách mới nhất của nền tảng, lập kế hoạch theo kịp</p><p>chính sách;</p><p>4. Phụ trách phân tích hiệu quả và theo dõi hoạt động trong và ngoài sàn;</p><p>5. Xây dựng chiến lược chuẩn bị hàng, thống kê và phân tích dữ liệu bán hàng và dữ liệu kho,</p><p>nâng cao tỷ lệ lưu chuyển của kho;</p><p>6. Thống kê dữ liệu bán hàng định kỳ, số liệu kho và đưa ra các điều chỉnh tương ứng, duy trì</p><p>tỷ lệ doanh thu tuần trong kho tốt.</p><p>7. Theo dõi và đánh giá hiệu suất của cửa hàng, đồng thời đề xuất và thực hiện các biện pháp tối ưu hóa để tăng cường doanh số bán hàng và sự hài lòng của khách hàng.</p><p>8Thực hiện các chiến lược quảng cáo và marketing để thu hút khách hàng mới và tăng tương tác của khách hàng hiện tại. </p><p>9. Phân tích thị trường, tìm kiếm sản phẩm kinh doanh tiềm năng, xây dựng hệ sinh thái sản phẩm</p><p>10. Có tinh thần học hỏi và tinh thần trách nhiệm cao.</p>',
//             job_exp: '3 năm',
//             job_requirement:
//                 '<p>1.Ưu tiên những bạn đã từng vận hành shop mới </p><p>2. Trình độ: Tốt nghiệp Thương mại điện tử, Quản trị kinh doanh, Marketing hoặc những</p><p>ngành nghề liên quan.</p><p>3. Có hơn 2 - 3 năm kinh nghiệm làm việc tại shopee, lazada, tiktok shop, tìm hiểu các chính sách</p><p>và quy định của nền tảng, có kinh nghiệm phong phú về việc quảng bá sản phẩm và vận hành</p><p>gian hàng.</p><p>4. Có kỹ năng giao tiếp tốt, tinh thần đồng đội, khả năng chịu áp lực tốt, ưu tiên sự sáng tạo</p><p>5. Có khả năng phân tích dữ liệu tổt, giỏi phân phối quảng cáo; Khám phá vấn đề từ số</p><p>liệu trên nền tảng và các sản phẩm cạnh tranh, làm rõ chiến lược vận hành tiếp theo, đề xuất</p><p>cải thiện sản phẩm theo xu hướng thị trường.</p><p>6. Tư duy sáng tạo, chủ động thu hút từ một số phương tiện truyền thông xã hội</p><p>(Facebook/YouTube/Tik Tok) đến cửa hàng.</p>',
//             no_sort: false,
//             remain_deadline_by_day: 28,
//             remain_deadline_by_hour: 675,
//             salary: '9 - 15 triệu',
//             score: 0,
//             short_cities: 'Hồ Chí Minh',
//             title: 'Nhân Viên Vận Hành Sàn Thương Mại Điện Tử',
//             updated_at_str: '1 giờ trước',
//             url: 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_LinkDetail',
//             urlTooltip:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_QuickView',
//             url_tooltip_apply:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_ButtonApplyFromQuickView',
//         },
//         {
//             address:
//                 '<div style="margin-bottom: 10px">- Hồ Chí Minh: 11 Nguyễn Huy Tưởng, Bình Thạnh  </div>',
//             apply_url: false,
//             cities: "<p style='text-align: left'>Hồ Chí Minh: Bình Thạnh</p>",
//             company: {
//                 logo_url:
//                     'https://www.topcv.vn/v4/image/normal-company/logo_default.png',
//                 name: 'CÔNG TY TNHH THƯƠNG MẠI AILINK',
//                 url: 'https://www.topcv.vn/cong-ty/cong-ty-tnhh-thuong-mai-ailink/170956.html',
//             },
//             company_short_description: '',
//             //deadline: '11/07/2024',
//             deadline: 'Còn 5 ngày',
//             employer_verified: false,
//             id: 1365848,
//             is_applied: false,
//             is_bg_featured: true,
//             is_diamond_employer: false,
//             is_featured: true,
//             is_highlight: false,
//             is_hot: false,
//             is_job_flash: false,
//             is_new: false,
//             is_paid_featured: true,
//             is_remote: false,
//             is_urgent: false,
//             is_vip_employer: false,
//             is_yellow_bg: 0,
//             job_benefit:
//                 '<p>1. Thưởng lương tháng 13, sinh nhật, hiếu hỉ...\n</p><p>2. Được đóng BHXH, BHYT, BHTN và các chế độ khác theo Luật quy định\n</p><p>3. Làm việc từ 9h00 – 17h00, từ thứ 2 đến thứ 7 hàng tuần.\n</p><p>4. Làm việc trong môi trường năng động, trẻ trung, chuyên nghiệp có nhiều cơ hội thăng \n</p><p>tiến.\n</p><ul><li>Được cơ hội đào tạo nâng cao kỹ năng trong và ngoài công ty.</li></ul>',
//             job_description:
//                 '<p>1. Phụ trách vận hành các sàn TMĐT của Công ty, duy trì và quản lý, đảm bảo cho tài khoản</p><p>không bị vị phạm quy tắc sàn;</p><p>2. Hoàn thành đăng sản phẩm, mô tả sản phẩm, tối ưu hóa từ khóa sản phẩm, lên kế hoạch</p><p>các chương trình khuyến mãi;</p><p>3. Luôn theo dõi và cập nhật các chính sách mới nhất của nền tảng, lập kế hoạch theo kịp</p><p>chính sách;</p><p>4. Phụ trách phân tích hiệu quả và theo dõi hoạt động trong và ngoài sàn;</p><p>5. Xây dựng chiến lược chuẩn bị hàng, thống kê và phân tích dữ liệu bán hàng và dữ liệu kho,</p><p>nâng cao tỷ lệ lưu chuyển của kho;</p><p>6. Thống kê dữ liệu bán hàng định kỳ, số liệu kho và đưa ra các điều chỉnh tương ứng, duy trì</p><p>tỷ lệ doanh thu tuần trong kho tốt.</p><p>7. Theo dõi và đánh giá hiệu suất của cửa hàng, đồng thời đề xuất và thực hiện các biện pháp tối ưu hóa để tăng cường doanh số bán hàng và sự hài lòng của khách hàng.</p><p>8Thực hiện các chiến lược quảng cáo và marketing để thu hút khách hàng mới và tăng tương tác của khách hàng hiện tại. </p><p>9. Phân tích thị trường, tìm kiếm sản phẩm kinh doanh tiềm năng, xây dựng hệ sinh thái sản phẩm</p><p>10. Có tinh thần học hỏi và tinh thần trách nhiệm cao.</p>',
//             job_exp: '3 năm',
//             job_requirement:
//                 '<p>1.Ưu tiên những bạn đã từng vận hành shop mới </p><p>2. Trình độ: Tốt nghiệp Thương mại điện tử, Quản trị kinh doanh, Marketing hoặc những</p><p>ngành nghề liên quan.</p><p>3. Có hơn 2 - 3 năm kinh nghiệm làm việc tại shopee, lazada, tiktok shop, tìm hiểu các chính sách</p><p>và quy định của nền tảng, có kinh nghiệm phong phú về việc quảng bá sản phẩm và vận hành</p><p>gian hàng.</p><p>4. Có kỹ năng giao tiếp tốt, tinh thần đồng đội, khả năng chịu áp lực tốt, ưu tiên sự sáng tạo</p><p>5. Có khả năng phân tích dữ liệu tổt, giỏi phân phối quảng cáo; Khám phá vấn đề từ số</p><p>liệu trên nền tảng và các sản phẩm cạnh tranh, làm rõ chiến lược vận hành tiếp theo, đề xuất</p><p>cải thiện sản phẩm theo xu hướng thị trường.</p><p>6. Tư duy sáng tạo, chủ động thu hút từ một số phương tiện truyền thông xã hội</p><p>(Facebook/YouTube/Tik Tok) đến cửa hàng.</p>',
//             no_sort: false,
//             remain_deadline_by_day: 28,
//             remain_deadline_by_hour: 675,
//             salary: '9 - 15 triệu',
//             score: 0,
//             short_cities: 'Hồ Chí Minh',
//             title: 'Nhân Viên Vận Hành Sàn Thương Mại Điện Tử',
//             updated_at_str: '1 giờ trước',
//             url: 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_LinkDetail',
//             urlTooltip:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_QuickView',
//             url_tooltip_apply:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_ButtonApplyFromQuickView',
//         },
//         {
//             address:
//                 '<div style="margin-bottom: 10px">- Hồ Chí Minh: 11 Nguyễn Huy Tưởng, Bình Thạnh  </div>',
//             apply_url: false,
//             cities: "<p style='text-align: left'>Hồ Chí Minh: Bình Thạnh</p>",
//             company: {
//                 logo_url:
//                     'https://www.topcv.vn/v4/image/normal-company/logo_default.png',
//                 name: 'CÔNG TY TNHH THƯƠNG MẠI AILINK',
//                 url: 'https://www.topcv.vn/cong-ty/cong-ty-tnhh-thuong-mai-ailink/170956.html',
//             },
//             company_short_description: '',
//             //deadline: '11/07/2024',
//             deadline: 'Còn 5 ngày',
//             employer_verified: false,
//             id: 1365848,
//             is_applied: false,
//             is_bg_featured: true,
//             is_diamond_employer: false,
//             is_featured: true,
//             is_highlight: false,
//             is_hot: false,
//             is_job_flash: false,
//             is_new: false,
//             is_paid_featured: true,
//             is_remote: false,
//             is_urgent: false,
//             is_vip_employer: false,
//             is_yellow_bg: 0,
//             job_benefit:
//                 '<p>1. Thưởng lương tháng 13, sinh nhật, hiếu hỉ...\n</p><p>2. Được đóng BHXH, BHYT, BHTN và các chế độ khác theo Luật quy định\n</p><p>3. Làm việc từ 9h00 – 17h00, từ thứ 2 đến thứ 7 hàng tuần.\n</p><p>4. Làm việc trong môi trường năng động, trẻ trung, chuyên nghiệp có nhiều cơ hội thăng \n</p><p>tiến.\n</p><ul><li>Được cơ hội đào tạo nâng cao kỹ năng trong và ngoài công ty.</li></ul>',
//             job_description:
//                 '<p>1. Phụ trách vận hành các sàn TMĐT của Công ty, duy trì và quản lý, đảm bảo cho tài khoản</p><p>không bị vị phạm quy tắc sàn;</p><p>2. Hoàn thành đăng sản phẩm, mô tả sản phẩm, tối ưu hóa từ khóa sản phẩm, lên kế hoạch</p><p>các chương trình khuyến mãi;</p><p>3. Luôn theo dõi và cập nhật các chính sách mới nhất của nền tảng, lập kế hoạch theo kịp</p><p>chính sách;</p><p>4. Phụ trách phân tích hiệu quả và theo dõi hoạt động trong và ngoài sàn;</p><p>5. Xây dựng chiến lược chuẩn bị hàng, thống kê và phân tích dữ liệu bán hàng và dữ liệu kho,</p><p>nâng cao tỷ lệ lưu chuyển của kho;</p><p>6. Thống kê dữ liệu bán hàng định kỳ, số liệu kho và đưa ra các điều chỉnh tương ứng, duy trì</p><p>tỷ lệ doanh thu tuần trong kho tốt.</p><p>7. Theo dõi và đánh giá hiệu suất của cửa hàng, đồng thời đề xuất và thực hiện các biện pháp tối ưu hóa để tăng cường doanh số bán hàng và sự hài lòng của khách hàng.</p><p>8Thực hiện các chiến lược quảng cáo và marketing để thu hút khách hàng mới và tăng tương tác của khách hàng hiện tại. </p><p>9. Phân tích thị trường, tìm kiếm sản phẩm kinh doanh tiềm năng, xây dựng hệ sinh thái sản phẩm</p><p>10. Có tinh thần học hỏi và tinh thần trách nhiệm cao.</p>',
//             job_exp: '3 năm',
//             job_requirement:
//                 '<p>1.Ưu tiên những bạn đã từng vận hành shop mới </p><p>2. Trình độ: Tốt nghiệp Thương mại điện tử, Quản trị kinh doanh, Marketing hoặc những</p><p>ngành nghề liên quan.</p><p>3. Có hơn 2 - 3 năm kinh nghiệm làm việc tại shopee, lazada, tiktok shop, tìm hiểu các chính sách</p><p>và quy định của nền tảng, có kinh nghiệm phong phú về việc quảng bá sản phẩm và vận hành</p><p>gian hàng.</p><p>4. Có kỹ năng giao tiếp tốt, tinh thần đồng đội, khả năng chịu áp lực tốt, ưu tiên sự sáng tạo</p><p>5. Có khả năng phân tích dữ liệu tổt, giỏi phân phối quảng cáo; Khám phá vấn đề từ số</p><p>liệu trên nền tảng và các sản phẩm cạnh tranh, làm rõ chiến lược vận hành tiếp theo, đề xuất</p><p>cải thiện sản phẩm theo xu hướng thị trường.</p><p>6. Tư duy sáng tạo, chủ động thu hút từ một số phương tiện truyền thông xã hội</p><p>(Facebook/YouTube/Tik Tok) đến cửa hàng.</p>',
//             no_sort: false,
//             remain_deadline_by_day: 28,
//             remain_deadline_by_hour: 675,
//             salary: '9 - 15 triệu',
//             score: 0,
//             short_cities: 'Hồ Chí Minh',
//             title: 'Nhân Viên Vận Hành Sàn Thương Mại Điện Tử',
//             updated_at_str: '1 giờ trước',
//             url: 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_LinkDetail',
//             urlTooltip:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_QuickView',
//             url_tooltip_apply:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_ButtonApplyFromQuickView',
//         },
//         {
//             address:
//                 '<div style="margin-bottom: 10px">- Hồ Chí Minh: 11 Nguyễn Huy Tưởng, Bình Thạnh  </div>',
//             apply_url: false,
//             cities: "<p style='text-align: left'>Hồ Chí Minh: Bình Thạnh</p>",
//             company: {
//                 logo_url:
//                     'https://www.topcv.vn/v4/image/normal-company/logo_default.png',
//                 name: 'CÔNG TY TNHH THƯƠNG MẠI AILINK',
//                 url: 'https://www.topcv.vn/cong-ty/cong-ty-tnhh-thuong-mai-ailink/170956.html',
//             },
//             company_short_description: '',
//             //deadline: '11/07/2024',
//             deadline: 'Còn 5 ngày',
//             employer_verified: false,
//             id: 1365848,
//             is_applied: false,
//             is_bg_featured: true,
//             is_diamond_employer: false,
//             is_featured: true,
//             is_highlight: false,
//             is_hot: false,
//             is_job_flash: false,
//             is_new: false,
//             is_paid_featured: true,
//             is_remote: false,
//             is_urgent: false,
//             is_vip_employer: false,
//             is_yellow_bg: 0,
//             job_benefit:
//                 '<p>1. Thưởng lương tháng 13, sinh nhật, hiếu hỉ...\n</p><p>2. Được đóng BHXH, BHYT, BHTN và các chế độ khác theo Luật quy định\n</p><p>3. Làm việc từ 9h00 – 17h00, từ thứ 2 đến thứ 7 hàng tuần.\n</p><p>4. Làm việc trong môi trường năng động, trẻ trung, chuyên nghiệp có nhiều cơ hội thăng \n</p><p>tiến.\n</p><ul><li>Được cơ hội đào tạo nâng cao kỹ năng trong và ngoài công ty.</li></ul>',
//             job_description:
//                 '<p>1. Phụ trách vận hành các sàn TMĐT của Công ty, duy trì và quản lý, đảm bảo cho tài khoản</p><p>không bị vị phạm quy tắc sàn;</p><p>2. Hoàn thành đăng sản phẩm, mô tả sản phẩm, tối ưu hóa từ khóa sản phẩm, lên kế hoạch</p><p>các chương trình khuyến mãi;</p><p>3. Luôn theo dõi và cập nhật các chính sách mới nhất của nền tảng, lập kế hoạch theo kịp</p><p>chính sách;</p><p>4. Phụ trách phân tích hiệu quả và theo dõi hoạt động trong và ngoài sàn;</p><p>5. Xây dựng chiến lược chuẩn bị hàng, thống kê và phân tích dữ liệu bán hàng và dữ liệu kho,</p><p>nâng cao tỷ lệ lưu chuyển của kho;</p><p>6. Thống kê dữ liệu bán hàng định kỳ, số liệu kho và đưa ra các điều chỉnh tương ứng, duy trì</p><p>tỷ lệ doanh thu tuần trong kho tốt.</p><p>7. Theo dõi và đánh giá hiệu suất của cửa hàng, đồng thời đề xuất và thực hiện các biện pháp tối ưu hóa để tăng cường doanh số bán hàng và sự hài lòng của khách hàng.</p><p>8Thực hiện các chiến lược quảng cáo và marketing để thu hút khách hàng mới và tăng tương tác của khách hàng hiện tại. </p><p>9. Phân tích thị trường, tìm kiếm sản phẩm kinh doanh tiềm năng, xây dựng hệ sinh thái sản phẩm</p><p>10. Có tinh thần học hỏi và tinh thần trách nhiệm cao.</p>',
//             job_exp: '3 năm',
//             job_requirement:
//                 '<p>1.Ưu tiên những bạn đã từng vận hành shop mới </p><p>2. Trình độ: Tốt nghiệp Thương mại điện tử, Quản trị kinh doanh, Marketing hoặc những</p><p>ngành nghề liên quan.</p><p>3. Có hơn 2 - 3 năm kinh nghiệm làm việc tại shopee, lazada, tiktok shop, tìm hiểu các chính sách</p><p>và quy định của nền tảng, có kinh nghiệm phong phú về việc quảng bá sản phẩm và vận hành</p><p>gian hàng.</p><p>4. Có kỹ năng giao tiếp tốt, tinh thần đồng đội, khả năng chịu áp lực tốt, ưu tiên sự sáng tạo</p><p>5. Có khả năng phân tích dữ liệu tổt, giỏi phân phối quảng cáo; Khám phá vấn đề từ số</p><p>liệu trên nền tảng và các sản phẩm cạnh tranh, làm rõ chiến lược vận hành tiếp theo, đề xuất</p><p>cải thiện sản phẩm theo xu hướng thị trường.</p><p>6. Tư duy sáng tạo, chủ động thu hút từ một số phương tiện truyền thông xã hội</p><p>(Facebook/YouTube/Tik Tok) đến cửa hàng.</p>',
//             no_sort: false,
//             remain_deadline_by_day: 28,
//             remain_deadline_by_hour: 675,
//             salary: '9 - 15 triệu',
//             score: 0,
//             short_cities: 'Hồ Chí Minh',
//             title: 'Nhân Viên Vận Hành Sàn Thương Mại Điện Tử',
//             updated_at_str: '1 giờ trước',
//             url: 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_LinkDetail',
//             urlTooltip:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_QuickView',
//             url_tooltip_apply:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_ButtonApplyFromQuickView',
//         },
//         {
//             address:
//                 '<div style="margin-bottom: 10px">- Hồ Chí Minh: 11 Nguyễn Huy Tưởng, Bình Thạnh  </div>',
//             apply_url: false,
//             cities: "<p style='text-align: left'>Hồ Chí Minh: Bình Thạnh</p>",
//             company: {
//                 logo_url:
//                     'https://www.topcv.vn/v4/image/normal-company/logo_default.png',
//                 name: 'CÔNG TY TNHH THƯƠNG MẠI AILINK',
//                 url: 'https://www.topcv.vn/cong-ty/cong-ty-tnhh-thuong-mai-ailink/170956.html',
//             },
//             company_short_description: '',
//             //deadline: '11/07/2024',
//             deadline: 'Còn 5 ngày',
//             employer_verified: false,
//             id: 1365848,
//             is_applied: false,
//             is_bg_featured: true,
//             is_diamond_employer: false,
//             is_featured: true,
//             is_highlight: false,
//             is_hot: false,
//             is_job_flash: false,
//             is_new: false,
//             is_paid_featured: true,
//             is_remote: false,
//             is_urgent: false,
//             is_vip_employer: false,
//             is_yellow_bg: 0,
//             job_benefit:
//                 '<p>1. Thưởng lương tháng 13, sinh nhật, hiếu hỉ...\n</p><p>2. Được đóng BHXH, BHYT, BHTN và các chế độ khác theo Luật quy định\n</p><p>3. Làm việc từ 9h00 – 17h00, từ thứ 2 đến thứ 7 hàng tuần.\n</p><p>4. Làm việc trong môi trường năng động, trẻ trung, chuyên nghiệp có nhiều cơ hội thăng \n</p><p>tiến.\n</p><ul><li>Được cơ hội đào tạo nâng cao kỹ năng trong và ngoài công ty.</li></ul>',
//             job_description:
//                 '<p>1. Phụ trách vận hành các sàn TMĐT của Công ty, duy trì và quản lý, đảm bảo cho tài khoản</p><p>không bị vị phạm quy tắc sàn;</p><p>2. Hoàn thành đăng sản phẩm, mô tả sản phẩm, tối ưu hóa từ khóa sản phẩm, lên kế hoạch</p><p>các chương trình khuyến mãi;</p><p>3. Luôn theo dõi và cập nhật các chính sách mới nhất của nền tảng, lập kế hoạch theo kịp</p><p>chính sách;</p><p>4. Phụ trách phân tích hiệu quả và theo dõi hoạt động trong và ngoài sàn;</p><p>5. Xây dựng chiến lược chuẩn bị hàng, thống kê và phân tích dữ liệu bán hàng và dữ liệu kho,</p><p>nâng cao tỷ lệ lưu chuyển của kho;</p><p>6. Thống kê dữ liệu bán hàng định kỳ, số liệu kho và đưa ra các điều chỉnh tương ứng, duy trì</p><p>tỷ lệ doanh thu tuần trong kho tốt.</p><p>7. Theo dõi và đánh giá hiệu suất của cửa hàng, đồng thời đề xuất và thực hiện các biện pháp tối ưu hóa để tăng cường doanh số bán hàng và sự hài lòng của khách hàng.</p><p>8Thực hiện các chiến lược quảng cáo và marketing để thu hút khách hàng mới và tăng tương tác của khách hàng hiện tại. </p><p>9. Phân tích thị trường, tìm kiếm sản phẩm kinh doanh tiềm năng, xây dựng hệ sinh thái sản phẩm</p><p>10. Có tinh thần học hỏi và tinh thần trách nhiệm cao.</p>',
//             job_exp: '3 năm',
//             job_requirement:
//                 '<p>1.Ưu tiên những bạn đã từng vận hành shop mới </p><p>2. Trình độ: Tốt nghiệp Thương mại điện tử, Quản trị kinh doanh, Marketing hoặc những</p><p>ngành nghề liên quan.</p><p>3. Có hơn 2 - 3 năm kinh nghiệm làm việc tại shopee, lazada, tiktok shop, tìm hiểu các chính sách</p><p>và quy định của nền tảng, có kinh nghiệm phong phú về việc quảng bá sản phẩm và vận hành</p><p>gian hàng.</p><p>4. Có kỹ năng giao tiếp tốt, tinh thần đồng đội, khả năng chịu áp lực tốt, ưu tiên sự sáng tạo</p><p>5. Có khả năng phân tích dữ liệu tổt, giỏi phân phối quảng cáo; Khám phá vấn đề từ số</p><p>liệu trên nền tảng và các sản phẩm cạnh tranh, làm rõ chiến lược vận hành tiếp theo, đề xuất</p><p>cải thiện sản phẩm theo xu hướng thị trường.</p><p>6. Tư duy sáng tạo, chủ động thu hút từ một số phương tiện truyền thông xã hội</p><p>(Facebook/YouTube/Tik Tok) đến cửa hàng.</p>',
//             no_sort: false,
//             remain_deadline_by_day: 28,
//             remain_deadline_by_hour: 675,
//             salary: '9 - 15 triệu',
//             score: 0,
//             short_cities: 'Hồ Chí Minh',
//             title: 'Nhân Viên Vận Hành Sàn Thương Mại Điện Tử',
//             updated_at_str: '1 giờ trước',
//             url: 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_LinkDetail',
//             urlTooltip:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_QuickView',
//             url_tooltip_apply:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_ButtonApplyFromQuickView',
//         },
//         {
//             address:
//                 '<div style="margin-bottom: 10px">- Hồ Chí Minh: 11 Nguyễn Huy Tưởng, Bình Thạnh  </div>',
//             apply_url: false,
//             cities: "<p style='text-align: left'>Hồ Chí Minh: Bình Thạnh</p>",
//             company: {
//                 logo_url:
//                     'https://www.topcv.vn/v4/image/normal-company/logo_default.png',
//                 name: 'CÔNG TY TNHH THƯƠNG MẠI AILINK',
//                 url: 'https://www.topcv.vn/cong-ty/cong-ty-tnhh-thuong-mai-ailink/170956.html',
//             },
//             company_short_description: '',
//             //deadline: '11/07/2024',
//             deadline: 'Còn 5 ngày',
//             employer_verified: false,
//             id: 1365848,
//             is_applied: false,
//             is_bg_featured: true,
//             is_diamond_employer: false,
//             is_featured: true,
//             is_highlight: false,
//             is_hot: false,
//             is_job_flash: false,
//             is_new: false,
//             is_paid_featured: true,
//             is_remote: false,
//             is_urgent: false,
//             is_vip_employer: false,
//             is_yellow_bg: 0,
//             job_benefit:
//                 '<p>1. Thưởng lương tháng 13, sinh nhật, hiếu hỉ...\n</p><p>2. Được đóng BHXH, BHYT, BHTN và các chế độ khác theo Luật quy định\n</p><p>3. Làm việc từ 9h00 – 17h00, từ thứ 2 đến thứ 7 hàng tuần.\n</p><p>4. Làm việc trong môi trường năng động, trẻ trung, chuyên nghiệp có nhiều cơ hội thăng \n</p><p>tiến.\n</p><ul><li>Được cơ hội đào tạo nâng cao kỹ năng trong và ngoài công ty.</li></ul>',
//             job_description:
//                 '<p>1. Phụ trách vận hành các sàn TMĐT của Công ty, duy trì và quản lý, đảm bảo cho tài khoản</p><p>không bị vị phạm quy tắc sàn;</p><p>2. Hoàn thành đăng sản phẩm, mô tả sản phẩm, tối ưu hóa từ khóa sản phẩm, lên kế hoạch</p><p>các chương trình khuyến mãi;</p><p>3. Luôn theo dõi và cập nhật các chính sách mới nhất của nền tảng, lập kế hoạch theo kịp</p><p>chính sách;</p><p>4. Phụ trách phân tích hiệu quả và theo dõi hoạt động trong và ngoài sàn;</p><p>5. Xây dựng chiến lược chuẩn bị hàng, thống kê và phân tích dữ liệu bán hàng và dữ liệu kho,</p><p>nâng cao tỷ lệ lưu chuyển của kho;</p><p>6. Thống kê dữ liệu bán hàng định kỳ, số liệu kho và đưa ra các điều chỉnh tương ứng, duy trì</p><p>tỷ lệ doanh thu tuần trong kho tốt.</p><p>7. Theo dõi và đánh giá hiệu suất của cửa hàng, đồng thời đề xuất và thực hiện các biện pháp tối ưu hóa để tăng cường doanh số bán hàng và sự hài lòng của khách hàng.</p><p>8Thực hiện các chiến lược quảng cáo và marketing để thu hút khách hàng mới và tăng tương tác của khách hàng hiện tại. </p><p>9. Phân tích thị trường, tìm kiếm sản phẩm kinh doanh tiềm năng, xây dựng hệ sinh thái sản phẩm</p><p>10. Có tinh thần học hỏi và tinh thần trách nhiệm cao.</p>',
//             job_exp: '3 năm',
//             job_requirement:
//                 '<p>1.Ưu tiên những bạn đã từng vận hành shop mới </p><p>2. Trình độ: Tốt nghiệp Thương mại điện tử, Quản trị kinh doanh, Marketing hoặc những</p><p>ngành nghề liên quan.</p><p>3. Có hơn 2 - 3 năm kinh nghiệm làm việc tại shopee, lazada, tiktok shop, tìm hiểu các chính sách</p><p>và quy định của nền tảng, có kinh nghiệm phong phú về việc quảng bá sản phẩm và vận hành</p><p>gian hàng.</p><p>4. Có kỹ năng giao tiếp tốt, tinh thần đồng đội, khả năng chịu áp lực tốt, ưu tiên sự sáng tạo</p><p>5. Có khả năng phân tích dữ liệu tổt, giỏi phân phối quảng cáo; Khám phá vấn đề từ số</p><p>liệu trên nền tảng và các sản phẩm cạnh tranh, làm rõ chiến lược vận hành tiếp theo, đề xuất</p><p>cải thiện sản phẩm theo xu hướng thị trường.</p><p>6. Tư duy sáng tạo, chủ động thu hút từ một số phương tiện truyền thông xã hội</p><p>(Facebook/YouTube/Tik Tok) đến cửa hàng.</p>',
//             no_sort: false,
//             remain_deadline_by_day: 28,
//             remain_deadline_by_hour: 675,
//             salary: '9 - 15 triệu',
//             score: 0,
//             short_cities: 'Hồ Chí Minh',
//             title: 'Nhân Viên Vận Hành Sàn Thương Mại Điện Tử',
//             updated_at_str: '1 giờ trước',
//             url: 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_LinkDetail',
//             urlTooltip:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_QuickView',
//             url_tooltip_apply:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_ButtonApplyFromQuickView',
//         },
//         {
//             address:
//                 '<div style="margin-bottom: 10px">- Hồ Chí Minh: 11 Nguyễn Huy Tưởng, Bình Thạnh  </div>',
//             apply_url: false,
//             cities: "<p style='text-align: left'>Hồ Chí Minh: Bình Thạnh</p>",
//             company: {
//                 logo_url:
//                     'https://www.topcv.vn/v4/image/normal-company/logo_default.png',
//                 name: 'CÔNG TY TNHH THƯƠNG MẠI AILINK',
//                 url: 'https://www.topcv.vn/cong-ty/cong-ty-tnhh-thuong-mai-ailink/170956.html',
//             },
//             company_short_description: '',
//             //deadline: '11/07/2024',
//             deadline: 'Còn 5 ngày',
//             employer_verified: false,
//             id: 1365848,
//             is_applied: false,
//             is_bg_featured: true,
//             is_diamond_employer: false,
//             is_featured: true,
//             is_highlight: false,
//             is_hot: false,
//             is_job_flash: false,
//             is_new: false,
//             is_paid_featured: true,
//             is_remote: false,
//             is_urgent: false,
//             is_vip_employer: false,
//             is_yellow_bg: 0,
//             job_benefit:
//                 '<p>1. Thưởng lương tháng 13, sinh nhật, hiếu hỉ...\n</p><p>2. Được đóng BHXH, BHYT, BHTN và các chế độ khác theo Luật quy định\n</p><p>3. Làm việc từ 9h00 – 17h00, từ thứ 2 đến thứ 7 hàng tuần.\n</p><p>4. Làm việc trong môi trường năng động, trẻ trung, chuyên nghiệp có nhiều cơ hội thăng \n</p><p>tiến.\n</p><ul><li>Được cơ hội đào tạo nâng cao kỹ năng trong và ngoài công ty.</li></ul>',
//             job_description:
//                 '<p>1. Phụ trách vận hành các sàn TMĐT của Công ty, duy trì và quản lý, đảm bảo cho tài khoản</p><p>không bị vị phạm quy tắc sàn;</p><p>2. Hoàn thành đăng sản phẩm, mô tả sản phẩm, tối ưu hóa từ khóa sản phẩm, lên kế hoạch</p><p>các chương trình khuyến mãi;</p><p>3. Luôn theo dõi và cập nhật các chính sách mới nhất của nền tảng, lập kế hoạch theo kịp</p><p>chính sách;</p><p>4. Phụ trách phân tích hiệu quả và theo dõi hoạt động trong và ngoài sàn;</p><p>5. Xây dựng chiến lược chuẩn bị hàng, thống kê và phân tích dữ liệu bán hàng và dữ liệu kho,</p><p>nâng cao tỷ lệ lưu chuyển của kho;</p><p>6. Thống kê dữ liệu bán hàng định kỳ, số liệu kho và đưa ra các điều chỉnh tương ứng, duy trì</p><p>tỷ lệ doanh thu tuần trong kho tốt.</p><p>7. Theo dõi và đánh giá hiệu suất của cửa hàng, đồng thời đề xuất và thực hiện các biện pháp tối ưu hóa để tăng cường doanh số bán hàng và sự hài lòng của khách hàng.</p><p>8Thực hiện các chiến lược quảng cáo và marketing để thu hút khách hàng mới và tăng tương tác của khách hàng hiện tại. </p><p>9. Phân tích thị trường, tìm kiếm sản phẩm kinh doanh tiềm năng, xây dựng hệ sinh thái sản phẩm</p><p>10. Có tinh thần học hỏi và tinh thần trách nhiệm cao.</p>',
//             job_exp: '3 năm',
//             job_requirement:
//                 '<p>1.Ưu tiên những bạn đã từng vận hành shop mới </p><p>2. Trình độ: Tốt nghiệp Thương mại điện tử, Quản trị kinh doanh, Marketing hoặc những</p><p>ngành nghề liên quan.</p><p>3. Có hơn 2 - 3 năm kinh nghiệm làm việc tại shopee, lazada, tiktok shop, tìm hiểu các chính sách</p><p>và quy định của nền tảng, có kinh nghiệm phong phú về việc quảng bá sản phẩm và vận hành</p><p>gian hàng.</p><p>4. Có kỹ năng giao tiếp tốt, tinh thần đồng đội, khả năng chịu áp lực tốt, ưu tiên sự sáng tạo</p><p>5. Có khả năng phân tích dữ liệu tổt, giỏi phân phối quảng cáo; Khám phá vấn đề từ số</p><p>liệu trên nền tảng và các sản phẩm cạnh tranh, làm rõ chiến lược vận hành tiếp theo, đề xuất</p><p>cải thiện sản phẩm theo xu hướng thị trường.</p><p>6. Tư duy sáng tạo, chủ động thu hút từ một số phương tiện truyền thông xã hội</p><p>(Facebook/YouTube/Tik Tok) đến cửa hàng.</p>',
//             no_sort: false,
//             remain_deadline_by_day: 28,
//             remain_deadline_by_hour: 675,
//             salary: '9 - 15 triệu',
//             score: 0,
//             short_cities: 'Hồ Chí Minh',
//             title: 'Nhân Viên Vận Hành Sàn Thương Mại Điện Tử',
//             updated_at_str: '1 giờ trước',
//             url: 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_LinkDetail',
//             urlTooltip:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_QuickView',
//             url_tooltip_apply:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_ButtonApplyFromQuickView',
//         },
//         {
//             address:
//                 '<div style="margin-bottom: 10px">- Hồ Chí Minh: 11 Nguyễn Huy Tưởng, Bình Thạnh  </div>',
//             apply_url: false,
//             cities: "<p style='text-align: left'>Hồ Chí Minh: Bình Thạnh</p>",
//             company: {
//                 logo_url:
//                     'https://www.topcv.vn/v4/image/normal-company/logo_default.png',
//                 name: 'CÔNG TY TNHH THƯƠNG MẠI AILINK',
//                 url: 'https://www.topcv.vn/cong-ty/cong-ty-tnhh-thuong-mai-ailink/170956.html',
//             },
//             company_short_description: '',
//             //deadline: '11/07/2024',
//             deadline: 'Còn 5 ngày',
//             employer_verified: false,
//             id: 1365848,
//             is_applied: false,
//             is_bg_featured: true,
//             is_diamond_employer: false,
//             is_featured: true,
//             is_highlight: false,
//             is_hot: false,
//             is_job_flash: false,
//             is_new: false,
//             is_paid_featured: true,
//             is_remote: false,
//             is_urgent: false,
//             is_vip_employer: false,
//             is_yellow_bg: 0,
//             job_benefit:
//                 '<p>1. Thưởng lương tháng 13, sinh nhật, hiếu hỉ...\n</p><p>2. Được đóng BHXH, BHYT, BHTN và các chế độ khác theo Luật quy định\n</p><p>3. Làm việc từ 9h00 – 17h00, từ thứ 2 đến thứ 7 hàng tuần.\n</p><p>4. Làm việc trong môi trường năng động, trẻ trung, chuyên nghiệp có nhiều cơ hội thăng \n</p><p>tiến.\n</p><ul><li>Được cơ hội đào tạo nâng cao kỹ năng trong và ngoài công ty.</li></ul>',
//             job_description:
//                 '<p>1. Phụ trách vận hành các sàn TMĐT của Công ty, duy trì và quản lý, đảm bảo cho tài khoản</p><p>không bị vị phạm quy tắc sàn;</p><p>2. Hoàn thành đăng sản phẩm, mô tả sản phẩm, tối ưu hóa từ khóa sản phẩm, lên kế hoạch</p><p>các chương trình khuyến mãi;</p><p>3. Luôn theo dõi và cập nhật các chính sách mới nhất của nền tảng, lập kế hoạch theo kịp</p><p>chính sách;</p><p>4. Phụ trách phân tích hiệu quả và theo dõi hoạt động trong và ngoài sàn;</p><p>5. Xây dựng chiến lược chuẩn bị hàng, thống kê và phân tích dữ liệu bán hàng và dữ liệu kho,</p><p>nâng cao tỷ lệ lưu chuyển của kho;</p><p>6. Thống kê dữ liệu bán hàng định kỳ, số liệu kho và đưa ra các điều chỉnh tương ứng, duy trì</p><p>tỷ lệ doanh thu tuần trong kho tốt.</p><p>7. Theo dõi và đánh giá hiệu suất của cửa hàng, đồng thời đề xuất và thực hiện các biện pháp tối ưu hóa để tăng cường doanh số bán hàng và sự hài lòng của khách hàng.</p><p>8Thực hiện các chiến lược quảng cáo và marketing để thu hút khách hàng mới và tăng tương tác của khách hàng hiện tại. </p><p>9. Phân tích thị trường, tìm kiếm sản phẩm kinh doanh tiềm năng, xây dựng hệ sinh thái sản phẩm</p><p>10. Có tinh thần học hỏi và tinh thần trách nhiệm cao.</p>',
//             job_exp: '3 năm',
//             job_requirement:
//                 '<p>1.Ưu tiên những bạn đã từng vận hành shop mới </p><p>2. Trình độ: Tốt nghiệp Thương mại điện tử, Quản trị kinh doanh, Marketing hoặc những</p><p>ngành nghề liên quan.</p><p>3. Có hơn 2 - 3 năm kinh nghiệm làm việc tại shopee, lazada, tiktok shop, tìm hiểu các chính sách</p><p>và quy định của nền tảng, có kinh nghiệm phong phú về việc quảng bá sản phẩm và vận hành</p><p>gian hàng.</p><p>4. Có kỹ năng giao tiếp tốt, tinh thần đồng đội, khả năng chịu áp lực tốt, ưu tiên sự sáng tạo</p><p>5. Có khả năng phân tích dữ liệu tổt, giỏi phân phối quảng cáo; Khám phá vấn đề từ số</p><p>liệu trên nền tảng và các sản phẩm cạnh tranh, làm rõ chiến lược vận hành tiếp theo, đề xuất</p><p>cải thiện sản phẩm theo xu hướng thị trường.</p><p>6. Tư duy sáng tạo, chủ động thu hút từ một số phương tiện truyền thông xã hội</p><p>(Facebook/YouTube/Tik Tok) đến cửa hàng.</p>',
//             no_sort: false,
//             remain_deadline_by_day: 28,
//             remain_deadline_by_hour: 675,
//             salary: '9 - 15 triệu',
//             score: 0,
//             short_cities: 'Hồ Chí Minh',
//             title: 'Nhân Viên Vận Hành Sàn Thương Mại Điện Tử',
//             updated_at_str: '1 giờ trước',
//             url: 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_LinkDetail',
//             urlTooltip:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_QuickView',
//             url_tooltip_apply:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_ButtonApplyFromQuickView',
//         },
//         {
//             address:
//                 '<div style="margin-bottom: 10px">- Hồ Chí Minh: 11 Nguyễn Huy Tưởng, Bình Thạnh  </div>',
//             apply_url: false,
//             cities: "<p style='text-align: left'>Hồ Chí Minh: Bình Thạnh</p>",
//             company: {
//                 logo_url:
//                     'https://www.topcv.vn/v4/image/normal-company/logo_default.png',
//                 name: 'CÔNG TY TNHH THƯƠNG MẠI AILINK',
//                 url: 'https://www.topcv.vn/cong-ty/cong-ty-tnhh-thuong-mai-ailink/170956.html',
//             },
//             company_short_description: '',
//             //deadline: '11/07/2024',
//             deadline: 'Còn 5 ngày',
//             employer_verified: false,
//             id: 1365848,
//             is_applied: false,
//             is_bg_featured: true,
//             is_diamond_employer: false,
//             is_featured: true,
//             is_highlight: false,
//             is_hot: false,
//             is_job_flash: false,
//             is_new: false,
//             is_paid_featured: true,
//             is_remote: false,
//             is_urgent: false,
//             is_vip_employer: false,
//             is_yellow_bg: 0,
//             job_benefit:
//                 '<p>1. Thưởng lương tháng 13, sinh nhật, hiếu hỉ...\n</p><p>2. Được đóng BHXH, BHYT, BHTN và các chế độ khác theo Luật quy định\n</p><p>3. Làm việc từ 9h00 – 17h00, từ thứ 2 đến thứ 7 hàng tuần.\n</p><p>4. Làm việc trong môi trường năng động, trẻ trung, chuyên nghiệp có nhiều cơ hội thăng \n</p><p>tiến.\n</p><ul><li>Được cơ hội đào tạo nâng cao kỹ năng trong và ngoài công ty.</li></ul>',
//             job_description:
//                 '<p>1. Phụ trách vận hành các sàn TMĐT của Công ty, duy trì và quản lý, đảm bảo cho tài khoản</p><p>không bị vị phạm quy tắc sàn;</p><p>2. Hoàn thành đăng sản phẩm, mô tả sản phẩm, tối ưu hóa từ khóa sản phẩm, lên kế hoạch</p><p>các chương trình khuyến mãi;</p><p>3. Luôn theo dõi và cập nhật các chính sách mới nhất của nền tảng, lập kế hoạch theo kịp</p><p>chính sách;</p><p>4. Phụ trách phân tích hiệu quả và theo dõi hoạt động trong và ngoài sàn;</p><p>5. Xây dựng chiến lược chuẩn bị hàng, thống kê và phân tích dữ liệu bán hàng và dữ liệu kho,</p><p>nâng cao tỷ lệ lưu chuyển của kho;</p><p>6. Thống kê dữ liệu bán hàng định kỳ, số liệu kho và đưa ra các điều chỉnh tương ứng, duy trì</p><p>tỷ lệ doanh thu tuần trong kho tốt.</p><p>7. Theo dõi và đánh giá hiệu suất của cửa hàng, đồng thời đề xuất và thực hiện các biện pháp tối ưu hóa để tăng cường doanh số bán hàng và sự hài lòng của khách hàng.</p><p>8Thực hiện các chiến lược quảng cáo và marketing để thu hút khách hàng mới và tăng tương tác của khách hàng hiện tại. </p><p>9. Phân tích thị trường, tìm kiếm sản phẩm kinh doanh tiềm năng, xây dựng hệ sinh thái sản phẩm</p><p>10. Có tinh thần học hỏi và tinh thần trách nhiệm cao.</p>',
//             job_exp: '3 năm',
//             job_requirement:
//                 '<p>1.Ưu tiên những bạn đã từng vận hành shop mới </p><p>2. Trình độ: Tốt nghiệp Thương mại điện tử, Quản trị kinh doanh, Marketing hoặc những</p><p>ngành nghề liên quan.</p><p>3. Có hơn 2 - 3 năm kinh nghiệm làm việc tại shopee, lazada, tiktok shop, tìm hiểu các chính sách</p><p>và quy định của nền tảng, có kinh nghiệm phong phú về việc quảng bá sản phẩm và vận hành</p><p>gian hàng.</p><p>4. Có kỹ năng giao tiếp tốt, tinh thần đồng đội, khả năng chịu áp lực tốt, ưu tiên sự sáng tạo</p><p>5. Có khả năng phân tích dữ liệu tổt, giỏi phân phối quảng cáo; Khám phá vấn đề từ số</p><p>liệu trên nền tảng và các sản phẩm cạnh tranh, làm rõ chiến lược vận hành tiếp theo, đề xuất</p><p>cải thiện sản phẩm theo xu hướng thị trường.</p><p>6. Tư duy sáng tạo, chủ động thu hút từ một số phương tiện truyền thông xã hội</p><p>(Facebook/YouTube/Tik Tok) đến cửa hàng.</p>',
//             no_sort: false,
//             remain_deadline_by_day: 28,
//             remain_deadline_by_hour: 675,
//             salary: '9 - 15 triệu',
//             score: 0,
//             short_cities: 'Hồ Chí Minh',
//             title: 'Nhân Viên Vận Hành Sàn Thương Mại Điện Tử',
//             updated_at_str: '1 giờ trước',
//             url: 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_LinkDetail',
//             urlTooltip:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_QuickView',
//             url_tooltip_apply:
//                 'https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-thuong-mai-dien-tu/1365848.html?ta_source=BoxFeatureJob_ButtonApplyFromQuickView',
//         },
//     ],
// };
