import React from 'react';

import Card from './Card';

const Posts = (props) => {
  return (
    <React.Fragment>
      <section>
        <Card message='Привет как дела?' likedCount="3" dislikedCount="1" />
        <Card message='Мой первый пост' likedCount="25" dislikedCount="8" />
      </section>
    </React.Fragment>
  );
}

export default Posts;