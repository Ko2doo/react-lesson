import React from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//style's import
import style from './Posts.module.scss';

const Posts = (props) => {

  let messagesData = [
    {
      id: 1,
      message: "Привет как дела?",
      likedCount: 25,
      dislikedCount: 3
    },
    {
      id: 2,
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?",
      likedCount: 35,
      dislikedCount: 2
    },
    {
      id: 3,
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?",
      likedCount: 3,
      dislikedCount: 300
    }
  ];

  return (
    <React.Fragment>
      <Card
        id={messagesData[0].id}
        message={messagesData[0].message}
        likedCount={messagesData[0].likedCount}
        dislikedCount={messagesData[0].dislikedCount}
      />
      <Card
        id={messagesData[1].id}
        message={messagesData[1].message}
        likedCount={messagesData[1].likedCount}
        dislikedCount={messagesData[1].dislikedCount}
      />
      <Card
        id={messagesData[2].id}
        message={messagesData[2].message}
        likedCount={messagesData[2].likedCount}
        dislikedCount={messagesData[2].dislikedCount}
      />

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