import { Dialog, TextField } from '@mui/material';
import ImageItem from '../ImageItem';
import { useState } from 'react';
import { fetchAddCv } from '~/services/cvService';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export default function UploadCvModel({ open, onClose }) {
    const [cvUpload, setCvUpload] = useState({
        name: '',
        cvType: 'UPLOAD',
        cvFile: 'https://www.topcv.vn/v4/image/upload_cv/default_cv.jpg',
    });

    const handleSubmit = () => {
        fetchAddCv(cvUpload).then((data) => {
            toast.success(data.message);
            setCvUpload({
                name: '',
                cvType: 'UPLOAD',
                cvFile: 'https://www.topcv.vn/v4/image/upload_cv/default_cv.jpg',
            });
            onClose();
        });
    };

    return (
        <Dialog
            title="Upload CV"
            open={open}
            onClose={onClose}
            aria-labelledby="responsive-dialog-title"
            maxWidth="900px"
            PaperProps={{
                style: {
                    borderRadius: '8px',
                    width: '900px',
                    height: 'auto',
                    paddingBottom: '30px',
                },
            }}
        >
            <div
                className="flex justify-between rounded-t-lg bg-gradient-to-r from-[#107047] via-[#107047]
                    to-[#09783b] p-[30px]"
            >
                <div className="flex flex-col gap-3">
                    <h1 className="text-xl font-bold leading-7 text-white">
                        Upload CV để các cơ hội việc làm tự tìm đến bạn
                    </h1>
                    <h2 className="text-sm font-semibold leading-7 text-white">
                        Giảm đến 50% thời gian cần thiết để tìm được một công
                        việc phù hợp
                    </h2>
                </div>
                <div>
                    <button onClick={onClose} className="h-4 w-4">
                        <FontAwesomeIcon
                            icon={faClose}
                            className="text-2xl text-white"
                        />
                    </button>
                </div>
            </div>
            <div className="py-6- px-8">
                <p className="my-5 flex flex-col gap-1">
                    <span>
                        Bạn đã có sẵn CV của mình, chỉ cần tải CV lên, hệ thống
                        sẽ tự động đề xuất CV của bạn tới những nhà tuyển dụng
                        uy tín.
                    </span>

                    <span>
                        Tiết kiệm thời gian, tìm việc thông minh, nắm bắt cơ hội
                        và làm chủ đường đua nghề nghiệp của chính mình.
                    </span>
                </p>
                <TextField
                    fullWidth
                    label="Tên CV"
                    value={cvUpload?.name}
                    onChange={(e) =>
                        setCvUpload({ ...cvUpload, name: e.target.value })
                    }
                />
                <div
                    className="my-4 flex cursor-pointer flex-col items-center gap-2 rounded-md border-[1px]
                        border-dashed border-[#b3b8bd] bg-white px-8 py-4"
                >
                    <div className="flex items-center gap-3">
                        <img
                            className="h-[28px] w-[42px] align-middle"
                            src="https://www.topcv.vn/v4/image/upload-cv/upload-cloud.png"
                            alt=""
                        />
                        <span className="text-sm font-semibold text-[#263a4d]">
                            Tải lên CV từ máy tính, chọn hoặc kéo thả
                        </span>
                    </div>
                    <ImageItem
                        src={cvUpload?.cvFile}
                        onChange={(res) =>
                            setCvUpload({ ...cvUpload, cvFile: res })
                        }
                    />
                </div>
                <div className="flex w-full items-center justify-center">
                    <button
                        onClick={handleSubmit}
                        className="rounded-md bg-[#00b14f] px-6 py-2 text-base font-medium text-white"
                    >
                        Tải CV lên
                    </button>
                </div>
            </div>
        </Dialog>
    );
}
