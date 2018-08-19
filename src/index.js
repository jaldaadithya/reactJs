import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFontLoader from 'webfontloader';
import {Provider} from 'react-redux';
import configureSore from './store/configureSore';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

const store = configureSore();

ReactDOM.render(
<Provider store={store}>
        <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
