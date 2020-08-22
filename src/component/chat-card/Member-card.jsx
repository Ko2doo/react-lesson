import React from 'react';

//import icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//style's import
import style from './Member-card.module.scss';


const MemberCard = (props) => {
  return (
    <div className={style.dialog__item}>
      <div className={style.card__head}>
        <img
          src={props.avatarURL}
          alt={props.memberName}
          className={style.avatar}
        />
      </div>
      
      <div className={style.card__body}>
        <p className={style.member_name}>
          {props.memberName}
        </p>
        <span className={style.member_status}>
          {props.memberStatus}
        </span>
      </div>
      
      <div className={style.card__footer}>
        <span className={style.date}>
          {props.lastTimeMessage}
        </span>
      </div>
    </div>
  );
}

export default MemberCard;