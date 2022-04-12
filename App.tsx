/* eslint-disable prettier/prettier */
import React from 'react';
import Navigation from './src/routes/mainRouter';
import {Provider} from 'react-redux';
import store from './src/store/index';
const App = () => {
    return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
};


export default App;
