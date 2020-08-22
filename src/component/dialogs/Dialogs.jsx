import React from 'react';
import MemberCard from '../chat-card/Member-card';
import MessageCard from '../message-card/Message-card';

//import icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//style's import
import style from './Dialogs.module.scss';

import avatar from '../details/img/avatar.jpg';
import avatar2 from '../details/img/avatar2.png';



const Dialogs = (props) => {
  return (
    <React.Fragment>
      <section className={style.members_dialog}>
        <div className={style.dialogs__list}>
          <MemberCard
            avatarURL={avatar}
            memberName="Joe"
            lastTimeMessage="18:04"
            memberStatus="online"
          />

          <MemberCard
            avatarURL={avatar2}
            memberName="John Cena"
            lastTimeMessage="14:48"
            memberStatus="offline"
          />
       </div>

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
  );
}

export default Dialogs;