import React from 'react';

import Sidebar from '../navigation/Sidebar';
import Posts from '../posts/Posts';
import Dialogs from '../dialogs/Dialogs';

import {Route, BrowserRouter} from 'react-router-dom';

//import icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Style's import
import style from './ProfileConstruct.module.scss';

const ProfileConstruct = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <section className={style.section_wrapper}>
          <div className={style.settings_sidebar}>
            <Sidebar />
          </div>
          
          <div className={style.content_page}>
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/posts" component={Posts} />
          </div>
          
          <div className={style.statusbar_sidebar}>
            right column
          </div>
        </section>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default ProfileConstruct;