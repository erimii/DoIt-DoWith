import React, {useState} from 'react';
import Styled from 'styled-components/native';
import Modal from "react-native-modal";
import {windowWidth, gridWidth} from '../../../values';
import closeIcon from '../../../images/icons/ic-home-title.png';
import IconButton from '../../../components/IconButton';

const Container = Styled.View`
`;

const ModalContainer = Styled.View`
    width: ${windowWidth - 32}px; 
    background: #FFFFFF;
    border-radius: 8px;
`;

const ModalTitleContainer = Styled.View`
    flex-direction: row;
    margin: 16px 12px 20px 20px;
`;

const ModalTitleWrapper = Styled.View`
`;

const ModalTitle = Styled.Text`
    font-family: 'Pretendard-Bold';
    font-size: 18px;
    line-height: 22px;
    color: #1D1D1D;
    margin-top: 6px;
`;

const MissionDetailContainer = Styled.View`
    margin: 0 0 24px 20px;
`;

const LineContainer = Styled.View`
    flex-direction: row;
`;

const MissionBoldText = Styled.Text`
    font-family: 'Pretendard-SemiBold';
    font-size: 13px;
    line-height: 16px;
    color: #80868F;
    width: ${gridWidth}px;
`;

const MissionText = Styled.Text`
    font-family: 'Pretendard-Regular';
    font-size: 13px;
    line-height: 16px;
    color: #80868F;
`;

const ParticipantContainer = Styled.View``;

const ProfileImgContainer = Styled.View`
    flex-direction: row;
    margin-top: 8px;
`;

const ProfileImg = Styled.Image`
    width: 24px;
    height: 24px;
    background: lightgray;
    margin-right: 6px;
    border-radius: 88px;
`;

const ButtonsContainer = Styled.View`
    flex-direction: row;
    margin: 0 14px 20px 14px;
    justify-content: space-between;
`;

const ButtonWrapper = Styled.TouchableOpacity`
    width: ${gridWidth*3+32-14}px;
    align-items: center;
    background: #4388EE;
    border-radius: 2px;
    padding: 9px 0;
`;

const ButtonLabel = Styled.Text``;

const InvitationModal = ({modalVisible, setModalVisible}) => {
    
    return(
        <Container>
            <Modal
                isVisible={modalVisible}
                onBackdropPress={()=> setModalVisible(false)}
                backdropColor='rgba(48, 48, 48, 0.8)'
                backdropOpacity={1}
                style={{margin:0, alignItems:'center',}}
            >
                <ModalContainer>
                    <ModalTitleContainer>
                        <ModalTitleWrapper>
                            <ModalTitle>
                                눈알가글 님으로부터
                            </ModalTitle>
                            <ModalTitle>
                                미션에 초대 받았어요!
                            </ModalTitle>
                        </ModalTitleWrapper>
                        <IconButton
                            name='temp'
                            onPress={()=>setModalVisible(false)}
                            style={{
                                marginLeft: 'auto',
                            }}
                        />
                    </ModalTitleContainer>

                    <MissionDetailContainer>
                        <LineContainer>
                            <MissionBoldText>
                                리워드
                            </MissionBoldText>
                            <MissionText>
                                [배달의 민족] 5만원 쿠폰
                            </MissionText>
                        </LineContainer>
                        <LineContainer style={{marginTop:12, marginBottom:12}}>
                            <MissionBoldText>
                                기간
                            </MissionBoldText>
                            <MissionText>
                                8/9(월)부터 1주 동안 매일
                            </MissionText>
                        </LineContainer>
                        <LineContainer>
                            <MissionBoldText>
                                인원
                            </MissionBoldText>
                            <ParticipantContainer>
                                <MissionText>
                                    2~5인
                                </MissionText>
                                <ProfileImgContainer>
                                    <ProfileImg />
                                    <ProfileImg />
                                    <ProfileImg />
                                    <ProfileImg />
                                    <ProfileImg />
                                </ProfileImgContainer>
                            </ParticipantContainer>
                        </LineContainer>
                    </MissionDetailContainer>

                    <ButtonsContainer>
                        <ButtonWrapper>
                            <ButtonLabel>수락</ButtonLabel>
                        </ButtonWrapper>
                        <ButtonWrapper
                            onPress={() => setModalVisible(false)}
                            style={{backgroundColor: '#80868F'}}
                        >
                            <ButtonLabel>거절</ButtonLabel>
                        </ButtonWrapper>
                    </ButtonsContainer>
                </ModalContainer>
            </Modal>

        </Container>
    );
};
export default InvitationModal;