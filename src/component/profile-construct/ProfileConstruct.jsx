import React from 'react';

import Sidebar from '../navigation/Sidebar';
import Post from '../posts/Post';

//import icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Style's import
import style from './ProfileConstruct.module.scss';

const ProfileConstruct = () => {
  return (
    <React.Fragment>
      <section className={style.section_wrapper}>
        <div className={style.settings_sidebar}>
          <Sidebar />
        </div>
        
        <div className={style.content_page}>
          <Post message='Привет как дела?' />
          <Post message='Мой первый пост' />
        </div>
        
        <div className={style.statusbar_sidebar}>
          right column
        </div>
      </section>
    </React.Fragment>
  );
}

export default ProfileConstruct;