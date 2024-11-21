import axiosInstance from '~/utils/axiosInstance';

export const fetchCvProfile = async (cvProfileId) => {
    const res = await axiosInstance.get(`cv-profile/${cvProfileId}`);
    return res.data;
};

export const fetchUpdateEducation = async (data) => {
    const res = await axiosInstance.post(`cv-profile/education/update`, data);
    return res.data;
};

export const fetchDeleteEducation = async (educationId) => {
    const res = await axiosInstance.delete(
        `cv-profile/education/delete/${educationId}`,
    );
    return res.data;
};
