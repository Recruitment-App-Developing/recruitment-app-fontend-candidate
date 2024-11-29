import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Button,
    Checkbox,
    Dialog,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import { toast } from 'react-toastify';
import { fetchUpdateEducation } from '~/services/cvProfileService';

export default function EducationNewModal({ open, setOpen, setEducationList }) {
    const startYear = 1925;
    const currentYear = new Date().getFullYear();

    const [edu, setEdu] = useState({
        educationId: '',
        schoolName: '',
        mainIndustry: '',
        startTime: '-',
        endTime: '-',
        detail: '',
    });
    const [checked, setChecked] = useState(false);

    const handleMonth = (oldTime, newMonth) => {
        const temp = oldTime.split('-');
        if (newMonth < 10) {
            return `0${newMonth}-${temp[1]}`;
        }
        return `${newMonth}-${temp[1]}`;
    };

    const handleYear = (oldTime, newYear) => {
        const temp = oldTime.split('-');
        return `${temp[0]}-${newYear}`;
    };

    const convertMonthOrYear = (dateString, type) => {
        const [month, year] = dateString.split('-').map(Number);
        if (type === 'Month') return month;
        return year;
    };

    const handleSubmit = () => {
        fetchUpdateEducation(edu).then((data) => {
            toast.success(data.message);
            setEducationList(data.data);
            setOpen(false);
        });
    };

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="responsive-dialog-title"
            maxWidth="650px"
            PaperProps={{
                style: {
                    borderRadius: '4px',
                    width: '800px',
                    padding: '15px 30px',
                },
            }}
        >
            <div className="flex h-full w-full flex-col gap-2">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Học vấn</h2>
                    <button onClick={() => setOpen(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <TextField
                    label="Trường học *"
                    variant="outlined"
                    value={edu.schoolName}
                    onChange={(e) =>
                        setEdu({
                            ...edu,
                            schoolName: e.target.value,
                        })
                    }
                />
                <TextField
                    label="Chuyên ngành *"
                    variant="outlined"
                    value={edu.mainIndustry}
                    onChange={(e) =>
                        setEdu({
                            ...edu,
                            mainIndustry: e.target.value,
                        })
                    }
                />
                <h2 className="font-medium">Thời gian</h2>
                <div className="flex items-center">
                    <Checkbox
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <h2>Tôi đang học ở đây</h2>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <h3>Bắt đầu</h3>
                        <div>
                            <FormControl
                                sx={{ m: 1, minWidth: 120 }}
                                size="small"
                            >
                                <InputLabel id="startMonth">Tháng</InputLabel>
                                <Select
                                    labelId="startMonth"
                                    value={convertMonthOrYear(
                                        edu.startTime,
                                        'Month',
                                    )}
                                    label="Tháng"
                                    onChange={(e) =>
                                        setEdu({
                                            ...edu,
                                            startTime: handleMonth(
                                                edu.startTime,
                                                e.target.value,
                                            ),
                                        })
                                    }
                                >
                                    <MenuItem value="">
                                        <em>Chọn 1 tháng</em>
                                    </MenuItem>
                                    {Array.from({ length: 12 }).map(
                                        (_, index) => (
                                            <MenuItem
                                                key={index}
                                                value={index + 1}
                                            >
                                                Tháng {index + 1}
                                            </MenuItem>
                                        ),
                                    )}
                                </Select>
                            </FormControl>
                            <FormControl
                                sx={{ m: 1, minWidth: 120 }}
                                size="small"
                            >
                                <InputLabel id="startYear">Năm</InputLabel>
                                <Select
                                    labelId="startYear"
                                    value={convertMonthOrYear(
                                        edu.startTime,
                                        'Year',
                                    )}
                                    label="Year"
                                    onChange={(e) =>
                                        setEdu({
                                            ...edu,
                                            startTime: handleYear(
                                                edu.startTime,
                                                e.target.value,
                                            ),
                                        })
                                    }
                                >
                                    <MenuItem value="">
                                        <em>Chọn 1 năm</em>
                                    </MenuItem>
                                    {Array.from({
                                        length: currentYear - startYear + 1,
                                    }).map((_, index) => (
                                        <MenuItem
                                            key={index}
                                            value={currentYear - index}
                                        >
                                            Năm {currentYear - index}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    {!checked && (
                        <div className="flex flex-col">
                            <h3>Kết thúc</h3>
                            <div>
                                <FormControl
                                    sx={{ m: 1, minWidth: 120 }}
                                    size="small"
                                >
                                    <InputLabel id="endMonth">Tháng</InputLabel>
                                    <Select
                                        labelId="endMonth"
                                        value={convertMonthOrYear(
                                            edu.endTime,
                                            'Month',
                                        )}
                                        label="Tháng"
                                        onChange={(e) =>
                                            setEdu({
                                                ...edu,
                                                endTime: handleMonth(
                                                    edu.endTime,
                                                    e.target.value,
                                                ),
                                            })
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>Chọn 1 tháng</em>
                                        </MenuItem>
                                        {Array.from({ length: 12 }).map(
                                            (_, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={index + 1}
                                                >
                                                    Tháng {index + 1}
                                                </MenuItem>
                                            ),
                                        )}
                                    </Select>
                                </FormControl>
                                <FormControl
                                    sx={{ m: 1, minWidth: 120 }}
                                    size="small"
                                >
                                    <InputLabel id="endYear">Năm</InputLabel>
                                    <Select
                                        labelId="endYear"
                                        value={convertMonthOrYear(
                                            edu.endTime,
                                            'Year',
                                        )}
                                        label="Year"
                                        onChange={(e) =>
                                            setEdu({
                                                ...edu,
                                                endTime: handleYear(
                                                    edu.endTime,
                                                    e.target.value,
                                                ),
                                            })
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>Chọn 1 năm</em>
                                        </MenuItem>
                                        {Array.from({
                                            length: currentYear - startYear + 1,
                                        }).map((_, index) => (
                                            <MenuItem
                                                key={index}
                                                value={currentYear - index}
                                            >
                                                Năm {currentYear - index}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-medium">Mô tả chi tiết</h2>
                    <ReactQuill
                        theme="snow"
                        placeholder="Mô tả chi tiết quá trình học để nhà tuyển dụng có thể hiểu bạn hơn"
                        value={edu.detail}
                        onChange={(e) => setEdu({ ...edu, detail: e })}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleSubmit}
                    >
                        Thêm mới
                    </Button>
                </div>
            </div>
        </Dialog>
    );
}
