import React from 'react';
import MemberCard from '../chat-card/Member-card';
import MessageCard from '../message-card/Message-card';
// import { BrowserRouter, NavLink } from 'react-router-dom';

//import icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//style's import
import style from './Dialogs.module.scss';

import avatar from '../../assets/details/img/avatar.jpg';
import avatar2 from '../../assets/details/img/avatar2.png';



const Dialogs = (props) => {

  // данные onn
  let membersData = [
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
  ];

  let messagesData = [
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
  ];
  // данные off

  // преобразование данных, и рендеринг на странице наших компонентов, с данными
  // рисуем с помощью map() наши карточки пользователей в левом столбце,
  // данные берем из массива membersData
  let dialogsElement = membersData
    .map( (memberCard) => 
        <MemberCard
          id={memberCard.id}
          key={memberCard.id}
          avatarURL={memberCard.avatarURL}
          memberName={memberCard.memberName}
          lastTimeMessage={memberCard.lastTimeMessage}
          memberStatus={memberCard.memberStatus}
        />
    );


  let messagesElements = messagesData
    .map( (message) =>
      <MessageCard
        id={message.id}
        key={message.id}
        avatarURL={message.avatarURL}
        authorName={message.authorName}
        message={message.message}
      />
    );


  return (
      <React.Fragment>
        <section className={style.members_dialog}>
          <ul className={style.dialogs__list}>
            {dialogsElement}
          </ul>

          <div className={style.dialogs__messages}>
            {messagesElements}
          </div>
        </section>
      </React.Fragment>
  );
}

export default Dialogs;