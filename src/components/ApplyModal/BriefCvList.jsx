import { h3 } from 'fontawesome';
import SelectCvBox from './SelectCvBox';
import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// const data = {
//     onlineCv: [
//         {
//             id: 'ewjijgsp-ewjnl-ewmtkl-dsfmk',
//             name: 'My CV - English',
//         },
//         {
//             id: 'ewjgsp-ewjn-ewmtkl-dfmk',
//             name: 'Thong Cv First',
//         },
//     ],
//     uploadCv: [
//         {
//             id: 'ewijgsp-ewjnl-ewmtkl-dsfmk',
//             name: 'My Intern Java',
//         },
//     ],
// };

// const data = [
//     {
//         id: '1',
//         name: 'My CV - English',
//         cvType: 'ONLINE',
//     },
//     {
//         id: '2',
//         name: 'Thong Cv First',
//         cvType: 'ONLINE',
//     },
//     {
//         id: '3',
//         name: 'My Intern Java',
//         cvType: 'UPLOAD',
//     },
// ];

export default function BriefCvList({
    jobId,
    className,
    cvList = [],
    applicationInfor,
    setApplicationInfor,
}) {
    const cvOnline = cvList.filter((item) => item.cvType == 'ONLINE');
    const cvUpload = cvList.filter((item) => item.cvType === 'UPLOAD');

    return (
        <div className={clsx(className, 'space-y-2')}>
            {applicationInfor.cvId ? (
                <div className="flex flex-row justify-between">
                    <div className="flex-center flex gap-3">
                        <span className="flex-center gap-1">
                            CV Online:{' '}
                            <h3 className="font-semibold">
                                {
                                    cvList.filter(
                                        (item) =>
                                            item.id === applicationInfor.cvId,
                                    )[0].name
                                }
                            </h3>
                        </span>
                        <Link className="flex-center text-success font-semibold">
                            Xem
                        </Link>
                    </div>
                    <button
                        onClick={() =>
                            setApplicationInfor({
                                ...applicationInfor,
                                cvId: null,
                            })
                        }
                    >
                        Thay đổi
                    </button>
                </div>
            ) : (
                <>
                    <h3>CV Online</h3>
                    {cvOnline.map((item) => (
                        <SelectCvBox
                            key={item.id}
                            onClick={() =>
                                setApplicationInfor({
                                    ...applicationInfor,
                                    cvId: item.id,
                                })
                            }
                        >
                            {item.name}
                        </SelectCvBox>
                    ))}
                    {cvUpload.length != 0 ? (
                        <>
                            <h3>CV Upload</h3>
                            {cvUpload.map((item) => (
                                <SelectCvBox
                                    key={item.id}
                                    onClick={() =>
                                        setApplicationInfor({
                                            ...applicationInfor,
                                            cvId: item.id,
                                        })
                                    }
                                >
                                    {item.name}
                                </SelectCvBox>
                            ))}
                        </>
                    ) : null}
                    <h3>TopCV Profile</h3>
                    <SelectCvBox>Link hồ sơ: </SelectCvBox>
                </>
            )}
        </div>
    );
}
