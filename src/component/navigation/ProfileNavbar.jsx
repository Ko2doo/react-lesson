import React from 'react';
import classNames from 'classnames';

//import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Style's import
import style from './ProfileNavbar.module.scss';

const ProfileNavbar = () => {
  return (
    <React.Fragment>
      <nav className={style.navbar_item}>
        <button className={style.btn_burger_menu}>
          <span className={style.icon_menu}><FontAwesomeIcon icon="bars" /></span>
        </button>
        <div className={style.menu_item}>
          <ul className={style.navbar_list}>
            <li className={classNames(style.navbar_li_item)}>
              <a href="#/" className={style.navbar_link_item}>
                <span className={style.icon_default}><FontAwesomeIcon icon="user" /></span>
                Profile
              </a>
            </li>
            <li className={classNames(style.navbar_li_item)}>
              <a href="/dialogs" className={style.navbar_link_item}>
              <span className={style.icon_default}><FontAwesomeIcon icon="envelope" /></span>
                Messages
              </a>
            </li>
            <li className={classNames(style.navbar_li_item)}>
              <a href="/posts" className={style.navbar_link_item}>
              <span className={style.icon_default}><FontAwesomeIcon icon="newspaper" /></span>
                Posts
              </a>
            </li>
            <li className={classNames(style.navbar_li_item)}>
              <a href="#/" className={style.navbar_link_item}>
              <span className={style.icon_default}><FontAwesomeIcon icon="headphones" /></span>
                Music
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default ProfileNavbar;