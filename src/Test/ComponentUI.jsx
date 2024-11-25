import {
    faAlignLeft,
    faAngleDown,
    faAngleUp,
    faClock,
    faFilter,
    faFilterCircleDollar,
    faLocationDot,
    faMagnifyingGlass,
    faMailBulk,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useEffect, useState } from 'react';
import {
    DropdownSearchBox,
    GrayBox,
    RemindUpdCvBox,
    ReportBox,
} from '~/components/Box';
import { CompanyItem, CompQuickViewBox } from '~/components/CompanyComponents';
import Dropdown from '~/components/Dropdown';
import InputTextIcon from '~/components/InputTextIcon';
import {
    JobDefaultBox,
    JobGeneralInfor,
    JobRelatedBox,
} from '~/components/JobBox';

import ProgressBar from '~/components/ProgressBar';
import ButtonTest from '~/components/TestButton';
import ToppyAI from '~/components/ToppyAI';

import styles from './test.module.scss';
import Button from '~/components/Button';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
//import Tippy from '@tippyjs/react';
import Tippy from '@tippyjs/react/headless';
import { TippyBox } from './TippyBox';
import { Location, searchDataConstant } from '../constants/SearchBoxData';
import GreenButton from '~/components/Button/GreenButton';
import { AddAJob } from '~/pages/AddJob';
import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material';
import { MultiAutocomplete } from '~/components/MultiSelect';
import { industryData } from '~/constants/IndustryData';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AreaItem from '../pages/AddJob/components/Address/AreaItem';
import AddressProvider from '../pages/AddJob/components/Address/AddressContext';
import AddressCom from '../pages/AddJob/components/Address/AddressCom';
import FieldCard from '~/pages/AddJob/FieldCard';
import clsx from 'clsx';
import ApplyModal from '../components/ApplyModal';
import SelectCvBox from '../components/ApplyModal/SelectCvBox';
import LayoutList from './ListForEmployer/LayoutList';
import { SortingAndSelectingTable } from '~/components/Table';
import JobList from './ListForEmployer/JobList';
import Search from '~/pages/Search';

function ComponentUI() {
    return (
        <div className="flex-center w-screen bg-slate-300">
            <div className="flex-center w-[1000px]">
                <LayoutList>{/* <JobList /> */}</LayoutList>
            </div>
            {/* <LayoutList>
                <table border="1" cellPadding="10" cellSpacing="0">
                    <tr>
                        <td>Thao tác</td>
                        <td>Tin tuyển dụng</td>
                        <td>Số lượt xem</td>
                        <td>Số lượt ứng tuyển</td>
                        <td>Tỷ lệ ứng tuyển</td>
                    </tr>
                </table>
            </LayoutList> */}
        </div>
    );
    // const [searchText, setSearchText] = useState('');
    // const [selectedIndex, setSelectedIndex] = useState(0);
    // const [isClose, setIsClose] = useState(false);
    // const handleClick = () => {
    //     setIsClose(!isClose);
    // };
    // const className = 'm';
    // const [provinceList, setProvinceList] = useState([]);
    // const [provinceSelected, setProvinceSelected] = useState('');
    // useEffect(() => {
    //     const fetchProvince = async () => {
    //         const res = await axios.get(
    //             `https://open.oapi.vn/location/provinces`,
    //         );
    //         const data = await res.data;
    //         setProvinceList(data.data);
    //         console.log(JSON.stringify(data.data));
    //     };
    //     fetchProvince();
    // }, []);
    // const [districtList, setDistrictList] = useState([]);
    // const [districtSelected, setDistrictSelected] = useState('');
    // useEffect(() => {
    //     if (provinceSelected) {
    //         const fetchDistrict = async () => {
    //             const res = await axios.get(
    //                 `https://open.oapi.vn/location/districts?provinceId=${provinceSelected}`,
    //             );
    //             const data = await res.data;
    //             setDistrictList(data.data);
    //             JSON.stringify(data.data);
    //         };
    //         fetchDistrict();
    //     }
    // }, [provinceSelected]);
    // const [wardList, setWardList] = useState([]);
    // const [wardSelected, setWardSelected] = useState('');
    // useEffect(() => {
    //     if (districtSelected) {
    //         const fetchWard = async () => {
    //             console.log(districtSelected);
    //             const res = await axios.get(
    //                 `https://open.oapi.vn/location/wards?districtId=${districtSelected}`,
    //             );
    //             const data = await res.data;
    //             setWardList(data.data);
    //             JSON.stringify(data.data);
    //         };
    //         fetchWard();
    //     }
    // }, [districtSelected]);

    // const [text, setText] = useState('');
    // const widthEditor = 'w-[980px]';
    // return (
    //     <FieldCard
    //         icon={<FontAwesomeIcon icon={faAlignLeft} />}
    //         title="Nội dung tuyển dụng chi tiết"
    //     >
    //         <div className="w-[600px]">
    //             <h4>Mô tả công việc</h4>
    //             <ReactQuill
    //                 theme="snow"
    //                 value={text}
    //                 onChange={(e) => setText(e)}
    //                 className={clsx('w-full bg-white')}
    //             />
    //         </div>
    //     </FieldCard>
    // <AddressProvider>
    //     {/* <AreaItem /> */}
    //     <AddressCom />
    //     {/* <AddAJob /> */}
    // </AddressProvider>
    //);
    // return (
    //     <div className="h-screen w-screen bg-orange-400">
    //         <div className="flex-center h-fit">
    //             {/* <AddAJob /> */}
    //             {/* <div className="mt-40 flex h-[300px] w-[800px] flex-col gap-4 bg-slate-200">
    //                 <div className="flex items-start">
    //                     <div className="flex-center gap-3">
    //                         <FontAwesomeIcon icon={faLocationDot} />
    //                         <h4 className="text-nowrap">Khu vực 1:</h4>
    //                         <FormControl sx={{ width: '400px' }}>
    //                             <InputLabel id="province-list-label">
    //                                 Tỉnh/Thành phố
    //                             </InputLabel>
    //                             <Select
    //                                 labelId="province-list-label"
    //                                 label="Tỉnh/Thành phố"
    //                                 value={provinceSelected}
    //                                 onChange={(e) => {
    //                                     setProvinceSelected(e.target.value);
    //                                     setDistrictSelected('');
    //                                     setWardSelected('');
    //                                 }}
    //                                 MenuProps={{
    //                                     PaperProps: {
    //                                         style: {
    //                                             maxHeight: 500,
    //                                         },
    //                                     },
    //                                 }}
    //                             >
    //                                 {provinceList.map((item) => (
    //                                     <MenuItem key={item.id} value={item.id}>
    //                                         {item.name}
    //                                     </MenuItem>
    //                                 ))}
    //                             </Select>
    //                         </FormControl>
    //                     </div>
    //                 </div>
    //                 <div className="flex-center">
    //                     <FormControl fullWidth>
    //                         <InputLabel id="district-list-label">
    //                             Quận/Huyện
    //                         </InputLabel>
    //                         <Select
    //                             labelId="district-list-label"
    //                             label="Quận/Huyện"
    //                             value={districtSelected}
    //                             disabled={!provinceSelected}
    //                             onChange={(e) =>
    //                                 setDistrictSelected(e.target.value)
    //                             }
    //                             MenuProps={{
    //                                 PaperProps: {
    //                                     style: {
    //                                         maxHeight: 500,
    //                                     },
    //                                 },
    //                             }}
    //                         >
    //                             {districtList.map((item) => (
    //                                 <MenuItem key={item.id} value={item.id}>
    //                                     {item.name}
    //                                 </MenuItem>
    //                             ))}
    //                         </Select>
    //                     </FormControl>
    //                     <FormControl fullWidth>
    //                         <InputLabel id="ward-list-label">
    //                             Xã/Phường
    //                         </InputLabel>
    //                         <Select
    //                             labelId="ward-list-label"
    //                             label="Xã/Phường"
    //                             value={wardSelected}
    //                             disabled={!districtSelected}
    //                             onChange={(e) =>
    //                                 setWardSelected(e.target.value)
    //                             }
    //                             MenuProps={{
    //                                 PaperProps: {
    //                                     style: {
    //                                         maxHeight: 500,
    //                                     },
    //                                 },
    //                             }}
    //                         >
    //                             {wardList.map((item) => (
    //                                 <MenuItem key={item.id} value={item.id}>
    //                                     {item.name}
    //                                 </MenuItem>
    //                             ))}
    //                         </Select>
    //                     </FormControl>
    //                     <TextField
    //                         fullWidth
    //                         disabled={!wardSelected}
    //                         label="Địa chỉ chi tiết"
    //                         variant="outlined"
    //                     />
    //                 </div>
    //             </div> */}
    //         </div>
    //     </div>
    // );
    // return (
    //     <div className="flex h-screen w-screen items-center justify-center bg-orange-400">
    //         <div className="flex-center h-44 w-full bg-green-800">
    //             <div className="w-[1170px] items-center px-4">
    //                 <form>
    //                     <div className="flex justify-between gap-4">
    //                         <div className="flex w-fit flex-grow items-center rounded-md bg-yellow-400">
    //                             <InputTextIcon
    //                                 className="h-10 w-full"
    //                                 classInput="rounded-r-none"
    //                                 leftIcon={
    //                                     <FontAwesomeIcon
    //                                         icon={faMagnifyingGlass}
    //                                     />
    //                                 }
    //                             />
    //                             <DropdownSearchBox
    //                                 className="rounded-l-none bg-bswhite text-black"
    //                                 leftIcon={
    //                                     <FontAwesomeIcon icon={faLocationDot} />
    //                                 }
    //                             />
    //                         </div>
    //                         <DropdownSearchBox className="bg-bswhite text-black" />
    //                         <GreenButton content="Tìm kiếm" className="px-3" />
    //                         <DropdownSearchBox
    //                             className=""
    //                             leftIcon={<FontAwesomeIcon icon={faFilter} />}
    //                             content="Lọc nâng cao"
    //                         />
    //                     </div>
    //                 </form>
    //                 <div className="flex-between mt-4 h-11 w-full gap-4 bg-yellow-300">
    //                     {searchDataConstant.map((item) => (
    //                         <DropdownSearchBox
    //                             leftIcon={item.leftIcon}
    //                             content={item.title}
    //                             listItem={item.items}
    //                         />
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default ComponentUI;

// function child() {
//     const [selectedIndex, setSelectedIndex] = useState(0);

//     return (
//         <div className="h-80 w-56 overflow-hidden rounded-md border-none bg-white shadow-soft-lg">
//             <div className="px-2 pb-2 pt-2">
//                 <InputTextIcon
//                     placeholder="Type here"
//                     className="w-full"
//                     leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
//                 />
//             </div>
//             <div className="h-full w-full bg-yellow-300">
//                 <ul className="max-h-60 overflow-y-auto">
//                     {data1.map((item, index) => {
//                         {
//                             console.log(index);
//                         }
//                         return (
//                             <li
//                                 key={index}
//                                 className={`flex-start small-semibold bg-white py-3 pl-4 pr-3 hover:bg-gray-400
//                                 ${selectedIndex === index ? 'text-success' : ''}`}
//                             >
//                                 {item}
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// const child = (
//     <InputTextIcon
//         className="w-full"
//         leftIcon={<FontAwesomeIcon icon={faMailBulk} color="green" />}
//         placeholder="Enter your password"
//     />
// );

// const child = (
//     <Dropdown
//         className="bg-[#145c3e]"
//         title="Kinh nghiệm"
//         icon={<FontAwesomeIcon icon={faClock} />}
//     />
// );
