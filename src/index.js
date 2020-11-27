import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import WildfireContextProvider from './components/contexts/WildfireContext';

import './styles/main.scss';

ReactDOM.render(
    <React.StrictMode>
        <WildfireContextProvider>
            <App />
        </WildfireContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
