import React, {Component} from 'react';
import './home.css';

export default class Home extends Component {
  render() {
    return(
      <div className="Home">
        Привет. <br/>Мой создатель очень хочет у вас работать.
        <br/><br/>
        Посмотрите, пожалуйста на список <a href="/users">пользователей</a>
        <br/><br/>
        Спасибо
      </div>
    );
  }
}
