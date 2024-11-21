import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchRegisterCandidate } from '~/services/authService';

export default function RegisterAccountForm() {
    const navigate = useNavigate();

    const [accountRequest, setAccountRequest] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    });

    const handleSubmit = () => {
        fetchRegisterCandidate(accountRequest).then((data) => {
            toast.success(data.message);
            navigate(`/`);
        });
    };

    const handleChange = (key, value) => {
        setAccountRequest((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <div className="flex flex-col gap-10">
            <TextField
                id="input-with-icon-textfield"
                label="Tên đăng nhập"
                fullWidth
                onChange={(e) => handleChange('username', e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FontAwesomeIcon icon={faUser} />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            />
            <TextField
                id="input-with-icon-textfield"
                label="Email"
                fullWidth
                onChange={(e) => handleChange('email', e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            />
            <TextField
                id="input-with-icon-textfield"
                label="Mật khẩu"
                fullWidth
                onChange={(e) => handleChange('password', e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FontAwesomeIcon icon={faLock} />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            />
            <TextField
                id="input-with-icon-textfield"
                label="Nhập lại mật khẩu"
                fullWidth
                onChange={(e) =>
                    handleChange('confirmPassword', e.target.value)
                }
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FontAwesomeIcon icon={faLock} />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            />
            <button
                onClick={handleSubmit}
                className="bg-success w-full rounded-md py-3 text-2xl font-semibold text-white"
            >
                Đăng ký
            </button>
        </div>
    );
}
