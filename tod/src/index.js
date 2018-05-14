import React from 'react';
import ReactDOM from 'react-dom';
import Page from './containers/Page'
import {BrowserRouter} from 'react-router-dom';
import './style/main.css'
  
// ========================================
  
ReactDOM.render(
    <BrowserRouter>
        <Page />
    </BrowserRouter>,
    document.getElementById('root')
);
