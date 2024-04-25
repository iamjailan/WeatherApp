import React from 'react';
import MainNavigator from './navigation';
import {Provider} from 'react-redux';
import {appPersist, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={appPersist}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
