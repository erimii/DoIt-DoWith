import { createSlice } from '@reduxjs/toolkit';
import { login } from '@react-native-seoul/kakao-login';
import { clearErrors, returnErrors } from './errorSlice';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: null,
        id: null,
        email: '',
        name:'',
        profileUrl:'',
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
        },
        loginFail: (state, action) => {
            state.isAuthenticated = null;
            state.id = null,
            state.email = '';
        },
    }
});

export const onLogin = async (dispatch, getState) => {
    try {
        const token = await login();
        dispatch(loginSuccess()); // 나중에 빼야함 debug용
        if (token) {
            await AsyncStorage.setItem('@token', JSON.stringify(token));
            await axios.get('http://172.30.1.27:8080/members/oauthKakao', {
                headers: {
                    'Authorization': token['accessToken'],
                }
            }).then((res) => {
                    console.log(res);
                    dispatch(clearErrors());
                    dispatch(loginSuccess());
            }).catch((err) => {dispatch(returnErrors('서버 오류', 500))});
        }
    }
    catch (err) {
        dispatch(loginFail());
        dispatch(returnErrors('로그인 오류', 500));
    }

}
export const { loginSuccess, loginFail } = authSlice.actions;
export default authSlice;