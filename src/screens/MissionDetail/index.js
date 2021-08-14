import React from 'react';
import Styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const Container = Styled.ScrollView`
    margin-left: 16px;

`;

const Title = Styled.Text`
    font-family: 'Pretendard-Bold';
    font-size: 21px;
    line-height: 25px
    color: #1D1D1D;
`;

const AdditionalInfoContainer = Styled.View`
    flex-direction: row;
    align-items: center;
`;

const AdditionalInfo = Styled.Text`
    font-family: 'Pretendard-Regular';
    font-size: 13px;
    line-height: 16px;
    color: #484B50;
`;

const MissionImg = Styled.Image`
    background:lightgray;
    width: ${windowWidth-32}px;
    height: ${windowWidth-32}px;
`;
const ButtonContainer = Styled.TouchableOpacity`
background: #4388EE;
padding: 12px 154px;
border-top-left-radius: 2px;
border-bottom-left-radius: 2px;

`;

const ButtonLabel = Styled.Text`
    font-family: 'Pretendard-Bold';
font-size: 16px;
line-height: 19px;
text-align: center;
color: #FFFFFF;
`;
const MissionDetail = () => {
    return(
        <Container>

        <Title>
            레모나와 함께하는
        </Title>
        <Title>
            일상을 건강하게 비타민 충전
        </Title>
        
        <AdditionalInfoContainer>
            <AdditionalInfo>
                인원
            </AdditionalInfo>
            <AdditionalInfo>
                2~4인
            </AdditionalInfo>
        </AdditionalInfoContainer>

        <AdditionalInfoContainer>
            <AdditionalInfo>
                기간
            </AdditionalInfo>
            <AdditionalInfo>
                2021.08.02. ~ 2021.08.15.
            </AdditionalInfo>
        </AdditionalInfoContainer>

        <AdditionalInfoContainer>
            <AdditionalInfo>
                리워드
            </AdditionalInfo>
            <AdditionalInfo>
                종합 비타민 세트
            </AdditionalInfo>
        </AdditionalInfoContainer>

        <MissionImg />

        <ButtonContainer onPress={() => {}}>
            <ButtonLabel>
                두잇?
            </ButtonLabel>
        </ButtonContainer>

        </Container>
    );
};
export default MissionDetail;