import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.ScrollView``;

const Sibal = Styled.View`
    width:100px;
    height:100px;
    background: red;
`;

const CloseButton = Styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    background: red;
`;

const ChatRoomDrawer = ({navigation, props}) => {
    return(
        <Container>
            <CloseButton onPress={() =>{props.navigation.closeDrawer()}}>
            </CloseButton>
        </Container>
    );
};
export default ChatRoomDrawer;