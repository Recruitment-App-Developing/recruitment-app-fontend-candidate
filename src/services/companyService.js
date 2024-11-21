import axiosInstance from '~/utils/axiosInstance';

export const fetchCompanyList = async (companyName = '') => {
    let res;
    if (companyName === '') {
        res = await axiosInstance(`company?pageSize=100`);
    } else {
        console.log('Ok');
        res = await axiosInstance(
            `company?pageSize=100&company_name=${companyName}`,
        );
    }
    return res.data;
};

export const fetchBriefCompany = async (companyId) => {
    const res = await axiosInstance(`company/brief-company/${companyId}`);
    return res.data;
};

export const fetchDetailCompany = async (companyId) => {
    const res = await axiosInstance(`company/detail-company/${companyId}`);
    return res.data;
};
