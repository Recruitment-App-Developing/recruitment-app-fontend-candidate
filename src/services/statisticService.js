import axiosInstance from '~/utils/axiosInstance';

export const fetchStatistcGeneralJobByIndustry = async () => {
    const res = await axiosInstance.get(
        `statistic/statistcGeneralJobByIndustry`,
    );
    return res.data;
};

export const fetchStatisticGeneralJobByDay = async () => {
    const res = await axiosInstance.get(`statistic/statisticGeneralJobByDay`);
    return res.data;
};
