import React from 'react';

//import icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//style's import
import style from './Message-card.module.scss';


const MessageCard = (props) => {
  return (
    <article className={style.message_item}>
      <div className={style.member__block}>
        <img
          src={props.avatarURL}
          alt={props.memberName}
          className={style.avatar}
        />

        <span className={style.member_name}>
          {props.authorName}
        </span>
      </div>
      
      <div className={style.message__block}>
        <p className={style.message}>
          {props.message}
        </p>
      </div>

    </article>
  );
}

export default MessageCard;