import React from 'react';
import Styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import titleIcon from '../../images/icons/ic-home-title.png';
import { windowWidth } from '../../values';

const Container = Styled.ScrollView`
    margin-left: 16px;
`;
const TitleContainer = Styled.View`
    flex-direction: row;
    margin: 28px 0 27px 0;
`;

const TitleIcon = Styled.Image``;

const PageTitle = Styled.Text`
    font-family: 'Pretendard-Black';
    font-size: 21px;
    line-height: 25px;
    color: #303030;
`;

const MissionImg = Styled.Image`
    background:lightgray;
    width: ${windowWidth-32}px;
    height: ${windowWidth-32}px;
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

const VerticalLine = Styled.View`
    width: 1px;
    height:6px;
    background: #A9AFB9;
    margin: 0 8px;
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

const Mission = ({navigation}) => {
    return(
        <Container>
        <TitleContainer>
            <TitleIcon source={titleIcon} />
            <PageTitle>
                두잇?? 여기모여라??
            </PageTitle>
        </TitleContainer>

        <MissionImg />

        <Title>
            레모나와 함께하는
        </Title>
        <Title>
            일상을 건강하게 비타민 충전
        </Title>

        <AdditionalInfoContainer>
            <AdditionalInfo>
                2~4인
            </AdditionalInfo>
            <VerticalLine />
            <AdditionalInfo>
                2021.08.02. ~ 2021.08.15.
            </AdditionalInfo>
        </AdditionalInfoContainer>

        <ButtonContainer onPress={() => {navigation.navigate('MissionDetail')}}>
            <ButtonLabel>
                두잇?
            </ButtonLabel>
        </ButtonContainer>
        </Container>
    );
};
export default Mission;