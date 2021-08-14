import React from 'react';
import Styled from 'styled-components/native';
import {useNavigation} from "@react-navigation/native";
import testImg from '../../../images/img/home-test-img.png';
import testProfile from '../../../images/icons/ic-home-title.png';

const Container = Styled.ScrollView``;

const BackImage = Styled.ImageBackground`
    margin: 0 16px 22px 16px;
    padding: 24px 0 20px 16px;
`;

const Title = Styled.Text`
    font-family: 'Pretendard-Bold';
    font-size: 14px;
    line-height: 17px;
    color: #1D1D1D;
`;

const AdditionalInfoContainer = Styled.View`
    flex-direction: row;
    align-items: center;
`;

const AdditionalInfo = Styled.Text`
    font-family: 'Pretendard-Regular';
    font-size: 10px;
    line-height: 12px;
    color: #30353D;
`;

const VerticalLine = Styled.View`
    width: 0.5px;
    height:6px;
    background: #999999;
    margin: 0 6px;
`;

const ProfileImgContainer = Styled.View`
    flex-direction: row;
`;

const ProfileImg = Styled.Image``;

const ButtonWrapper = Styled.View`
  position: absolute;
  justify-content: flex-end;
  align-items:flex-end;
  right: -16px;
  bottom: -10px;
`;

const ChatButton = Styled.TouchableOpacity`
background: #4388EE;
padding: 11px 27px;
border-top-left-radius: 4px;
border-bottom-left-radius: 4px;

`;

const ButtonLabel = Styled.Text`
font-size: 14px;
line-height: 17px;
text-align: center;
color: #FFFFFF;
`;

const Doing = ({}) => {
    const navigation = useNavigation();
    return(
        <Container>
            <BackImage source={testImg} imageStyle={{ borderRadius: 8, opacity:0.6}}>
                <Title>
                    레모나와 함께하는 
                </Title>
                <Title style={{fontSize:16, lineHeight:19}}>
                    일상을 건강하게 비타민 충전
                </Title>
                <AdditionalInfoContainer>
                    <AdditionalInfo>
                        2021.08.02. ~ 2021.08.15.
                    </AdditionalInfo>
                    <VerticalLine />
                    <AdditionalInfo>
                        매일
                    </AdditionalInfo>
                </AdditionalInfoContainer>
                <ProfileImgContainer>
                    <ProfileImg source={testProfile} />
                    <ProfileImg source={testProfile} />
                </ProfileImgContainer>

                <ButtonWrapper>
                    <ChatButton onPress={() => {navigation.navigate('ChatRoom')}}>
                        <ButtonLabel>
                            [두잇나우! 렛츠두잇!]
                        </ButtonLabel>
                    </ChatButton>
                </ButtonWrapper>
            </BackImage>
        
        </Container>
    );
};
export default Doing;