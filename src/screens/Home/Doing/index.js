import React from 'react';
import Styled from 'styled-components/native';
import {useNavigation} from "@react-navigation/native";
import pageTitleIcon from '../../../images/img/home-test-img.png';
import {gridWidth} from '../../../values';
import Button from '../../../components/Button';

const Container = Styled.ScrollView``;

const BackImage = Styled.ImageBackground`
    margin: 0 16px 22px 16px;
    padding: 20px 0 20px 16px;
`;

const Title = Styled.Text`
    font-family: 'Pretendard-Bold';
    font-size: 14px;
    line-height: 17px;
    color: #1D1D1D;
`;

const DateInfo = Styled.Text`
    font-family: 'Pretendard-Regular';
    font-size: 11px;
    line-height: 13px;
    color: #80868F;
    margin: 8px 0 12px 0;
`;

const CertificationInfo = Styled.Text`
    font-family: 'Pretendard-Medium';
    font-size: 11px;
    line-height: 13px;
    color: #484B50;
    margin: 0 0 8px 0;
`;

const ProfileImagesContainer = Styled.View`
    flex-direction: row;
`;

const ProfileImg = Styled.Image`
    width: 21px;
    height: 21px;
    background:#ffffff;
    border-radius: 88px;
    margin-right: 6px;
`;

const ProfileImgWrapper = Styled.View``;

const ImgWrapper = Styled.View`
    position: absolute;
    justify-content: center;
    align-items:center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(67, 136, 238, 0.3);
    width: 21px;
    height: 21px;
    border-radius: 88px;
`;

const CheckIcon = Styled.Image`
    width: 7px;
    height: 7px;
    background: pink;
`;

const ButtonWrapper = Styled.View`
  position: absolute;
  justify-content: flex-end;
  align-items:flex-end;
  right: -16px;
  bottom: -10px;
`;

const Doing = ({}) => {
    const navigation = useNavigation();
    return(
        <Container>
            <BackImage source={pageTitleIcon} imageStyle={{ borderRadius: 8, opacity:0.6}}>
                <Title>
                    레모나와 함께하는 
                </Title>
                <Title style={{fontSize:16, lineHeight:19, marginTop:2}}>
                    일상을 건강하게 비타민 충전
                </Title>

                <DateInfo>
                    8/9(월)부터 1주 동안 매일
                </DateInfo>

                <CertificationInfo>
                    오늘 인증 현황
                </CertificationInfo>

                <ProfileImagesContainer>
                    <ProfileImgWrapper>
                        <ProfileImg />
                        <ImgWrapper>
                            <CheckIcon />
                        </ImgWrapper>
                    </ProfileImgWrapper>
                    <ProfileImgWrapper>
                        <ProfileImg />
                    </ProfileImgWrapper>
                </ProfileImagesContainer>

                <ButtonWrapper>
                    <Button 
                        label='아직 안 했어!'
                        onPress={() => {navigation.navigate('ChatRoom')}}
                        buttonStyle={{
                            paddingTop:11,
                            paddingBottom:12,
                            width: gridWidth*3+48
                        }}
                        labelStyle={{
                            fontFamily: 'Pretendard-SemiBold',
                            fontSize: 14,
                            lineHeight: 17
                        }}
                    />
                </ButtonWrapper>
            </BackImage>
        
        </Container>
    );
};
export default Doing;