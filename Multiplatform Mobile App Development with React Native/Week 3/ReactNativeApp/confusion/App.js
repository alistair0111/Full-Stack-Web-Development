import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import React from 'react';
import Main from './components/MainComponent';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Loading } from './components/LoadingComponent';


const { store, persistor } = ConfigureStore();

export default function App() {
  return (
    <Provider store = {store}>
      <PersistGate
        loading={<Loading/>}
        persistor={persistor}
        >
        <Main />
      </PersistGate>
    </Provider>
  );
}
