import React from 'react';
import Styled from 'styled-components/native';
import IconButton from '../../components/IconButton';
import Button from '../../components/Button';
import { gridWidth, windowWidth } from '../../values';

const Container = Styled.ScrollView`
`;

const HeaderTitleContainer = Styled.View`
    flex-direction: row;
    align-items: center;
    padding: 18px 16px;
    border-bottom-width: 1px;
    border-color: #F7F7F9;
`;

const HeaderTitle = Styled.Text`
    font-family: 'Pretendard-Bold'
    font-size: 15px;
    line-height: 18px;
    color: #1D1D1D;
    margin-left: 19px;
`;

const Title = Styled.Text`
    font-family: 'Pretendard-Bold'
    font-size: 21px;
    line-height: 25px;
    color: #1D1D1D;
    margin: 24px 0 23px 21px;
`;


const GuideTextContainer = Styled.View`
    flex-direction: row;
    align-items: center;
    margin:  0 0 12px 21px;
`;

const GuideTextICon = Styled.Image`
    width: 16px;
    height: 16px;
    background: lightgray;
    margin-right: 8px;
`;

const GuideText = Styled.Text`
    font-family: 'Pretendard-Bold'
    font-size: 15px;
    line-height: 18px;
    color: #1D1D1D;
`;

const GuideImgContainer = Styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0 21px;
`;

const GuideImg = Styled.Image`
    width: ${gridWidth*3 +32-5}
    height: 180px;
    background: lightgray;
`;
const ButtonContainer = Styled.TouchableOpacity`
    background: #4388EE;
    padding: 14px 108px;
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
const Certification = () => {
    return(
        <Container>

        <HeaderTitleContainer>
                <IconButton
                    name='temp'
                    onPress={() => navigation.goBack()}
                />
                <HeaderTitle>
                    일상을 건강하게 비타민 충전
                </HeaderTitle>
                </HeaderTitleContainer>

            <Title>인증 가이드</Title>
            <GuideTextContainer>
                <GuideTextICon />
                <GuideText>
                    올바른 인증 방법
                </GuideText>
            </GuideTextContainer>
            <GuideImgContainer>
                <GuideImg />
                <GuideImg />
            </GuideImgContainer>

            <GuideTextContainer>
                <GuideTextICon />
                <GuideText>
                    잘못된 인증 방법
                </GuideText>
            </GuideTextContainer>
            <GuideImgContainer>
                <GuideImg />
                <GuideImg />
            </GuideImgContainer>

            <ButtonContainer onPress={() => {}}>
            <ButtonLabel>
                사진 찍기 / 다시 찍기
            </ButtonLabel>
        </ButtonContainer>
        
        </Container>
    );
};
export default Certification;