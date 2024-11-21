import InputTextIcon from '~/components/InputTextIcon';
import styles from './detail-company.module.scss';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import GreenButton from '~/components/Button/GreenButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { JobDefaultBox } from '~/components/JobBox';
import { fetchFindJobByCompany } from '~/services/jobService';
import { cn } from '~/lib/utils';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material';
import { fetchListProvince } from '~/services/addressService';

export default function CompanyJobList({ companyId }) {
    const [jobList, setJobList] = useState([]);
    const [name, setName] = useState();
    const [address, setAddress] = useState('all');
    const [province, setProvince] = useState();

    useEffect(() => {
        fetchListProvince().then((data) => setProvince(data.data));
    }, []);

    useEffect(() => {
        fetchFindJobByCompany(companyId).then((data) => setJobList(data.data));
    }, []);

    const handleFind = () => {
        fetchFindJobByCompany(companyId, name, address).then((data) =>
            setJobList(data.data),
        );
    };

    return (
        <section className={cn(styles['box-infor'], 'flex flex-col gap-3')}>
            <h3 className={styles.title}>Tuyển dụng</h3>
            <div className="flex w-full items-center justify-center gap-3 px-3">
                <TextField
                    size="small"
                    fullWidth
                    label="Nhập tên công ty"
                    onChange={(e) => setName(e.target.value)}
                />
                <div className="w-[200px]">
                    <FormControl fullWidth>
                        <InputLabel id="find-job-label">
                            Địa điểm làm việc
                        </InputLabel>
                        <Select
                            size="small"
                            labelId="find-job-label"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            label="Địa điểm làm việc"
                        >
                            <MenuItem value="all">
                                Tất cả tỉnh/thành phố
                            </MenuItem>
                            {province?.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <GreenButton onClick={handleFind} content="Tìm kiếm" />
            </div>
            <div className="px-3">
                {jobList?.map((item) => (
                    <JobDefaultBox key={item.id} data={item} />
                ))}
            </div>
        </section>
    );
}
