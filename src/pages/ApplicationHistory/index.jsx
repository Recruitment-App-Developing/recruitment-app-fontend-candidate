import { useEffect, useState } from 'react';
import ApplicationItem from './ApplicationItem';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Pagination,
    Select,
} from '@mui/material';
import { fetchApplicationHistory } from '~/services/applicationService';

const statusDropdown = [
    {
        value: 'NEW',
        title: 'Mới ứng tuyển',
    },
    {
        value: 'VIEWED',
        title: 'Đã xem',
    },
    {
        value: 'INTERVIEW_APPOINTMENT',
        title: 'Hẹn phỏng vấn',
    },
    {
        value: 'CONTACT_ALLOW',
        title: 'Cho phép liên hệ',
    },
    {
        value: 'SKIP',
        title: 'Bỏ qua',
    },
];

export default function ApplcationHistory() {
    const [applicationList, setApplicationList] = useState([]);
    const [status, setStatus] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        fetchApplicationHistory(status, currentPage - 1).then((data) => {
            setApplicationList(data.data);
            setTotalPage(data.meta.totalPages);
        });
    }, [currentPage, status]);

    return (
        <div className="mt-5 flex w-full flex-col items-center justify-center">
            <div className="flex w-[1115px] justify-center gap-4">
                <div
                    className="w-full items-center rounded-xl bg-white p-4
                        shadow-[-1px_1px_6px_rgba(0,0,0,0.05)]"
                >
                    <div className="mb-4 flex items-center justify-between">
                        <h1 className="text-2xl font-bold">
                            Việc làm đã ứng tuyển
                        </h1>
                        <FormControl sx={{ width: '200px' }} size="small">
                            <InputLabel id="filter-status-label">
                                Trạng thái
                            </InputLabel>
                            <Select
                                labelId="filter-status-label"
                                label="Trạng thái"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <MenuItem value="all">
                                    <em>Tất cả</em>
                                </MenuItem>
                                {statusDropdown.map((item, index) => (
                                    <MenuItem key={index} value={item.value}>
                                        {item.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    {applicationList.length > 0 ? (
                        <div className="">
                            <div>
                                {applicationList.map((item) => (
                                    <ApplicationItem
                                        key={item.jobInfor.id}
                                        data={item}
                                    />
                                ))}
                            </div>
                            <Pagination
                                className="flex-center mt-4"
                                onChange={(_e, p) => {
                                    setCurrentPage(p);
                                }}
                                page={currentPage}
                                count={totalPage}
                                variant="outlined"
                                color="primary"
                            />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center">
                            <img
                                className="my-5"
                                src="https://static.topcv.vn/v4/image/history-apply/empty.png"
                                alt=""
                            />
                            <span className="text-xl font-medium">
                                Bạn chưa ứng tuyển công việc nào!
                            </span>
                        </div>
                    )}
                </div>
                <div className="flex h-fit w-[400px] shadow-[-1px_1px_6px_rgba(0,0,0,0.05)]">
                    <img
                        className="rounded-lg"
                        src="https://res.cloudinary.com/dtcokd0bb/image/upload/v1732626449/TopCV/Default/bkpa4djmuynxpix5eemz.webp"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
