import React, { Component } from 'react';
import './css/card.scss';

class PercentileCard extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '---' };
  }

  render() {
    return (
      <div className="calculatorcontainer">
        <div className="calculatorbox c1">
          <div className="inputflex">
            <label htmlFor="calcSDLi">LENGTH</label>
            <input type="number" step="any" id="calcSDLi" />
          </div>
          <div className="calcSDoutput">
            <h1>87.8%</h1>
            <table>
              <tbody>
                <tr>
                  <td>Average (SD):</td>
                  <td>5.64"</td>
                </tr>
                <tr>
                  <td>In a room of n guys:</td>
                  <td>122</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default PercentileCard;
