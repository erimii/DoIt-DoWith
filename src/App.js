import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import Navigator from './screens/navigator';
import Styled from 'styled-components/native';



const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="default" />
      <Navigator />
    </Fragment>
  );
};
export default App;