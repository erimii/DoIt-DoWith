import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.ScrollView`
    margin-left: 16px;
`;

const Title = Styled.Text`

`;

const GuideTextContainer = Styled.View`
    flex-direction: row;
    align-items: center;
`;

const GuideTextICon = Styled.Image`
    width: 16px;
    height: 16px;
    background: lightgray;
`;

const GuideText = Styled.Text``;

const GuideImgContainer = Styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0 16px 0 0;
`;

const GuideImg = Styled.Image`
    width: 180px;
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

            <Title>인증 가이드</Title>
            <GuideTextContainer>
                <GuideTextICon />
                <GuideText>
                    이렇게 찍어주세요!
                </GuideText>
            </GuideTextContainer>
            <GuideImgContainer>
                <GuideImg />
                <GuideImg />
            </GuideImgContainer>

            <GuideTextContainer>
                <GuideTextICon />
                <GuideText>
                    이렇게는 안돼요!
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