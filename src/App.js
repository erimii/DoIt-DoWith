import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import Navigator from './screens/navigator';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/rootReducer';

const store = configureStore({
  reducer: rootReducer
});

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <StatusBar barStyle="default" />
        <Navigator />
      </Fragment>
    </Provider>
  );
};
export default App;