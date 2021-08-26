/*
* File name = Index.js
* path = /src/index.js
* 
* Входной файл, вызываем в нём функцию renderEntireTree() и передаем ей необходимые параметры.
* В данный файл приходят изменения из state.js, и передаются дальше по компонентам
*/



// React
import React from 'react';
import ReactDOM from 'react-dom';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Default app stylesheet`s
import 'normalize.css';
import './assets/stylesheets.scss';

// Serviceworker
import App from './App';

import * as serviceWorker from './serviceWorker';

// State.js
import state from './redux/state';

// State import functions
import { addPost, updateNewPostText, subscribe } from './redux/state';

// Font Awesome icons library
library.add(fab, fas);


let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      {/* передаем наши данные в компонент app */}
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}


rerenderEntireTree(state);

// Функция коллбэк в которую передаем функцию rerenderEntireTree, и рендерим компоненты
subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
