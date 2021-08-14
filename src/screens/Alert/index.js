import React from 'react';
import Styled from 'styled-components/native';
import titleIcon from '../../images/icons/ic-home-title.png';

const Container = Styled.ScrollView`
    margin-left: 16px;
`;
const TitleContainer = Styled.View`
    flex-direction: row;
    margin: 28px 0 23px 0;
`;

const TitleIcon = Styled.Image``;

const PageTitle = Styled.Text`
    font-family: 'Pretendard-Black';
    font-size: 21px;
    line-height: 25px;
    color: #303030;
    margin-left: 9px;
`;

const Alert = ({navigation}) => {
    return(
        <Container>
            <TitleContainer>
                <TitleIcon source={titleIcon} />
                <PageTitle>
                    알림 
                </PageTitle>
            </TitleContainer>
        </Container>
    );
};
export default Alert;