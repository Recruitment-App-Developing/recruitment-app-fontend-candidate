import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import AddressItem from './AddressItem';
import {
    faLocationDot,
    faTrashAlt,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useContext, useState, useEffect } from 'react';
import useAddress from '../../../../hooks/useAddress';
import axios from 'axios';

export default function AreaItem({ province }) {
    const { addressTemp, addDistrict, updProvince, removeProvince } =
        useAddress();

    const [provinceSelected, setProvinceSelected] = useState('');

    const [provinceList, setProvinceList] = useState([]);
    useEffect(() => {
        const fetchProvince = async () => {
            const res = await axios.get(
                `https://open.oapi.vn/location/provinces`,
            );
            const data = await res.data;
            setProvinceList(data.data);
        };
        fetchProvince();
    }, []);

    const handleChangeProvince = (e) => {
        updProvince({
            ...province,
            province: e.target.value,
        });
        setProvinceSelected(e.target.value);
    };

    return (
        <div className="flex h-fit w-full flex-col gap-4 bg-slate-200 p-3">
            <div className="flex items-start">
                <div className="flex-center gap-3">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <h4 className="text-nowrap">
                        Khu vực {addressTemp.indexOf(province)}:
                    </h4>
                    <FormControl sx={{ width: '400px' }}>
                        <InputLabel id="province-list-label">
                            Tỉnh/Thành phố
                        </InputLabel>
                        <Select
                            labelId="province-list-label"
                            label="Tỉnh/Thành phố"
                            value={provinceSelected}
                            onChange={handleChangeProvince}
                            MenuProps={{
                                PaperProps: {
                                    style: {
                                        maxHeight: 500,
                                    },
                                },
                            }}
                        >
                            {provinceList.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <button
                        type="button"
                        onClick={() => removeProvince(province.id)}
                    >
                        <FontAwesomeIcon
                            className="p-3 text-xl text-red-400"
                            icon={faTrashAlt}
                        />
                    </button>
                </div>
            </div>
            <div className="items-center">
                {province.items.map((item) => {
                    return (
                        <AddressItem
                            key={item.id}
                            district={item}
                            provinceId={province.id}
                            provinceCode={province.province}
                        />
                    );
                })}
                <div>
                    <button
                        type="button"
                        onClick={() => addDistrict(province.id)}
                        className="text-success cursor-pointer"
                    >
                        Thêm địa chỉ
                    </button>
                </div>
            </div>
        </div>
    );
}
