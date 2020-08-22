import React from 'react';

import Posts from '../posts/Posts';
import Dialogs from '../dialogs/Dialogs';

import {BrowserRouter, Route, NavLink} from 'react-router-dom';

//import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Style's import
import style from './PageConstruct.module.scss';
import styles from './Sidebar.module.scss';

const PageConstruct = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <section className={style.section_wrapper}>
          <div className={style.settings_sidebar}>
            <aside className={styles.sidebar}>
              <nav className={styles.nav_item}>
                <ul>
                  <li className={styles.nav_li_item}>
                    <span className={styles.nav_icon_default}>
                      <FontAwesomeIcon icon="comments" />
                    </span>
                    <NavLink
                      to="/dialogs"
                      className={styles.nav_link}
                      activeClassName={styles.is_active}>
                        Диалоги
                    </NavLink>
                  </li>

                  <li className={styles.nav_li_item}>
                    <span className={styles.nav_icon_default}>
                      <FontAwesomeIcon icon="comment-dots" />
                    </span>
                    <NavLink
                      to="/posts"
                      className={styles.nav_link}
                      activeClassName={styles.is_active}>
                        Посты
                    </NavLink>
                  </li>

                  <li className={styles.nav_li_item}>
                    <span className={styles.nav_icon_default}>
                      <FontAwesomeIcon icon="user-graduate" />
                    </span>
                    <a href="#/" className={styles.nav_link}>Education and work</a>
                  </li>
                  
                  <li className={styles.nav_li_item}>
                    <span className={styles.nav_icon_default}>
                      <FontAwesomeIcon icon="user-cog" />
                    </span>
                    <a href="#/" className={styles.nav_link}>Settings</a>
                  </li>
                  
                  <li className={styles.nav_li_item}>
                    <span className={styles.nav_icon_default}>
                      <FontAwesomeIcon icon="key" />
                    </span>
                    <a href="#/" className={styles.nav_link}>Change password</a>
                  </li>

                </ul>
              </nav>
            </aside>
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

export default PageConstruct;