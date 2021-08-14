import React from 'react';
import Styled from 'styled-components/native';
import titleIcon from '../../images/icons/ic-home-title.png';

const Container = Styled.ScrollView`
    margin-left: 16px;
`;
const TitleContainer = Styled.View`
    flex-direction: row;
    margin: 28px 0 27px 0;
`;

const TitleIcon = Styled.Image``;

const PageTitle = Styled.Text`
    font-family: 'Pretendard-Black';
    font-size: 21px;
    line-height: 25px;
    color: #303030;
`;
const Friend = () => {
    return(
        <Container>
            <TitleContainer>
                <TitleIcon source={titleIcon} />
                <PageTitle>
                    소울메이트
                </PageTitle>
            </TitleContainer>
        </Container>
    );
};
export default Friend;