import {
    faArrowsDownToLine,
    faPen,
    faShare,
    faStar,
    faTrash,
    faTurnUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ConfirmDeleteCv from '~/components/Modal/ConfirmDeleteCv';
import EditCvModal from '~/components/Modal/EditCvModal';

export default function CvItem({ data, setUpdateChange = () => {} }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    return (
        <div className="group relative mb-4 h-[310px] w-full overflow-hidden rounded-md">
            <img
                className="z-1 absolute left-0 top-0 h-full w-full transform object-cover transition
                    group-hover:scale-105"
                src={
                    data?.cvLink
                        ? data?.cvLink
                        : 'https://www.topcv.vn/v4/image/upload_cv/default_cv.jpg'
                }
                alt=""
            />
            <div
                className="z-2 absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-transparent
                    to-[#212f3f]"
            >
                <div className="absolute right-4 top-4">
                    <a
                        href=""
                        className="block cursor-pointer rounded-xl bg-white px-2 py-1 text-[12px] font-bold
                            leading-4 text-[#212f3f]"
                    >
                        <div className="flex items-center justify-center gap-3">
                            <FontAwesomeIcon icon={faStar} />
                            <span>Đặt làm CV chính</span>
                        </div>
                    </a>
                </div>
                <div className="z-3 absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="mb-3 flex">
                        <a
                            href={data.cvLink}
                            target="_blank"
                            className="mr-2 line-clamp-2 flex flex-col overflow-hidden text-xl font-bold leading-6
                                text-white hover:underline"
                        >
                            {data.name}
                        </a>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="flex h-6 w-6 items-center justify-center rounded-full bg-white bg-opacity-20
                                text-[11px]"
                        >
                            <FontAwesomeIcon icon={faPen} className="" />
                        </button>
                        <EditCvModal
                            open={isOpen}
                            onClose={() => setIsOpen(false)}
                            cvId={data.id}
                            cvName={data.name}
                            setUpdateChange={setUpdateChange}
                        />
                    </h4>
                    <p className="mb-4 text-[15px] leading-5 text-white">
                        Cập nhật lần cuối <span>{data.whenCreated}</span>
                    </p>
                    <ul className="flex justify-between">
                        <li>
                            <button
                                className="mr-2 flex items-center justify-center gap-1 rounded-[30px] bg-white
                                    bg-opacity-20 px-2 py-1 text-[12px] leading-4"
                            >
                                <FontAwesomeIcon icon={faTurnUp} />
                                <span className="font-semibold">Đẩy Top</span>
                            </button>
                        </li>
                        <li>
                            <button
                                className="mr-2 flex items-center justify-center gap-1 rounded-[30px] bg-white
                                    bg-opacity-20 px-2 py-1 text-[12px] leading-4"
                            >
                                <FontAwesomeIcon icon={faShare} />
                                <span className="font-semibold">Chia sẻ</span>
                            </button>
                        </li>
                        <li>
                            <button
                                className="mr-2 flex items-center justify-center gap-1 rounded-[30px] bg-white
                                    bg-opacity-20 px-2 py-1 text-[12px] leading-4"
                            >
                                <FontAwesomeIcon icon={faArrowsDownToLine} />
                                <span className="font-semibold">Tải xuống</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setIsDeleteOpen(true)}
                                className="cursor-pointer"
                            >
                                <FontAwesomeIcon
                                    className="text-base font-semibold"
                                    icon={faTrash}
                                />
                            </button>
                            <ConfirmDeleteCv
                                cvId={data.id}
                                open={isDeleteOpen}
                                onClose={() => setIsDeleteOpen(false)}
                                setUpdateChange={setUpdateChange}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
