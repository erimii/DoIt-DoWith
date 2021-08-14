import React from 'react';
import Styled from 'styled-components/native';
import {gridWidth, windowWidth} from '../../../values';
import modifyIcon from '../../../images/icons/ic-home-title.png';

const Container = Styled.View`
    margin: 0 16px 4px 0;
    background: #F7F7F9;
    border-radius: 8px;
    align-items: center;
`;

const ButtonWrapper = Styled.TouchableOpacity`
    position: absolute;
    right:0;
    top:0;
    margin: 14px 14px 0 0;
`;

const ButtonIcon = Styled.Image``;

const ProfileImage = Styled.Image`
    background: #ffffff;
    width: ${gridWidth * 2 + 16}px;
    height: ${gridWidth * 2 + 16}px;
    border-radius: 88px;
    margin: 22px 0 12px 0;
`;

const UserName = Styled.Text`
    font-family: 'Pretendard-Bold';
    font-size: 14px;
    line-height: 17px;
    color: #1D1D1D;
`;

const MissionStatusContainer = Styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: ${windowWidth - 60}px;
    border-top-width: 1px;
    border-color: #FFFFFF;
    margin: 18px 0 24px 0;
    padding-top: 20px;
`;

const MissionStatusWrapper = Styled.View`
    align-items: center;

`;

const MissionStatusTitle = Styled.Text`
    font-family: 'Pretendard-SemiBold';
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #A9AFB9;
`;

const MissionStatusText = Styled.Text`
    font-family: 'Pretendard-Bold';
    font-size: 14px;
    line-height: 17px;
    color: #484B50;
    margin-top: 8px;
`;

const UserInformation = () => {
    return(
        <Container>
            <ButtonWrapper>
                <ButtonIcon source={modifyIcon} />
            </ButtonWrapper>
            <ProfileImage />
            <UserName>
                이루비
            </UserName>

            <MissionStatusContainer>
                <MissionStatusWrapper>
                    <MissionStatusTitle>
                        참여 횟수
                    </MissionStatusTitle>
                    <MissionStatusText>
                        m번
                    </MissionStatusText>
                </MissionStatusWrapper>
                <MissionStatusWrapper>
                    <MissionStatusTitle>
                        성공률
                    </MissionStatusTitle>
                    <MissionStatusText>
                        90%
                    </MissionStatusText>
                </MissionStatusWrapper>
                <MissionStatusWrapper>
                    <MissionStatusTitle>
                        보유 뱃지
                    </MissionStatusTitle>
                    <MissionStatusText>
                        n개
                    </MissionStatusText>
                </MissionStatusWrapper>
            </MissionStatusContainer>
        </Container>
    );
};
export default UserInformation;