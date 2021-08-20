/*
* State.js
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


*/

// временно храним тут пути к аватарам:
// импортируем до App
import avatar from '../assets/details/img/avatar.jpg';
import avatar2 from '../assets/details/img/avatar2.png';



let state = {

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
      },
    ]

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


}

export default state;