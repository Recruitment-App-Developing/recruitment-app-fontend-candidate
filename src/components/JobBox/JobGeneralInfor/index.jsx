import {
    BadgetIcon,
    DoublePeopleIcon24,
    ExperienceIcon,
    SinglePeopleIcon,
    WorkMethodIcon,
} from '~/components/Icon';
import IconJobDetailInfor from '../JobDetailTitleBox/IconJobDetailInfor';
import { rankData } from '~/constants/RankData';
import { workMethodData } from '~/constants/WorkMethodData';
import { genderData } from '~/constants/GenderData';

function JobGeneralInfor({ data }) {
    return (
        <div className="flex h-fit w-full flex-col gap-5 rounded-lg bg-white p-5">
            <h2 className="color-[#212f3f] text-xl font-bold leading-7 tracking-[-0.2px]">
                Thông tin chung
            </h2>
            <IconJobDetailInfor
                icon={<BadgetIcon />}
                title="Cấp bậc"
                value={
                    rankData.find((item) => item.id === data.jobPosition).name
                }
            />
            <IconJobDetailInfor
                icon={<ExperienceIcon />}
                title="Kinh nghiệm"
                value={data.jobExp}
            />
            <IconJobDetailInfor
                icon={
                    <DoublePeopleIcon24 width={24} height={24} fill="white" />
                }
                title="Số lượng tuyển"
                value={data.numberOfVacancy + ' người'}
            />
            <IconJobDetailInfor
                icon={<WorkMethodIcon />}
                title="Hình thức làm việc"
                value={
                    workMethodData.find((item) => item.id === data.workMethod)
                        .name
                }
            />
            <IconJobDetailInfor
                icon={<SinglePeopleIcon />}
                title="Giới tính"
                value={
                    genderData.find((item) => item.id === data.sexRequired).name
                }
            />
        </div>
    );
}

export default JobGeneralInfor;
