// импортируем библиотеку реакт чтобы,
// чтобы наше приложение распознало JSX
import React from 'react';

//import components
import ProfileNavbar from '../../navigation/ProfileNavbar';
import PersonalInfo from '../../personal-info/PersonalInfo';
import ProfileConstruct from '../../profile-construct/ProfileConstruct';

//import style's
import styles from './Profile.module.scss';




// component
const Profile = () => {
  return (
    <React.Fragment>
      <main className={styles.wrapp_page}>
        <section className={styles.profileSection}>
          <div className={styles.profileCover}>
            <ProfileNavbar />
            <PersonalInfo />
          </div>

          <ProfileConstruct />

        </section>
      </main>
    </React.Fragment>
  );
}

export default Profile;