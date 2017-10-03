import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
    return (
        <div>
            <h1>Now I Do What I Want</h1>
            <h2>By Anuj Shah</h2>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
