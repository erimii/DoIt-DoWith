import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
`;

const Icon = Styled.Image``;


const IconButton = ({ name, style, onPress }) => {
    const imgSource ={
        temp: require('../../images/icons/ic-home-title.png'),
    };

    return (
        <Container
            style={style}
            onPress={() => {
                    onPress();
            }}>
            <Icon source={imgSource[name]} />
        </Container>
    );
};

export default IconButton;