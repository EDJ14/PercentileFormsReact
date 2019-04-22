import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './css/card.scss';

class PercentileCard extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', inProp: false };
  }

  componentDidUpdate(prevProps, prevState) {
    document.querySelector('.' + this.props.className).focus();
  }

  handleChange = event => {
    const val = event.target.value;
    this.setState({ value: val });

    console.log(this.state);
  };

  renderContent() {
    // if (this.state.value.length === 0) {
    return (
      <div>
        <div className="inputflex">
          <label htmlFor="calcSDLi">Enter Height:</label>
          <input
            className={this.props.className}
            //ref={input => input && input.focus()}
            onChange={this.handleChange}
            value={this.state.value}
            type="number"
            step="any"
            id="calcSDLi"
          />
        </div>
        <CSSTransition in={this.state.inProp} timeout={500} classNames="fade">
          <div>
            <div className="calcSDoutput">
              <h1>{((this.state.value / 78) * 100).toFixed(2)}%</h1>
              <table>
                <tbody>
                  <tr>
                    <td>Average (SD):</td>
                    <td>6ft 8"</td>
                  </tr>
                  <tr>
                    <td>In NBA:</td>
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
                    <td>Times the Avg:</td>
                    <td>0.4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CSSTransition>
      </div>
    );
    /*  } else {
      return (
        <CSSTransition
          in={this.state.inProp}
          timeout={500}
          classNames="fade"
          onEnter={() => this.setState({ inProp: true })}
          onExited={() => this.setState({ inProp: false })}
        >
          <div>
            <div className="inputflex">
              <label htmlFor="calcSDLi">HEIGHT</label>
              <input
                //ref={input => input && input.focus()}
                className={this.props.className}
                onChange={this.handleChange}
                value={this.state.value}
                type="number"
                step="any"
                id="calcSDLi"
              />
            </div>

            <div>
              <div className="calcSDoutput">
                <h1>{((this.state.value / 78) * 100).toFixed(2)}%</h1>
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
          </div>
        </CSSTransition>
      );
    }*/
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
