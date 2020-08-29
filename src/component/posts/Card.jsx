import React from 'react';
import LikeButton from '../buttons/Like-btn';
import DislikeButton from '../buttons/Dislike-btn';

//Style's import
import style from './Card.module.scss';

import userAvatar from '../../assets/details/img/avatar.jpg';

const Card = (props) => {

  // console.log(props.message);

  return (
    <div className={style.card}>
      <img className={style.avatar} src={userAvatar} alt={"avatar"}/>
      
      <div className={style.blabla_place}>
        <p className={style.text}>
          {props.message}
        </p>
        
        <div className={style.count_place}>
          <LikeButton />
          <DislikeButton />
        </div>

      </div>
    </div>
  );
}

export default Card;