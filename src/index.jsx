import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'Components/app';
import { Provider } from 'react-redux';
import store from 'Components/app-store/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('container')
);
