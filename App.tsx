import React from 'react';
import MainNavigator from 'Navigators/MainNavigator';
import { Provider } from 'react-redux';
import store from 'Redux/store';

const App = () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
);

export default App;
