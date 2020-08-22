import React from 'react';

//import icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//style's import
import style from './Message-card.module.scss';


const MessageCard = (props) => {
  return (
    <div className={style.message_item}>
      <div className={style.card__head}>
        <img
          src={props.avatarURL}
          alt={props.memberName}
          className={style.avatar}
        />

        <span className={style.author_name}>
          {props.authorName}
        </span>
      </div>
      
      <div className={style.card__body}>
        <p className={style.message}>
          {props.message}
        </p>
      </div>

    </div>
  );
}

export default MessageCard;