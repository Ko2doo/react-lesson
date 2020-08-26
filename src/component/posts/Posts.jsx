import React from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//style's import
import style from './Posts.module.scss';

const Posts = (props) => {

  let messagesData = [
    {
      id: 1,
      message: "Привет как дела?"
    },
    {
      id: 2,
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?"
    },
    {
      id: 3,
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore necessitatibus maiores nam?"
    }
  ];

  return (
    <React.Fragment>
      <Card
        id={messagesData[0].id}
        message={messagesData[0].message}
      />
      <Card
        id={messagesData[1].id}
        message={messagesData[1].message}
      />
      <Card
        id={messagesData[2].id}
        message={messagesData[2].message}
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