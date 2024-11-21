import clsx from 'clsx';

import BoxBodyItem from './BoxBodyItem';

function BoxBody({ className, data }) {
    return (
        <div className={clsx(className)}>
            <BoxBodyItem title="Mô tả công việc" text={data?.jobDescript} />
            <BoxBodyItem title="Yêu cầu ứng viên" text={data?.jobRequirement} />
            <BoxBodyItem title="Quyền lợi" text={data?.jobBenefit} />
            <BoxBodyItem title="Địa chỉ" text={data?.address?.join('<br />')} />
        </div>
    );
}

// const ITEM = {
//     address:
//         '<div style="margin-bottom: 10px">- Hồ Chí Minh: 11 Nguyễn Huy Tưởng, Bình Thạnh  </div>',
//     job_benefit:
//         '<p>1. Thưởng lương tháng 13, sinh nhật, hiếu hỉ...\n</p><p>2. Được đóng BHXH, BHYT, BHTN và các chế độ khác theo Luật quy định\n</p><p>3. Làm việc từ 9h00 – 17h00, từ thứ 2 đến thứ 7 hàng tuần.\n</p><p>4. Làm việc trong môi trường năng động, trẻ trung, chuyên nghiệp có nhiều cơ hội thăng \n</p><p>tiến.\n</p><ul><li>Được cơ hội đào tạo nâng cao kỹ năng trong và ngoài công ty.</li></ul>',
//     job_requirement:
//         '<p>1.Ưu tiên những bạn đã từng vận hành shop mới </p><p>2. Trình độ: Tốt nghiệp Thương mại điện tử, Quản trị kinh doanh, Marketing hoặc những</p><p>ngành nghề liên quan.</p><p>3. Có hơn 2 - 3 năm kinh nghiệm làm việc tại shopee, lazada, tiktok shop, tìm hiểu các chính sách</p><p>và quy định của nền tảng, có kinh nghiệm phong phú về việc quảng bá sản phẩm và vận hành</p><p>gian hàng.</p><p>4. Có kỹ năng giao tiếp tốt, tinh thần đồng đội, khả năng chịu áp lực tốt, ưu tiên sự sáng tạo</p><p>5. Có khả năng phân tích dữ liệu tổt, giỏi phân phối quảng cáo; Khám phá vấn đề từ số</p><p>liệu trên nền tảng và các sản phẩm cạnh tranh, làm rõ chiến lược vận hành tiếp theo, đề xuất</p><p>cải thiện sản phẩm theo xu hướng thị trường.</p><p>6. Tư duy sáng tạo, chủ động thu hút từ một số phương tiện truyền thông xã hội</p><p>(Facebook/YouTube/Tik Tok) đến cửa hàng.</p>',
//     job_description:
//         '<p>1. Phụ trách vận hành các sàn TMĐT của Công ty, duy trì và quản lý, đảm bảo cho tài khoản</p><p>không bị vị phạm quy tắc sàn;</p><các>2. Hoàn thành đăng sản phẩm, mô tả sản phẩm, tối ưu hóa từ khóa sản phẩm, lên kế hoạch các chương trình khuyến mãi;</p><p>3. Luôn theo dõi và cập nhật các chính sách mới nhất của nền tảng, lập kế hoạch theo kịp</p><p>chính sách;</p><p>4. Phụ trách phân tích hiệu quả và theo dõi hoạt động trong và ngoài sàn;</p><p>5. Xây dựng chiến lược chuẩn bị hàng, thống kê và phân tích dữ liệu bán hàng và dữ liệu kho,</p><p>nâng cao tỷ lệ lưu chuyển của kho;</p><p>6. Thống kê dữ liệu bán hàng định kỳ, số liệu kho và đưa ra các điều chỉnh tương ứng, duy trì</p><p>tỷ lệ doanh thu tuần trong kho tốt.</p><p>7. Theo dõi và đánh giá hiệu suất của cửa hàng, đồng thời đề xuất và thực hiện các biện pháp tối ưu hóa để tăng cường doanh số bán hàng và sự hài lòng của khách hàng.</p><p>8Thực hiện các chiến lược quảng cáo và marketing để thu hút khách hàng mới và tăng tương tác của khách hàng hiện tại. </p><p>9. Phân tích thị trường, tìm kiếm sản phẩm kinh doanh tiềm năng, xây dựng hệ sinh thái sản phẩm</p><p>10. Có tinh thần học hỏi và tinh thần trách nhiệm cao.</p>',
// };

export default BoxBody;
