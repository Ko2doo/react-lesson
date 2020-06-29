// импортируем библиотеку реакт чтобы,
// чтобы наше приложение распознало JSX
import React from 'react';

//import style's
import styles from './Content.module.scss';

import titlePrev from '../../details/img/nice.jpg';
import authorAva from '../../details/img/avatar.jpg';

// component
const Content = () => {
  return (
    <React.Fragment>
      <main className={styles.wrapp_page}>
        <section className={styles.postSection}>
          <img className={styles.postSection_prev} src={titlePrev} alt={"landscape"}/>

          <div className={styles.postSection_authorCard}>
            <div className={styles.postSection_personalInfo}>
              <img className={styles.postSection_authorAva} src={authorAva} alt={"avatar"}/>

              <ul className={styles.postSection_listInfo}>
                <li>Date of Birth: 10 October</li>
                <li>City: Tashkent</li>
                <li>Education: proweb</li>
                <li>GitHub: https://github.com/Ko2doo</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Content;