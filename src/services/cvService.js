import axiosInstance from '~/utils/axiosInstance';

export const fetchCvList = async () => {
    const res = axiosInstance.get(`cv/my-cv`);
    return (await res).data;
};

export const fetchAddCv = async (data) => {
    const res = axiosInstance.post(`cv/add`, data);
    return (await res).data;
};

export const fetchUpdateCv = async (data) => {
    const res = axiosInstance.post(`cv/update`, data);
    return (await res).data;
};

export const fetchDeleteCv = async (cvId) => {
    const res = axiosInstance.delete(`cv/delete/${cvId}`);
    return (await res).data;
};
