import {
    faAlignLeft,
    faBriefcase,
    faFolderClosed,
    faGlassCheers,
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Button,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material';
import FieldCard from './FieldCard';
import { industryData } from '~/constants/IndustryData';
import { MultiAutocomplete } from '~/components/MultiSelect';
import { workMethodData } from '~/constants/WorkMethodData';
import { genderData } from '~/constants/GenderData';
import { rankData } from '~/constants/RankData';
import { experienceData } from '~/constants/ExperienceData';
import { moneyTypeData } from '~/constants/MoneyTypeData';
import { salaryTypeData } from '~/constants/SalaryTypeData';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { clsx } from 'clsx';
import {
    DateTimePicker,
    DesktopDateTimePicker,
    StaticDateTimePicker,
} from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { addAJob } from '~/services/jobService';
import { toast } from 'react-toastify';
import AddressCom from './components/Address/AddressCom';
import AddressProvider from './components/Address/AddressContext';
import AddJobFirstForm from './AddJobFirstForm';
import { formatDateTime } from '~/utils/dateFormat';
import ImageItem from './components/ImageItem';
import { base64Converter } from '~/utils/base64Converter';

export function AddAJob() {
    const [job, setJob] = useState({
        name: '',
        addressList: [],
        jobPosition: '',
        numberOfVacancy: '',
        workMethod: '',
        sexRequired: '',
        salary: '',
        jobExp: '',
        applicationDueTime: new Date(),
        jobBenefit: '',
        jobDescript: '',
        jobRequirement: '',
        addApplicationInfor: '',
        isActive: true,
        applicationMethod: 'ONLINE',
        imageList: [],
        mainIndustry: '',
        subIndustries: [],
    });

    const handleSubmit = () => {
        const newJob = {
            ...job,
            applicationDueTime: formatDateTime(job.applicationDueTime),
        };
        addAJob(newJob).then((data) => {
            toast.success(data.message);
            setJob({
                name: '',
                jobPosition: '',
                numberOfVacancy: '',
                workMethod: '',
                sexRequired: '',
                salary: '',
                jobExp: '',
                applicationDueTime: new Date(),
                jobBenefit: '',
                jobDescript: '',
                jobRequirement: '',
                addApplicationInfor: '',
                isActive: true,
                applicationMethod: 'ONLINE',
                imageList: [],
                mainIndustry: '',
                subIndustries: [],
            });
        });
    };

    const [src, setSrc] = useState();
    const [srcList, setSrcList] = useState([]);

    const handleUpload = (e) => {
        console.log('Files: ', e.target.files);

        const files = e.target.files;

        const temp = Array.from(files).map(async (item) => {
            return await base64Converter(item);
        });
        Promise.all(temp).then((base64Files) => {
            setSrcList(base64Files);
        });
        // setSrcList(temp);
    };

    console.log('SrcList', srcList);

    return (
        <div className="h-full w-full flex-col items-center">
            <ul className="flex-start gap-10 bg-white py-3">
                <li>1.Nội dung đăng tuyển</li>
                <li>2. Hình thức hiển thị</li>
                <li>3. Test đầu vào</li>
            </ul>
            <AddressProvider>
                <AddJobFirstForm job={job} setJob={setJob} />
            </AddressProvider>
            {/* <ImageItem src={src} onChange={setSrc} /> */}
            <input type="file" multiple onChange={handleUpload} />
            <Button onClick={handleSubmit}>Thêm tin tuyển dụng</Button>
        </div>
    );
}
