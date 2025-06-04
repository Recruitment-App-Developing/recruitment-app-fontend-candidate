import { faClose, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, DialogContent, Radio, RadioGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GeneralRadio } from '~/components/RadioButton';
import BriefCvList from './BriefCvList';
import clsx from 'clsx';
import { fetchCvList } from '~/services/cvService';
import { addApplication } from '~/services/applicationService';
import { toast } from 'react-toastify';

export default function ApplyModal({ jobId, jobName, open, onClose }) {
    const classNameRadioBox = 'px-[16px]';

    const navigate = useNavigate();
    const [cvList, setCvList] = useState([]);

    const [applicationInfor, setApplicationInfor] = useState({
        jobId: jobId,
        cvId: null,
    });

    const [selected, setSelected] = useState('LASTEST_CV');

    useEffect(() => {
        if (selected === 'MY_CV_LIST') {
            fetchCvList().then((data) => setCvList(data.data.data));
        }
    }, [selected]);

    const handleSubmit = () => {
        addApplication(applicationInfor).then((data) => {
            toast.success(data.message);
            navigate(0);
        });
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="responsive-dialog-title"
            maxWidth="650px"
            PaperProps={{
                style: {
                    maxHeight: '650px',
                },
            }}
        >
            <div className="flex w-[650px] justify-between p-4 shadow-md">
                <h2 className="text-xl font-semibold">
                    Ứng tuyển <span className="text-success">{jobName}</span>
                </h2>
                <button
                    onClick={onClose}
                    className="flex-center h-8 w-8 rounded-full bg-gray-300 p-2 text-xl text-gray-600
                        hover:bg-success/15 hover:text-success"
                >
                    <FontAwesomeIcon icon={faClose} />
                </button>
            </div>
            <div className="space-y-2 overflow-y-auto p-6">
                <div className="flex gap-3 text-xl">
                    <div className="flex-center">
                        <FontAwesomeIcon
                            className="text-success"
                            icon={faFolderPlus}
                        />
                    </div>
                    <h2>Chọn CV để ứng tuyển</h2>
                </div>
                <RadioGroup className="space-y-2">
                    <div
                        className={clsx(
                            classNameRadioBox,
                            `flex justify-between rounded-lg border-2 border-solid border-green-500 pr-4
                            text-base`,
                        )}
                    >
                        <div className="flex-center gap-1">
                            <div className="m-0">
                                <Radio
                                    checked={selected === 'LASTEST_CV'}
                                    value="LASTEST_CV"
                                    onChange={() => setSelected('LASTEST_CV')}
                                    sx={{
                                        color: 'gray',
                                        '&.Mui-checked': {
                                            color: 'green',
                                        },
                                    }}
                                />
                            </div>
                            <h3 className="flex-center m-0 font-semibold">
                                CV ứng tuyển gần nhất:
                            </h3>
                        </div>
                        <Link className="flex-center font-semibold text-success">
                            Xem
                        </Link>
                    </div>
                    <div
                        className={clsx(
                            classNameRadioBox,
                            `flex flex-col justify-between rounded-lg border-2 border-solid border-green-500
                            text-base`,
                        )}
                    >
                        <div className="flex flex-row items-center gap-1">
                            <div className="">
                                <GeneralRadio
                                    selected={selected === 'MY_CV_LIST'}
                                    value="MY_CV_LIST"
                                    onChange={() => setSelected('MY_CV_LIST')}
                                />
                            </div>
                            <h3 className="flex-center m-0 font-semibold">
                                Chọn CV khác trong thư viện CV của tôi
                            </h3>
                        </div>
                        {selected === 'MY_CV_LIST' && (
                            <BriefCvList
                                className="ml-3"
                                jobId={jobId}
                                cvList={cvList}
                                applicationInfor={applicationInfor}
                                setApplicationInfor={setApplicationInfor}
                            />
                        )}
                    </div>
                </RadioGroup>
            </div>
            <div className="flex justify-between gap-5 px-6 py-4">
                <button
                    className="rounded-md bg-[#f2f4f5] px-4 py-2"
                    onClick={onClose}
                >
                    Huỷ
                </button>
                <button
                    onClick={handleSubmit}
                    className="w-full rounded-md bg-success py-2 text-white"
                >
                    Nộp hồ sơ ứng tuyển
                </button>
            </div>
        </Dialog>
    );
}
