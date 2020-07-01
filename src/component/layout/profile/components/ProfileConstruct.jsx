import React from 'react';

import Sidebar from '../../../navigation/Sidebar';

//import icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Style's import
import style from './css_module/ProfileConstruct.module.scss';

const ProfileConstruct = () => {
  return (
    <React.Fragment>
      <section className={style.section_wrapper}>
        <div className={style.settings_sidebar}>
          <Sidebar />
        </div>
        
        <div className={style.content_page}>
          content
        </div>
        
        <div className={style.statusbar_sidebar}>
          right column
        </div>
      </section>
    </React.Fragment>
  );
}

export default ProfileConstruct;