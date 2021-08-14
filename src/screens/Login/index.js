import React, { useEffect, useState } from 'react';
import Styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import { logout } from '@react-native-seoul/kakao-login';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { onLogin } from '../../store/authSlice';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Container = Styled.View`
    flex:1;
    margin-left: 16px;
    margin-right: 16px;
    padding-top: 61px;
    padding-bottom: 28px;
`;
const TitleContainer = Styled.View`
    height:184px;
    width: 100%;
    justify-content: center;
`;
const MainTextWrapper = Styled.View`
    height: 116px;
    margin-bottom: 24px;
    justify-content: center;
`;
const Title = Styled.Text`
    font-family: 'Pretendard-Black';
    font-size: 48px;
`;
const SubTextWrapper = Styled.View`
    height :44px;
    justify-content: center;
`;
const SubTitle = Styled.Text`
    font-family: 'Pretendard-SemiBold';
    font-size: 16px;
`;
const ImageContainer = Styled.View`
   height:300px;
   margin-top: 24px;
   margin-bottom: 24px;
   background: red;
`;
const ButtonWrapper = Styled.TouchableOpacity`
    height:44px;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: #FEE500;
`;

const ButtonLabel = Styled.Text`

`;

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const login = () => dispatch(onLogin);

    const { navigate } = useNavigation();
    const auth = useSelector(state => state.auth);
    useEffect(() => {
        const { isAuthenticated } = auth;
        if (isAuthenticated) {
            navigate('Tabs');
        }
    }, [auth]);

    const onLogout = async () => {
        try {
            const message = await logout();
            await AsyncStorage.removeItem('@token').then(() => console.log('removed')).catch((err) => console.log(err));
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <TitleContainer>
                <MainTextWrapper>
                    <Title>두잇?</Title>
                    <Title>두윗!</Title>
                </MainTextWrapper>
                <SubTextWrapper>
                    <SubTitle>[코로나 블루,</SubTitle>
                    <SubTitle>함께하면 우울하지 않아!]</SubTitle>
                </SubTextWrapper>
            </TitleContainer>

            <ImageContainer>

            </ImageContainer>

            <ButtonWrapper onPress={login}>
                <ButtonLabel>
                    카카오 로그인
                </ButtonLabel>
            </ButtonWrapper>
            <ButtonWrapper onPress={onLogout}>
                <ButtonLabel>
                    카카오 로그아웃
                </ButtonLabel>
            </ButtonWrapper>
        </Container>
    );
};
export default Login;