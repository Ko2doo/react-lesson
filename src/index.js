/*
* File name = Index.js
* path = /src/index.js
* 
* Входной файл, вызываем в нём функцию renderEntireTree() и передаем ей необходимые параметры.
* В данный файл приходят изменения из state.js, и передаются дальше по компонентам
*/


import * as serviceWorker from './serviceWorker';

// Render.js
import {rerenderEntireTree} from './render';

// State.js
import state from './redux/state';

rerenderEntireTree(state);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
