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
      props.state.posts.map( (message) =>
        <Card
          id={message.id}
          key={message.id}
          message={message.message}
        />
    );


  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost();
    props.dispatch({ type: 'ADD-POST' });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;

    //props.updateNewPostText(text);
    let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    props.dispatch(action);
  }

  console.log(props.newPostText);


  return (
    <React.Fragment>

      {postElements}

      <div className={style.write_post}>
        <textarea 
          onChange={onPostChange}
          value={props.state.newPostText}
          ref={newPostElement}
          className={style.textarea}
        />

        <button onClick={ addPost } className={style.add_post} title="Добавить пост">
          <span className={style.icon}>
            <FontAwesomeIcon icon="plus" />
          </span>
        </button>
      </div>
    </React.Fragment>
  );
}

export default Posts;