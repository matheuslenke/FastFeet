import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import '~/config/ReactotronConfig';

import { store, persistor } from './store';
import App from './App';

export default function index() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
