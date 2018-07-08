import React, {Component} from 'react';

import './userTile.css';

export default class UserTile extends Component {
  render() {
    return(
      <div>
        <table>
        <tbody>
          <tr>
            <td>
              <input type="checkbox"/>
            </td>
            <td></td>
            <td><p className="cloud">&#9729;</p></td>
          </tr>
          <tr>
            <td></td>
            <td className="tile-content">
              <p className="text-content">{this.props.user.fullName}</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="tile-content">
              <img alt="user" src={this.props.user.photo}></img>
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="tile-content">
              <p className="text-content">{this.props.user.group}</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="tile-content">
              <p className="text-content">{this.props.user.phone}</p>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }
}
