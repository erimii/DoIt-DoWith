import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
    background: #4388EE;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    align-items: center;
`;

const Label = Styled.Text`
    font-family: 'Pretendard-Bold';
    color: #ffffff;
`;


const IconButton = ({ label, buttonStyle, labelStyle, onPress }) => {
    const imgSource ={
        temp: require('../../images/icons/ic-home-title.png'),
    };

    return (
        <Container
            style={buttonStyle}
            onPress={() => {
                    onPress();
            }}>
            <Label style={labelStyle}>
                {label}
            </Label>
        </Container>
    );
};

export default IconButton;