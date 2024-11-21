import axiosInstance from '~/utils/axiosInstance';
import { deleteToken } from '~/utils/storageUtil';

export const loginApi = async (data) => {
    deleteToken();

    const res = await axiosInstance.post(`auth/login`, data);
    return res.data;
};

export const fetchRegisterCandidate = async (data) => {
    deleteToken();

    const res = await axiosInstance.post(`candidate/register`, data);
    return res.data;
};
