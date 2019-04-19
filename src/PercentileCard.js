import React, { Component } from 'react';
import './css/card.scss';

class PercentileCard extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  /*componentDidMount() {
    this.nameInput.focus();
  }*/

  handleChange = event => {
    const val = event.target.value;
    this.setState({ value: val });
  };

  renderContent() {
    console.log(this.state.value);
    if (this.state.value.length === 0) {
      return (
        <div className="inputflex">
          <label htmlFor="calcSDLi">LENGTH</label>
          <input
            ref={input => input && input.focus()}
            onChange={this.handleChange}
            value={this.state.value}
            type="number"
            step="any"
            id="calcSDLi"
          />
        </div>
      );
    } else {
      return (
        <div>
          <div className="inputflex">
            <label htmlFor="calcSDLi">LENGTH</label>
            <input
              ref={input => input && input.focus()}
              onChange={this.handleChange}
              value={this.state.value}
              type="number"
              step="any"
              id="calcSDLi"
            />
          </div>
          <div className="calcSDoutput">
            <h1>{(this.state.value * 13.38).toFixed(2)}%</h1>
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
                <tr>
                  <td>Z-Score</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Classification</td>
                  <td>Micro</td>
                </tr>
                <tr>
                  <td>Times the Avg Size:</td>
                  <td>0.4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="calculatorcontainer">
        <div className="calculatorbox c1">{this.renderContent()}</div>
      </div>
    );
  }
}

export default PercentileCard;
