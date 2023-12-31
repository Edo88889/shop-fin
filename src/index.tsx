import React from 'react';
import ReactDOM from 'react-dom/client';
import {I18nextProvider} from 'react-i18next';
import i18n from './18n';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <I18nextProvider i18n={i18n}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </I18nextProvider>
);
