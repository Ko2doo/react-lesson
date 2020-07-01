import React from 'react';

//import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Style's import
import style from './Navbar.module.scss';

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className={style.navbar_item}>
        <ul className={style.navbar_list}>
          <li>
            <a href="#/">
              <span className={style.icon_default}><FontAwesomeIcon icon="user" /></span>
              Profile
            </a>
          </li>
          <li>
            <a href="#/">
            <span className={style.icon_default}><FontAwesomeIcon icon="envelope" /></span>
              Messages
            </a>
          </li>
          <li>
            <a href="#/">
            <span className={style.icon_default}><FontAwesomeIcon icon="headphones" /></span>
              Music
            </a>
          </li>
          <li>
            <a href="#/">
            <span className={style.icon_default}><FontAwesomeIcon icon="newspaper" /></span>
              News
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;