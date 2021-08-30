/*
* File name = State.js
* Path = /src/redux/state.js
*
* Collection of arrays of data
* Хранение данных осуществляется в переменной state, в виде массива
* 
* ! scheme for adding new objects to the state array:
* ! схема добавления новых объектов в массив state:
*
* let state = {
*
*    newObj: {
*      newSubObj: [
*        your data
*      ]
*    }
*
*}
*
*
*/

// временно храним тут пути к аватарам:
// импортируем до App
import { useReducer } from 'react';
import avatar from '../assets/details/img/avatar.jpg';
import avatar2 from '../assets/details/img/avatar2.png';


// Хранилище объектов
// _ нижнее подчеркивание означает что это функиця/объект приватны
let store = {
  _state: {

    dialogsPage: {
  
      membersCard: [
        {
          id: 1,
          avatarURL: avatar,
          memberName: "Joe",
          lastTimeMessage: "18:04",
          memberStatus: "online"
        },
        {
          id: 2,
          avatarURL: avatar2,
          memberName: "John Cena",
          lastTimeMessage: "14:48",
          memberStatus: "offline"
        }
      ],
  
      messages: [
        {
          id: 1,
          avatarURL: avatar,
          authorName: "Me",
          message: "Hi John!"
        },
        {
          id: 2,
          avatarURL: avatar2,
          authorName: "John Cena",
          message: "Hi my dear friend! How are you?"
        },    
        {
          id: 3,
          avatarURL: avatar,
          authorName: "Me",
          message: "Nice, John"
        }
      ]
    },
  
    postPage: {
  
      posts: [
        {
          id: 1,
          message: "Привет как дела?"
        },
        {
          id: 2,
          message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?"
        },
        {
          id: 3,
          message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?"
        },
        {
          id: 4,
          message: "Lorem ipsum dolor si"
        }
      ],
  
      newPostText: "Some text.."
  
    },
  
    sidebar: {
   
      statusbar: {
  
        friendStatusCard: [
          {
            id: 1,
            avatarURL: avatar,
            memberName: "Joe",
            lastTimeMessage: "18:04",
            memberStatus: "online"
          },
          {
            id: 2,
            avatarURL: avatar2,
            memberName: "John Cena",
            lastTimeMessage: "14:48",
            memberStatus: "offline"
          }
        ]
   
      }
    }
  
  
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  // Следим за состоянием
  subscribe(observer) {
    this._callSubscriber = observer; // паттерн наблюдатель
  },

  // Метод при использовании которого, меняем внутри state что либо.
  // передаём в dispatch объекты экшены
  dispatch(action) { // { type: 'ADD-POST' }
    
    // Если у action тип равен и 'наше значение',
    // Иначе если, тип будет равен другому значению, то делаем другое условие
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.postPage.newPostText,
      };

      this._state.postPage.posts.push(newPost);
      this._state.postPage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        this._state.postPage.newPostText = action.newText;
        this._callSubscriber(this._state);
    }


  }


}




window.store = store;


export default store;

// store - OOP