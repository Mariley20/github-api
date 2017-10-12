import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import GithubModel from './GithubModel'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const model = new GithubModel();
const render = () => {
	ReactDOM.render(<App model = {model}/>, document.getElementById('root'));
}
model.subscribe(render);
render();

registerServiceWorker();
