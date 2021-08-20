import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'normalize.css';
import './assets/stylesheets.scss';

import state from './redux/state';
import { addPost } from './redux/state';

import App from './App';
import * as serviceWorker from './serviceWorker';


library.add(fab, fas);


ReactDOM.render(
  <React.StrictMode>
    {/* передаем наши данные в компонент app */}
    <App state={state} addPost={addPost} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
