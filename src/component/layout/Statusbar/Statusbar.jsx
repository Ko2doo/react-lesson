import React from 'react';
import FriendStatusCard from '../../Cards/StatusCard/FriendStatusCard';

import style from './Statusbar.module.scss';


const Statusbar = (props) => {

  let friendCard =
      props.state.friendStatusCard.map( (friendCard) => 
        <FriendStatusCard
          id={friendCard.id}
          key={friendCard.id}
          avatarURL={friendCard.avatarURL}
          memberName={friendCard.memberName}
          lastTimeMessage={friendCard.lastTimeMessage}
          memberStatus={friendCard.memberStatus}
        />
      );


  return (
    <React.Fragment>
      <aside className={style.sidebar_list}>
        <ul className={style.lists}>

          {friendCard}

        </ul>
      </aside>
    </React.Fragment>
  );
}

export default Statusbar;