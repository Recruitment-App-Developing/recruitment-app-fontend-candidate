import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';

import BoxHeader from './BoxHeader';
import BoxBody from './BoxBody';
import BoxFooter from './BoxFooter';
import { useEffect, useState } from 'react';
import { fetchDetailJobById } from '~/services/jobService';

function JobBox({ children, jobId }) {
    const [jobDetail, setJobDetail] = useState({});
    //    fetchDetailJobById(jobId).then((data) => setJobDetail(data.data));

    const fetchApi = () => {
        fetchDetailJobById(jobId).then((data) => setJobDetail(data.data));
    };
    // useEffect(() => {
    //     fetchDetailJobById(jobId).then((data) => setJobDetail(data.data));
    // }, [jobId]);

    return (
        <Tippy
            delay={[100, 100]}
            placement="auto-start"
            interactive={true}
            onShow={() => fetchApi()}
            render={(attrs, index) => (
                <div
                    key={index}
                    className={clsx(
                        'flex h-[533px] w-[529px] flex-col bg-white',
                    )}
                    {...attrs}
                >
                    <BoxHeader className="sticky" data={jobDetail} />
                    <div
                        className="relative overflow-y-scroll overscroll-contain rounded-[10px] bg-white pb-[14px]
                            pl-6 pr-6 pt-0"
                    >
                        <BoxBody
                            className="flex w-full flex-col"
                            data={jobDetail}
                        />
                    </div>
                    <BoxFooter />
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default JobBox;
