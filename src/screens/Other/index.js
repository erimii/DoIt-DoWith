import React from 'react';
import Styled from 'styled-components/native';
import titleIcon from '../../images/icons/ic-home-title.png';
import UserInformation from './UserInformation';

import * as Animatable from 'react-native-animatable';

const Container = Styled.ScrollView`
    margin-left: 16px;
`;
const TitleContainer = Styled.View`
    flex-direction: row;
    margin: 28px 0 23px 0;
`;

const TitleIcon = Styled.Image``;

const PageTitle = Styled.Text`
    font-family: 'Pretendard-Black';
    font-size: 21px;
    line-height: 25px;
    color: #303030;
    margin-left: 9px;
`;

const AlertWrapper = Styled.TouchableOpacity`
    margin: 0 16px 0 auto;
`;

const AlertIcon = Styled.Image``;

const ButtonWrapper = Styled.TouchableOpacity`
    border-color: #EAEBED;
`;

const ButtonLabel = Styled.Text`
    font-size: 14px;
    line-height: 17px;
    color: #30353D;
    font-family: 'Pretendard-Bold';
    padding: 20px 4px;
`;

const Other = ({navigation}) => {
    return(
        <Container>
            <TitleContainer>
                <TitleIcon source={titleIcon} />
                <PageTitle>
                    더보기 
                </PageTitle>

                <AlertWrapper onPress={() => {navigation.navigate('Alert')}}>
                    <Animatable.View animation="swing" iterationCount="infinite" iterationDelay={1000}>
                        <AlertIcon source={titleIcon} />
                    </Animatable.View>
                </AlertWrapper>
            </TitleContainer>

            <UserInformation />

            <ButtonWrapper onPress={() => {}}>
                <ButtonLabel>
                    공지사항
                </ButtonLabel>
            </ButtonWrapper>
            <ButtonWrapper
                style={{
                    borderTopWidth: 0.5,
                    borderBottomWidth: 0.5
                }}
                onPress={() => {}}
            >
                <ButtonLabel>
                    고객센터
                </ButtonLabel>
            </ButtonWrapper>
            <ButtonWrapper onPress={() => {}}>
                <ButtonLabel>
                    앱 설정
                </ButtonLabel>
            </ButtonWrapper>
        </Container>
    );
};
export default Other;