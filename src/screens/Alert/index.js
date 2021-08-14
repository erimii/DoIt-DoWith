import React, {useState} from 'react';
import Styled from 'styled-components/native';
import Button from '../../components/Button';
import InvitationModal from './InvitationModal';
import { gridWidth, windowWidth } from '../../values';

const Container = Styled.ScrollView`
    margin-left: 16px;
`;

const TestContainer = Styled.TouchableOpacity`
    background: red;
    width: 100px;
    height: 100px;
`;

const AlertConatiner = Styled.View`
    background: #F7F7F9;
    border-radius: 8px;
    margin: 0 16px 12px 16px;
`;

const AlertContent = Styled.Text`
    font-family: 'Pretendard-SemiBold';
    font-size: 14px;
    line-height: 17px;
    color: #1D1D1D;
    margin: 16px 0 8px 14px;
    width: ${windowWidth - 32-14-gridWidth}px;
`;

const AlertDate = Styled.Text`
    font-family: 'Pretendard-Regular';
    font-size: 11px;
    line-height: 13px;
    color: #A9AFB9;
    margin: 0 0 16px 14px;
`;

const ButtonContainer = Styled.View`
    position: absolute;
    right: -16px;
    bottom: -4px;
`;

const Alert = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <Container>
            <TestContainer onPress={() => setModalVisible(true)}/>
            <InvitationModal 
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible} 
            />

            <AlertConatiner>
                <AlertContent>
                    눈알가글 님으로부터 [천리길도 한걸음부터] 미션에 초대 받았어요!
                </AlertContent>
                <AlertDate>
                    2021.08.13.(금)
                </AlertDate>

                <ButtonContainer>
                    <Button
                        label='친구추가'
                        buttonStyle={{
                            width: 100,
                            paddingTop:7,
                            paddingBottom:7
                        }}
                    />
                </ButtonContainer>
            </AlertConatiner>
        </Container>
    );
};
export default Alert;