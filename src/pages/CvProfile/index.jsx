import { useEffect, useState } from 'react';
import Education from './Education';
import { fetchCvProfile } from '~/services/cvProfileService';
import { useParams } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function CvProfile() {
    const { cvProfileId } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));
    const [cvProfile, setCvProfile] = useState();

    useEffect(() => {
        fetchCvProfile(cvProfileId).then((data) => setCvProfile(data.data));
    }, [cvProfileId]);

    return (
        <div className="w-[721px] bg-none">
            <div className="rounded-md border-[1px] border-solid border-transparent pb-8 shadow-sm">
                <img
                    src="https://www.topcv.vn/images/profile_default_cover.jpg"
                    alt=""
                />
                <div className="relative h-[130px] bg-white p-4">
                    <div className="absolute top-[-100px] p-1">
                        <Avatar
                            src={cvProfile?.avatar}
                            sx={{
                                width: '150px',
                                height: '150px',
                                boxShadow: '0 3px 12px -8px rgba(0, 0, 0, .75)',
                            }}
                        />
                    </div>
                    <div className="absolute left-[200px] top-0">
                        <div className="flex flex-col gap-2">
                            <h1 className="mt-4 text-2xl font-bold">
                                {cvProfile?.candidateName}
                            </h1>
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon
                                    icon={faEnvelopeOpen}
                                    className="text-success"
                                />
                                <h2>{user?.email}</h2>
                            </div>
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="text-success"
                                />
                                <h2>{cvProfile?.phoneNumber}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Education data={cvProfile?.educations || []} />
        </div>
    );
}
