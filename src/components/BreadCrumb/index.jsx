import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';

function BreadCrumb({ data = [{ title: 'Trang chủ', link: '/' }], title }) {
    const renderData = () => {
        return data.map((item, index) => {
            return (
                <Fragment key={index}>
                    <a
                        href={item.link}
                        className="text-base font-semibold tracking-[0.175px] text-[#00b14f]"
                    >
                        {item.title}
                    </a>
                    {index != data.length - 1 && (
                        <FontAwesomeIcon
                            icon={faAngleRight}
                            className="ml-2 mr-2 flex h-4 w-4 items-center justify-center text-[15px] font-normal
                                text-[#212f3f]"
                        />
                    )}
                </Fragment>
            );
        });
    };

    return (
        <div className="flex w-full flex-wrap items-center pb-3 pt-3">
            {renderData()}
            <span className="text-base font-normal tracking-[0.14px] text-[#212f3f]">
                {title}
            </span>
        </div>
    );
}

export default BreadCrumb;
