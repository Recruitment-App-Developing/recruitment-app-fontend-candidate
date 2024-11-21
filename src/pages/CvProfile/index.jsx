import { useEffect, useState } from 'react';
import Education from './Education';
import { fetchCvProfile } from '~/services/cvProfileService';
import { useParams } from 'react-router-dom';
import { Avatar } from '@mui/material';

export default function CvProfile() {
    const { cvProfileId } = useParams();

    const [cvProfile, setCvProfile] = useState();

    useEffect(() => {
        fetchCvProfile(cvProfileId).then((data) => setCvProfile(data.data));
    }, [cvProfileId]);

    return (
        <div className="w-[721px]">
            <div className="pb-8">
                <img
                    src="https://www.topcv.vn/images/profile_default_cover.jpg"
                    alt=""
                />
                <div className="relative bg-white p-4">
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
                    <div>
                        <h1 className="left-[100px]">
                            {cvProfile?.candidateName}
                        </h1>
                    </div>
                </div>
            </div>
            <Education data={cvProfile?.educations || []} />
        </div>
    );
}
