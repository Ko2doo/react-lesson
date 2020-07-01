// импортируем библиотеку реакт чтобы,
// чтобы наше приложение распознало JSX
import React from 'react';

//import components
import Navbar from './Navbar';
import PersonalInfo from './PersonalInfo';

//import style's
import styles from './Profile.module.scss';

// component
const Profile = () => {
  return (
    <React.Fragment>
      <main className={styles.wrapp_page}>
        <section className={styles.profileSection}>
          <div className={styles.profileCover}>
            <Navbar />
            <PersonalInfo />
          </div>

        </section>
      </main>
    </React.Fragment>
  );
}

export default Profile;