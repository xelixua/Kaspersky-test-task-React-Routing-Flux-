import React, {Component} from 'react';

import './userTileSmall.css';

export default class UserTileSmall extends Component {
  constructor(props) {
    super(props);
    this._user = this.props.user;
    this._permissions = Array(this._user.permissions)
      .fill(0).map((val, index) => {
        return(
          <div className="col-md-4" key={index}>
            &#8413;
          </div>
        );
      });
  }

  render() {
    return(
      <div style={{border: '1px solid black', width: '100%'}}>
        <table style={{width: '100%'}}>
          <tbody>
            <tr>
              <td>
                {this._user.fullName}
              </td>
              <td>
              </td>
            </tr>
            <tr>
              <td style={{width: '50%'}}>
                {this._user.positition}
              </td>
              <td style={{width: '50%'}}>
                <div className="container">
                  <div className="row">
                    {this._permissions}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};
