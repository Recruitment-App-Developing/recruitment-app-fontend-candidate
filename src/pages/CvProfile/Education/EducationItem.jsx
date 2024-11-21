import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import EducationEditModal from './EducationEditModal';

export default function EducationItem({ education, setEducationList }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="ml-6 flex justify-between overflow-hidden py-5">
            <div className="flex">
                <img
                    className="mr-7 w-[60px] flex-shrink self-start bg-[50%]"
                    src="https://static.topcv.vn/school_logos/4dd7558368d0048f87a3a0eff5612726-5cd3e604c16f0.jpg"
                    alt=""
                />
                <div className="flex flex-col">
                    <span>{education.schoolName}</span>
                    <span>{education.mainIndustry}</span>
                    <div>
                        <span>Từ {education.startTime}</span> đến{' '}
                        <span>{education.endTime}</span>
                    </div>
                </div>
            </div>
            <button onClick={() => setOpen(true)}>
                <FontAwesomeIcon className="text-success" icon={faPen} />
            </button>
            <EducationEditModal
                open={open}
                setOpen={setOpen}
                education={education}
                setEducationList={setEducationList}
            />
        </div>
    );
}
