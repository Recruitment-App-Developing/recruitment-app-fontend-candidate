import axiosInstance from '~/utils/axiosInstance';

export const addApplication = async (data) => {
    const res = await axiosInstance.post(`application/apply`, data);
    return res.data;
};
