import React from 'react';

//import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Style's import
import style from './PersonalInfo.module.scss';

import userAvatar from '../../details/img/avatar.jpg';

const PersonalInfo = () => {
  return (
    <React.Fragment>
      <div className={style.profile}>
        <img className={style.user_avatar} src={userAvatar} alt={"avatar"}/>
        <h3 className={style.user_name}>Dmitry</h3>
        <span className={style.user_posit}>UI/UX Designer</span>
      </div>
    </React.Fragment>
  );
}

export default PersonalInfo;