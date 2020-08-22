import React from 'react';
import MemberCard from '../chat-card/Member-card';
import MessageCard from '../message-card/Message-card';
import { BrowserRouter, NavLink } from 'react-router-dom';

//import icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//style's import
import style from './Dialogs.module.scss';

import avatar from '../details/img/avatar.jpg';
import avatar2 from '../details/img/avatar2.png';



const Dialogs = (props) => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <section className={style.members_dialog}>
          <ul className={style.dialogs__list}>
            <li className={style.list__item}>
              <MemberCard
                id="1"
                avatarURL={avatar}
                memberName="Joe"
                lastTimeMessage="18:04"
                memberStatus="online"
              />
            </li>

            <li className={style.list__item}>
              <MemberCard
                id="2"
                avatarURL={avatar2}
                memberName="John Cena"
                lastTimeMessage="14:48"
                memberStatus="offline"
              />
            </li>
          </ul>

          <div className={style.dialogs__messages}>

            <MessageCard
              avatarURL={avatar}
              authorName="Me"
              message="Hi John!"
            />

            <MessageCard
              avatarURL={avatar2}
              authorName="John Cena"
              message="Hi my dear friend! How are you?"
            />

            <MessageCard
              avatarURL={avatar}
              authorName="Me"
              message="Nice, John"
            />

          </div>
        </section>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default Dialogs;