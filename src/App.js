import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
// импортируем наши компоненты
import Header from './component/layout/header/Header.jsx';
import Footer from './component/layout/footer/Footer.jsx';
import Dialogs from './component/dialogs/Dialogs.jsx';
import Posts from './component/posts/Posts.jsx';


//import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Style's import
import style from './component/page-construct/PageConstruct.module.scss';
import styles from './component/page-construct/Sidebar.module.scss';


const App = (props) => {

  return (
    <BrowserRouter>
      <React.Fragment>
        <div className="App">
          <Header />
          <div className="App-wrapper">
            <main className="wrapp-page">
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
                  
                  <Route path="/dialogs" render={ () => <Dialogs /> } />
                  <Route path="/posts" render={ () => 
                    <Posts posts={props.posts} /> }
                  />

                </div>
                
                <div className={style.statusbar_sidebar}>
                  right column
                </div>
              </section>
            </main>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}


export default App;
