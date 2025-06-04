import axiosInstance from '~/utils/axiosInstance';

export function formatMoney(value) {
    if (value == null || value === '') return '';
    const number = parseInt(value.toString().replace(/[^\d]/g, ''), 10);
    return number.toLocaleString('en-US');
}

export function formatMoneyToInt(value) {
    if (value == null || value === '') return '';
    const number = parseInt(value.toString().replace(/[^\d]/g, ''), 10);
    return number;
}

export const allowOnlyNumbers = (e) => {
    const allowedKeys = [
        'Backspace',
        'Delete',
        'ArrowLeft',
        'ArrowRight',
        'Tab',
        'Home',
        'End',
    ];

    if (
        (e.ctrlKey || e.metaKey) &&
        ['a', 'c', 'v', 'x', 'z'].includes(e.key.toLowerCase())
    ) {
        return;
    }

    const isNumberKey = /^[0-9]$/.test(e.key);
    const isAllowed = allowedKeys.includes(e.key);

    if (!isNumberKey && !isAllowed) {
        e.preventDefault();
    }
};
export const openCvPdf = (cvId) => {
    axiosInstance
        .get(`cv/get-one/${cvId}`, {
            responseType: 'blob',
            headers: {
                Accept: 'application/pdf',
            },
        })
        .then((response) => {
            if (response.status === 200 && response.data) {
                const file = new Blob([response.data], {
                    type: 'application/pdf',
                });

                const fileURL = URL.createObjectURL(file);

                const newWindow = window.open(fileURL);
                if (!newWindow) {
                    alert(
                        'Trình duyệt đã chặn popup. Vui lòng cho phép để xem file PDF.',
                    );
                }
            } else {
                console.error('Không nhận được file PDF hợp lệ');
            }
        })
        .catch((error) => {
            toast.error('Lỗi khi tải PDF');
            console.error('Lỗi khi tải PDF:', error);
        });
};
