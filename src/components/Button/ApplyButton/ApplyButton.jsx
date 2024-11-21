import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './temp.module.scss';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ApplyModal from '~/components/ApplyModal';
import { cn } from '~/lib/utils';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ApplyButton({ jobId, jobName, content }) {
    const location = useLocation();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        const targetUrl = `/job-detail/${jobId}`;
        if (location.pathname !== targetUrl) navigate(targetUrl);
        else setOpen(true);
    };

    return (
        <div className="w-full">
            <button
                onClick={handleClick}
                className={cn(styles['temp'], 'h-full w-full')}
            >
                {content ? (
                    <span>{content}</span>
                ) : (
                    <>
                        <div className="flex h-6 w-6 items-center justify-center p-1">
                            <FontAwesomeIcon
                                icon={faPaperPlane}
                                className="align-middle text-[15px] font-normal leading-5"
                            />
                        </div>
                        Ứng tuyển ngay
                    </>
                )}
            </button>
            <ApplyModal
                open={open}
                onClose={() => setOpen(false)}
                jobId={jobId}
                jobName={jobName}
            />
        </div>
    );
}
