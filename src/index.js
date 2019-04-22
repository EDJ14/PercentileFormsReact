import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';

import transitionExample from './Hello';
import PercentileCards from './PercentileCards';
import Sidebar from './Sidebar';
import ScrollProg from './ScrollProg';
import ScrollProgClass from './ScrollProgClass';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id="root2">
          <Route path="/" component={Sidebar} />
          <Route exact path="/scroll" component={ScrollProg} />
          <Route exact path="/scrollclass" component={ScrollProgClass} />
          <Route exact path="/transition" component={transitionExample} />
          <Route exact path="/percent" component={PercentileCards} />
        </div>
      </BrowserRouter>
    );
  }
}

import reducers from './reducers';
const store = createStore(reducers, {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
