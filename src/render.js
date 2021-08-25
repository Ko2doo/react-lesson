/*
* file name = Render.js
* path = srs/render.js
*
* Обрабатываем изменения приходящие в state.js, и рендерим страницу каждый раз,
* когда в state.js что то изменилось.
*
*
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

// State, and other functions
import { addPost, updateNewPostText } from './redux/state';

// Font Awesome icons library
library.add(fab, fas);


export let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      {/* передаем наши данные в компонент app */}
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}