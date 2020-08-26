import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// stylesheets import
import style from './Buttons.module.scss';

class LikeButton extends Component {
  state = {
      count: 0
      // likes: localStorage.getItem('likes') | 0
    }

  increment = () => {
        let newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
        
        // запись в localStorage()
        // this.setState(({likes}) => ({
        //   likes: likes + 1,
        // }), () => localStorage.setItem('likes', this.state.likes) );
      }

  render() {
    return (
      <button
        onClick={
          e =>{
            e.stopPropagation();
            this.increment();
          }
        }
        type="button"
        title="Нравится"
        className={style.btn_like}>

        <span className={style.liked_icon}>
          <FontAwesomeIcon icon="thumbs-up" />
        </span>
          {this.state.count}
      </button>
    )
  }

}

export default LikeButton;