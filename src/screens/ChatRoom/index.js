import React, { Fragment } from 'react';
import Styled from 'styled-components/native';
import {DrawerActions} from '@react-navigation/native';
import IconButton from '../../components/IconButton';
import Button from '../../components/Button';
import { gridWidth, windowWidth } from '../../values';


const Container = Styled.ScrollView`
    background: #F7F7F9;
`;

const HeaderContainer = Styled.View`
`;

const HeaderTitleContainer = Styled.View`
    flex-direction: row;
    align-items: center;
    padding: 18px 0;
    margin: 0 16px;
`;

const Title = Styled.Text`
    font-family: 'Pretendard-Bold'
    font-size: 15px;
    line-height: 18px;
    color: #1D1D1D;
    margin-left: 19px;
`;


const DoingContainer = Styled.View`
    flex-direction: row;
    border-top-width: 1px;
    border-color: #F7F7F9;
    width: ${windowWidth-gridWidth-16}px;
    margin-left: auto;
    padding: 8px 0;
`;

const MissionInfoContainer = Styled.View`
    flex-direction: row;
    align-items: center;
`;

const MissionInfoText = Styled.Text`
    font-family: 'Pretendard-Light';
    font-size: 11px;
    line-height: 13px;
    color: #30353D;
`;

const VerticalLine = Styled.View`
    width: 1px;
    height: 7px;
    background: #DADFEC;
    margin: 0 8px;
`;

const ChatRoom = ({navigation}) => {
    return(
        <Fragment>
            <HeaderContainer>
                <HeaderTitleContainer>
                <IconButton
                    name='temp'
                    onPress={() => navigation.goBack()}
                />
                <Title>
                    일상을 건강하게 비타민 충전
                </Title>
                <IconButton
                    name='temp'
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    style={{
                        marginLeft: 'auto',
                    }}
                />
                </HeaderTitleContainer>
                {
                    1 &&
                    <DoingContainer>
                        <MissionInfoContainer>
                            <MissionInfoText>
                                21.08.02. ~ 21.08.15.
                            </MissionInfoText>
                            <VerticalLine />
                            <MissionInfoText>
                                남은 인증 6회
                            </MissionInfoText>
                        </MissionInfoContainer>

                        <Button
                            label='인증할래?'
                            onPress={() => navigation.navigate('Certification')}
                            buttonStyle={{
                                paddingTop: 7,
                                paddingBottom: 7,
                                marginLeft: 'auto',
                                width: 95,
                            }}
                        />
                    </DoingContainer>
                }
                
            </HeaderContainer>
            <Container>

            

            </Container>
        </Fragment>
    );
};
export default ChatRoom;