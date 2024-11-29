import { createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteToken, getToken, setToken } from '~/utils/storageUtil';

const initialState = { isAuthenticated: !!getToken() };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            setToken(action.payload);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            deleteToken();
            localStorage.removeItem('user');
            toast.success('Đăng xuất tài khoản thành công');
        },
    },
});

export const { login, logout } = authSlice.actions;
export const authSelector = (state) => state.auth;

export default authSlice.reducer;
