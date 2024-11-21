import { Fragment } from 'react';

import { ReportBox } from '../Box';

function ToppyAI() {
    return (
        <div className="flex h-[587px] w-[716px] flex-col rounded-lg bg-[#1c5744]">
            <div className="flex items-center justify-start bg-red-300 pb-5 pl-6 pr-6 pt-5">
                <div
                    style={{
                        background: 'linear-gradient(90deg, #00b14f, #00e664)',
                    }}
                    className="mr-[10px] h-7 w-[6px]"
                ></div>
                <span className="text-xl font-bold leading-7 tracking-[-0.2px] text-white">
                    Phân tích mức độ phù hợp của bạn với công việc
                </span>
            </div>
            <div className="flex flex-col items-center gap-4 pb-1 pl-4 pr-4 pt-1">
                <ReportBox type="warning">{childrenReport}</ReportBox>
            </div>
        </div>
    );
}

export default ToppyAI;

const childrenReport = (
    <Fragment>
        <div className="flex items-start gap-[2px]">
            <div>
                Toppy AI chưa thể đưa ra đánh giá vì chưa có đủ hiểu biết về{' '}
                <span class="font-bold">Vị trí công việc, Kỹ năng</span> của
                bạn.
            </div>
        </div>
        <div>
            <div>
                Vui lòng{' '}
                <a
                    href="https://www.topcv.vn/quan-ly-cv"
                    className="cursor-pointer font-normal text-[#0f62fe]"
                    type="button"
                >
                    Cập nhật CV
                </a>{' '}
                để giúp mình hiểu thêm và đánh giá giúp bạn nhé.
            </div>
        </div>
        <div>
            <div>
                Lưu ý: Toppy AI có thể cần 1 - 2 giờ để xử lý các dữ liệu mới từ
                bạn.
            </div>
        </div>
    </Fragment>
);
