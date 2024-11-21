import axiosInstance from '~/utils/axiosInstance';

export const fetchCvList = async () => {
    const res = axiosInstance.get(`cv/my-cv`);
    return (await res).data;
};
