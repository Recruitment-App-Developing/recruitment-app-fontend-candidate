import { Dialog } from '@mui/material';
import { toast } from 'react-toastify';
import { fetchDeleteCv } from '~/services/cvService';

export default function ConfirmDeleteCv({
    cvId,
    open,
    onClose,
    setUpdateChange,
}) {
    const handleSubmit = () => {
        fetchDeleteCv(cvId).then((data) => {
            toast.success(data.message);
            setUpdateChange();
            onClose();
        });
    };

    return (
        <Dialog
            title="Delete Cv"
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
            <div className="px-4 pt-4">
                <h3 className="mb-3 text-lg font-medium">
                    Bạn có chắc chắn muốn xoá CV này?
                </h3>
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
                        Chắc chắn
                    </button>
                </div>
            </div>
        </Dialog>
    );
}
