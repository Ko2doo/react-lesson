import React from 'react';
import MemberCard from '../chat-card/Member-card';
import MessageCard from '../message-card/Message-card';
// import { BrowserRouter, NavLink } from 'react-router-dom';

//import icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//style's import
import style from './Dialogs.module.scss';

import avatar from '../details/img/avatar.jpg';
import avatar2 from '../details/img/avatar2.png';



const Dialogs = (props) => {

  let dialogsData = [
    {
      id: 1,
      avatarURL: {avatar},
      memberName: "Joe",
      lastTimeMessage: "18:04",
      memberStatus: "online"
    },
    {
      id: 2,
      avatarURL: {avatar2},
      memberName: "John Cena",
      lastTimeMessage: "14:48",
      memberStatus: "offline"
    }
  ];

  let messagesData = [
    {
      id: 1,
      avatarURL: {avatar},
      authorName: "Me",
      message: "Hi John!"
    },
    {
      id: 2,
      avatarURL: {avatar2},
      authorName: "John Cena",
      message: "Hi my dear friend! How are you?"
    },    
    {
      id: 3,
      avatarURL: {avatar},
      authorName: "Me",
      message: "Nice, John"
    }
  ];

  return (
      <React.Fragment>
        <section className={style.members_dialog}>
          <ul className={style.dialogs__list}>
            <li className={style.list__item}>
              <MemberCard
                id={dialogsData[0].id}
                avatarURL={dialogsData[0].avatarURL}
                memberName={dialogsData[0].memberName}
                lastTimeMessage={dialogsData[0].lastTimeMessage}
                memberStatus={dialogsData[0].memberStatus}
              />
            </li>

            <li className={style.list__item}>
              <MemberCard
                id={dialogsData[1].id}
                avatarURL={dialogsData[1].avatarURL}
                memberName={dialogsData[1].memberName}
                lastTimeMessage={dialogsData[1].lastTimeMessage}
                memberStatus={dialogsData[1].memberStatus}
              />
            </li>
          </ul>

          <div className={style.dialogs__messages}>

            <MessageCard
              id={messagesData[0].id}
              avatarURL={messagesData[0].avatarURL}
              authorName={messagesData[0].authorName}
              message={messagesData[0].message}
            />

            <MessageCard
              id={messagesData[1].id}
              avatarURL={messagesData[1].avatarURL}
              authorName={messagesData[1].authorName}
              message={messagesData[1].message}
            />

            <MessageCard
              id={messagesData[2].id}
              avatarURL={messagesData[2].avatarURL}
              authorName={messagesData[2].authorName}
              message={messagesData[2].message}
            />

          </div>
        </section>
      </React.Fragment>
  );
}

export default Dialogs;