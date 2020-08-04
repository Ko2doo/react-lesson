import React from 'react';

//import icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Style's import
import style from './Post.module.scss';

import userAvatar from '../details/img/avatar.jpg';

const Post = (props) => {

  // console.log(props.message);

  return (
    <div className={style.card}>
      <img className={style.avatar} src={userAvatar} alt={"avatar"}/>
      
      <div className={style.blabla_place}>
        <p className={style.text}>
          {props.message}
        </p>
      </div>
    </div>
  );
}

export default Post;