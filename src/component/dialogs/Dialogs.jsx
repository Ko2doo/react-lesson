import React from 'react';
import MemberCard from './member-card/Member-card';
import MessageCard from './message-card/Message-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//style's import
import style from './Dialogs.module.scss';


const Dialogs = (props) => {

  // преобразование данных, и рендеринг на странице наших компонентов, с данными
  // рисуем с помощью map() наши карточки пользователей в левом столбце,
  // данные берем из массива membersData
 let dialogsElement =
      props.state.membersCard.map( (memberCard) => 
        <MemberCard
          id={memberCard.id}
          key={memberCard.id}
          avatarURL={memberCard.avatarURL}
          memberName={memberCard.memberName}
          lastTimeMessage={memberCard.lastTimeMessage}
          memberStatus={memberCard.memberStatus}
        />
    );


  let messagesElements =
      props.state.messages.map( (message) =>
        <MessageCard
          id={message.id}
          key={message.id}
          avatarURL={message.avatarURL}
          authorName={message.authorName}
          message={message.message}
        />
    );


  let newMsgElement = React.createRef();

  let sendMsg = () => {
    let txt = newMsgElement.current.value;
    alert(txt);
  }


  return (
      <React.Fragment>
        <section className={style.members_dialog}>
          <ul className={style.dialogs__list}>
            {dialogsElement}
          </ul>

          <div className={style.dialogs__messages}>
            <div className={style.dialog__wrapp}> 
              {messagesElements}
            </div>

            <div className={style.read_message}>
              <textarea ref={ newMsgElement } className={style.textarea}></textarea>

              <button onClick={ sendMsg } className={style.add_message} title="Отправить сообщение">
                <span className={style.icon}>
                  <FontAwesomeIcon icon="paper-plane" />
                </span>
              </button>

            </div>

          </div>
        </section>
      </React.Fragment>
  );
}

export default Dialogs;