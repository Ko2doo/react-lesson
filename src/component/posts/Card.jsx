import React from 'react';

//import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Style's import
import style from './Card.module.scss';

import userAvatar from '../details/img/avatar.jpg';

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
          <button type="button" className={style.btn_like}>
            <span className={style.liked_icon}>
              <FontAwesomeIcon icon="thumbs-up" />
            </span>
            
              {props.likedCount}
          </button>

          <button type="button" className={style.btn_dislike}>
            <span className={style.dislike_icon}>
              <FontAwesomeIcon icon="thumbs-down" />
            </span>

              {props.dislikedCount}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Card;