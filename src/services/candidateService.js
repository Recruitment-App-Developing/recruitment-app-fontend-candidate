import axiosInstance from '~/utils/axiosInstance';

export const fetchDetailCandidate = async () => {
    const res = await axiosInstance.get(`candidate/detail`);
    return await res.data;
};

export const fetchUpdateCandidate = async (data) => {
    const res = await axiosInstance.put(`candidate/update`, data);
    return await res.data;
};
