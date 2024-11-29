import axiosInstance from '~/utils/axiosInstance';

const pageSize = 9;

export const fetchListJob = async (currentPage = 1) => {
    const res = await axiosInstance.get(
        `job?pageSize=${pageSize}&currentPage=${currentPage}&sortDir=desc`,
    );
    return res.data;
};
export const fetchSearchJob = async (data) => {
    console.log(`job/search-job?${data}`);
    const res = await axiosInstance.get(`job/search-job?${data}`);
    return res.data;
};
export const fetchListJobByCompany = async (pageSize = 5, currentPage = 5) => {
    const res = await axiosInstance.get(
        `job/byCompany?pageSize=${pageSize}&currentPage=${currentPage}&sortDir=desc`,
    );
    return res.data;
};

export const fetchFindJobByCompany = async (
    companyId,
    name = '',
    address = 'all',
    pageSize = 6,
    currentPage = 0,
) => {
    const res = await axiosInstance.get(
        `job/findJobByCompany/${companyId}?job_name=${name}&address=${address}&pageSize=${pageSize}&currentPage=${currentPage}&sortDir=desc`,
    );
    return res.data;
};

export const fetchDetailJobById = async (jobId) => {
    const res = await axiosInstance.get(`job/${jobId}`);
    return res.data;
};

export const fetchDetailPageJob = async (jobId) => {
    const res = await axiosInstance.get(`job/job-page/${jobId}`);
    return res.data;
};

export const addAJob = async (data) => {
    const res = await axiosInstance.post(`job`, data);
    return res.data;
};
