import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import EducationItem from './EducationItem';
import EducationNewModal from './EducationNewModal';

export default function Education({ data }) {
    const [educationList, setEducationList] = useState(data);
    const [openEducationNewModal, setOpenEducationNewModal] = useState(false);

    useEffect(() => {
        setEducationList(data || []);
    }, [data]);

    return (
        <div>
            {/* Education */}
            <div className="bg-white p-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Học vấn</h2>
                    <button
                        onClick={() => setOpenEducationNewModal(true)}
                        className="flex items-center justify-center"
                    >
                        <FontAwesomeIcon className="h-7 w-7" icon={faPlus} />
                    </button>
                    <EducationNewModal
                        open={openEducationNewModal}
                        setOpen={setOpenEducationNewModal}
                        setEducationList={setEducationList}
                    />
                </div>
                <ul>
                    {educationList.map((item, index) => (
                        <EducationItem
                            key={index}
                            education={item}
                            setEducationList={setEducationList}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
