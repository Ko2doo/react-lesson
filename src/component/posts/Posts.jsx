import React from 'react';
import Card from './card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//style's import
import style from './Posts.module.scss';

const Posts = (props) => {

  // немного улучшаем наш маппинг,
  // чтобы обращаться через props дописываем props.posts к функции map() чтобы 
  // потом вызвать с помощью пропсов и
  // отрисовать на странице то что у нас находится в компоненте <Card /> т.е. 
  // наши посты:
  // <Posts posts={posts} />
  let postElements =
      props.posts.map( (message) =>
        <Card
          id={message.id}
          key={message.id}
          message={message.message}
        />
    );

  return (
    <React.Fragment>

      {postElements}

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