import clsx from 'clsx';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faGoogle,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import styles from './FormLogin.module.scss';
import InputTextIcon from '../InputTextIcon';
import LoginButton from './LoginButton';
import IconLoginButton from './IconLoginButton';
import CheckBox from '../CheckBox';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '~/services/authService';
import { toast } from 'react-toastify';
import { setToken } from '~/utils/storageUtil';
import useAuth from '~/hooks/useAuth';

function FormLogin() {
    const [form, setForm] = useState({
        username: '',
        password: '',
    });
    const { login } = useAuth();
    const navigate = useNavigate();

    const [policy, setPolicy] = useState(true);

    const handleSubmit = () => {
        loginApi(form).then((data) => {
            toast.success(data.message);
            login(data.data.token);
            localStorage.setItem('user', JSON.stringify(data.data.infor));
            navigate('/');
        });
    };

    return (
        <div className="wrapper">
            <form className="w-[300px] md:w-[600px]">
                <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-bold text-gray-700"
                >
                    Email
                </label>
                <InputTextIcon
                    inputId="email"
                    className="mb-6 w-full"
                    type="text"
                    value={form.username}
                    onChange={(e) =>
                        setForm({ ...form, username: e.target.value })
                    }
                    placeholder="Enter your email"
                    leftIcon={
                        <FontAwesomeIcon icon={faEnvelope} color="green" />
                    }
                />
                <label
                    htmlFor="password"
                    className="mb-3 block text-sm font-bold text-gray-700"
                >
                    Password
                </label>
                <InputTextIcon
                    inputId="password"
                    className="mb-5 mt-2 w-full"
                    type="password"
                    value={form.password}
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                    }
                    placeholder="Enter your password"
                    leftIcon={<FontAwesomeIcon icon={faLock} color="green" />}
                />
                <div className="mb-6 h-5 w-[600px] text-right text-sm font-medium leading-5 text-success">
                    <a href="#">Quên mật khẩu</a>
                </div>
                <LoginButton
                    type="button"
                    onClick={handleSubmit}
                    className="h-full w-full bg-green-500 text-lg font-medium leading-5 text-white"
                    bg_color="red"
                >
                    Đăng nhập
                </LoginButton>
                <p className="mb-5 mt-5 text-center text-sm font-normal text-[#6f7882]">
                    Hoặc đăng nhập bằng
                </p>
                <div className="container flex h-10 flex-row gap-2">
                    <IconLoginButton
                        className="text- h-full w-full rounded-full bg-gradient-to-b from-red-400 to-red-600 p-4
                            text-white shadow-md transition-all"
                        content="Google"
                        leftIcon={
                            <FontAwesomeIcon
                                icon={faGoogle}
                                style={{ color: '#ffffff' }}
                            />
                        }
                        disable={!policy}
                    />
                    <IconLoginButton
                        className="text- h-full w-full rounded-full bg-gradient-to-b from-blue-500 to-blue-600 p-4
                            text-white shadow-md transition-all"
                        content="Facebook"
                        leftIcon={
                            <FontAwesomeIcon
                                icon={faFacebook}
                                style={{ color: '#ffffff' }}
                            />
                        }
                    />
                    <IconLoginButton
                        className="text- h-full w-full rounded-full bg-gradient-to-b from-blue-700 to-blue-800 p-4
                            text-white shadow-md transition-all"
                        content="Linkedin"
                        leftIcon={
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                style={{ color: '#ffffff' }}
                            />
                        }
                    />
                </div>

                <div className="container mt-3 flex h-10 w-full flex-row gap-2">
                    <CheckBox
                        id="policy"
                        value={policy}
                        callBackSuccess={setPolicy}
                    />
                    <p className="flex-grow">
                        <label
                            htmlFor="policy"
                            className="text-sm font-normal leading-5 text-[#4d5965]"
                        >
                            Bằng việc đăng nhập bằng tài khoản mạng xã hội, tôi
                            đã đọc và đồng ý với{' '}
                            <a
                                target="_blank"
                                href="#"
                                className="text-green-600"
                            >
                                Điều khoản dịch vụ
                            </a>{' '}
                            và{' '}
                            <a
                                target="_blank"
                                href="#"
                                className="text-green-600"
                            >
                                Chính sách bảo mật
                            </a>{' '}
                            của TopCV
                        </label>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default FormLogin;
