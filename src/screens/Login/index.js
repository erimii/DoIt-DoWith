import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.ScrollView`
    margin-left: 16px;
`;

const ButtonWrapper = Styled.TouchableOpacity`
    background: yellow;
`;

const ButtonLabel = Styled.Text``;

const Login = ({navigation, isLogin, setIsLogin}) => {
    return(
        <Container>
            <ButtonWrapper onPress={() => {setIsLogin(true)}}>
                <ButtonLabel>
                    로그인
                </ButtonLabel>
            </ButtonWrapper>

        </Container>
    );
};
export default Login;