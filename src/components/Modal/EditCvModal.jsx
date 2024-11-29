import { Dialog, TextField } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { fetchUpdateCv } from '~/services/cvService';

export default function EditCvModal({
    open,
    onClose,
    cvId = '',
    cvName = '',
    setUpdateChange = () => {},
}) {
    const [updateCv, setUpdateCv] = useState({
        id: cvId,
        cvName: cvName,
    });

    const handleSubmit = () => {
        fetchUpdateCv(updateCv).then((data) => {
            toast.success(data.message);
            setUpdateChange();
            onClose();
        });
    };

    return (
        <Dialog
            title="Upload CV"
            open={open}
            onClose={onClose}
            aria-labelledby="responsive-dialog-title"
            maxWidth="700px"
            PaperProps={{
                style: {
                    borderRadius: '8px',
                    width: '700px',
                    height: 'auto',
                    paddingBottom: '30px',
                },
            }}
        >
            <div className="border-t-[1px] border-solid border-t-[#e5e5e5] px-4 pt-4">
                <h4 className="text-lg font-medium">Chỉnh sửa CV Upload</h4>
                <div className="mb-4 flex flex-col gap-4 p-4">
                    <label className="font-bold">
                        Tên CV (thường là vị trí ứng tuyển)
                    </label>
                    <TextField
                        value={updateCv?.cvName}
                        onChange={(e) =>
                            setUpdateCv({ ...updateCv, cvName: e.target.value })
                        }
                        fullWidth
                        label="Tên CV"
                    />
                </div>
            </div>
            <div
                className="flex w-full justify-end gap-3 border-t-[1px] border-solid border-t-[#e5e5e5]
                    px-4 pt-4"
            >
                <button
                    onClick={onClose}
                    className="rounded border-[1px] border-solid border-[#ccc] px-[10px] py-[5px] font-bold"
                >
                    Huỷ
                </button>
                <button
                    onClick={handleSubmit}
                    className="rounded border-[1px] border-solid border-success bg-success px-[10px] py-[5px]
                        font-bold text-white"
                >
                    Cập nhật
                </button>
            </div>
        </Dialog>
    );
}
