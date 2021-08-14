import React, {useState} from 'react';
import Styled from 'styled-components/native';
import Modal from "react-native-modal";

const Container = Styled.View`
`;

const ModalContainer = Styled.View``;

const ModalTitle = Styled.Text``;

const MissionDetailContainer = Styled.View`
    flex-direction: row;
`;

const 

const Alert = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    
    return(
        <Container>
            <Modal
                isVisible={modalVisible}
                onBackdropPress={()=> setModalVisible(false)}
                backdropColor='rgba(48, 48, 48, 0.8)'
                backdropOpacity={1}
            >
                <ModalContainer>
                </ModalContainer>
            </Modal>

        </Container>
    );
};
export default Alert;