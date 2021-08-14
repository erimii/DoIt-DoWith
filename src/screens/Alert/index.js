import React, {useState} from 'react';
import Styled from 'styled-components/native';
import InvitationModal from './InvitationModal';

const Container = Styled.ScrollView`
    margin-left: 16px;
`;

const ButtonContainer = Styled.TouchableOpacity`
    background: red;
    width: 100px;
    height: 100px;
`;

const Alert = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <Container>
            <ButtonContainer onPress={() => setModalVisible(true)}/>
            <InvitationModal 
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible} 
            />
        </Container>
    );
};
export default Alert;