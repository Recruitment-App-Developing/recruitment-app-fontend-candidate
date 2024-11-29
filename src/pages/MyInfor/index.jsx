import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material';
import ImageItem from '../AddJob/components/ImageItem';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import AddressComponent from '~/components/AddressComponent';
import dayjs from 'dayjs';
import {
    fetchDetailCandidate,
    fetchUpdateCandidate,
} from '~/services/candidateService';
import Loading from '~/components/Loading';
import { toast } from 'react-toastify';

export default function MyInfor() {
    const [myInfor, setMyInfor] = useState();
    const [editInfor, setEditInfor] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        phoneNumber: '',
        address: '',
        avatar: '',
    });

    useEffect(() => {
        fetchDetailCandidate().then((data) => {
            setMyInfor(data.data);
            setEditInfor({
                ...editInfor,
                firstName: data.data.firstName,
                lastName: data.data.lastName,
                phoneNumber: data.data.phoneNumber,
                gender: data.data.gender,
                dateOfBirth: data.data.dateOfBirth,
                avatar: data.data.avatar.url,
            });
        });
    }, []);

    if (!myInfor) return <Loading />;

    const handleAddress = (detail, wardCode) => {
        setEditInfor({ ...editInfor, address: detail + ';' + wardCode });
    };

    const handleChange = (key, value) => {
        setEditInfor((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    console.log(editInfor);

    const handleSubmit = () => {
        fetchUpdateCandidate(editInfor).then((data) => {
            setMyInfor(data.data);
            setEditInfor({
                ...editInfor,
                firstName: data.data.firstName,
                lastName: data.data.lastName,
                phoneNumber: data.data.phoneNumber,
                gender: data.data.gender,
                dateOfBirth: data.data.dateOfBirth,
                avatar: data.data.avatar.url,
            });
            toast.success(data.message);
        });
    };

    return (
        <div className="mt-4 w-[800px] gap-3 rounded-lg bg-white px-7 py-4">
            <h1 className="text-2xl font-bold text-success">
                Cài đặt thông tin cá nhân
            </h1>
            <div className="mb-8 mt-4 flex justify-between">
                <div className="flex flex-col gap-3">
                    <div>
                        <b className="text-xl">Mã tài khoản: </b>
                        <span className="text-xl font-semibold text-success">
                            {myInfor?.id}
                        </span>
                    </div>
                    <div>
                        <b className="text-xl">Tên đăng nhập: </b>
                        <span className="text-xl font-semibold text-success">
                            {myInfor?.username}
                        </span>
                    </div>
                    <div>
                        <b className="text-xl">Số điện thoại: </b>
                        <span className="text-xl font-semibold text-success">
                            {myInfor?.phoneNumber}
                        </span>
                    </div>
                    <div>
                        <b className="text-xl">Email: </b>
                        <span className="text-xl font-semibold text-success">
                            {myInfor?.email}
                        </span>
                    </div>
                </div>
                <div className="mr-7 flex items-center justify-center">
                    <ImageItem
                        src={editInfor.avatar}
                        onChange={(res) =>
                            setEditInfor({ ...editInfor, avatar: res })
                        }
                        height="h-36"
                        width="w-36"
                    />
                </div>
            </div>
            <h2 className="mb-3 ml-4 text-xl font-medium">
                Thông tin chỉnh sửa
            </h2>
            <div className="flex gap-4">
                <TextField
                    fullWidth
                    label="First Name"
                    type="text"
                    value={editInfor?.firstName || ''}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Last Name"
                    type="text"
                    value={editInfor?.lastName || ''}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                />
            </div>
            <div className="mt-3 flex w-full items-center gap-9">
                <div className="w-[300px]">
                    <TextField
                        fullWidth
                        label="Số điện thoại"
                        type="text"
                        value={editInfor?.phoneNumber || ''}
                        onChange={(e) =>
                            handleChange('phoneNumber', e.target.value)
                        }
                    />
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Ngày sinh"
                        value={
                            editInfor?.dateOfBirth
                                ? dayjs(editInfor?.dateOfBirth, 'DD-MM-YYYY')
                                : null
                        }
                        onChange={(newValue) =>
                            handleChange(
                                'dateOfBirth',
                                newValue.format('DD-MM-YYYY'),
                            )
                        }
                        renderInput={(params) => <TextField {...params} />}
                        format="DD-MM-YYYY"
                    />
                </LocalizationProvider>
                <FormControl>
                    <FormLabel>Giới tính</FormLabel>
                    <RadioGroup
                        value={editInfor?.gender}
                        onChange={(e) => handleChange('gender', e.target.value)}
                    >
                        <div className="flex">
                            <FormControlLabel
                                value="MALE"
                                control={<Radio />}
                                label="Nam"
                            />
                            <FormControlLabel
                                value="FEMALE"
                                control={<Radio />}
                                label="Nữ"
                            />
                        </div>
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
                <p className="my-4 text-base font-semibold">Địa chỉ</p>
                {myInfor?.address ? (
                    <AddressComponent
                        handleChange={handleAddress}
                        provinceInit={myInfor?.address.provinceCode || ''}
                        districtInit={myInfor?.address.districtCode || ''}
                        wardInit={myInfor?.address.wardCode || ''}
                        detailInit={myInfor?.address.detail || ''}
                    />
                ) : (
                    <AddressComponent handleChange={handleAddress} />
                )}
            </div>
            {myInfor?.lastUpdated && (
                <div>
                    <b>Cập nhật lần cuối: </b>
                    <span className="text-xl font-semibold text-success">
                        {myInfor?.lastUpdated}
                    </span>
                </div>
            )}
            <div className="my-4">
                <b className="text-xl">Ngày khởi tạo: </b>
                <span className="text-xl font-semibold text-success">
                    {myInfor?.whenCreated}
                </span>
            </div>
            <div className="flex justify-end">
                <button
                    onClick={handleSubmit}
                    className="rounded-md bg-primary px-3 py-2 font-medium text-white"
                >
                    Cập nhật tài khoản
                </button>
            </div>
        </div>
    );
}
