import { useState } from 'react';
import { openCvPdf } from '~/constants/common';

export default function SelectCvBox({ children, link, onClick }) {
    const [isMount, setIsMount] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsMount(true)}
            onMouseLeave={() => setIsMount(false)}
            className="flex cursor-pointer justify-between rounded-lg border-2 border-solid
                border-gray-400 p-2 pr-4 text-base hover:border-green-500"
        >
            <div className="flex-center gap-2">
                {children}
                <button
                    onClick={() => openCvPdf(link)}
                    className="text-success"
                >
                    Xem
                </button>
            </div>
            {/* <div className="flex-center gap-2">
                {children}
                <a href={link} target="_blank" className="text-success">
                    Xem
                </a>
            </div> */}
            {isMount && (
                <button
                    onClick={onClick}
                    className="flex-center rounded-md bg-success px-3 py-1 text-xs font-semibold text-white"
                >
                    Chọn CV
                </button>
            )}
        </div>
    );
}
