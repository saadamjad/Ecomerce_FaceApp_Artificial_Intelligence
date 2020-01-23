import React from 'react';

import StackNavigator from './src/screens/Stacknavigator';
import store from './src/redux/store/store';
import {Provider} from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    );
  }
}
