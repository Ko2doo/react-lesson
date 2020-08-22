import React from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//style's import
import style from './Posts.module.scss';

const Posts = (props) => {
  return (
    <React.Fragment>
      <Card message='Привет как дела?' likedCount="3" dislikedCount="1" />
      <Card message='Мой первый пост' likedCount="25" dislikedCount="8" />

      <div className={style.write_post}>
        <textarea className={style.textarea}>

        </textarea>

        <button className={style.add_post} title="Добавить пост">
          <span className={style.icon}>
            <FontAwesomeIcon icon="plus" />
          </span>
        </button>
      </div>
    </React.Fragment>
  );
}

export default Posts;