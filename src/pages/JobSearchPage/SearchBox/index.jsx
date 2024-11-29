import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputTextIcon from '../../../components/InputTextIcon';
import {
    faFilter,
    faLocationDot,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import DropdownSearchBox from './DropdownSearchBox';
import GreenButton from '../../../components/Button/GreenButton';
import { searchDataConstant } from '~/constants/SearchBoxData';
import { useEffect, useState } from 'react';
import { fetchListProvince } from '~/services/addressService';
import ResultSearch from '../ResultSearch';
import { fetchSearchJob } from '~/services/jobService';
import BreadCrumb from '~/components/BreadCrumb';

const breadCrumb = [
    { title: 'Trang chủ', link: '/' },
    { title: 'Tìm kiếm việc làm', link: '/search-job' },
];

export default function SearchBox() {
    const [provinceList, serProvinceList] = useState();
    const [jobList, setJobList] = useState([]);
    const [condition, setCondition] = useState([]);

    useEffect(() => {
        const queryString = new URLSearchParams(condition).toString();
        fetchSearchJob(queryString).then((data) => setJobList(data.data));
    }, [condition]);

    useEffect(() => {
        fetchListProvince().then((data) => {
            const temp = data.data;
            const change = temp.map((item) => ({
                value: item.id,
                name: item.name,
            }));
            serProvinceList(change);
        });
    }, []);

    const handleChange = (id, value) => {
        setCondition((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    return (
        <div>
            <div className="flex-center w-screen bg-[#19734e] py-5">
                <div className="w-[1170px] items-center px-4">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex w-fit flex-grow items-center rounded-md">
                            <InputTextIcon
                                placeholder="Tìm kiếm theo tên công việc hoặc tên công ty"
                                value={condition?.keyword || ''}
                                onChange={(e) =>
                                    handleChange('keyword', e.target.value)
                                }
                                className="h-10 w-full"
                                classInput="rounded-r-none"
                                leftIcon={
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                }
                            />
                            <DropdownSearchBox
                                id="address"
                                className="w-60 rounded-l-none bg-slate-200 text-black"
                                leftIcon={
                                    <FontAwesomeIcon icon={faLocationDot} />
                                }
                                contentInit="Địa điểm"
                                listItem={provinceList}
                                onChange={handleChange}
                            />
                        </div>
                        <GreenButton content="Tìm kiếm" className="px-3" />
                        <DropdownSearchBox
                            className=""
                            leftIcon={<FontAwesomeIcon icon={faFilter} />}
                            contentInit="Lọc nâng cao"
                            listItem={''}
                        />
                    </div>
                    <div className="flex-between mt-4 h-11 w-full gap-4">
                        {searchDataConstant.map((item, index) => (
                            <DropdownSearchBox
                                id={item.id}
                                key={index}
                                leftIcon={item.leftIcon}
                                contentInit={item.title}
                                listItem={item.items}
                                onChange={handleChange}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center">
                <div className="w-[1170px] items-center px-4">
                    <BreadCrumb data={breadCrumb} />
                </div>
                <ResultSearch jobList={jobList} />
            </div>
        </div>
    );
}
