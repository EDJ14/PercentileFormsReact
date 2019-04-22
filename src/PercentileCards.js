import React from 'react';
import PercentileCard from './PercentileCard';

import './css/cards.scss';

class PercentileCards extends React.Component {
  componentDidMount() {
    document.querySelector('input').focus();
  }

  render() {
    return (
      <div className="cardscont">
        <PercentileCard className="firstcard" />
        <PercentileCard className="secondcard" />
      </div>
    );
  }
}

export default PercentileCards;
