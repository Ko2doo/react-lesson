import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// stylesheets import
import style from './Buttons.module.scss';

class DislikeButton extends Component {
  state = {
      count: 0
    }

  increment = () => {
        let newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
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
        title="Не нравится"
        className={style.btn_dislike}>

        <span className={style.dislike_icon}>
          <FontAwesomeIcon icon="thumbs-down" />
        </span>
          {this.state.count}
      </button>
    )
  }

}

export default DislikeButton;