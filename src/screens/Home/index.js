import React, {useState} from 'react';
import Styled from 'styled-components/native';
import titleIcon from '../../images/icons/ic-home-title.png';
import Doing from './Doing';
import WillDo from './WillDo';
import Done from './Done';


const Container = Styled.View``;

const TitleContainer = Styled.View`
    flex-direction: row;
    margin: 26px 0 26px 16px;
`;

const TitleIcon = Styled.Image``;

const Title = Styled.Text`
    font-family: 'Pretendard-Black';
    font-size: 21px;
    line-height: 25px;
    color: #303030;
    margin-left:8px;
`;

const TabContainer = Styled.View`
    flex-direction: row;
    margin-left:16px;
`;
const LabelWrapper = Styled.TouchableOpacity`
    align-items: center;
    border-color:#4388EE;
    margin-right: 12px;
    padding-bottom: 4px;
`;
const Label = Styled.Text`
    font-family: 'Pretendard-Black';
    font-size: 16px;
    line-height: 19px;
`;


const Home = ({navigation}) => {
    const [tabIndex, setTabIndex] = useState(0);
    const tabs = ['Doing', 'Will Do', 'Done'];
    return(
        <Container>
        <TitleContainer>
            <TitleIcon source={titleIcon} />
            <Title>
                두윗?두잇!
            </Title>
        </TitleContainer>

        <TabContainer>
            {tabs.map((label, index) => (
              <React.Fragment key={index}>
                
                <LabelWrapper
                  onPress={() => setTabIndex(index)}
                  style={{borderBottomWidth: tabIndex === index ? 2 : 0}}
                >
                  <Label
                    style={{
                      color: tabIndex === index ? '#4388EE' : '#A9AFB9',
                    }}
                  >
                    {label}
                  </Label>
                </LabelWrapper>
              
              </React.Fragment>
            ))}
          </TabContainer>

          {
              tabIndex === 0?
              <Doing />
              : tabIndex === 1?
              <WillDo />
              :
              <Done />
          }
        
        </Container>
    );
};
export default Home;