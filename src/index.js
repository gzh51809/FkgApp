import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {HashRouter} from 'react-router-dom';

// import * as serviceWorker from './serviceWorker';

render(
    <HashRouter>
        <App />
    </HashRouter>, 
    document.getElementById('app')
);


// serviceWorker.unregister();
