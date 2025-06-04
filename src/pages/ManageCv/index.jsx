import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CvItem from './CvItem';
import { Avatar, Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import UploadCvModel from '~/components/Modal/UploadCvModal';
import { fetchCvList } from '~/services/cvService';

export default function ManageCvPage() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    const [isOpen, setIsOpen] = useState(false);
    const [cvList, setCvList] = useState();
    const [updateChange, setUpdateChange] = useState(false);

    useEffect(() => {
        fetchCvList(currentPage).then((data) => {
            setCvList(data.data.data);
            // setCurrentPage(data.data.meta.currentPage);
            setTotalPage(data.data.meta.totalPages);
        });
    }, [currentPage, isOpen, updateChange]);

    return (
        <div className="mt-6 flex gap-5">
            <div className="mb-4 w-[700px] rounded-md bg-white px-6 pb-2 pt-6">
                <div className="mb-3 flex items-center justify-between">
                    <h1 className="text-[19px] font-bold leading-6 text-black">
                        Danh sách CV
                    </h1>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center justify-center gap-3 rounded-[32px] bg-success px-4 py-[11px]
                            text-white"
                    >
                        <FontAwesomeIcon icon={faUpload} />
                        <span>Tải CV lên</span>
                    </button>
                    <UploadCvModel
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                    />
                </div>
                {cvList ? (
                    <div>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                            {cvList?.map((item) => (
                                <CvItem
                                    key={item.id}
                                    data={item}
                                    setUpdateChange={() =>
                                        setUpdateChange(!updateChange)
                                    }
                                />
                            ))}
                        </div>
                        <Pagination
                            className="flex-center"
                            onChange={(_e, p) => {
                                setCurrentPage(p - 1);
                            }}
                            page={currentPage + 1}
                            count={totalPage}
                            variant="outlined"
                            color="primary"
                        />
                    </div>
                ) : (
                    <div className="mt-5 flex w-full flex-col items-center justify-center">
                        <img
                            className="align-middle"
                            src="https://static.topcv.vn/v4/image/cv-manager/no-cv-upload.png"
                            alt=""
                        />
                        <p className="mt-5">Bạn chưa tải lên CV nào</p>
                    </div>
                )}
            </div>
            <div className="h-fit w-[250px] rounded-lg bg-white px-5 pb-4 pt-5">
                <div className="flex flex-col items-center justify-center">
                    <Avatar
                        className="mb-6"
                        sx={{ width: '83px', height: '83px' }}
                        src={user?.avatar ? user?.avatar : ''}
                    />
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm font-normal leading-6 text-[#212f3f]">
                            Chào bạn trở lại,
                        </p>
                        <h4 className="line-clamp-2 overflow-hidden truncate text-xl font-bold text-[#212f3f]">
                            {user?.fullName ? user?.fullName : user?.username}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

const data = [
    {
        id: '3d576f84-1e32-4ccf-9f93-a89b1078718c',
        name: 'Java_Intern_CV',
        cvLink: 'http://res.cloudinary.com/dtcokd0bb/image/upload/v1727627080/TopCV/Cv/cvmk9mepxhhvcjvqchy0.jpg',
        cvType: 'UPLOAD',
        lastUpdated: null,
        whenCreated: '23:24 29-09-2024',
    },
    {
        id: '6d9d6dc7-7a2f-485c-8c48-c628210c5c09',
        name: 'NodeJs_Fresher_CV',
        cvLink: 'http://res.cloudinary.com/dtcokd0bb/image/upload/v1727627225/TopCV/Cv/jslyrpu5bl0gjare6qy1.jpg',
        cvType: 'ONLINE',
        lastUpdated: null,
        whenCreated: '23:27 29-09-2024',
    },
    {
        id: 'b2f3a42c-cec1-42cf-b884-746a40da40e8',
        name: 'ReactJs_CV',
        cvLink: 'http://res.cloudinary.com/dtcokd0bb/image/upload/v1727627229/TopCV/Cv/h94orheazeth5v7mqumm.jpg',
        cvType: 'ONLINE',
        lastUpdated: null,
        whenCreated: '23:27 29-09-2024',
    },
    {
        id: 'b4e4cca4-715c-4138-ae0a-8661d02c5930',
        name: 'Back_end_CV',
        cvLink: 'http://res.cloudinary.com/dtcokd0bb/image/upload/v1727627232/TopCV/Cv/csifsj7xum0fjy1paabg.jpg',
        cvType: 'UPLOAD',
        lastUpdated: null,
        whenCreated: '23:27 29-09-2024',
    },
    {
        id: 'f32a7ed2-862a-4096-a17c-cef804ad64c1',
        name: 'Font_end_CV',
        cvLink: 'http://res.cloudinary.com/dtcokd0bb/image/upload/v1726804335/TopCV/Cv/ob844lktsrsryk6ls5cn.jpg',
        cvType: 'ONLINE',
        lastUpdated: null,
        whenCreated: '10:52 20-09-2024',
    },
];
