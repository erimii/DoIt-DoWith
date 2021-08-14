import React from 'react';
import Styled from 'styled-components/native';
import drawerIcon from '../../images/icons/ic-home-title.png';
import {DrawerActions} from '@react-navigation/native';

const Container = Styled.ScrollView``;

const CertificationButton = Styled.TouchableOpacity`
    background: lightgray;
    width: 100px;
    height: 100px;
`;

const DrawerButtonWrapper = Styled.TouchableOpacity``;

const DrawerIcon = Styled.Image``;

const ChatRoom = ({navigation}) => {
    return(
        <Container>
        <DrawerButtonWrapper  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <DrawerIcon source={drawerIcon}/>
        </DrawerButtonWrapper>
            <CertificationButton onPress={() => navigation.navigate('Certification')} />
        </Container>
    );
};
export default ChatRoom;