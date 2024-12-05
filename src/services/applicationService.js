import axiosInstance from '~/utils/axiosInstance';

export const addApplication = async (data) => {
    const res = await axiosInstance.post(`application/apply`, data);
    return res.data;
};

export const fetchApplicationHistory = async (
    status = null,
    currentPage = 0,
) => {
    const res = await axiosInstance.get(
        `application/application-history?status=${status}&pageSize=3&currentPage=${currentPage}`,
    );
    return res.data;
};
