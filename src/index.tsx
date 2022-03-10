import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import GlobalStyles from './globaStyles';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './store';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
