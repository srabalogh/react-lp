import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import IndexPage from './pages';

ReactDOM.render(<IndexPage />, document.getElementById('root'));
registerServiceWorker();
