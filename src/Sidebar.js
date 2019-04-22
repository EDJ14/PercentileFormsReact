import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/sidebar.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: null };
  }

  componentDidMount() {
    this.setState({ selected: this.props.location.pathname });
  }

  handleClick1 = () => {
    this.setState({ selected: '/bbc' });
  };

  handleClick2 = () => {
    this.setState({ selected: '/form' });
  };

  handleClick3 = () => {
    this.setState({ selected: '/percent' });
  };

  render() {
    return (
      <aside className="rightmenu">
        <nav className="mainsitenavigation">
          <ul>
            <li>Home</li>
            <li>WIP Chart</li>
            <li>Full Calculator</li>
            <Link to="/percent">
              <li>Percentage</li>
            </Link>
            <li>Dataset List</li>
            <li>The Calculations</li>
            <Link to="/form">
              <li>Form</li>
            </Link>
            <Link to="/scroll">
              <li>ScrollBar</li>
            </Link>
            <li>Changelog</li>
            <li>About/Feedback</li>
            <li>Other Websites</li>
            <li>Switch Themes</li>
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Sidebar;
