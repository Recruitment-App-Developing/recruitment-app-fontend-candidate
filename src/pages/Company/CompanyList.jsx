import clsx from 'clsx';
import styles from './company.module.scss';
import InputTextIcon from '~/components/InputTextIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import GreenButton from '~/components/Button/GreenButton';

import images from '~/assets/images';
import { NavLink } from 'react-router-dom';
import { CompanyItem } from '~/components/CompanyComponents';
import { useEffect, useState } from 'react';
import { fetchCompanyList } from '~/services/companyService';

function CompanyList() {
    const [keyword, setKeyword] = useState('');
    const [companyList, setCompanyList] = useState([]);
    useEffect(() => {
        fetchCompanyList('').then((data) => {
            setCompanyList(data.data);
        });
    }, []);

    console.log(keyword);

    const handleFind = () => {
        fetchCompanyList(keyword).then((data) => {
            setCompanyList(data.data);
        });
    };

    return (
        <div className="flex-center-col w-full">
            <div
                className={clsx(
                    'flex-center w-screen',
                    styles['box-search-company'],
                )}
            >
                <div
                    className={
                        'flex min-h-[273px] w-[1320px] justify-between pt-6'
                    }
                >
                    <div className="block h-full">
                        <ul className="flex-start pb-8 text-sm">
                            <li className="mr-6">
                                <NavLink className="small-semibold" href="#">
                                    Danh sách công ty
                                </NavLink>
                            </li>
                            <li className="mx-6">
                                <NavLink className="small-semibold" href="#">
                                    Top công ty
                                </NavLink>
                            </li>
                        </ul>
                        <div className="mb-9">
                            <h1 className="medium-2xl pb-3 text-success">
                                Khám phá 100.000+ công ty nổi bật
                            </h1>
                            <p className="text-base">
                                Tra cứu thông tin công ty và tìm kiếm nơi làm
                                việc tốt nhất dành cho bạn
                            </p>
                        </div>
                        <form className="flex-center">
                            <InputTextIcon
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                className="mr-1 flex-grow"
                                leftIcon={
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                }
                                placeholder="Nhập tên công ty"
                            />
                            <GreenButton
                                onClick={handleFind}
                                content="Tìm kiếm"
                            />
                        </form>
                    </div>
                    <div className="block">
                        <img
                            className="w-[272px]"
                            src={images.company_billBoard}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="flex-center-col w-[1320px]">
                <h1 className="medium-2xl py-6">
                    DANH SÁCH CÁC CÔNG TY NỔI BẬT
                </h1>
                <div className="grid w-full grid-cols-3 gap-y-5">
                    {companyList?.map((item) => (
                        <CompanyItem key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CompanyList;
